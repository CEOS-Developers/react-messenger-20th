import { Back } from "../../assets/icons";
import { Search } from "../../assets/icons";
import { Menu } from "../../assets/icons";

import useChatroomStore from "../../stores/ChatroomStore";
import useUserStore from "../../stores/UserStore";

import styled from "styled-components";

export function ChatTitle() {
  //스토어 활용
  const chatrooms = useChatroomStore((state) => state.chatrooms);
  const users = useUserStore((state) => state.users);

  //임의로 id가 1인 채팅방 불러오기 (추후 목록에서 채팅방 클릭하면 해당 id의 채팅방이 불러와지도록 수정할 예정)
  const chatroom = chatrooms.find((room) => room.id === 1);

  //채팅방 title이 없을 경우엔 그룹채팅(3명 이상), 혹은 상대방 이름 할당. 만약 없을 경우엔 '알 수 없음' 할당.
  const getTitle = (
    title: string,
    userIds: number[],
    currentUserId: number
  ) => {
    if (title) return title;

    if (userIds.length === 2) {
      const counterpart = users.find(
        (user) => userIds.includes(user.id) && user.id !== currentUserId
      );
      return counterpart?.name || "(알 수 없음)";
    }
    return "그룹채팅";
  };

  return (
    <Contianer>
      <Left>
        <Back style={{ width: "1.5rem", cursor: "pointer" }} />
        <AllNum>85</AllNum>
      </Left>
      <Center>
        <Title>
          {getTitle(
            chatroom?.title || "",
            chatroom?.userIds || [],
            chatroom?.currentUserId || 1
          )}
        </Title>
        {chatroom?.userIds && chatroom.userIds.length > 2 && (
          <Num>{chatroom?.userIds.length}</Num>
        )}
      </Center>
      <Right>
        <Search style={{ width: "1.5rem", cursor: "pointer" }} />
        <Menu style={{ width: "1.5rem", cursor: "pointer" }} />
      </Right>
    </Contianer>
  );
}

const Contianer = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  background-color: white;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.25rem;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.5rem;
`;

const Right = styled.div`
  display: flex;
  width: 4rem;
  justify-content: space-between;
`;

const AllNum = styled.p`
  ${({ theme }) => theme.font.Body_2_med}
  color: ${({ theme }) => theme.color.gray80}
`;

const Title = styled.p`
  ${({ theme }) => theme.font.Headline3}
  color: ${({ theme }) => theme.color.gray100}
`;

const Num = styled.p`
  ${({ theme }) => theme.font.Subhead_med}
  color: ${({ theme }) => theme.color.gray50}
`;
