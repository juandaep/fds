import Sidebar from "@/components/sidebar/Sidebar";
import { Provider } from "@/components/themeswitch/Provider";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <div className="grid grid-cols-12">
        <Sidebar />
        {children}
      </div>
    </Provider>
  );
}
