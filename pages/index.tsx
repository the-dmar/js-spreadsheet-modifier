import { useRef, useState } from "react"
import readXlsxFile from "read-excel-file"
import { convertXlsxToJson } from "../utils/convertXlsxToJson"

type UnknownJSON = { [key: string]: any } | { [key: string]: any }[] | null

const Home = () => {
  const [uploadedData, setUploadedData] = useState<UnknownJSON>(null)

  const uploadRef = useRef<HTMLInputElement | null>(null)

  const uploadHandler = async (files: FileList | null) => {
    const uploadedFile = files && files[0]
    const fileName = uploadedFile?.name

    if (fileName) {
      if (fileName.includes(".xlsx")) {
        const xlsxFile = await readXlsxFile(uploadedFile)
        setUploadedData(convertXlsxToJson(xlsxFile))
      }
    }
  }

  return (
    <>
      <input
        type="file"
        onChange={e => uploadHandler(e.target.files)}
        ref={uploadRef}
      />
      {uploadedData && <pre>{JSON.stringify(uploadedData, null, 2)}</pre>}
    </>
  )
}

export default Home
