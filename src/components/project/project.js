import { Component } from 'react';

import './project.css'
import MiniMenu from '../miniMenu/miniMenu';
import Title from '../title/title';

import Project1 from '../../resources/image/projectIMG/project1.png';
import Project2 from '../../resources/image/projectIMG/project2.png';
import Project3 from '../../resources/image/projectIMG/project3.png';

class Project extends Component {
	constructor(props){
		super(props);
		this.state={
			projectArr: [
				{name: 'Project #1', description: 'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam.', path: Project1, field: 'Backend', id: 1},
				{name: 'Project #2', description: 'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam.', path: Project2, field: 'Backend', id: 2},
				{name: 'Project #3', description: 'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam.', path: Project3, field: 'Backend', id: 3},
				{name: 'Project #4', description: 'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam.', path: Project1, field: 'Frontend', id: 4},
				{name: 'Project #5', description: 'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam.', path: Project2, field: 'Frontend', id: 5},
				{name: 'Project #6', description: 'Amet consectetur adipisicing elit aliquam. Cupiditate dolores dolorem praesentium eum voluptatum similique. Minima, non architecto molestias dolores minus reiciendis aliquam.', path: Project3, field: 'Frontend', id: 6},
			],
			fieldActive: 'Backend',
			clazzBackend: ' active ',
			clazzFrontend: ' none ',
			projectPx:[1],
		}
	}

	onMouseMoveChange = (items, item) => {
		return items = {background: `url(${item.path})`};
	}

	onChangeFieldActive = (newField) =>{
		this.setState({fieldActive:newField})
		if(newField == 'Backend') this.setState({clazzBackend:' active',clazzzBackend:' activeBlock'});
		else this.setState({clazzBackend:' none',clazzzBackend:' noneBlock'});
		if(newField == 'Frontend') this.setState({clazzFrontend:' active', clazzzFrontend:' activeBlock'});
		else this.setState({clazzFrontend:' none',clazzzFrontend:' noneBlock'});
	}


