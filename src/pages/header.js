import { Link } from "react-router-dom";
import routingParameter from "../common/json/menu.json";

export default function Header() {
  console.log("---RoutParameter", routingParameter);
  return (
    <nav>
      {routingParameter?.map((parameter) => (
        <RouterComponent
          path={parameter.path}
          display={parameter.displayName}
        />
      ))}
    </nav>
  );
}
const RouterComponent = (props) => {
  const { path, display } = props;
  return (
    <>
      <Link to={path}>{display} </Link>
      <br />
    </>
  );
};
