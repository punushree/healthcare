import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './common/Navbar/Navbar'
import "./App.css"
import Home from "./Components/Pages/Home"
import Footer from './common/Footer'
import About from "./Components/Pages/About"
import Contact from './Components/Pages/Contact'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={ Home }></Route>
          <Route path="/About" exact component={ About }></Route>
          <Route path="/Contact" exact component={ Contact }></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App