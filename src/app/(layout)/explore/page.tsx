"use client";

import React from "react";
import Right from "./components/right";
import Left from "./components/left";

const ExplorePage = () => {
  return (
    <div className="lg:grid grid-cols-2 gap-12 lg:pl-[30px]">
      <div className="mt-4 lg:mt-11">
        <Left />
      </div>
      <div className="hidden lg:block">
        <Right />
      </div>
    </div>
  );
};

export default ExplorePage;
