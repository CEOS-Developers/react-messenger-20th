import { useState } from 'react';
import {ReactComponent as EmojiIcon} from '../../assets/svg/emoji.svg';
import {ReactComponent as MicIcon} from '../../assets/svg/mic.svg';
import { Globe } from 'lucide-react';

const englishKeys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
  ['123', 'space', 'return'],
];
const koreanKeys = [
  ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'],
  ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
  ['shift', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', 'backspace'],
  ['123', '스페이스', '리턴'],
];
interface KeyBoardProps {
  onKeyPress: (key: string) => void;
}

const KeyBoard = ( {onKeyPress} : KeyBoardProps) => {

  const [isKorean, setIsKorean] = useState(false);
  const toggleLanguage = () => {
    setIsKorean((prev) => !prev);
  };
  const keys = isKorean ? koreanKeys : englishKeys;


  return (
    <div className="w-[375px] h-[291px] flex flex-col gap-[6px] bg-gray400 px-[5px] py-[10px] ">
        {/* Render keys */}
        <div className="grid gap-2">
            {keys.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-[6px]">
                {row.map((key) => (
                <button
                    key={key}
                    onClick={() => onKeyPress(key)}
                    className={`w-[31px] h-[42px] py-[7px] bg-white rounded-md shadow-gray-300 text-keyboard hover:bg-gray100
                        ${key === 'space' ? '!w-[179px] h-[42px]' : ''}
                        ${key === '스페이스' ? '!w-[179px] h-[42px]' : ''}
                        ${key === 'shift' ? '!w-[42px] h-[42px] !bg-gray500 text-black' : ''}
                        ${key === 'backspace' ? 'w-[42px] h-[42px] !bg-gray500 text-black' : ''}
                        ${key === 'return' ? 'w-[87px] h-[42px] !bg-gray500 text-black text-keyboard-2' : ''}
                        ${key === '리턴' ? 'w-[87px] h-[42px] !bg-gray500 text-black text-keyboard-2' : ''}

                        ${key === '123' ? 'w-[87px] h-[42px] !bg-gray500 text-black text-keyboard-2' : ''}
                        `}
                >
                    {key === 'shift' ? '⇧' : key === 'backspace' ? '⌫' : key}
                </button>
                ))}
            </div>
            ))}
        </div>
        <div className='w-full px-6 py-6 flex justify-between items-center'>
            <EmojiIcon/>
            <Globe
              onClick={toggleLanguage}
              className='cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out'
              size={28} strokeWidth={1}/>
            <MicIcon/>
        </div>
    </div>
  );
};

export default KeyBoard;
