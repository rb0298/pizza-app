import { useLoaderData } from "react-router-dom";
import {getMenu} from "../../services/apiRestaurant"
import MenuItem from "./MenuItem";
function Menu() {

  const menuData = useLoaderData();
  console.log(menuData);
  return <>{menuData.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)}</>
}

export async function loader() {
  const data = await getMenu();
  console.log(data);
  return data;
}

export default Menu;
