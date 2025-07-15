import HomeConfig from "@/components/HomeConfig";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {

  return (
      <Card className="m-15 mr-30 relative border-4 outline-offset-50 outline-dashed bg-red-500 outline-4 border-fuchsia-800 w-full text-center">
        <CardHeader>
          <CardTitle className="font-bold">
            Configure my Finanz Planner
            </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <HomeConfig
            title="TJM 💸"
            page="/tjm"
            description="The TJM (Average Daily Rate = Taux Journalier Moyen in French 🇫🇷) config helps you to configure and plan this parameter for your freelance missions"
          />
          <HomeConfig
            title="House 🏡"
            page="/house"
            description="The House config helps you to configure and plan a real estate loan"
          />
        </CardContent>
      </Card>
  );
}