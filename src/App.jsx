import { Separator } from './components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import Header from './header'
import Sidebar from './sidebar'
import PieChart from './pie_chart'
import Calender from './calender'

import logo from './assets/grefin_logo.png'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChevronRight, Ellipsis, Footprints, Radio, TrendingDown, TrendingUp } from 'lucide-react'





function App() {
  return (
    <div>
      <div className="font-Gabarito">
        <SidebarProvider>
           <Sidebar />
           <SidebarInset>
             <Header />
             <Separator className="bg-slate-400"/>

          <div className='flex'>

            <div className="flex flex-1 flex-col p-4 pt-0 bg-slate-200 w-3/4">
              <div className='rounded-xl mt-4 flex items-center '>
                <div className='flex flex-col'>
                  <span className='text-xl'>Dashboard</span>
                  <span className='text-gray-500 -mt-1 text-sm'>Get the overview of your green score and track your progress</span>
                </div>
                {/*<Calender />*/}
                <p className='ml-auto '>idhar calendar ayega</p>
              </div>
              <div className=' py-4 grid grid-cols-3 gap-4'>                
               <Card className='p-4 bg-green-950 text-white'>                 
                 <CardDescription className="flex items-center gap-2">
                  <Radio className='text-red-800' />
                  Update
                 </CardDescription>                 
                 <CardContent className="flex flex-col py-5 -ml-4">
                   <span className='text-xs opacity-50'>Feb 12th 2024</span>
                   <span className='text-xl text-gray-300 '>Carbon Footprint decreased 40% in 1 week</span>
                 </CardContent>
                 <CardFooter className="pb-0">
                   <span className='text-xs opacity-50 font-light'>See Statistics</span>
                   <ChevronRight className='opacity-50 ml-auto'/>
                 </CardFooter>
               </Card>

               <Card className="p-4">                 
                  <CardDescription className="flex items-center gap-2">
                    <span>Green Coins</span>
                    <Ellipsis className='ml-auto text-black' />
                  </CardDescription>                 
                 <CardContent className="flex items-center gap-3 justify-center py-5 mr-7 mb-3">
                   <img src={logo} alt="green_coin" className='w-6'/>
                   <span className='text-6xl'>193</span>
                 </CardContent>
                 <CardFooter className="pb-0 gap-1 ">
                   <TrendingUp className='text-green-600 -ml-3'/>
                   <span className='text-sm opacity-50 ml-2 '>+35%</span>
                   <span className='text-sm ml-1 opacity-70'>from last month</span>
                 </CardFooter>
               </Card>

               <Card className="p-4">                 
                  <CardDescription className="flex items-center gap-2">
                    <span>Carbon Footprint</span>
                    <Ellipsis className='ml-auto text-black' />
                  </CardDescription>                 
                 <CardContent className="flex items-center gap-3 justify-center py-5 mr-7 mb-3">
                   <Footprints className='text-blue-900' />
                   <span className='text-6xl'>32</span>
                 </CardContent>
                 <CardFooter className="pb-0 gap-1 ">
                   <TrendingDown className='text-red-600 -ml-3'/>
                   <span className='text-sm opacity-50 ml-2 '>-24%</span>
                   <span className='text-sm ml-1 opacity-70'>from last month</span>
                 </CardFooter>
               </Card>
              </div>

                <div className="grid grid-cols-2 gap-4 min-h-[70vh]" >
                  <div className=''>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Card Content</p>
                      </CardContent>
                      <CardFooter>
                        <p>Card Footer</p>
                      </CardFooter>
                    </Card>
                 </div>

                 <div className='grid gap-4'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter>
                  </Card>
                 </div>
                </div>
            </div>
            <Separator orientation="vertical" className="bg-slate-400"/>
              <div className='bg-slate-200 grid gap-2 h-full w-1/4 p-4'>
              <div className='flex'>
                <PieChart />
              </div>
              <div className=''>
                <Card className="h-full bg-green-200">
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              </div>
            </div>

          </div>
           </SidebarInset>
        </SidebarProvider>
      </div>
    </div>    
  )
}

export default App
