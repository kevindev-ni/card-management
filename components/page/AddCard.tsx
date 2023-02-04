/** @format */

import React from "react";
import {Input, Stack, FormControl, VStack, Button} from 'native-base';
import {SafeAreaView} from "react-native";

const AddNewCard = ({ navigation }: { navigation: any }) => {
    console.log(navigation);

    return (
        <SafeAreaView>
            <VStack mx="3">
                <FormControl>
                    <Stack space={5}>
                        <Stack>
                            <FormControl.Label>Username</FormControl.Label>
                            <Input variant="underlined" p={2} placeholder="Username" />
                        </Stack>
                        <Stack>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input variant="underlined" p={2} placeholder="Password" />
                        </Stack>
                    </Stack>
                </FormControl>
                <Button marginTop="3" py="3" rounded="lg" size="sm" bgColor="blue.800" colorScheme="default">
                    Add card
                </Button>
            </VStack>
        </SafeAreaView>
    )
};

export default AddNewCard;
