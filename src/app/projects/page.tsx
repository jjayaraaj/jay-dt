import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logSting from '@/images/logos/sting.svg'
import logotailwind from '@/images/logos/tailwind.svg'

const projects = [
  {
    name: 'High-Fidelity Prototype: Revamping Chargebee',
    description:
      'Developed a high-fidelity prototype for the Chargebee 2.0 app to enhance user experience and interface design, resulting in a 30% increase in user engagement.',
    link: {
      href: '/projects/high-fidelity-prototype-revamping-chargebee',
      label: '',
    },
    logo: logoPlanetaria,
  },
  {
    name: 'Sting UI Design System: Enhancing Consistency',
    description:
      'Built a comprehensive React Design System Library to standardize UI components and streamline development, improving design consistency and reducing development time by 35%.',
    link: {
      href: '/projects/sting-ui-design-system-react-and-vue',
      // label: 'github.com',
    },
    logo: logSting,
  },
  {
    name: 'Rebranding: Transforming Chargebee product Identity',
    description:
      'Led the rebranding project for Chargebee involved a comprehensive transformation of the entire Chargebee app and ecosystem. ',
    link: {
      href: '/projects/rebranding-transforming-digital-dentity',
      label: 'github.com',
    },
    logo: logoPlanetaria,
  },
  {
    name: 'Tailwind CSS Plugin: Streamlining Development',
    description:
      'Created a custom Tailwind CSS plugin to improve styling consistency and development efficiency, reducing development time by 25%.',
    link: {
      href: '/projects/achieving-multi-product-unified-experience',
      label: 'github.com',
    },
    logo: logotailwind,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects That Showcase My Passion for Making an Impact"
      intro="Throughout my career, I’ve tackled a bunch of projects, but these are the ones I’m most proud of. Each one is a testament to my dedication to merging design and technology to create truly standout user experiences."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            {/* <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p> */}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
