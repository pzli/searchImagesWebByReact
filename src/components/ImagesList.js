import React from 'react';
import ImagesHeader from './ImagesHeader.js';
import ImagesItem from './ImagesItem.js';

export default class ImagesList extends React.Component{
	render (){
		return (
			<div className='imagesList'>
				<ImagesHeader/>
				<ImagesItem/>
			</div>
		)

	}
		
}