import React from 'react';

const Scroll=(props)=>{
  return (<div className="bg-light-green dib br3 pa3 bw2 shadow-5 ma2" style={{overflowY:'scroll', height: '500px' }}>
       {props.children}
   </div>);
}



export default Scroll;