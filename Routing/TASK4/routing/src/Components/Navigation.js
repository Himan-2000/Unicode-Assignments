import React from 'react'
import {Link} from 'react-router-dom'

function Navigation()
{
    return(
        <div id="navigation">
            <h1>Unicode Tasks</h1>
            <ul className="tasks">
                <Link to='/resume'>
                    <li className='assn'>Resume</li>
                </Link>
                <Link to='/userprofile'>
                    <li className='assn'>Userprofile</li>
                </Link>
                <Link to='/temperatureconverter'>
                    <li className='assn'>Temperatureconverter</li>
                </Link>
                <Link to='/Zomatoapi'>
                    <li className='assn'>ZomatoApi</li>
                </Link>

            </ul>
        </div>
    )
}

export default Navigation