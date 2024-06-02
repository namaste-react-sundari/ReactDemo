import User from './UserComponent';
import UserClass from './UserClassComponent';
import React, { Component } from 'react';

// const AboutComponent = ()=>{

//     return (
//         <div>
//            <h1>About</h1>
//            <div className="about-container">
//             <User  name={"Murali Krishna via function"}/>
//             <UserClass name={"Murali Krishna via class"} location={"India via class"}/>
//            </div>
//         </div>
//     );
// }

class AboutComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent componentDidMount");
  }

  render() {
    console.log('parent render');
    return (
      <div>
        <h1>About</h1>
        <div className="about-container">
          {/* <User  name={"Murali Krishna via function"}/> */}
          <UserClass name={'MK via, '} location={'India via, '} />
          {/* <UserClass name={"AK via class"} location={"India via class"}/> */}
        </div>
      </div>
    );
  }
}

export default AboutComponent;
