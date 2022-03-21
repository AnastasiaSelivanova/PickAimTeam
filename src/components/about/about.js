import {Component} from 'react';

import './about.css';
import MiniMenu from '../miniMenu/miniMenu';
import Title from '../title/title';

import Arrow from '../../resources/image/aboutIMG/Polygon.png';
import We1 from '../../resources/image/aboutIMG/image1.png';
import We2 from '../../resources/image/aboutIMG/image2.png';
import We3 from '../../resources/image/aboutIMG/image3.png';

class About extends Component {
	constructor(props){
		super(props);
		this.state={
			weArr: [
				{text: 'effectively and efficiently solve customer problems using design, technology and analytics.', id: 1, path: We1},
				{text: 'for honesty and openness, professionalism, love for one\'s work, dedication.', id: 2, path: We2},
				{text: 'we work according to simple rules, we form around ourselves not just a team, but professionals and personalities.', id: 3, path: We3}
			],
			weActive: {text: 'effectively and efficiently solve customer problems using design, technology and analytics.', id: 1, path: We1},
			itemsArr:[1],
			selectArr:'we',
		}
	}

	onChangeweActive = () => {
		if(this.state.selectArr == 'we')
		this.setState({selectArr:'approach'});
		else this.setState({selectArr:'we'})
	}

	onChangeWeArr = () =>{
		let ch = false;
		let  pr = false;
		this.state.weArr.map((item)=>{
			if(ch == true && pr == false){
				this.setState({weActive:{
					text: item.text,
					id: item.id, 
					path: item.path,
				}})
				pr = true;
			}
			if(item.id == this.state.weActive.id && item.id != 3 && ch == false){
				ch = true;
			}
			if(item.id == this.state.weActive.id && item.id == 3 && ch == false){
				this.setState({weActive:{
					text: this.state.weArr[0].text,
					id: this.state.weArr[0].id, 
					path: this.state.weArr[0].path,
				}})
			}
		})
	}

	render(){
		let {weActive, selectArr, itemsArr} = this.state;
		let newClassWe = '';
		let newClassAp = '';

		return(
			<div className="wrapAbout">
				<div className="wrapAbout-content">
					<div className="headerAbout">
						<div className="headerAbout-title">
							<Title nameTitle="about"/>
						</div>
						<div className="headerAbout-miniMenu">
							<MiniMenu/>
						</div>
					</div>
					<div onClick={this.onChangeweActive}>
						{
							itemsArr.map((item)=>{
								if(document.documentElement.clientWidth <= 630){
									if(selectArr == 'we'){
										return(
											<div className='selectAbout'>
												<div className="selectAboit_weActive">WE</div>
												<div className="selectAbout_approach">OUR APPROACH TO DEVELOPMENT</div>
											</div>
										)
									}
									else if (selectArr == 'approach'){
										return(
											<div className='selectAbout'>
												<div className="selectAboit_we">WE</div>
												<div className="selectAbout_approachActive">OUR APPROACH TO DEVELOPMENT</div>
											</div>
										)
									}
								}
							})
						}
					</div>
					<div className="contentAbout">
						{
							itemsArr.map((item)=>{
								if(document.documentElement.clientWidth > 630){
									return(
										<>
										<div className="weAbout">
											<div className="weAbout_info">
												<div className="weAbout_info-offer">WE</div>
												<div className="weAbout_info-text">
													{weActive.text}
												</div>
												<img onClick={this.onChangeWeArr} src={Arrow} alt="" className="weAbout_info-arrow" />
											</div>
											<div className="weAbout_img">
												<img src={weActive.path} alt="" className="weAbout_img-image" />
											</div>
										</div>
										<div className="approachAbout">
											<div className="approachAbout_offer">
												OUR APPROACH TO DEVELOPMENT
											</div>
											<div className="approachAbout_info">
												<div className="approachAbout_info-item">
													<div className="approachAbout_info-offer">
														NON-TYPICAL PROJECTS
													</div>
													<div className="approachAbout_info-text">
														We like to work on complex and non-standard projects, where requirements and approach can change during implementation.
													</div>
												</div>
												<div className="approachAbout_info-item">
													<div className="approachAbout_info-offer">
														FRONTEND И BACKEND
													</div>
													<div className="approachAbout_info-text">
														We create a clear and easy frontend for the user and a reliable backend for the stable operation of the product
													</div>
												</div>
												<div className="approachAbout_info-item">
													<div className="approachAbout_info-offer">
														PRODUCTIVE DESIGN
													</div>
													<div className="approachAbout_info-text">
														We fully undertake the creation of product design of any complexity: from analytics to interface animation
													</div>
												</div>
											</div>
										</div>
										</>
									)
								}
								else if(document.documentElement.clientWidth <= 630){
									if(selectArr == 'we'){
										newClassWe = ''
										newClassAp = 'N'
									}
									else if(selectArr == 'approach'){
										newClassWe = 'N'
										newClassAp = ''
									}
									return(
										<>
										<div className={'weAbout'+newClassWe}>
											<div className={"weAbout_info"+newClassWe}>
												<div className={"weAbout_info-offer"+newClassWe}>WE</div>
												<div className={"weAbout_info-text"+newClassWe}>
													{weActive.text}
												</div>
												<img onClick={this.onChangeWeArr} src={Arrow} alt="" className={"weAbout_info-arrow"+newClassWe} />
											</div>
											<div className={"weAbout_img"+newClassWe}>
												<img src={weActive.path} alt="" className={"weAbout_img-image"+newClassWe} />
											</div>
										</div>
										<div className={"approachAbout"+newClassAp}>
											<div className={"approachAbout_offer"+newClassAp}>
												OUR APPROACH TO DEVELOPMENT
											</div>
											<div className={"approachAbout_info"+newClassAp}>
												<div className={"approachAbout_info-item"+newClassAp}>
													<div className={"approachAbout_info-offer"+newClassAp}>
														NON-TYPICAL PROJECTS
													</div>
													<div className={"approachAbout_info-text"+newClassAp}>
														We like to work on complex and non-standard projects, where requirements and approach can change during implementation.
													</div>
												</div>
												<div className={"approachAbout_info-item"+newClassAp}>
													<div className={"approachAbout_info-offer"+newClassAp}>
														FRONTEND И BACKEND
													</div>
													<div className={"approachAbout_info-text"+newClassAp}>
														We create a clear and easy frontend for the user and a reliable backend for the stable operation of the product
													</div>
												</div>
												<div className={"approachAbout_info-item"+newClassAp}>
													<div className={"approachAbout_info-offer"+newClassAp}>
														PRODUCTIVE DESIGN
													</div>
													<div className={"approachAbout_info-text"+newClassAp}>
														We fully undertake the creation of product design of any complexity: from analytics to interface animation
													</div>
												</div>
											</div>
										</div>
										</>
									)
								}
							})
	
						}
						
					</div>
				</div>
			</div>
		)
	}
}

export default About;