import {Box,Button,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const Left = styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
`
const Image = styled('img')({
    padding: '15px'
})

const StyleButton = styled(Button)`
    width: 48%;
    height: 50px;
    border-radius: 2px
`
const ActionItem = ({product }) => {
    return (
        <Left>
            <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%'}}> 
           <Image src = {product.url} alt="product"/>
           </Box>
           <StyleButton variant="contained" style={{background: '#ff9f00', marginRight:10}}>
            <ShoppingCartIcon/>
            Add to Cart </StyleButton>
           <StyleButton variant="contained" style={{background: '#fb541b'}}>
            <FlashOnIcon/>
             Buy Now </StyleButton>
        </Left>
    )
}

export default ActionItem