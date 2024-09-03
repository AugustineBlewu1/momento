import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, IdCardIcon, Notebook, NotebookPen } from "lucide-react";

const TabsPage = () => {
  return (
    <>
      <Tabs defaultValue="account" className="w-[600px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account" className="rounded-2xl gap-4"> <CreditCard/> Business account</TabsTrigger>
          <TabsTrigger value="invoice " className="rounded-2xl gap-4"> <Notebook/> Invoice management</TabsTrigger>
          <TabsTrigger value="bookeeping" className="rounded-2xl gap-4"> <NotebookPen/> Book keeping & reporting</TabsTrigger>
        </TabsList>
        {/* <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        </TabsContent> */}
      </Tabs>
    </>
  );
};

export default TabsPage;
