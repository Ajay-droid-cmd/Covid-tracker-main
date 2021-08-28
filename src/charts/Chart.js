import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
const useStyles = makeStyles({
  header: {
    color: 'white',
    fontSize: '20px',
    marginTop: '20px',
    marginBottom: '15px',
    textAlign: 'center',
  },
  chart: {
    margin: '0px',
  },
  container: {
    background: 'white',
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
      </Container>
    </>
  );
};

export default Chart;
