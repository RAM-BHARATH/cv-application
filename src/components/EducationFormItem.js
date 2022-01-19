import React, { Component } from 'react'

class EducationFormItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:this.props.id
        }
    }
    render() {
        return (
            <div>
                <form id={this.state.id}>
                    {/* {console.log(this.state.id)} */}
                    <input type="text" name="school" placeholder="School"id={"school-"+this.state.id} />
                    <input type="number" name="year-of-graduation" id={"year-of-graduation"+this.state.id} placeholder="Year of graduation"/>
                    <input type="number" name="percentage" id={"percentage"+this.state.id} placeholder="Percentage"/>
                </form>
                <button onClick={this.deleteEducation}>Delete Education</button>
                {/* <button type="submit">Submit</button> */}
            </div>
        )
    }
}

export default EducationFormItem
