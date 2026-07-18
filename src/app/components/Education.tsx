import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Education() {
    const t = useTranslations("Education");

    const getList = (key: string) => {
        const value = (t as any).raw ? (t as any).raw(key) : [];
        return Array.isArray(value) ? (value as string[]) : [];
    };

    const items = ["training", "univ", "license", "cswp"];

    return (
        <section id="education" className="flex flex-col">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm md:text-base"
            >
                <h3 className="font-roboto-mono mb-5 text-center text-sm text-amber-100 md:text-base">{t("title")}</h3>
                <div className="flex flex-col gap-4">
                    {items.map((item) => {
                        const notes = getList(`items.${item}.notes`);
                        return (
                            <div key={item} className="rounded-xl border border-slate-800/70 bg-slate-900/45 p-5 shadow-xl">
                                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                                    <h4 className="text-base font-bold text-slate-200">{t(`items.${item}.name`)}</h4>
                                    <span className="font-roboto-mono text-[11px] uppercase tracking-[0.2em] text-amber-100">{t(`items.${item}.meta`)}</span>
                                </div>
                                {notes.length > 0 && (
                                    <ul className="mt-2 flex flex-col gap-1">
                                        {notes.map((note, idx) => (
                                            <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                                                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-amber-200 to-sky-300" />
                                                <span>{note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
