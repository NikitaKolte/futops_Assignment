import React,{Component} from "react"
import './css/header.css'
import Mouse from './css/mickey.jpg'
class Home extends Component{
render(){
    return(
        <div >
            
            <div className="heading" >
                <h2>Camera Management</h2>
            </div>
            <div className="responsive">    
                <img src={Mouse}  alt="Flowers in Chania"  width="80" height="40" />
                <h5>John Smith</h5>
            </div>
            
        </div>
        )
    }
}
export default Home