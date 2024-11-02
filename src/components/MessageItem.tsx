import { MessageInterface } from '@interface/ChatInterface';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

const MessageItem = (
  message: MessageInterface & { onSelectEmoji: (emoji: string) => void }
) => {
  const { message: messageText, emoji, sender } = message; // 구조 분해 할당으로 사용
  const mainUser = useSelector((state: RootState) => state.user.mainUser);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  // 스타일을 동적으로 결정
  const setMessageStyle = () => {
    let styleStr = '';
    if (message.emoji) styleStr += 'mb-4 ';
    if (message.sender === 'me') {
      styleStr +=
        currentUser.id === mainUser.id
          ? 'bg-gray-50 text-gray-900 me-auto'
          : 'bg-primary text-white ms-auto';
    } else {
      styleStr +=
        currentUser.id === mainUser.id
          ? 'bg-primary text-white ms-auto'
          : 'bg-gray-50 text-gray-900 me-auto';
    }
    return styleStr;
  };
  return (
    <div
      className={`relative max-w-72 text-body p-2 rounded-xl w-fit ${setMessageStyle()} 
      }`}
    >
      {messageText}
      {emoji && (
        <div className="absolute z-50 -bottom-3 -left-0">
          <img
            src={emoji}
            alt="emoji"
            className="w-5 h-5"
          />
        </div>
      )}
    </div>
  );
};

export default MessageItem;
