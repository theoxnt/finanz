import type HomeConfigProps from "@/interfaces/HomeConfigProps";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function HomeConfig({title, description, page} : HomeConfigProps) {

  const navigateTo = useNavigate();

  return (
    <Card className="border border-gray-300">
      <CardHeader className="text-center">
        <CardTitle className="font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="flex justify-center">
      <CardAction>
      <Button onClick={() => {navigateTo(page)}} className="bg-black text-white w-100">Configure</Button>
      </CardAction>
      </div>
    </Card>
)
}