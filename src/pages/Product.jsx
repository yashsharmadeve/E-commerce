import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding:50px;
    display:flex; 
    ${mobile({padding:"10px",flexDirection:'column'})}
`

const ImageContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({height:"40vh"})}
`

const InfoContainer = styled.div`
    flex:1;
    padding:0 50px;
    ${mobile({padding:"10px"})}
`

const Title = styled.h1`
    font-weight:200;
`

const Desc = styled.p`
    margin:20px 0;
`

const Price = styled.span`
    font-weight:100;
    font-size:40px;
`

const FitlerContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:50%;
    margin:30px 0;
    ${mobile({width:"100%"})}
`

const Filter = styled.div`
    display:flex;
    align-items:center;
`

const FilterTitle = styled.span`
    font-weight:200;
    font-size:20px;
`

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin:0 5px;
    cursor:pointer;
`

const FilterSize = styled.select`
    margin-left:10px;
`

const FilterSizeOption = styled.option``


const AddContainer = styled.div`
    display:flex;
    align-items:center;
    width:50%;
    justify-content:space-between;   
    ${mobile({width:"100%"})}
`

const AmountContainer = styled.div` 
    display:flex;
    align-items:center;
    font-weight:700;
`

const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 5px;
`

const Button = styled.button`
    padding:15px;
    border: 2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color: #f8f4f4;
        
    }
`

const Product = () => {
  return (
    <Container>
            <Navbar />
            <Announcement />
                <Wrapper>
                    <ImageContainer>
                        <Image src='https://assets.ajio.com/medias/sys_master/root/20210403/sXkR/6068869faeb269a9e333d909/-473Wx593H-461153249-maroon-MODEL.jpg' />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Denim Jumpsuit</Title>
                        <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tenetur veritatis repudiandae blanditiis natus repellendus nulla molestias distinctio, aspernatur voluptas, consequuntur ex quibusdam mollitia obcaecati debitis est suscipit? Neque, tenetur!</Desc>
                        <Price>$ 20</Price>
                        <FitlerContainer>

                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black" />
                                <FilterColor color="darkblue" />
                                <FilterColor color="gray" />
                            </Filter>

                            <Filter>
                                <FilterTitle>Size</FilterTitle>

                                <FilterSize>
                                    <FilterSizeOption>XS</FilterSizeOption>
                                    <FilterSizeOption>S</FilterSizeOption>
                                    <FilterSizeOption>M</FilterSizeOption>
                                    <FilterSizeOption>L</FilterSizeOption>
                                    <FilterSizeOption>XL</FilterSizeOption>
                                </FilterSize>

                            </Filter>
                        </FitlerContainer>

                        <AddContainer>
                            <AmountContainer>
                                    <Remove />
                                    <Amount>1</Amount>
                                    <Add />
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>

                    </InfoContainer>
                </Wrapper>
            <Newsletter />
            <Footer />
    </Container>
  )
}

export default Product