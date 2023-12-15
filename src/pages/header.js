import { Link } from "react-router-dom";
import routingParameter from "../common/json/menu.json";
import SearchBox from "./headerSearchAndDummyMemo";

export default function Header() {
  console.log("---RoutParameter", routingParameter);
  return (
    <div className="parentHeader">
      <nav className="header">
        {routingParameter?.map((parameter) => (
          <Link to={parameter.path}>
            {parameter.displayName} <br />
          </Link>
        ))}
      </nav>
      <SearchBox />
    </div>
  );
}
