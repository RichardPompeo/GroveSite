import React from "react";
import Alert from "@material-ui/lab/Alert";
import {
  Typography,
  Grid,
  Button,
  Link,
  Collapse,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";

import BotImage from "../images/BotImage_auto_x2.jpg";

import Cards from "../components/Cards";
import Vote from "../components/Vote";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
    margin: "0 auto",
  },
  buttons: {
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    marginTop: theme.spacing(3),
    fontSize: "20px",
    marginRight: theme.spacing(3),
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  "@media(max-width: 560px)": {
    buttons: {
      width: "100%",
    },
  },
  "@media(max-width: 1280px)": {
    image: {
      display: "none",
    },
  },
  image: {
    maxWidth: "270px",
    width: "50%",
    minWidth: "80px",
    borderRadius: "300px",
    border: "15px solid rgb(255, 255, 255, 0.1)",
  },
  alert: {
    margin: "15px",
    backgroundColor: theme.palette.secondary.main,
    fontSize: "17px",
  },
  link: {
    color: "white",
  },
}));

function HomePage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          variant="filled"
          severity="info"
          className={classes.alert}
        >
          Slash Commands disponíveis!!🎉🎉 —{" "}
          <Link className={classes.link} href="/commands">
            veja agora!
          </Link>
        </Alert>
      </Collapse>
      <div className={classes.root}>
        <div className={classes.content}>
          <Grid container>
            <Grid item sm={12} lg={6} style={{ textAlign: "left" }}>
              <Typography variant="h2" className={classes.title}>
                Grove
              </Typography>
              <Typography variant="h5" style={{ paddingTop: "10px" }}>
                Escute música em seu servidor a qualquer hora, de forma 100%
                gratuita, e com suporte a diversas plataformas de Streaming!
              </Typography>
              <Button
                variant="contained"
                className={classes.buttons}
                href="/add"
                color="inherit"
              >
                Adicionar
              </Button>
              <Button
                variant="contained"
                className={classes.buttons}
                href="/support"
                color="inherit"
              >
                Suporte
              </Button>
            </Grid>
            <Grid item sm={12} lg={6} style={{ textAlign: "right" }}>
              <img src={BotImage} className={classes.image} alt="Grove Bot" />
            </Grid>
          </Grid>
        </div>
      </div>
      <Cards />
      <Vote />
    </>
  );
}

export default HomePage;
