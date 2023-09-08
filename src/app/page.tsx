import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col col-span-8 gap-8 min-h-[calc(100vh_-_128px)] justify-center">
        <h1 className="text-7xl font-bold -tracking-[0.022em] text-title">
          <span className="text-primary-500">Flux </span>Design Systems
        </h1>
        <div className="flex flex-col justify-center gap-1 -tracking-[0.019em] text-2xl text-base-300 leading-8">
          <div className="flex gap-2">
            <p>A components that create based on a </p>
            <Link
              href="https://tailwindcss.com/"
              className="flex items-center gap-2 text-base-25 hover-animation"
            >
              Tailwind CSS.
              <ArrowTopRightOnSquareIcon width={24} />
            </Link>
          </div>
          <p>
            Everything in it is free to use. This components has been Auto
            Layout, Variants, Variables, and supported for Dark Mode theme.
          </p>
        </div>
      </div>
    </div>
  );
}
