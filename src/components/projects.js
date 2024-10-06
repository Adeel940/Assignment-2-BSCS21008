import React from 'react';

const Latestprojects = () => {
   
    const projects = [
        { name: 'Project Apollo', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Vanessa Tucker' },
        { name: 'Project Fireball', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Cancelled', assignee: 'William Harris' },
        { name: 'Project Hades', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Sharon Lessman' },
        { name: 'Project Nitro', startDate: '01/01/2023', endDate: '31/06/2023', status: 'In progress', assignee: 'Vanessa Tucker' },
        { name: 'Project Phoenix', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'William Harris' },
        { name: 'Project X', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Sharon Lessman' },
        { name: 'Project Romeo', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Christina Mason' },
        { name: 'Project Wombat', startDate: '01/01/2023', endDate: '31/06/2023', status: 'In progress', assignee: 'William Harris' },
    ];

 
    const renderStatusBadge = (status) => {
        let bgColor = 'bg-green-100 text-green-600'; 
        if (status === 'Cancelled') bgColor = 'bg-red-100 text-red-600';
        if (status === 'In progress') bgColor = 'bg-yellow-100 text-yellow-600';

        return <span className={`px-2 py-1 rounded-full text-xs font-semibold ${bgColor}`}>{status}</span>;
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm w-full">
            <h3 className="text-gray-500 text-sm font-semibold mb-4">Latest Projects</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-left text-sm">
                    <thead>
                        <tr className="text-gray-500 font-medium">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Start Date</th>
                            <th className="px-4 py-2">End Date</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Assignee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-2">{project.name}</td>
                                <td className="px-4 py-2">{project.startDate}</td>
                                <td className="px-4 py-2">{project.endDate}</td>
                                <td className="px-4 py-2">{renderStatusBadge(project.status)}</td>
                                <td className="px-4 py-2">{project.assignee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Latestprojects;
