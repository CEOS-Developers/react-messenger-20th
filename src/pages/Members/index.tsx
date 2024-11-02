import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useLocalStorage } from '@hooks/useLocalStorage';

import memberList from '../../data/users.json';
import Header from '@components/common/Header';
import BottomMenu from '@components/common/BottomMenu';
import { MemberListItem } from '@components/MemberListItem';
import Form from '@components/Form';

import { UserInterface } from '@interface/UserInterface';
import { useEffect } from 'react';
import StatusBar from '@components/common/StatusBar';
import Main from '@components/common/MainContent';
import { MainButton } from '@components/Button';

export default function Members() {
  const mainUser = useSelector((state: RootState) => state.user.mainUser);

  // TODO : hook 분리하기
  const searchMember = (text: string) => {
    alert(text);
  };
  const memberListData: UserInterface[] = memberList;
  const [members, setMembers] = useLocalStorage<UserInterface[]>({
    key: 'members',
    initialValue: memberListData,
  });

  useEffect(() => {
    console.log(members);
  });
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <Header title="목록" />
      <Main>
        <div className="flex gap-4 justify-between h-23 mx-5 my-3  bg-border-l-rose-700 ">
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

        {members.map((member) => (
          <MemberListItem
            key={member.id}
            id={member.id}
            userName={member.userName}
            isOnline={member.isOnline}
          />
        ))}
      </Main>

      <BottomMenu />
    </div>
  );
}
