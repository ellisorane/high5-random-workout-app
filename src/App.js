import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

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
    min: '',
    max: '',
    reps: 0,
    showModal: false,
    message: ''
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
    this.setState({ showModal: true })
    const target = e.target 
    if(target.textContent === 'YES') {
      this.setState({ message: 'Good Job!', currentWorkout: '', reps: 0, min: '', max: '' })
    } else {
      this.setState({ message: 'Better Luck Next Time!', currentWorkout: '', reps: 0, min: '', max: '' })
    }
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
    console.log(this.state.max)
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Title />
        <Modal clicked={this.closeModalHandler} showModal={this.state.showModal} message={this.state.message}/>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/workouts" render={(props) => (
            <Main 
              clicked={this.workoutHandler} 
              currentWorkout={this.state.currentWorkout} 
              reps={this.state.reps}
              min={this.state.min}
              max={this.state.max}
              changeMin={(e) => this.setMinHandler(e)}
              changeMax={(e) => this.setMaxHandler(e)}
              clickYes={(e) => this.showModalHandler(e)}
              clickNo={(e) => this.showModalHandler(e)}
              {...props} 
            />
          )} />
          <Route path="/scores" component={Scores} />
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
