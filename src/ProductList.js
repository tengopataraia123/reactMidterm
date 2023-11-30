
import { useProducts } from "./Context/products"
import './App.css'

const ProductList = () =>{

    const {products,removeProductFromList,toggleHide} = useProducts();

    const removeButtonClickHandler = (key) => {
        removeProductFromList(key)
    }

    return (
        <div className="productlist">
            <div className="container">
                {products.map((item,index) => {
                    return (
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">{item.title}</div>
                                <div className="card-text" style={{display:item.hidden ? 'None' : 'Block'}}>{item.description}</div>
                                <a className="show-description" href="#" onClick={() => toggleHide(index)}>{item.hidden ? "more" : "less"}</a>
                                
                            </div>
                            <a className="btn btn-danger" href="#" onClick={() => removeButtonClickHandler(index)}>Remove Product</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList;