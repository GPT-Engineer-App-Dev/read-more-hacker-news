import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="md:hidden">
              Menu
            </Button>
          </DrawerTrigger>
          <DrawerContent className="w-64">
            <nav className="flex flex-col space-y-2 p-4">
              <Link to="/" className="text-blue-500 hover:underline">
                Home
              </Link>
              <Link to="/about" className="text-blue-500 hover:underline">
                About
              </Link>
              <Link to="/contact" className="text-blue-500 hover:underline">
                Contact
              </Link>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;