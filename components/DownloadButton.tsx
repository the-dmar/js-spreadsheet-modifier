import Image from "next/image"
import { UnknownJSON } from "../pages"
import {
  DownloadButtonContainer,
  DownloadButtonLabel,
} from "../styles/DownloadButton.styled"

interface DownloadButtonProps {
  sheetData: UnknownJSON
  label: string
}

const DownloadButton = ({ sheetData, label }: DownloadButtonProps) => {
  const downloadHandler = () => {
    if (Array.isArray(sheetData)) {
      const headers = sheetData[0].flatMap(obj => Object.keys(obj)).join(",")
      const cellValues = sheetData
        .map(row => row.flatMap(obj => Object.values(obj)).join(","))
        .join("\n")

      const csv = `${headers}\n${cellValues}`
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
      const url = URL.createObjectURL(blob)

      const pom = document.createElement("a")
      pom.href = url
      pom.setAttribute("download", `test.csv`)
      pom.click()
    }
  }

  return (
    <DownloadButtonContainer onClick={downloadHandler}>
      <DownloadButtonLabel>{label}</DownloadButtonLabel>
      <Image src="/download.svg" width={26} height={26} />
    </DownloadButtonContainer>
  )
}

export default DownloadButton
