import React from 'react';
import { ReactComponent as HumanIcon } from '../../assets/svg/human.svg';
import { ReactComponent as CameraIcon } from '../../assets/svg/camera.svg';

import { User } from '../../types/types';
import { useNavigate } from 'react-router-dom';



interface ListChatProps {
  user: User;
}

const ListChat: React.FC<ListChatProps> = ({ user }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={()=>navigate(`/chatting/chatRoom/${user.userName}`)}
            className=" w-full h-[72px] flex items-center justify-between px-4 py-2 hover:bg-gray100 cursor-pointer">
            {/* 프로필 이미지 및 정보 */}
            <div className="flex items-center gap-3">
                {/* 프로필 이미지 */}
                <div className="flex justify-center items-center w-[56px] h-[56px] rounded-full overflow-hidden bg-gray300 flex-shrink-0">
                    {user.profileImage ? (
                        <img
                        src={user.profileImage}
                        alt={user.userName}
                        className="w-full h-full object-cover"
                        />
                    ) : (
                        <HumanIcon className="w-[28px] h-[28px] text-gray-500" />
                    )}
            </div>

            {/* 사용자 정보 */}
            <div className='flex flex-col'>
                <p className="text-body-2-b">{user.userName}</p>
                <div className='flex items-center gap-3'>
                    <p 
                        className={`max-w-[157px] text-body-2-b truncate
                        ${user.isActivated ? 'text-gray600' : 'text-gray500'}`}
                    >{user.lastMessage ? user.lastMessage : 'No messages yet'}</p>
                    
                    <span className="text-body-2-m text-gray500">{user.updatedAt}</span>
                </div>
                
            </div>
        </div>

            {/* 메시지 상태 및 카메라 아이콘 */}
            <div className="flex justify-center items-center">
                {user.isActivated && <span className="w-2 h-2 bg-main rounded-full"></span>}
                <CameraIcon className='ml-3'/>
            </div>
        </div>
    );
};

export default ListChat;
