const DataTable = () => {
    const tableData = [
        {
            category: 'New',
            orders: 143,
            customers: 125,
            customerPercentage: 10,
            avgBasket: 89863,
            totalSales: 37055,
            totalOrdersPercentage: 100,
            acv: 370,
        },
        {
            category: 'Returning',
            orders: 98,
            customers: 90,
            customerPercentage: 8,
            avgBasket: 67000,
            totalSales: 24500,
            totalOrdersPercentage: 70,
            acv: 320,
        },
    ];

    const totals = {
        orders: tableData.reduce((sum, row) => sum + row.orders, 0),
        customers: tableData.reduce((sum, row) => sum + row.customers, 0),
        avgBasket: tableData.reduce((sum, row) => sum + row.avgBasket, 0),
        totalSales: tableData.reduce((sum, row) => sum + row.totalSales, 0),
        acv: tableData.reduce((sum, row) => sum + row.acv, 0),
        customerPercentage: tableData.reduce((sum, row) => sum + row.customerPercentage, 0),
        totalOrdersPercentage: tableData.reduce((sum, row) => sum + row.totalOrdersPercentage, 0),
    };


    return (
        <div className="relative overflow-x-auto mt-5 h-[200px] overflow-y-auto">
            <table className="w-full text-sm text-left rtl:text-right text-black">
                <thead className="text-xs text-black uppercase bg-[#F2F2F2] rounded-[10px]">
                    <tr>
                        <th scope="col" className="px-3 py-3 whitespace-nowrap">Category</th>
                        <th scope="col" className="px-3 py-3 whitespace-nowrap"># of orders</th>
                        <th scope="col" className="px-3 py-3 whitespace-nowrap"># of customers</th>
                        <th scope="col" className="px-3 py-3 whitespace-nowrap">% of customers</th>
                        <th scope="col" className="px-3 py-3 whitespace-nowrap">Avg. basket</th>
                        <th scope="col" className="px-3 py-3 whitespace-nowrap">Total sales</th>
                        <th scope="col" className="px-3 py-3 whitespace-nowrap">% Total orders</th>
                        <th scope="col" className="px-3 py-3 whitespace-nowrap">ACV</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index} className="bg-white border-b">
                            <th scope="row" className="px-3 py-4 font-medium text-primary whitespace-nowrap">
                                {row.category}
                            </th>
                            <td className="px-3 py-4 whitespace-nowrap">{row.orders}</td>
                            <td className="px-3 py-4 whitespace-nowrap">{row.customers}</td>
                            <td className="px-3 py-4 whitespace-nowrap">{row.customerPercentage}%</td>
                            <td className="px-3 py-4 whitespace-nowrap">{row.avgBasket}৳</td>
                            <td className="px-3 py-4 whitespace-nowrap">{row.totalSales}৳</td>
                            <td className="px-3 py-4 whitespace-nowrap">{row.totalOrdersPercentage}%</td>
                            <td className="px-3 py-4 whitespace-nowrap">{row.acv}৳</td>
                        </tr>
                    ))}
                    <tr className="bg-white">
                        <td className="px-3 py-4 font-medium text-primary whitespace-nowrap">Total</td>
                        <td className="px-3 py-4 whitespace-nowrap">{totals.orders}</td>
                        <td className="px-3 py-4 whitespace-nowrap">{totals.customers}</td>
                        <td className="px-3 py-4 whitespace-nowrap">{totals.customerPercentage}%</td>
                        <td className="px-3 py-4 whitespace-nowrap">{totals.avgBasket}৳</td>
                        <td className="px-3 py-4 whitespace-nowrap">{totals.totalSales}৳</td>
                        <td className="px-3 py-4 whitespace-nowrap">{totals.totalOrdersPercentage}%</td>
                        <td className="px-3 py-4 whitespace-nowrap">{totals.acv}৳</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;