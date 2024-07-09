import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
import { useEffect } from 'react'
import {getProducts} from '../../redux/actions/productActions'
import {useDispatch, useSelector} from 'react-redux'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Comp = styled(Box)`
  padding: 10px;
  background-color: #F2F2F2;
`
const Home = () => {
  
  const {products} = useSelector(state => state.getProducts)
  console.log(products)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getProducts())
  }, [dispatch])

  return (
   <>
   <NavBar/>
    <Comp >
    <Banner/>
    <MidSlide products={products} title = "Deal of the Day" timer={true}/>
    <MidSection/>
    <Slide products={products} title = "Discounts for You" timer={false}/>
    <Slide products={products} title = "Suggesting items" timer={false}/>
    <Slide products={products} title = "Top Selection" timer={false}/>
    <Slide products={products} title = "Recommended Items" timer={false}/>
    <Slide products={products} title = "Trending Offers" timer={false}/>
    <Slide products={products} title = "Seson's Top Picks" timer={false}/>
    <Slide products={products} title = "Top Deals on Accessories" timer={false}/>
    </Comp >
   
   </>
  )
}

export default Home