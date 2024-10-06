import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const BrowserUsage = () => {
    // Data for the chart
    const data = {
        labels: ['Chrome', 'Firefox', 'IE'],
        datasets: [
            {
                data: [4306, 3801, 1689],
                backgroundColor: ['#4285F4', '#FBBC05', '#EA4335'], // Colors for Chrome, Firefox, IE
                hoverBackgroundColor: ['#4285F4', '#FBBC05', '#EA4335'],
                borderWidth: 0,
            },
        ],
    };

    // Options for the chart
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hides the legend inside the chart
            },
            tooltip: {
                enabled: true, // Tooltip will show on hover
            },
        },
        cutout: '70%', // Creates the donut shape by cutting out the center
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-sm font-semibold mb-4">Browser Usage</h3>
            <div className="relative h-48">
                <Doughnut data={data} options={options} />
            </div>
            <ul className="mt-4 text-sm text-gray-500 space-y-2">
                <li className="flex justify-between">
                    <span>Chrome</span>
                    <span>4306</span>
                </li>
                <li className="flex justify-between">
                    <span>Firefox</span>
                    <span>3801</span>
                </li>
                <li className="flex justify-between">
                    <span>IE</span>
                    <span>1689</span>
                </li>
            </ul>
        </div>
    );
};

export default BrowserUsage;
