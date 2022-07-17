import { useRef, useState } from "react"
import readXlsxFile from "read-excel-file"
import JSONEditor from "../components/JSONEditor"
import JSONPreview from "../components/JSONPreview"
import convertCsvToJson from "../utils/convertCsvToJson"
import { convertXlsxToJson } from "../utils/convertXlsxToJson"
import sample from "../data/sample"

type UnknownJSON = { [key: string]: any } | { [key: string]: any }[] | ""

const Home = () => {
  const [uploadedData, setUploadedData] = useState<UnknownJSON>(sample)

  const uploadRef = useRef<HTMLInputElement>()

  const uploadHandler = async (files: FileList | null) => {
    const uploadedFile = files && files[0]

    const fileName = uploadedFile?.name

    if (fileName) {
      if (fileName.includes(".xlsx")) {
        const xlsxFile = await readXlsxFile(uploadedFile)
        setUploadedData(convertXlsxToJson(xlsxFile))
      } else {
        const reader = new FileReader()
        reader.readAsText(uploadedFile)
        reader.onload = () => {
          const loadedFile = reader.result
          const csv =
            typeof loadedFile === "string" &&
            setUploadedData(convertCsvToJson(loadedFile))
        }
      }
    }
  }

  const modifyUploadedData = (userGeneratedCode: string) => {
    const dataModifierFunctionBody = `
      const data = ${JSON.stringify(uploadedData)}

      ${userGeneratedCode}
    `

    const dataModifierFunction = new Function(dataModifierFunctionBody)
    const newData = dataModifierFunction()
    setUploadedData(newData)
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input type="file" onChange={e => uploadHandler(e.target.files)} />
      <div style={{ display: "flex" }}></div>
      <JSONEditor modifyUploadedData={modifyUploadedData} />
      <JSONPreview json={JSON.stringify(uploadedData, null, 2)} />
    </div>
  )
}

export default Home
