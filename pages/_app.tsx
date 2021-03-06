import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import theme from '../theme'
import { ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {' '}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
