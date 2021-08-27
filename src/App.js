import React, {useState} from "react";
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import { useStateValue } from "./StateProvider";

function App() {

  const [{user}, dispatch] = useStateValue();

  // BEM Naming convention
  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (

      <div className="app_body">
        <Router> 

         <Sidebar />

          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>

            <Route path="/">
              <Chat />
            </Route>
            
          </Switch>  
        </Router>
      </div>

      )}
    </div>
    
  );
}

export default App;
