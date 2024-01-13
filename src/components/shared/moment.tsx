"use client";
import React from "react";
import ReactMoment, { type MomentProps } from "react-moment";
import { useMountedState } from "react-use";

export default function Moment({ ...props }: MomentProps) {
  const isMounted = useMountedState();
  if (!isMounted()) return null;
  return <ReactMoment {...props} />;
}
