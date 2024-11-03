import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import BottomViewList from '../components/bottomViewList';
import userData from '../data/userData.json'; // 사용자 데이터 JSON 파일

const FriendListRoom: React.FC = () => {
    // 사용자 ID 상태 (기본값: 1)
    const [userId] = useState<number>(1);
    
    // 사용자 프로필 상태
    const [userProfile, setUserProfile] = useState<{ id: number, name: string } | null>(null);
    
    // 생일인 친구 목록 상태
    const [birthdayFriends, setBirthdayFriends] = useState<{ id: number, name: string }[]>([]);
    
    // 친구 목록 상태
    const [friends, setFriends] = useState<{ id: number, name: string }[]>([]);

    // 컴포넌트가 처음 렌더링될 때 사용자 데이터를 불러오는 useEffect
    useEffect(() => {
        // 사용자 데이터에서 현재 사용자 ID에 해당하는 프로필 찾기
        const profile = userData.find(user => user.id === userId);
        if (profile) {
            setUserProfile(profile); // 프로필 상태 업데이트
        }

        // 오늘 날짜 가져오기
        const today = new Date();
        const todayString = `${today.getMonth() + 1}-${today.getDate()}`; // MM-DD 형식으로 변환

        // 생일인 친구 목록과 친구 목록 설정
        const birthdayFriendsList = userData.filter(friend => {
            const friendBirthday = new Date(friend.birthday);
            const friendBirthdayString = `${friendBirthday.getMonth() + 1}-${friendBirthday.getDate()}`;
            return friendBirthdayString === todayString; // 생일이 오늘인 친구 필터링
        });

        const friendsList = userData.filter(friend => friend.id !== userId); // 현재 사용자를 제외한 친구 목록

        setBirthdayFriends(birthdayFriendsList); // 생일인 친구 목록 상태 업데이트
        setFriends(friendsList); // 친구 목록 상태 업데이트
    }, [userId]); // userId가 변경될 때마다 다시 실행

    return (
        <div className="w-full h-full flex flex-col">
            <NavBar />
            <div className="flex-1 px-5">
                <div className="flex items-center justify-center space-x-44 my-1 h-12">
                    <p className="text-xl font-semibold text-gray-700">친구</p>
                    <div className="flex space-x-4">
                        <img src={require('../assets/searchIcon.svg').default} alt="Search" />
                        <img src={require('../assets/addFriendIcon.svg').default} alt="Add Friend" />
                        <img src={require('../assets/settingIcon.svg').default} alt="Settings" />
                    </div>
                </div>

                {/* 본인 프로필 */}
                {userProfile && ( // 사용자 프로필이 있을 경우에만 렌더링
                    <div className="flex items-center py-4 border-b border-gray-100">
                        <img src={require('../assets/myProfileImg.svg').default} alt="My Profile" className="w-10 h-10" />
                        <span className="ml-4 font-semibold text-base text-gray-700">{userProfile.name}</span>
                    </div>
                )}

                {/* 생일인 친구 */}
                {birthdayFriends.length > 0 && ( // 생일인 친구가 있을 경우에만 렌더링
                    <div className="mt-3 border-b border-gray-100 pb-2">
                        <div className="text-gray-500 mb-1 text-xs">생일인 친구</div>
                        {birthdayFriends.map(friend => (
                            <div key={friend.id} className="flex items-center justify-between py-2">
                                <div className="flex items-center">
                                    <img src={require('../assets/defaultProfileImg.svg').default} alt="Friend" className="w-8 h-8" />
                                    <p className="ml-4 text-gray-700 text-base font-semibold">{friend.name}</p>
                                </div>
                                <img src={require('../assets/giftIcon.svg').default} alt="Gift" />
                            </div>
                        ))}
                    </div>
                )}

                {/* 친구 목록 */}
                <div className="mt-2">
                    <div className="text-gray-500 mb-2 text-xs">친구 {friends.length}</div>
                    {friends.map(friend => (
                        <div key={friend.id} className="flex items-center py-2">
                            <img src={require('../assets/defaultProfileImg.svg').default} alt="Friend" className="w-8 h-8" />
                            <p className="ml-4 text-gray-700 text-base font-semibold">{friend.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <BottomViewList />
        </div>
    );
};

export default FriendListRoom;
