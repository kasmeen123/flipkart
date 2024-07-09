import { Box, styled } from "@mui/material"
import Slide from './Slide'

const Comp = styled(Box)`
  display: flex;
`
const Left = styled(Box)(({theme}) => ({
  width: '83%',
  [theme.breakpoints.down('md')]: {
        width: '100%'
        }
}))

const Right = styled(Box)(({theme}) => ({
  background: '#FFFFFF',
  padding: 5,
  marginTop: 10,
  marginLeft: 10,
  width: '17%',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none'
    } 
}))

const MidSlide = ({products, title, timer}) => {
    const adURL = 'https://printablegraphics.in/wp-content/uploads/2017/10/Flipkart-print-ads-The-Big-Billion-day.jpg';
  return (
    <Comp>
      <Left>
      <Slide 
      products={products}
      title = {title} 
      timer={timer}/>
      </Left>
      <Right>
      <img src={adURL} style={{ width: 217, height: '100%'}} alt='ad' />
    </Right>
    </Comp>
  )
}

export default MidSlide
