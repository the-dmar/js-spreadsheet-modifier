import { useRef, useState } from "react"
import readXlsxFile from "read-excel-file"
import JSONPreview from "../components/JSONPreview"
import convertCsvToJson from "../utils/convertCsvToJson"
import { convertXlsxToJson } from "../utils/convertXlsxToJson"

type UnknownJSON = { [key: string]: any } | { [key: string]: any }[] | ""

const Home = () => {
  const [uploadedData, setUploadedData] = useState<UnknownJSON>()

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

  return (
    <>
      <input type="file" onChange={e => uploadHandler(e.target.files)} />
      <JSONPreview json={JSON.stringify(uploadedData, null, 2)} />
    </>
  )
}

export default Home
