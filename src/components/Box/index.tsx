import { PropsWithChildren } from 'react'

const Box = ({ children, ...props }: PropsWithChildren) => {
  return (
    <div
      data-testid='box-component'
      className='m-4 rounded-md shadow-md md:max-w-[736px]'
      {...props}
    >
      {children}
    </div>
  )
}

export default Box
