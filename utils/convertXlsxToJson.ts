import { Row } from "read-excel-file"

export const convertXlsxToJson = (wb: Row[]) => {
  const json = wb
    .map((row, rowIndex) => {
      if (rowIndex >= 1) {
        return row.map((cellValue, columnIndex) => {
          let headerName = wb[0][columnIndex]
          return {
            [typeof headerName === "string"
              ? headerName
              : columnIndex.toString()]: cellValue,
          }
        })
      }
    })
    .filter(row => row)

  return json
}
