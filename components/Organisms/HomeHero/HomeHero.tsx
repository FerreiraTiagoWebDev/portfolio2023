import Box from "@ui/Box";

const HomeHero = () => {
  return (
    <Box bg={"background-heavySecondary"} w="full" m="auto">
      <Box maxW="lg" mx="auto" textAlign="center">
        <Box fontSize="4xl" fontWeight="bold" color="text-white">
          Welcome to my portfolio!
        </Box>
        <Box mt={4} fontSize="2xl" color="text-white">
          I m a frontend developer passionate about creating beautiful and
          functional websites and web applications.
        </Box>
        <Box mt={8}>
          <a
            href="/projects"
            className="bg-white hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            View my projects
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHero;
