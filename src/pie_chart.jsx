import React, { useState, useEffect } from "react";
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
  const [industry, setIndustry] = useState(""); // User input for industry
  const [greenScore, setGreenScore] = useState(0); // Default green score is 0
  const [chartData, setChartData] = useState([
    { factors: "emission", units: 0, fill: "#5EE03A" },
    { factors: "energy consumption", units: 0, fill: "#3AE08E" },
    { factors: "waste", units: 0, fill: "#3AE056" },
    { factors: "community impact", units: 0, fill: "#A3E03A" },
    { factors: "spend", units: 0, fill: "#3AE0C7" },
  ]);

  const fetchGreenScore = async () => {
    try {
      const BASE_URL = "http://localhost:8000"; // Replace with the correct API URL

      // Add validation for empty input
      if (!industry.trim()) {
        alert("Please enter a valid industry name.");
        return;
      }

      console.log(`Fetching green score for: ${industry}`);

      // Make the API request
      const response = await axios.get(
        `${BASE_URL}/calculate_green_score/${encodeURIComponent(industry)}`
      );

      console.log("API Response:", response.data);

      // Check if the response contains the green score
      const data = response.data;
      if (!data || typeof data.green_score === "undefined") {
        throw new Error("Invalid response: Missing green score");
      }

      // Update the green score and chart data
      setGreenScore(Math.floor(data.green_score)); // Ensure integer value
      setChartData([
        { factors: "emission", units: data.emission || 0, fill: "#5EE03A" },
        {
          factors: "energy consumption",
          units: data.energy_consumption || 0,
          fill: "#3AE08E",
        },
        { factors: "waste", units: data.waste || 0, fill: "#3AE056" },
        {
          factors: "community impact",
          units: data.community_impact || 0,
          fill: "#A3E03A",
        },
        { factors: "spend", units: data.spend || 0, fill: "#3AE0C7" },
      ]);
    } catch (error) {
      console.error("Error fetching green score:", error);
      alert("Failed to fetch green score. Please try again.");
    }
  };

  useEffect(() => {
    console.log("Green Score Updated:", greenScore);
    console.log("Chart Data Updated:", chartData);
  }, [greenScore, chartData]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-2xl text-center text-green-500">
          Your Green Score Performance
        </CardTitle>
        <Separator className="bg-black" />
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div className="flex flex-col items-center justify-center">
          {/* Green Score Display */}
          <h2 className="text-green-500 text-4xl font-bold">{greenScore}</h2>
          <p className="text-green-400 text-lg">Well Done!</p>
        </div>

        <ChartContainer
          config={{
            units: { label: "Units" },
            emission: { label: "Emission", color: "#5EE03A" },
            energyConsumption: {
              label: "Energy Consumption",
              color: "#3AE08E",
            },
            waste: { label: "Waste", color: "#3AE056" },
            communityImpact: { label: "Community Impact", color: "#A3E03A" },
            spend: { label: "Spend", color: "#3AE0C7" },
          }}
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
