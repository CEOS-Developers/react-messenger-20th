import React, { useEffect, useRef, useState } from "react";
import { User } from "../../types/types";

interface TextBubbleProps {
    text: string;
    isMine: boolean;
    user?: User;
    index: number;
    userChange: boolean
}

export default function TextBubble({ text, isMine, user, index, userChange } : TextBubbleProps) {
    const [isOverflow, setIsOverflow] = useState(false);
    const textRef = useRef<HTMLSpanElement>(null);
    const isActualMine = userChange ? !isMine : isMine;
    useEffect(() => {
        // 텍스트 요소가 렌더링된 후, 너비를 확인
        if (textRef.current) {
        const textWidth = textRef.current.offsetWidth;
        setIsOverflow(textWidth > 280); // 텍스트 너비가 280px을 넘으면 줄바꿈 설정
        }
    }, [text, userChange]);
    return (
        <div className={`flex transition transform duration-500 ease-in-out animate-fade-in ${isActualMine ? "justify-end" : "justify-start"}`}>
            {isActualMine ? (
                // 내가 보낸 메세지
                <div className={`max-w-[280px] min-h-[40px] inline-flex justify-center items-center px-3 py-2 bg-main text-white text-body-1-b rounded-3xl`}>
                    <span className={`${isOverflow ? "break-words" : ""}`}>
                        {text}
                    </span>
                </div>
            ) : (
                // User가 보낸 메세지
                <div className={`max-w-[280px] min-h-[40px] inline-flex justify-center gap-3   `}>
                    <span className="flex items-end">
                        <img
                            src={user?.profileImage}
                            alt={user?.userName}
                            className="w-7 h-7 rounded-full object-cover"
                        />
                    </span>
                    <span className={`max-w-[240px] px-3 py-2 bg-gray100 text-gray600 text-body-1-b rounded-3xl ${isOverflow ? "break-words" : ""}`}>
                        {text}
                    </span>
                </div>
            )}
        </div>
    );
}