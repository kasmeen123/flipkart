import {AppBar, Toolbar, Box, styled, Typography} from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom'

const StyleHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`
const Comp = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const Image = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const ButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyleHeader>
        <Toolbar style={{minHeight: 55}}>
            <Comp to='/'>
                <img src={logoURL} alt="logo" style={{width:75}}/>
            <Box style={{display: 'flex'}}>
                <SubHeading>Explore&nbsp;
                    <Box component = 'span' style={{color: '#FFE500'}}>Plus</Box>
                    </SubHeading>
                    <Image src={subURL} alt="sub-logo"/>
            </Box>
            </Comp>
            <Search/>
            <ButtonWrapper>
                <CustomButtons/>
            </ButtonWrapper>
        </Toolbar>
    </StyleHeader>
  )
}

export default Header
