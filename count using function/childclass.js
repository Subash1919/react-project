import React from 'react';
import {useState} from 'react';

const Childfunct = (props) =>{
const childmethod =() =>{
    props.mydata()
}

const childincr = () =>{
    props.childinc()
}

    return(
        <>
        <div className='maindiv1'>
        <div className='subdiv'>
        <div className='lable1'>from child function</div>
        <p>{props.mydata.nam}</p>
        <div className='butdiv'>
        <button className='button' onClick={childincr}>child increment</button>
        <button className='button1' onClick={childmethod}>Parent decrement</button>
        </div>
        </div></div>

        
        </>
    )
}

export default Childfunct;