import TJMParameters from "@/components/TJMParameters";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";


export default function TJM() {

  const [TJMvalue, setTJMvalue] = useState(350);
  const [inclTVA, setInclTVA] = useState(true);

  const [taxes, setTaxes] = useState([{id: Date.now(), number: 12.5}]);

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

  const [workedDays, setWorkedDays] = useState(20)

  const computeNetTotal = () => {
    const netWithoutTax = inclTVA ? TJMvalue / 1.2 : TJMvalue
    const netWithTax = taxes.reduce((acc, current) => {
      if (current.number !== 0) {
        return acc - (current.number / 100 * TJMvalue);
      }
      return acc;
    }, netWithoutTax);
    return parseFloat((netWithTax*workedDays).toFixed(2));
  }

  const [netTotal, setNetTotal] = useState(computeNetTotal());

  useEffect(() => {
    setNetTotal(computeNetTotal())
  }, [workedDays, taxes, inclTVA, TJMvalue])

  const navigateTo = useNavigate();

  return (
    <div className="m-4 border rounded-2xl border-gray-300 shadow">

      <div className="relative flex justify-between items-center w-full py-8 px-4">
        <Button onClick={() => {navigateTo("/")}} className="bg-black text-white">
          Home
        </Button>
        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-xl">
          <input className="text-center" type="text" defaultValue="New Configuration"/>
        </h2>
        <Button onClick={() => {navigateTo("/")}} className="bg-black text-white">
          Change config
        </Button>
      </div>

      <div className="space-y-4 flex flex-col justify-center items-center">
        <div>
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

        <div>
          <ul className="flex justify-center mb-2 space-x-6 liste-none">
            {listTaxes}
          </ul>
        </div>
        <div className="mt-4 flex justify-center" >
          <Button onClick={() => {addTax()}}>
            Ajouter une taxe
          </Button>
        </div>

        <div>
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

        <div className="text-lg items-center flex flex-col">
          Total net: 
          <NumberFlow className="text-3xl font-bold" value={netTotal}/>
        </div>

        <div className="text-lg items-center flex flex-col">
          Total brut: 
          <NumberFlow className="text-3xl font-bold" value={netTotal}/>
        </div>
      </div>
      
    </div>
  );
}

