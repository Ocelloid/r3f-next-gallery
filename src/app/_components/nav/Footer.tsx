import { RxVercelLogo, RxInstagramLogo, RxGithubLogo } from "react-icons/rx";
import { SlSocialVkontakte } from "react-icons/sl";
import { SiHabr } from "react-icons/si";
import { LiaTelegram } from "react-icons/lia";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full flex-row flex-wrap justify-between gap-2 text-sm">
      <div className="flex flex-col gap-1">
        <Link
          href="#"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <p className="text-md min-w-5 font-bold">hh</p>
          HeadHunter
        </Link>
        <Link
          href="#"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <RxGithubLogo className="min-w-5" />
          GitHub
        </Link>
        <Link
          href="#"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <RxVercelLogo className="min-w-5" />
          Vercel
        </Link>
        <Link
          href="#"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <SiHabr className="min-w-5" />
          Habr
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <Link
          href="#"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <LiaTelegram className="min-w-5" />
          Telegram
        </Link>
        <Link
          href="#"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <SlSocialVkontakte className="min-w-5" />
          ВКонтакте
        </Link>
        <Link
          href="#"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <RxInstagramLogo className="min-w-5" />
          Instagram
        </Link>
      </div>
    </div>
  );
}
