import MessageItem, { Message } from './MessageItem';

const messageList: Message[] = [
  {
    id: '1',
    sender: 'a',
    content: '이번주 디자인 스터디 과제는 메신저 서비스 리디자인하기입니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '2',
    sender: 'b',
    content: '스터디 장소가 어디인가요?',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '3',
    sender: 'a',
    content: '저번주와 동일합니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '4',
    sender: 'a',
    content: '홍대 필로버스에서 진행됩니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '5',
    sender: 'b',
    content: '감사합니다!',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '6',
    sender: 'b',
    content: '오호...',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '7',
    sender: 'b',
    content: '행복하세요😇',
    sentAt: new Date(2024, 8, 24),
  }, {
    id: '1',
    sender: 'a',
    content: '이번주 디자인 스터디 과제는 메신저 서비스 리디자인하기입니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '2',
    sender: 'b',
    content: '스터디 장소가 어디인가요?',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '3',
    sender: 'a',
    content: '저번주와 동일합니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '4',
    sender: 'a',
    content: '홍대 필로버스에서 진행됩니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '5',
    sender: 'b',
    content: '감사합니다!',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '6',
    sender: 'b',
    content: '오호...',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '7',
    sender: 'b',
    content: '행복하세요😇',
    sentAt: new Date(2024, 8, 24),
  }, {
    id: '1',
    sender: 'a',
    content: '이번주 디자인 스터디 과제는 메신저 서비스 리디자인하기입니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '2',
    sender: 'b',
    content: '스터디 장소가 어디인가요?',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '3',
    sender: 'a',
    content: '저번주와 동일합니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '4',
    sender: 'a',
    content: '홍대 필로버스에서 진행됩니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '5',
    sender: 'b',
    content: '감사합니다!',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '6',
    sender: 'b',
    content: '오호...',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '7',
    sender: 'b',
    content: '행복하세요😇',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '4',
    sender: 'a',
    content: '홍대 필로버스에서 진행됩니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '5',
    sender: 'b',
    content: '감사합니다!',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '6',
    sender: 'b',
    content: '오호...',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '7',
    sender: 'b',
    content: '행복하세요😇',
    sentAt: new Date(2024, 8, 24),
  }, {
    id: '4',
    sender: 'a',
    content: '홍대 필로버스에서 진행됩니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '5',
    sender: 'b',
    content: '감사합니다!',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '6',
    sender: 'b',
    content: '오호...',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '7',
    sender: 'b',
    content: '행복하세요😇',
    sentAt: new Date(2024, 8, 24),
  }, {
    id: '4',
    sender: 'a',
    content: '홍대 필로버스에서 진행됩니다.',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '5',
    sender: 'b',
    content: '감사합니다!',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '6',
    sender: 'b',
    content: '오호...',
    sentAt: new Date(2024, 8, 24),
  },
  {
    id: '7',
    sender: 'b',
    content: '행복하세요😇',
    sentAt: new Date(2024, 8, 24),
  },

];

const userId = 'b';

export default function MessageList() {
  function isFirst(index: number) {
    return index === 0 || messageList[index - 1].sender !== messageList[index].sender;
  }

  function isLast(index: number) {
    return (
      index === messageList.length - 1
      || messageList[index].sender !== messageList[index + 1].sender
    );
  }

  return (
    <ul className="flex-col flex-1 h-full overflow-auto px-[14px] pb-[25px]">
      {messageList.map((message, messageIndex) => (
        <MessageItem
          key={message.id}
          userId={userId}
          message={message}
          isFirst={isFirst(messageIndex)}
          isLast={isLast(messageIndex)}
        />
      ))}
    </ul>
  );
}
