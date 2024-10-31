import React, { useState } from 'react';
import TNB from '../../../components/Navigation/TNB';
import ListFriend from '../../../components/List/ListFriend';
import { User } from '../../../types/types';

const users: User[] = [
  {
    user_id: 1,
    userName: 'ceos.sinchon',
    displayName: 'CEOS',
    profileImage: require('../../../assets/Image/CEOS56.jpg'), // 실제 이미지 경로로 변경하세요
  },
  {
    user_id: 2,
    userName: 'confiwns_',
    displayName: '윤영준',
    profileImage: require('../../../assets/Image/confiwns_.jpg'),
  },
  {
    user_id: 3,
    userName: 'Jippgago_sipdda',
    displayName: 'Instagram User',
  },
  {
    user_id: 4,
    userName: 'Jippgago_sipdda',
    displayName: 'Instagram User',
  },
  {
    user_id: 5,
    userName: 'Jippgago_sipdda',
    displayName: 'Instagram User',
  },
  {
    user_id: 6,
    userName: 'Jippgago_sipdda',
    displayName: 'Instagram User',
  },
  
];

export default function FollowList() {
  const [activeTab, setActiveTab] = useState<number>(1);
  
  const tabs = [
    { id: 1, label: '1000 Followers', contentTitle: 'All followers', users: users },
    { id: 2, label: '1000 Following', contentTitle: 'Following', text: 'Following', count: 1000 },
    { id: 3, label: 'Subscriptions', contentTitle: 'Subscriptions', text: 'Subscriptions', count: 1000 },
  ];
  // 탭 변경 함수
  const handleTabClick = (tabIndex: number) => {
      setActiveTab(tabIndex);
  };
  const handleRemove = (username: string) => {
    console.log(`${username} removed`);
  };
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      {/* Follow TNB */}
      <TNB name='friend'/>
      
      {/* Tab */}
      <div className='w-full h-[38px] inline-flex items-center'>
        {tabs.map(tab => (
          <p 
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`w-[125px] text-center text-body-2-b cursor-pointer
            ${activeTab === tab.id ? 'text-black border-b-2 border-black' : 'text-gray500'}`}
          >
            {tab.label}
          </p>
        ))}
      </div>

      {/* Tab Content */}
      <div className='w-full h-full'>
        {activeTab === 1 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className='w-full h-[40px] items-center px-4 py-2 self-stretch text-title-2'>{tabs[0].contentTitle}</span>
            <section className='w-full h-[602px] overflow-y-auto scrollbar-hide'>
              {users.map((user, index) => (
                <ListFriend key={index} user={user} onRemove={handleRemove} />
              ))}
            </section>
          </div>
        )}
        {activeTab === 2 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <p className='text-body-2-m text-gray500'>{tabs[1].text}</p>
            <p className='text-body-2-m text-gray500'>{tabs[1].count}명</p>
          </div>
        )}
        {activeTab === 3 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <p className='text-body-2-m text-gray500'>{tabs[2].text}</p>
            <p className='text-body-2-m text-gray500'>{tabs[2].count}명</p>
          </div>
        )}
      </div>
    </div>
  );
}