interface Test {
  [key: string]: any
}

const convertJsonToCsv = (e: Event) => {
  const pastedValue = (e.target as HTMLTextAreaElement).value
  if (pastedValue) {
    try {
      const json = JSON.parse(pastedValue)

      const result = Array.isArray(json)
        ? json.map((item: Test) => reformatNestedValues(item))
        : reformatNestedValues(json)
      console.log(result)
    } catch {
      alert("Invalid JSON!")
    }
  }
}

const reformatNestedValues = (jsonObject: Test) => {
  Object.keys(jsonObject).forEach(key => {
    if (typeof jsonObject[key] === "object") {
      jsonObject = { ...jsonObject, [key]: JSON.stringify(jsonObject[key]) }
    } else return jsonObject[key]
  })

  return jsonObject
}

export default convertJsonToCsv
