import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatRoom from '../src/pages/chatRoom';
import ChatListRoom from './pages/chatListRoom';
import FriendListRoom from './pages/friendListRoom';

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로: FriendListRoom => 친구 목록 */}
        <Route path="/" element={<FriendListRoom />} />
        <Route path="/chatRoom/:userId" element={<ChatRoom />} />
        <Route path="/chatListRoom" element={<ChatListRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
