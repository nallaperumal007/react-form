import { useState } from 'react';
import AmountTextbox from './AmountTextbox';
import './App.css';
import { Button, Grid, TextField } from '@mui/material';
import FileUploader from './FileUploader/FileUploader';

function App() {

const [salary, setSalary] = useState(null)
const [total, setTotal] = useState(null)

const onSelectFileHandler = (e) => {
  console.log(e.target.files[0]);
}

const onDeleteFileHandler = () => {

}

  return (
    <div className="App">
      <div className='app-form'>
        <Grid container spacing={2}>
          <Grid item xs={6} p={2}>
            <label>First Name</label>
            <TextField style={{ padding: "0.25rem" }} />
          </Grid>
          <Grid item xs={6} p={2}>
            <label>Last Name</label>
            <TextField style={{ padding: "0.25rem" }} />
          </Grid>
          <Grid item xs={6} p={2}>
            <label>Address</label>
            <TextField />
          </Grid>
          <Grid item xs={6} p={2}>
            <label>Salary</label>
            <AmountTextbox value={salary} onChange={setSalary} decimalDigits={2} />
          </Grid>
          <Grid item xs={6} p={2}>
            <label>Age</label>
            <TextField />
          </Grid>
          <Grid item xs={6} p={2}>
            <label>Document</label>
            {/* <input type='file' onChange={onSelectFileHandler} /> */}
            {/* <TextField type='file' onChange={onSelectFileHandler} /> */}
            <FileUploader onSelectFile={onSelectFileHandler}
                onDeleteFile={onDeleteFileHandler} />
          </Grid>
          <Grid item xs={12} p={2} style={{ textAlign:'end' }}>
            <Button variant="outlined" style={{ marginLeft: "1rem"}}>Cancel</Button>
            <Button variant="contained" style={{ marginLeft: "1rem"}}>Save</Button>
          </Grid>
        </Grid>
      </div>
        {/* Amount Textbox Demo
        <div>
          {salary}
        </div>
        <div style={{ textAlign: 'left', padding:8 }}>
          <label>Salary</label>
          <AmountTextbox value={salary} onChange={setSalary} decimalDigits={2} />
        </div>
        <div>
          <AmountTextbox value={total} onChange={setTotal} decimalDigits={3} />
        </div> */}
    </div>
  );
}

export default App;
