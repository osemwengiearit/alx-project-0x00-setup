// components/Button.tsx
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`${styles} px-4 py-2 bg-blue-500 text-white`}>
      {title}
    </button>
  );
};

export default Button;
