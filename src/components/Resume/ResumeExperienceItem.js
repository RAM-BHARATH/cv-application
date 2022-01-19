import React, { Component } from 'react'

export class ResumeExperienceItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            ExperienceInfo : this.props.expItem
        }
    }
    render() {
        return (
            <div className='exp-item-op'>
                {/* {console.log("From ResumeEducatioItem.js:",this.state.ExperienceInfo)} */}
                <div className="school-year-op">
                    <div>{this.props.expItem.company}</div>
                    <div>{this.props.expItem.prev_position}</div>
                </div>
                <div className="percent-op">
                    <div>{this.props.expItem.from_year}</div>
                    <div>{this.props.expItem.to_year}</div>
                </div>
            </div>
        )
    }
}

export default ResumeExperienceItem
