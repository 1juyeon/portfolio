import Link from "next/link";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import { defaultTiltOptions } from "../utilities/defaultTiltOptions";

interface FeaturedProjectProps {
    detailHref: string;
    imageSrc: string;
    builtWith: string[];
    title: string;
    description: string;
    align?: "left" | "right";
}

export default function FeaturedProject({ detailHref, imageSrc, builtWith, title, description, align = "right" }: FeaturedProjectProps) {
    const t = useTranslations("FeaturedProject");
    const locale = useLocale();
    const detailLabel = locale === "en" ? "View details →" : "자세히 보기 →";

    return (
        <div className="mb-16 grid items-center gap-8 md:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={`flex flex-col justify-center gap-4 ${align === "right" ? "text-right" : "text-left"}`}
            >
                <span className="font-roboto-mono text-sm text-amber-100">{t("title")}</span>
                <Link href={detailHref} className={`text-3xl font-bold text-slate-200 transition-colors duration-300 hover:text-amber-200 ${align === "right" ? "self-end" : "self-start"}`}>
                    {title}
                </Link>
                <div className="rounded-lg border border-slate-800/70 bg-slate-900/50 p-4 text-sm shadow-xl md:text-base">{description}</div>
                <div className={`font-roboto-mono flex flex-wrap gap-1 text-xs text-amber-100 ${align === "right" ? "justify-end" : "justify-start"}`}>
                    {builtWith.map((tech) => (
                        <span key={`${title}-${tech}`} className="inline-flex items-center justify-center rounded-full border border-slate-800/70 bg-slate-900/45 px-2 py-1 shadow-xl">
                            {tech}
                        </span>
                    ))}
                </div>
                <Link href={detailHref} className={`font-roboto-mono text-sm font-semibold text-amber-100 transition-colors duration-300 hover:text-amber-200 ${align === "right" ? "self-end" : "self-start"}`}>
                    {detailLabel}
                </Link>
            </motion.div>
            <Tilt options={defaultTiltOptions} className={`${align === "right" ? "md:order-last" : "md:order-first"}`}>
                <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
                    <Link href={detailHref}>
                        <Image src={imageSrc} alt={title} width={750} height={500} className="rounded-xl border border-slate-800/90 shadow-xl brightness-75 transition-all hover:brightness-100" />
                    </Link>
                </motion.div>
            </Tilt>
        </div>
    );
}
