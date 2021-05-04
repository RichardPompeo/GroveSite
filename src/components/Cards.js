import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Icon, Paper, Typography } from "@material-ui/core";

import QueueIcon from "@material-ui/icons/Queue";
import QueueMusicOutlinedIcon from "@material-ui/icons/QueueMusicOutlined";
import SpeakerIcon from "@material-ui/icons/Speaker";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import CreditCardIcon from "@material-ui/icons/CreditCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    margin: "50px 0 120px 0",
    padding: "40px",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    background: theme.palette.background.default,
    border: "5px dashed" + theme.palette.secondary.main,
    borderRadius: "0",
    boxShadow: "none",
    "&:hover": {
      background: theme.palette.background.paper,
      cursor: "pointer",
    },
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
  },
}));

function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={9}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <QueueMusicOutlinedIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Streaming
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              O Bot possui uma ótima qualidade de Streaming, sem lag, sem
              ruídos, e com uma tempo de resposta curto.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <DesktopWindowsIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Multiplataforma
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              Você pode colocar suas músicas, playlists e lives da plataforma
              que mais gostar!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <VolumeUpIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Controlador de Volume
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              Você pode controlar o volume da música, para deixar apenas um som
              ambiente, ou ouvir com o volume no máximo!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <SpeakerIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Efeitos
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              Além de ouvir música, você pode colocar efeitos para deixar a
              música mais divertida ou aumentar o grave!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <QueueIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Queue
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              Você pode controlar a lista de músicas, como por exemplo: mover,
              remover e embaralhar, e sem limite de músicas!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <CreditCardIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Gratuito
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              Todos esses recursos e outros, são totalmente gratuitos, o que
              está esperando? Adicione o Bot agora mesmo!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
