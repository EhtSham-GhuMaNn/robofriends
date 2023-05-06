import React from 'react';

const SearchBox=({searchChange}) =>{
	return(
		<div>
			<input onChange={searchChange} className="pa2  ma2 br2 grow bg-lightest-green" type="search" placeholder="Find Robots" />
		</div>
	)
}

export default SearchBox;