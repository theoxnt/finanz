export default interface TJMParametersProps {
  title: string;
  key?:number;
  description: string;
  value: number;
  onChange: Function;
  max: number;
  min: number;
  step: number
  inclTVA?: boolean
  description2?: string;
  onChangeTVA?: (value: boolean) => void;
}