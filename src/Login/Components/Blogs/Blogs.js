import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Blogs = () => {

    const navigate = useNavigate();

    const handleback = () => {
        navigate("/home")
    }

  return (
    <div>
    <h3 style={{textAlign:'center'}}>This is blogs page</h3>
    <Stack spacing={2} direction="row" style={{paddingLeft:'730px'}}>
        <Button variant="outlined" onClick={handleback}>Back</Button>
    </Stack>
    </div>
  )
}

export default Blogs