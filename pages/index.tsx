import { useRef } from "react"
import readXlsxFile from "read-excel-file"

const Home = () => {
  const uploadRef = useRef<HTMLInputElement | null>(null)

  const uploadHandler = async (files: FileList | null) => {
    const uploadedFile = files && files[0]
    console.log(uploadedFile)
  }

  return (
    <input
      type="file"
      onChange={e => uploadHandler(e.target.files)}
      ref={uploadRef}
    />
  )
}

export default Home
