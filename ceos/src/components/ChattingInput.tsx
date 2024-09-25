import { ContentContainer, Icon, rowFlex } from "style/commonStyle";
import styled from "styled-components";

import PlusIC from "@/assets/icons/plus_ic.svg?react";
import SmileIC from "@/assets/icons/smile_ic.svg?react";
import HashtagIC from "@/assets/icons/hashtag_ic.svg?react";

export default function ChattingInput() {
  return (
    <Wrapper>
      <ContentContainer>
        <PlusIcon />
        <Input autoFocus />
        <RightWrapper>
          <SmileICon />
          <HashtagICon />
        </RightWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${rowFlex}
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const RightWrapper = styled.div`
  ${rowFlex}
  gap: 16px;
`;

const PlusIcon = Icon(PlusIC);
const SmileICon = Icon(SmileIC);
const HashtagICon = Icon(HashtagIC);

const Input = styled.input`
  ${rowFlex}
  width: 223px;
  height: 32px;
  border: none;
  ${({ theme }) => theme.fonts.medium16};
  color: ${({ theme }) => theme.colors.black};

  &:focus {
    border: none;
    outline: none;
  }
`;
