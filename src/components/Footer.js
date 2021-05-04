import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Icon } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import { FaDiscord } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    position: "relative",
    padding: theme.spacing(2),
  },
  content: {
    width: "95%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
  },
  icons: {
    marginRight: theme.spacing(2),
  },
  links: {
    transition: "all 0.3s",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  title: {
    display: "inline",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h6" className={classes.title}>
          Grove - Todos os direitos reservados.
        </Typography>
        <Link
          href="/add"
          className={classes.links}
          color="inherit"
          style={{ marginLeft: "auto" }}
        >
          <Icon className={classes.icons}>
            <FaDiscord />
          </Icon>
        </Link>
        <Link href="/support" className={classes.links} color="inherit">
          <Icon className={classes.icons}>
            <BiSupport />
          </Icon>
        </Link>
        <Link href="/github" className={classes.links} color="inherit">
          <Icon className={classes.icons}>
            <GitHubIcon />
          </Icon>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
