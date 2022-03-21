import {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './teamers.css';
import MiniMenu from '../miniMenu/miniMenu';
import Title from '../title/title';

import Buyko from '../../resources/image/teamersIMG/Buyko.png';
import Isaenko from '../../resources/image/teamersIMG/Isaenko.png';
import Muharsky from '../../resources/image/teamersIMG/Muharsky.png';
import Orlov from '../../resources/image/teamersIMG/Orlov.png';
import Piletsky from '../../resources/image/teamersIMG/Piletsky.png';
import Sizikov from '../../resources/image/teamersIMG/Sizikov.png';
import Selivanova from '../../resources/image/teamersIMG/Selivanova.png';
import Shpak from '../../resources/image/teamersIMG/Shpak.png';


class Teamers extends Component {
	constructor(props){
		super(props);
		this.state={
			teamersArr: [
				{name: "Buyko Kirill", field: "Backend", description: "...",path: Buyko},
				{name: "Isaenko Alexandra", field: "Frontend", description: "...",path: Isaenko},
				{name: "Muharsky Konstantin", field: "Backend", description: "...",path: Muharsky},
				{name: "Orlov Ilya", field: "Frontend", description: "...",path: Orlov},
				{name: "Piletsky Dmitry", field: "Backend", description: "...",path: Piletsky},
				{name: "Sizikov Vitaly", field: "Frontend", description: "...",path: Sizikov},
				{name: "Selivanova Anastasia", field: "Design", description: "...",path: Selivanova},
				{name: "Shpak Vyacheslav", field: "Backend", description: "...",path: Shpak},
			],
			fieldActive: 'none',
			clazzBackend: ' none',
			clazzFrontend: ' none',
			clazzDesign: ' none',
		}
	}

	onChangeFieldActive = (newField) =>{
		this.setState({fieldActive:newField})
		if(newField == 'Backend') this.setState({clazzBackend:' active'});
		else this.setState({clazzBackend:' none'});
		if(newField == 'Frontend') this.setState({clazzFrontend:' active'});
		else this.setState({clazzFrontend:' none'});
		if(newField == 'Design') this.setState({clazzDesign:' active'});
		else this.setState({clazzDesign:' none'});
	}

	render(){
		let {teamersArr, fieldActive} = this.state;
		return(
			<div className="wrapTeamers">
				<div className="contentTeamers">
					<div className="headerTeamers">
						<div className="headerTeamers-title">
							<Title nameTitle="teamers"/>
						</div>
						<div className="headerTeamers-miniMenu">
							<MiniMenu/>
						</div>
					</div>
					<div className="galaryTeamers">
						<div className="galaryTeamers-person">
							{
								teamersArr.map(item => {
									return(
										<img src={item.path} className="galaryTeamers-person_img"/>
									)
								})
							}
						</div>
					</div>
					<div className="selectTeamers">
						<div className="selectTeamers-btn">
							<button 
								className={"navLink selectTeamers-btn_back" + this.state.clazzBackend} 
								onClick={() =>  this.onChangeFieldActive('Backend')}>
								Back end developers
							</button>
							<div 
								className="selectTeamers-btn_dot None">•</div>
							<button 
								className={"navLink selectTeamers-btn_front" + this.state.clazzFrontend} 
								onClick={() =>  this.onChangeFieldActive('Frontend')}>
								front end developers
							</button>
							<div className="selectTeamers-btn_dot None">•</div>
							<button 
								className={"navLink selectTeamers-btn_design" + this.state.clazzDesign} 
								onClick={() => this.onChangeFieldActive('Design')}>
								web designers
							</button>
						</div>
					</div>
					<div className="personTeamers">
						<div className="personTeamers-person">
						{
							teamersArr.map(item => {
								if(item.field === fieldActive)
									{
										return(
											<div className="personTeamers-person_info">
												<img src={item.path} className="personTeamers-person_img"/>
												<div className="personTeamers-person_name">
													{item.name}
												</div>	
												<div className="personTeamers-person_line"></div>
												<div className="personTeamers-person_description">
													{item.description}
												</div>
											</div>
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

export default Teamers;