import { BsBagCheck, BsFillChatLeftDotsFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { LuBox, LuUserSquare2 } from "react-icons/lu";
import { MdDashboard, MdMessage, MdOutlineRestaurantMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../Routes";
import logo from '../../../assets/logo.png';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed inset-y-0 top-0 z-30 h-[100vh] w-[365px] transform bg-white transition-transform duration-200 ${isOpen ? "translate-x-0" : "-translate-x-full"
                } md:relative md:translate-x-0`}
        >
            {/* close button  */}
            <div className="block md:hidden">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-1 right-1 p-1 text-gray-600 hover:bg-white rounded-full"
                >
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    <span className="sr-only">Close sidebar</span>
                </button>
            </div>

            {/* logo section  */}
            <div className="bg-primary flex justify-center items-center py-[14px]">
                <NavLink to={ROUTES.HOME}>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>

            {/* all nav links  */}
            <div className="sidebar-links flex h-sidebar flex-col overflow-y-auto px-[55px] pt-[50px] pb-[20px] space-y-[20px]">
                <NavLink
                    to={ROUTES.HOME}
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-xl ${isActive ? "text-primary font-bold" : "text-secondary hover:text-primary"}`
                    }
                >
                    <MdDashboard />
                    Dashboard
                </NavLink>
                <NavLink
                    to={ROUTES.LIVEORDER}
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-xl ${isActive ? "text-primary font-bold" : "text-secondary hover:text-primary"}`
                    }
                >
                    <MdMessage />
                    Live orders
                </NavLink>
                <NavLink
                    to={ROUTES.INVENTORY}
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-xl ${isActive ? "text-primary font-bold" : "text-secondary hover:text-primary"}`
                    }
                >
                    <LuBox />
                    Inventory
                </NavLink>
                <hr />
                <NavLink
                    to={ROUTES.BRANDS}
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-xl ${isActive ? "text-primary font-bold" : "text-secondary hover:text-primary"}`
                    }
                >
                    <BsBagCheck />
                    Brands
                </NavLink>
                <NavLink
                    to={ROUTES.MENU}
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-xl ${isActive ? "text-primary font-bold" : "text-secondary hover:text-primary"}`
                    }
                >
                    <MdOutlineRestaurantMenu />
                    Menu
                </NavLink>
                <hr />
                <NavLink
                    to={ROUTES.CUSTOMERS}
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-xl ${isActive ? "text-primary font-bold" : "text-secondary hover:text-primary"}`
                    }
                >
                    <LuUserSquare2 />
                    Customers
                </NavLink>
                <NavLink
                    to={ROUTES.ORDERHISTORY}
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-xl ${isActive ? "text-primary font-bold" : "text-secondary hover:text-primary"}`
                    }
                >
                    <BsFillChatLeftDotsFill />
                    Order history
                </NavLink>
                <hr />
                <NavLink
                    to={ROUTES.EDITPROFILE}
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-xl ${isActive ? "text-primary font-bold" : "text-secondary hover:text-primary"}`
                    }
                >
                    <FaUser />
                    Edit profile
                </NavLink>
                <NavLink
                    to={ROUTES.LOGOUT}
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-xl ${isActive ? "text-primary font-bold" : "text-secondary hover:text-primary"}`
                    }
                >
                    <CiLogout />
                    Logout
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;