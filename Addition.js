import React from 'react';

class Addition extends React.Component{
    constructor(){
        super();
        this.state={
            val1:'',
            val2:'',
            total:''
        }
    }

    handleval1 =(event) =>{
        this.setState({val1:event.target.value})
    }
    handleval2 =(event) =>{
        this.setState({val2:event.target.value})
    }

    add = (evevt) =>{
        if(this.state.val1===''&& this.state.val2===''){
            alert('enter both the values')
            return
        }
        else if(this.state.val1===''){
            alert('enter first number')
            return
        }
        else if(this.state.val2===''){
            alert('enter secound number')
            return
        }
        this.setState({total: parseInt(this.state.val1) + parseInt(this.state.val2)})
        evevt.prevent.default();

    }
    sub = (event) =>{
        if(this.state.val1===''&& this.state.val2===''){
            alert('enter both the values')
            return
        }
        else if(this.state.val1===''){
            alert('enter first number')
            return
        }
        else if(this.state.val2===''){
            alert('enter secound number')
            return
        }
        if(this.state.val1 > this.state.val2){
        this.setState({total: parseInt(this.state.val1) - parseInt(this.state.val2)})
    }else{
        this.setState({total: parseInt(this.state.val2) - parseInt(this.state.val1)})
    }

    }

    div = (event) =>{
        if(this.state.val1===''&& this.state.val2===''){
            alert('enter both the values')
            return
        }
        else if(this.state.val1===''){
            alert('enter first number')
            return
        }
        else if(this.state.val2===''){
            alert('enter secound number')
            return
        }
        if(this.state.val1 > this.state.val2){
        this.setState({total: parseInt(this.state.val1) / parseInt(this.state.val2)})
     }else{
        this.setState({total: parseInt(this.state.val2) / parseInt(this.state.val1)})
     }

    }

    mul = (evevt) =>{
   
        if(this.state.val1===''&& this.state.val2===''){
            alert('enter both the values')
            return
        }
        else if(this.state.val1===''){
            alert('enter first number')
            return
        }
        else if(this.state.val2===''){
            alert('enter secound number')
            return
        }

        this.setState({total: parseInt(this.state.val1) * parseInt(this.state.val2)})
        evevt.prevent.default();

    }
   


    render(){
        return<>

        <div className='maincontainer'>
        <div className='subcontainer'>
        <h1 className='heading'>CALCULATOR</h1>
        <div><input className='val' placeholder='enter value 1' type={'number'} value={this.state.val1} onChange={this.handleval1}></input></div>
        <div><input className='val' placeholder='enter value 2' type={'number'} value={this.state.val2} onChange={this.handleval2}></input></div>
        
        <div><p className='output'>TOTAL :  {this.state.total} </p></div>
        <div className='button'>
        <div><button className='bt1' onClick={this.add}>add</button></div>
        <div><button className='bt1' onClick={this.sub}>sub</button></div>
        <div><button className='bt1' onClick={this.div}>div</button></div>
        <div><button className='bt1' onClick={this.mul}>mul</button></div>
        </div>
        
      
        
        
        </div>
        
        </div>
        </>
    }
}

export default Addition;