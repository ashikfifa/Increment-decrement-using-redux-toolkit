import React from 'react'
import FormforTodo from '../../components/form-for-todo-component'
import ProductList from '../../components/display-list-product-component/display-list-product-component'
import './todoPage.scss'

function TodoPage() {
  return (
    <div className='todoPageFlex'>
        <FormforTodo/>
        <ProductList/>
    </div>
  )
}

export default TodoPage