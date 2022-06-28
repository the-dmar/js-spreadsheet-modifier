import convertJsonToCsv from "./convertJsonToCsv"
import downloadCsv from "./downloadCsv"

let csv: string | null = null

const jsonInput = document.getElementById("jsonInput")
jsonInput?.addEventListener("input", e => {
  const pastedValue = convertJsonToCsv(e)
  if (pastedValue) csv = pastedValue
})

const downloadButton = document.getElementById("download")
downloadButton?.addEventListener("click", () => {
  const filenameInput = document.getElementById("filename") as HTMLInputElement
  const filename = filenameInput.value || "Export"

  csv && downloadCsv(csv, filename)
})
