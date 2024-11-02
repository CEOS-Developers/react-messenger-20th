import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';

import { MessageInterface } from '@interface/ChatInterface';
import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatForm from './ChatForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useChatMessages from '@hooks/useChatMessages';
import { toggleUser } from '@redux/userSlice';
import useUserById from '@hooks/useUserById';
import { generateId } from '@utils/generateId';

export default function ChatRoom() {
  const mainUser = useSelector((state: RootState) => state.user.mainUser);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const { chatData, addMessage, getLastMessagePreview } = useChatMessages();
  // URL에서 userId 가져오기
  const { userId } = useParams() as { userId: string };
  const friend = useUserById(userId);

  const [friendMessages, setFriendMessages] = useState<MessageInterface[]>([]);

  // 새로운 메시지를 추가하는 함수
  const handleAddMessage = (text: string) => {
    if (!userId) return;
    const senderType = currentUser.id !== mainUser.id ? 'me' : 'you';

    const newMessage = {
      id: generateId(),
      sender: senderType,
      message: text,
      timeStamp: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      date: new Date().toISOString().split('T')[0],
      emoji: undefined,
    };

    addMessage(userId, newMessage);
  };

  useEffect(() => {
    if (userId && chatData[userId]) {
      setFriendMessages(chatData[userId]);
    } else {
      console.log('userId에 해당하는 값이 없습니다.');
    }
  });

  useEffect(() => {
    console.log('Updated currentUser:', currentUser);
  }, [currentUser]);

  const lastMessageInfo = getLastMessagePreview(userId);
  const dispatch = useDispatch();

  // 프로필 클릭 이벤트로 사용자 전환
  const handleProfileClick = () => {
    if (friend) dispatch(toggleUser(friend));
  };

  return (
    <div className="h-full flex flex-col">
      <ChatHeader
        friend={
          friend || {
            id: '',
            userName: '알 수 없음',
            profileImg: '',
            isOnline: false,
          }
        }
        lastMessageTimeStamp={lastMessageInfo.timeStamp}
        onProfileClick={handleProfileClick}
      />
      <ChatMain
        id={userId || ''}
        messages={friendMessages}
      />
      <ChatForm addMessage={handleAddMessage} />
    </div>
  );
}
