import React, { Component } from 'react'
import axios from 'axios';
import Task from '../Components/Task'
import NewTask from "../Components/NewTask"

export default class TaskContainer extends Component {
    constructor(){
        super();
        this.state = {
          tasks: []
        };
      
      }
    
    componentDidMount(){
      axios.get("http://localhost:5000/tasks")
      .then(res => {this.setState({tasks:res.data}); console.log(this.state.tasks)})
      .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className="task-container">
            <NewTask />
            <Task />
            <Task />
            <Task />
        </div>
        )
    }
}
