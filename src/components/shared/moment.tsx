"use client";
import React from "react";
import ReactMoment, { type MomentProps } from "react-moment";
import useMounted from "@/hooks/use-mounted"

export default function Moment({ ...props }: MomentProps) {
  const isMounted = useMounted();
  if (!isMounted) return null;
  return <ReactMoment {...props} />;
}
