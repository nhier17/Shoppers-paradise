import React from 'react';
import success from "../images/success.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <Container>
            <Contents>
                <Title>Payment Successful!</Title>
                <Subtitle>Your order has been successfully placed.</Subtitle>
                <Image src={success} alt="success" />
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
    color: #2cdc26;
    font-size: 2.5rem;
    margin-bottom: 1rem;
`;

const Subtitle = styled.p`
    color: #333;
    font-size: 1.2rem;
    margin-bottom: 2rem;
`;

const Image = styled.img`
    width: 150px;
    height: auto;
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
