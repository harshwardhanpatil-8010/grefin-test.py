import React, { useState } from "react";
import axios from "axios";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "./components/ui/button";


export default function App() {
  const [industry, setIndustry] = useState("");
  const [greenScore, setGreenScore] = useState(null);
  const [chartData, setChartData] = useState([
    { factors: "emission", units: 0, fill: "#5EE03A" },
    { factors: "energy consumption", units: 0, fill: "#3AE08E" },
    { factors: "waste", units: 0, fill: "#3AE056" },
    { factors: "community impact", units: 0, fill: "#A3E03A" },
    { factors: "spend", units: 0, fill: "#3AE0C7" },
  ]);

  const chartConfig = {
    units: {
      label: "Units",
    },
    emission: {
      label: "Emission",
      color: "#5EE03A",
    },
    energyConsumption: {
      label: "Energy Consumption",
      color: "#3AE08E",
    },
    waste: {
      label: "Waste",
      color: "#3AE056",
    },
    communityImpact: {
      label: "Community Impact",
      color: "#A3E03A",
    },
    spend: {
      label: "Spend",
      color: "#3AE0C7",
    },
  };

  const fetchGreenScore = async () => {
    
    try {
      console.log(`Fetching green score for: ${industry}`);
      const BASE_URL = "https://grefin-g61bfsk33-harshwardhans-projects-54b16b53.vercel.app";

      const response = await axios.get(`${BASE_URL}/api/calculate_green_score/${encodeURIComponent(industry)}`);

      console.log("API Response:", response.data);
  
      const data = response.data;
  
      setGreenScore(data.green_score ? data.green_score.toFixed(2) : "0.00");
      setChartData([
        { factors: "emission", units: data.emission ? data.emission.toFixed(2) : "0.00", fill: "#5EE03A" },
        {
          factors: "energy consumption",
          units: data.energy_consumption ? data.energy_consumption.toFixed(2) : "0.00",
          fill: "#3AE08E",
        },
        { factors: "waste", units: data.waste ? data.waste.toFixed(2) : "0.00", fill: "#3AE056" },
        {
          factors: "community impact",
          units: data.community_impact ? data.community_impact.toFixed(2) : "0.00",
          fill: "#A3E03A",
        },
        { factors: "spend", units: data.spend ? data.spend.toFixed(2) : "0.00", fill: "#3AE0C7" },
      ]);
    } catch (error) {
      console.error("Error fetching green score:", error);
      alert("Error fetching green score!");
    }
  };
  
  

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-2xl text-center text-green-500">
          Your Green Score Performance
        </CardTitle>
        <Separator className="bg-black" />
      </CardHeader>
      <CardContent className="flex-1 pb-0">
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
              dataKey="units"
              nameKey="factors"
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
                          {greenScore || 0}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          green score
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <CardDescription className="px-11">January - March 2024</CardDescription>
      </CardContent>
      <div className="px-7 py-4">
        <input
          type="text"
          placeholder="Enter Industry Name"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="border rounded px-3 py-2 mr-3 w-full"
        />
        <Button className="bg-green-950" onClick={fetchGreenScore}>
          Get Green Score
        </Button>
      </div>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Better up by 5.2% this month{" "}
          <TrendingUp className="h-4 w-4 text-green-600" />
        </div>
        <div className="leading-none opacity-50 text-center text-muted-foreground">
          Showing your total impact for the last 3 months
        </div>
      </CardFooter>
    </Card>
  );
}
