import { Link } from "react-router-dom";
import routingParameter from "../common/json/menu.json";

export default function Header() {
  console.log("---RoutParameter", routingParameter);
  return (
    <nav style={{ display: "flex", flexDirection: "row", gap: 25, margin: 25 }}>
      {routingParameter?.map((parameter) => (
        <Link to={parameter.path}>
          {parameter.displayName} <br />
        </Link>
      ))}
    </nav>
  );
}
