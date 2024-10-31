// // types.ts
export interface Message {
  id: number;
  text: string;
  isMine: boolean;
}

export interface User {
  user_id: number;
  userName: string;
  displayName?: string;
  profileImage?: string;
  messages?: Message[];
  posts?: number;
  followers?: number;
  following?: number;
  
  // 새롭게 추가되는 필드들
  lastMessage?: string;
  updatedAt?: string;
  isActivated?: boolean;
}
