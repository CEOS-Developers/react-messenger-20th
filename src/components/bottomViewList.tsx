import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomViewList: React.FC = () => {
    const location = useLocation();
    const [selectedIcon, setSelectedIcon] = useState(location.pathname);
    // useLocation으로 초기 경로 가져와 현재 선택된 아이콘 저장

    const handleTabClick = (icon: string) => {
        setSelectedIcon(icon);
    };

    return (
        <div className="w-full h-20 flex justify-center items-center space-x-7 pb-6">
            <Link to="/" onClick={() => handleTabClick('/')}>
                <img
                    src={
                        selectedIcon === '/'
                            ? require('../assets/friendIcon_on.svg').default
                            : require('../assets/friendIcon.svg').default
                    }
                    alt="Friend"
                />
            </Link>
            <Link to="/chatListRoom" onClick={() => handleTabClick('/chatListRoom')}>
                <img
                    src={
                        selectedIcon === '/chatListRoom'
                            ? require('../assets/chatIcon_on.svg').default
                            : require('../assets/chatIcon.svg').default
                    }
                    alt="ChatRoom"
                />
            </Link>
            <img src={require('../assets/openChatIcon.svg').default} alt="OpenChat" />
            <img src={require('../assets/etcIcon.svg').default} alt="Etc" />
        </div>
    );
};

export default BottomViewList;
