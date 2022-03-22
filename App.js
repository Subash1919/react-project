import React from "react";
class App extends React.Component{

displaynum = () =>{
  
}

  render(){
    return(<>
    
    <div><h1>calculator</h1></div>
    <div>
        <div><input name="inputone" type={'number'} placeholder={'enter first value'} id={'outputscreen'}></input></div>
        <div><input type={'number'} placeholder={'enter secound value'} id={'outputscreen'}></input></div>
        <div><input type={'number'} placeholder={'result'} id={'outputscreen'}></input></div>
        <div className="operators">
        <div><button className="operatorButton" name='*' onClick={this.displaynum}>*</button></div>
        <div><button className="operatorButton" name='/' onClick={this.displaynum}>/</button></div>
        <div><button className="operatorButton" name='+' onClick={this.displaynum}>+</button></div>
        <div><button className="operatorButton" name='-' onClick={this.displaynum}>-</button></div>
        </div>

    </div>
    </>)
  }
}
export default App;