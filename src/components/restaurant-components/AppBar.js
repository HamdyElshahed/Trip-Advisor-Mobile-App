import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import MyDrawer from "../drawer";
const AppBar = ({Navigation}) => {
  console.log(Navigation)
    return (
        <>
            <StatusBar backgroundColor="#00aa6c" barStyle="light-content" />
    
            <Box safeAreaTop backgroundColor="#6200ee" />
    
            <HStack bg='#04ce84' px="1" py="3" justifyContent='space-between' alignItems='center'>
              <HStack space="4" alignItems='center'>
                <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} />
                <Text color="white" fontSize="20" fontWeight='bold'>Home</Text>
              </HStack>
              <HStack space="2">
                {/* <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
                <IconButton icon={<Icon as={<MaterialIcons name='search' />}
                color="white" size='sm'  />} /> */}
                <IconButton icon={<Icon as={<MaterialIcons name='login' />} size='sm' color="white" />}/>
                {/* <IconButton icon={<Icon as={<MaterialIcons name='register' />} size='sm' color="white" />} /> */}
                <IconButton icon={<Icon as={<MaterialIcons name='hotel' />} size='sm' color="white" />} />
                <IconButton icon={<Icon as={<MaterialIcons name='restaurant' />} size='sm' color="white" />} />
                <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
              </HStack>
            </HStack>
    
        </>
      )
}
export default AppBar;