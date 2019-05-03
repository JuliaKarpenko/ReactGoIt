import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/HomePage';
import About from '../pages/AboutPage';
// import NotFoundPage from '../pages/NotFoundPage';
import Nav from './Nav';
import ArticlesPage from '../pages/ArticlesPage';
import ItemPage from '../pages/ItemPage';


const App = () => (
<div>
  <Router>
    <Nav/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/articles/:id' component={ItemPage}/>
      <Route path='/articles' component={ArticlesPage}/>
      {/* <Route component={NotFoundPage}/> */}
      <Redirect to="./" />
    </Switch> 
  </Router>
  
</div>
);

export default App;