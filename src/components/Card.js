import React from 'react';

const Card=({name, email, username})=>
{
 return(
    <div className="bg-light-green dib br3 pa3 bw2 shadow-5 ma2 grow">
         <img alt="robots" src={`https://robohash.org/${username}?size=200x200`} />
        <div>
           <h1>{name}</h1>
           <h2>{username}</h2>
           <p>{email}</p>
        </div>
    </div>
 );
}


export default Card;