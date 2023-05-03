import { useState } from "react";
import { context } from './context';


export const Provider = ({ children }) => {
   const [profilesList, setProfilesList] = useState([]);
   const [user, setUser] = useState(() => JSON.parse(window.localStorage.getItem('user')) ?? null);
   const [backLink, setBackLink] = useState('/');
   const [profileChat, setProfileChat] = useState(() => JSON.parse(window.localStorage.getItem('profileChat')) ?? null);
   const [chatFooter, setChatFooter] = useState(false);
   const [allChats, setAllChats] = useState(() => JSON.parse(window.localStorage.getItem('allChats')) ?? []);

   const getChatFooter = status => {
      setChatFooter(status);
   };

   const getBackLink = link => {
      setBackLink(link);
   };

   const getUser = (user) => {
      setUser(user);
   };

   const deleteUser = () => {
      setUser(null);
      setAllChats([]);
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('allChats');
      window.localStorage.removeItem('profileChat');
   };

   const getProfilesList = (list) => {
      setProfilesList(list);
   };

   const blockProfilesList = profileId => {
      setProfilesList(prevState => prevState.filter(item => item.id !== profileId));
   };

   const getProfileChat = profile => {
      setProfileChat(profile);
   };

   const getChat = profile => {
      setAllChats(prevState => {
         const index = prevState.findIndex((item) => item.id === profile.id);
         if (index !== -1) {
            const updatedChat = [...prevState];
            updatedChat[index] = { ...updatedChat[index], chat: [...updatedChat[index].chat, ...profile.chat] };
            return updatedChat;
         } else {
            return [...prevState, { ...profile }];
         };
      });
   };

   const providerValue = {
      profilesList,
      getProfilesList,
      blockProfilesList,
      user,
      getUser,
      backLink,
      getBackLink,
      getProfileChat,
      profileChat,
      chatFooter,
      getChatFooter,
      allChats,
      getChat,
      deleteUser
   };

   return <context.Provider value={providerValue}>{children}</context.Provider>;
};
