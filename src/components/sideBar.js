import React from 'react';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div className="w-64 bg-gray-800 h-screen p-4">
            <h2 className="text-white text-2xl font-semibold mb-4">AdminKit</h2>
            <ul>
                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">
                    <Link to="/">
                        Dashboard
                    </Link>
                </li>
                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">
                    <Link to="/profile">
                        Profile
                    </Link>
                </li>
                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">Sign In</li>
                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">Sign Up</li>
                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">Blank</li>
            </ul>
        </div>
    );
}

export default SideBar;
