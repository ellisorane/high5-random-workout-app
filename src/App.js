import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from './axios'

import './App.css'
import Modal from './components/Modal/Modal'
import Main from './components/Main/Main'
import Title from './components/Title/Title'
import Scores from './components/Scores/Scores'
import Nav from './components/Nav/Nav'
import SignIn from './components/SignIn/SignIn'

class App extends Component {
  state = {
    workouts: [
      'Pushups',
      'Situps',
      'Dips',
      'Lunges',
      'Squats'
    ],
    currentWorkout: '',
    min: '5',
    max: '20',
    reps: 0,
    showModal: false,
    message: '',
    signIn: 'Sign In',
    username: null,
    workoutStarted: false,
    error: false
  }

  logOutHandler = () => {
    this.setState({ workoutStarted: false })
    if(this.state.signIn === 'Log Out') {
      this.setState({signIn: 'Sign In', username: null})
    }
  }

  changeUsernameHandler = (e) => {
    const targetVal = e.target.value
    this.setState({username: targetVal})
  }

  setUsernameHandler = () => {
    if(this.state.username !== null)
    this.setState({signIn: 'Log Out'}) 
  }

  selectWorkoutHandler = () => {
      const workouts = this.state.workouts
      const index = Math.floor(Math.random() * workouts.length)
      this.setState({ currentWorkout: workouts[index] })
      
  }

  repCountHandler = () => {
    const min = Math.ceil(this.state.min) 
    const max = Math.floor(this.state.max)
    const randomReps = Math.floor(Math.random() * (max - min + 1)) + min
    this.setState({ reps: randomReps })
  }

  workoutHandler = () => {
    this.selectWorkoutHandler()
    this.repCountHandler()
  }

  showModalHandler = (e) => {
    this.setState({ showModal: true, workoutStarted: true })
    const target = e.target 

    if(target.textContent === 'YES'  && this.state.username !== null) {

      this.setState({ message: `Good Job ${this.state.username}!`, currentWorkout: '', reps: 0 })

      const data = {
        username: this.state.username,
        currentWorkout: this.state.currentWorkout,
        reps: this.state.reps
      }

      this.postScore(this.state.currentWorkout, data)

    } else if (target.textContent === 'YES') {
      this.setState({ message: 'Good Job!', currentWorkout: '', reps: 0 })
    } else {
      this.setState({ message: 'Better Luck Next Time!', currentWorkout: '', reps: 0 })
    }
  }

  postScore = (workout, data) => {
    axios.post(`/scores/${workout}.json`, data)
    .then(res => {
      console.log('Data sent', res.data)
    })
    .catch( error => {
      this.setState( { error: true } );
      console.log(error)
      });
  }

  closeModalHandler = () => {
    this.setState({ showModal: false })
  }

  setMinHandler = (e) => {
    const target = e.target.value
    this.setState({ min: target })
  }

  setMaxHandler = (e) => {
    const target = e.target.value
    this.setState({ max: target })
  }

  render() {
    return (
      <div className="App">
          <Nav signIn={this.state.signIn} clicked={this.logOutHandler} />
          <Title />
          <Modal clicked={this.closeModalHandler} showModal={this.state.showModal} message={this.state.message}/>
          <Switch>
            <Route path="/workouts" render = {(props) => (
              <Main 
                clicked={this.workoutHandler} 
                currentWorkout={this.state.currentWorkout} 
                reps={this.state.reps}
                min={this.state.min}
                max={this.state.max}
                changeMin={this.setMinHandler}
                changeMax={this.setMaxHandler}
                clickYes={this.showModalHandler}
                clickNo={this.showModalHandler}
                username={this.state.username}
                workoutStarted={this.state.workoutStarted}
                {...props} 
              />
            )} />
            <Route path="/scores" component={Scores} />

            <Route path="/" render= {(props) => (
              <SignIn clicked={this.setUsernameHandler} changed={this.changeUsernameHandler} {...props} />
            )} />

          </Switch>
      </div>
    );
  }
  
}

export default App
