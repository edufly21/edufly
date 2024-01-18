"use client";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import { Button } from "../ui/button";
import { BasketPlus } from "../icons";

interface ProductProps {
  title: string;
  discriotion?: string;
  image?: string;
  ratings?: number;
  price?: number;
  discount?: number;
}

export default function Product({
  title,
  discriotion,
  image,
  ratings,
  price,
  discount,
}: ProductProps) {
  const { addItem } = useCart();
  return (
    <Card className="max-w-[176px] flex flex-col gap-1 border-none">
      <div className="h-36 w-36 relative rounded-md">
        <Image
          src={`https://source.unsplash.com/random/256x256r=${Math.random()}`}
          alt="image"
          fill
          sizes="100%"
          className="rounded-md object-cover "
        />
      </div>

      <CardHeader className="px-1 py-0">
        <CardTitle className="text-base leading-none line-clamp-3 font-medium tracking-tight">
          Create project Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Dolore!
        </CardTitle>
        {/* <CardDescription className="line-clamp-3  leading-none">
          Deploy your new project in one-click. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Laboriosam sint sit magni unde excepturi
          quo.
        </CardDescription> */}
      </CardHeader>
      {/* <CardContent className="px-1 py-1">
        <div className="flex items-center gap-1">
          <span className="bg-muted text-xs px-2 py-1">4.5</span>
        </div>
      </CardContent> */}
      <CardFooter className="py-0 px-1 flex justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-red-500 italic  line-through mr-2">
            $200
          </span>
          <span className="font-bold">$200</span>
        </div>
        <Button size="icon" onClick={() => addItem({ count: 1 })}>
          <BasketPlus />
        </Button>
      </CardFooter>
    </Card>
  );
}
