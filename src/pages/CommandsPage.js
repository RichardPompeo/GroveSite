import React, { useState } from "react";
import {
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Button,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SpeakerIcon from "@material-ui/icons/Speaker";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";

import MusicList from "../components/MusicList";
import MiscList from "../components/MiscList";
import EffectsList from "../components/EffectsList";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
    margin: "0 auto",
    padding: "100px 0",
  },
  demo: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    background: theme.palette.background.default,
    border: "5px dashed" + theme.palette.secondary.main,
    borderRadius: "0",
    boxShadow: "none",
    padding: 0,
  },
  buttons: {
    textTransform: "none",
    width: "100%",
  },
}));

function CommandsPage() {
  const [activeList, setActiveList] = useState("1");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={9} justify="center">
          <Grid item xs={12} sm={3}>
            <div className={classes.demo}>
              <List dense style={{ padding: 0 }}>
                <Button
                  className={classes.buttons}
                  onClick={() => setActiveList("1")}
                >
                  <ListItem>
                    <ListItemIcon>
                      <MusicNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Música" />
                  </ListItem>
                </Button>
                <Divider />
                <Button
                  className={classes.buttons}
                  onClick={() => setActiveList("2")}
                >
                  <ListItem>
                    <ListItemIcon>
                      <SpeakerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Efeitos" />
                  </ListItem>
                </Button>
                <Divider />
                <Button
                  className={classes.buttons}
                  onClick={() => setActiveList("3")}
                >
                  <ListItem>
                    <ListItemIcon>
                      <ViewAgendaIcon />
                    </ListItemIcon>
                    <ListItemText primary="Miscellaneous" />
                  </ListItem>
                </Button>
              </List>
            </div>
          </Grid>
          <Grid item xs={12} sm={9}>
            <List className={classes.demo}>
              {activeList === "1" ? <MusicList /> : null}
              {activeList === "2" ? <EffectsList /> : null}
              {activeList === "3" ? <MiscList /> : null}
            </List>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CommandsPage;
