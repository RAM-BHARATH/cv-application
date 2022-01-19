import { Component } from "react";
import ResumeEducation from "./ResumeEducation";
// import ResumeHeader from "./ResumeHeader";
import ResumeHeader1 from "./ResumeHeader1";
import ResumeDesc from "./ResumeDesc";
import ResumeExperience from "./ResumeExperience";


class Resume extends Component{
    constructor(props){
        super(props)
        this.state={
            names : this.props.names,
        }
    }
    updateEdu(eduItems){
        console.log("Checking updateEdu():",this.props.info);
        // return(<ResumeEducation eduInfo={eduItems}/>)
    }
    render(){
        return(
            <>
                <ResumeHeader1 
                // {/*names={this.props.names}*/} 
                info={this.props.info}/>
                <ResumeDesc desc={this.props.info}/>
                {/* <ResumeEducation eduInfo={this.props.info}/> */}
                {/* {this.updateEdu(this.props.info)} */}
                <ResumeExperience expInfo={this.props.info}/>
                <ResumeEducation eduInfo={this.props.info}/>
                {console.log("Info from resume.js:",this.props.info)}
            </>
        )
    }
}

export default Resume;