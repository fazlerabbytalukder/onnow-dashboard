import { useState } from "react";
import Chart from 'react-apexcharts';
import Title from "../../reusable/Title";

const TotalOederBySource = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: 'spline-line-chart',
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: ['1', '5', '10', '15', '20', '25'],
        },
        stroke: {
            curve: 'smooth'
        },
        colors: ['#7BB0FF', '#FF569D'],
        markers: {
            size: 0
        }
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Web',
            data: [50, 200, 300, 100, 400, 250]
        },
        {
            name: 'Mobile',
            data: [100, 150, 250, 350, 450, 300]
        }
    ]);



    return (
        <div className="px-[25px] pt-[15px] bg-white rounded-[15px]">
            <Title
                titleMain="Total order by"
                titleSub="source"
                filter={true}
            />
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="line"
                height={250}
            />
        </div>
    );
};

export default TotalOederBySource;