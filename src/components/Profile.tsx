import Button from './Button';
import { UserInterface } from '@interface/UserInterface';

export default function Profile({ profileImg, userName }: UserInterface) {
  return (
    <div className="rounded-full w-8 h-8 bg-pink-light text-pink-dark flex items-center justify-center">
      {profileImg ? (
        <Button
          src={profileImg}
          type="button"
        />
      ) : (
        <Button
          children={userName.charAt(0)}
          type="button"
        />
      )}
    </div>
  );
}
