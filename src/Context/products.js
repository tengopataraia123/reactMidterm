import {createContext, useState, useContext} from 'react';

const productsDb = [];

const ProductsContext = createContext(productsDb);

const ProductsContextProvider = ({children}) => {
    let [products,setProducts] = useState(productsDb);

    const addProductToList = (title,descritpion) => {
        const newProduct = {
            title: title,
            description : descritpion,
            hidden:true
        };
        setProducts((prev) => ([...prev,newProduct]))
    }

    const removeProductFromList = (index) => {
        products.splice(index,1);
        setProducts([...products]);
    }

    const toggleHide = (index) => {
        if(products[index] != undefined)
            products[index].hidden = !products[index].hidden
        
        console.log("hide",products[index])
        setProducts([...products]);
    }

    return (
        <ProductsContext.Provider value = {{products,addProductToList,removeProductFromList,toggleHide}}>{children}</ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);

export default ProductsContextProvider;