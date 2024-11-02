import { useRef, useEffect } from 'react';

// Clock : 상단 바 시간

export default function Clock() {
  const timeRef = useRef<any>(null); // 일단 any써뒀는데, 아닌 것 같음

  useEffect(() => {
    const updateClock = () => {
      if (timeRef.current) {
        const hour = new Date().getHours();
        const minute = new Date().getMinutes();

        // 00:00 format
        const formattedTime = `${String(hour).padStart(2, '0')}:${String(
          minute
        ).padStart(2, '0')}`;
        timeRef.current.textContent = formattedTime;
      }
    };

    // 초기에 시계 세팅
    updateClock();

    const id = setInterval(updateClock, 60000); // 1분에 한 번 씩 => 오차 있을 듯

    return () => clearInterval(id);
  }, []);

  return (
    <p
      ref={timeRef}
      className="text-caption flex items-center justify-center text-center font-bold text-nowrap"
    ></p>
  );
}
