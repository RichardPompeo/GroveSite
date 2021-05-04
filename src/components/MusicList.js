import React from "react";
import { ListItem, ListItemText, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  command: {
    "&:hover": {
      background: theme.palette.background.paper,
      cursor: "pointer",
    },
  },
}));

function MusicList() {
  const classes = useStyles();

  return (
    <>
      <ListItem className={classes.command}>
        <ListItemText
          primary="join"
          secondary="Use para entrar no canal de voz."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="loop"
          secondary="Use para ativar o loop da queue/música."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="lyrics"
          secondary="Procure pela letra de uma música."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="move"
          secondary="Use para mover uma música para outra posição."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="now-playing"
          secondary="Use para ver a música que está tocando."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="pause"
          secondary="Use para pausar/resumir a música."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText primary="play" secondary="Use para tocar uma música." />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="queue"
          secondary="Use para ver a queue do servidor."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="remove"
          secondary="Use para remover uma música da queue."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="search"
          secondary="Use para pesquisar uma música/artista."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="shuffle"
          secondary="Use para embaralhar a queue."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="skip"
          secondary="Use para pular a música atual."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="stop"
          secondary="Use para parar de tocar música."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText primary="volume" secondary="Use para alterar o volume." />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="clear-queue"
          secondary="Use para limpar a queue."
        />
      </ListItem>
    </>
  );
}

export default MusicList;
