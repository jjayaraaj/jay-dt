import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import jayImage from '@/images/jay.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I am Jayaraj, a Design Technologist specializing in prototype development, front-end frameworks, and design systems',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={jayImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Jayaraj Elaraj. Innovating Digital Experiences as a Design
            Technologist
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am a Design Technologist with expertise in prototype
              development, front-end frameworks, design systems, and leadership.
              I have also completed an Advance Management Program in Marketing
              from the Indian Institute of Management, Calcutta.
            </p>
            <p>
              As a leader, I have managed design technology teams and fostered a
              culture of collaboration and high performance. I value
              communication and teamwork, which helps me to achieve success in
              projects.
            </p>
            <p>
              I specialise in Design System Development, which involves crafting
              design principles, visual styles, and component libraries to
              ensure the quality of projects. This not only maintains brand
              integrity but also speeds up the design and development process.
            </p>
            <p>
              With my marketing background, I bring a strategic mindset and a
              knack for customer-centric design. I create prototypes that cater
              to user needs and business goals to deliver exceptional user
              experiences.
            </p>
            <p>
              My specialty is creating interactive prototypes that are
              user-friendly and easy to use. I pay attention to the nitty-gritty
              details and use top-notch prototyping tools to ensure the final
              product is a user-centric masterpiece.
            </p>

            <p>
              I am proficient in front-end frameworks like React, Angular, and
              Vue.js. I can craft responsive and user-friendly interfaces that
              enhance the overall user experience.
            </p>
            <h4 className="text-2xl font-semibold italic">
              Let's work together to create cool things!
            </h4>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/its_me_jayho/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/jjayaraaj"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/jjayaraaj/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:jjayaraaj@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jjayaraaj@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
