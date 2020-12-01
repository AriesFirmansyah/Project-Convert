import React, { useState } from 'react';
import './main.css'
import { Button, makeStyles, Container, Grid, Switch, FormControlLabel, Select, MenuItem, FormControl } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField';
import $ from 'jquery'


/* IMAGE */
import SpeedImage from './images/Speed.png'
import HomeImage from './images/home.png'


const useStyles = makeStyles({
  btnHome: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    textTransform: 'capitalize',
    fontSize: 22,
    width: '330px',
    height: '70px',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'aliceblue',
  },
});
var inputNumber = 0
var inputSelectFrom = ''
var inputSelectTo = ''
export default function Time() {
  const classes = useStyles()

  const [result, setresult] = useState("")

  const [from1, setfrom1] = React.useState(3)
  const setFrom = (d) => {
    inputSelectFrom = d.target.value
    setfrom1(inputSelectFrom)
    inputNumber = hitung(inputNumber, inputSelectFrom, inputSelectTo)
    setresult(inputNumber)
  }

  const [to1, setto1] = React.useState(3)
  const setTo = (e) => {
    inputSelectTo = e.target.value
    setto1(inputSelectTo)
    inputNumber = hitung(inputNumber, inputSelectFrom, inputSelectTo)
    setresult(inputNumber)
  }

  const [input1, setinput1] = useState("")
  const setInput = (b) => {
    inputNumber = b.target.value
    setinput1(b.target.value)
    inputNumber = hitung(inputNumber, inputSelectFrom, inputSelectTo)
    setresult(inputNumber)
  }
  return (
    <div id="contTemp" className="contTemp">
      <Container id=""  maxWidth="sm" style={{}}>
        <Grid container spacing={3}>
          <Grid className="textRight" item xs={12}>
              <p className="inline" style={{marginRight: 12}} >Light</p>
                <FormControlLabel onChange={switchDisplay} control={<Switch color="primary"/>} />
              <p className="inline" style={{marginLeft: -17}} >Dark</p>
          </Grid>
          <Grid className="center" item xs={12}>
            <h1 className="header"> <img style={{width: 55, height: 50, marginRight: 18, marginBottom: -10}}  src={SpeedImage} />Speed Converter</h1>
          </Grid>
          <Grid item xs={12} sm={6} className="center" >
            <TextField value={input1} onChange={setInput} className="inputSwitch" label="Input" color="secondary" id="filled-size-normal" type="number" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} className="center" >
          <TextField value={result} className="inputSwitch" style={{width: 220}} label="Result" color="secondary" id="filled-size-normal" type="text" variant="outlined" aria-readonly/>
          </Grid>
          <Grid item xs={12} sm={6} className="center" >
            <FormControl id="FromSwitch" style={{width: 220}} variant="filled">
              <InputLabel htmlFor="filled-age-native-simple">From</InputLabel>
                <Select id="From" value={from1} onChange={setFrom}>
                  <option value={1}>Kilometer per hour</option>
                  <option value={2}>Meter per second</option>
                  <option value={3}>Miles per hour</option>
                  <option value={4}>Knot</option>
                </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} className="center" >
            <FormControl id="ToSwitch" style={{width: 220}} variant="filled">
              <InputLabel htmlFor="filled-age-native-simple">To</InputLabel>
                <Select id="To" value={to1} onChange={setTo}>
                  <option value={1}>Kilometer per hour</option>
                  <option value={2}>Meter per second</option>
                  <option value={3}>Miles per hour</option>
                  <option value={4}>Knot</option>
                </Select>
            </FormControl>
          </Grid>
          <Grid className="center" item xs={12}>
            <Button className={classes.btnHome} onClick={link_home} variant="contained" >
              <img style={{width: "30px", marginRight: 20}} src={HomeImage} /> 
              Back to Home
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
function hitung(inputData, input1, input2){
  let a = 0
  if(input1 == 1 && input2 == 1){
    a = inputData;
  }
  else if(input1 == 2 && input2 == 2){ 
    a = inputData;
  }
  else if(input1 == 3 && input2 == 3){ 
    a = inputData;
  }
  else if(input1 == 4 && input2 == 4){ 
    a = inputData;
  }
  else if(input1 == 1 && input2 == 2){ //Kilometer per hour to Meter per second
    a = inputData / 3.6;
  }
  else if(input1 == 1 && input2 == 3){ //Kilometer per hour to Miles per hour
    a = inputData / 1.609;
  }
  else if(input1 == 1 && input2 == 4){ //Kilometer per hour to Knot
    a = inputData / 1.852;
  }
  else if(input1 == 2 && input2 == 1){ //Meter per second to Kilometer per hour
    a = inputData * 3.6;
  }
  else if(input1 == 2 && input2 == 3){ //Meter per second to Miles per hour
    a = inputData * 2.237;
  }
  else if(input1 == 2 && input2 == 4){ //Meter per second to Knot
    a = inputData * 1.944;
  }
  else if(input1 == 3 && input2 == 1){ //Miles per hour to Kilometer per hour
    a = inputData * 1.609;
  }
  else if(input1 == 3 && input2 == 2){ //Miles per hour to Meter per second
    a = inputData / 2.237;
  }
  else if(input1 == 3 && input2 == 4){ //Miles per hour to Knot
    a = inputData / 1.151;
  }
  else if(input1 == 4 && input2 == 1){ //Knot to Kilometer per hour
    a = inputData * 1.852;
  }
  else if(input1 == 4 && input2 == 2){ //Knot to Meter per second
    a = inputData / 1.944;
  }
  else if(input1 == 4 && input2 == 3){ //Knot to Miles per second
    a = inputData * 1.151;
  }
  return a
}
function switchDisplay() {
  $("#cont").toggleClass('contSwitch');
  $('body').toggleClass('bodySwitch')
  $('#switchTanda').toggleClass('inputSwitch')
  $('#FromSwitch').toggleClass('inputSwitch')
  $('#ToSwitch').toggleClass('inputSwitch')
}
function link_home(){
  window.location.href = "./../../public/index.html"
}