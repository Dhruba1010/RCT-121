import React from 'react';
import { Box, Center, Stack } from "@chakra-ui/react";

function FirstSet() {
  return (
    <>
      <Stack spacing="0">
        <Box bg="darkcyan" w="200px" h={["200px", "500px"]}>
          <Center color="white" fontSize={"2xl"} marginTop={["90px", "240px"]}>
            NAV
          </Center>
        </Box>
        <Box bg="darkorange">
          <Center>
            CONTENT
          </Center>
        </Box>
        <Box bg="crimson">
          <Center>
            WIDGET
          </Center>
        </Box>
      </Stack>
    </>
  )
}

export default FirstSet;