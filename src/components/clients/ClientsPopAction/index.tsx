import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getActions } from "@/utils/clients/actions"
import { MoreHorizontal } from "lucide-react"

/**
 *
 * @param statusId is_activeのステータスID
 * @param isLack 招待情報が不足しているかどうか true:不足している false:不足していない
 * @returns
 */
const ClientsPopAction = ({
  statusId,
  isLack = false,
}: { statusId: string | undefined; isLack?: boolean }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild={true}>
          <MoreHorizontal className="h-4 w-4 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {getActions({ statusId, isLack }).map((action) => (
            <DropdownMenuItem
              className={`transition-all ${
                action.label === "削除"
                  ? "text-primary focus:text-red-600"
                  : "text-geatextgray focus:text-geatext"
              }`}
              onClick={action.onClick}
            >
              {action.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default ClientsPopAction
