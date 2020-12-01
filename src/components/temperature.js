import React, { useState } from 'react';
import './main.css'
import { Button, makeStyles, Container, Grid, Switch, FormControlLabel, Select, MenuItem, FormControl } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField';
import $ from 'jquery'


/* IMAGE */
import TemperatureImage from './images/temperature.png'
import HomeImage from './images/home.png'
import ConvertImage from './images/convert.png'

var inputNumber = 0
var inputSelectFrom = ''
var inputSelectTo = ''

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
export default function Temperature() {
  const classes = useStyles()

  const [result, setresult] = useState("")

  const [from1, setfrom1] = React.useState(3)
  const setFrom = (d) => {
    inputSelectFrom = d.target.value
    setfrom1(inputSelectFrom)
    inputNumber = checkTemperature(inputNumber, inputSelectFrom, inputSelectTo)
    setresult(inputNumber)
  }

  const [to1, setto1] = React.useState(3)
  const setTo = (e) => {
    inputSelectTo = e.target.value
    setto1(inputSelectTo)
    inputNumber = checkTemperature(inputNumber, inputSelectFrom, inputSelectTo)
    setresult(inputNumber)
  }

  const [input1, setinput1] = useState("")
  const setInput = (b) => {
    inputNumber = b.target.value
    setinput1(b.target.value)
    inputNumber = checkTemperature(inputNumber, inputSelectFrom, inputSelectTo)
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
            <h1 className="header"> <img style={{width: 60, height: 30}}  src={TemperatureImage} />Temperature Converter</h1>
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
                  <option value={1}>Celcius</option>
                  <option value={2}>Fahrenheit</option>
                  <option value={3}>Kelvin</option>
                  <option value={4}>Reamur</option>
                </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} className="center" >
            <FormControl id="ToSwitch" style={{width: 220}} variant="filled">
              <InputLabel htmlFor="filled-age-native-simple">To</InputLabel>
                <Select id="To" value={to1} onChange={setTo}>
                  <option value={1}>Celcius</option>
                  <option value={2}>Fahrenheit</option>
                  <option value={3}>Kelvin</option>
                  <option value={4}>Reamur</option>
                </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} className="center">
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

function checkTemperature(inputData, suhu_satu, suhu_dua) {
  let a = 0
  if(suhu_satu == 1 && suhu_dua == 1){
		a = inputData;
	}
	else if(suhu_satu == 2 && suhu_dua == 2){
		a = inputData;
	}
	else if(suhu_satu == 3 && suhu_dua == 3){
		a = inputData;
  }
  else if(suhu_satu == 4 && suhu_dua == 4){
    a = inputData
  }
	else if(suhu_satu == 1 && suhu_dua == 2){ //Celcius to Fahrenheit
		a = CelciustoFahrenheit(inputData).toFixed(2);
	}
	else if(suhu_satu == 1 && suhu_dua == 3){ //Celcius to Kelvin
		a = CelciustoKelvin(inputData).toFixed(2);
  }
  else if(suhu_satu == 1 && suhu_dua == 4){ //Celcius to Reamur
    a = CelciustoReamur(inputData).toFixed(2);
  }
	else if(suhu_satu == 2 && suhu_dua == 1){ //Fahrenheit to Celcius
		a = FahrenheittoCelsius(inputData).toFixed(2);
	}
	else if(suhu_satu == 2 && suhu_dua == 3){ //Fahrenheit to Kelvin
		a = FahrenheittoKelvin(inputData).toFixed(2);
  }
  else if(suhu_satu == 2 && suhu_dua == 4){ //Fahrenheit to Reamur
    a = FahrenheittoReamur(inputData).toFixed(2)
  } 
	else if(suhu_satu == 3 && suhu_dua == 1){ //Kelvin to Celcius
		a = KelvintoCelcius(inputData).toFixed(2);
	}
	else if(suhu_satu == 3 && suhu_dua == 2){ //Kelvin to Fahrenheit
		a = KelvintoFahrenheit(inputData).toFixed(2);
  }
  else if(suhu_satu == 3 && suhu_dua == 4){ //Kelvin to Reamur
    a = KelvintoReamur(inputData).toFixed(2);
  }
  else if(suhu_satu == 4 && suhu_dua == 1){ //Reamur to Celcius
    a = ReamurtoCelcius(inputData).toFixed(2);
  }
  else if(suhu_satu == 4 && suhu_dua == 2){ //Reamur to Fahrenheit
    a = ReamurtoFahrenheit(inputData).toFixed(2);
  }
  else if(suhu_satu == 4 && suhu_dua == 3){ //Reamur to Kelvin
    a = ReamurtoKelvin(inputData).toFixed(2);
  }
  return a
}
//Celcius
function CelciustoFahrenheit(celcius){
	return (9/5) * celcius + 32;
}
function CelciustoKelvin(celcius){
	return (1) * celcius + 273.15 ;
}
function CelciustoReamur(celcius){
  return (4/5) * celcius
}

//Fahrenheit
function FahrenheittoCelsius(fahrenheit) { 
  return (5/9) * (fahrenheit-32); 
} 
function FahrenheittoKelvin(fahrenheit) { 
  return (5/9) * (fahrenheit-32) + 273.15; 
} 
function FahrenheittoReamur(fahrenheit) {
  return (4/9) * (fahrenheit-32);
}

//Kelvin
function KelvintoCelcius(kelvin){
	return  kelvin-273.15;
}
function KelvintoFahrenheit(kelvin){
	return  (9/5) * (kelvin - 273.15) + 32;
}
function KelvintoReamur(kelvin){
  return (4/5) * (kelvin - 273);
}

//Reamur
function ReamurtoCelcius(reamur){
  return (5/4) * reamur;
}
function ReamurtoFahrenheit(reamur){
  return (9/4) * (reamur + 32);
}
function ReamurtoKelvin(reamur){
  return (5/4) * (reamur + 273);
}

function switchDisplay() {
  $("#cont").toggleClass('contSwitch')
  $('body').toggleClass('bodySwitch')
  $('#switchTanda').toggleClass('inputSwitch')
  $('#FromSwitch').toggleClass('inputSwitch')
  $('#ToSwitch').toggleClass('inputSwitch')
}
(function () {
  $('#content').remove()
  $('#alertPopUp').remove()
}())
function link_home(){
  window.location.href = "./../../public/index.html"
}