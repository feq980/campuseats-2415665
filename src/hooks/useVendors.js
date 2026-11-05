import { useEffect, useState } from 'react'

// Hides the Week 3 fetch / loading / error logic behind one call.
export function useVendors() {
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    fetch('/api/vendors.json', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      // same as .then((data) => setVendors(data))
      .then(setVendors)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [reloadKey])

  // TODO: const reload = () => ...
  // Hint: the same line your Try again button used in Week 3 (e.g., incrementing reloadKey)
  const reload = () => setReloadKey((prev) => prev + 1)

  return { vendors, loading, error, reload }
}