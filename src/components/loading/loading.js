import './loading.css'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import Logo from '../../resources/image/logo.png';


let Loading = () => {
	function pseudoClick(){
		setTimeout(()=>{
			$('div').trigger('click');
		},3700)
	}

	return(
		<NavLink end style={({isActive})=>({textDecoration: 'none' , color: isActive ? '#fff' : 'inherit'})} to={"/main"}>
			<div onLoad={pseudoClick} className="wrapLoading">
				<div className="fullLoading">
					<div className="fullLoanding-content"></div>
				</div>
				<div className="imgLoading">
					<img src={Logo} alt="" className="imgLoading-image" />
				</div>
				<div className="textLoading">
					<span className="textLoading-main">PickAim</span>
					<span className="textLoading-mini">IT team</span>
				</div>
			</div>
		</NavLink>
	);
}

export default Loading