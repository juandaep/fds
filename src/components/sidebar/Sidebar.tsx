"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarMenuItems } from "./sidebarNavLinks";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden relative z-10 lg:block lg:col-span-2 mt-8 pr-4">
      <nav className="lg:fixed lg:top-20 mt-2 z-0 lg:h-[calc(100vh-121px)]">
        <div
          className="flex flex-col gap-4 scrollbar-hide lg:overflow-y-scroll lg:max-h-[calc(100vh_-_64px)] pb-28"
          tabIndex={0}
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, #000 100px, #000 100%, transparent 100%)",
          }}
        >
          <ul className="flex flex-col gap-4 mt-4 scrollbar-hide pb-24">
          {sidebarMenuItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-3"
            >
              {"title" in item ? (
                <Link
                  href={item.href}
                  passHref
                  className={
                    pathname === item.href
                      ? "text-amber-400"
                      : "text-default-500"
                  }
                >
                  {item.title}
                </Link>
              ) : (
                <>
                  <p className="text-default-500">{item.type}</p>
                  {item.menu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.href}
                        passHref
                        className={`before:block before:w-1 before:h-1 before:rounded-full flex items-center justify-start gap-3 pl-4 ${
                          pathname === subItem.href
                            ? "before:bg-amber-400 text-amber-400"
                            : "before:bg-default-500 text-default-500"
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
