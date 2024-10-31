import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './app/profile/Profile';
import FollowList from './app/profile/follower/FollowList';
import ChatList from './app/chatting/ChatList';
import ChatRoom from './app/chatting/ChatRoom';
import Layout from './app/layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
          {/* Layout을 기본적으로 적용할 라우트 그룹 */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/profile" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/followList" element={<FollowList />} />
            <Route path="/chatting/chatList" element={<ChatList />} />
            <Route path="/chatting/chatRoom/:username" element={<ChatRoom />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
