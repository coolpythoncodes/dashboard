import Layout from "./components/Layout"
import '../src/App.css';
import PendingIcon from '../src/assests/pendingIcon.png'
import SuccessIcon from '../src/assests/successIcon.png'
import DeclineIcon from '../src/assests/declineIcon.png'

const App = () => {
  return (
    <div className='app-body'>
      <Layout>
        <div className="layout-content">
          <div className="layout-main">
            <div className="welcome">
              <h1>Hi Jimmy,</h1>
              <p>Welcome to DANTOWN. Please ensure to setup your account</p>
            </div>
            <div className="transaction">
              <div className="pending-transaction">
                <div className="transaction-content">
                  <div>
                    <h1>0</h1>
                    <p>Pending Transactions</p>
                  </div>
                  <img src={PendingIcon} alt=""/>
                </div>
              </div>
              <div className="successful-transaction">
                <div className="transaction-content">
                <div>
                  <h1>100</h1>
                  <p>Successful Transactions</p>
                </div>
                <img src={SuccessIcon} alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="layout-side">
            <div className="ad">
              <h1>Life</h1>
              <p>Can be made easy with</p>
              <h1>Cryptocurrencies</h1>
            </div>
            <div className="declined-transactions">
              <div className="transaction-content">
                <div>
                  <h1>100</h1>
                  <p>Declined Transactions</p>
                </div>
                <img src={DeclineIcon} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
