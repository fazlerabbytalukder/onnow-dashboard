import DataTable from "../DataTable/DataTable";
import Title from "../reusable/Title";

const CustomerTable = () => {
    return (
        <div className="px-[25px] pt-[15px] bg-white rounded-[15px]">
            <Title
                titleMain="New customers"
                titleSub="X Returning customers"
                filter={false}
            />
            <DataTable />
        </div>
    );
};

export default CustomerTable;