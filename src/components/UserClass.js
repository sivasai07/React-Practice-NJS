import React from "react";
import User from "./User";

class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        // console.log(props);
        this.state = {
            userInfo: {
                name: "Default name",
                location: "Default place",
                Github_AC: "dummy",
            }
            // count: 1,
        }
        console.log(this.props.name+"child constructor called");
    }

    async componentDidMount()
    { 
        console.log("child did mount");
        //API call to github users
        const data = await fetch("https://api.github.com/users/sivasai07"); 
        const json = await data.json(); 
        console.log(json); 
        this.setState({userInfo: json});

    } 

    componentDidUpdate()
    {
        console.log("child done updating");
    }

    render(){
        console.log(this.props.name+"child render called");
        return (
        <div className="user-card">
            <h2>Name: {this.state.userInfo.name}</h2>
            {/* <h3>count class: {this.state.count}</h3>
            <button onClick={()=>{
                this.setState(
                    {
                        count: this.state.count + 1,
                    }
                );
            }}
            >
                Count Increase</button> */}
            {/* <h3>count2 class: {this.state.count2}</h3> */}
            <h3>Location: Guntur</h3>
            <h4>Github AC: {this.state.userInfo.login}</h4>
        </div>
        );
    }
}

export default UserClass;