const convertCsvToJson = (csvString: string) => {
  const csv = csvString
    .split(/\r?\n/)
    .filter(row => row)
    .map(row => row.split(","))

  const json = csv
    .map((row, rowIndex) => {
      if (rowIndex >= 1) {
        return row.map((el, columnIndex) => {
          return { [csv[0][columnIndex]]: el }
        })
      }
    })
    .filter(el => el)

  return json
}

export default convertCsvToJson
