import React from 'react'
import Main from './components/pages/Main'
import { ProductProvider } from './hooks/useProduct'
import './App.css'
const App = () => {
  return (
    <ProductProvider>
      <Main />
    </ProductProvider>
  )
}

export default App
