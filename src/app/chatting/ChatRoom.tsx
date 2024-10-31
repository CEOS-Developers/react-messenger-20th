import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import TNB from '../../components/Navigation/TNB';
import TextBubble from '../../components/ChatBar/TextBubble';
import useChatStore from '../../zustand/userStore';
import ChatBar from '../../components/ChatBar/ChatBar';
import { User } from '../../types/types';



const ChatRoom = () => {
    const { username } = useParams(); // URL에서 유저명을 추출
    const [userChange, setUserChange] = useState<boolean>(false);
    const { users, getUserMessages } = useChatStore();


    // 현재 시각
    const formatTime = () => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true // 12시간제로 표시 (AM/PM)
        };
        return date.toLocaleString('en-US', options).toUpperCase(); // 예: "SEP 2 AT 3:26 PM"
      };
      
    let currentUser = users.find(user => user.userName === username);



    // 현재 유저의 메시지를 zustand로부터 가져옴
    const messages = currentUser ? getUserMessages(currentUser.user_id) : [];

    // 유저 변경 시 currentUser 변경
    if (userChange) {
        currentUser = {
            user_id: 5,
            userName: 's.ol_lala',
            displayName: 'minsol',
            profileImage: require('../../assets/Image/profile.jpg'),
            posts: 0,
            followers: 1000,
            following: 1000,
        } as User;
    }
    // 스크롤 자동 하강
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500); // 100ms의 짧은 지연 시간 설정
        
        return () => {
            clearTimeout(timeout); 
        };
        
      }, [messages, userChange]);
    const handleChangeUser = () => {
        setUserChange(!userChange);
    }

    return (
        <div className="w-full h-full flex flex-col">
            {/* ChatRoom TNB 렌더링 속도차이로 인한 조건문 header*/}
            {currentUser && <TNB name="chatroom" user={currentUser} handleChangeUser={handleChangeUser} />}

            {/* middle */}
            <div className={`w-full h-full flex flex-col overflow-y-auto scrollbar-hide !important justify-between`}>
                {/* ChatRoom User Description */}
                <div className={`flex flex-col items-center gap-3 pt-8 px-12`}>
                    <div className='w-[279px] flex flex-col items-center gap-2'>
                        <img src={currentUser?.profileImage} alt="Profile" className="w-[96px] h-[96px] rounded-full cursor-pointer"/>
                        <p className='h-[21px] text-center text-title-2 text-black'>{currentUser?.userName}</p>
                        <span className='w-full text-body-2-m text-gray500 text-center self-stretch'>
                            <p>{currentUser?.displayName}</p>
                            <p>{currentUser?.followers} followers · {currentUser?.posts} posts</p>
                            <p>You don’t follow each other on Instagram</p>
                        </span>
                    </div>
                    <button className='w-[112px] h-[32px] flex justify-center items-center px-4 py-[5px] rounded-lg bg-gray100 text-caption text-gray600 hover:bg-gray200 cursor-pointer'>View Profile</button>
                </div>

                {/* Spacer 요소 */}
                <div style={{ minHeight: '200px' }} />

                {/* ChatRoom Chat */}
                <div className='w-full flex flex-col items-center justify-end  space-y-5'>
                    {/* 채팅 시작 시각 */}
                    <span className='w-[108px] h-[16px] text-center text-body-3 text-gray500'>{formatTime()}</span>
                    {/* 채팅 내용 */}
                    <div className='w-full flex flex-col space-y-3 px-3'>
                        {messages.map((message, index) => (
                            <TextBubble
                                key={message.id}
                                text={message.text}
                                isMine={message.isMine}
                                user={currentUser}
                                index={index}
                                userChange={userChange}
                            />
                            ))}
                    </div>
                    {/* 스크롤 이동을 위한 빈 div */}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            {/* Input Chatting Bar footer*/}
            <div className='py-2'>
                <ChatBar/>
            </div>
        </div>

        
    );
};

export default ChatRoom;
