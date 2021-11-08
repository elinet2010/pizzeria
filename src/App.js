import React from 'react'
import Layout from './components/commons/Layout'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from './redux/store'
import theme from './styles/themeConstants'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Router />
          </Layout>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
