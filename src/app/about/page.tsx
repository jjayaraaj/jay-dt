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
            I'm Jayaraj Elaraj. Innovating AI-Powered Digital Experiences as a Design
            Technologist
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hey there! I'm a Design Technologist with a passion for turning
              ideas into intelligent, interactive, and user-friendly experiences. My
              journey has been all about blending creativity with cutting-edge
              technology, from developing AI-enhanced prototypes to mastering
              front-end frameworks like React, Angular, and Vue.js, while
              integrating machine learning capabilities that make digital
              experiences smarter and more intuitive.
            </p>
            <p>
              One of my core strengths is building and scaling AI-driven design
              systems. I love the challenge of crafting adaptive design principles,
              intelligent visual styles, and component libraries that not only
              maintain brand integrity but also leverage AI to personalize user
              experiences and automate design decisions. It's all about making
              things consistent, efficient, predictive, and, of course, beautiful.
            </p>
            <p>
              I've also got a strategic side, thanks to an Advanced Management
              Program in Marketing from IIM Calcutta. This background, combined
              with my understanding of AI and data analytics, helps me bring a
              customer-centric approach powered by intelligent insights to
              everything I do whether it's designing a prototype that learns from
              user behavior or leading a team in implementing AI-powered solutions.
              I'm all about communication, collaboration, and making sure that
              every project leverages the full potential of artificial intelligence
              to hit the mark.
            </p>
            <p>
              When it comes to prototyping, I'm all about the details and the
              intelligence behind them. I use top-notch tools integrated with AI
              capabilities to create interactive, intuitive designs that not only
              feel right for the user but also adapt and improve based on user
              interactions. My goal? To make sure every click and swipe delivers a
              seamless, personalized experience that's as functional and
              intelligent as it is engaging.
            </p>
            <p>
              I'm passionate about exploring the intersection of AI and
              design from implementing chatbots and voice interfaces to creating
              adaptive layouts that respond to user preferences, and building
              recommendation systems that enhance user journeys. Whether it's
              natural language processing for better content experiences or
              computer vision for innovative interfaces, I bring AI thinking to
              every project.
            </p>
            <p>
              So whether it's leading a team in AI implementation, building an
              intelligent design system, or coding up a responsive interface with
              machine learning capabilities, I'm all in on creating the future of
              digital experiences.
            </p>
            <h4 className="text-2xl font-semibold italic">
              Let's create something amazing together!
            </h4>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/*             <SocialLink
              href="https://www.instagram.com/its_me_jayho/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink> */}
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
