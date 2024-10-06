import React from 'react';

const DashboardCard = ({ title, value, percentage, icon, color }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between">
            <div>
                <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
                <h2 className="text-2xl font-bold">{value}</h2>
                <span className={`text-sm ${percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {percentage}% Since last week
                </span>
            </div>
            <div className={`p-4 ${color} rounded-full`}>
                <i className={icon}></i>
            </div>
        </div>
    );
}

export default DashboardCard;
