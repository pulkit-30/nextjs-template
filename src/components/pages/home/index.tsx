import Image from 'next/image';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import Auth from '@/components/auth';
import Icons from '@/components/common/icons';
import AnimatedShinyText from '@/components/ui/animated-shiny-text';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import * as m from '@/paraglide/messages';

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <section
      className="flex size-full flex-col items-center justify-between gap-20 p-10 pb-32"
      data-testid="home-page"
    >
      <div className="flex flex-col items-center justify-between">
        <div className="group w-fit rounded-full border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ {m.home_chip()}</span>
          </AnimatedShinyText>
        </div>
        <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text py-4 text-center text-7xl font-semibold leading-none text-transparent last:text-blue-500 sm:text-8xl dark:from-white dark:to-slate-900/10">
          {m.homeHeading()}
        </div>
        <div className="text-2xl font-bold">
          {session && <div>Hi! {session.user?.name}</div>}
        </div>
        <div className="mx-auto w-full">
          <Auth />
        </div>
      </div>
      <div className="mx-auto mt-5 w-full overflow-hidden rounded-md border object-cover shadow-2xl shadow-gray-900 md:w-10/12">
        <Image
          alt="here-image"
          src="/assets/ide-ss.png"
          height={1215}
          width={2048}
          className="hidden dark:block"
          loading="lazy"
          placeholder="blur"
          blurDataURL="/assets/placeholder.png"
        />
        <Image
          alt="here-image"
          src="/assets/ide-ss-light.png"
          height={1215}
          width={2048}
          className="dark:hidden"
          loading="lazy"
          placeholder="blur"
          blurDataURL="/assets/placeholder.png"
        />
      </div>

      <div className="mx-auto flex flex-wrap items-center justify-center gap-14 text-gray-500 grayscale">
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Icons.nextjs className="size-10" />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Next.js</TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Icons.tailwindcss className="size-10" />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Tailwind CSS</TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Icons.prisma className="size-10" />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Prisma</TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Icons.nextAuth className="size-10" />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>NextAuth.js</TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Icons.playwright className="size-10" />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Playwright</TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Icons.jest className="size-10" />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Jest</TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Icons.storybook className="size-10" />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Storybook</TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Icons.stripe className="size-10" />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Stripe</TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Icons.docker className="size-10" />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Docker</TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Icons.k8s className="size-10" />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Kubernetes</TooltipContent>
        </Tooltip>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Icons.vercel className="size-10" />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>Vercel</TooltipContent>
        </Tooltip>
      </div>
    </section>
  );
};

export default HomePage;
