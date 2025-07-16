import { Minus, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import type TJMParametersProps from '@/interfaces/TJMParametersProps';
import { useEffect, useRef, useState } from 'react';
import NumberFlow from "@number-flow/react";


export default function TJMParameters ({
  title, 
  description,
  description2, 
  value, 
  onChange, 
  onChangeTVA,
  max, 
  min,
  step,
  inclTVA}: TJMParametersProps) {
  onChangeTVA = onChangeTVA || ((_) => {});

  const  onPlus=() => {if (value + step > max) {onChange(max)} else {onChange(value + step)}}

  const onMinus=() => {if (value - step < min) {onChange(min)} else {onChange(value - step)}}

  const [editing, setEditing] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Entrer") {
      window.removeEventListener("keydown", handleKeyDown)
    };
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
        inputRef.current.focus();
    }
}, [editing]);

  return (
    <div className="w-45">
      <h1 className="text-center font-bold">
        {title}
        <span className="ml-2 text-gray-500">
          {inclTVA === undefined ? description : (inclTVA ? description : description2)}
          </span>
      </h1>
      {inclTVA !== undefined && (
        <div className="flex justify-center gap-2 mb-4">
          <Switch checked={inclTVA} onCheckedChange={(e) => {onChangeTVA(e)}} id="TVA" />
          <Label htmlFor="TVA"> incl. TVA </Label>
        </div>
      )}
      <Button 
      onClick={() => {
        setEditing(true)
        window.addEventListener("keydown", () => { handleKeyDown })
      }} 
      className="bg-white text-black hover:bg-gray-100">
        {editing ?
          <input
            w-full
            onBlur={() => setEditing(false)}
            ref={inputRef}
            className="text-center"
            type="number" 
            value={value}
            max={max}
            min={min}
            onChange={(e) => {const value = parseFloat(e.target.value)
              if (isNaN(value)) {
                onChange(0);
              } else if (Number(value>max)) {
              onChange(max)}
            else if (Number(value<min)) {
              onChange(min)}
            else {
              onChange(value)}
            }}
          /> : 
          <NumberFlow value={value} /> }
      </Button>
      <div className="flex items-center justify-center gap-2">
        <Button onClick={()=>{onMinus()}} >
          <Minus />
        </Button>
        <Slider step={step} value={[value]} max={max} min={min} onValueChange={(e) => {onChange(e)}} />
        <Button onClick={()=>{onPlus()}} >
          <Plus />
        </Button>
      </div>
    </div>
  )
}