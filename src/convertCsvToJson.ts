const convertCsvToJson = (csv: string) => {
  const csvStringAsArray = csv
    .split(/\n/)
    .map(el => el.replace("\r", ""))
    .filter(el => el !== "")
    .map(el => el.split(","))

  const json = csvStringAsArray
    .map((row, i) => {
      if (i >= 1) {
        return row.map((el, i) => {
          return { [csvStringAsArray[0][i]]: el }
        })
      }
    })
    .filter(row => row)

  return json
}

export default convertCsvToJson
