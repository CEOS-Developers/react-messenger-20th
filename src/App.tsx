import Chat from './pages/Chat';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Members from './pages/Members';
import Team from './pages/Team';
import More from './pages/More';
import Notice from '@pages/Notice';
import ChatRoom from '@pages/Chat/ChatRoom';
import MemberProfile from '@pages/Members/MemberProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Members />}
          ></Route>
          <Route
            path="/members"
            element={<Members />}
          ></Route>
          <Route
            path="/members/:userId"
            element={<MemberProfile />}
          ></Route>
          <Route
            path="/notice"
            element={<Notice />}
          ></Route>
          <Route
            path="/chat"
            element={<Chat />}
          ></Route>
          <Route
            path="/chat/:userId"
            element={<ChatRoom />}
          />{' '}
          {/* 각 대화 방 경로 */}
          <Route
            path="/team"
            element={<Team />}
          ></Route>
          <Route
            path="/more"
            element={<More />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
