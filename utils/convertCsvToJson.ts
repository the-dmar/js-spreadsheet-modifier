const convertCsvToJson = (csvString: string) => {
  const csv = csvString
    .replace(/\r/g, "")
    .split("\n")
    .map(row => row.split(",").map(el => el.trim()))
    .filter(row => row[0])

  const headers = csv[0]

  const json = csv
    .map(
      (row, rowIndex) =>
        rowIndex > 0 &&
        row.reduce(
          (currentRowAsObject, cellValue, columnIndex) => ({
            ...currentRowAsObject,
            [headers[columnIndex]]: cellValue,
          }),
          {}
        )
    )
    .filter(row => row)

  return json
}

export default convertCsvToJson
