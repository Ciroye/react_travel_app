import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/sign-up">
              <SignUp></SignUp>
            </Route>
          </Switch>
      </Router>
    </>
  )
}

export default App
