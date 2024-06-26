"use client"

import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react"
import { useState } from "react"
import { useCSVReader } from "react-papaparse"

type PropsType = {
  uploadAccepted: (data: []) => void
  downloadUrl: string
  downloadFileName: string
}

const ImportCSVReader = (props: PropsType) => {
  const { uploadAccepted, downloadFileName, downloadUrl } = props
  const { CSVReader } = useCSVReader()
  const [isError, setIsError] = useState(false)
  return (
    <div className="mb-5">
      <CSVReader
        onUploadAccepted={(results: { data: []; error: []; meta: [] }) => {
          if (results.data) {
            uploadAccepted(results.data)
          }
          if (results.error) {
            setIsError(true)
          }
        }}
      >
        {({ getRootProps, acceptedFile }: any) => (
          <>
            <div>
              <div className="w-full py-8 bg-[#F7F8FB] rounded-sm" {...getRootProps()}>
                <p className="text-center">
                  指定フォーマットのCSVファイルをドラッグ＆ドロップまたは
                </p>
                <div className="flex justify-center mt-5 ">
                  <Button className="bg-white text-geatext border border-[#A8A8A8]" type="button">
                    ファイルを選択
                  </Button>
                </div>
                {isError && (
                  <div className="text-center text-sm text-primary mt-5 whitespace-pre-wrap">
                    ※正常にデータ処理ができませんでした。
                    <br />
                    再度、データ内容・形式をご確認の上、アップロードを行ってください
                  </div>
                )}
                {acceptedFile && (
                  <div className="flex justify-center mt-5 text-[#A8A8A8]">
                    <span>{acceptedFile.name}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </CSVReader>
      <div className="flex items-center gap-3 text-sm text-[#A8A8A8] mt-2 justify-end">
        <DownloadIcon />
        <a href={downloadUrl} download={downloadFileName}>
          CSVフォーマットダウンロード
        </a>
      </div>
    </div>
  )
}

export default ImportCSVReader
