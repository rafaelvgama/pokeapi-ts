type BoxProps = {
  children: JSX.Element
}

const Box = ({ children }: BoxProps) => {
  return <div className='max-w-fit rounded-md shadow-md'>{children}</div>
}

export default Box
