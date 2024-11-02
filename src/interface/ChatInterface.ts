export type SenderType = 'you' | 'me' | string;
export interface MessageInterface {
  id: string;
  sender: SenderType;
  message: string;
  timeStamp: string;
  date: string;
  emoji?: string | undefined; // 이모지 정보
}

// TODO : 이걸 ChatData랑 User인터페이스로 나눠서 사용
export interface ChatInterface {
  id: string; // 고유ID
  messages: MessageInterface[];
}

export interface ChatData {
  [userId: string]: MessageInterface[];
}

// ChatFormProps : localStorage내부 배열에 채팅메시지 추가
export interface ChatFormInterface {
  addMessage: (text: string) => void;
}
