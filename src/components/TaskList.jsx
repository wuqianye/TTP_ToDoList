import React, { Component } from 'react'
import axios from 'axios'

export class TaskList extends Component {
    constructor() {
        super()
        this.state = {
            tasks : []
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/tasks/")
            .then(res => this.setState({ tasks: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default TaskList
