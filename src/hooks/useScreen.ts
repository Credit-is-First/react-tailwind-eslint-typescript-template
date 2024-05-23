import { useEffect, useState } from 'react'

import screens from 'src/screens'

type ScreenWidth = keyof typeof screens

function useScreen(min?: ScreenWidth, max?: ScreenWidth) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const minWidth = min ? +screens[min].slice(0, -2) : 0
  const maxWidth = max ? +screens[max].slice(0, -2) : 9999

  return minWidth <= windowWidth && windowWidth < maxWidth
}

export default useScreen
