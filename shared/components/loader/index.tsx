"use client";

import { FC } from "react";
import { Size } from "@/types/ui";
import { StylesLoader } from "./style";

export interface LoaderProps {
  size?: Size;
}
const Loader: FC<LoaderProps> = ({ size = "medium" }) => {
  return <StylesLoader $size={size} />;
};

export default Loader;
