import { Component } from "react";

class ResumeHeader extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div className='resume-op-personal'>
                {/* <h1>CV</h1> */}
                {/* <h1>{this.props.names}</h1> */}
                {/* <h2>Personal Details</h2> */}
                <h3>
                    {
                        ((this.props.info.firstName)?(this.props.info.firstName): '')
                        + ' ' +
                        ((this.props.info.lastName)?(this.props.info.lastName): '')
                    }
                </h3>
                <h3>{this.props.info.emailAddress}</h3>
                <h3>{this.props.info.phoneNumber}</h3>
            </div>
        )
    }
}
export default ResumeHeader;