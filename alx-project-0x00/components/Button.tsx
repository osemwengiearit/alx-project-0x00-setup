import { ButtonProps } from '@/interfaces'; // already done ✅

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button className={`bg-blue-500 text-white px-4 py-2 ${className}`}>
      {title}
    </button>
  );
};

export default Button;
