const downloadCsv = (csv: any, filename: string) => {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)

  const pom = document.createElement("a")
  pom.href = url
  pom.setAttribute("download", `${filename}.csv`)
  pom.click()
}

export default downloadCsv
