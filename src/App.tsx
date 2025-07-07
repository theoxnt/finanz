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

function Configuration({titre, description} : ConfigurationProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <CardTitle>{titre}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="flex justify-center">
      <CardAction>
      <Button variant={"destructive"}>Configure</Button>
      </CardAction>
      </div>
    </Card>
);
}

function FinanzPlanner() {
  return (
    <div className="w-screen flex justify-center">
      <Card className="w-full max-w-2xl text-center shadow-lg">
        <CardHeader>
          <CardTitle>Configure my Finanz Planner</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
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