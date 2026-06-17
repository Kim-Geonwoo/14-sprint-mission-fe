// 컴포넌트들
import Header from './components/Header'
import ProductBest from './components/ProductBest';

function App() {

  return (
    <>
      <Header />
      <section class="mt-6.25 flex flex-col items-center w-full">
          <ProductBest />
      </section>
    </>
  )
}

export default App
