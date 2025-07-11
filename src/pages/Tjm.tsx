import { Button } from "@/components/ui/button";
import { 
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress" 
import { useState } from "react";
import { Minus, Plus } from "lucide-react";



export default function TJM() {

  const [TJMvalue, setTJMvalue] = useState(0);

  // const [taxes, setTaxes] = useState(0);

  const navigateTo = useNavigate();

  return (
    <Card className="border border-gray-300 shadow">
    <CardHeader>
      <CardTitle className="text-2xl text-center">
        New configuration
      </CardTitle>
    </CardHeader>
    <CardContent>
      <Button onClick={() => {navigateTo("/")}} className="bg-black text-white top-2 right-2">
      Home
      </Button>

      <Parametres 
      titre="TJM"
      description="(TTC)"
      value={TJMvalue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        !isNaN(Number(e.target.value)) ? 
        setTJMvalue(Number(e.target.value)) : setTJMvalue(0)}}
      onPlus={() => setTJMvalue(TJMvalue + 5)}
      onMoins={() => setTJMvalue(TJMvalue - 5)}
      />

      {/* <Parametres 
      titre="Taxes"
      description="%"
      value={taxes}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaxes(Number(e.target.value))}
      /> */}

    </CardContent>
    </Card>
  );
}

interface ParametresProps {
  titre: string;
  description: string;
  value: number;
  onChange: Function;
  onPlus: Function;
  onMoins: Function;
}

function Parametres ({
  titre, 
  description, 
  value, 
  onChange, 
  onPlus, 
  onMoins}: ParametresProps){

  return (
    <>
      <h1 className="text-center font-bold">
        {titre}
        <span className="ml-2 text-gray-500">
          {description}
          </span>
      </h1>
      <Button className="bg-white text-black hover:bg-gray-100">
        <input 
          className="text-center"
          type="text" 
          value={value} 
          onChange={(e) => {onChange(e)}}
        />
      </Button>
      <div className="flex items-center justify-center gap-2">
        <Button onClick={()=>{onMoins()}} >
          <Minus />
        </Button>
        <Progress value={value} max={1000} />
        <Button onClick={()=>{onPlus()}} >
          <Plus />
        </Button>
      </div>
    </>
  )
}