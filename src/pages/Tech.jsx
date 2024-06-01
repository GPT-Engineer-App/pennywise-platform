import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Tech = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h2" size="xl" mb={4}>Tech News</Heading>
      <Box>
        <Heading as="h3" size="md" mt={2}>Tech News Article 1</Heading>
        <Text mt={2}>Brief description of the tech news article...</Text>
      </Box>
      <Box mt={8}>
        <Heading as="h3" size="md" mt={2}>Tech News Article 2</Heading>
        <Text mt={2}>Brief description of the tech news article...</Text>
      </Box>
    </Container>
  );
};

export default Tech;