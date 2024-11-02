import { useEffect, useRef, useState } from 'react';
import MessageItem from '@components/MessageItem';
import { ChatInterface } from '@interface/ChatInterface';
import Button from '@components/Button';

import angryEmotion from '@assets/emotion/angry.png';
import awesomeEmotion from '@assets/emotion/awesome.png';
import heartEmotion from '@assets/emotion/heart.png';
import smileEmotion from '@assets/emotion/smile.png';
import surpriseEmotion from '@assets/emotion/surprise.png';
import useChatMessages from '@hooks/useChatMessages';

// 메시지 날짜 변경 시 표기될 날짜 정보
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};

export default function ChatMain(data: ChatInterface) {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(
    null
  );

  const { updateMessageInStorage } = useChatMessages();

  const friendId = data.id;
  const [messages, setMessages] = useState(data.messages);

  // 이모지반영되면 리렌더링
  useEffect(() => {
    setMessages(data.messages);
  }, [data.messages]);

  // 자동 스크롤
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleDoubleClick = (messageId: string) => {
    setSelectedMessageId(messageId);
  };

  // 이모지 선택 핸들러
  const handleEmojiSelect = (emoji: string, messageId: string) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === messageId ? { ...msg, emoji } : msg
    );
    setMessages(updatedMessages);
    updateMessageInStorage(friendId, updatedMessages);
    setSelectedMessageId(null);
  };

  let lastDate = '';

  return (
    <div
      ref={chatContainerRef}
      className="flex-1 overflow-auto m-5 my-0 flex flex-col gap-1 scrollbar-thin scrollbar-rounded"
    >
      {messages.map((message, idx) => {
        const messageDate = formatDate(message.date);
        const showDate = lastDate !== messageDate;
        lastDate = messageDate;

        return (
          <>
            {showDate && (
              <div className="flex items-center my-2">
                <div className="flex-grow border-t border-gray-500 "></div>
                <div className="text-caption text-gray-500 px-4 whitespace-nowrap">
                  {messageDate}
                </div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            )}
            <div
              key={idx}
              className="relative"
            >
              <div onDoubleClick={() => handleDoubleClick(message.id)}>
                <MessageItem
                  {...message}
                  onSelectEmoji={(emoji) =>
                    handleEmojiSelect(emoji, message.id)
                  }
                />
              </div>

              {selectedMessageId === message.id && (
                <div className="absolute z-50 -top-10 left-1/2 w-80 transform -translate-x-1/2 bg-white border rounded-lg shadow-lg p-2 flex space-x-2">
                  <Button
                    src={smileEmotion}
                    type="button"
                    onClick={() => handleEmojiSelect(smileEmotion, message.id)}
                  />
                  <Button
                    src={heartEmotion}
                    type="button"
                    onClick={() => handleEmojiSelect(heartEmotion, message.id)}
                  />
                  <Button
                    src={awesomeEmotion}
                    type="button"
                    onClick={() =>
                      handleEmojiSelect(awesomeEmotion, message.id)
                    }
                  />
                  <Button
                    src={surpriseEmotion}
                    type="button"
                    onClick={() =>
                      handleEmojiSelect(surpriseEmotion, message.id)
                    }
                  />
                  <Button
                    src={angryEmotion}
                    type="button"
                    onClick={() => handleEmojiSelect(angryEmotion, message.id)}
                  />
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}
