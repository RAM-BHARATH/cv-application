import { Component } from "react";

class ResumeDesc extends Component{
    constructor(props){
        super(props);
        this.state = {
            description: this.props.desc.description
        }
    }
    render(){
        return(
            <>
                <h2>DESCRIPTION</h2>
                <p>{this.props.desc.description}</p>
            </>
        )
    }
}

export default ResumeDesc;