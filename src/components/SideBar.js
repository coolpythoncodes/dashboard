import styled from 'styled-components';
import Logo from '../assests/logo.png';
import Board from '../assests/board.png'
import Wallet from '../assests/wallet.png'
import Profile from '../assests/profile.png'
import Rates from '../assests/rates.png'
import HistoryIcon from '../assests/history-icon.png'
import Vector from '../assests/Vector.png'
import Settings from '../assests/settings.png'
import LogOut from '../assests/logout.png'

const Bar = styled.div`
    display: flex;
    flex-direction: column;
    background: #000070;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 100vh;
    
`

const LogoImage = styled.img`
    width: 100%;
    margin-top: 28px;
`

const Dashboard = styled.div`
    background: #EFEFF8;
    width: 100%;
`

const DashboardIcons =styled.div`
    display: flex;
    flex-direction: column;
    border: solid red;
    flex: 0.6;
    // align-item: center;
    // justify-content: center;
`

const DashboardIcon = styled.img`
    width: 100%;
    margin-bottom: 3rem;
`

const DashboardBottom = styled.div`
    border: solid purple;
    flex: 0.2;
`

const SideBar = () => {
    return (
        <Bar>
            <div
                style={{
                    flex:0.2,
                    border: 'solid green',
                }}
            >
                <LogoImage src={Logo} alt=""/>
            </div>
            <DashboardIcons>
                <Dashboard>
                    <DashboardIcon src={Board} alt=""/>
                </Dashboard>

                <div>
                    <DashboardIcon src={Wallet} alt=""/>
                </div>

                <div>
                    <DashboardIcon src={Vector} alt=""/>
                </div>

                <div>
                    <DashboardIcon src={Rates} alt=""/>
                </div>

                <div>
                    <DashboardIcon src={HistoryIcon} alt=""/>
                </div>

                <div>
                    <DashboardIcons src={Profile} alt=""/>
                </div>
            </DashboardIcons>

            <DashboardBottom>
               <div>
                    <DashboardIcon src={Settings} alt=""/>
                </div>

                <div>
                    <DashboardIcon src={LogOut} alt=""/>
                </div>
            </DashboardBottom>
        </Bar>
    );
}

export default SideBar;
