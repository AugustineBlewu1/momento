import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

const FAQsPage = () => {
  return (
    <div className="w-full px-72 text-center mt-44">
      <div className="grid grid-cols-2 ">
        <div className="space-y-5">
          <h2 className="font-light text-3xl text-start tracking-wider">
            Frequently Asked <br />
            Questions about Momento .
          </h2>
          <Button className="flex items-center text-lg">
            Check More FAQ
            <ArrowUpRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="bg-white rounded-2xl p-6 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" >
              <AccordionTrigger className="text-2xl ">Momento is Bank?</AccordionTrigger>
              <AccordionContent className="text-start text-xl ">
               <strong>Momento</strong>  is not a bank but rather a payment institution
                supervised by the Banque de France (under the number CIB 16958).
                We enable companies (existing ones or those in the process of
                being registered) to benefit from a payment account and all the
                means of payment necessary for the smooth running of their
                business (physical and virtual cards, direct debits,
                international transfers, cheque deposits).
                <br className="pt-4" />
                The funds are partly
                "segregated" in the books of Credit Mutuel Arkea. The other part
                is invested in qualified money market funds, the units of which
                are held in the books of Societe Generale in accordance with our
                legal and regulatory obligations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" >
              <AccordionTrigger className="text-2xl ">Who can open a Momento Account</AccordionTrigger>
             
            </AccordionItem>
            <AccordionItem value="item-3" >
              <AccordionTrigger className="text-2xl ">   How do international payment work?
              </AccordionTrigger>
              <AccordionContent>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
