import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "40px",
    display: "flex",
    paddingBottom: "140px",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    display: "inline",
  },
  button: {
    background: theme.palette.secondary.main,
    borderColor: theme.palette.primary.main,
    marginLeft: "auto",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));

function Vote() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.title}>
              top.gg
            </Typography>
            <Button className={classes.button} variant="contained" href="/top">
              Votar
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.title}>
              Bots For Discord
            </Typography>
            <Button className={classes.button} variant="contained" href="/bfd">
              Votar
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.title}>
              Discord Bot List
            </Typography>
            <Button className={classes.button} variant="contained" href="/dbl">
              Votar
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Vote;
