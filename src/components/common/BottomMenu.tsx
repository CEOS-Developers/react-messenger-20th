import { NamedButton } from '@components/Button';
import CHAT from '@menuIcon/chat.png';
import MEMBERS from '@menuIcon/members.png';
import MORE from '@menuIcon/more.png';
import NOTICE from '@menuIcon/notice.png';
import TEAM from '@menuIcon/team.png';
import styled from 'styled-components';

export default function BottomMenu() {
  return (
    <StyledBottomMenu>
      <NamedButton
        src={MEMBERS}
        type="button"
        buttonName="구성원"
        link="/members"
      />
      <NamedButton
        src={NOTICE}
        type="button"
        buttonName="그룹홍보"
        link="/notice"
      />
      <NamedButton
        src={CHAT}
        type="button"
        buttonName="채팅"
        link="/chat"
      />
      <NamedButton
        src={TEAM}
        type="button"
        buttonName="팀"
        link="/team"
      />
      <NamedButton
        src={MORE}
        type="button"
        buttonName="더보기"
        link="/more"
      />
    </StyledBottomMenu>
  );
}

const StyledBottomMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid var(--gray-70);
  padding: 1rem;
  gap: 1.5rem;
  height: 82px;
`;
