import { useLocalStorage } from '../../hooks/useLocalStorage';
import defaultMessages from '../../data/messages.json';
import StatusBar from '@components/common/StatusBar';
import BottomMenu from '@components/common/BottomMenu';
import Main from '@components/common/MainContent';

export default function Notice() {
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <Main>notice</Main>
      <BottomMenu />
    </div>
  );
}
