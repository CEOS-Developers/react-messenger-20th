import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatInterface } from 'interface/ChatInterface';

// 임시 데이터
import defaultMessages from '../data/messages_1.json';

// 우선은 임시 데이터 활용 -> 이후, localStorage에서 가져온 데이터
const initialState: ChatInterface = defaultMessages;

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setEmoji: (
      state,
      action: PayloadAction<{ id: string; emoji: string }>
    ) => {},
  },
});

export const { setEmoji } = messageSlice.actions;
export default messageSlice.reducer;
