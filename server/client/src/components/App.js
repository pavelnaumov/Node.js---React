import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions";

import Header from "./Header";
import Landing from './Landing';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const Dashboard = () => (
      <div>
        <h2>Dashboard</h2>
      </div>
    );

    const Survey = () => (
      <div>
        <h2>Survey New</h2>
      </div>
    );
    
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" exact component={Survey} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
