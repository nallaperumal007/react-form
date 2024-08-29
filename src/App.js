import { useState } from 'react';
import './App.css';
import { Button, Grid, TextField, Typography, Container } from '@mui/material';
import FileUploader from './FileUploader/FileUploader';

function App() {
  const [salary, setSalary] = useState('');
  const [total, setTotal] = useState('');
  const [dob, setDob] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');

  // Handlers for file uploads
  const onSelectFileHandler = (e) => {
    console.log(e.target.files[0]);
  };

  const onDeleteFileHandler = () => {
    // Handle file deletion logic here
  };

  return (
    <Container className="App" maxWidth="md">
      <div className="app-form">
        <Typography variant="h4" gutterBottom align="center" color="primary">
          User Information Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">First Name</label>
            <TextField
              fullWidth
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Last Name</label>
            <TextField
              fullWidth
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Address</label>
            <TextField
              fullWidth
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Salary</label>
            <TextField
              fullWidth
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              inputProps={{ step: "0.01" }}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Age</label>
            <TextField
              fullWidth
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Course</label>
            <TextField
              fullWidth
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              variant="outlined"
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="date-picker"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="date-picker"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="date-picker"
            />
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <label className="form-label">Document</label>
            <FileUploader
              onSelectFile={onSelectFileHandler}
              onDeleteFile={onDeleteFileHandler}
            />
          </Grid>
          <Grid item xs={12} p={2} style={{ textAlign: 'end' }}>
            <Button variant="outlined" className="cancel-button">Cancel</Button>
            <Button variant="contained" color="primary" className="save-button">Save</Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
