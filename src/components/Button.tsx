import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonProps } from '@interface/ButtonInterface';

const Button = ({ children, src, type, onClick }: ButtonProps) => {
  return (
    <button
      className="w-full h-full text-center"
      type={type}
      onClick={onClick}
    >
      {src ? (
        <img
          src={src}
          alt={src}
        />
      ) : (
        children
      )}
    </button>
  );
};

export const MainButton = (props: ButtonProps) => {
  const bgSize = props.bgSize ? `${props.bgSize}rem` : '3rem';
  // const fontSize = props.fontSize ? props.fontSize : 'largeHeading';
  const fontSizeClass = {
    largelarge: 'text-largelarge',
    heading: 'text-heading',
    largeHeading: 'text-largeHeading',
    title: 'text-title',
    subtitle: 'text-subtitle',
    body: 'text-body',
    caption: 'text-caption',
    small: 'text-small',
  }[props.fontSize || 'largeHeading'];
  return (
    <div
      style={{ width: bgSize, height: bgSize }}
      className={`rounded-full
      bg-pink-light  ${fontSizeClass} text-pink-dark flex items-center justify-center
      `}
    >
      <Button
        type={props.type}
        src={props.src}
        children={props.children}
      />
    </div>
  );
};
export const NamedButton = (props: ButtonProps) => {
  return (
    <Link to={props.link || '/'}>
      <StyledNamedButton>
        <Button
          type={props.type}
          src={props.src}
        />
        <div className="text-small">{props.buttonName}</div>
      </StyledNamedButton>
    </Link>
  );
};
export const OnlineTaggedButton = (
  props: ButtonProps & { isOnline: boolean }
) => {
  return (
    <StyledOnlineTaggedButton>
      <MainButton
        type={props.type}
        src={props.src}
        children={props.children}
      />
      <StyledOnlineTag $isOnline={props.isOnline}></StyledOnlineTag>
    </StyledOnlineTaggedButton>
  );
};
const StyledOnlineTaggedButton = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  margin: 1rem 0;
`;

const StyledOnlineTag = styled.div<{ $isOnline?: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid white;
  background-color: ${({ $isOnline }) => ($isOnline ? '#8CE184' : '#b0b0b0')};
  width: 12px;
  height: 12px;
  border-radius: 100px;
`;

const StyledNamedButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;
  justify-content: center;
  button {
    width: 2rem;
    height: 2rem;
    text-align: center;
    img {
      margin: auto;
      object-size: contain;
    }
  }
`;

export default Button;
