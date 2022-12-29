import { useMemo } from "react";

export default function useRows(data) {
  console.log(data)
  const rows = useMemo(
    () => [
      {
        marca: "Audi",
        modelo: "A3",
        segmento: "Sedan, Convertible",
        anio: "2015",
        last:"asdsad"
      },
      data?.products_info?.map((item) =>(
      {
        marca: "Audi",
        modelo: "A3",
        segmento: "Sedan, Convertible",
        anio: "2015"
      }))
    ],
    
  );

  return rows;
}
