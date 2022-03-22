import { AppBar, Box, Container, Toolbar,Button } from "@mui/material"
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function AppBarComp(){

    const pages = ['Map', 'Credit'];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const nav = useNavigate()

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if(page=='Map')
    {
        nav('/')
    }
    else{
        nav('/'+page)
    }
  };



    return(
        <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={()=>handleCloseNavMenu(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )

}
export default AppBarComp