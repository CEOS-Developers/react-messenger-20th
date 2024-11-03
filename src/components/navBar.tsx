import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
    const [time, setTime] = useState<string>("");

    // 시간 업데이트 함수
    const updateTime = () => {
        const currentTime = new Date();
        let hours = currentTime.getHours(); // H
        const minutes = currentTime.getMinutes().toString().padStart(2, '0'); // 분

        // 12시간 형식으로 변환
        hours = hours % 12;
        hours = hours ? hours : 12; // 0시를 12시로 변환

        const newTime = `${hours.toString().padStart(2, '0')}:${minutes}`;
        setTime(newTime); // 시간 초기화
    };

    // 1분마다 시간 업데이트
    useEffect(() => {
        updateTime(); // 첫 랜더링시 호출
        const intervalId = setInterval(updateTime, 60000); // 1분마다 업데이트

        return () => clearInterval(intervalId);
        // 컴포넌트가 언마운트될 때 인터벌 제거.. 사실 자세히 모르겠음 다시 공부해보자
    }, []);

    return (
        <div className="w-full flex justify-between items-center px-7 py-3">
            {/* 시간 표시 */}
            <div className="text-sm font-semibold px-1 ">
                {time}
            </div>

            {/* 우측 아이콘 표시 */}
            <div className="flex space-x-2">
                <img src={require('../assets/networkImg.svg').default} alt="Network" />
                <img src={require('../assets/wifiImg.svg').default} alt="WiFi" />
                <img src={require('../assets/battery.svg').default} alt="Battery" />
            </div>
        </div>
    );
};

export default NavBar;
