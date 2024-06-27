type LoaderProps = {
  tailwindSize: number
}

const Loader = ({ tailwindSize }: LoaderProps) => {
  return (
    <img
      src='./public/assets/images/spin-loader.gif'
      alt='Loading icon'
      className={`h-${tailwindSize} w-${tailwindSize}`}
    />
  )
}

export default Loader