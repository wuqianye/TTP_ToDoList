import React, { Component } from 'react'
import axios from 'axios';
import Task from '../Components/Task'
import NewTask from "../Components/NewTask"

export default class TaskContainer extends Component {
    constructor(){
        super();
        this.state = {
          tasks: [],
        };
      
      }
    
    componentDidMount(){
      axios.get("http://localhost:5000/tasks")
      .then(res => this.setState({tasks:res.data}))
      .catch(err => console.log(err))
    }
    
    render() {
      const {tasks} = this.state;
        return (
            <div className="task-container">
            <NewTask />
            {tasks.map(task => (<Task id={task.id} title={task.title} desc={task.description}/>))}
        </div>
        )
    }
}
