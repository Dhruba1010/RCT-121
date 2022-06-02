import { Box, Heading } from "@chakra-ui/react";
import styles from './ChakraUI.module.css';
const Home = () => {
  return (
    <div className={styles.home}>
      <Heading>Welcome To Home Page </Heading>
      <Box>Chakra UI assignments with basic routing</Box>
      <Box>Click on the above links to go and see the assignments</Box>
    </div>
  );
};

export default Home;