// DateDivider 컴포넌트에 전달되는 props 타입 정의
type DateDividerProps = {
  date: string;  // date prop을 문자열로 받을 수 있도록 설정
};

// 요일을 구하는 함수
const getDayOfWeek = (dateString: string): string => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const date = new Date(dateString);  // dateString을 Date 객체로 변환
  const dayOfWeek = date.getDay();  // 요일을 숫자로 가져옴 (0: 일요일, 1: 월요일, ... 6: 토요일)
  return daysOfWeek[dayOfWeek];  // 숫자에 해당하는 요일 반환
};

// DateDivider 컴포넌트: 날짜 구분자를 표시
const DateDivider: React.FC<DateDividerProps> = ({ date }) => {
  const dayOfWeek = getDayOfWeek(date);  // 요일 계산

  return (
    <div className="flex items-center justify-center w-full my-4">
      {/* 왼쪽 선 */}
      <div className="flex-grow border-t border-gray-200"></div>

      {/* 날짜와 요일 텍스트 */}
      <span className="px-2 text-gray-400 text-xs">
        {date} {dayOfWeek}요일
      </span>

      {/* 오른쪽 선 */}
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  );
};

export default DateDivider;
