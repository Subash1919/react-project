
import './App.css';
import Childfunct from './childclass';
import {useState,useEffect} from 'react';

function App() {
  const [count, updatcount] = useState(0);
  const [childcount,updateval]=useState(0);
//function lifecycle
//1.did mount
useEffect(()=>{console.log('function compound didmount')},[])
// //2.did update
useEffect(() =>{
  console.log('functional compound didupdate')
},[count,childcount])

//parent increment
const increment = () =>{
  updatcount (count+1);
 }
 //parent decrement
 const decrement = () =>{
    updatcount(count-1)
}
//child increment and decrement

const childinc =()=>{
    updateval(childcount+1)
}
const childec =()=>{
    updateval(childcount-1)
}
  return (
    <>
    <div className='maindiv'>
    <div className='subdiv'>
    <div><h1 className='title'>count incrementer</h1></div>
    <div className='lable'> parent count is : {count}</div>
    <div className='lable'> child count is  :{childcount}</div>
    <div className='butdiv'>
    <button className='button2' onClick={increment}>parent increment</button>
    <button className='button1' onClick={childec}>child decrement</button>
    <div className='star'>*****************************</div>
    </div>

    </div>
    </div>
   
       {<Childfunct mydata={decrement} childinc={childinc}/>}
    </>
  );
  
}

export default App;
