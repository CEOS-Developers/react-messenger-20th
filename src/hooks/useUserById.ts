import { useLocalStorage } from '@hooks/useLocalStorage';
import { useMemo } from 'react';
import { UserInterface } from '@interface/UserInterface';
import defaultUserData from '@data/users.json';

const useUserById = (userId: string) => {
  const [members] = useLocalStorage<UserInterface[]>({
    key: 'members',
    initialValue: defaultUserData,
  });

  // Memoize the friend data based on the provided userId
  const friend = useMemo(
    () => members.find((member) => member.id === userId),
    [members, userId]
  );

  return friend;
};

export default useUserById;
