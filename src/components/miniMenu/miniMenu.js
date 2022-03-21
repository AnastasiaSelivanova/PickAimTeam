import './miniMenu.css';
import {NavLink} from 'react-router-dom'

let MiniMenu = () => {
	return(
		<div className="wrapMiniMenu">
			<NavLink end style={({isActive})=>({color: isActive ? '#fff' : 'inherit'})} to={"/teamers"} className="navLink teamersMiniMenu">
				<span>TEAMERS</span>
			</NavLink>
			<NavLink end style={({isActive})=>({color: isActive ? '#fff' : 'inherit'})} to={"/main"} className="navLink poligonMiniMenu"></NavLink>
			<NavLink end style={({isActive})=>({color: isActive ? '#fff' : 'inherit'})} to={"/project"} className="navLink projectMiniMenu">
				<span>PROJECT</span>
			</NavLink>
		</div>
	)
}

export default MiniMenu;