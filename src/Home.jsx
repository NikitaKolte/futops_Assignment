import React,{Component} from "react"
import './css/header.css'
// import Logo from './logo.svg'
import Mouse from './css/mickey.jpg'
class Home extends Component{
render(){
    return(
<div className="new_header">
    <h2>Camera Management</h2>
    <div>
    <img src={Mouse} alt="Flowers in Chania" className="responsive" width="50" height="50"/>
    </div>
</div>
    )
}
}
export default Home