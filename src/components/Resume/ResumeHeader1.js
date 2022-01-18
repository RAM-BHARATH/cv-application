import { Component } from "react";

class ResumeHeader1 extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div className='resume-op-header'>
                {/* <h1>CV</h1> */}
                {/* <h1>{this.props.names}</h1> */}
                {/* <h2>Personal Details</h2> */}
                <div className="name-pos-op">
                    <h1>
                        {
                            ((this.props.info.firstName)?(this.props.info.firstName): '')
                            + ' ' +
                            ((this.props.info.lastName)?(this.props.info.lastName): '')
                        }
                    </h1>
                    <h2 className="pos-op">{this.props.info.position}</h2>
                </div>
                <div className="contact-op">
                    <p>{this.props.info.phoneNumber}</p>
                    <p>{this.props.info.emailAddress}</p>
                </div>
            </div>
        )
    }
}
export default ResumeHeader1;