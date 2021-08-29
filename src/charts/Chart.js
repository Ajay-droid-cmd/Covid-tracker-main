import React from 'react';
import { makeStyles, Container, Typography, Grid } from '@material-ui/core';
import { Bar, Pie } from 'react-chartjs-2';
const useStyles = makeStyles({
  header: {
    color: 'slategrey',
    fontSize: '20px',
    marginTop: '20px',
    marginBottom: '15px',
    textAlign: 'center',
  },
  chart: {
    marginBottom: '20px',
  },
  container: {
    background: 'white',
  },
  headerPie: {
    color: 'slategrey',
    fontSize: '8px',

    textAlign: 'center',
  },
});

const Chart = ({ data }) => {
  const recoveredcases = data.recoveredcases;
  const activecases = data.activecases;
  const deaths = data.deaths;
  const todaycases = data.todaycases;
  const todaydeath = data.todaydeath;
  const todayrecovered = data.todayrecovered;
  const dataCovid = {
    labels: [
      'ActiveCases',
      'Today-Cases',
      'RecoveredCases',
      'Today-RecoveredCases',
      'Deaths',
      'Today-Deaths',
    ],
    datasets: [
      {
        label: 'No Of People',
        data: [
          activecases,
          todaycases,
          recoveredcases,
          todayrecovered,
          deaths,
          todaydeath,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const ActivecasesPie = {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        label: 'Active Cases V/s Today Cases',
        data: [activecases, todaycases],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  };
  const optionpie = {
    responsive: true,
  };
  const DeathsPie = {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        label: 'Deaths vs Today Death',
        data: [deaths, todaydeath],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  };
  const RecoveredPie = {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        label: 'Recovered vs Today Recovered',
        data: [recoveredcases, todayrecovered],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',

    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'CountryData',
      },
    },
  };

  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.header}>
          Bar chart Covid Data
        </Typography>
        <Bar data={dataCovid} options={options} className={classes.chart} />
        <Grid container spacing={1}>
          <Grid item md={12} lg={4}>
            <Typography variant="h6" className={classes.headerPie}>
              Active Cases V/s Today Cases
            </Typography>
            <Pie data={ActivecasesPie} options={optionpie}></Pie>
          </Grid>
          <Grid item md={12} lg={4}>
            <Typography variant="h4" className={classes.headerPie}>
              Recovered vs Today Recovered
            </Typography>
            <Pie data={RecoveredPie} options={optionpie}></Pie>
          </Grid>
          <Grid item md={12} lg={4}>
            <Typography variant="h4" className={classes.headerPie}>
              Deaths vs Today Death
            </Typography>
            <Pie data={DeathsPie} options={optionpie}></Pie>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Chart;