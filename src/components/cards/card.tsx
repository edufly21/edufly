"use client";
import React from "react";
import Image from "next/image";

import Rating from "@mui/material/Rating";
import {
  Card as RootCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useCart } from "@/hooks/use-cart";

interface CardProps {
  title: string;
  discriotion?: string;
  image?: string;
  ratings?: number;
  price?: number;
  discount?: number;
}

export default function Card({
  title,
  discriotion,
  image,
  ratings,
  price,
  discount,
}: CardProps) {
  const { addItem } = useCart();
  return (
    <RootCard className="max-w-[176px]   flex flex-col gap-2">
      <div className="h-44 w-44 relative rounded-md">
        <Image
          src={`https://source.unsplash.com/random/256x256r=${Math.random()}`}
          alt="image"
          fill
          sizes="100%"
          className="rounded-md object-cover "
        />
      </div>

      <CardHeader className="p-0">
        <CardTitle className="text-lg leading-none line-clamp-2">
          Create project Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Dolore!
        </CardTitle>
        <CardDescription className="line-clamp-3  leading-none">
          Deploy your new project in one-click. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Laboriosam sint sit magni unde excepturi
          quo.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex items-center gap-2">
          <Rating
            name="read-only"
            value={4.5}
            precision={0.5}
            readOnly
            size="small"
          />
          <span className="bg-muted text-xs px-2 py-1">4.5</span>
        </div>
      </CardContent>
      <CardFooter className="p-0 flex justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-red-500 italic  line-through mr-2">
            $200
          </span>
          <span className="font-bold">$200</span>
        </div>
        <Button size="sm" onClick={() => addItem({ count: 1 })}>
          Buy
        </Button>
      </CardFooter>
    </RootCard>
  );
}
