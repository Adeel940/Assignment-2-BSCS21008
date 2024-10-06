import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';


ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const RecentMovement = () => {
  
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Recent Movement',
                data: [1500, 1400, 1600, 1700, 1800, 2000, 2500, 2800, 3000, 3200, 3500, 3600],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)', 
                borderColor: 'rgba(54, 162, 235, 1)', 
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            },
        ],
    };

 
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 4000,
                ticks: {
                    stepSize: 1000,
                    callback: function (value) {
                        return value;
                    },
                },
                grid: {
                    display: true,
                    color: 'rgba(200, 200, 200, 0.2)',
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-sm font-semibold mb-4">Recent Movement</h3>
            <div className="relative h-64">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default RecentMovement;
