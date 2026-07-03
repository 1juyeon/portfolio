import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { smoothScroll } from "../utilities/scroll";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
    const [isHidden, setIsHidden] = useState(false);

    const t = useTranslations("Header");

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsHidden(currentScrollPos > prevScrollPos);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                isHidden ? "header-hidden" : "header-visible"
            } sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-slate-900/50 bg-slate-950/85 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-900/55 px-4 text-xs shadow-sm backdrop-blur-sm md:h-20 md:px-20 md:text-sm`}
        >
            <motion.div
                initial={{ opacity: 0, mixBlendMode: "lighten" }}
                animate={{ opacity: 1, mixBlendMode: "lighten" }}
                transition={{ duration: 0.75 }}
                onClick={() => smoothScroll("")}
            >
                <span
                    className="invisible flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-700/90 font-roboto-mono text-sm font-bold tracking-tight text-amber-100 transition-all duration-500 hover:border-amber-200 hover:text-amber-200 md:visible md:h-12 md:w-12 md:text-base"
                    aria-label="WJY logo"
                >
                    WJY
                </span>
            </motion.div>
            <ul className="font-roboto-mono flex items-center gap-2 md:gap-8">
                <motion.li
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 1 }}
                    className="animated-link text-slate-300 transition-colors duration-300 hover:text-amber-200"
                >
                    <button onClick={() => smoothScroll("about")}>
                        <span className=" text-amber-100">1.</span>
                        {t("link-1")}
                    </button>
                </motion.li>
                <motion.li
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="animated-link text-slate-300 transition-colors duration-300 hover:text-amber-200"
                >
                    <button onClick={() => smoothScroll("enterprise")}>
                        <span className=" text-amber-100">2.</span>
                        {t("link-2")}
                    </button>
                </motion.li>
                <motion.li
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    className="animated-link text-slate-300 transition-colors duration-300 hover:text-amber-200"
                >
                    <button onClick={() => smoothScroll("projects")}>
                        <span className=" text-amber-100">3.</span>
                        {t("link-3")}
                    </button>
                </motion.li>
                <motion.li
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    className="animated-link text-slate-300 transition-colors duration-300 hover:text-amber-200"
                >
                    <button onClick={() => smoothScroll("contact")}>
                        <span className=" text-amber-100">4.</span>
                        {t("link-4")}
                    </button>
                </motion.li>
                <motion.li initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
                    <LanguageSwitch />
                </motion.li>
            </ul>
        </header>
    );
}
