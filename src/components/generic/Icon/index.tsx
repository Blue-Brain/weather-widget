// libs
import { HTMLAttributes, ComponentType, SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
//styles
import './icon.scss';

export type SVGType = ComponentType<SVGProps<SVGSVGElement>>

type IconProps = HTMLAttributes<SVGSVGElement> & {
  svg: SVGType;
  size?: 's' | 'm' | 'l' | number;
  noFill?: boolean;
  noStroke?: boolean;
  isRect?: boolean;
}

export const Icon = ({
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

type IconsFontProps = {
  name: string,
  color?: string,
  classname?: string
  size?: 'xs' | 'sm' | 'lg' | '2x' |'3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' ,
  inverse?: boolean,
  rotation?: number,
  flip?: 'horizontal' | 'vertical' | 'both',
  spin?: boolean,
  pulse?: boolean,
}

export const IconsFont = ({
  name,
  color,
  classname = '',
  size = 'sm',
  inverse,
  rotation,
  flip,
  spin,
  pulse,
}:IconsFontProps) => {
  return <FontAwesomeIcon
    icon='cog' 
    color={color}
  />
}

export default IconsFont
