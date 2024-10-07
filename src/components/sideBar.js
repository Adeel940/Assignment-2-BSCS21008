import React from 'react';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div className="w-64 bg-gray-800 p-4 h-auto">
            <h3 className="text-white text-lg font-semibold mb-2 mt-2">Admin Pages</h3>
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
                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">
                    
                   <Link to="/signin">
                        SignIn
                    </Link>
                </li>

                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">
                    
                    <Link to="/signup">
                        SignUp
                    </Link>
                </li>
                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">
                    
                    <Link to="/Blank">
                      Blank
                    </Link>
                </li>
            </ul>

            <h3 className="text-white text-lg font-semibold mb-2 mt-2">Other Components</h3>
            <ul>
                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">
                    <Link to="/">
                        Menu
                    </Link>
                </li>
                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">
                    <Link to="/profile">
                        Buttons
                    </Link>
                </li>
                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">
                    
                   <Link to="/signin">
                        SignIn
                    </Link>
                </li>

                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">
                    
                    <Link to="/signup">
                        SignUp
                    </Link>
                </li>
                <li className="text-gray-300 py-2 px-4 hover:bg-gray-700 rounded">
                    
                    <Link to="/Blank">
                      Blank
                    </Link>
                </li>
            </ul>

        </div>
    );
}

export default SideBar;
