"use client";
import {
  extendSnippet,
  globalsSnippet,
  styleSnippet,
  tailwindSnippet,
  useSnippet,
} from "@/assets/codeSnippets";
import Install from "@/components/Install";
import HomeGraphic from "@/assets/HomeGraphic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "kiso-core/accordion";
import { Button } from "kiso-core/button";
import { BookOpen, Clipboard, Github, Instagram } from "lucide-react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Avatar, AvatarFallback, AvatarImage } from "kiso-core/avatar";
import { motion } from "framer-motion";
import DotBlock from "@/assets/DotBlock";

const MotionAvatar = motion(Avatar);

export default function Home() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <main>
      <HomeGraphic className="absolute left-0 top-[527px] -z-10 w-screen min-w-[1440px]" />
      <section id="home" className="min-h-[1265px] relative">
        <div className="flex flex-col justify-center items-center pt-28 sm:pt-[21rem]">
          <div className="max-w-2xl mx-auto flex flex-col text-center">
            <div className="text-xs text-muted-foreground mb-1">
              「 foundation/basis 」
            </div>
            <div className="text-5xl">基礎</div>
            <h1 className="text-9xl">kiso</h1>
            <p className="text-muted-foreground text-lg sm:text-xl font-medium">
              A modern, customizable, and highly flexible component library for
              React applications built with reusability and the end user in
              mind.
            </p>
            <div className="flex flex-row justify-between items-center gap-6 self-center mt-8 ">
              <a className="w-[167px]" href="/#installation">
                <Button className="w-full">Get Started</Button>
              </a>
              <Link
                className="w-[167px]"
                href="https://bendigiorgio.github.io/kiso"
              >
                <Button
                  className="items-center w-full flex flex-row space-x-2"
                  variant="secondary"
                >
                  <span>Documentation</span>{" "}
                  <BookOpen className="stroke-[1px]" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 relative">
        <ol className="relative">
          <Install />

          <li className="grid xl:grid-cols-2 grid-cols-1 gap-4 w-full mt-4 pl-6 sm:pl-16 md:pl-28 pb-12 relative">
            <div className="flex flex-col pt-24 space-y-5 md:min-w-[540px]">
              <h3 className="text-5xl font-semibold">Configure TailwindCSS</h3>
              <p className="text-muted-foreground">
                Update your globals.css and tailwind.config.ts.
              </p>
              <Accordion type="multiple">
                <AccordionItem value="tailwindcss">
                  <AccordionTrigger>tailwind.config.ts</AccordionTrigger>
                  <AccordionContent className="overflow-y-scroll h-72 relative">
                    <Button
                      onClick={() => copyToClipboard(tailwindSnippet)}
                      className="absolute right-2 top-4"
                      variant="outline"
                      size="icon"
                    >
                      <Clipboard />
                    </Button>
                    <SyntaxHighlighter
                      language="tsx"
                      style={coldarkDark}
                      customStyle={{
                        background: "black",
                        height: "fit-content",
                      }}
                    >
                      {tailwindSnippet}
                    </SyntaxHighlighter>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="globals">
                  <AccordionTrigger>globals.css</AccordionTrigger>
                  <AccordionContent className="overflow-y-scroll h-72 relative">
                    <Button
                      onClick={() => copyToClipboard(globalsSnippet)}
                      className="absolute right-2 top-4"
                      variant="outline"
                      size="icon"
                    >
                      <Clipboard />
                    </Button>
                    <SyntaxHighlighter
                      language="css"
                      style={coldarkDark}
                      customStyle={{
                        background: "black",
                        height: "fit-content",
                      }}
                    >
                      {globalsSnippet}
                    </SyntaxHighlighter>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="xl:pt-48 pt-8"></div>
            <div className="absolute left-0 h-full overflow-hidden grid-cols-2 auto-cols-min grid">
              <div className="relative w-2 h-full">
                <div className="rounded-full bg-foreground h-2 w-2 mt-1" />
                <div className="h-full border-l border-foreground left-1/2 -translate-x-1/2 absolute top-8" />
              </div>
              <span className="font-light tracking-wide text-xs">STEP 02</span>
            </div>
          </li>

          <li className="grid xl:grid-cols-2 grid-cols-1 gap-4 w-full mt-4 pl-6 sm:pl-16 md:pl-28 pb-12 relative">
            <div className="flex flex-col pt-24 space-y-5 md:min-w-[540px]">
              <h3 className="text-5xl font-semibold ">Use in your project.</h3>
              <p className="text-muted-foreground">
                Take advantage of tree splitting to minimise the Javascript sent
                to the end-user.
              </p>
              <SyntaxHighlighter
                language="tsx"
                style={coldarkDark}
                customStyle={{
                  background: "black",
                  width: "fit-content",
                  height: "fit-content",
                  maxWidth: "80vw",
                }}
              >
                {useSnippet}
              </SyntaxHighlighter>
            </div>
            <div className="xl:pt-48 pt-8 flex flex-col justify-center items-center">
              <Button className="w-fit">Add to cart</Button>
            </div>
            <div className="absolute left-0 h-full overflow-hidden grid-cols-2 auto-cols-min grid">
              <div className="relative w-2 h-full">
                <div className="rounded-full bg-foreground h-2 w-2 mt-1" />
                <div className="h-full border-l border-foreground left-1/2 -translate-x-1/2 absolute top-8" />
              </div>
              <span className="font-light tracking-wide text-xs">STEP 03</span>
            </div>
          </li>

          <li className="grid xl:grid-cols-2 grid-cols-1 gap-4 w-full mt-4 pl-6 sm:pl-16 md:pl-28 pb-12 relative">
            <div className="flex flex-col pt-24 space-y-5 md:min-w-[540px]">
              <h3 className="text-5xl font-semibold ">Extend components.</h3>
              <p className="text-muted-foreground">
                Take advantage of tree splitting to minimise the Javascript sent
                to the end-user.
              </p>
              <SyntaxHighlighter
                language="tsx"
                style={coldarkDark}
                customStyle={{
                  background: "black",
                  width: "fit-content",
                  maxWidth: "80vw",

                  height: "fit-content",
                }}
              >
                {extendSnippet}
              </SyntaxHighlighter>
            </div>
            <div className="xl:pt-48 pt-8 flex flex-col justify-center items-center">
              <MotionAvatar
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360, 0],
                  borderRadius: ["50%", "20%", "50%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="h-24 w-24"
              >
                <AvatarImage src="https://cdn.midjourney.com/d04e1165-c3a9-4983-8513-e25e2fdba946/0_0.png" />
                <AvatarFallback>BD</AvatarFallback>
              </MotionAvatar>
            </div>
            <div className="absolute left-0 h-full overflow-hidden grid-cols-2 auto-cols-min grid">
              <div className="relative w-2 h-full">
                <div className="rounded-full bg-foreground h-2 w-2 mt-1" />
                <div className="h-full border-l border-foreground left-1/2 -translate-x-1/2 absolute top-8" />
              </div>
              <span className="font-light tracking-wide text-xs">STEP 04</span>
            </div>
          </li>

          <li className="grid xl:grid-cols-2 grid-cols-1 gap-4 w-full mt-4 pl-6 sm:pl-16 md:pl-28 pb-12 relative">
            <div className="flex flex-col pt-24 space-y-5 md:min-w-[540px]">
              <h3 className="text-5xl font-semibold ">Style components.</h3>
              <p className="text-muted-foreground">
                Add custom styling to components with TailwindCSS.
              </p>
              <SyntaxHighlighter
                language="tsx"
                style={coldarkDark}
                customStyle={{
                  background: "black",
                  width: "fit-content",
                  height: "fit-content",
                  maxWidth: "80vw",
                }}
              >
                {styleSnippet}
              </SyntaxHighlighter>
            </div>
            <div className="xl:pt-48 pt-8 flex flex-col justify-center items-center">
              <Button className="w-fit hover:scale-150 transition-all">
                Add to cart
              </Button>
            </div>
            <div className="absolute left-0 h-full overflow-hidden grid-cols-2 auto-cols-min grid">
              <div className="relative w-2 h-full">
                <div className="rounded-full bg-foreground h-2 w-2 mt-1" />
              </div>
              <span className="font-light tracking-wide text-xs">STEP 05</span>
            </div>
          </li>
        </ol>
        <div className="absolute -left-32 -bottom-32 -z-10">
          <DotBlock className="w-[500px] h-[500px]" />
        </div>
      </section>
      <section id="next" className="pl-6 sm:pl-16 md:pl-28 pb-24 flex flex-col">
        <h3 className="text-6xl xs:text-7xl font-semibold">
          What&apos;s next?
        </h3>
        <p className="text-muted-foreground max-w-xl sm:text-base text-sm lg:ml-64 mt-2">
          Continually improving with new components, utilities, animations,
          etc... As the frontend landscape changes Kiso will also update to
          continue to work with the latest tools.
        </p>
        <div className="flex flex-col max-w-xl pt-24">
          <p className="text-5xl font-semibold max-w-lg">
            Next.JS & React Server Components
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Currently Kiso&apos;s components ship with the “use client”
            directive for components which require the client-side.
          </p>
          <p className="text-muted-foreground text-sm">
            Depending on your implementation of some components you may to add
            these directives to your code locally.
          </p>
          <p className="mt-3">
            User&apos;s who aren&apos;t using server components need not worry
            and can use the components as-is without removing “use client”.
          </p>
        </div>
        <div className="pt-24 max-w-xl">
          <div className="flex flex-row space-x-4">
            <Link href="https://github.com/bendigiorgio/kiso">
              <Button size="icon" variant="outline">
                <Github className="stroke-[1px]" />
              </Button>
            </Link>
            <Link href="https://www.instagram.com/ben_digiorgio/">
              <Button size="icon" variant="outline">
                <Instagram className="stroke-[1px]" />
              </Button>
            </Link>
          </div>
          <p className="text-xl font-medium mt-4">
            Have any ideas for new components/features?
          </p>
          <p className="text-muted-foreground mt-2">
            Let me know! Feel free to get in contact with ideas, feedback or
            even just to chat.
          </p>
          <Link href="https://github.com/bendigiorgio/kiso">
            <Button className="p-0 h-fit" variant="link">
              https://github.com/bendigiorgio/kiso
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
