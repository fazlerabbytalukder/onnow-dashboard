import CustomerTable from "../../CustomerTable/CustomerTable";
import Brands from "../Brands/Brands";
import Stats from "../Stats/Stats";
import TotalOederBySource from "../TotalOederBySource/TotalOederBySource";
import TotalOrderByOutlet from "../TotalOrderByOutlet/TotalOrderByOutlet";

const MainDashboard = ({ onToggleSidebar }) => {
    return (
        <div className="relative w-full md:w-dashboard h-[100vh] overflow-y-auto">
            <div className="absolute top-0 left-0">
                <div className="block md:hidden">
                    <button
                        type="button"
                        onClick={onToggleSidebar}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="main-part">
                {/* brands part  */}
                <div className="brands">
                    <Brands />
                </div>

                {/* stats part */}
                <div className="stats">
                    <Stats />
                </div>

                {/* charts part */}
                <div className="charts grid grid-cols-1 lg:grid-cols-2 gap-3 mx-2 md:mx-10 mt-3">
                    <TotalOederBySource />
                    <TotalOrderByOutlet />
                </div>

                {/* customer table */}
                <div className="customer-table mx-2 md:mx-10 mt-3">
                    <CustomerTable />
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;