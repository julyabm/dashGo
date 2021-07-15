import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({showProfileData=true} : ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
         <Box mr="4" textAlign="right">
         <Text>Julya Brustolin</Text>
         <Text color="gray.300" fontSize="small">
           julyab.marssona@gmail.com
         </Text>
       </Box>
      )}
      <Avatar
        size="md"
        name="Julya Brustolin"
        src="https://github.com/julyabm.png"
      />
    </Flex>
  );
}
