import React, {useContext, useEffect} from 'react';
import {Flex, HStack, Text, VStack} from "@chakra-ui/react";
import {ChatContext} from "../hooks/ChatProvider";
import {CloseIcon} from "@chakra-ui/icons";
import MiniProfile from "./MiniProfile";


function ProfileDetails() {
    const {data} = useContext<any>(ChatContext);
    const {selectedChat} = useContext<any>(ChatContext);
    const {setChatDetails} = useContext<any>(ChatContext);
    let searchIndex;
    if (selectedChat.chat === 'F') searchIndex = data.friends.findIndex((id: any) => selectedChat.id === id.id);
    else searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);

    useEffect(() => {
        console.log('useEffect: Enter to ProfileDetails')
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                console.log('Chat Details : Escape')
                setChatDetails(false)
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    },);
    console.log('>>>>>>>>> Enter to ProfileDetails <<<<<<<<<<<<<')


    return (
        <VStack h={'100%'} w={'100%'}>
            <HStack h={14} px={5} w={'100%'} m={0} spacing={8}>
                <CloseIcon m={0} p={0} h={30} fontSize={15} onClick={() => {
                    console.log('Chat Details : Icon')
                    setChatDetails(false)
                }}/>
                <Text fontSize={20}>Profile</Text>
            </HStack>
            <Flex
                h={'100%'}
                w={'100%'}
                flex={1}
                alignItems={'center'}
                justifyContent={'center'}
            >
                {
                    <MiniProfile
                        name={'Youssef'}
                        src={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].avatar}
                        facebook={'face'}
                        instagram={'insta'}
                        discord={'discord'}
                    />
                }
            </Flex>
        </VStack>
    );
}

export default ProfileDetails;