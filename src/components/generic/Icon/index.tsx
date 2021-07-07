import { HTMLAttributes, ComponentType, SVGProps } from 'react';
import classNames from 'classnames';
import './icon.scss';

export type SVGType = ComponentType<SVGProps<SVGSVGElement>>

type IconProps = HTMLAttributes<SVGSVGElement> & {
  svg: SVGType;
  size?: 's' | 'm' | 'l' | number;
  noFill?: boolean;
  noStroke?: boolean;
  isRect?: boolean;
}


const Icon = ({
  svg: Svg,
  size = 's',
  className = '',
  noFill = false,
  noStroke = false,
  isRect = false,
  children,
  ...restProps
}: IconProps) => {
  const style: { [k: string]: string } = {}
  const base = 'Icon'

  if (typeof size === 'number') {
    style.width = `${size}px`
    style.height = isRect ? `${size}px` : 'auto'
  }

  return (
    <Svg
      {...restProps}
      style={style}
      className={classNames(base, className, {
        [`${base}--size-${size}`]: typeof size !== 'number',
        [`${base}--no-fill`]: noFill,
        [`${base}--no-stroke`]: noStroke,
      })}
    />
  )
}

export default Icon
