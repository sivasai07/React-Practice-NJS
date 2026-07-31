import { useState } from "react";

const User = (props) => {

    const [count1] = useState(1);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>count1 fn: {count1}</h3>
            <h3>count2 fn: {count2}</h3>
            <h3>Location: Guntur</h3>
            <h4>Contact: sai@gmail.com</h4>
        </div>
    );
};

export default User;