import { Component } from "react";

class Header extends Component{
    // constructor (props){
    //     super(props);
    // }
    render(){
        return(
            <div className='header'>
                <h1>CV Creator</h1>
                {/* <h2>{this.props.title}</h2> */}
            </div>
        )
    }
}

export default Header;