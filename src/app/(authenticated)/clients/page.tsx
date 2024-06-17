import { CompaniesBody } from "@/components/clients"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { COMPANIES_TITLE } from "@/constants/meta"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
  title: COMPANIES_TITLE,
}
/**
 * 顧問先管理ページ
 */
const CompaniesPage: NextPage = () => {
  return (
    <>
      <CompaniesBody />
      <Dialog>
        <DialogTrigger asChild={true}>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly={true}
              />
            </div>
          </div>
          <DialogFooter className="flex justify-center items-center flex-col">
            <DialogClose asChild={true}>
              <Button type="button" variant="ghost">
                前の画面に戻る
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CompaniesPage
