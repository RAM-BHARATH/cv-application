import { Component } from "react";

class ResumeHeader extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <>
                {/* <h1>CV</h1> */}
                {/* <h1>{this.props.names}</h1> */}
                <h1>
                    {
                        ((this.props.info.firstName)?(this.props.info.firstName): '')
                        + ' ' +
                        ((this.props.info.lastName)?(this.props.info.lastName): '')
                    }</h1>
                <h3>{this.props.info.emailAddress}</h3>
                <h3>{this.props.info.phoneNumber}</h3>
            </>
        )
    }
}
export default ResumeHeader;