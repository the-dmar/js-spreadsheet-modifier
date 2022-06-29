interface UnknownObject {
  [key: string]: any
}

const convertJsonToCsv = (e: Event) => {
  const pastedValue = (e.target as HTMLTextAreaElement).value

  const jsonWithNestedValuesAsStrings = checkJsonFormat(pastedValue)

  if (jsonWithNestedValuesAsStrings) {
    const csvBody = jsonWithNestedValuesAsStrings.map((obj: any) =>
      Object.values(obj)
    )
    const headers = [
      ...new Set(
        ...jsonWithNestedValuesAsStrings.map((obj: any) => Object.keys(obj))
      ),
    ]

    const csv = [headers, ...csvBody].map(row => row.join(",")).join("\n")
    if (csv) return csv
    else return null
  }
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
    if (
      typeof jsonObject[key] === "object" &&
      !Array.isArray(jsonObject[key])
    ) {
      jsonObject = { ...jsonObject, [key]: JSON.stringify(jsonObject[key]) }
    }

    if (Array.isArray(jsonObject[key])) {
      jsonObject = {
        ...jsonObject,
        [key]: JSON.stringify(jsonObject[key].join(",")),
      }
    } else return jsonObject[key]
  })

  return jsonObject
}

export default convertJsonToCsv
