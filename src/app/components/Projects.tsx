import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import FeaturedProject from "./FeaturedProject";
import Title from "./Title";

export default function Projects() {
    const t = useTranslations("Projects");
    const locale = useLocale();

    const items = [
        {
            slug: "privkeeperp",
            imageSrc: "/screenshots/privkeeperp.png",
            builtWith: ["Java", "Spring", "PostgreSQL", "JNI/C++", "ONVIF/SOAP", "보안 인증"],
            align: "left" as const,
        },
        {
            slug: "onviprobe",
            imageSrc: "/screenshots/onviprobe.png",
            builtWith: ["Go", "ONVIF", "SOAP", "WS-Security", "네트워크 스캔"],
            align: "right" as const,
        },
        {
            slug: "utilapp",
            imageSrc: "/screenshots/utilapp.png",
            builtWith: ["Qt", "C++", "TS/ECM/EMM", "CAS", "방송 암호화"],
            align: "left" as const,
        },
        {
            slug: "aiauto",
            imageSrc: "/screenshots/aiauto.png",
            builtWith: ["Python", "Gemini·GPT", "RAG", "ChromaDB", "Streamlit"],
            align: "right" as const,
        },
    ];

    const detailLabel = locale === "en" ? "View details →" : "자세히 보기 →";

    return (
        <section id="projects" className="flex flex-col justify-center">
            <Title count={3} title={t("title")} />
            {items.map((item) => (
                <FeaturedProject
                    key={item.slug}
                    detailHref={`/${locale}/projects/${item.slug}`}
                    imageSrc={item.imageSrc}
                    builtWith={item.builtWith}
                    title={t(`items.${item.slug}.title`)}
                    description={t(`items.${item.slug}.description`)}
                    align={item.align}
                />
            ))}
            <div className="mt-4">
                <h3 className="font-roboto-mono mb-5 text-center text-sm text-amber-100 md:text-base">{t("others.title")}</h3>
                <div className="mx-auto grid max-w-2xl gap-4">
                    {["cctv"].map((slug) => {
                        const raw = (t as any).raw ? (t as any).raw(`others.items.${slug}.tags`) : [];
                        const tags: string[] = Array.isArray(raw) ? raw : [];
                        return (
                            <Link key={slug} href={`/${locale}/projects/${slug}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col gap-3 rounded-xl border border-slate-800/70 bg-slate-900/45 p-5 shadow-xl transition-colors duration-300 hover:border-amber-200/40"
                                >
                                    <h4 className="text-base font-bold text-slate-200">{t(`others.items.${slug}.title`)}</h4>
                                    <p className="text-sm leading-relaxed text-slate-400">{t(`others.items.${slug}.description`)}</p>
                                    <div className="font-roboto-mono flex flex-wrap gap-1 pt-1 text-xs text-amber-100">
                                        {tags.map((tag) => (
                                            <span key={tag} className="inline-flex items-center rounded-full border border-slate-800/70 bg-slate-900/45 px-2 py-1">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="font-roboto-mono text-sm font-semibold text-amber-100">{detailLabel}</span>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-roboto-mono mt-8 flex flex-col items-center rounded-xl border border-slate-800/70 bg-slate-900/45 p-6 text-center text-sm text-slate-300 shadow-xl md:text-base"
            >
                <p>{t("more.text")}</p>
                <a href="https://github.com/1juyeon" target="_blank" className="animated-link mt-2 font-semibold text-amber-100 transition-colors duration-300 hover:text-amber-200">
                    {t("more.link")}
                </a>
            </motion.div>
        </section>
    );
}
