import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BotImage from "../images/BotImage_auto_x2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  topBar: {
    background: theme.palette.background.paper,
  },
  button: {
    background: theme.palette.secondary.main,
    borderColor: theme.palette.primary.main,
    marginLeft: theme.spacing(1),
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  image: {
    maxWidth: "40px",
    borderRadius: "30px",
    marginRight: theme.spacing(1.5),
  },
  link: {
    color: "inherit",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.topBar}>
        <Toolbar>
          <img src={BotImage} className={classes.image} alt="Denky Bot" />
          <Typography variant="h6" className={classes.title}>
            <Link href="/" className={classes.link}>
              Grove
            </Link>
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            href="/commands"
            color="inherit"
          >
            Comandos
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
