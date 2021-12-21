import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

const Container = styled.div``

const Todo = () => {
    const {id} = useParams();
    const [todoDetails, setTodoDetails] = useState();

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/todo/${id}`)
        .then( res => {
            const responseTodo = res.data;
            setTodoDetails(responseTodo)
        })
        .catch( err => {
            console.log(err.message)
        })
    },[])

    const {id : todoId, userId, title, completed} = todoDetails || {};
    return (
        <Container>
            {!todoDetails && <CircularProgress />}
            {todoDetails && (
                <>
                    <h1>{`the todoId is ${todoId} While the id is: ${id}`}</h1>
            <p>{userId}</p>
            <p>{title}</p>
            <p>{completed}</p>
                </>
            )}
            
        </Container>
    )
}

export default Todo
