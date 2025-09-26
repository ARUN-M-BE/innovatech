import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Contact, Home, NotFound } from "./components";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="bg-primary min-h-screen w-full flex justify-center items-center dark:bg-gray-900 dark:text-white">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default App;
