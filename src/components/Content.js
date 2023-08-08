import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Content = ({items,deleteItem}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , margin:16}}>
     <TableContainer component={Paper} className='table' sx={{ margin: '0 auto', maxWidth: '400px' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Name
            </TableCell>
            <TableCell 
              align="center">
                Email
            </TableCell>
            <TableCell 
              align="right">
                Action
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="right">
                <button
                onClick={()=>deleteItem(item.id)}
                >Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Content