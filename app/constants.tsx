import { HiMiniSquares2X2 } from "react-icons/hi2";
import { TiHome } from "react-icons/ti";
import { FaUsers, FaBox, FaChartArea, FaDiceD6, FaCog } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";

export const sections = [
  {
    icon: <HiMiniSquares2X2 />,
    name: "Menü",
    url: "",
  },
  {
    icon: <TiHome />,
    name: "Anasayfa",
    url: "/",
  },
  {
    icon: <FaDiceD6 />,
    name: "Ürünler",
    url: "/products",
  },
  {
    icon: <FaUsers />,
    name: "Kullanıcılar",
    url: "/users",
  },
  {
    icon: <IoIosPricetag />,
    name: "Siparişler",
    url: "/orders",
  },
  {
    icon: <FaChartArea />,
    name: "Ürünler",
  },
  {
    icon: <FaHeart />,
    name: "Favoriler",
    url: "/",
  },
  {
    icon: <FaBox />,
    name: "Envanter",
  },
  {
    icon: <FaCog />,
    name: "Ayarlar",
  },
];

export const inputs = [
  {
    label: "İsim",
    name: "name",
  },
  {
    label: "Marka",
    name: "brand",
  },
  {
    label: "Kategori",
    name: "category",
  },
  {
    label: "Fiyat",
    name: "price",
    type: "number",
  },
  {
    label: "Stok",
    name: "stock",
    type: "number",
  },
  {
    label: "Açıklama",
    name: "description",
  },
];
