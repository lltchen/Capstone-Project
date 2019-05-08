import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {createUserViaApi} from "../../actions/actions.js"
class Signup extends React.Component {

  state={
    name:"",
    password:"",
    email:"",
    address:"",
    phone_num:"",
    role:"",
    age:"",
    user_image:null
  }

  handleSubmit = (e)=> {
    e.preventDefault()
    this.props.createUserViaApi(this.state)
    this.props.history.push('/dashboard')

  }

  handleChange = (e)=> {
    if (e.target.name === "age") {
        this.setState({
          age: parseInt(e.target.value)
        })
    }if (e.target.name === "user_image") {
        this.setState({
          user_image: e.target.files[0]
        })
    }else {
        this.setState({
        [e.target.name]:e.target.value
        })}
    }

  render(){

  return (
    <div id="Signup">
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>Name :</label>
        Name :<input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}></input>
        <label>Password :</label>
        <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}></input>
        <label>E-mail :</label>
        <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)}></input>
        <label>Address :</label><br/>
        <input type="text" name="address" value={this.state.address} onChange={e => this.handleChange(e)}></input>
        <label>Phone Number :</label>
        <input type="text" name="phone_num" value={this.state.phone_num} onChange={e => this.handleChange(e)}></input>
        <label>Age :</label>
        <input type="text" name="age" value={this.state.age} onChange={e => this.handleChange(e)}></input>
        <label>Role :</label>
        <input type="text" name="role" value={this.state.role} onChange={e => this.handleChange(e)}></input>
        <label>Upload a Profile Pic :</label>
        <input type="file" name="user_image"  onChange={e => this.handleChange(e)}></input>
        <input type="submit" value="Signup"/>
      </form>
    </div>
  )};
  }

  const mapStateToProps = (state) => {
return state

}

export default connect(mapStateToProps,{createUserViaApi})(withRouter(Signup))
