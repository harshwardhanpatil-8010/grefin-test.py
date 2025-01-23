import { Calendar, Home, Inbox, Search, Settings, Wallet, ChartArea, ShoppingBag, Info, MessagesSquare, ChevronsUpDown, LayoutDashboard } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar" 

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar"
import logo from './assets/grefin_logo.png'
import user from './assets/elon_user.jpg'
import { Separator } from "./components/ui/separator"



export default function AppSidebar() {
  return (
    <Sidebar>        
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2 mb- ">
           <img src={logo} alt="logo" className="w-9" />
           <span className="text-xl font-bold text-gray-200 font-">GREFIN</span>
        </div>        
      </SidebarHeader>
      <SidebarContent className="p-3">
        <SidebarGroup >
          <SidebarGroupLabel className="text-sm text-white mb-2">Menu</SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem > 
                       <a href="#" className="text-white flex items-center font-thin gap-5 p-2 mb-2">
                            <LayoutDashboard className="text-green-400" />
                            <span className=" transition-transform duration-300 hover:scale-110">Dashboard</span>
                        </a>                  
                        <a href="#" className="text-white flex items-center font-thin gap-5 p-2 mb-2">
                            <Wallet />
                            <span className=" transition-transform duration-300 hover:scale-110">Transactions</span>
                        </a>
                        <a href="#" className="text-white flex items-center font-thin gap-5 p-2 mb-2">
                            <ChartArea />
                            <span className=" transition-transform duration-300 hover:scale-110">Statistics</span>
                        </a>
                        <a href="#" className="text-white flex items-center font-thin gap-5 p-2 mb-2">
                            <ShoppingBag />
                            <span className=" transition-transform duration-300 hover:scale-110">Grefin Market</span>
                        </a>
                        <a href="#" className="text-white flex items-center font-thin gap-5 p-2 mb-2">
                            <Info />
                            <span className="transition-transform duration-300 hover:scale-110">About Us</span>
                        </a>
                        <a href="#" className="text-white flex items-center font-thin gap-5 p-2 mb-2">
                            <Settings />
                            <span className=" transition-transform duration-300 hover:scale-110">Settings</span>
                        </a>
                        <a href="#" className="text-white flex items-center font-thin gap-5 p-2 mb-2">
                            <MessagesSquare />
                            <span className=" transition-transform duration-300 hover:scale-110">FAQ 's</span>
                        </a>               
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
      <Separator className="mb-2 mx-4 w-4/5" />
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                   size="xl"
                   className="mb-2 rounded-xl data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-12 w-12 rounded-xl">
                    <AvatarImage src={user} alt="tmkc" />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid text-white font-light flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Elon Musk</span>
                      <span className="truncate text-xs">elonmusk69@gmail.com</span>
                    </div>
                    <ChevronsUpDown className="ml-auto text-white" />                   
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}
