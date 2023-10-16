import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";  
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: (val: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string;
  fuel_type: string;
  highway_mpg: number
  make: string;
  model: string;
  transmission: string;
  year: number
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionFilterProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: Array<OptionFilterProps>;
  setFilter: (val: string | number) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (val: number) => void;
}