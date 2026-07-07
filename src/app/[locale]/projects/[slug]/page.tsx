import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { projectDetails, projectSlugs } from "../../../data/projectDetails";

export function generateStaticParams() {
    const locales = ["ko", "en"];
    const params: { locale: string; slug: string }[] = [];
    for (const locale of locales) {
        for (const slug of projectSlugs) {
            params.push({ locale, slug });
        }
    }
    return params;
}

export default function ProjectDetailPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
    const entry = projectDetails[slug];
    if (!entry) notFound();

    const d = entry[locale === "en" ? "en" : "ko"];
    const backLabel = locale === "en" ? "← Back to projects" : "← 프로젝트로 돌아가기";

    return (
        <main className="mx-8 my-16 flex flex-col gap-8 md:mx-auto md:w-10/12 md:gap-10 lg:w-9/12 xl:w-2/3 2xl:w-1/2">
            <Link href={`/${locale}#projects`} className="font-roboto-mono text-sm text-amber-100 transition-colors duration-300 hover:text-amber-200">
                {backLabel}
            </Link>

            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-slate-200 md:text-4xl">{d.title}</h1>
                <p className="font-roboto-mono text-sm text-amber-100">{d.subtitle}</p>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-800/80 shadow-xl">
                <Image src={d.image} alt={d.title} width={1200} height={800} className="w-full brightness-90" />
            </div>

            <p className="text-base leading-relaxed text-slate-300">{d.overview}</p>

            {d.sections.map((section) => (
                <section key={section.heading} className="flex flex-col gap-3">
                    <h2 className="text-lg font-semibold text-slate-200 md:text-xl">{section.heading}</h2>
                    <ul className="flex flex-col gap-2">
                        {section.items.map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-300 md:text-base">
                                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-amber-200 to-sky-300" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            <div className="flex flex-col gap-3">
                <h2 className="text-lg font-semibold text-slate-200 md:text-xl">{locale === "en" ? "Tech" : "사용 기술"}</h2>
                <div className="flex flex-wrap gap-2">
                    {d.tech.map((tech) => (
                        <span key={tech} className="font-roboto-mono inline-flex items-center rounded-full border border-slate-800/70 bg-slate-900/45 px-3 py-1 text-xs text-amber-100 shadow-inner shadow-black/20">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <Link href={`/${locale}#projects`} className="font-roboto-mono mt-4 text-sm text-amber-100 transition-colors duration-300 hover:text-amber-200">
                {backLabel}
            </Link>
        </main>
    );
}
