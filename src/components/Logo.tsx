import { classNames } from "@/utils/classNames";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className={classNames(
        "relative inset-0 h-[18px] w-[60px]",
        "lg:h-[32px] lg:w-[96px]",
      )}
    >
      <svg viewBox="0 0 96 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 23.6196V0H20.5724V4.28005H6.25239V10.2721H18.5555V14.5522H6.25239V23.6196H0Z"
          className="fill-primary-500 transition-colors delay-150 duration-100 ease-in dark:fill-primary-25"
        />
        <path
          d="M22.8278 23.6196V0H29.0802V19.3395H41.7867V23.6196H22.8278Z"
          className="fill-primary-500 transition-colors delay-200 duration-150 ease-in dark:fill-primary-25"
        />
        <path
          d="M55.1928 24C52.8263 24 50.7153 23.609 48.8597 22.8269C47.0042 22.0449 45.5385 20.9775 44.4629 19.6248C43.4141 18.251 42.8897 16.6975 42.8897 14.9643V0H49.1421V14.6473C49.1421 15.5773 49.3975 16.4227 49.9085 17.1836C50.4463 17.9234 51.1724 18.5046 52.0867 18.9273C53.0011 19.3501 54.0364 19.5614 55.1928 19.5614C56.376 19.5614 57.4114 19.3501 58.2988 18.9273C59.2131 18.5046 59.9258 17.9234 60.4367 17.1836C60.9745 16.4227 61.2435 15.5773 61.2435 14.6473V0H67.4959V14.9643C67.4959 16.6975 66.958 18.251 65.8823 19.6248C64.8336 20.9775 63.3814 22.0449 61.5258 22.8269C59.6703 23.609 57.5593 24 55.1928 24Z"
          className="fill-primary-500 transition-colors delay-300 duration-200 ease-in dark:fill-primary-25"
        />
        <path
          d="M69.3769 23.6196L79.2194 11.7939L69.3769 0H76.5571L84.4633 9.44782H80.9539L88.8198 0H96L86.1979 11.7939L96 23.6196H88.8198L80.9539 14.14L84.4633 14.1717L76.5571 23.6196H69.3769Z"
          className="fill-primary-500 transition-colors delay-300 duration-300 ease-in dark:fill-primary-25"
        />
      </svg>
    </Link>
  );
};
