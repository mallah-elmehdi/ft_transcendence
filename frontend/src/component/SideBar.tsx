import { Flex } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { AnimatePresence } from "framer-motion";
import React, { useContext, useEffect } from "react";
import Tabs from "./Tabs";
import Messaging from "./Messaging";
import { ChatContext } from "../State/ChatProvider";
import NewChannel from "./NewChannel";
import useFriends from "../api/useFriends";
import { ALL_USERS, API, FRIENDS_URL, GROUP, USER_URL } from "../constants";
import useGroups from "../api/useGroups";
// import { GlobalContext } from "../State/GlobalProvider";
import axios from "axios";

const ChatTabs = () => {
  const { isSearch, toggleSearch } = useContext<any>(ChatContext);
  const { setChatDetails } = useContext<any>(ChatContext);

  useEffect(() => {
    setChatDetails(false);
    const keyDownHandler = (event: any) => {
      if (event.key === "Escape") {
        event.preventDefault();
        toggleSearch();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });
  return (
    <>
      <SearchBar />
      <AnimatePresence>{!isSearch ? <Tabs /> : undefined}</AnimatePresence>
    </>
  );
};

const SideBar = () => {
  const { selectedChat } = useContext<any>(ChatContext);
  const { newChannel } = useContext<any>(ChatContext);
  const { dispatch, state } = useContext<any>(ChatContext);
  const { newGroups, newFriends } = state;

  React.useEffect(() => {
    axios.get(FRIENDS_URL).then((response: any) => {
      for (var i = 0; i < response.data.length; i++) {
        axios.get(USER_URL + response.data[i].friendId).then((res: any) => {
          const user = {
            id: res.data.user_id,
            name: res.data.user_name,
            avatar: res.data.user_avatar,
          };
          dispatch({
            type: "ADD_FRIEND",
            data: user,
          });
        });
      }
    });
  }, []);

  useEffect(() => {
    axios
      .get(GROUP + "all")
      .then((res: any) => {
        for (var i = 0; i < res.data.length; i++) {
          axios.get(GROUP + res.data[i].roomId).then((res: any) => {
            const group = {
              id: res.data.room_id,
              name: res.data.room_name,
              avatar: res.data.room_avatar,
              type: res.data.room_type,
            };
            dispatch({
              type: "ADD_GROUP",
              data: group,
            });
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    axios.get(ALL_USERS).then((response: any) => {
      dispatch({
        type: "SET_USERS",
        data: response.data,
      });
    });
  }, []);

  return (
    <>
      <Flex
        w={["100%", "100%", "70%", "50%", "50%"]}
        // w={'100%'}
        _light={{ boxShadow: "md" }}
        _dark={{ boxShadow: "dark-lg" }}
        rounded="30px"
        direction={"column"}
        alignItems={"center"}
        p={5}
        overflow={"auto"}
      >
        {newChannel ? (
          <NewChannel />
        ) : !selectedChat ? (
          <ChatTabs />
        ) : (
          <Messaging />
        )}
      </Flex>
    </>
  );
};

export default SideBar;
