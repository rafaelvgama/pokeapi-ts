import { ReactNode } from 'react'

type BoxProps = {
  children: JSX.Element | ReactNode
}

const Box = ({ children }: BoxProps) => {
  return (
    <div
      data-testid='box-component'
      className='m-4 rounded-md shadow-md md:max-w-[736px]'
    >
      {children}
    </div>
  )
}

export default Box
