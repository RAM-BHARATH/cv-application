import { Component } from "react";
import ResumeHeader from "./ResumeHeader";


class Resume extends Component{
    constructor(props){
        super(props)
        this.state={
            names : this.props.names
        }
    }
    render(){
        return(
            <ResumeHeader 
            // {/*names={this.props.names}*/} 
            info={this.props.info}/>
        )
    }
}

export default Resume;