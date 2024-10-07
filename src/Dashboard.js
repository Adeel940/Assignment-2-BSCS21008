import React from 'react';
import DashboardCard from './components/DashboardCard';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import RecentMovement from './components/RecentMovement';
import BrowserUsage from './components/BrowserUsage';
import Latestprojects from './components/projects';

const Dashboard = () => {
    return (
        <div className="flex">
            <SideBar className=""/>
            <div className="flex-1">
                <NavBar/>
                <div className="p-6 bg-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <DashboardCard 
                            title="Sales" 
                            value="2,382" 
                            percentage="-3.65" 
                            icon="fas fa-shopping-cart" 
                            color="bg-blue-100" 
                        />
                        <DashboardCard 
                            title="Earnings" 
                            value="$21,300" 
                            percentage="6.65" 
                            icon="fas fa-dollar-sign" 
                            color="bg-green-100" 
                        />
                        <DashboardCard 
                            title="Visitors" 
                            value="14,212" 
                            percentage="5.25" 
                            icon="fas fa-users" 
                            color="bg-yellow-100" 
                        />
                        <DashboardCard 
                            title="Orders" 
                            value="64" 
                            percentage="-2.25" 
                            icon="fas fa-box" 
                            color="bg-red-100" 
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                        <RecentMovement />
                        <BrowserUsage/>
                    </div>
                    <div className="mt-5">
                         <Latestprojects/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
