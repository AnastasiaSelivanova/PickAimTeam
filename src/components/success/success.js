import { Component } from 'react';

import './success.css';
import MiniMenu from '../miniMenu/miniMenu';
import Title from '../title/title';

import Success1 from '../../resources/image/successIMG/fonSuccess.png';

class Success extends Component {
	constructor(props){
		super(props);
		this.state={
			successArr:[
				{name:'UFA_SUPERHERO(2021)', hack:'All-Russian hackathon', pleace:1, pleaceS: 'a place', info:'Development of a digital assistant in the healthcare system', descriprion:'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam .', path:Success1, id:1},
				{name:'UFA_SUPERHERO(2021)', hack:'All-Russian hackathon', pleace:1, pleaceS: 'a place', info:'Development of a digital assistant in the healthcare system', descriprion:'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam .', path:Success1, id:2},
				{name:'UFA_SUPERHERO(2021)', hack:'All-Russian hackathon', pleace:1, pleaceS: 'a place', info:'Development of a digital assistant in the healthcare system', descriprion:'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam .', path:Success1, id:3},
				{name:'UFA_SUPERHERO(2021)', hack:'All-Russian hackathon', pleace:1, pleaceS: 'a place', info:'Development of a digital assistant in the healthcare system', descriprion:'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam .', path:Success1, id:4},
				{name:'UFA_SUPERHERO(2021)', hack:'All-Russian hackathon', pleace:1, pleaceS: 'a place', info:'Development of a digital assistant in the healthcare system', descriprion:'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam .', path:Success1, id:5},
				{name:'UFA_SUPERHERO(2021)', hack:'All-Russian hackathon', pleace:1, pleaceS: 'a place', info:'Development of a digital assistant in the healthcare system', descriprion:'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam .', path:Success1, id:6},
			],
			successSuccess:{name:'UFA_SUPERHERO(2021)', hack:'All-Russian hackathon', pleace:1, pleaceS: 'a place', info:'Development of a digital assistant in the healthcare system', descriprion:'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam .', path:Success1, id:1},
			itemArr:[1, 2],
		}
	}

	onChangeAcctiveSuccess = (id) => {
		let {successArr} = this.state;
		for (let e of successArr){
			if(e.id == id){
				this.setState({
					successSuccess:{name:e.name, hack:e.hack, pleace:e.pleace, pleaceS: 'место', info:e.info, descriprion:e.descriprion, path:e.path, id:e.id}
				})
			}
		}
	}

	render(){
		let newClass = '';
		let {successArr,successSuccess, itemArr} = this.state;
		return(
			<div className="wrapSuccess">
				<div className="wrapSuccess-content">
					<div className="headerSuccess">
						<div className="headerSuccess-miniMenu">
							<MiniMenu/>
						</div>
						<div className="headerSuccess-title">
							<Title nameTitle="success "/>
						</div>
					</div>
					<div className="contentSuccess">
						<div className="itemsSuccess">
							{
								successArr.map((item)=>{
									if (successSuccess.id == item.id){
										newClass = 'Active';
									}
									else{
										newClass = '';
									}

									return(
										// <div className='itemSuccessAnim'>
										// <img src={item.path} alt="" className={"imgSuccess" + newClass} />
										<div onClick={()=>this.onChangeAcctiveSuccess(item.id)} className={"itemSuccess" + newClass}>
											<div className={"hackSuccess" + newClass}>
											{item.hack}
											</div>
											<div className={"nameSuccess" + newClass}>
											{item.name}
											</div>
											<div className="pleaceSuccessA">
												<div className={"pleaceSuccess" + newClass}>
												{item.pleace}
												</div>
												<div className={"pleaceSSuccess" + newClass}>
												{item.pleaceS}
												</div>
											</div>
											<div className={"infoSuccess" + newClass}>
											{item.info}
											</div>
											<div className={"descriptionSuccess" + newClass}>
											{item.descriprion}	
											</div>
										</div>
										// </div>
									)
								})
							}
						</div>
						<div className="itemsSuccessMobile">
							{
								successArr.map((item)=>{
									if (successSuccess.id == item.id){
										
									return(
										<>
										<div onClick={()=>this.onChangeAcctiveSuccess(item.id)} className={"itemSuccessMobile" + newClass}>
											<div className={"hackSuccessMobile" + newClass}>
											{item.hack}
											</div>
											<div className={"nameSuccessMobile" + newClass}>
											{item.name}
											</div>
											<div className="pleaceSuccessAMobile">
												<div className={"pleaceSuccessMobile" + newClass}>
												{item.pleace}
												</div>
												<div className={"pleaceSSuccessMobile" + newClass}>
												{item.pleaceS}
												</div>
											</div>
											<div className={"infoSuccessMobile" + newClass}>
											{item.info}
											</div>
											<div className={"descriptionSuccessMobile" + newClass}>
											{item.descriprion}	
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
			</div>
		)
	}
}

export default Success;