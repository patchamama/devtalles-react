import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { purpleTheme } from './'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
