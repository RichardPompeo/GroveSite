import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage";
import CommandsPage from "./pages/CommandsPage";

function redirectToAdd() {
  window.open(
    "https://discord.com/oauth2/authorize?client_id=712785958231080990&permissions=0&scope=bot%20applications.commands",
    "_self"
  );
}

function redirectToSupport() {
  window.open("https://discord.gg/wDPvreyZTU", "_self");
}

function redirectToTop() {
  window.open("https://top.gg/bot/712785958231080990", "_self");
}

function redirectToBfd() {
  window.open("https://botsfordiscord.com/bot/712785958231080990", "_self");
}

function redirectToDbl() {
  window.open("https://discordbotlist.com/bots/grove-150", "_self");
}

function redirectToGit() {
  window.open("https://github.com/RichardPompeo/GroveSlash", "_self");
}

function Routes() {
  return (
    <>
      <TopBar />
      <Router>
        <Switch>
          <Route exact path="/add">
            {redirectToAdd}
          </Route>
          <Route exact path="/support">
            {redirectToSupport}
          </Route>
          <Route exact path="/top">
            {redirectToTop}
          </Route>
          <Route exact path="/bfd">
            {redirectToBfd}
          </Route>
          <Route exact path="/dbl">
            {redirectToDbl}
          </Route>
          <Route exact path="/github">
            {redirectToGit}
          </Route>
          <Route exact path="/commands" component={CommandsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default Routes;
