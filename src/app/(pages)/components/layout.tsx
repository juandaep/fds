import Sidebar from "@/components/sidebar/Sidebar";
import { Provider } from "@/components/themeswitch/Provider";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <Sidebar />
        {children}
    </Provider>
  );
}
