import React from 'react'
import { CategoriesContainerStyles, CategoriesSectionStyles, CategoriesTitleStyles } from './CategoriasStyles'
import { useSelector } from 'react-redux'
import Categoria from './Categoria';

const Categorias = () => {

  const categories = useSelector(state=>state.categories.categories)

  return ( 
    <CategoriesSectionStyles>
          {/* <h2>Categorias</h2> */}
      <CategoriesContainerStyles>
          {
              categories.map((category)=>{
                  return <Categoria {...category} key={category.id}/>
              })
          }
      </CategoriesContainerStyles>
    </CategoriesSectionStyles>
  )
}

export default Categorias