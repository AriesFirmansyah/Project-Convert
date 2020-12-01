import React, { useState } from 'react';
import './main.css'
import { Button, makeStyles, Container, Grid, Switch, FormControlLabel, Select, MenuItem, FormControl } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField';
import $ from 'jquery'


/* IMAGE */
import TimeImage from './images/time.png'
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
            <h1 className="header"> <img style={{width: 55, height: 50, marginRight: 18, marginBottom: -10}}  src={TimeImage} />Time Converter</h1>
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
                  <option value={1}>Milisecond</option>
                  <option value={2}>Second</option>
                  <option value={3}>Minute</option>
                  <option value={4}>Hour</option>
                  <option value={5}>Day</option>
                  <option value={6}>Week</option>
                  <option value={7}>Month</option>
                  <option value={8}>Year</option>
                  <option value={9}>Decade</option>
                </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} className="center" >
            <FormControl id="ToSwitch" style={{width: 220}} variant="filled">
              <InputLabel htmlFor="filled-age-native-simple">To</InputLabel>
                <Select id="To" value={to1} onChange={setTo}>
                  <option value={1}>Milisecond</option>
                  <option value={2}>Second</option>
                  <option value={3}>Minute</option>
                  <option value={4}>Hour</option>
                  <option value={5}>Day</option>
                  <option value={6}>Week</option>
                  <option value={7}>Month</option>
                  <option value={8}>Year</option>
                  <option value={9}>Decade</option>
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
  else if(input1 == 5 && input2 == 5){ 
    a = inputData;
  }
  else if(input1 == 6 && input2 == 6){ 
    a = inputData;
  }
  else if(input1 == 7 && input2 == 7){ 
    a = inputData;
  }
  else if(input1 == 8 && input2 == 8){ 
    a = inputData;
  }
  else if(input1 == 9 && input2 == 9){ 
    a = inputData;
  }
  else if(input1 == 1 && input2 == 2){ //Milisecond to Second
    a = inputData * (1/1000)
  }
  else if(input1 == 1 && input2 == 3){ //Milisecond to Minute
    a = (inputData * (1/1000)) / 60;
  }
  else if(input1 == 1 && input2 == 4){ //Milisecond to Hour
    a = inputData / 3600000;
  }
  else if(input1 == 1 && input2 == 5){ //Milisecond to Day
    a = inputData / 86400000;
  }
  else if(input1 == 1 && input2 == 6){ //Milisecond to Week
    a = inputData *	0.0000000016534;
  }
  else if(input1 == 1 && input2 == 7){ //Milisecond to Month
    a = inputData * 0.00000000038026;
  }
  else if(input1 == 1 && input2 == 8){ //Milisecond to Year
    a = inputData * 0.000000000031689;
  }
  else if(input1 == 1 && input2 == 9){ //Milisecond to Decade
    a = inputData * 0.0000000000031689;
  }
  else if(input1 == 2 && input2 == 1){ //Second to Milisecond
    a = inputData * 1000;
  }
  else if(input1 == 2 && input2 == 3){ //Second to Minute
    a = inputData / 60;
  }
  else if(input1 == 2 && input2 == 4){ //Second to Hour
    a = inputData / 3600;
  }
  else if(input1 == 2 && input2 == 5){ //Second to Day
    a = inputData /86400;
  }
  else if(input1 == 2 && input2 == 6){ //Second to Week
    a = inputData / 604800;
  }
  else if(input1 == 2 && input2 == 7){ //Second to Month
    a = inputData / 2628002.88;
  }
  else if(input1 == 2 && input2 == 8){ //Second to Year
    a = inputData / 31556952;
  }
  else if(input1 == 2 && input2 == 9){ //Second to Decade
    a = inputData / 315360000;
  }
  else if(input1 == 3 && input2 == 1){ //Minute to Milisecond
    a = inputData * 60000;
  }
  else if(input1 == 3 && input2 == 2){ //Minute to Second
    a = inputData * 60 ;
  }
  else if(input1 == 3 && input2 == 4){ //Minute to Hour
    a = inputData / 60;
  }
  else if(input1 == 3 && input2 == 5){ //Minute to Day
    a = inputData / 1440;
  }
  else if(input1 == 3 && input2 == 6){ //Minute to Week
    a = inputData / 10080;
  }
  else if(input1 == 3 && input2 == 7){ //Minute to Month
    a = inputData / 43800;
  }
  else if(input1 == 3 && input2 == 8){ //Minute to Year
    a = inputData / 525600;
  }
  else if(input1 == 3 && input2 == 9){ //Minute to Decade
    a = inputData / 5259492;
  }
  else if(input1 == 4 && input2 == 1){ //Hour to Milisecond
    a = inputData * 3600000;
  }
  else if(input1 == 4 && input2 == 2){ //Hour to Second
    a = inputData * 3600;
  }
  else if(input1 == 4 && input2 == 3){ //Hour to Minute
    a = inputData * 60;
  }
  else if(input1 == 4 && input2 == 5){ //Hour to Day
    a = inputData / 24;
  }
  else if(input1 == 4 && input2 == 6){ //Hour to Week
    a = inputData / 168;
  }
  else if(input1 == 4 && input2 == 7){ //Hour to Month
    a = inputData / 720;
  }
  else if(input1 == 4 && input2 == 8){ //Hour to Year
    a = inputData / 8760;
  }
  else if(input1 == 4 && input2 == 9){ //Hour to Decade
    a = inputData / 87600;
  }
  else if(input1 == 5 && input2 == 1){ //Day to Milisecond
    a = inputData * 86400000;
  }
  else if(input1 == 5 && input2 == 2){ //Day to Second
    a = inputData * 86400;
  }
  else if(input1 == 5 && input2 == 3){ //Day to Minute
    a = inputData * 1440;
  }
  else if(input1 == 5 && input2 == 4){ //Day to Hour
    a = inputData * 24;
  }
  else if(input1 == 5 && input2 == 6){ //Day to Week
    a = inputData / 7;
  }
  else if(input1 == 5 && input2 == 7){ //Day to Month
    a = inputData / 30.417;
  }
  else if(input1 == 5 && input2 == 8){ //Day to year
    a = inputData / 365;
  }
  else if(input1 == 5 && input2 == 9){ //Day to Decade
    a = inputData / 3650 ;
  }
  else if(input1 == 6 && input2 == 1){ //Week to Milisecond
    a = inputData / 0.0000000016534;
  }
  else if(input1 == 6 && input2 == 2){ //Week to Second
    a = inputData * 604800;
  }
  else if(input1 == 6 && input2 == 3){ //Week to Minute
    a = inputData * 10080;
  }
  else if(input1 == 6 && input2 == 4){ //Week to Hour
    a = inputData * 168;
  }
  else if(input1 == 6 && input2 == 5){ //Week to Day
    a = inputData * 7;
  }
  else if(input1 == 6 && input2 == 7){ //Week to Month
    a = inputData / 4.345;
  }
  else if(input1 == 6 && input2 == 8){ //Week to year
    a = inputData / 52.143;
  }
  else if(input1 == 6 && input2 == 9){ //Week to Decade
    a = inputData / 521;
  }
  else if(input1 == 7 && input2 == 1){ //Month to Milisecond
    a = inputData / 0.00000000038026;
  }
  else if(input1 == 7 && input2 == 2){ //Month to Second
    a = inputData * 2628002.88;
  }
  else if(input1 == 7 && input2 == 3){ //Month to Minute
    a = inputData * 43800;
  }
  else if(input1 == 7 && input2 == 4){ //Month to Hour
    a = inputData * 730;
  }
  else if(input1 == 7 && input2 == 5){ //Month to Day
    a = inputData * 30.417;
  }
  else if(input1 == 7 && input2 == 6){ //Month to Week
    a = inputData * 4.345;
  }
  else if(input1 == 7 && input2 == 8){ //Month to Year
    a = inputData / 12;
  }
  else if(input1 == 7 && input2 == 9){ //Month to Decade
    a = inputData / 120;
  }
  else if(input1 == 8 && input2 == 1){ //Year to Milisecond
    a = inputData / 0.000000000031689;
  }
  else if(input1 == 8 && input2 == 2){ //Year to Second
    a = inputData * 31556952;
  }
  else if(input1 == 8 && input2 == 3){ //Year to Minute
    a = inputData * 525600;
  }
  else if(input1 == 8 && input2 == 4){ //Year to Hour
    a = inputData * 8760;
  }
  else if(input1 == 8 && input2 == 5){ //Year to Day
    a = inputData * 365;
  }
  else if(input1 == 8 && input2 == 6){ //Year to Week
    a = inputData * 52.143;
  }
  else if(input1 == 8 && input2 == 7){ //Year to Month
    a = inputData * 12;
  }
  else if(input1 == 8 && input2 == 9){ //Year to Decade
    a = inputData / 10;
  }
  else if(input1 == 9 && input2 == 1){ //Decade to Milisecond
    a = inputData / 0.0000000000031689;
  }
  else if(input1 == 9 && input2 == 2){ //Decade to Second
    a = inputData * 315360000;
  }
  else if(input1 == 9 && input2 == 3){ //Decade to Minute
    a = inputData * 5259492;
  }
  else if(input1 == 9 && input2 == 4){ //Decade to Hour
    a = inputData * 87600;
  }
  else if(input1 == 9 && input2 == 5){ //Decade to Day
    a = inputData * 3650;
  }
  else if(input1 == 9 && input2 == 6){ //Decade to Week
    a = inputData * 521;
  }
  else if(input1 == 9 && input2 == 7){ //Decade to Month
    a = inputData * 120;
  }
  else if(input1 == 9 && input2 == 8){ //Decade to Year
    a = inputData * 10;
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