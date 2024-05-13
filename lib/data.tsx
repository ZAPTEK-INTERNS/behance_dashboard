import { BiHomeAlt, BiMessageRoundedDetail } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";

import productImage from "@/public/product.jpeg"

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

// sample data to test area charts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];


export const topProducts = [
  {
    image: productImage,
    title: "Navy Blue Smart Watch",
    demographic: "Men, Watch",
    price: 230,
    id: "imdivnidnlxidnsf",
  },
  {
    image: productImage,
    title: "Navy Blue Smart Watch",
    demographic: "Men, Watch",
    price: 230,
    id: "dfdakmdnaidfd",
  },
  {
    image: productImage,
    title: "Navy Blue Smart Watch",
    demographic: "Men, Watch",
    price: 230,
    id: "lsdnvosidfjd",
  },
  {
    image: productImage,
    title: "Navy Blue Smart Watch",
    demographic: "Men, Watch",
    price: 230,
    id: "aldnoivnsdifd",
  },
  {
    image: productImage,
    title: "Navy Blue Smart Watch",
    demographic: "Men, Watch",
    price: 230,
    id: "dkmaisndifojd",
  },
  {
    image: productImage,
    title: "Navy Blue Smart Watch",
    demographic: "Men, Watch",
    price: 230,
    id: "alidnoafjadifo",
  },
]

export const donutGraphData = [
  { name: 'Delivered', value: 400, color: 'teal.5' },
  { name: 'Pending', value: 300, color: 'yellow.5' },
  { name: 'Canceled', value: 100, color: 'red.5' },
];


export const ordersTableData = [
  {
    orderNo: "#4254B2",
    date: "05/09/2022",
    name: "Wade Warren",
    price: 523,
    id: "alidnoafjadifo",
    status: "pending",
  },
  {
    orderNo: "#4254B2",
    date: "05/09/2022",
    name: "Wade Warren",
    price: 523,
    id: "alidnoafjadifo",
    status: "pending",
  },
  {
    orderNo: "#4254B2",
    date: "05/09/2022",
    name: "Wade Warren",
    price: 523,
    id: "alidnoafjadifo",
    status: "pending",
  },
  {
    orderNo: "#4254B2",
    date: "05/09/2022",
    name: "Wade Warren",
    price: 523,
    id: "alidnoafjadifo",
    status: "pending",
  },
]

