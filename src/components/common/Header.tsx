import MORE from '@assets/menu/more.png';
import styled from 'styled-components';
interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="flex justify-between mx-5 h-10 justify-item-center">
      <div className="justify-center flex flex-col">{title}</div>
      <StyledStatus>
        <img
          src={MORE}
          alt="more"
        />
      </StyledStatus>
    </div>
  );
}

const StyledStatus = styled.div`
  width: 18px;
  display: flex;
  justify-content: center;
  img {
    width: 70px;
    height: 40px;
    object-fit: contain;
  }
`;
