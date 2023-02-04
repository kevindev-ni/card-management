/** @format */

import React from 'react';
import {Input, Stack, FormControl, VStack} from 'native-base';
const DetailsScreen = ({ navigation }: { navigation: any }) => {
    console.log(navigation);
    
  return (
    <VStack>
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
  </VStack>
  )
};

export default DetailsScreen;
