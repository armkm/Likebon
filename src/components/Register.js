import React, { Component } from 'react'
import {auth, setData } from '../helpers/auth'
import { ref } from '../config/constants'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
      setData(this.name.value,this.lastName.value)
      console.log(setData)
  }

    constructor(props) {
        super(props);
        this.state = { file: null };
        this.handleChange = this.handleChange.bind(this);
        this.uploadToFirebase = this.uploadToFirebase.bind(this);
    }

    handleChange(event) {
        const file = event.target.files[0];
        this.setState({ file });
    }

    uploadToFirebase() {

        ref.child(`images/${this.state.file.name}`)
            .put(this.state.file).then((snapshot) => {
            alert('File has been uploaded!');
        });
    }
  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
          <h1>Firebase Upload Example</h1>
          <input type="file" onChange={this.handleChange} /><br />
          <button onClick={this.uploadToFirebase}>Upload</button>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>name</label>
                <input className="form-control" ref={(name) => this.name = name} placeholder="name"/>
            </div>
            <div className="form-group">
                <label>lastname</label>
                <input className="form-control" ref={(lastName) => this.lastName = lastName} placeholder="lastName"/>
            </div>

          <div className="form-group">
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }
}
