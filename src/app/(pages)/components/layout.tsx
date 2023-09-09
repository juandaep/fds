import Sidebar from "@/components/sidebar/Sidebar";
import { Provider } from "@/components/themeswitch/ThemeProvider";

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
