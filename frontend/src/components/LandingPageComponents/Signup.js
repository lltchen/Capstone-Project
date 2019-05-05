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
    image:null
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
    }if (e.target.name === "image") {
        this.setState({
          image: e.target.files[0]
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
        <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}></input>
        <label>Password :</label>
        <input type="text" name="password" value={this.state.password} onChange={e => this.handleChange(e)}></input>
        <label>E-mail :</label>
        <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)}></input>
        <label>Address :</label>
        <input type="text" name="address" value={this.state.address} onChange={e => this.handleChange(e)}></input>
        <label>Phone Number :</label>
        <input type="text" name="phone_num" value={this.state.phone_num} onChange={e => this.handleChange(e)}></input>
        <label>Age :</label>
        <input type="text" name="age" value={this.state.age} onChange={e => this.handleChange(e)}></input>
        <label>Role :</label>
        <input type="text" name="role" value={this.state.role} onChange={e => this.handleChange(e)}></input>
        <input type="file" name="image"  onChange={e => this.handleChange(e)}></input>
        <input type="submit" value="Signup"/>
      </form>
    </div>
  )};
  }

  const mapStateToProps = (state) => {
return state

}

export default connect(mapStateToProps,{createUserViaApi})(withRouter(Signup))
