// 컴포넌트들
import Header from './components/Header'
import ProductBest from './components/ProductBest';
import ProductList from './components/ProductList';

function App() {

  return (
    <>
      <Header />
      <section class="mt-6.25 flex flex-col items-center w-full gap-10">
          <ProductBest />
          <ProductList />
      </section>
    </>
  )
}

export default App
