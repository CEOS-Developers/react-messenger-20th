import StatusBar from '@components/common/StatusBar';
import BottomMenu from '@components/common/BottomMenu';
import Main from '@components/common/MainContent';

export default function More() {
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <Main>notice</Main>
      <BottomMenu />
    </div>
  );
}
