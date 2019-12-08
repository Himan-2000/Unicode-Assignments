import React from 'react'
import {Component} from 'react'
import './Zomatoapi.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'; 
class Zomatoapi extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes: [],
            isLoaded: false
        }    
    }
    componentDidMount(){
        axios.get('https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624&apikey=1a1e3c4d66aa6f384a796a83318ae4d9')
        .then(
            res => {
                this.setState({dishes: res.data.daily_menus[2].daily_menu.dishes})
                this.setState({isLoaded: true})
            }
        )
    }

    render(){
        return(
            <div id='items'>
            <div className='contain'>
                <div className='row'>
                    <div className='col-md-6'>
                         <h1>Dishes</h1>
                         <hr />
                    </div>
                    <div className='col-md-6'>
                         <h1>Price</h1>
                         <hr />
                    </div>
                     
                </div>
         {
            this.state.isLoaded ? 
            
            this.state.dishes.map((item) =>
            <div class='row'>
                <span className='col-md-6'>
                     <p>{item.dish.name}</p>
                </span>
                <span className='col-md-6'>
                    {item.dish.price}
                </span>
            </div>     
                                   
            )
            :

            <p >Loading.... <br />Wait while dishes are being prepared</p>
         }  
         </div>
    </div>
        )

    }
}

export default Zomatoapi