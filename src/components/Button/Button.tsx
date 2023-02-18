import cx from 'classnames'
import React from 'react'

import css from './Button.module.scss'

type Classnames = {
  container?: string
}

type Props = {
  classnames?: Classnames
  htmlType?: 'button' | 'submit' | 'reset' | undefined
  size?: 'medium'
  shape?: 'circle'
  type?: 'primary' | 'secondary'
  width?: number
}

const Button: React.FC<
  Props & Omit<React.HTMLProps<HTMLButtonElement>, 'size'>
> = ({
  children,
  classnames,
  size = 'medium',
  style,
  shape,
  type = 'primary',
  htmlType = 'button',
  width,
  ...props
}) => {
  const cn: Classnames = {
    container: cx(
      css.container,
      css[type],
      css[size],
      shape && css[shape],
      classnames?.container
    )
  }

  return (
    <button
      type={htmlType}
      className={cn.container}
      style={{
        width: width ?? '',
        ...style,
      }}
      {...props}
    >

      {children}
    </button>
  )
}

export default Button
