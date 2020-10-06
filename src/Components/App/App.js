import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'; 
import './App.css';

import Header from '../Header/Header'
import MainPage from '../../Routes/MainPage/MainPage'
import ProductsContext from '../Contexts/ProductsContext';

class App extends Component {
  static contextType = ProductsContext

  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <>
        <Header />
        <main>
          {this.state.error && <p className="error">There was an error.</p>}
          <Switch>
            <Route exact path={"/"}
              component={MainPage} />
          </Switch>
        </main>
      </>
    );
  }
}
export default withRouter(App);
