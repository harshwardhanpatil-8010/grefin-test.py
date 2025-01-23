import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { Button } from "./components/ui/button"

const chartData = [
  { factors: "emission", units: 275, fill: "#5EE03A" },
  { factors: "energy consumption", units: 200, fill: "#3AE08E" },
  { factors: "waste", units: 287, fill: "#3AE056" },
  { factors: "community impact", units: 173, fill: "#A3E03A" },
  { factors: "spend", units: 190, fill: "#3AE0C7" },
]

const chartConfig = {
    units: {
        label: "Units",
    },
    emission: {
      label: "Emission",
      color: "#5EE03A", // Matches "emission" fill in chartData
    },
    energyConsumption: {
      label: "Energy Consumption",
      color: "#3AE08E", // Matches "energy consumption" fill in chartData
    },
    waste: {
      label: "Waste",
      color: "#3AE056", // Matches "waste" fill in chartData
    },
    communityImpact: {
      label: "Community Impact",
      color: "#A3E03A", // Matches "community impact" fill in chartData
    },
    spend: {
      label: "Spend",
      color: "#3AE0C7", // Matches "spend" fill in chartData
    },
  };
  

export default function Component() {
  

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-2xl text-center text-green-500">Your Green Score Performance</CardTitle>
        <Separator className="bg-black" />        
      </CardHeader> 
      <CardContent className=" flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="units" // Correct field
              nameKey="factors" // Correct field"
              innerRadius={50}
              strokeWidth={15}
              className=""
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          863
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          green score
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
          
        </ChartContainer>
        <CardDescription className="px-11">January - March 2024</CardDescription>
      </CardContent>
      <Button className="mb-7 ml-7 mr-7 bg-green-950 " >
        View in detail
      </Button>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Better up by 5.2% this month <TrendingUp className="h-4 w-4 text-green-600" />
        </div>
        <div className="leading-none opacity-50 text-center text-muted-foreground">
          Showing your total impact for the last 3 months
        </div>
      </CardFooter>
    </Card>
  )
}
