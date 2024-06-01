import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Flex direction={{ base: "column", md: "row" }} spacing={8}>
        <Box flex="3">
          <Heading as="h2" size="xl" mb={4}>Latest News</Heading>
          <VStack spacing={8}>
            <Box>
              <Image src="/images/news1.jpg" alt="News 1" />
              <Heading as="h3" size="md" mt={2}>Headline for News Article 1</Heading>
              <Text mt={2}>Brief description of the news article...</Text>
            </Box>
            <Box>
              <Image src="/images/news2.jpg" alt="News 2" />
              <Heading as="h3" size="md" mt={2}>Headline for News Article 2</Heading>
              <Text mt={2}>Brief description of the news article...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Trending Topics</Heading>
          <VStack spacing={4}>
            <Box>
              <Heading as="h4" size="sm">Trending Topic 1</Heading>
              <Text mt={2}>Brief description...</Text>
            </Box>
            <Box>
              <Heading as="h4" size="sm">Trending Topic 2</Heading>
              <Text mt={2}>Brief description...</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;