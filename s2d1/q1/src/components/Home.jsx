import { Box, Heading } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box>Built Three Assignment As per Given Title of Ass:- CHAKRA UI 🤓</Box>
      <Box>Click On the Below Links To Check 👇</Box>
      <Link to="/">Home</Link>
      <nav>
        <Link to="/One">👉 One.Jpeg</Link>
      </nav>
      <nav>
        <Link to="/Two">👉 Two.Jpeg</Link>
      </nav>
      <nav>
        <Link to="/Three">👉 Three.Jpeg</Link>
      </nav>
      <Outlet />
      <Heading>Welcome To Home Page </Heading>
    </>
  );
};

export default Home;