import React, { useEffect } from 'react'
import { ProductsCategoriesContainerStyles, ProductsCategoryBtnStyles, ProductsContainerStyles, ProductsSectionStyles, ProductsH2Styles } from './ProductsStyles'
//import { datosProductos } from '../../data/Products'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categories/categoriesSlice'
import { filterProductsByCategory } from '../../utils/productFilter'
import { fetchProducts } from '../../redux/products/productsUtils'


const Products = () => {

    let products = useSelector(state=> state.products.products)
    const selectedCategory = useSelector(state=>state.categories.selectedCategory);
    
    const filteredProducts = useSelector(state => filterProductsByCategory(state.products.products, state.categories.selectedCategory));

    const dispatch = useDispatch();

    useEffect(()=>{
      fetchProducts(dispatch);
    },[])
    
  return (
    <ProductsSectionStyles>
        <ProductsH2Styles>Productos Elaborados</ProductsH2Styles>
        <ProductsContainerStyles>
          
                       
            { 
            Object.entries(filteredProducts).map(([,prodCards])=>{
              return prodCards && prodCards.map((prodCard)=>{
                return <Product {...prodCard} key={prodCard.id} />;
              })
            })
            }
        </ProductsContainerStyles>
    </ProductsSectionStyles>
  )
}

export default Products