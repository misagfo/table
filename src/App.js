import React from 'react'
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Input } from '@material-ui/core'
import Button from '@material-ui/core/Button';

import data from './data.json'

function App() {

const [value, setValue] = React.useState(data.date)
const [result, setResult] = React.useState([])


const changeData = () => {
  return value.push(result)
}


const showData = () => {
  return setValue([...value])
}

return (
  <div className="App">
     <TableContainer component={Paper}>
          <Table size="small">
                <TableBody>
           {value.map((row, index) => (
              <TableRow key={index}>
                 <TableCell >{row}</TableCell>
              </TableRow>
          ))}
        </TableBody>
             </Table>
        </TableContainer>

    <Input onChange={(e) => setResult(e.target.value)} className="input" type="number" placeholder="AddNumber"></Input>
    <Button onClick={() => changeData()} variant="contained" color="primary">Add</Button>
    <br/>
    <br/>
    <Button onClick={() => showData()} variant="contained">Change</Button>
  </div>
   
  )
}

export default App;
