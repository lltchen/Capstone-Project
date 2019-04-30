import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {getUserFromApi} from "../../actions/actions.js"
class Login extends React.Component {

  state={
    password:"",
    email:"",

  }

  handleSubmit = (e)=> {
    e.preventDefault()
    this.props.getUserFromApi(this.state)
    this.props.history.push('/dashboard')
  }

  handleChange = (e)=> {
    if (e.target.name === "age") {
        this.setState({
          [e.target.name]:parseInt(e.target.value)
        })
    }else {
        this.setState({
        [e.target.name]:e.target.value
        })}
    }

  render(){

    console.log(this.props);
  return (
    <div id="Signup">
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>E-mail :</label>
        <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)}></input>
        <label>Password :</label>
        <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}></input>
        <input type="submit" value="Signup"/>
      </form>
    </div>
  )};
}

const mapStateToProps = (state) => {
return state

}
export default connect(mapStateToProps,{getUserFromApi})(withRouter(Login))