	render(){
		let {projectArr, clazzBackend, clazzFrontend, fieldActive, onMouseMoveChange, projectPx} = this.state;
		let classProject;
		let numberProject1=0, numberProject2=0, numberProject3=0;
		return(
			<div className="wrapProject">
				<div className="contentProject">
					<div className="headerTeamers">
						<div className="headerTeamers-title">
							<Title nameTitle="project"/>
						</div>
						<div className="headerTeamers-miniMenu">
							<MiniMenu/>
						</div>
					</div>
					<div className="selectProject">
						<div className="selectProject-btn">
							<button 
								className={"selectProject-btn_back" + clazzBackend} 
								onClick={() =>  this.onChangeFieldActive('Backend')}>
								Back end projects
							</button>
							<div 
								className="selectProject-btn_dot None">•</div>
							<button 
								className={"selectProject-btn_front" + clazzFrontend} 
								onClick={() =>  this.onChangeFieldActive('Frontend')}>
								front end projects
							</button>
						</div>
					</div>
					{
						projectPx.map((item)=>{
							if(document.documentElement.clientWidth > 1000){
								return(
									<>
										<div className="projectsProject">
										{
											<div className={"projectsProject-itemFirst"}>
												{
													projectArr.map((item)=>{
														classProject = ''
														if(item.id <= 3){
															if(fieldActive == 'Backend'){
																classProject = 'Active';
															}
															return(
																<div onClick={() =>  this.onChangeFieldActive('Backend')} className={"projectsProject-item_info"+classProject}>
																	<div className={"projectsProject-item_name"+classProject}>
																		{item.name}
																	</div>	
																	<div className={"projectsProject-item_description"+classProject}>
																		{item.description}
																	</div>
																</div>										
															)
														}
														numberProject1++;
													})
												}
											</div>
										}
										</div>
										<div className="projectsProject">
										{
											<div className={"projectsProject-itemSecond"}>
												{
													projectArr.map((item)=>{
														classProject = '';
														if(item.id > 3){
															if(fieldActive == 'Frontend'){
																classProject = 'Active';
															}
															return(
																<div onClick={() =>  this.onChangeFieldActive('Frontend')} className={"projectsProject-item_info"+classProject}>
																	<div className={"projectsProject-item_name"+classProject}>
																		{item.name}
																	</div>	
																	<div className={"projectsProject-item_description"+classProject}>
																		{item.description}
																	</div>
																</div>
															)
														}
														numberProject2++;
													})
												}
											</div>
										}
										</div>
									</>
								)
							}
							else if(document.documentElement.clientWidth <= 1000 && document.documentElement.clientWidth > 630){
								return(
									<>
										<div className="projectsProject">
										{
											<div className={"projectsProject-itemFirst"}>
												{
													projectArr.map((item)=>{
														classProject = ''
														if(item.id <= 2){
															if(fieldActive == 'Backend'){
																classProject = 'Active';
															}
															return(
																<div onClick={() =>  this.onChangeFieldActive('Backend')} className={"projectsProject-item_info"+classProject}>
																	<div className={"projectsProject-item_name"+classProject}>
																		{item.name}
																	</div>	
																	<div className={"projectsProject-item_description"+classProject}>
																		{item.description}
																	</div>
																</div>										
															)
														}
														numberProject1++;
													})
												}
											</div>
										}
										</div>
										<div className="projectsProject">
										{
											<div className={"projectsProject-itemFirst"}>
												{
													projectArr.map((item)=>{
														classProject = ''
														if(item.id == 3){
															if(fieldActive == 'Backend'){
																classProject = 'Active';
															}
															return(
																<div onClick={() =>  this.onChangeFieldActive('Backend')} className={"projectsProject-item_info"+classProject}>
																	<div className={"projectsProject-item_name"+classProject}>
																		{item.name}
																	</div>	
																	<div className={"projectsProject-item_description"+classProject}>
																		{item.description}
																	</div>
																</div>										
															)
														}
														if(item.id == 4){
															if(fieldActive == 'Frontend'){
																classProject = 'Active';
															}
															return(
																<div onClick={() =>  this.onChangeFieldActive('Frontend')} className={"projectsProject-item_info"+classProject}>
																	<div className={"projectsProject-item_name"+classProject}>
																		{item.name}
																	</div>	
																	<div className={"projectsProject-item_description"+classProject}>
																		{item.description}
																	</div>
																</div>										
															)
														}
														numberProject2++;
													})
												}
											</div>
										}
										</div>
										<div className="projectsProject">
										{
											<div className={"projectsProject-itemSecond"}>
												{
													projectArr.map((item)=>{
														classProject = ''
														if(item.id >= 5){
															if(fieldActive == 'Frontend'){
																classProject = 'Active';
															}
															return(
																<div onClick={() =>  this.onChangeFieldActive('Frontend')} className={"projectsProject-item_info"+classProject}>
																	<div className={"projectsProject-item_name"+classProject}>
																		{item.name}
																	</div>	
																	<div className={"projectsProject-item_description"+classProject}>
																		{item.description}
																	</div>
																</div>
															)
														}
														numberProject3++;
													})
												}
											</div>
										}
										</div>
									</>
								)
							}
							else if(document.documentElement.clientWidth <= 630){
								return(
									<>
										<div className="projectsProject">
										{
											<div className={"projectsProject-itemFirst"}>
												{
													projectArr.map((item)=>{
														if(item.id <= 3){
															return(
																<div onClick={() =>  this.onChangeFieldActive('Frontend')} className={"projectsProject-item_info"}>
																	<div className={"projectsProject-item_name"}>
																		{item.name}
																	</div>	
																	<div className={"projectsProject-item_description"}>
																		{item.description}
																	</div>
																</div>										
															)
														}
														else{
															return(
																<div onClick={() =>  this.onChangeFieldActive('Frontend')} className={"projectsProject-item_info"}>
																	<div className={"projectsProject-item_name"}>
																		{item.name}
																	</div>	
																	<div className={"projectsProject-item_description"}>
																		{item.description}
																	</div>
																</div>										
															)
														}
													})
												}
											</div>
										}
										</div>
									</>
								)
							}
						})
					}
					</div>
				</div>
			)
		}
}

export default Project;



