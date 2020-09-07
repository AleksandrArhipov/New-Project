import React, { useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import Components from "../../components/components";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Components.Home />
      </Route>
      <Route path="/profile">
        <Components.Profile />
      </Route>
      <Route path="/posts">
        <Components.MyPosts />
      </Route>
      {/* <Route path="/messages">
        <Components.Messages />
      </Route> */}
      <Route path="/news/:pageNo">
        <Components.News />
      </Route>
      <Route path="/login">
        <Components.Login />
      </Route>
      <Route path="/registration">
        <Components.Registration />
      </Route>
    </Switch>
  );
};

export default Content;
