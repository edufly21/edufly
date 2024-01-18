"use client";

import React from "react";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Timer from "../shared/timer";

interface DealCallOutProps {
  endText?: boolean;
  title?: string;
  endsAt?: string | Date;
}

export default function DealCallOut() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div className="bg-green-950 py-7 px-5 flex flex-col flex-wrap lg:flex-row gap-3.5 lg:gap-7 justify-center items-center text-white ">
      <h2 className="text-md text-2xl md:text-3xl lg:text-4xl font-bold">
        Ends tonight !!!
      </h2>
      <Timer expiryTimestamp={time} />

      <p className="text-lg text-center md:text-2xl  font-medium ">
        Get 20% off on all products. Use code <strong>20OFF</strong>
      </p>

      <Link
        href="/products"
        className="text-lg flex gap-1 items-center justify-center"
      >
        <p className=" md:text-2xl  font-medium">Shop now</p>
        <ChevronRight className="h-5 w-5" />
      </Link>
    </div>
  );
}
