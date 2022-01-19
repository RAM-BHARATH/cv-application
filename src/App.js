import Header from "./components/Header";
import NameForm from "./components/NameForm";
// import EducationForm from "./components/EducationForm";
import { Component } from "react";
import Resume from "./components/Resume/Resume";
import "./styles/reset.css";
import "./styles/App.css";
import "./styles/resume-input.css";
import "./styles/resume-output.css";
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber:'',
      position:'',
      description:'',
      educationItems:[
        {"school":"","year":"","course":"","percentage":""},
      ],
      experienceItems:[
        {"company":"","prev_position":"","from_year":"","to_year":""}
      ]
    }
  }
  changeNames = (name1In,name2In,email,phone, position, description) =>{
    this.setState({
      firstName: name1In,
      lastName:name2In,
      emailAddress:email,
      phoneNumber:phone,
      position: position,
      description: description,
    })
    // console.log("From app.js first name:"+name1In);
    // console.log("From app.js last name:"+name2In)
    // console.log("From app.js - firstname: "+this.state.firstName)
  }

  // updateFields = (values) =>{
  //   // this.state.onChange(this.state)
  //   this.setState({
  //     educationItems:values
  //   })
  //   console.log("Update fields values: "+values)
  //   console.log("Update fields: "+this.state.educationItems)
  // }

  handleAddField = (e) =>{
    // console.log(index+" Add");
    const values = this.state.educationItems.concat({"school":"","year":"","course":"","percentage":""});
    this.setState({
      educationItems:values
    },()=>console.log(this.state.educationItems))
    // this.updateFields()
    console.log("this.state.educationItems: "+this.state.educationItems);
    this.updateValues()
    // console.log("Values after addition: "+values);
  }

  handleRemoveField = (index,e) =>{
    console.log(index+' Remove')
    this.state.educationItems.splice(index,1)
    const values = this.state.educationItems
    this.setState({
      educationItems: values
    },()=>console.log(this.state.educationItems))
    this.updateValues()
  }
  changeEducation = (index,e) =>{
    // console.log(index,e.target.name)
    const values = [...this.state.educationItems];
    values[index][e.target.name] = e.target.value;
    this.setState({
      educationItems:values
    })
    this.updateValues()
  }

  handleExperienceAddField = (index,e) =>{
    // console.log(index+" Add");
    const values = this.state.experienceItems.concat({"company":"","prev_position":"","from_year":"","to_year":""});
    this.setState({
      experienceItems:values
    },()=>console.log(this.state.experienceItems))
    // this.updateFields()
    // console.log("this.state.experienceItems: "+this.state.experienceItems);
    // console.log("Values after addition: "+values);
  }

  handleExperienceRemoveField = (index,e) =>{
    console.log(index+' Remove')
    this.state.educationItems.splice(index,1)
    const values = this.state.experienceItems
    this.setState({
      experienceItems: values
    },()=>console.log(this.state.experienceItems))
  }
  changeExperience = (index,e) =>{
    console.log(index,e.target.name)
    const values = [...this.state.experienceItems];
    values[index][e.target.name] = e.target.value;
    this.setState({
      experienceItems:values
    })
    console.log(this.state.experienceItems);
  }

  updateValues = () =>{
    return(<Resume 
      info={this.state}
    />)
  }

  render(){
    return (
      <div>
        <Header />
        <div className='app'>
          <div className='resume-input'>
            {/* <Header title={this.state.lastName}/> */}
            <NameForm onChange={this.changeNames} names={this.state}/>
            {/* <EducationForm onSubmit={this.addEducation}/> */}
            <form className="expForm">
              <div className="expInHead">
                <h3>Experience</h3>
                <button onClick={(e) => this.handleExperienceAddField(e)} type="button">+</button>
              </div>
              {this.state.experienceItems.map((experienceItem,index)=>(
                  <div key={index} id={index} className="expInItem">
                    <div>
                      <div>
                        <input type="text" name="company" label="company" value={experienceItem.company} onChange={e => this.changeExperience(index,e)} placeholder="Company"/>
                        <input type="text" name="position" label="prev_position" value={experienceItem.prev_position} onChange={e => this.changeExperience(index,e)} placeholder="Position" />
                      </div>
                      <div>
                        <abbr title="From month">
                          <input type="month" name="from_year" label="from_year"  min="1940" max="2099" value={experienceItem.from_year} onChange={e => this.changeExperience(index,e)} placeholder="From Year"/>
                        </abbr>
                        <abbr title="To month">
                          <input type="month" name="to_year" label="to_year" value={experienceItem.to_year}  min="1940" max="2099" onChange={e => this.changeExperience(index,e)} placeholder="To year"/>
                        </abbr>
                      </div>
                    </div>
                    <button onClick={(e)=>this.handleExperienceRemoveField(index,e)} type="button">-</button>
                  </div>
              ))}
            </form>
            <form className="eduForm">
              <div className="eduInHead">
                <h3>Education</h3>
                <button onClick={(e) => this.handleAddField(e)} type="button">+</button>
              </div>
              {this.state.educationItems.map((educationItem,index)=>(
                <div key={index} id={index} className="eduInItem">
                  <div>
                    <div>
                      <input type="text" name="school" label="school" value={educationItem.school} onChange={e => this.changeEducation(index,e)} placeholder="School"/>
                      <input type="text" name="course"  label="course" value={educationItem.course} onChange={e => this.changeEducation(index,e)} placeholder="Course"/>
                    </div>
                    <div>
                      <abbr title="Year of graduation">
                        <input type="month" name="year" label="year" value={educationItem.year} onChange={e => this.changeEducation(index,e)} placeholder="Year"/>
                      </abbr>
                      <input type="number" name="percentage" label="percentage" min="0" max="100" value={educationItem.percentage} onChange={e => this.changeEducation(index,e)} placeholder="Percentage"/>
                    </div>
                  </div>
                  <button onClick={(e)=>this.handleRemoveField(index,e)} type="button">-</button>
                </div>
              ))}
            </form>
          </div>
          <div className='resume-output'>
            {/* <Resume 
              // names={(this.state.firstName ? this.state.firstName:'')+' '+(this.state.lastName ? this.state.lastName : '')} 
              info = {this.updateValues()}
            /> */}
            {this.updateValues()}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
