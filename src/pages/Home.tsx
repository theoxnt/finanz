import { Button } from "@/components/ui/button"
import { 
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom";


export default function Home() {

  return (
      <Card className="m-15 mr-30 relative border-4 outline-offset-50 outline-dashed outline-red-600 outline-4 border-fuchsia-800 w-full text-center">
        <CardHeader>
          <CardTitle className="font-bold">
            Configure my Finanz Planner
            </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Configuration
            titre="TJM 💸"
            page="/tjm"
            description="The TJM (Average Daily Rate = Taux Journalier Moyen in French 🇫🇷) config helps you to configure and plan this parameter for your freelance missions"
          />
          <Configuration
            titre="House 🏡"
            page="/house"
            description="The House config helps you to configure and plan a real estate loan"
          />
        </CardContent>
      </Card>
  );
}

interface ConfigurationProps {
  titre: string;
  description: string;
  page: string;
};

function Configuration({titre, description, page} : ConfigurationProps) {

  const navigateTo = useNavigate();

  return (
    <Card className="border border-gray-300">
      <CardHeader className="text-center">
        <CardTitle className="font-bold">{titre}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="flex justify-center">
      <CardAction>
      <Button onClick={() => {navigateTo(page)}} className="bg-black text-white w-100">Configure</Button>
      </CardAction>
      </div>
    </Card>
);
}