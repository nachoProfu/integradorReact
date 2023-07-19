import React from 'react'
import { CategoryBtnStyles } from './CategoriasStyles'
import { useDispatch, useSelector} from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';

const Categoria = ({id, title, category}) => {

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.categories.selectedCategory)

  return (
    <CategoryBtnStyles
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category)) }
      whileTap={{ scale: 0.95 }}
    >
      {title}
    </CategoryBtnStyles>
  )
}

export default Categoria