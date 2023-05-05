import { ICar } from "@/data-transfer-objects/entities/Car";
import { IHeaderCell } from "../types";

export const headerCells: IHeaderCell<ICar>[] = [
  {
    id: "id",
    lable: "Image",
    isSortable: false,
  },
  {
    id: "manufacture",
    lable: "Manufacture",
    isSortable: true,
  },
  {
    id: "model",
    lable: "Model",
    isSortable: true,
  },
  {
    id: "year",
    lable: "Year",
    isSortable: true,
  },
  {
    id: "price",
    lable: "Price, Cr",
    isSortable: true,
  },
  {
    id: "type",
    lable: "Type",
    isSortable: true,
  },
];
