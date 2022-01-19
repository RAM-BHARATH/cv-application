import React, { Component } from 'react'
import EducationFormItem from './EducationFormItem'
import { v4 as uuid } from 'uuid'


// class EducationForm extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             EducationFormItems:[<EducationFormItem key={uuid()} id={uuid()}/>]
//         };
//     }

//     addEducation = () =>{
//         return(
//             // <EducationFormItem />
//             this.setState({
//                 EducationFormItems: this.state.EducationFormItems.concat(<EducationFormItem key={uuid()} id={uuid()}/>)
//             })
//         )
//     }

    
//     render() {
//         return (
//             <div>
//                 {/* {EducationFormItems.map(()=>{})} */}
//                 {this.state.EducationFormItems}
//                 {console.log(uuid())}
//                 <button onClick={this.addEducation}>Add Another Education</button>
//             </div>
//         )
//     }
// }



// export default EducationForm;
