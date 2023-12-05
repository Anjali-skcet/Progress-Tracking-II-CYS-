import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();

export default function Album() {

    const navigate = useNavigate();

    const handlel = () => {
        navigate("/layout")
    }

    const handleb = () => {
        navigate("/blogs")
    }

    const handlec = () => {
        navigate("/contact")
    }

  return (
    <div>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <img src="https://d2lk14jtvqry1q.cloudfront.net/media/large_Sri_Krishna_College_of_Engineering_and_Technology_Coimbatore_SKCET_Coimbatore_853ea564d5_fafcf5f339.png" style={{height:"80px"}} alt=""></img>
          <Typography variant="h6" color="inherit" noWrap style={{paddingLeft:"20px"}}>
            Sri Krishna College of Engineering and Technology
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>

    <Stack spacing={2} direction="row" style={{paddingLeft:'600px',paddingTop:'50px'}}>
      <Button variant="contained" onClick={handlel}>Layout</Button>
      <Button variant="contained" onClick={handleb}>Blogs</Button>
      <Button variant="contained" onClick={handlec}>Contacts</Button>
    </Stack>

    </div>
    );
}