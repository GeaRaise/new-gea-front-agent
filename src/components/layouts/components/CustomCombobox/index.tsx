"use client"

import {
  Command,
  CommandGroup,
  CommandInputCustom,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import type { Table } from "@tanstack/react-table"
import { type Dispatch, type SetStateAction, useCallback, useEffect, useRef, useState } from "react"

type PropsType<TData> = {
  filtering: string
  setFiltering: Dispatch<SetStateAction<string>>
  table: Table<TData>
  placeholder: string
  suggests: { key: string; value: string }[]
}
const CustomCombobox = <TData,>({
  filtering,
  setFiltering,
  table,
  placeholder,
  suggests,
}: PropsType<TData>) => {
  const [iputValue, setInputValue] = useState<string>(filtering)

  const [isSuggest, setIsSuggest] = useState(false)

  const [filteredSuggests, setFilteredSuggests] = useState<{ key: string; value: string }[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  /**
   * 入力値を元にサジェストのフィルターを行う
   * @param value 入力値
   */
  const filterInputChange = (value: string) => {
    setFiltering(value)
    setInputValue(value)

    if (value === "") {
      setIsSuggest(false)
      return
    }

    if (table.getColumn("id")?.getFilterValue() || value === "") {
      table.getColumn("id")?.setFilterValue("")
      return
    }

    if (value !== "") {
      const filtered = suggests.filter((suggest) => suggest.value.includes(value))
      setFilteredSuggests(filtered)
      setIsSuggest(true)
    }
  }
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

  return (
    <div className="relative">
      <Command shouldFilter={false} onKeyDown={handleKeyDown}>
        <CommandInputCustom
          ref={inputRef}
          placeholder={placeholder}
          value={iputValue}
          onValueChange={(value) => filterInputChange(value)}
          onBlur={() => {
            setTimeout(() => {
              setIsSuggest(false)
            }, 200)
          }}
          className="h-9 placeholder:text-xs placeholder:text-[#A8A8A8]"
        />
        {isSuggest && filteredSuggests.length > 0 ? (
          <CommandList className="absolute max-h-[300px] overflow-y-auto w-full rounded-3xl bg-[#F7F8FB] z-50 top-full">
            <CommandGroup>
              {filteredSuggests.map((suggest) => (
                <CommandItem
                  className="cursor-pointer rounded-3xl"
                  key={suggest.key}
                  onSelect={() => {
                    setFiltering("")
                    setInputValue(suggest.value.toString())
                    table.getColumn("id")?.setFilterValue(suggest.key.toString())
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setFiltering("")
                      setInputValue(suggest.value.toString())
                      table.getColumn("id")?.setFilterValue(suggest.key.toString())
                    }
                  }}
                >
                  「{suggest.value}」表示
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        ) : (
          <CommandList></CommandList>
        )}
      </Command>
    </div>
  )
}

export default CustomCombobox
