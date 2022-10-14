import React, { useContext, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import { useColorModeValue, VStack } from "@chakra-ui/react";
import { ChatContext } from "../State/ChatProvider";
import FriendMenu from "./FriendMenu";
import GroupMenu from "./GroupMenu";

function MessagingBox() {
  const { data, friends, groups } = useContext<any>(ChatContext);
  const { selectedChat, setSelectedChat, toggleOffSelectedChat } = useContext<any>(ChatContext);
  const { toggleDetails } = useContext<any>(ChatContext);
  let searchIndex;

  if (selectedChat.chat === "F")
    searchIndex = friends.findIndex((id: any) => selectedChat.id === id.id);
  else searchIndex = groups.findIndex((id: any) => selectedChat.id === id.id);
  
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Escape") {
        event.preventDefault();
        console.log("Messaging");
        setSelectedChat(null);
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const chatBg = useColorModeValue("red", "green");
  return (
    <VStack h={"100%"} w={"100%"}>
      <ChatHeader
        avatarName={
          selectedChat.chat === "G"
            ? groups[searchIndex].name.toString()
            : friends[searchIndex].name.toString()
        }
        chatName={
          selectedChat.chat === "G"
            ? groups[searchIndex].name.toString()
            : friends[searchIndex].name.toString()
        }
        avatarSrc={
          selectedChat.chat === "G"
            ? groups[searchIndex].avatar
            : friends[searchIndex].avatar
        }
        isGroup={selectedChat.chat === "F" ? false : true}
        onClickCallBack={toggleDetails}
        backArrowCallBack={toggleOffSelectedChat}
        menu={selectedChat.chat === "G" ? <GroupMenu /> : <FriendMenu />}
      />
      <VStack
        overflow={"auto"}
        maxW={"62em"}
        bgGradient={[
          "linear(to-t, purple.3000, black)",
          `linear(to-b, pink.900, ${chatBg})`,
        ]}
        alignItems={"center"}
        h={"100%"}
        w={"100%"}
        flex={1}
        p={3}
        pb={1.5}
      >
        <VStack
          maxW={"100%"}
          flex={1}
          h={"100%"}
          w={"100%"}
          overflowY={"auto"}
          px={5}
        >
          <MessagesList />
        </VStack>
        <MessageInput />
      </VStack>
    </VStack>
  );
}

export default MessagingBox;
