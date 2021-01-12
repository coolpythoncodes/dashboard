
// import ArrowDown from "../assests/arrow-down.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Bell from '../assests/bell.png';
import LogOut from '../assests/logout.png'
import ProfilePic from '../assests/profilepic.png'
import '../css/NavBar.css';
import Button from "./Button/Button";
import { faAngleDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='amount'>
                <h1>₦20,000</h1>
                <small>Wallet Balance</small>
            </div>
            <div className='deposit'>
                <a href="/">Quick Deposit</a>
                <FontAwesomeIcon 
                    icon={faCaretDown} 
                    style={{
                        marginRight:'1rem',
                    }}
                />
                {/* <img src={ArrowDown} alt=""/> */}

                <Button 
                    width='150'
                    backgroundColor='#000070'
                    color='#fff'
                    borderRadius='30'
                >
                    Quick Top up
                </Button>

                <Button
                    width='150'
                    backgroundColor='#FFFFFF'
                    color='#000070'
                    borderRadius='30'
                    border
                    borderColor='#000070'
                >
                    Quick withdrawal
                </Button>

                <Button
                    width='150'
                    borderRadius='30'
                    backgroundColor='#00B9CD'
                    color='#FFFFFF'
                >
                    Swap Bitcoins
                </Button>
            </div>

            <div className='profile'>
                <div className="profile-left">
                    <div>
                        <h1>Simeon Taiwo</h1>
                        <small>Hi there</small>
                    </div>
                        <img src={ProfilePic} alt=""/>
                        <FontAwesomeIcon 
                            color='#C9CED6'
                            icon={faAngleDown} 
                            size='2x' 
                        />
                </div>
                <div className="profile-right">
                    <img src={Bell} alt=""/>
                    <img src={LogOut} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
