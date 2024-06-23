import Button from '@components/Button'
import { MouseEventHandler } from 'react'

type PrevNextBtn = {
  onClickPrev: MouseEventHandler<HTMLButtonElement>
  onClickNext: MouseEventHandler<HTMLButtonElement>
}

const PrevNextBtn = ({ onClickPrev, onClickNext }: PrevNextBtn) => {
  return (
    <div className='m-4 flex justify-between'>
      <Button
        text={'Previous'}
        color='blue'
        onClick={onClickPrev}
      />
      <Button
        text={'Next'}
        color='blue'
        onClick={onClickNext}
      />
    </div>
  )
}

export default PrevNextBtn
