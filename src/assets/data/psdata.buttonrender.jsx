import { MdDashboard, MdPerson, MdInventory } from "react-icons/md";

const btnDefault = {
  color: "#fff",
  size: "2rem",
};
export const btnrenderDATA = [
  {
    isDrop: false,
    index: 0,
    icons: <MdDashboard color={btnDefault.color} size={btnDefault.size} />,
    name: "Dashoboard",
  },
  {
    isDrop: false,
    index: 3,
    icons: <MdPerson color={btnDefault.color} size={btnDefault.size} />,
    name: "Clientes",
  },
  {
    isDrop: false,
    index: 4,
    icons: <MdInventory color={btnDefault.color} size={btnDefault.size} />,
    name: "Estoque",
  },
  {
    isDrop: false,
    index: 5,
    icons: <MdDashboard color={btnDefault.color} size={btnDefault.size} />,
    name: "Dashoboard",
  },
];
