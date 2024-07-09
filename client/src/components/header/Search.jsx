import { Box, InputBase, styled} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

 const Container = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
     display: flex
 `
 const SearchBar = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset
 `
const IconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`
const Search = () => {
  return (
    <Container>
        <SearchBar
        placeholder="Search for products, brands and more"/>
        <IconWrapper>
            <SearchIcon/>
        </IconWrapper>
    </Container>
  )
}

export default Search
