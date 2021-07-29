import React, {Component} from 'react'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Container} from 'react-bootstrap'

import Topbar from '../Component/Topbar/Topbar'
import Home from './Home/Home'

class View extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: 0
    };
  }

    passAuth = (auth) => this.setState({auth: auth})

    render() {

      let auth = this.state.auth

      	return (
		    <Router>
	      	<Topbar />
		      <Container className="px-0" fluid>
		        <Switch>
		          <Route exact path="/">
		          	<Home />
		          </Route>

              <PrivateRoute exact path="/admin" auth={auth}>
                {'admin'}
              </PrivateRoute>
              <Route exact path="*">
                {'404'}
              </Route>
		        </Switch>
		    	{/*Footer*/}
		      </Container>
		    </Router>
      )
    }
  }

function PrivateRoute({ children, ...rest }) {
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          rest.auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default View