import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:flex">
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
      <div className="hidden md:flex flex-col space-y-2 p-4 w-64">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-500 hover:underline">
          About
        </Link>
        <Link to="/contact" className="text-blue-500 hover:underline">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;