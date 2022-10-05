import React, { useState } from 'react';
import { useColorModeValue, Box, IconButton, HStack, Avatar, Text, Checkbox, } from '@chakra-ui/react';

type Props = {
    id: string,
    name: string,
    avatar: string,
    addMe: (params: any) => any,
}

export default function NewMember({ id, name, avatar, addMe }: Props) {
    const value = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
    const [isChecked, setIsChecked] = useState<any>(false)
    const addFriendHandler = () => {
        console.log('addFriendHandler', isChecked)

        setIsChecked(!isChecked)
        if (isChecked) {
            addMe((newMembers: any) => {
                // console.log('first')
                // const searchIndex = newMembers.findIndex((id: any) => id.toString() === id.id);
                // if (searchIndex === -1)
                return newMembers.filter((e: any) => e !== id.toString());
                // else
                // return newMembers
            })
        }
        else {
            addMe((newMembers: any) => {
                const searchIndex = newMembers.findIndex((id: any) => id.toString() == id.toString());
                if (searchIndex == -1)
                newMembers.push(id.toString());
                console.log(newMembers)
                return [...newMembers];
            })
        }
    }

    return (
        <HStack
            as={'button'}
            p={5}
            pl={6}
            alignItems={'center'}
            rounded={5}
            h={'4.5em'}
            w={'100%'}
            _hover={{ bg: value }}
            onClick={addFriendHandler}
        >
            <Checkbox
                as={Box}
                isChecked={isChecked}
                _focus={{ bg: 'purple' }}
                mr={6}
                colorScheme='purple' />
            <Avatar name={name} src={avatar} />
            <Text>{name}</Text>
        </HStack>
    )
}
