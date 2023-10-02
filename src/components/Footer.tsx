import { classNames } from "@/utils/classNames";
import { HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { memo } from "react";

const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className="container mx-auto max-w-7xl px-12 pb-12">
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
          Powered by{" "}
          <div className="inline-flex items-center space-x-2">
            <span>
              <Link href="https://reactjs.org/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/juandaep/Icons@master/devicons/react.svg"
                  width="26"
                  title="React"
                />
              </Link>
              <span className="sr-only">React</span>
            </span>
            <span>
              <Link href="https://nextjs.org/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/juandaep/Icons@master/devicons/nextjs.svg"
                  width="40"
                  className="dark:invert"
                  title="NextJS"
                />
              </Link>
              <span className="sr-only">NextJS</span>
            </span>
            <span>
              <Link href="https://www.typescriptlang.org/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/juandaep/Icons@master/devicons/typescript.svg"
                  width="26"
                  title="Typescript"
                />
              </Link>
              <span className="sr-only">Typescript</span>
            </span>
            <span>
              <Link href="https://tailwindcss.com/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/juandaep/Icons@master/devicons/tailwindcss.svg"
                  width="26"
                  title="TailwindCSS"
                />
              </Link>
              <span className="sr-only">TailwindCSS</span>
            </span>
          </div>
        </div>
        <div className="flex items-center text-xs ">
          &copy; {year} Made with{" "}
          <HeartIcon className="mx-1 h-5 w-5 animate-pulse fill-red-600" />
          <a
            href="mailto:juandaesaputra@gmail.com"
            className={classNames(
              "font-medium text-neutral-500 transition-all",
              "hover:text-neutral-700",
              "dark:hover:text-neutral-300",
            )}
          >
            Juanda Esa Putra.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
