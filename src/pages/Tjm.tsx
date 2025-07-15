import TJMParameters from "@/components/TJMParameters";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function TJM() {

  const [TJMvalue, setTJMvalue] = useState(0);
  const [inclTVA, setInclTVA] = useState(true);

  const [taxes, setTaxes] = useState([{id: Date.now(), number: 0}]);

  const listTaxes = taxes.map(tax => (
    <li className ="mt-4 flex justify-center" key={tax.id}>
        <TJMParameters
        title="Taxes"
        description="%"
        value={tax.number}
        max={100}
        min={0}
        step={0.5}
        onChange={(value:number) => updateTaxes(tax.id, {id: tax.id, number: value})}
        />
      </li>

  ))

  const addTax = () => {
    const newTax = {
      id: Date.now(),
      number: 0,
    };
    setTaxes([...taxes, newTax]);
  };

  const updateTaxes = (id: number, newTax: any) => {
    const newTaxes = taxes.map(tax => 
      {if (tax.id !== id) {
        return tax;
      }
      return newTax;}
    )
    setTaxes(newTaxes);
  }

  const [workedDays, setWorkedDays] = useState(0)

  const computeNetTotal = () => {
    const netWithoutTax = inclTVA ? TJMvalue / 1.2 : TJMvalue
    const netWithTax = taxes.reduce((acc, current) => {
      if (current.number !== 0) {
        return acc - (current.number / 100 * acc);
      }
      return acc;
    }, netWithoutTax);
    return parseFloat((netWithTax*workedDays).toFixed(2));
  }

  const navigateTo = useNavigate();

  return (
    <Card className="mt-4 border border-gray-300 shadow">
    <CardHeader>
      <CardTitle className="text-2xl text-center">
        <input type="text" defaultValue="New Configuration"/>
      </CardTitle>
    </CardHeader>
    <CardContent >
      <Button onClick={() => {navigateTo("/")}} className="bg-black text-white top-2 right-2">
      Home
      </Button>

      <div className ="flex justify-center">
        <TJMParameters
        title="TJM"
        description2="(HT)"
        description="(TTC)"
        value={TJMvalue}
        max={1000}
        min={0}
        step={5}
        inclTVA={inclTVA}
        onChangeTVA={(value: boolean) => setInclTVA(value)}
        onChange={(value:number) => setTJMvalue(value)}
        />
      </div>

      <div className="overflow-auto">
        <ul className="flex justify-center mb-2 space-x-6 liste-none">
          {listTaxes}
        </ul>
      </div>
      <div className="mt-4 flex justify-center" >
        <Button onClick={() => {addTax()}}>
          Ajouter une taxe
        </Button>
      </div>

      <div className ="mt-4 flex justify-center">
        <TJMParameters
        title="Worked Days"
        description=""
        value={workedDays}
        max={365}
        min={0}
        step={1}
        onChange={(value:number) => setWorkedDays(value)}
        />
      </div>

      <div className="justify-center flex">
        Total net: 
        {computeNetTotal()}
      </div>
    </CardContent>
    </Card>
  );
}

