import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools, Gadgets, and Recommendations"
      intro="People often ask me about the tools I use for software development, staying productive, or the gadgets I buy to feel productive, even when I'm just procrastinating. Here’s a comprehensive list of all my favorite items."
    >
      <div className="space-y-20">
        {/* <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working at planetary scale, every pixel
            you can get counts.
          </Tool>
          <Tool title="IBM Model M SSK Industrial Keyboard">
            They don’t make keyboards the way they used to. I buy these any time
            I see them go up for sale and keep them in storage in case I need
            parts or need to retire my main.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection> */}
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            Despite the abundance of advanced IDEs, Visual Studio Code stands
            out as the ultimate code editor with its balance of simplicity and
            powerful features. It's my go-to tool for coding, offering unmatched
            flexibility and a thriving ecosystem of extensions.
          </Tool>
          <Tool title="Cursor">
            In a world full of feature-rich development environments, Cursor
            remains unparalleled in its elegance and efficiency. It might not
            have every bell and whistle, but its intuitive interface and smooth
            operation make it the best choice for a seamless coding experience.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            I started using Figma as just a design tool but now it’s become my
            virtual whiteboard. Never would have expected the collaboration
            features to be the real hook.
          </Tool>
          <Tool title="Adobe Photoshop">
            I started using Adobe Photoshop primarily for editing images, but it
            has now become my go-to tool for creating intricate designs and
            graphics. The versatility and depth of features have made it
            indispensable for bringing my creative visions to life.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            I started using Notion for notes, its my go-to productivity tool for
            managing projects and tasks. Its flexible and makes collaboration
            easy.
          </Tool>
          <Tool title="FigJam">
            FigJam was just for brainstorming, but now it's the productivity
            tool I use where my ideas come to life. The real-time collaboration
            is a game-changer.
          </Tool>
          <Tool title="Confluence">
            Confluence place for documentation, the productivity tool I use for
            our team’s knowledge sharing. It keeps everyone on the same page
            effortlessly.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
