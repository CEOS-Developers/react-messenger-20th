import React from 'react';
import TNB from '../../components/Navigation/TNB';
import ListChat from '../../components/List/ListChat';
import useChatStore from '../../zustand/userStore';


export default function ChatList() {
    const { users } = useChatStore();
    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        {/* ChatList TNB */}
        <TNB name='chatlist'/>
        <div className='w-full h-[40px] flex justify-between items-center px-4 py-2'>
            <p className='text-title-2'>Messages</p>
            <p className='text-body-2-b text-gray500'>Requests</p>
        </div>

        {/* ChatList User */}
        <section className='w-full h-[636px] overflow-y-auto scollbar-hide'>
            {users.map((user) => (
                <ListChat key={user.user_id} user={user} />
            ))}
        </section>
      </div>
    );
  }