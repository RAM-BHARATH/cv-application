import { Component } from "react";

class NameForm extends Component {
    constructor(props,state){
        super(props);
        this.state = {
            name1: this.props.firstName,
            name2: this.props.lastName,
            email: this.props.email,
            phoneNumber: this.props.phoneNumber,
        }
    }
    // changeName1 = (e) =>{
    //     console.log(e.target.value);
    //     this.setState({
    //       name1: e.target.value
    //     });
    //     this.changeNamesAgain(e.target.value,this.state.name2);
    //     // this.props.onSubmit(this.state.name1,this.state.name2);
    //   }
    //   changeName2 = (e) =>{
    //     this.setState({
    //       name2: e.target.value
    //     });
    //     this.changeNamesAgain(this.state.name1,e.target.value);
    //   }
      changeNames = (e) =>{
        console.log(e.target.value)
        console.log(e.target.id)
        // this.changeNamesAgain(e.target.value)
        if(e.target.id==="first-name-input"){
          this.setState({
            name1: e.target.value
          });
          this.changeNamesAgain(e.target.value,this.state.name2,this.state.email, this.state.phoneNumber);
        }else if(e.target.id==="last-name-input"){
          this.setState({
            name2: e.target.value
          });
          this.changeNamesAgain(this.state.name1,e.target.value,this.state.email, this.state.phoneNumber);  
        }else if(e.target.id==="email"){
          this.setState({
            email: e.target.value
          });
          this.changeNamesAgain(this.state.name1,this.state.name2,e.target.value,this.state.phoneNumber)
        }else if(e.target.id==="phone-number"){
          this.setState({
            phoneNumber:e.target.value
          });
          this.changeNamesAgain(this.state.name1,this.state.name2,this.state.email,e.target.value)
        }
      }
      changeNamesAgain = (name_first,name_last,email_id,phone) =>{
        this.props.onChange(name_first,name_last,email_id,phone);
      }
    render(){
        return(
            <form onChange={this.changeNames}>
                <h3>Basic Info</h3>
                <input type="text" id="first-name-input" placeholder="First Name"/> 
                <input type="text" id="last-name-input" placeholder="Last Name"/> 
                <input type="email" name="email" id="email" placeholder="Email Address"/>
                <input type="text" name="phone-number" id="phone-number" placeholder="Phone Number"/>
                {/* <button type="submit">Submit</button> */}
            </form>
        )
    }
}

export default NameForm;