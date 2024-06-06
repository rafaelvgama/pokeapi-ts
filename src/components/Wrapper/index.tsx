type WrapperProps = {
  children: JSX.Element
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      {children}
    </div>
  )
}

export default Wrapper
