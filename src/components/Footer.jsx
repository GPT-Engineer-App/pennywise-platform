import { Box, Flex, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Flex py={4} px={8} justifyContent={"space-between"} alignItems={"center"}>
        <Text>© 2023 Financial Times. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;