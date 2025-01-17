import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions'
import {Box, Typography,Grid, styled} from '@mui/material'
import ActionItem from './ActionItem'

const Comp = styled(Box)`
      background: #F2F2F2;
      padding-top: 55px
`
const Container = styled(Grid)`
      bacground: #FFFFFF;
      display: flex
`
const Right = styled(Grid)`
      margin-top: 50px
`
const DetailView = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const {loading, product} = useSelector(state => state.getProductDetails)
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    useEffect(() => {
       if(product && id !== product.id)
        dispatch(getProductDetails(id))
    }, [dispatch, id, product, loading])

    console.log(product)

  return (
    
   <Comp>
    {
      product && Object.keys(product).length &&
      <Container container>
        <Grid item lg={4} md={4} sm={8} xs={12}>
          <ActionItem product={product}/>
        </Grid>
        <Right item lg={8} md={8} sm={8} xs={12} >
          <Typography>{product.title.longTitle} </Typography>
          <Typography style= {{marginTop: 5, color: '#878787', fontSize: 14}}>
            8 Ratings & 1 Reviews
          </Typography>
          <Box><img src={fassured} style={{width: 77, marginLeft: 20}}/></Box>
        <Typography>
          <Box component="span" style={{fontSize: 28}}> ₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{color: '#388E3C'}}> {product.price.discount}</Box>
        </Typography>
        </Right>
      </Container>

    }
   </Comp>
  )
}

export default DetailView
