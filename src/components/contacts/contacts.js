import './contacts.css';
import MiniMenu from '../miniMenu/miniMenu';
import Title from '../title/title';

import Telegram from '../../resources/image/contactsIMG/tg.svg'
import Instagram from '../../resources/image/contactsIMG/inast.svg'
import Vkontacte from '../../resources/image/contactsIMG/vk.svg'

let Contacts = () => {
	return(
		<div className="wrapContacts">
			<div className="wrapContacts-content">
				<div className="headerAchievements">
					<div className="headerAchievements-miniMenu">
						<MiniMenu/>
					</div>
					<div className="headerAchievements-title">
						<Title nameTitle="contacts"/>
					</div>
				</div>
				<div className="contentContacts">
					<div className="contentContacts-about">
						You get everything in one place from setting the task to the smooth operation of the system
					</div>
					<div className="contentContacts-info">
						<div className="contentContacts-info__mail">
							<div className="contentContacts-mail__mail">
								pickaim@gmail.com
							</div>
							<button className="contentContacts-mail__btn"><span className='span1' data-content="Write to us" aria-hidden="true"></span><span className='span2' data-content="Write to us" aria-hidden="true"></span>
								Write to us
							</button>
						</div>
						<div className="contentContacts-info__phone">
							<div className="contentContacts-phone__first">
							+7 (999) 0788 - 230
							</div>
							<div className="contentContacts-phone__second">
							8 800 500-88-23
							</div>
						</div>
					</div>
					<div className="contentContacts-socialNtw">
						<div className="contentContacts-socialNtw__text">
							Contact us via social networks
						</div>
						<div className="contentContacts-socialNtw__icons">
							<a href="https://web.telegram.org/k/"><img src={Telegram} alt="" className="contentContacts-icons__tg" /></a>
							<a href="https://web.telegram.org/k/"><img src={Vkontacte} alt="" className="contentContacts-icons__vk" /></a>
							<a href="https://www.instagram.com/"><img src={Instagram} alt="" className="contentContacts-icons__inst" /></a>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts;