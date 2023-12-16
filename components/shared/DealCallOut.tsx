"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface DealCallOutProps {
  endText?: boolean;
  title?: string;
  endsAt?: string | Date;
}

export default function DealCallOut() {
  return (
    <div className="bg-green-950 py-9 px-5 flex flex-col flex-wrap lg:flex-row gap-4 lg:gap-7 justify-center items-center text-white ">
      <h2>Ends tonight!!!</h2>

      <time dateTime="2021-08-19T00:00:00" className="font-bold text-3xl">
        00:00:00
      </time>

      <p>
        Get 20% off on all products. Use code <strong>20OFF</strong>
      </p>

      <Link
        href="/products"
        className="text-lg flex gap-2 items-center justify-center"
      >
        <p>Shop now</p>
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
