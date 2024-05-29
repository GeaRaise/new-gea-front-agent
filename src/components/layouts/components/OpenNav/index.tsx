import { NavLinkButton } from "@/components/elements";
import { HomeIcon } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OpenNav = () => {
  return (
    <Accordion type="single" collapsible={true}>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center gap-5">
            <HomeIcon />
            基本情報管理
          </div>
        </AccordionTrigger>
        <AccordionContent className="">
          <NavLinkButton href="companies">顧問先管理</NavLinkButton>
        </AccordionContent>
        <AccordionContent>
          <NavLinkButton href="usersmanagement">所内担当者管理</NavLinkButton>
        </AccordionContent>
        <AccordionContent>
          <NavLinkButton href="relations">顧問先の所内担当者設定</NavLinkButton>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default OpenNav;
