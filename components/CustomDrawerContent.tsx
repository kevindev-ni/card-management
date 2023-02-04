/** @format */
import {
    DrawerContentScrollView,
  } from "@react-navigation/drawer";
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const getIcon = (screenName: any) => {
    switch (screenName) {
      case "Inbox":
        return "email";
      case "Outbox":
        return "send";
      case "Favorites":
        return "heart";
      case "Archive":
        return "archive";
      case "Trash":
        return "trash-can";
      case "Spam":
        return "alert-circle";
      default:
        return undefined;
    }
  };
const CustomDrawerContent = ({ navigation }: { navigation: any }) => {

  return (
    <DrawerContentScrollView>
      <VStack space="6"  mx="1">
        <Box px="4" marginTop="5">
          <Text bold color="gray.700">
            Card Management
          </Text>
          <Text fontSize="10" mt="1" color="gray.500" fontWeight="500">
            reza@gmail.com
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="5">
            <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
              Menu
            </Text>
            <VStack space="3">
              <Pressable onPress={() => navigation.navigate("add-new-card")} px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Add New card
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="2">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Friends
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text fontWeight="500" color="gray.700">
                    Work
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  )
};

export default CustomDrawerContent;
