import { MouseEventHandler } from 'react'

type ButtonProps = {
  color: 'red' | 'green' | 'blue'
  text: string
  onClick?: MouseEventHandler
}

const Button = ({ color, onClick, text }: ButtonProps) => {
  const setColor = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-500'
      case 'green':
        return 'bg-green-500'
      case 'blue':
        return 'bg-blue-500'
    }
  }

  const setHoverColor = (color: string) => {
    switch (color) {
      case 'red':
        return 'hover:bg-red-600'
      case 'green':
        return 'hover:bg-green-600'
      case 'blue':
        return 'hover:bg-blue-600'
    }
  }

  return (
    <button
      onClick={onClick}
      className={`w-28 rounded-md px-4 py-2 font-bold text-white shadow-md ${setColor(color)} ${setHoverColor(color)}`}
    >
      {text}
    </button>
  )
}

export default Button
