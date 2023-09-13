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
          <ul>
            {sidebarMenuItems.map((item, index) => (
              <li key={index}>
                {"title" in item ? (
                  <Link
                    href={item.href}
                    passHref
                    className={
                      pathname === item.href ? "text-amber-400" : "text-white"
                    }
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div>
                    <p className="">{item.type}</p>
                    <ul>
                      {item.menu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            passHref
                            className={
                              pathname === subItem.href
                                ? "text-amber-400"
                                : "text-white"
                            }
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
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
