import { HTMLAttributes } from 'react';
import './div.scss';
import classNames from 'classnames';

export type DivProps = HTMLAttributes<HTMLDivElement> & {
  classnames?: string;
  absolute?: boolean;
}

const Div = ({
  classnames = '',
  absolute = false,
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