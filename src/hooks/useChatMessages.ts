import { useState, useEffect } from 'react';
import userDataList from '@data/users.json';
import { MessageInterface, ChatData } from '@interface/ChatInterface';
import { UserInterface } from '@interface/UserInterface';
import { useLocalStorage } from './useLocalStorage';
// TODO : 사용자 id를 가져와
// TODO : 사용자 id와 일치하는 message_{id}.json을 가져와
// TODO : 각 json파일을 배열에 담고
// TODO : map함수를 활용해서 채팅상대이름, 최근채팅미리보기, 채팅상대 프로필이미지 가 담긴 아이템을 나열해서 리스트로 완성
// TODO : ~를 통합한 custom hook 구현
// TODO : 아이디에 맞는 사용자 이름 가져와
// users.json에 있는 사용자들의 ID정보를 배열로 가져오는 함수
function getUserDataById() {
  const userData: UserInterface[] = userDataList;
  const usersIdArr: string[] = userData.map((data) => data.id);
  return usersIdArr;
}

// 초기화: 처음 사용할 때 JSON 데이터를 로컬 스토리지에 저장
async function initializeChatData(): Promise<ChatData> {
  // JSON 데이터 로드 (서버로부터 초기 데이터를 불러오는 형태도 가능)
  const userIdArr: string[] = getUserDataById();
  const allUserMessages: ChatData = {};

  // 비동기 -> 이거 해줘야 데이터 다 가져오기 전에 화면 실행됨
  await Promise.all(
    userIdArr.map(async (userID) => {
      const messagesData = await import(`@data/messages_${userID}.json`);
      allUserMessages[userID] = messagesData.messages;
    })
  );
  console.log('here!!');
  console.log(allUserMessages);
  return allUserMessages;
}

function useLocalStorageChatData() {
  const [chatData, setChatData] = useLocalStorage<ChatData>({
    key: 'chatData',
    initialValue: {},
  });

  // useEffect 안쓰고 비동기 함수로 작성하면 안돼 -> 왜냐면 React hook&component는 async선언 불가
  // 따라서 동기적으로 JSX반환해야되고
  // 비동기 데이터 가져오려면 useEffect로
  useEffect(() => {
    const loadData = async () => {
      const initialData = await initializeChatData();
      setChatData(initialData);
    };

    if (Object.keys(chatData).length === 0) {
      loadData();
    }
  });

  return [chatData, setChatData] as const;
}

// chatting 메시지 로컬스토리지에서 조작하는 함수
function useChatMessages() {
  const [chatData, setChatData] = useLocalStorageChatData();

  // 새로운 메시지 추가 함수
  const addMessage = (userId: string, newMessage: MessageInterface) => {
    const updatedMessages = chatData[userId]
      ? [...chatData[userId], newMessage]
      : [newMessage];
    const updatedChatData = { ...chatData, [userId]: updatedMessages };
    setChatData(updatedChatData);
    localStorage.setItem('chatData', JSON.stringify(updatedChatData));
  };

  // 마지막 메시지 미리보기 함수
  const getLastMessagePreview = (userId: string) => {
    const messages = chatData[userId] || [];
    if (messages.length === 0) return { message: '', timeStamp: '' };
    const lastMessage = messages[messages.length - 1];
    return {
      message: lastMessage.message,
      timeStamp: lastMessage.timeStamp,
    };
  };

  // 메시지 업데이트 함수
  const updateMessageInStorage = (
    userId: string,
    updatedMessages: MessageInterface[]
  ) => {
    const updatedChatData = { ...chatData, [userId]: updatedMessages };

    setChatData(updatedChatData);
    localStorage.setItem('chatData', JSON.stringify(updatedChatData));
  };

  return {
    chatData,
    addMessage,
    getLastMessagePreview,
    updateMessageInStorage,
  };
}

export default useChatMessages;
