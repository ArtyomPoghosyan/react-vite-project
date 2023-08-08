
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
    Colors
} from 'chart.js';

import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Colors

);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", "September", "October", "November", "December"];
const data = {
    labels: labels,
    datasets: [{
        label: 'PADC LLC',
        data: [65, 59, 80, 81, 56, 55, 40, 10, 55, 33, 87, 40],
        borderWidth: 1
    },

    {
        label: 'PADC LLC',
        data: [20, 5, 64, 17, 33, 88, 42, 19, 92, 70, 16, 34],
        borderWidth: 1
    },

    ]
};

export const BarChart = () => {
    return (
        <div>
            <Bar data={data} />
        </div>
    )
}

export const DoughnutChart = () => {
    return (
        <div>
            <Doughnut data={data} />
        </div>
    )
}