import { useState } from "react"
import { useProducts } from "./Context/products"
import './App.css'

const AddProduct = () => {

    const {addProductToList} = useProducts();


    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleInput1Change = (e) => {
        setInput1(e.target.value);
    };

    const handleInput2Change = (e) => {
    setInput2(e.target.value);
    };

    const handleButtonClick = () => {
        addProductToList(input1,input2)
    };

    return (
    <div className="addproduct">
        <div className="div-center">
            <label for="productName">Product Name</label>
            <input type="text" id="productName" class="form-control" onChange={handleInput1Change}/>
            <label for="description">Product Descritpion</label>
            <textarea type="text" id="description" class="form-control"onChange={handleInput2Change}/>
            <br/>   
            <button  class="btn btn-primary" onClick={handleButtonClick}>Add Product</button>
        </div>
    </div>
    )
}

export default AddProduct;