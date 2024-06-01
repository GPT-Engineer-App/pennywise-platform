import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Opinion = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h2" size="xl" mb={4}>Opinion</Heading>
      <Box>
        <Heading as="h3" size="md" mt={2}>Opinion Article 1</Heading>
        <Text mt={2}>Brief description of the opinion article...</Text>
      </Box>
      <Box mt={8}>
        <Heading as="h3" size="md" mt={2}>Opinion Article 2</Heading>
        <Text mt={2}>Brief description of the opinion article...</Text>
      </Box>
    </Container>
  );
};

export default Opinion;