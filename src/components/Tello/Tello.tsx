import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { hourSelector, minuteState } from './atom'

const Tello = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState)
  const hours = useRecoilValue(hourSelector)
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value)
  }

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minites"
      />
      <input value={hours} type="number" placeholder="Hour" />
    </div>
  )
}

export default Tello
