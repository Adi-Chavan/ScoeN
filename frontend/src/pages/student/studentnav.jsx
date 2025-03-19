import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, Search, Menu, X } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"

export function Studentnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b bg-white px-8 drop-shadow-lg drop-shadow-blue-600/50">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
                {/* <img
              src="/placeholder.svg?height=32&width=32"
              alt="ScoeN Logo"
              width={32}
              height={32}
              className="rounded"
            /> */}
                ScoeN
              </Link>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Search for anything" className="w-full pl-8 rounded-full bg-gray-100" />
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center gap-8 ml-auto">
                <div className="hidden md:block">
                  <Link to="/courses">
                    <Button variant="secondary" className="hidden sm:block text-sm font-medium ">
                      Explore Courses
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <Button variant="outline" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                      3
                    </span>
                  </Button>
                </div>
                <div className="hidden md:block">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t">
              <div className="container py-4">
                <div className="relative mb-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="Search for anything" className="w-full pl-8 bg-gray-100" />
                </div>

                <nav className="flex flex-col gap-4">
                  <Link to="/profile">
                    <Button variant="secondary" className="text-sm font-medium w-full">
                      My Profile
                    </Button>
                  </Link>
                  <Link to="/courses">
                    <Button variant="secondary" className="text-sm font-medium w-full">
                      Explore Courses
                    </Button>
                  </Link>
                  <Link to="/courses">
                    <Button variant="secondary" className="text-sm font-medium w-full">
                      Explore Courses
                    </Button>
                  </Link>
                </nav>
              </div>
            </div>
          )}
        </header>
    </div>
  )
}

