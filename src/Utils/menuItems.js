import { RiPieChartFill } from "react-icons/ri";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { HiClipboardList } from "react-icons/hi";
import { BsFillCollectionFill } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa"; // New icon for Invoice


export const menuItems = [
    {
        name: "Dashboard",
        path: "/",
        icon: RiPieChartFill
    },
    {   
        name: "Users",
        path: "/users",
        icon: BsFillFileEarmarkBarGraphFill
    },
    {
        name: "Sales",
        path: "/sales",
        icon: FaShoppingBag,
        submenu: [ 
            {
                name: "Invoice",
                path: "/sales/invoice",
            }
        ]
    },
    {
        name: "Happy stories",
        path: "/happyStories",
        icon: FaLock
    },
    {
        name: "Matrimonial profiles",
        path: "/matrimonialProfiles",
        icon: HiClipboardList
    },
    {
        name: "Settings",
        path: "/settings",
        icon: BsFillCollectionFill
    }
]
