import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import 'App.css'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import * as actions from 'actions'



class App extends Component {
  renderButton = () => {
    const handleClick = this.props.changeAuth
    return (
      <button onClick={() => handleClick(!this.props.auth)}>{this.props.auth ? 'Sign out': 'Sign in'}</button>
    )
  }

  renderHeader = () => {
    const headerStyles = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      listStyle: 'none'
    }

    return (
      <ul style={headerStyles}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }

  render = () => {
    return (
      <div className="App">
        {this.renderHeader()}
        Hi there
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(App)