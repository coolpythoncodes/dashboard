import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar'

const Layout = ({children}) => {
    return (
        <div style={{
            display:'flex'
        }}>
            <SideBar />
            <div 
                style={{
                    width:'100%'
                }}
            >
                <NavBar />
                {children}
            </div>
            
        </div>
    );
}

export default Layout;
