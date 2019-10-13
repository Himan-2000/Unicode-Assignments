import React from 'react'

import { Component  } from 'react';

class Print extends Component{
    render(){
        return(
        <div>
        Your Name is:{this.props.firstname}{this.props.lastname}<br />
        Your Age is:{this.props.age}<br />
        Your Gender is:{this.props.gender}<br />
        Your Number is:{this.props.number}
        </div>
        )
    }
}

export default Print