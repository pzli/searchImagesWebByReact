import React from 'react';
require('styles/ImagesItem.scss');
// 单个图片组件
export default class ImagesItem extends React.Component {

		constructor(props) {
			super(props);
			this.handleClick = this.handleClick.bind(this);
		}
		handleClick(e) {
			if (this.props.arrange.isCenter) {
				this.props.inverse();
			} else {
				this.props.center();
			}
			e.stopPropagation();
			e.preventDefault();
		}
		// 渲染函数

		render() {

			let styleObj = {};
			// 如果传进来的props里有pos属性，则使用position属性
			if (this.props.arrange.pos) {
				styleObj = this.props.arrange.pos;
			}
			// 如果传进来的props里有rotate属性，则添加这个属性，要注意浏览器厂商前缀
			if (this.props.arrange.rotate) {
				["Moz", "Ms", "Webkit", ""].forEach((value) => {
					styleObj[value + "Transform"] = "rotate(" + this.props.arrange.rotate + "deg)";
				});
			}
			// 使中心图片不被遮挡
			if (this.props.arrange.isCenter) {
				styleObj.zIndex = 11;
			}

			let ImgFigureClassName = "img-figure";
			ImgFigureClassName += this.props.arrange.isInverse ? " is-inverse " : "";

			return (
				<figure className={ImgFigureClassName} style={styleObj} onClick={this.handleClick}>
			        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
			        <figcaption>
			        	<h2 className="img-title">{this.props.data.title}</h2>
			            <div className="img-back" onClick={this.handleClick}>
			              <p>
			                {this.props.data.desc}
			              </p>
			            </div>
			        </figcaption>
			    </figure>
			);
		}
	}