import React from 'react';
import { MdCancel } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <Container>
            <Contents>
                <Title>Something went wrong!</Title>
                <Subtitle>Please try again later.</Subtitle>
                <Image>
                    <MdCancel /> 
                </Image>
              <StyledLink to="/">Continue Shopping</StyledLink>
            </Contents>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
`;

const Contents = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    color: #DC2626;
   font-size: 2.5rem;
    margin-bottom: 1rem;
`;

const Subtitle = styled.p`
    color: #333;
    font-size: 1.2rem;
    margin-bottom: 2rem;
`;

const Image = styled.div`
  font-size: 50px;
   margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: #2cdc26;
    color: #fff;
    padding: 0.8rem 1rem;
    border-radius: 5px;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #23a820;
    }
`;

export default Success;
