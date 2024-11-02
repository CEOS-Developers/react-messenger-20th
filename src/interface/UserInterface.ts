export interface UserInterface {
  id: string; // 고유ID
  userName: string; // 사용자 이름
  profileImg?: string | undefined; // 프로필 이미지
  isOnline: boolean; // 현재 접속상태인가
  lastMessageTimeStamp?: string;
  lastMessage?: string;
  email?: string;
  phoneNum?: string;
  instagram?: string;
}
