import { ComponentProps } from 'react'

type LoaderProps = ComponentProps<'img'> & {
  tailwindSize: number
}

const Loader = ({ tailwindSize, ...props }: LoaderProps) => {
  return (
    <img
      src='/assets/images/spin-loader.gif'
      alt='Loading icon'
      className={`h-${tailwindSize} w-${tailwindSize}`}
      {...props}
    />
  )
}

export default Loader
