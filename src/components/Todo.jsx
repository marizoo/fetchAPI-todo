import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div``

const Todo = () => {

    const {id} = useParams();

    return (
        <Container>
            <h1>{`this is the TODO component, the id is: ${id}`}</h1>
        </Container>
    )
}

export default Todo
