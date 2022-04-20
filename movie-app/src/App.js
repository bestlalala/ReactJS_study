import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
  <BrowserRouter>
      <Route path="/abot-us">
        <h1>Hello</h1>
      </Route>
      <Route path="/movie/:id">
        <Detail/>
      </Route>
      <Route path="/">
        <Home />
      </Route>
  </BrowserRouter>
  );
}

export default App;
