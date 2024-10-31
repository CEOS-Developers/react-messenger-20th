import React from "react";
import profileImage from '../../assets/Image/profile.jpg'
import { ReactComponent as LinkIcon } from '../../assets/svg/link.svg'
import { useNavigate } from "react-router-dom";

export default function Description() {
    const navigate = useNavigate();

    return (
        <div className='w-full h-[243px] flex flex-col items-center'>
            <header className='w-full h-[110px] flex items-center gap-[21px] pl-3 pr-[26px] py-4'>
                <img src={profileImage} alt='profile' className='w-[88px] h-[88px] rounded-full cursor-pointer'/>
                <div className='w-[228px] h-[40px] inline-flex gap-8'>
                    <span className='text-center cursor-pointer'>
                        <p className='text-title-2'>3</p>
                        <p className='text-body-2-m'>posts</p>
                    </span>
                    <span onClick={()=>navigate("/profile/followList")} className='text-center cursor-pointer'>
                        <p className='text-title-2'>1000</p>
                        <p className='text-body-2-m'>followers</p>
                    </span>
                    <span onClick={()=>navigate("/profile/followList")} className='text-center cursor-pointer'>
                        <p className='text-title-2'>1000</p>
                        <p className='text-body-2-m'>following</p>
                    </span>
                </div>
            </header>
            <section className='w-full h-[143px] flex flex-col gap-2 items-start  px-4 py-3'>
                <div>
                    <p className='h-[19px] text-body-2-b self-stretch'>민솔</p>
                    <p className='h-[19px] text-body-2-m self-stretch'>반갑습니다</p>
                </div>
                <div className='flex gap-2 items-center h-[18px] text-caption text-main'>
                    <LinkIcon className='fill-current text-main'/>
                    <a href="https://www.instagram.com/confiwns_/">https://www.instagram.com/confiwns_/</a>
                </div>
            </section>
            <footer className='px-4'>
                <button className='w-full h-[37px] inline-flex justify-center items-center gap-[10px] px-[135px] py-2 rounded-lg bg-gray100 text-gray600 text-center text-caption hover:bg-gray200'>Edit Profile</button>
            </footer>
        </div>
  );
}