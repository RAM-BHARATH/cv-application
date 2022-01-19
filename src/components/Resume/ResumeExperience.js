import React, { Component } from 'react'
import ResumeExperienceItem from './ResumeExperienceItem'

class ResumeExperience extends Component {
    constructor(props){
        super(props)
        this.state={
            ExperienceItems:this.props.expInfo.experienceItems
        }
    }
    render() {
        return (
            <div className="edu-op">
                {/* {console.log("Experience info from ResumeExperience.js:",this.state.ExperienceItems)} */}
                <h2>Experience</h2>
                {this.props.expInfo.experienceItems.map((ExperienceItem,index)=>
                    <ResumeExperienceItem expItem={ExperienceItem} key={index}/>
                )}
                {/* {console.log("From Resume Experience Page:",this.state.ExperienceItems)} */}
                {/* <ResumeExperienceItem info={this.props.info}/> */}
                {console.log("Resume Experience js: ",this.props.expInfo.experienceItems)}
            </div>
        )
    }
}

export default ResumeExperience
