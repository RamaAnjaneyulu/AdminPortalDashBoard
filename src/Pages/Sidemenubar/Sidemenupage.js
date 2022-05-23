import React, { Component } from 'react';
import Sidemenustyle from "./Sidemenustyle.css";
import { useNavigate, Link } from 'react-router-dom';

class Sidemenupage extends Component {
    render() {
        return (
    
               <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <span>
                        <Link to="/Forgetpage" className=''> Forget Password</Link>  
                            
                            </span>
                        </li>
                        <li className="sidebarListItem">
                           
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                           
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                           
                            Home
                        </li>
                        <li className="sidebarListItem">
                           
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                           
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            
                            Home
                        </li>
                        <li className="sidebarListItem">
                           
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                           
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                           
                            Home
                        </li>
                        <li className="sidebarListItem">
                            
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                           
                            Sales
                        </li>
                    </ul>
                </div>
               
            </div>
            </div>
    
    
    
        );
    }
}

export default Sidemenupage;