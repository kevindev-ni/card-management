/** @format */

import {
  HStack,
  VStack,
  Text,
  Box,
  ScrollView,
  Center,
  Spacer,
  Flex,
  Button,
  View, Image,
} from "native-base";
import { Pressable } from "react-native";

const HomeContainer = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <ScrollView>
        {Array.from("fo454545454o").map((_, index) => (
          <Box
            key={index}
            rounded="lg"
            overflow="hidden"
            margin="1"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Pressable onPress={() => navigation.navigate("Details")}>
              <Flex alignItems="center" direction="row" py="10" px="3">

                <Flex direction="row" alignItems="center">
                  <Box>
                    <Image width={50} height={50} rounded="3xl" alt="image back" source={require('../assets/bank.jpg')}/>
                  </Box>
                  <Text margin="1.5">City Bank </Text>
                </Flex>
                <Spacer />
                <Box>5047-0610-4475-8817</Box>
              </Flex>
            </Pressable>
          </Box>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeContainer;
