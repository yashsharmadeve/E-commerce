import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Info = styled.div`
    cursor:pointer;
    opacity:0;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    height:100%;
    width:100%;
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center
`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #f5fbfd;
    position:relative;

    &:hover ${Info}{
        opacity:1;
        transition:.5s all ease;
    }

`
const Circle = styled.div`
    height:200px;
    width:200px;
    background-color:white;
    border-radius:50%;
    position:absolute;
`
const Image = styled.img`
    // width:100%;
    height:75%;
    z-index:2;
`
const Icon = styled.div`
    height:40px;
    width:40px;
    background-color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    cursor:pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform:scale(1.1)
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <Link to='/addtocart' style={{color:'inherit'}}><ShoppingCartOutlined /></Link>
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product