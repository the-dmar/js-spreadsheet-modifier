import convertJsonToCsv from "./convertJsonToCsv"

let pastedJson: string | null = null

const jsonInput = document.getElementById("jsonInput")
jsonInput?.addEventListener("input", e => {
  const data = convertJsonToCsv(e)
  pastedJson = data
})

const btn = document.getElementById("btn")
btn?.addEventListener("click", () => {
  pastedJson && console.log(pastedJson)
})
