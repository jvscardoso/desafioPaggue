import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let targetDate = new Date(year, 11, 31); // Defina sua data de destino aqui (ano, mês-1, dia)
  let currentTime = new Date();
  let difference = targetDate - currentTime;

  if (difference < 0) {
    difference = 0;
  }

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds
  };
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Grid container justifyContent="center" spacing={2} paddingTop={5} paddingBottom={5}>
      <Grid item xs={3}>
        <Typography variant="h4" align="center">
          {timeLeft.days}
        </Typography>
        <Typography variant="body1" align="center">
          dias
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h4" align="center">
          {timeLeft.hours}
        </Typography>
        <Typography variant="body1" align="center">
          horas
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h4" align="center">
          {timeLeft.minutes}
        </Typography>
        <Typography variant="body1" align="center">
          minutos
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h4" align="center">
          {timeLeft.seconds}
        </Typography>
        <Typography variant="body1" align="center">
          segundos
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CountdownTimer;
