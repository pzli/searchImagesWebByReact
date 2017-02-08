
import React from 'react';

let imageLogo = require('../images/yeoman.png');

require('styles/App.css');
require('styles/ImagesHeader.css');

export default class ImagesHeader extends React.Component{
	getLogo(){
		return (
			<div className='imagesHeader-logo'>
				<a href="https://www.pangzili.com"><img className='imagesLogo' src={imageLogo} alt="" /></a>
			</div>
		);
	}
	getTitle(){
		return (
			<div className='imagesHeader-title'>
				<a className='imagesHeader-titleLink' href="https://www.pangzili.com">皮皮虾</a>
			</div>
		)
	}
	getNav() {
 	var navLinks = [
		{
		  name: '发现',
		  url: 'find'
		},
		{
		  name: '最新',
		  url: 'latest'
		},
		{
		  name: '皮皮虾我们走',
		  url: 'wego'
		},
		{
		  name: '闪光皮皮虾我们走',
		  url: 'lightwego'
		},
		{
		  name: '象拔蚌我们走',
		  url: 'xiangbabang'
		}
 	];

		return (
		    <div className="imagesHeader-nav">
		      {
		        navLinks.map(function(navLink) {
		          return (
		              <a key={navLink.url} className="imagesHeader-navLink imagesHeader-textLink" href="#" >
		                {navLink.name}
		              </a>
		              );
		        })
		      }
		    </div>
		    );
		}
	render (){
		return (
			<div className='imagesHeader'>
				{this.getLogo()}
				{this.getTitle()}
				{this.getNav()}
			</div>
		)
	}
}