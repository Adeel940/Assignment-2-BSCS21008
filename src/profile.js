import React from 'react';
import DashboardCard from './components/DashboardCard';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import MainContent from './components/mainContent';

const Profile = () => {
    return (
        <div className="flex">
            <SideBar/>
            <div className="flex-1">
                <NavBar/>
                <div>
                    <MainContent/>
                </div>
            </div>
        </div>
    );
}

export default Profile;
