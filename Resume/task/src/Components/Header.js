import React from 'react'
import './Header.css'
import Image from './doctorstrange.jpg'
function Header(){
    return(
        <div className="top">

            <img className='profilepic' src={Image} alt='ProfileImage' />         
            <h1>Himanshu Sanklecha</h1>
            <h2>Front-End Web Developer.</h2>
            <h3>Computer Engineering Student At D.J.Sanghvi College Of Engineering.</h3>
        </div>
    )
}
export default Header