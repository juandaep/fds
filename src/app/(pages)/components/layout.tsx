import Sidebar from "@/components/sidebar/Sidebar";
import { menuItems } from "@/components/sidebar/sidebarNavLinks";
import { Provider } from "@/components/themeswitch/Provider";

export default function PagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <Sidebar menuItems={menuItems} />
      <section className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16 mt-10">
        {/* Include shared UI here e.g. a header or sidebar */}
        <div className="w-full">{children}</div>
      </section>
    </Provider>
  );
}
