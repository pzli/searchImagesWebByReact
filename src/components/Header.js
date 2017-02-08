
import React from 'react';

require('styles/App.css');
require('styles/ImagesHeader.scss');

export default class Header extends React.Component{
	render (){
		return (
			<div>
			<header>
				<div className="logo">
					<p>表情包搜索</p>
				</div>
				<ul>
					<li><a href="#">发现</a></li>
					<li><a href="#">最新</a></li>
					<li><a href="#">皮皮虾</a></li>
					<li><a href="#">象拔蚌</a></li>
					<li className="move"></li>
				</ul>
			</header>

			<section className="section-one">
				<div className="banner">
					<div className="banner-container">
		                <p>皮皮虾，我们走</p>
		                <input type="text" placeholder="搜索你想要找的表情包"/>
		                <span>热门推荐</span>
					</div>
				</div>
			</section>
			</div>
		)
	}
}