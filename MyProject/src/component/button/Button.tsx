import { ButtonHTMLAttributes } from "react";

interface IProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
}
const Button = (props: IProp) => {
  const { children, className, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
