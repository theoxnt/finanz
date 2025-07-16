import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ConfigurationsTJM() {

  const [configs, setconfigs] = useState([{name: "salut"}])

  const listConfigs = configs.map(config =>
    <button>{config.name}</button>
  )

  const navigateTo = useNavigate();

  return (
    <div className="pb-4 m-4 border rounded-2xl border-gray-300 shadow">

      <div className="relative flex justify-between items-center w-full py-4 px-4">
        <Button onClick={() => {navigateTo("/")}} className="bg-black text-white">
          Home
        </Button>
        <h2 className="absolute font-bold left-1/2 transform -translate-x-1/2 text-l">
          Configurations available
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        {listConfigs}
      </div>

      <div className="flex justify-center items-center">
        <Button onClick={() => {navigateTo("/")}} className="bg-black text-white">
            New configuration
        </Button> 
      </div>

    </div>
  )
}