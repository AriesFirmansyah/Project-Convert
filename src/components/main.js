import React, {Component} from 'react'
import './main.css'
import { Route } from 'react-router-dom'
import { Button, makeStyles, Container, Grid, Switch, FormControlLabel } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { Router, Link } from "@reach/router"
import $ from 'jquery'

/* Link */
import TemperaturePage from './temperature'
import WeightPage from './weight'
import TimePage from './time'
import SpeedPage from './speed'

/* IMAGES */
import TemperatureImage from './images/temperature.png'
import WeightImage from './images/weight.png'
import SpeedImage from './images/Speed.png'
import TimeImage from './images/time.png'
import RepoImage from './images/repo.png'

const useStyles = makeStyles({
  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    textTransform: 'capitalize',
    fontSize: 27,
    width: '260px',
    height: '90px',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'aliceblue',
  },
  btnRepo: {
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
function Main() {
  const classes = useStyles();
  return (
    <div id="cont" className="cont">
      <Container id="alertPopUp"  maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Alert id="greet" className="alert" variant="filled" severity="info">
              Welcome to converter webtite!
            </Alert>
          </Grid>
          <Grid className="textRight" item xs={12}>
            <p className="inline" style={{marginRight: 12}} >Light</p>
              <FormControlLabel onChange={switchDisplay} control={<Switch color="primary"/>} />
            <p className="inline" style={{marginLeft: -17}} >Dark</p>
          </Grid>
        </Grid>
       </Container>
      <Container maxWidth="sm">
          <Grid id="content" container spacing={4}>
              <Grid item xs={12}>
                <h1 className="header center">CONVERTER</h1>
                <h4 className="headerText center" > Welcome to converter website. Select a menu to convert.</h4>
              </Grid>
              <Grid className="center" item xs={12} sm={6}>
                  <Link to="/temperature" style={{textDecoration: 'none'}} replace="true">
                    <Button className={classes.btn} onClick={hide} variant="contained" >
                      <img style={{width: "70px"}} src={TemperatureImage} /> Temperature
                    </Button>
                  </Link>
              </Grid>
              <Grid className="center" item xs={12} sm={6}>
                  <Link to="/weight" style={{textDecoration: 'none'}} replace="true">
                    <Button className={classes.btn} style={{textTransform: 'capitalize'}} onClick={hide} variant="contained" >
                      <img className="imageWeight" src={WeightImage} /> Weight
                    </Button>
                  </Link>
              </Grid>
              <Grid className="center" item xs={12} sm={6}>
                  <Link to="/time" style={{textDecoration: 'none'}} replace="true">
                    <Button className={classes.btn} onClick={hide} variant="contained" >
                      <img className="imageTime" src={TimeImage} /> Time
                    </Button>
                  </Link>
              </Grid>
              <Grid className="center" item xs={12} sm={6}>
                  <Link to="/speed" style={{textDecoration: 'none'}} replace="true">
                    <Button className={classes.btn} onClick={hide} variant="contained" >
                      <img className="imageSpeed" src={SpeedImage} /> Speed
                    </Button>
                  </Link>
              </Grid>
              <Grid className="center" item xs={12}>
                <h3 style={{marginTop: 67, fontWeight: "normal"}} > 
                  Made by Aries Firmansyah using <strong><code><i>React</i></code></strong> and <strong><code><i>Material-UI</i></code></strong>
                </h3>
              </Grid>
              <Grid className="center" item xs={12}>
                    <Button href="https://www.google.com/" target="_blank" className={classes.btnRepo} variant="contained" >
                      <img className="imageRepo" src={RepoImage} /> 
                      View Repository
                    </Button>
              </Grid>
          </Grid>
          <Router>    
              <TemperaturePage path="/temperature"></TemperaturePage>
              <Route exact path="/temperature" component={TemperaturePage} />
              <WeightPage path="/weight"></WeightPage>
              <Route exact path="/weight" component={WeightPage} />
              <TimePage path="/time"></TimePage>
              <Route exact path="/time" component={TimePage} />
              <SpeedPage path="/speed"></SpeedPage>
              <Route exact path="/speed" component={SpeedPage} />
          </Router>
      </Container>
    </div>
  );
}
(function AlertOut() {
  setTimeout(function(){ $("#greet").fadeOut(2000) }, 3000)
}())

function switchDisplay() {
  $("#cont").toggleClass('contSwitch');
  $('body').toggleClass('bodySwitch')
}

function hide() {
  $('#content').hide()
  $('#alertPopUp').hide()
}

export default Main;
