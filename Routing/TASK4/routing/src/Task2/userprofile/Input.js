
import React from 'react'
import { Component  } from 'react'
import Print from './Print'
import './Input.css'
class Input extends Component{
  constructor(props){
    super(props)
    this.state=
    {
      firstname:"",
      lastname:"",
      age:"",
      gender:"male",
      number:""
    }

  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      }
    )
  }

  form(){
        
    document.getElementById('print').style.visibility='visible'
    document.getElementById('form').style.visibility='hidden'
}
  
  render(){
    return(
      <div>
      <form>
        <div className="container">
          <div id="form">
          <div className='form-group'>
          <label>Firstname:</label>
          <input type="text" value={this.state.firstname}  className='form-control' name="firstname" onChange={this.handleChange} /><br />
          </div>
          <div className='form-group'>
          <label>Lastname:</label>
          <input type="text" value={this.state.lastname}  className='form-control' name="lastname" onChange={this.handleChange} /><br />
          </div>
          <div className='form-group'>
          <label>Age:</label>
          <input type="number" value={this.state.age} className='form-control'  name="age" onChange={this.handleChange} /><br />
          </div>
          <div className='form-group'>
          <label>Gender:</label>
          <select value={this.state.gender} className='form-control' onChange={this.handleChange}>
            <option value="male" >Male</option>
            <option value="female">Female</option>
          </select><br />
          </div>
          <div className='form-group'>
          <label>Number:</label>
          <input type="number" value={this.state.number} className='form-control'  name="number" onChange={this.handleChange} /><br />
          </div>
        <button type="button" className="button" onClick={this.form}>Submit</button>
        </div>
      </div>
      </form>
      <div id="print">
      <Print firstname={this.state.firstname} lastname={this.state.lastname} age={this.state.age}
      gender={this.state.gender} number={this.state.number} ></Print>
      </div>
    </div>
    )
  }
}
export default Input