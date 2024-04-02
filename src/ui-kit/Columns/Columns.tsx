import React from "react";
import {
  maxWidthProp,
  gridColsProp,
  gridSpaceProp,
} from "../../utils/propClasses";
import { Column } from "./Column";

export interface ColumnProps {
  children: React.ReactNode;
  maxWidth?: keyof typeof maxWidthProp;
  cols?: keyof typeof gridColsProp;
  gap?: keyof typeof gridSpaceProp;
}

export const ColumnWrapper = ({
  children,
  maxWidth = "full",
  gap = "10",
  cols = "1",
}: ColumnProps) => {
  return (
    <div
      className={`ui-columns mx-auto grid ${maxWidthProp[maxWidth]} ${gridColsProp[cols]} ${gridSpaceProp[gap]}`}
    >
      {children}
    </div>
  );
};

export const Columns = Object.assign(ColumnWrapper, {
  Column,
});
