import { useRef, useState } from "react"
import readXlsxFile from "read-excel-file"
import JSONEditor from "../components/JSONEditor"
import JSONPreview from "../components/JSONPreview"
import convertCsvToJson from "../utils/convertCsvToJson"
import { convertXlsxToJson } from "../utils/convertXlsxToJson"
import sample from "../data/sample"
import SheetPreview from "../components/SheetPreview"
import {
  Container,
  EditorLeftSide,
  EditorWrapper,
  FileInput,
  FileInputStyler,
  InvisibleFileInput,
} from "../styles/Index.styled"
import { FaUndo } from "react-icons/fa"
import { IconContext } from "react-icons"

export type UnknownJSON = { [key: string]: any } | { [key: string]: any }[] | ""

const Home = () => {
  const [sheetData, setSheetData] = useState<UnknownJSON>(sample)
  const [previousSheetData, setPreviousSheetData] =
    useState<UnknownJSON>(sample)

  const uploadHandler = async (files: FileList | null) => {
    const uploadedFile = files && files[0]

    const fileName = uploadedFile?.name

    if (fileName) {
      if (fileName.includes(".xlsx")) {
        const xlsxFile = await readXlsxFile(uploadedFile)
        setSheetData(convertXlsxToJson(xlsxFile))
      } else {
        const reader = new FileReader()
        reader.readAsText(uploadedFile)
        reader.onload = () => {
          const loadedFile = reader.result
          typeof loadedFile === "string" &&
            setSheetData(convertCsvToJson(loadedFile))
        }
      }
    }
  }

  const modifyUploadedData = (userGeneratedCode: string) => {
    const dataModifierFunctionBody = `
      const data = ${JSON.stringify(sheetData)}

      ${userGeneratedCode}
    `

    const dataModifierFunction = new Function(dataModifierFunctionBody)
    const newData = dataModifierFunction()
    setPreviousSheetData(sheetData)
    setSheetData(newData)
  }

  const undoLastChange = () => setSheetData(previousSheetData)

  return (
    <Container>
      <FileInputStyler htmlFor="file">Upload File</FileInputStyler>
      <InvisibleFileInput
        type="file"
        id="file"
        onChange={e => uploadHandler(e.target.files)}
      />
      <IconContext.Provider value={{ size: 22 }}>
        <FaUndo onClick={undoLastChange} style={{ cursor: "pointer" }} />
      </IconContext.Provider>
      <EditorWrapper>
        <JSONEditor modifyUploadedData={modifyUploadedData} />
        <JSONPreview json={JSON.stringify(sheetData, null, 2)} />
      </EditorWrapper>
      <SheetPreview
        sheetData={Array.isArray(sheetData) ? sheetData : [sheetData]}
      />
    </Container>
  )
}

export default Home
