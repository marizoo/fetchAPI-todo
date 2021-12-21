import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import TodoCard from './TodoCard';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 80%;
height: 80%;
display: flex;
flex-wrap: wrap;
`

const TodosList = () => {
    const [todos, setTodos] = useState()

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then( res => {
            const responseTodos = res.data;
            setTodos(responseTodos)
        })
    },[])

    return (
        <Container>
            {!todos && <CircularProgress /> }
            {todos && (
                <Wrapper>
                    {todos.slice(0, 10).map(todo => (
                        <TodoCard title={todo.title} id={todo.id} completed={todo.completed}/>
                    ))}
                </Wrapper>
            )}
            
        </Container>
    )
}

export default TodosList
