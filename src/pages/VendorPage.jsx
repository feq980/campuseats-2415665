import { Link, useParams, useSearchParams } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function VendorPage() {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const cat = searchParams.get('cat') ?? ''

  const { vendors, loading, error, reload } = useVendors()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  // Find the vendor whose v.id === id
  const vendor = vendors.find((v) => v.id === id)

  if (!vendor) {
    return (
      <section>
        <h2 className="section-title">Vendor not found</h2>
        <p className="muted">
          There is no vendor called "{id}". <Link to="/">Back to vendors</Link>
        </p>
      </section>
    )
  }

  // Filter menu items based on the 'cat' URL search parameter
  const shown = vendor.menu.filter((item) =>
    cat === '' ? true : item.category === cat
  )

  return (
    <section>
      <p><Link to="/">← All vendors</Link></p>
      <h2 className="section-title">{vendor.name}</h2>
      <p className="muted">{vendor.location} | {vendor.openHours}</p>

      {/* Category Filter Buttons */}
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button 
          className="btn" 
          onClick={() => setSearchParams({}, { replace: true })}
        >
          All
        </button>
        <button 
          className="btn" 
          onClick={() => setSearchParams({ cat: 'Rice' }, { replace: true })}
        >
          Rice
        </button>
        <button 
          className="btn" 
          onClick={() => setSearchParams({ cat: 'Drinks' }, { replace: true })}
        >
          Drinks
        </button>
        <button 
          className="btn" 
          onClick={() => setSearchParams({ cat: 'Fast Food' }, { replace: true })}
        >
          Fast Food
        </button>
        <button 
          className="btn" 
          onClick={() => setSearchParams({ cat: 'Noodles' }, { replace: true })}
        >
          Noodles
        </button>
      </div>

      <MenuList items={shown} />
    </section>
  )
}

export default VendorPage