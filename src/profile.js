import React from 'react';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import MainContent from './components/mainContent';

const Profile = () => {
    return (
        <div className="flex bg-slate-200">
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
