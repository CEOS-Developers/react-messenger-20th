import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/navBar';
import DateDivider from '../components/dateDivider';
import MyMessageBox from '../components/myMessageBox';
import OtherMessageBox from '../components/otherMessageBox';
import PlusButton from '../components/plusButton';
import ChatHeader from '../components/chatHeader';
import messagesData from '../data/chatData.json';
import ProfileButton from '../components/profileButton';

// Message 타입 정의 : 타입 스크립트 쓰니까 편하네요!!!
type Message = {
    messageId: number;
    // 메세지 아이디를 따로 저장해두면 좋을 것 같아서 일단 넣어줬습니다! 습관 비스무리한..
    senderId: number;
    // 사용자 전환 시 메세지 디자인도 변경도 변경됩니다. 이를 위해 senderId를 넣어줬습니다!
    message: string;
    // 메세지 내용은 string으로 저장했습니다!
    timestamp: string;
    // 일단 시간을 데이터로 저장하기 위해 string으로 저장했습니다!
};

const ChatRoom: React.FC = () => {
    // 현재 사용자 ID 상태 (기본값: 1)
    const [userId, setUserId] = useState<number>(1);

    // 메시지 데이터 상태 (초기값: 빈 배열)
    const [messages, setMessages] = useState<Message[]>([]);

    // 컴포넌트 첫 랜더링시 JSON 데이터를 상태에 설정함
    useEffect(() => {
        const storedMessages = localStorage.getItem('ChatData');
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        } else {
            setMessages(messagesData.messages); // JSON에서 초기 데이터 설정
        }
    }, []);

    // 버튼 클릭 시 사용자 ID 변경
    const toggleUserId = () => {
        setUserId(userId === 1 ? 2 : 1);
    };

    // 입력된 메시지 상태 (메시지 입력값 저장)
    const [inputMessage, setInputMessage] = useState<string>("");

    // 메시지 입력 시 마다 호출됨 (input 값 변화 추적)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.target.value);
        // 인풋의 value를 그대로 추적해서 inputMessage 상태에 담습니다!
    };

    // 스크롤을 적용을 위한 useRef. DOM 조작에는 Ref가 제일 효율적이라고 하네요!
    const messageScrollRef = useRef<HTMLDivElement>(null);

    // 메시지 전송 시 스크롤 하단 이동
    const scrollToBottom = () => {
        messageScrollRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // 메시지 추가 시 (전송 시) 스크롤 하단 이동 함수 실행
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // 로컬 스토리지에 메세지 업로드
    const updateLocalStorage = (newMessages: Message[]) => {
        localStorage.setItem('ChatData', JSON.stringify(newMessages));
    };

    // Enter 키 입력 시 메시지를 상태에 추가함 (사실 전송의 기능을 수행합니다!)
    const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputMessage.trim()) {
            // 현재 시간을 타임스탬프로 저장
            const now = new Date();
            const newTimestamp = `${formatDate(now)}`;  // 날짜와 시간 저장

            // 입력된 메세지 기반으로 새 메세지를 생성합니다!
            const newMessage: Message = {
                messageId: messages.length + 1,  // 메시지 ID는 기존 메시지 수에 +1
                senderId: userId,  // 현재 사용자 ID를 저장함
                message: inputMessage,  // 입력된 메시지 내용 저장
                timestamp: newTimestamp,  // 현재 시간
            };

            // 기존 메시지에 새 메시지 추가
            const updatedMessages = [...messages, newMessage];
            setMessages(updatedMessages);

            // 메세지 업로드 -> 잘 동작을 안함.. 해결하기ㅠㅠ
            updateLocalStorage(updatedMessages);

            // 입력창 초기화.. 까먹을뻔
            setInputMessage("");
        }
    };

    // 이전 메시지의 날짜를 추적할 변수 (컴포넌트 외부에서 관리)
    let previousDate = "";

    // 날짜를 yyyy.MM.dd 형식으로 변환하는 함수
    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');  // 2자리 월
        const day = date.getDate().toString().padStart(2, '0');  // 2자리 일
        return `${year}.${month}.${day}`;
    };

    return (
        <div className="w-full h-full flex flex-col">
            <NavBar />
            <ChatHeader />

            {/* 채팅 메세지 메인 Body */ }
            <div className="flex-grow bg-aliceblue px-5 overflow-y-auto space-y-3" style={{ maxHeight: 'calc(100vh - 160px)' }}>
            {/* 메시지 리스트 순회하면서 각각 렌더링 */}
            {messages.map((message) => {
                const currentDate = message.timestamp.split(' ')[0];  // 날짜 부분만 추출
                const showDateDivider = currentDate !== previousDate;  // 날짜가 다르면 DateDivider 렌더링
                previousDate = currentDate;  // 이전 날짜 업데이트

                return (
                    <div key={message.messageId}>
                        {/* 날짜 구분자 (현재 날짜와 이전 메시지 날짜가 다를 때만 렌더링) */}
                        {showDateDivider && <DateDivider date={currentDate} />}

                        {/* senderId와 userId 동일 여부에 따라 메시지 박스를 렌더링 */}
                        {message.senderId === userId ? (
                            <MyMessageBox message={message.message} timestamp={message.timestamp.split(' ')[1]} />
                        ) : (
                            <div className="flex items-start space-x-3">  {/* 좌측에 프로필, 우측에 메시지 박스 배치 */}
                                {/* 상대방 메시지일 때 좌측에 프로필 렌더링 */}
                                <ProfileButton toggleUserId={toggleUserId} />

                                {/* 메시지 박스 */}
                                <OtherMessageBox message={message.message} timestamp={message.timestamp.split(' ')[1]} />
                            </div>
                        )}
                    </div>
                );

            })}
            {/* 스크롤 하단 이동을 위한 빈 태그 '타겟 요소'. */}
            <div ref={messageScrollRef} />
            </div>
        
            {/* 하단 입력 영역, 그림자가 안나타남 */}
            <div className="z-10 flex items-center px-5 py-4 space-x-2 shadow-md bg-white">

                {/* 좌측의 추가 버튼 */}
                <PlusButton />

                {/* 메시지 입력 영역 (Enter 키 입력 시 메시지 등록) */}
                <input
                    type="text"
                    placeholder="메시지를 입력하세요"
                    value={inputMessage}
                    onChange={handleInputChange}  // onChange로 입력값 변경 추적
                    onKeyDown={sendMessage}  // onKeyPress가 사용이 안된다네요? 왜지
                    className="flex w-full px-4 h-8 rounded-3xl bg-gray-100 placeholder-gray-400 placeholder:text-xs"
                    // placeholder 사이즈 조정이 안됨 ㅠㅠ    
                />
            </div>
        </div>
    );
};

export default ChatRoom;
