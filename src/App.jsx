import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import TodosList from './components/TodosList';
import Todo from './components/Todo';

const Container = styled.div``

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
            <Route path='/' element={<TodosList />}/>  
            <Route path='/todo/:id' element={<Todo />}/>  
        </Routes>
      </Container>
    </Router>
  )
}

export default App
