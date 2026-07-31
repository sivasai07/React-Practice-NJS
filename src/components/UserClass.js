import React from "react";
import User from "./User";

class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        // console.log(props);
        this.state = {
            count: 1,
            // count2 : 2
        }
        console.log(this.props.name+"child constructor called");
    }

    componentDidMount(){
        console.log(this.props.name+"child component did mount called");
    }

    render(){
        console.log(this.props.name+"child render called");
        return (
        <div className="user-card">
            <h2>Name: {this.props.name}</h2>
            <h3>count class: {this.state.count}</h3>
            <button onClick={()=>{
                this.setState(
                    {
                        count: this.state.count + 1,
                    }
                );
            }}
            >
                Count Increase</button>
            {/* <h3>count2 class: {this.state.count2}</h3> */}
            <h3>Location: Guntur</h3>
            <h4>Contact: sai@gmail.com</h4>
        </div>
        );
    }
}

export default UserClass;