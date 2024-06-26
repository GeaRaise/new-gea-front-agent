"use client"

import { SubmitButton } from "@/components/elements"
import { DownloadIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useCSVReader } from "react-papaparse"

const ClientsCSVReader = () => {
  const { CSVReader } = useCSVReader()
  const [isError, setIsError] = useState(false)
  const [importData, setImportData] = useState([])

  return (
    <form action="" className="w-2/3">
      <CSVReader
        onUploadAccepted={(results: { data: []; error: []; meta: [] }) => {
          if (results.data) {
            const newData = results.data.filter(
              (item: [], index) => index !== 0 && item.length >= 4,
            )
            console.log(newData, "newData")

            setImportData(newData)
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
        <a
          href="/csv/clients_invite_format.csv"
          download="CSVデータサンプル_顧問先一括データインポート_GEAREACH.csv"
        >
          CSVフォーマットダウンロード
        </a>
      </div>
      <div className="text-center mt-10">
        <SubmitButton
          type="button"
          className="disabled:text-white disabled:bg-[#979797] text-white"
          variant={"secondary"}
          size={"lg"}
          disabled={importData.length > 0 && !isError ? false : true}
        >
          顧問先を招待する
        </SubmitButton>
      </div>
    </form>
  )
}

export default ClientsCSVReader
