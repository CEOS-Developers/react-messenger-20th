import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

import userList from '@data/users.json';
import Header from '@components/common/Header';
import BottomMenu from '@components/common/BottomMenu';
import Main from '@components/common/MainContent';
import { MainButton } from '@components/Button';
import StatusBar from '@components/common/StatusBar';
import { ChatListItem } from '@components/MemberListItem';
import Form from '@components/Form';
import useChatMessages from '@hooks/useChatMessages';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { UserInterface } from '@interface/UserInterface';

export default function Chat() {
  const mainUser = useSelector((state: RootState) => state.user.mainUser);
  // 사용자 데이터 맵핑: userId를 키로 하여 각 사용자의 정보를 쉽게 참조할 수 있도록 설정
  const [users] = useLocalStorage<UserInterface[]>({
    key: 'members',
    initialValue: userList,
  });
  const { chatData, addMessage, getLastMessagePreview } = useChatMessages();

  // TODO : hook 분리하기
  const searchMember = (text: string) => {
    alert(text);
  };

  // userId에 해당하는 사용자 정보를 users 배열에서 찾기
  const findUserById = (userId: string) => {
    return users.find((user) => user.id === userId);
  };
  // TODO : 채팅 리스트 컴퍼넌트 구현
  useEffect(() => {
    console.log(chatData);
  });

  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <Header title="채팅" />
      <Main>
        <div className="flex gap-4 justify-between h-23 mx-5 my-3 bg-border-l-rose-700 ">
          <Form
            key="searchForm"
            onSubmit={(text: string) => searchMember(text)}
            placeHolder="검색"
          />
        </div>
        <div className="flex justify-center">
          {mainUser.profileImg ? (
            <MainButton
              type="button"
              src={mainUser.profileImg}
            />
          ) : (
            <MainButton
              type="button"
              children={mainUser.userName.charAt(0)}
            />
          )}
        </div>
        {Object.keys(chatData).map((userId) => {
          const lastMessageInfo = getLastMessagePreview(userId);
          const user = findUserById(userId);

          return (
            <Link to={`./${userId}`}>
              <ChatListItem
                key={user?.id}
                id={user?.id || ''}
                isOnline={user?.isOnline || false}
                userName={user?.userName || '(알 수 없음)'}
                lastMessage={lastMessageInfo.message}
                lastMessageTimeStamp={lastMessageInfo.timeStamp}
              />
            </Link>
          );
        })}
      </Main>

      <BottomMenu />
    </div>
  );
}
