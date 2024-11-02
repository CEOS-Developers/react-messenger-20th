import styled from 'styled-components';
import { OnlineTaggedButton } from './Button';
import { UserInterface } from '@interface/UserInterface';
import CHAT from '@assets/chat.png';
import { Link } from 'react-router-dom';

interface ListItemProps {
  user: UserInterface;
  children: React.ReactNode;
}

export function ListItem({ user, children }: ListItemProps) {
  return (
    <StyledList>
      {user.profileImg ? (
        <OnlineTaggedButton
          src={user.profileImg}
          isOnline={user.isOnline}
          type="button"
        />
      ) : (
        <OnlineTaggedButton
          children={user.userName.charAt(0)}
          isOnline={user.isOnline}
          type="button"
        />
      )}
      <div className="py-4 grow flex gap-1 border-solid border-b-[1px] border-gray-70">
        {children}
      </div>
    </StyledList>
  );
}

export function MemberListItem(user: UserInterface) {
  return (
    <ListItem user={user}>
      <div className="flex flex-col justify-center gap-1 grow">
        <Link to={`${user.id}`}>
          {/* 사용자 이름 */}
          <div className="font-subtitle">{user.userName}</div>
        </Link>
      </div>
      <Link
        to={`/chat/${user.id}`}
        className="flex items-center justify-center mx-3"
      >
        <img
          src={CHAT}
          alt="chat"
        />
      </Link>
    </ListItem>
  );
}

export function ChatListItem(user: UserInterface) {
  return (
    <ListItem user={user}>
      <div className="flex flex-col justify-center gap-1 grow">
        {/* 사용자 이름 */}
        <div className="font-subtitle">{user.userName}</div>
        {/* item 내용 미리보기 */}
        {user.lastMessage && (
          <StyledMessagePreview className="text-body text-gray-500">
            {user.lastMessage}
          </StyledMessagePreview>
        )}
      </div>
      <div className="text-caption text-gray-500">
        {user.lastMessageTimeStamp}
      </div>
    </ListItem>
  );
}

const StyledList = styled.div`
  display: flex;
  margin: 0 1rem;
  height: 78px;
  gap: 1rem;
  border
`;

const StyledMessagePreview = styled.div`
  max-width: 200px;
  height: 100%;
  font-size: var(--font-body);
  color: var(--gray-500);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
