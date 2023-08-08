import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Add = ({name,setName,email,setEmail,addItem}) => {
  return (
    <div className='content'>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
       id="outlined-basic" 
       label="Name" 
       variant="outlined"
       value={name} 
       onChange={e=>setName(e.target.value)}
       />
      <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        value={email}
        onChange={e=>setEmail(e.target.value)}
      />
      </Box>
        <Button className='btn'
          variant="contained" 
          color="success"
          onClick={()=>name&&email?addItem(name,email):0}
          >
            Add
        </Button>
    </div>
  )
}

export default Add