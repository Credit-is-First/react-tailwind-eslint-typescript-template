import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext({})

type Props = { children: React.ReactNode }

function ThemeProvider({ children }: Props) {
  const [data] = useState({})

  useEffect(() => {
    const html = document.querySelector('html')
    html?.classList.add('dark')
  }, [])

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
