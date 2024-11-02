import BottomMenu from '@components/common/BottomMenu';
import Main from '@components/common/MainContent';
import { MainButton, NamedButton } from '@components/Button';
import StatusBar from '@components/common/StatusBar';

import { Link, useParams } from 'react-router-dom';

import useUserById from '@hooks/useUserById';
import CHAT from '@assets/chat.png';
import MUTE from '@assets/mute.png';
import PIN from '@assets/pin.png';
import INSTA from '@assets/insta.png';
import PHONE from '@assets/phone.png';
import MAIL from '@assets/mail.png';
import prevButton from '@assets/prevButton.png';
import styled from 'styled-components';

export default function MemberProfile() {
  const { userId } = useParams() as { userId: string };
  const friend = useUserById(userId);
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <div className="flex items-center py-2.5 px-5 bg-border-l-indigo-500 ">
        <Link to={'/members'}>
          <img
            className="w-2 h-4 me-5"
            alt="prev"
            src={prevButton}
          />
        </Link>
      </div>
      <Main>
        <div className="mx-4">
          {/* <div className="mx-auto"> */}
          <div className="flex flex-col gap-2 justify-center text-center text-largeHeading my-6">
            <div className="mx-auto">
              <MainButton
                bgSize="5"
                fontSize="largelarge"
                type="button"
                src={friend?.profileImg}
                children={friend?.userName.charAt(0)}
              ></MainButton>
            </div>

            {friend?.userName}
          </div>
        </div>
        <StyledButtonContainer>
          <NamedButton
            type="button"
            src={CHAT}
            buttonName="채팅"
            link={`/chat/${friend?.id}`}
          />
          <NamedButton
            type="button"
            src={MUTE}
            buttonName="음소거"
            link={`/chat/${friend?.id}`}
          />
          <NamedButton
            type="button"
            src={PIN}
            buttonName="고정"
            link={`/chat/${friend?.id}`}
          />
        </StyledButtonContainer>

        <div className="m-4 flex gap-4 flex-col text-subtitle">
          <p style={{ fontSize: '20px' }}>연락처</p>
          <p>
            <img
              className="inline me-3"
              src={MAIL}
              alt="mail"
            ></img>
            {friend?.email}
          </p>
          <p>
            <img
              className="inline me-3"
              src={PHONE}
              alt="phone"
            ></img>
            {friend?.phoneNum}
          </p>
          <p>
            <img
              className="inline me-3"
              src={INSTA}
              alt="insta"
            ></img>
            {friend?.instagram}
          </p>
        </div>
      </Main>

      <BottomMenu />
    </div>
  );
}

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 1rem;

  > * {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: var(--gray-50);
    border-radius: 8px;
  }
`;
