import React from 'react';
import { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Chart from '../charts/Chart';
const useStyles = makeStyles({
  grid: {
    marginTop: '10px',
  },
  btn : {
    textDecoration: 'none',
    marginLeft: '5px',
  },
  cardheader1: {
    color: 'orange',
    paddingBottom: '10px',
    textAlign: 'center',
  },
  cardheader2: {
    color: 'green',
    paddingBottom: '10px',
    textAlign: 'center',
  },
  cardheader3: {
    color: 'red',
    paddingBottom: '10px',
    textAlign: 'center',
  },
  numbers: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  percent: {
    textAlign: 'center',
    fontSize: '20px',
    padding: '5px',
  },
  iso: {
    color: 'lightblue',
  },
});
const Country = (props) => {
  const classes = useStyles();
  const [eachcountry, seteachcountry] = useState([]);
  const [todaydeath, settodaydeath] = useState('');
  const [todaycases, settodaycases] = useState('');
  const [todayrecovered, settodayrecovered] = useState('');

  const [activecases, setactivecases] = useState('');
  const [recoveredcases, setrecoveredcases] = useState('');
  const [deaths, setdeaths] = useState('');
  const [iso, setiso] = useState('');
  const [lat, setlat] = useState('');
  const [lon, setlon] = useState('');
  const country = async () => {
    try {
      const res = await fetch(
        `https://corona.lmao.ninja/v2/countries/${props.country}?yesterday=true&strict=true&query`
      );
      const jsondata = await res.json();
      seteachcountry(jsondata);
      setlat(jsondata.countryInfo.lat)
      setlon(jsondata.countryInfo.long);
      setactivecases(jsondata.active);
      setdeaths(jsondata.deaths);
      setrecoveredcases(jsondata.recovered);
      setiso(jsondata.countryInfo.iso3);
      settodaycases(jsondata.todayCases);
      settodaydeath(jsondata.todayDeaths);
      settodayrecovered(jsondata.todayRecovered);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    country();
  }, [props.country]);
  // useEffect(() => {
  //   country();

  // },[lat,lon])
  const CovidData = {
    recoveredcases,
    activecases,
    deaths,
    todaycases,
    todaydeath,
    todayrecovered,
  };
  const recoverypercentage = (
    (recoveredcases / (activecases + recoveredcases + deaths)) *
    100
  ).toFixed(2);
  //console.log(lat,lon);


  return (
    <Container>
      <Typography variant="h6" className={classes.iso}>
        {iso}
      </Typography>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12} lg={4}>
          <Card elevation={2}>
            <CardContent>
              <Typography
                variant="h5"
                color="textSecondary"
                className={classes.cardheader1}
              >
                Active Cases
              </Typography>

              {eachcountry && (
                <Typography variant="h5" className={classes.numbers}>
                  {activecases}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card elevation={2}>
            <CardContent>
              <Typography
                variant="h5"
                color="textSecondary"
                className={classes.cardheader2}
              >
                Recovered
              </Typography>

              {eachcountry && (
                <Typography variant="h5" className={classes.numbers}>
                  {recoveredcases}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card elevation={2}>
            <CardContent>
              <Typography
                variant="h5"
                color="textSecondary"
                className={classes.cardheader3}
              >
                Deaths
              </Typography>

              {eachcountry && (
                <Typography variant="h5" className={classes.numbers}>
                  {deaths}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" className={classes.percent}>
                The Recovery percentage  of {props.country} is{' '}
                {recoverypercentage}%.
                <Button className={classes.btn} variant="contained" color="primary">
  <a href="https://covid-hack-v1.netlify.app/" >GSCT Link</a>
</Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Chart data={CovidData} />
    </Container>

  );
};

export default Country;
