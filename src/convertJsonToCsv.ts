interface UnknownObject {
  [key: string]: any
}

const convertJsonToCsv = (e: Event) => {
  const pastedValue = (e.target as HTMLTextAreaElement).value
  const jsonWithNestedValuesAsStrings =
    pastedValue && checkJsonFormat(pastedValue)
}

const checkJsonFormat = (pastedValue: string) => {
  if (pastedValue) {
    try {
      const json = JSON.parse(pastedValue)

      const result = Array.isArray(json)
        ? json.map((item: UnknownObject) => reformatNestedValues(item))
        : [reformatNestedValues(json)]

      return result
    } catch (err) {
      console.log(err)
      return null
    }
  }
}

const reformatNestedValues = (jsonObject: UnknownObject) => {
  Object.keys(jsonObject).forEach(key => {
    if (typeof jsonObject[key] === "object") {
      jsonObject = { ...jsonObject, [key]: JSON.stringify(jsonObject[key]) }
    } else return jsonObject[key]
  })

  return jsonObject
}

export default convertJsonToCsv
