import { Search } from 'lucide-react'
import {
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react'

type FormProps = {
  value: string | number
  onSubmit: FormEventHandler<HTMLFormElement>
  onKeyDown: KeyboardEventHandler<HTMLInputElement>
  onChange: ChangeEventHandler<HTMLInputElement>
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Form = ({ value, onSubmit, onKeyDown, onChange, onClick }: FormProps) => {
  return (
    <form
      className='relative flex items-center justify-center'
      onSubmit={onSubmit}
    >
      <input
        data-testid='pokemon-input'
        id='pokemon-name'
        type='text'
        placeholder='Pokémon name or id'
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className='mx-4 w-full rounded-md border-2 border-blue-500 p-2 pr-12 shadow-md outline-none'
      />
      <button
        onClick={onClick}
        className='absolute right-[16px] rounded-r-md bg-blue-500 p-[9px] hover:bg-blue-600'
        data-testid='search-btn'
      >
        <Search color='white' />
      </button>
    </form>
  )
}

export default Form
