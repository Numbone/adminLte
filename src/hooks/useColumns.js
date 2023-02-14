import { useEffect, useMemo, useState } from "react";
import { TransactionAll } from "../api/transactions";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Наименование рус",
        accessor: "nameRu",
      },
      {
        Header: "Артикул",
        accessor: "product_id",
      },
      {
        Header: "Продано шт",
        accessor: "count",
      },
      {
        Header: "Продано на сумму",
        accessor: "price",
      },
    ],
    []
  );

  return columns;
}
