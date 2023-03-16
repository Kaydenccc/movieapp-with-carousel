import React from 'react';

interface buttonProps {
  text: string;
  auto?: boolean;
}

const Button = ({ auto, text }: buttonProps) => {
  return <button className={`bg-[#EA1B61] py-[10px] ${auto ? 'w-full' : 'w-[200px]'}`}>{text}</button>;
};

export default Button;
