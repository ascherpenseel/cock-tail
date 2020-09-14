import { useState, useEffect } from 'react'

export const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 500)
    const checkMobile = () => setIsMobile(window.innerWidth < 500)

    useEffect(() => {
        window.addEventListener('resize', checkMobile)
        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    return isMobile
}