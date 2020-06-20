import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import BookList from '../containers/BookList'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <BookList />
    <Footer />
  </div>
)
export default App
