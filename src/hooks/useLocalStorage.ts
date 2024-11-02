import { useState } from 'react';

interface LocalStorageProps<T> {
  key: string;
  initialValue: T | Array<T>; // 바꿔야 됨
}
// useLocalStorage : localStorage 관리하는 커스텀 훅
export function useLocalStorage<T>({
  key,
  initialValue,
}: LocalStorageProps<T>) {
  // localStorage에서 값을 가져오거나 초기 값을 설정
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key); // key에 해당하는 놈들 가져옴
      if (item) {
        // JSON.parse에서 오류가 발생하면 catch로 넘어감
        return JSON.parse(item);
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return initialValue;
    }
  });

  // setValue : localStorage에 값을 설정하는 함수
  // string | Function보다 아래의 방식이 더 낫다.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value; // value가 함수인 경우에 실행해주려구
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore)); // 다시 스토리지에 저장
    } catch (error) {
      console.error('Error setting localStorage', error);
    }
  };

  return [storedValue, setValue] as const;
}
