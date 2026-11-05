import { useEffect, useState } from 'react'

//Like useState, but the calue is saved in localStorage (survives a refresh).
export function useLocalStorage(key, initialValue){
    const[value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key)
            return saved !== null ? JSON.parse(saved) : initialValue
        } catch {
            return initialValue         //broken saved data:start fresh
        }
    })

    useEffect(() => {
        try {
            // TODO: save the value.
            localStorage.setItem(key, JSON.stringify(value))
        } catch {
            // storage full or blocked: keep working in memory
        }
    }, [key, value])

    return[value, setValue]
}