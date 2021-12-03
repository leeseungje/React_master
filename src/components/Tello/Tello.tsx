import React from "react";
import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atom";

const Tello = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minites"
      />
      <input
        onChange={onHoursChange}
        value={hours}
        type="number"
        placeholder="Hour"
      />
    </div>
  );
};

export default Tello;
