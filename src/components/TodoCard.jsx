import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
background-color: #f0f0f0;
margin: 30px;
padding: 15px;
width: 200px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
`
const Title = styled.h4``
const Status = styled.h6``

const TodoCard = ({title, completed, id}) => {
const navigate = useNavigate();

  return (
          <Container 
          key={id}
          onClick={() => navigate(`/todo/${id}`)}
          >
             <Title>{title}</Title>
             <Status>{`Completed: ${completed}`}</Status>
          </Container>
      )
}

export default TodoCard
