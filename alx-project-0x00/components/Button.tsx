import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, shape }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white ${shape}`}>
      {title}
    </button>
  );
};

export default Button;
