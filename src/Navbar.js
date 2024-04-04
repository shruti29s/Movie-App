import React from "react";
import styled from "styled-components";

const Nav = styled.div`
height: 70px;
background: linear-gradient(170deg, #1bc059, #0d47a1);
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
`;

const Title = styled.div`
font-size: 30px;
color: #fff;
font-weight: 600;
font-family: 'Times NEW Roman', Times, serif;
text-transform: uppercase;
margin-left: 20px;
&:hover{color: #0f0}
`;

const CartImg = styled.img`
height: 48px;
margin-right: 20px;
`;

const CartIconContainer = styled.div`
position: relative;
cursor: pointer;
`;

const CartCount = styled.div`
background-color: ${(props) => props.color};
border-radius: 50%;
padding: 4px 8px;
position: absolute;
right: 10px;
top: -5px;
font-size: 12px;
visibility: ${(props) => props.show?"visible":"hidden"};
`;

class Navbar extends React.Component{
    render(){
        return (
            <>
            <Nav>
                <Title>
                    Movie-App
                </Title>
                <CartIconContainer>
                    <CartImg alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"></CartImg>
                    <CartCount color="yellow" show={false}>3</CartCount>
                </CartIconContainer>
            </Nav>
            </>
        )
    }
}

export default Navbar;

const styles = {
    nav: {
        height: 70, 
        background: "#4267b2", 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative"
    },

    title: {
        fontSize: 30,
        color: "#fff",
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase",
        marginLeft: 20
    },

    cartContainer: {
        position: "relative",
        cursor: "pointer"
    },

    cartIcon: {
        height: 48,
        marginRight: 20
    },

    cartCount: {
        background: "orange",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right: 10,
        top: -5,
        fontSize: 12
    }
}