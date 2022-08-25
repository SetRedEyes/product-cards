import Main from './components/pages/Main'
import { ProductProvider } from './hooks/useProduct'

const App = () => {
  return (
    <ProductProvider>
      <Main />
    </ProductProvider>
  )
}

export default App
