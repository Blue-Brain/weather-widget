import { HTMLAttributes } from 'react';
import './div.scss';
import classNames from 'classnames';

export type DivProps = HTMLAttributes<HTMLDivElement> & {
  classnames?: string;
  absolute?: boolean;
  align?: 'left' | 'rigth' | 'center',
}

const Div = ({
  classnames = '',
  absolute = false,
  align = 'left',
  children,
  ...restProp
}: DivProps) => {
  const base = 'Div';
  return <div 
    className={classNames(base, classnames)}
    {...restProp}
  >
    {children}
  </div>
}

export default Div;