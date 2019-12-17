import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import DBZ from './DBZ';
import * as serviceWorker from './serviceWorker';

const users = [{
  id:1,
  name:'yitshak',
  email:'yistou27@gmail.com',
  username:'goku'},
  // img:"https://i.pinimg.com/474x/e8/b3/16/e8b316c54766a3a5d6c3d043cfb9e5d1.jpg"},
  // {
  //   id:2,
  //   name:'lea',
  //   email:'bornsteinlea@gmail.com',
  //   username:'bruno',
  //   img:"https://i.pinimg.com/474x/e8/b3/16/e8b316c54766a3a5d6c3d043cfb9e5d1.jpg"}
];

 ReactDOM.render(<div>
 <DBZ user={users[0]}/>
 </div>,
 document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
