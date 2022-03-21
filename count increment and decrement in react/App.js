import React from "react";
import"./App.css"
import ChildClass from './childclass';
class App extends React.Component{

  state={
    count:1,
    ChildClas:1,
    showcomp:true
  };
  toggules = () =>{
    this.setState({showcomp:!this.state.showcomp})
  }

  //parent count increse
  countIncrise = ()=>{
    this.setState({count:this.state.count+1})
    if(this.state.count===5){
      console.log('i am printing at count of 5')
      this.toggules()}
    else if(this.state.count===9){
      this.toggules()
    
    }
   }


  //parent count value lesser --->props in childclass.js
negativectrl = ()=>
{

  if(this.state.count===0){
    alert('Count Not Allowed Less than Zero')
  }
  else{
    this.countDcrise()
  }
}
countDcrise = ()=>{
  this.setState( {count:this.state.count-1})}


// child class setstate count incrise-->used for props to childclass.js
childcount = ()=>{
  this.setState({ChildClas:this.state.ChildClas+1})
}
//child class used for less the value of child count in-->used in app.js
childnegativectrl = ()=>
{
  if(this.state.ChildClas===0){
    alert('Count Not Allowed Less than Zero')
  }
  else{
    this.childcountDcrise()
  }
}
childcountDcrise = ()=>{
  this.setState( {ChildClas:this.state.ChildClas-1})}


  render(){
    return(<> 
    
    <div> <h1 className="count" >COUNT </h1></div>
    <div><h2 className="parentcount">Parent Count is...{this.state.count}</h2></div>
    <div><h2 className="childcount">Child Count is...{this.state.ChildClas}</h2></div>
    <div className="butclass">
    <div><button  className="firstbut" onClick={this.countIncrise}>Parent Increment</button></div>
    <div><button className="secoundbut" onClick={this.childnegativectrl}> Child Decrement</button></div>
    </div>
    <div><button className="recallbtn" onClick={ this.toggules}> Recall Child</button></div>
    <br></br>
    <div className="star">************************************</div>
    {/* <ChildClass/> */}

    {this.state.showcomp && < ChildClass parentMethod ={ this.negativectrl} childcount={this.childcount} childcountless={this.childnegativectrl}/>}


    {/* <ChildClass childcount={this.state.ChildClas}/> */}
   
    </>)

  }
 
}

export default App