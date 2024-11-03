import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatHeader: React.FC = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/chatListRoom'); // chatListRoom 경로로 이동
    };

    return (
        <div className="h-11 flex justify-between items-center px-5 py-2">
            {/* 왼쪽 뒤로가기 버튼 */}
            <div className="flex items-center" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
                <img src={require('../assets/backArrowImg.svg').default} alt="backArrowImg" className="w-6 h-6" />
            </div>

            {/* 중앙 이름 */}
            <div className="text-base font-semibold">
                김나나
            </div>

            {/* 오른쪽 더보기 버튼 */}
            <div className="flex items-center">
                <img src={require('../assets/morePointImg.svg').default} alt="morePointImg" className="w-6 h-6" />
            </div>
        </div>
    );
};

export default ChatHeader;
