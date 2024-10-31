import React from 'react';
import { ReactComponent as HumanIcon } from '../../assets/svg/human.svg';
import { User } from '../../types/types';

// ListFriend 컴포넌트의 props 타입
interface ListFriendProps {
  user: User;
  onRemove: (username: string) => void; // 사용자 제거 버튼 클릭 시 실행되는 함수
}

const ListFriend: React.FC<ListFriendProps> = ({ user, onRemove }) => {
    return (
        <div className="w-full flex items-center justify-between px-5 py-2 hover:bg-gray100 cursor-pointer">
        {/* 프로필 이미지 및 정보 */}
        <div className="flex items-center space-x-4">
            {/* 프로필 이미지 */}
            <div className="w-[56px] h-[56px] flex justify-center items-center rounded-full overflow-hidden bg-gray400 flex-shrink-0">
                {user.profileImage ? (
                    <img
                    src={user.profileImage}
                    alt={user.displayName}
                    className="w-full h-full object-cover"
                    />
                ) : (
                    <HumanIcon/>
                )}
            </div>
            {/* 사용자 정보 */}
            <div className='flex flex-col items-start gap-[-2px]'>
                <span className="text-body-2-b text-black">{user.userName}</span>
                <span className="text-body-2-m text-gray500">{user.displayName}</span>
            </div>
        </div>
        {/* Remove 버튼 */}
        <button
            onClick={() => onRemove(user.userName)}
            className="w-[84px] h-[32px] flex justify-center items-center gap-[10px] py-[15px] px-[5px] bg-gray100 text-black text-body-2-b rounded-lg"
        >
            Remove
        </button>
        </div>
    );
};

export default ListFriend;
