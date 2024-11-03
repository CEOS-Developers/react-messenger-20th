import React from 'react';

interface ProfileButtonProps {
  toggleUserId: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ toggleUserId }) => {
  return (
    <button
      onClick={toggleUserId}
      className="w-9 h-9 rounded-full flex-shrink-0"  // 크기 고정 및 축소 방지
    >
      {/* 프로필 이미지 */}
      <img
        src={require('../assets/defaultProfileImg.svg').default}
        alt="Profile"
        className='w-9 h-9'  // 크기 고정
      />
    </button>
  );
};

export default ProfileButton;
