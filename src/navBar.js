import React from 'react';

const NavBar = () => {
    return (
        <div className="flex justify-between items-center bg-white p-4 shadow">
            <div className="text-xl font-bold">Analytics Dashboard</div>
            <div className="flex items-center">
                <div className="relative mr-4">
                    <span className="absolute right-0 top-0 bg-red-600 rounded-full h-4 w-4 text-white text-xs flex items-center justify-center">4</span>
                    <i className="fas fa-bell text-gray-500"></i>
                </div>
                <div className="flex items-center">
                    <img className="h-8 w-8 rounded-full" src="src\Assets\long.jpg" alt="profile" />
                    <span className="ml-2">Charles Hall</span>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
