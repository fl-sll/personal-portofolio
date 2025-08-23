"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  ExternalLink,
  Download,
  Cpu,
  Boxes,
  Database,
  CircuitBoard,
  Box,
  Smartphone,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

// --- Simple helpers -------------------------------------------------------
const Container = ({ children, id }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium shadow-sm">
    {children}
  </span>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mb-10 text-center">
    {kicker && (
      <div className="mb-2 text-xs uppercase tracking-widest opacity-70">
        {kicker}
      </div>
    )}
    <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

// --- Data -----------------------------------------------------------------
const PROFILE = {
  name: "Edward Alvin Koesmanto",
  role: "Software Engineer",
  blurb:
    "I build reliable systems across IoT, ML, and backend—turning messy ideas into usable tools and clear docs.",
  location: "Jakarta, Indonesia",
  email: "mailto:edwardalvin@gmail.com",
  github: "https://github.com/fl-sll",
  linkedin: "https://www.linkedin.com/in/edwardalvinkoesmanto/",
  resume:
    "https://drive.google.com/file/d/1MDRXvSXFR9x5i2YGXqszsvZa9aHqoFGz/view?usp=sharing",
};

const SKILLS = [
  { icon: <Cpu className="w-4 h-4" />, label: "Python, C/C++, Java, Kotlin" },
  { icon: <Boxes className="w-4 h-4" />, label: "Docker, Compose, CI/CD" },
  {
    icon: <Database className="w-4 h-4" />,
    label: "PostgreSQL, Supabase, Kong",
  },
  {
    icon: <CircuitBoard className="w-4 h-4" />,
    label: "Raspberry Pi, MQTT, OTA",
  },
  { icon: <Box className="w-4 h-4" />, label: "Design Patterns, SOLID" },
  {
    icon: <Smartphone className="w-4 h-4" />,
    label: "Android (MLKit), Next.js",
  },
];

const PROJECTS = [
  {
    title: "IoTLabs",
    tags: ["Raspberry Pi", "PostgREST", "Next.js", "MQTT"],
    desc: "End‑to‑end IoT telemetry and ops: Telegraf ingestion → Postgres → PostgREST → Next.js dashboard with live device control & key rotation simulation.",
    link: "#",
  },
  {
    title: "BeeLangue",
    tags: ["Android", "MLKit", "OCR", "Translation"],
    desc: "Camera‑based object detection + instant translation with dynamic language selection and Espresso UI tests.",
    link: "#",
  },
  {
    title: "ZOOrk (C++)",
    tags: ["OOP", "Design Patterns", "CMake"],
    desc: "Text RPG showcasing Facade/Mediator/Command with clean separation of Items/Rooms/Actions and robust testing.",
    link: "#",
  },
  {
    title: "SWPhylogenetics",
    tags: ["Bioinformatics", "Biopython", "UPGMA", "NJ"],
    desc: "Sequence alignment (SW/NW), distance matrices, and tree building (UPGMA/NJ) with visual dendrograms.",
    link: "#",
  },
];

const EXPERIENCE = [
  {
    role: "Engineer (IoT/Backend/ML)",
    org: "Projects @ BINUS & Industry",
    time: "2023 — Present",
    bullets: [
      "Designed a multi‑service IoT stack: Supabase Postgres, Kong, OTAPlatform (FastAPI), HSM proxy, and Next.js UI.",
      "Built ML/NLP pipelines (BERT, TF‑IDF, Word2Vec) and evaluation tooling with confusion matrices & loss curves.",
      "Containerized services, automated setup scripts, and deployment to Raspberry Pi 4 with SIM‑modem connectivity.",
    ],
  },
];

const CONTACTS = [
  {
    href: PROFILE.github,
    label: "GitHub",
    icon: <SiGithub className="w-5 h-5" />,
  },
  {
    href: PROFILE.linkedin,
    label: "LinkedIn",
    icon: <SiLinkedin className="w-5 h-5" />,
  },
  { href: PROFILE.email, label: "Email", icon: <Mail className="w-5 h-5" /> },
];

// --- Components -----------------------------------------------------------
const Nav = ({ open, setOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link =
    "px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition";

  return (
    <div
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 ${
        scrolled ? "border-b" : ""
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-14">
          <a href="#home" className="font-semibold tracking-tight">
            {PROFILE.name}
          </a>
          <div className="hidden md:flex gap-1 items-center">
            <a className={link} href="#projects">
              Projects
            </a>
            <a className={link} href="#skills">
              Skills
            </a>
            <a className={link} href="#experience">
              Experience
            </a>
            <a className={link} href="#contact">
              Contact
            </a>
            <a
              className="ml-2 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium shadow-sm hover:bg-primary hover:text-primary-foreground transition"
              href={PROFILE.resume}
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            <a className={link} href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a className={link} href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
            <a
              className={link}
              href="#experience"
              onClick={() => setOpen(false)}
            >
              Experience
            </a>
            <a className={link} href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
            <a
              className="mt-2 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium shadow-sm hover:bg-primary hover:text-primary-foreground transition"
              href={PROFILE.resume}
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        )}
      </Container>
    </div>
  );
};

const Hero = () => (
  <div className="pt-24 pb-16">
    <Container id="home">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Pill>Based in {PROFILE.location}</Pill>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
            {PROFILE.role}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            {PROFILE.blurb}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium shadow-sm hover:bg-primary hover:text-primary-foreground transition"
              >
                {c.icon} <span>{c.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative aspect-[4/3] w-full rounded-3xl border overflow-hidden shadow-lg">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px p-px">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="bg-muted/40" />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest opacity-70">
                  Selected Stacks
                </p>
                <h3 className="mt-2 text-2xl font-bold">IoT • ML • Backend</h3>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {SKILLS.slice(0, 6).map((s, idx) => (
                    <Pill key={idx}>
                      <span className="mr-2">{s.icon}</span>
                      {s.label}
                    </Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </div>
);

const Projects = () => (
  <Container id="projects">
    <SectionTitle
      kicker="Work"
      title="Featured Projects"
      subtitle="A few things I built and shipped."
    />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((p) => (
        <motion.a
          key={p.title}
          href={p.link}
          className="group block rounded-2xl border overflow-hidden hover:shadow-lg transition shadow-sm"
          whileHover={{ y: -2 }}
        >
          <div className="aspect-video bg-gradient-to-br from-muted to-background" />
          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-lg group-hover:underline underline-offset-4">
                {p.title}
              </h3>
              <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs rounded-full border px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </Container>
);

const Skills = () => (
  <Container id="skills">
    <SectionTitle
      kicker="Toolkit"
      title="Skills & Stacks"
      subtitle="Technologies I use to design, build, and deploy."
    />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {SKILLS.map((s, i) => (
        <div key={i} className="rounded-xl border p-4 flex items-center gap-3">
          <div className="shrink-0">{s.icon}</div>
          <div className="font-medium">{s.label}</div>
        </div>
      ))}
    </div>
  </Container>
);

const Experience = () => (
  <Container id="experience">
    <SectionTitle
      kicker="Path"
      title="Experience"
      subtitle="Highlights of recent, relevant work."
    />
    <div className="grid gap-4">
      {EXPERIENCE.map((e, i) => (
        <div key={i} className="rounded-xl border p-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold">{e.role}</h3>
            <span className="text-muted-foreground">• {e.org}</span>
            <span className="ml-auto text-sm opacity-70">{e.time}</span>
          </div>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-muted-foreground">
            {e.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Container>
);

const Contact = () => (
  <Container id="contact">
    <SectionTitle
      kicker="Say hi"
      title="Contact"
      subtitle="Open to internships, research collabs, and build‑something‑cool projects."
    />
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 rounded-2xl border p-6">
        <h4 className="font-semibold">Drop a message</h4>
        <p className="text-sm text-muted-foreground mt-1">
          This mini form opens your email client.
        </p>
        <form className="mt-4" action={PROFILE.email}>
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              required
              className="w-full rounded-md border px-3 py-2"
              placeholder="Your name"
            />
            <input
              required
              className="w-full rounded-md border px-3 py-2"
              placeholder="Your email"
            />
          </div>
          <textarea
            required
            className="mt-3 w-full rounded-md border px-3 py-2 min-h-[120px]"
            placeholder="Tell me about your idea…"
          />
          <button
            className="mt-3 inline-flex items-center gap-2 rounded-md border px-4 py-2 font-medium hover:bg-primary hover:text-primary-foreground transition"
            type="submit"
          >
            <Mail className="w-4 h-4" /> Send
          </button>
        </form>
      </div>
      <div className="rounded-2xl border p-6">
        <h4 className="font-semibold">Elsewhere</h4>
        <div className="mt-3 grid gap-2">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-accent"
            >
              {c.icon} <span>{c.label}</span>
            </a>
          ))}
        </div>
        <a
          href={PROFILE.resume}
          className="mt-4 inline-flex items-center gap-2 rounded-md border px-3 py-2 font-medium hover:bg-primary hover:text-primary-foreground transition"
        >
          <Download className="w-4 h-4" /> Download Resume
        </a>
      </div>
    </div>
  </Container>
);

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <main className="min-h-screen antialiased">
      {/* gradient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-background via-background to-background" />

      <Nav open={open} setOpen={setOpen} />
      <Hero />
      <div className="space-y-20 pb-24">
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
      <footer className="border-t py-8">
        <Container>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Edward Alvin Koesmanto. Built with
            Next.js, Tailwind, and Motion.
          </p>
        </Container>
      </footer>
    </main>
  );
}
