import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ParticleContainer from '../ParticleContainer'
import './App.scss'
import { RootState } from '../../store/reducers'
import { User } from '../../models/user'

export interface Props {
  user: User;
}

const App = ({ user }: Props) => {
  console.log(user);

  return (
    <div className="home">
      <ParticleContainer />
      <h1 className="title">WORD RACE</h1>
      <h3>Put your vocabulary skills to the test</h3>

      <div className="button-wrapper">
        <button>New Game</button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ user }: RootState) => {
  return {
    user,
  }
}

export default withRouter(connect(mapStateToProps, {})(App))