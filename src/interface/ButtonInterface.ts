export interface ButtonProps {
  bgSize?: string;
  fontSize?: string | number;
  children?: any;
  src?: string;
  buttonName?: string;
  link?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: (text: any) => void;
}
