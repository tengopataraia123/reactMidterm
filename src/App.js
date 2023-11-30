import AddProduct from './AddProduct.js'
import ProductList from './ProductList.js'
import ProductsContextProvider from './Context/products.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ProductsContextProvider>
      <div className='wrap'>
          <AddProduct/>
          <ProductList/>
      </div>
    </ProductsContextProvider>
  );
}

export default App;
