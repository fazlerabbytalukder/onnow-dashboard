import { useState } from "react";
import MainDashboard from "../dashboard/MainDashboard/MainDashboard";
import Sidebar from "../dashboard/sidebar/Sidebar";

const HameLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };


    return (
        <div className="flex h-full overflow-y-auto bg-backColor">
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            {isSidebarOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 z-20 bg-black opacity-40 md:hidden"
                ></div>
            )}
            <MainDashboard onToggleSidebar={toggleSidebar} />
        </div>
    );
};

export default HameLayout;