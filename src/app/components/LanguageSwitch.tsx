import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitch() {
    const [languageText, setLanguageText] = useState("");

    const pathname = usePathname();

    const isEnglish = pathname.startsWith("/en");

    useEffect(() => {
        setLanguageText(isEnglish ? "EN" : "KO");
    }, [isEnglish]);

    return (
        <Link
            href={isEnglish ? "/ko" : "/en"}
            className="flex items-center justify-center rounded border border-slate-800/60 bg-slate-900/50 px-3 py-1 text-slate-300 transition-colors duration-300 hover:bg-slate-900/70 hover:text-amber-200"
            onMouseEnter={() => setLanguageText(isEnglish ? "한국어" : "English")}
            onMouseLeave={() => setLanguageText(isEnglish ? "EN" : "KO")}
        >
            {languageText}
        </Link>
    );
}
