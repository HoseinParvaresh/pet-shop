import { DayPicker, getDateLib } from "react-day-picker/persian";
import { useState } from "react";
import "react-day-picker/style.css";

export function PersianCalendar() {
  const [selected, setSelected] = useState(new Date());
  const dateLib = getDateLib();
  
  return (
    <DayPicker
      mode="single"
      selected={selected}
      required
      onSelect={setSelected}
      // footer={`Selected: ${dateLib.format(selected)}`}
    />
  );
}