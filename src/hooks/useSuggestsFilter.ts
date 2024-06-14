import type { Table } from "@tanstack/react-table"
import { useCallback, useEffect, useRef, useState } from "react"

/**
 * サジェストのフィルターを行う
 * @param initValue 入力エリア初期値
 * @param suggests サジェストリスト
 * @param table テーブル情報
 * @returns
 */

export const useSuggetsFilter = <TData>({
  initValue,
  suggests,
  table,
}: { table: Table<TData>; initValue: string; suggests: { key: string; value: string }[] }) => {
  const [iputValue, setInputValue] = useState<string>(initValue)
  const [isSuggest, setIsSuggest] = useState(false)
  const [filteredSuggests, setFilteredSuggests] = useState<{ key: string; value: string }[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  /**
   * 入力値を元にサジェストのフィルターを行う
   * @param value 入力値
   */
  const filterInputChange = (value: string) => {
    setInputValue(value)

    if (value === "") {
      setIsSuggest(false)
      table.getColumn("id")?.setFilterValue("")
      return
    }

    if (value !== "") {
      const filtered = suggests.filter((suggest) => suggest.value.includes(value))
      setFilteredSuggests(filtered)
      setIsSuggest(true)
    }
  }

  /**
   * キーボード操作時の処理
   */
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current
    if (input) {
      if (e.key === "Escape") {
        input.blur()
      }
    }
  }, [])

  useEffect(() => {
    setFilteredSuggests(suggests)
  }, [])

  return { isSuggest, setIsSuggest, iputValue, filteredSuggests, filterInputChange, handleKeyDown }
}
