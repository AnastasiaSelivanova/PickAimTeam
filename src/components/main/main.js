import './main.css';
import $ from 'jquery';

import Logo from '../../resources/image/logo-black.png';
import { NavLink } from 'react-router-dom';

let Main = () => {

	return(
		<>
		<div className="wrapMain">
			<div className="wrapMain-contant">
				<div className="headerMain">
					<div className="headerMain-language"></div>
					<div className="headerMain-logo">PickAim IT team</div>
				</div>
				<div className="bodyMain">
					<div className="bodyMain-menu">
						<NavLink end style={({isActive})=>({color: isActive ? '#fff' : 'inherit'})} to={"/teamers"} className="bodyMain-menu_teamers navLink" href="#"><span data-content="teamers" aria-hidden="true"></span>teamers</NavLink> 
						<NavLink end style={({isActive})=>({color: isActive ? '#fff' : 'inherit'})} to={"/project"} className="bodyMain-menu_project navLink" href="#"><span data-content="project" aria-hidden="true"></span>project</NavLink> 
					</div>
					<div className="bodyMain-offer">
						<div className="bodyMain-offer_offer">pick aim • design a solution • get a ready-made project</div>
					</div>
				</div>
				
				<div className="footerMain">
					<div className="footerMain-info">
						<div className="footerMain-info__tel">+7 (999) 0788 - 230</div>
						<div className="footerMain-info__tg">https://web.telegram.org/</div>
						<div className="footerMain-info__mail">mail.google.com</div>
					</div>
					<div className="footerMain-menu">
						<div className="footerMain-menu_about">
							<NavLink  className="navLink" end style={({isActive})=>({textDecoration: 'none' , color: isActive ? '#fff' : 'inherit'})} to={"/about"}>about</NavLink>
						</div>
						<div className="footerMain-menu_achievements">
							<NavLink  className="navLink" end style={({isActive})=>({textDecoration: 'none' , color: isActive ? '#fff' : 'inherit'})} to={"/success"}>success</NavLink>
						</div>
						<div className="footerMain-menu_contacts">
							<NavLink  className="navLink" end style={({isActive})=>({textDecoration: 'none' , color: isActive ? '#fff' : 'inherit'})} to={"/contacts"}>contacts</NavLink>
						</div>
					</div>
				</div>
				
			</div>
			<div className="imgMain">
					<img src={Logo} alt="" className="imgMain-image" />
			</div>
		</div>
		</>
	)
}

export default Main;