import { useState } from "react"
import { Link } from "react-router-dom"
// import Image from "next/image"
import { Search, Menu, X } from "lucide-react"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white px-8 drop-shadow-lg drop-shadow-blue-600/50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
            {/* <Image
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

        <div className="flex items-center gap-4">
          <Link to="/profile" className="hidden md:block text-sm font-medium hover:text-blue-600">
            About Us
          </Link>
          <Link to="/" className="hidden md:block text-sm font-medium hover:text-blue-600">
            Explore Courses
          </Link>
          <Link to="/signin">
           <Button className="hidden sm:block text-sm font-medium ">
             Sign In
           </Button> 
          </Link>
          <Link to="/signup" className="hidden sm:block">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Sign Up
            </Button>
          </Link>

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
              {/* <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full text-sm font-medium py-2"
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                >
                  Categories
                  <span>{isCategoriesOpen ? "−" : "+"}</span>
                </button>
                {isCategoriesOpen && (
                  <div className="grid gap-2 mt-2 pl-4">
                    <div className="text-sm py-1 hover:text-blue-600">
                      Development
                    </div>
                    <div className="text-sm py-1 hover:text-blue-600">
                      Business
                    </div>
                    <div className="text-sm py-1 hover:text-blue-600">
                      IT & Software
                    </div>
                    <div className="text-sm py-1 hover:text-blue-600">
                      Design
                    </div>
                    <div className="text-sm py-1 hover:text-blue-600">
                      Marketing
                    </div>
                  </div>
                )}
              </div> */}

              <Link to="">
                <div className="text-sm font-medium py-2">
                  About Us
                </div>
              </Link>
              <Link to="/">
                <div className="text-sm font-medium py-2">
                  Exlpore Courses
                </div>
              </Link>

              <div className="flex gap-2 mt-2">
                <Link to="/signin" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" className="flex-1">
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
