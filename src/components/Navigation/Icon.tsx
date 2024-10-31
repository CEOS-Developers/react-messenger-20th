import React from 'react';
import { ReactComponent as ProfileIconD } from '../../assets/svg/profileD.svg'; // 프로필 아이콘 불러오기
import { ReactComponent as ProfileIconH } from '../../assets/svg/profileH.svg'; // 프로필 아이콘 불러오기
import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg'; // 홈 아이콘 불러오기
import { ReactComponent as LikeIcon } from '../../assets/svg/like.svg'; // 좋아요 아이콘 불러오기
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'; // 검색 아이콘 불러오기
import { ReactComponent as MessageIconD } from '../../assets/svg/messageD.svg'; // 메시지 아이콘 불러오기
import { ReactComponent as MessageIconH } from '../../assets/svg/messageH.svg'; // 메시지 아이콘 불러오기

import { useLocation, useNavigate } from 'react-router-dom';

// 비활성화 아이콘
const icons_D = {
    home: HomeIcon,
    search: SearchIcon,
    like: LikeIcon,
    message: MessageIconD,
    profile: ProfileIconD
  };
  
  // 활성화 아이콘
  const icons_H = {
    home: HomeIcon,
    search: SearchIcon,
    like: LikeIcon,
    message: MessageIconH,
    profile: ProfileIconH
  };
  
  

// 타입 지정
interface IconProps {
    name: 'home' | 'search' | 'like' | 'message' | 'profile'; // 아이콘 이름
    route: string;  // 라우팅 경로
  }

const Icon: React.FC<IconProps> = ({ name, route }) => {
    const navigate = useNavigate();
    const location = useLocation();  // 현재 경로를 가져옴

    const isActive = location.pathname === route;
    const IconComponent = isActive ? icons_H[name] : icons_D[name];


    return (
        <div 
            className='flex w-[75px] h-[50px] p-[8px_24px_14px_23px] justify-center items-center flex-shrink-0 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'
            onClick={() => navigate(route)}  // 클릭 시 라우팅
        >
            <IconComponent/>
        </div>
    );
};

export default Icon;
