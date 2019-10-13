import React, { Component } from 'react'
import './Temperatureconverter.css'

class Temperatureconverter extends Component{
    constructor(){
        super();
        this.state={
            kVal: 0,
            fVal: 0
        }
    }

    conversion(){
        var input = document.getElementById('input').value;
        if(input===""){
            alert('Please Enter A Number!')
        }
        else{
        this.setState({
            fVal: (input*(9/5)) + 32,
            kVal: (input*1)+273
        })
        

    }
}
render() {
    return (
        <div className='temperatureconverter'>
            <form>
                <div className='form'>
                    <label>Enter Temperature in Degree Celcius:</label>
                    <input required type='number' placeholder='Enter Temperature' className='form-input' id='input' />
                </div>
                <button onClick={() => this.conversion()} className='button' type='button'>Do the Conversion</button>
                <br />
                <p>Degree Fahrenheit = {this.state.fVal}</p>
                <p>Degree Kelvin = {this.state.kVal}</p>
            </form>
        </div>
    )
}
}
export default Temperatureconverter