import { Link } from "react-router-dom";
const routingParameter = [
  { path: "/", DisplayName: "Home" },
  { path: "/coffee", DisplayName: "HotCoffee" },
  { path: "/wine", DisplayName: "Wine" },
  { path: "/beer", DisplayName: "Beer" },
  { path: "/games", DisplayName: "Games" },
];

export default function Header() {
  return (
    <nav>
      {routingParameter?.map((parameter) => (
        <RouterComponent
          path={parameter.path}
          Display={parameter.DisplayName}
        />
      ))}
    </nav>
  );
}
const RouterComponent = (props) => {
  const { path, Display } = props;
  return (
    <>
      <Link to={path}>{Display} </Link>
      <br />
    </>
  );
};
