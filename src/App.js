import Header from "./components/Header";
import NameForm from "./components/NameForm";
import EducationForm from "./components/EducationForm";
import { Component } from "react";
import Resume from "./components/Resume/Resume";
import "./styles/reset.css";
import "./styles/App.css";
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber:'',
      education:[]
    }
  }
  changeNames = (name1In,name2In,email,phone) =>{
    this.setState({
      firstName: name1In,
      lastName:name2In,
      emailAddress:email,
      phoneNumber:phone,
    })
    console.log("From app.js first name:"+name1In);
    console.log("From app.js last name:"+name2In)
    // console.log("From app.js - firstname: "+this.state.firstName)
  }
  
  render(){
    return (
      <div className='app'>
        <div className='resume-input'>
          <Header />
          {/* <Header title={this.state.lastName}/> */}
          <NameForm onChange={this.changeNames} names={this.state}/>
          <EducationForm onSubmit={this.addEducation}/>
        </div>
        <div className='resume-output'>
          <Resume 
            // names={(this.state.firstName ? this.state.firstName:'')+' '+(this.state.lastName ? this.state.lastName : '')} 
            info = {this.state}
          />
        </div>
      </div>
    );
  }
}

export default App;
