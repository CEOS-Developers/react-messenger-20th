import type { RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';

import prevButton from '@assets/prevButton.png';
import Profile from '@components/Profile';
import { Link, useParams } from 'react-router-dom';
import { UserInterface } from '@interface/UserInterface';
import { toggleUser } from '@redux/userSlice';
import { useEffect, useState } from 'react';
interface ChatHeaderProps {
  friend: UserInterface;
  lastMessageTimeStamp: string;
  onProfileClick: () => void;
}
// ChatHeader : 현재 누구와 대화하고 있는 지 확인할 수 있음

export default function ChatHeader({
  friend,
  lastMessageTimeStamp,
  onProfileClick,
}: ChatHeaderProps) {
  const [user, setUser] = useState(friend);
  const dispatch = useDispatch();
  const currUser = useSelector((state: RootState) => state.user.currentUser);
  const mainUser = useSelector((state: RootState) => state.user.mainUser);
  const handleProfileToMain = () => {
    dispatch(toggleUser(mainUser));
  };

  const handleProfile = () => {
    setUser(currUser);
    onProfileClick();
  };
  return (
    <div className="flex items-center py-2.5 px-5 bg-border-l-indigo-500 border-b-[1px] border-solid border-gray-70 ">
      <Link to={'/chat'}>
        <img
          onClick={handleProfileToMain}
          className="w-2 h-4 me-5"
          alt="prev"
          src={prevButton}
        />
      </Link>
      <div onClick={handleProfile}>
        <Profile {...user} />
      </div>
      <div className="mx-2.5 flex flex-col ">
        <p>{user.userName}</p>
        <p className="text-gray-500 text-caption">
          마지막 접속 {lastMessageTimeStamp}
        </p>
      </div>
    </div>
  );
}
