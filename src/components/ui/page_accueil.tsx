import { Button } from "@/components/ui/button"
import { 
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ConfigurationProps {
  titre: string;
  description: string;
};

function handleConfigureClick() {
  alert("Configuration clicked!");
}

function Configuration({titre, description} : ConfigurationProps) {
  return (
    <Card className="border border-gray-300 shadow">
      <CardHeader className="text-center">
        <CardTitle className="font-bold">{titre}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="flex justify-center">
      <CardAction>
      <Button onClick={handleConfigureClick} className="bg-black text-white w-100">Configure</Button>
      </CardAction>
      </div>
    </Card>
);
}

function FinanzPlanner() {
  return (
    <div className="w-screen flex justify-center">
      <Card className="mt-8 relative border border-gray-300 w-full max-w-2xl text-center shadow">
        <CardHeader>
          <CardTitle className="font-bold">Configure my Finanz Planner</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <CardAction>
            <Button className="bg-white text-black shadow text-center absolute -top-4 -right-4 border border-gray-300"> ☀︎ </Button>
          </CardAction>
          <Configuration
            titre="TJM 💸"
            description="The TJM (Average Daily Rate = Taux Journalier Moyen in French 🇫🇷) config helps you to configure and plan this parameter for your freelance missions"
          />
          <Configuration
            titre="House 🏡"
            description="The House config helps you to configure and plan a real estate loan"
          />
        </CardContent>
      </Card>
    </div>
  );
}




export default FinanzPlanner;