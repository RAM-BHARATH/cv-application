import React, { Component } from 'react'

export class ResumeEducationItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            educationInfo : this.props.eduItem
        }
    }
    render() {
        return (
            <div className='edu-item-op'>
                {/* {console.log("From ResumeEducatioItem.js:",this.state.educationInfo)} */}
                <div className="school-year-op">
                    <div>{this.props.eduItem.school}</div>
                    <div>{this.props.eduItem.course}</div>
                </div>
                <div className="percent-op">
                    <div>{this.props.eduItem.year}</div>
                    <div>{this.props.eduItem.percentage}%</div>
                </div>
            </div>
        )
    }
}

export default ResumeEducationItem
