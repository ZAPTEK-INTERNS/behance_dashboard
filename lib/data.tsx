import { BiHomeAlt, BiMessageRoundedDetail } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";



export const links = [
  {
    icon: <BiHomeAlt fontSize={20}/>,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <GrDocumentText fontSize={18} />,
    title: "Orders",
    path: "/orders",
  },
  {
    icon: <FiShoppingBag fontSize={20} />,
    title: "Products",
    path: "/products",
  },
  {
    icon: <LuUserCircle2 fontSize={20} />,
    title: "Customers",
    path: "/customers",
  },
  {
    icon: <BiMessageRoundedDetail fontSize={20} />,
    title: "Messages",
    path: "/messages",
  },
  {
    icon: <LuSettings fontSize={20} />,
    title: "Settings",
    path: "/settings",
  },
];
