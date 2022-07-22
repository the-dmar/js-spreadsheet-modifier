const convertCsvToJson = (csvString: string) => {
  const csv = csvString
    .split(/\r?\n/)
    .filter(row => row)
    .map(row => row.split(","))

  const json = csv
    .map((row, rowIndex) => {
      if (rowIndex >= 1) {
        return row.map((el, columnIndex) => {
          const key = JSON.parse(csv[0][columnIndex])
          return { [key]: JSON.parse(el) }
        })
      }
    })
    .filter(el => el)

  console.log(json)
  return json
}

export default convertCsvToJson
