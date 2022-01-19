import React, { Component } from 'react'
import ResumeEducationItem from './ResumeEducationItem'

class ResumeEducation extends Component {
    constructor(props){
        super(props)
        this.state={
            educationItems:this.props.eduInfo.educationItems
        }
    }
    render() {
        return (
            <div className="edu-op">
                {/* {console.log("Education info from ResumeEducation.js:",this.state.educationItems)} */}
                <h2>EDUCATION</h2>
                {this.props.eduInfo.educationItems.map((educationItem,index)=>
                    <ResumeEducationItem eduItem={educationItem} key={index}/>
                )}
                {console.log("From Resume Education Page:",this.state.educationItems)}
                {/* <ResumeEducationItem info={this.props.info}/> */}
                {console.log("Resume Education js: ",this.props.eduInfo.educationItems)}
            </div>
        )
    }
}

export default ResumeEducation
