import './index.css';
import React, {Component} from 'react';


const DBZ = ({user})=>{

  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
    <div>
    <h2>{user.name}</h2>
    <h2>{user.email}</h2>
    <h3>don't give up!!!!!</h3>

    </div>
    <img alt='super1' src={`gokucool.gif`}/>
    <img alt='gokukid' src={`gokukid.jpg`}/>
    <img alt='goku' src= {`https://i.pinimg.com/474x/e8/b3/16/e8b316c54766a3a5d6c3d043cfb9e5d1.jpg`}/>

      </div>

  );
}

export default DBZ;
