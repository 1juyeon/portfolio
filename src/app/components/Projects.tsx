import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import FeaturedProject from "./FeaturedProject";
import Title from "./Title";

export default function Projects() {
    const t = useTranslations("Projects");

    const items = [
        {
            slug: "onviprobe",
            liveLink: "#",
            sourceLink: "#",
            imageSrc: "/screenshots/onviprobe.png",
            builtWith: ["Go", "ONVIF", "SOAP", "WS-Security", "네트워크 스캔"],
            align: "right" as const,
            isPrivate: true,
        },
        {
            slug: "utilapp",
            liveLink: "#",
            sourceLink: "#",
            imageSrc: "/screenshots/utilapp.png",
            builtWith: ["Qt", "C++", "TS/ECM/EMM", "CAS", "방송 암호화"],
            align: "left" as const,
            isPrivate: true,
        },
        {
            slug: "aiauto",
            liveLink: "#",
            sourceLink: "#",
            imageSrc: "/screenshots/aiauto.png",
            builtWith: ["Python", "Gemini·GPT", "RAG", "ChromaDB", "Streamlit", "FastAPI"],
            align: "right" as const,
            isPrivate: true,
        },
    ];

    return (
        <section id="projects" className="flex flex-col justify-center">
            <Title count={3} title={t("title")} />
            {items.map((item) => (
                <FeaturedProject
                    key={item.slug}
                    liveLink={item.liveLink}
                    sourceLink={item.sourceLink}
                    imageSrc={item.imageSrc}
                    builtWith={item.builtWith}
                    title={t(`items.${item.slug}.title`)}
                    linkLabel={t(`items.${item.slug}.link`)}
                    description={t(`items.${item.slug}.description`)}
                    align={item.align}
                    isPrivate={item.isPrivate}
                />
            ))}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-roboto-mono mt-8 flex flex-col items-center rounded-xl border border-slate-800/70 bg-slate-900/45 p-6 text-center text-sm text-slate-300 shadow-xl md:text-base"
            >
                <p>{t("more.text")}</p>
                <a href="https://github.com/fatiharapoglu" target="_blank" className="animated-link mt-2 font-semibold text-amber-100 transition-colors duration-300 hover:text-amber-200">
                    {t("more.link")}
                </a>
            </motion.div>
        </section>
    );
}
