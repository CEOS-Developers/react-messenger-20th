// OtherMessageBox 컴포넌트에 전달되는 props 타입 정의
type OtherMessageBoxProps = {
  message: string;
  timestamp: string;
};

// OtherMessageBox 컴포넌트: 상대방이 보낸 메시지 표시
const OtherMessageBox: React.FC<OtherMessageBoxProps> = ({ message, timestamp }) => {
    return (
      <div className="flex items-start mb-2 space-x-2">

        {/* 메시지 박스 */}
        <div className="max-w-[224px] bg-gray-50 py-2 px-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-left border border-gray-200 break-words">
          <p className="text-sm font-semibold font-appleSD">
            {message}
          </p>
        </div>

        {/* 시간 표시 */}
        <span className="whitespace-nowrap text-xs text-gray-400 self-end">
          {timestamp}
        </span>
      </div>
    );
};

export default OtherMessageBox;
