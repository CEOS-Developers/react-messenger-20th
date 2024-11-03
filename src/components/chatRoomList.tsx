import React from 'react';
import { useNavigate } from 'react-router-dom';
import messagesData from '../data/chatData.json';
import userData from '../data/userData.json';

interface ChatRoomProps {
    userId: number;
}

const ChatRoomList: React.FC<ChatRoomProps> = ({ userId }) => {
    const navigate = useNavigate();

    // 해당 userId에 맞는 채팅방 데이터를 찾기
    const chatRoom = messagesData.messages.filter(message => message.senderId === userId);

    // 가장 최근 메시지 가져오기
    const latestMessage = chatRoom[chatRoom.length - 1]; // 가장 최근 메시지

    // userId에 맞는 사용자 이름 찾기
    const user = userData.find(user => user.id === userId);
    const userName = user ? user.name : `사용자 ${userId}`; // 사용자 이름이 없으면 기본 이름 사용

    // 클릭 시 해당 사용자의 ChatRoom으로 라우팅
    const handleClick = () => {
        navigate(`/chatRoom/${userId}`);
    };

    return (
        <div className="flex items-center px-4 py-3 space-x-4" onClick={handleClick} style={{ cursor: 'pointer' }}>
            {/* 프로필 이미지 */}
            <img 
                src={require('../assets/defaultProfileImg.svg').default} 
                alt="profile"
            />

            {/* 이름과 메시지 */}
            <div className="flex-1">
                <div className="text-gray-700 font-semibold text-base">{userName}</div>
                <div className="text-gray-500 text-xs">{latestMessage ? latestMessage.message : "메시지가 없습니다."}</div>
            </div>

            {/* 날짜 */}
            <div className="text-gray-400 text-sm">
                {latestMessage ? latestMessage.timestamp.split(' ')[0] : "날짜 없음"}
            </div>
        </div>
    );
};

export default ChatRoomList;
