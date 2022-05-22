import React, { FC, CSSProperties, ReactNode, Children } from 'react';

interface LinkButtonProps {
  imgSrc?: string;
  linkHref: string;
  title: string;
  description?: string;
  className?: string;
}
export const LinkButton: FC<LinkButtonProps> = ({
  imgSrc,
  linkHref,
  title,
  description,
  className
}) => {
  return (
    <a href={linkHref} target='_black' className={`flex flex-col items-center ${className}`}>
      <img src={imgSrc} alt={imgSrc} className='rounded-xl overflow-hidden'/>
      <h3 className='text-center font-bold text-md py-1'>{title}</h3>
      <p className='text-sm text-center opacity-70'>{description}</p>
    </a>
  )
}