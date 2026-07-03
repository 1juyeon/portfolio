import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import "../../styles/globals.scss";

export const metadata = {
    title: "원주연 | 백엔드 · 보안 솔루션 엔지니어",
    description: "PrivKeeper P 보안 솔루션의 개발·유지보수를 단독으로 담당하며, 이기종 장비 연동·동시성 처리·보안 기능 구현부터 RAG/LLM 자동화까지 다루는 백엔드·보안 엔지니어 원주연의 포트폴리오.",
    keywords: "원주연, Juyeon Won, 백엔드 개발자, 보안 엔지니어, PrivKeeper, ONVIF, Java, Spring, Go, LLM, 포트폴리오",
    author: "원주연 (Juyeon Won)",
};

const oxygen = localFont({
    src: [
        {
            path: "../../fonts/Oxygen-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../fonts/Oxygen-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../fonts/Oxygen-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
});

export function generateStaticParams() {
    return [{ locale: "ko" }, { locale: "en" }];
}

const robotoMono = localFont({
    src: "../../fonts/RobotoMono.ttf",
    display: "swap",
    variable: "--font-roboto-mono",
});

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
    let messages;

    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body
                className={`${oxygen.className} ${robotoMono.variable}
                    relative overflow-x-hidden scroll-smooth bg-slate-950 leading-relaxed text-slate-400 antialiased selection:bg-blue-300 selection:text-blue-900`}
            >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <canvas id="canvas" className="fixed inset-0 -z-10 h-screen w-screen"></canvas>
            </body>
        </html>
    );
}
