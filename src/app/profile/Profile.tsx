import React, { useState } from 'react';
import TNB from '../../components/Navigation/TNB';
import Description from './Description';
import { ReactComponent as GridIcon } from '../../assets/svg/grid.svg'
import { ReactComponent as TagIcon } from '../../assets/svg/tag.svg'

export default function Profile() {
    const [activeTab, setActiveTab] = useState<number>(1);

    // 탭 변경 함수
    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };
    // 이미지 데이터 예시
    const images = [
        require('../../assets/Image/contents1.jpg'), // 이미지 경로
        require('../../assets/Image/contents2.jpg'),
        require('../../assets/Image/contents3.jpg'),
    ];

    return (
        <div className='w-full h-full flex flex-col'>
            {/* Profile TNB */}
            <TNB name='profile'/>
            
            {/* Profile Description */}
            <Description/>

            {/* Tab */}
            <div className='w-full h-[44px] inline-flex items-center mb-[2px]'>
                <span 
                    onClick={() => handleTabClick(1)}
                    className={`w-[186px] flex justify-center items-center px-0 py-2 cursor-pointer
                    ${activeTab === 1 ? 'text-black border-b-2 border-black' : 'text-gray500'}`}>
                        <GridIcon/>
                </span>
                <span 
                    onClick={() => handleTabClick(2)}
                    className={`w-[186px] flex justify-center items-center px-0 py-2 cursor-pointer
                    ${activeTab === 2 ? 'text-black border-b-2 border-black' : 'text-gray500'}`}>
                        <TagIcon/>
                </span>            
            </div>
            {/* Tab Content */}
            <div className='w-full h-full'>
                {activeTab === 1 ? (
                // Grid 탭이 활성화된 경우 콘텐츠
                <div className="grid grid-cols-3 gap-[1px]">
                    {images.map((image, index) => (
                        <div
                            onClick={() => alert('난 햄찌야...')}
                            key={index} className="w-[124px] h-[124px] cursor-pointer hover:opacity-80 transition-transform duration-200">
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                ) : (
                // Tag 탭이 활성화된 경우 콘텐츠
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    {/* Tag 콘텐츠 */}
                    <TagIcon className='size-[75px] text-gray500'/>
                    <p className='text-gray600 text-title-1'>사진 없음</p>
                </div>
                )}
            </div>

        </div>
  );
}