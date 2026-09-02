import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

interface NavContextValue {
  isOpen: boolean
  openMenu: () => void
  closeMenu: () => void
  toggleMenu: () => void
  scrolled: boolean
  hidden: boolean
  scrollProgress: number
}

const NavContext = createContext<NavContextValue | null>(null)

export function NavProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const openMenu = useCallback(() => setIsOpen(true), [])
  const closeMenu = useCallback(() => setIsOpen(false), [])
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [])

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(1, y / docHeight) : 0

      setScrolled(y > 24)
      setScrollProgress(progress)

      // Hide on scroll down, reveal on scroll up (keep visible near top / menu open)
      if (y < 80) {
        setHidden(false)
      } else if (y > lastY + 8) {
        setHidden(true)
      } else if (y < lastY - 8) {
        setHidden(false)
      }

      lastY = y
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const value = useMemo(
    () => ({
      isOpen,
      openMenu,
      closeMenu,
      toggleMenu,
      scrolled,
      hidden: isOpen ? false : hidden,
      scrollProgress,
    }),
    [isOpen, openMenu, closeMenu, toggleMenu, scrolled, hidden, scrollProgress],
  )

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

export function useNav() {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error('useNav must be used within NavProvider')
  return ctx
}
