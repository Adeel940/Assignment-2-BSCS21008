import React from 'react';
import DashboardCard from './components/DashboardCard';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';

const Profile = () => {
    return (
        <div className="flex">
            <SideBar/>
            <div className="flex-1">
                <NavBar/>
                <div>
                    <h1>Adeel</h1>
                </div>
            </div>
        </div>
    );
}

export default Profile;
