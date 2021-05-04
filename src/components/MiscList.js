import React from "react";
import { Divider, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  command: {
    "&:hover": {
      background: theme.palette.background.paper,
      cursor: "pointer",
    },
  },
}));

function MiscList() {
  const classes = useStyles();

  return (
    <>
      <ListItem className={classes.command}>
        <ListItemText
          primary="about"
          secondary="Use para ver informações do bot."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText primary="help" secondary="Obtenha ajuda sobre o bot." />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="shard-info"
          secondary="Use para ver informações das shards."
        />
      </ListItem>
    </>
  );
}

export default MiscList;
