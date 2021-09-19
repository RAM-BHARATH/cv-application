import React, { Component } from 'react'

class EducationItem extends Component {
    render() {
        return (
            <div>
                <form>
                    <h3>Education</h3>
                    <input type="text" name="school" id="school" placeholder="School"/>
                    <input type="number" name="year-of-graduation" id="year-of-graduation" placeholder="Year of graduation"/>
                    <input type="number" name="percentage" id="percentage" placeholder="Percentage"/>
                </form> 
            </div>
        )
    }
}

export default EducationItem
