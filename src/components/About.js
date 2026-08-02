import React from "react";
import UserClass from "./UserClass";
// import User from "./User";

class About extends React.Component {
    constructor(props){
        super(props);
        //console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("parent component did mount called");
    }

  render() {

    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Food App web app</h2>

        {/* <User name={"Sivasai(fn)"} /> */}
        <UserClass name={"Sivasai"} location={'Guntur'} />
      </div>
    );
  }
}

export default About;
