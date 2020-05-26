import React, { Component } from 'react'
import axios from '../../axios'

import './Scores.css'

let dipInDescending = []
let lungesInDescending = []
let pushupsInDescending = []
let situpsInDescending = []
let squatsInDescending = []

class Scores extends Component {
    state = { 
        tableHeadings: null,
        loading: true,
        workouts: [
            {
                Dips: [],
                Lunges: [],
                Pushups: [],
                Situps: [],
                Squats: [] 
            }
        ],
        error: false        
        
    }

    componentDidMount() {
        axios.get('/scores.json')
        .then(res => {
            const scores = res.data
            if(scores !== null) {
                this.setState({ tableHeadings: Object.keys(scores)})
                this.setState({ Dips: Object.entries(scores).map(entries => Object.values(entries[1])).map(i => i)[0].map(info => info) })
                this.setState({ Lunges: Object.entries(scores).map(entries => Object.values(entries[1])).map(i => i)[1].map(info => info) })
                this.setState({ Pushups: Object.entries(scores).map(entries => Object.values(entries[1])).map(i => i)[2].map(info => info) })
                this.setState({ Situps: Object.entries(scores).map(entries => Object.values(entries[1])).map(i => i)[3].map(info => info) })
                this.setState({ Squats: Object.entries(scores).map(entries => Object.values(entries[1])).map(i => i)[4].map(info => info) })
                this.setState({loading: false})
            }
        })
        .catch( error => {
            this.setState( { error: true } );
            console.log(error)
        });
    }


    colCreator(workout, descendingOrderArr) {
        let listItem
        let users = []

        workout.map(user => {
            descendingOrderArr.push(user.reps)
            users.push(user)
            return null
        })
        descendingOrderArr.sort((a, b) => b - a)

        //Prevents repeating numbers and names
        descendingOrderArr = [...new Set(descendingOrderArr)]
        users = [...new Set(users)]
        
        users.map(user => {
            for(let i = 0; i < descendingOrderArr.length; i++) {
                if(user.reps === descendingOrderArr[i]) {
                    descendingOrderArr.splice(i, i, user.username + "-" + user.reps)
                }
            }
            return null
        })
        descendingOrderArr.splice(0, 1)
        descendingOrderArr.splice(3)
        listItem = descendingOrderArr.map(i => <li>{i}</li>)
    
        return listItem

    }

    render() {
        let table = <h3>LOADING...</h3>
        if(!this.state.loading) {

            let tableHeadings = this.state.tableHeadings.map(headings => <div className="headingDiv"><li>{headings}</li></div>)
            let dipsRow = this.colCreator(this.state.Dips, dipInDescending)
            let lungesRow = this.colCreator(this.state.Lunges, lungesInDescending)
            let pushupsRow = this.colCreator(this.state.Pushups, pushupsInDescending)
            let situpsRow =this.colCreator(this.state.Situps, situpsInDescending)
            let squatsRow = this.colCreator(this.state.Squats, squatsInDescending)

            table = (
                <div>
                    <div className="tableCols">
                            {tableHeadings}
                    </div>

                    <div className="tableCols">
                        <div className="dataRow">
                            {dipsRow}
                        </div>
                        <div className="dataRow">
                            {lungesRow}
                        </div>
                        <div className="dataRow">
                            {pushupsRow}
                        </div>
                        <div className="dataRow">
                            {situpsRow}
                        </div>
                        <div className="dataRow">
                            {squatsRow}
                        </div>
                    </div>
                </div>
                   
            )
        }

        return (
            <div className="Scores">
                <h1>High Scores</h1>
                <div>
                    {table}
                </div>
            </div>
        )
    }
}
    

export default Scores