import React from 'react';

const Card=({id, name, email})=>{
	return(
		<div className="tc white bg-black dib  br3 bw2 grow ma2 pa2">
			<img alt="Couldn't load pic site" src={`https://robohash.org/${id}?200*200`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	)
}
export default Card;