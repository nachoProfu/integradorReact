import React from 'react'
import { ProductsCategoriesContainerStyles, ProductsCategoryBtnStyles, ProductsContainerStyles, ProductsSectionStyles, ProductsH2Styles } from './ProductsStyles'
//import { datosProductos } from '../../data/Products'
import Product from './Product'
import { useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categories/categoriesSlice'
import { filterProductsByCategory } from '../../utils/productFilter'

const Products = () => {

    let products = useSelector(state=> state.products.products)
    const selectedCategory = useSelector(state=>state.categories.selectedCategory);
    
    const filteredProducts = useSelector(state => filterProductsByCategory(state.products.products, state.categories.selectedCategory));

  return (
    <ProductsSectionStyles>
        <ProductsH2Styles>Productos Elaborados</ProductsH2Styles>
        <ProductsContainerStyles>
            
            {/* {
             Object.entries(products).map(([,prodCards])=>{
                return prodCards.map((prodCard)=>{
                  if(selectedCategory){
                    console.log(prodCard)
                    return <Product {...prodCard} key={prodCard.id} />;
                  }else{
                    return null
                  }
                });
             })
            } */}
            
            {console.log(selectedCategory)} 
            {console.log(products)} 
            {console.log(filteredProducts)} 
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