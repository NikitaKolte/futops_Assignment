import React,{Component} from "react"
import './css/header.css'
import Mouse from './css/mickey.jpg'
class Home extends Component{
render(){
    return(
<div className="new_header">
    <h2>Camera Management</h2>
    <div>
    
    <img src={Mouse} name="Joh" alt="Flowers in Chania" className="responsive" width="80" height="40"/>
    <h5>John Smith</h5>
    </div>
</div>
    )
}
}
export default Home