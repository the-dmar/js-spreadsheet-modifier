import convertJsonToCsv from "./convertJsonToCsv"

const jsonInput = document.getElementById("jsonInput")
jsonInput?.addEventListener("input", e => convertJsonToCsv(e))
