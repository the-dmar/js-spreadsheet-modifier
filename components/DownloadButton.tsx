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
  return (
    <DownloadButtonContainer>
      <DownloadButtonLabel>{label}</DownloadButtonLabel>
      <Image src="/download.svg" width={26} height={26} />
    </DownloadButtonContainer>
  )
}

export default DownloadButton
