import React, { useState } from 'react';
import './main.css'
import { Button, makeStyles, Container, Grid, Switch, FormControlLabel, Select, MenuItem, FormControl } from '@material-ui/core'
import $ from 'jquery'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField';


/* IMAGE */
import WeightImage from './images/weight.png'
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
export default function Weight() {
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
            <h1 className="header"> <img style={{width: 50, height: 40, marginRight: 20}}  src={WeightImage} />Weight Converter</h1>
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
                  <option value={1}>Tonne</option>
                  <option value={2}>Kilogram</option>
                  <option value={3}>Gram</option>
                  <option value={4}>Miligram</option>
                  <option value={5}>Microgram</option>
                  <option value={6}>Pound</option>
                  <option value={7}>Ounce</option>
                </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} className="center" >
            <FormControl id="ToSwitch" style={{width: 220}} variant="filled">
              <InputLabel htmlFor="filled-age-native-simple">To</InputLabel>
                <Select id="To" value={to1} onChange={setTo}>
                  <option value={1}>Tonne</option>
                  <option value={2}>Kilogram</option>
                  <option value={3}>Gram</option>
                  <option value={4}>Miligram</option>
                  <option value={5}>Microgram</option>
                  <option value={6}>Pound</option>
                  <option value={7}>Ounce</option>
                </Select>
            </FormControl>
          </Grid>
          <Grid className="center" item xs={12} className="center" >
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
  else if(input1 == 1 && input2 == 2){ //Tonne to Kilogram
    a = inputData * 1000;
  }
  else if(input1 == 1 && input2 == 3){ //Tonne to Gram
    a = inputData * 1000000;
  }
  else if(input1 == 1 && input2 == 4){ //Tonne to Miligram
    a = inputData * 1000000000;
  }
  else if(input1 == 1 && input2 == 5){ //Tonne to Microgram
    a = inputData * 1000000000000;
  }
  else if(input1 == 1 && input2 == 6){ //Tonne to Pound
    a = inputData * 2000;
  }
  else if(input1 == 1 && input2 == 7){ //Tonne to Ounce
    a = inputData * 35274;
  }
  else if(input1 == 2 && input2 == 1){ //Kilogram to Tonne
    a = inputData / 1000;
  }
  else if(input1 == 2 && input2 == 3){ //Kilogram to Gram
    a = inputData * 1000;
  }
  else if(input1 == 2 && input2 == 4){ //Kilogram to Miligram
    a = inputData * 1000000;
  }
  else if(input1 == 2 && input2 == 5){ //Kilogram  to Microgram
    a = inputData * 1000000000;
  }
  else if(input1 == 2 && input2 == 6){ //Kilogram  to Pound
    a = inputData * 2;
  }
  else if(input1 == 2 && input2 == 7){ //Kilogram  to Ounce
    a = inputData * 10;
  }
  else if(input1 == 3 && input2 == 1){ //Gram to Tonne
    a = inputData / 1000000;
  }
  else if(input1 == 3 && input2 == 2){ //Gram to Kilogram
    a = inputData / 1000;
  }
  else if(input1 == 3 && input2 == 4){ //Gram to Miligram
    a = inputData * 1000;
  }
  else if(input1 == 3 && input2 == 5){ //Gram to Microgram
    a = inputData * 1000000;
  }
  else if(input1 == 3 && input2 == 6){ //Gram to Pound
    a = inputData * (0.00220462);
  }
  else if(input1 == 3 && input2 == 7){ //Gram to Ounce
    a = inputData * (0.105822);
  }
  else if(input1 == 4 && input2 == 1){ //Miligram to Tonne
    a = inputData / 1000000000;
  }
  else if(input1 == 4 && input2 == 2){ //Miligram to Kilogram
    a = inputData / 1000000;
  }
  else if(input1 == 4 && input2 == 3){ //Miligram to Gram
    a = inputData / 1000;
  }
  else if(input1 == 4 && input2 == 5){ //Miligram  to Microgram
    a = inputData * 1000;
  }
  else if(input1 == 4 && input2 == 6){ //Miligram  to Pound
    a = inputData * (0.0000022046);
  }
  else if(input1 == 4 && input2 == 7){ //Miligram to Ounce
    a = inputData * (0.0000352739);
  }
  else if(input1 == 5 && input2 == 1){ //Microgram to Tonne
    a = inputData / 1000000000000;
  }
  else if(input1 == 5 && input2 == 2){ //Microgram to Kilogram
    a = inputData / 1000000000;
  }
  else if(input1 == 5 && input2 == 3){ //Microgram to Gram
    a = inputData / 1000000;
  }
  else if(input1 == 5 && input2 == 4){ //Microgram to Miligram
    a = inputData / 1000;
  }
  else if(input1 == 5 && input2 == 6){ //Microgram  to Pound
    a = inputData * 453600000;
  }
  else if(input1 == 5 && input2 == 7){ //Microgram to Ounce
    a = inputData * (1000 * 0.0000352739);
  }
  else if(input1 == 6 && input2 == 1){ //Pound to Tonne
    a = inputData / 2000;
  }
  else if(input1 == 6 && input2 == 2){ //Pound to Kilogram
    a = inputData / 2;
  }
  else if(input1 == 6 && input2 == 3){ //Pound to Gram
    a = inputData / (0.00220462);
  }
  else if(input1 == 6 && input2 == 4){ //Pound to Miligram
    a = inputData * 453592;
  }
  else if(input1 == 6 && input2 == 5){ //Pound to Microgram
    a = inputData * 453600000;
  }
  else if(input1 == 6 && input2 == 7){ //Pound to Ounce
    a = inputData * 16;
  }
  else if(input1 == 7 && input2 == 1){ //Ounce to Tonne
    a = inputData / 35274;
  }
  else if(input1 == 7 && input2 == 2){ //Ounce to Kilogram
    a = inputData / 10;
  }
  else if(input1 == 7 && input2 == 3){ //Ounce to Gram
    a = inputData / (0.105822);
  }
  else if(input1 == 7 && input2 == 4){ //Ounce to Miligram
    a = inputData / (0.0000352739);
  }
  else if(input1 == 7 && input2 == 5){ //Ounce to Microgram
    a = inputData / (1000 * 0.0000352739);
  }
  else if(input1 == 7 && input2 == 6){ //Ounce to Pound
    a = inputData / 16;
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