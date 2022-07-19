import React from 'react'
import styled from 'styled-components';
import { Search,ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import {mobile} from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
   ${mobile({height:"50px"})}
`

const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    ${mobile({padding:"10px 0px"})}
`

const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`
const Input = styled.input`
    border:none;
    ${mobile({width:"50px"})}
`
const Logo = styled.div`
    font-weight:bold;
    text-align:center;
    font-size: 25px;
    ${mobile({fontSize:"24px"})}
`
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`

const Left = styled.div` flex:1; display:flex; align-items:center;`
const Center = styled.div` flex:1; `
const Right = styled.div` 
    flex:1; 
    display:flex;
    justify-content:flex-end;
    align-items-center;
    ${mobile({justifyContent:"center",flex:2})}
`


const Language = styled.span`
    font-size:14px; cursor: pointer;
    ${mobile({display:"none"})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='search' />
                        <Search style={{color:'gray',fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>LAMA.</Logo></Center>
                <Right>
                    <Link to='/register' style={{color:'inherit',textDecoration:'none'}}><MenuItem>REGISTER</MenuItem></Link>
                    <Link to='/login' style={{color:'inherit',textDecoration:'none'}}><MenuItem>SIGN IN</MenuItem></Link>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <Link to='/cart'><ShoppingCartOutlined color="action" /></Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar