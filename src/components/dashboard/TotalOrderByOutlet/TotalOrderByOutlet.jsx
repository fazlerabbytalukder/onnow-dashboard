import { useState } from 'react';
import Chart from 'react-apexcharts';
import Title from "../../reusable/Title";


const TotalOrderByOutlet = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: 'bar-chart',
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: ['', '', '', '', '', ''],
        },
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: '55%',
                endingShape: 'rounded'
            }
        },
        colors: ['#F15B25'],
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                const names = ['Chottogram', 'Dhaka', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal'];
                return names[opts.dataPointIndex];
            }
        }
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Area',
            data: [100, 150, 250, 350, 450, 300]
        }
    ]);
    return (
        <div className="px-[25px] pt-[15px] bg-white rounded-[15px]">
            <Title
                titleMain="Total order by"
                titleSub="outlet"
                filter={false}
            />
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height={250}
            />
        </div>
    );
};

export default TotalOrderByOutlet;