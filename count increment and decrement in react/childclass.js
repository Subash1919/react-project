import React from "react";
import"./App.css"

class ChildClass extends React.Component{

ChildMethod=()=>{
    this.props.parentMethod();
}
//child count incress
childincrement = () =>{
    this.props.childcount();
}



    render(){
        return(
            <>
            {/* <div>this is from child class</div>
            <div>Child Count is...{this.props.ChildCount}</div> */}
            <div className="butclass">
            <div><button className="secoundbut" onClick={this.childincrement}>Child Increment</button></div>
            <div><button className="firstbut" onClick={this.ChildMethod}> Parent Decrement</button></div>
            </div>
            </>
        )
    }
}

export default ChildClass