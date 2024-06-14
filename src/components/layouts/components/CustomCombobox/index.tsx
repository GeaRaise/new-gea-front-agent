"use client"

import {
  Command,
  CommandGroup,
  CommandInputCustom,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useSuggetsFilter } from "@/hooks/useSuggestsFilter"
import type { Table } from "@tanstack/react-table"
import { usePathname, useRouter } from "next/navigation"
import { type Dispatch, type SetStateAction, useRef } from "react"
import { setTimeout } from "timers"

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
  const router = useRouter()
  const pathName = usePathname()

  const inputRef = useRef<HTMLInputElement>(null)

  const { filterInputChange, iputValue, isSuggest, filteredSuggests, handleKeyDown, setIsSuggest } =
    useSuggetsFilter({
      initValue: filtering,
      suggests,
      table,
    })

  return (
    <div className="relative">
      <Command shouldFilter={false} onKeyDown={handleKeyDown}>
        <CommandInputCustom
          ref={inputRef}
          placeholder={placeholder}
          value={iputValue}
          onValueChange={(value: string) => {
            filterInputChange(value)
            setFiltering(value)
          }}
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
                    router.push(`${pathName}/${suggest.key}`)
                  }}
                  onKeyDown={() => {
                    router.push(`${pathName}/${suggest.key}`)
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
