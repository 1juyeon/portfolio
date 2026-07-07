export type DetailSection = { heading: string; items: string[] };
export type ProjectDetail = {
    title: string;
    subtitle: string;
    image: string;
    overview: string;
    sections: DetailSection[];
    tech: string[];
};

export const projectDetails: Record<string, { ko: ProjectDetail; en: ProjectDetail }> = {
    privkeeperp: {
        ko: {
            title: "PrivKeeper P — 패스워드 관리 보안 솔루션",
            subtitle: "메인 업무 · 단독 담당 · 2023.11 – 현재",
            image: "/screenshots/privkeeperp.png",
            overview:
                "카메라·VMS·네트워크 장비·서버 등 이기종 장비의 계정과 비밀번호를 정책에 따라 자동으로 관리하는 보안 제품입니다. 웹 애플리케이션부터 암호화 모듈, 외부 장비 연동, 설치·운영 환경까지 제품의 거의 모든 층을 혼자 맡아 개발·유지보수·고객 대응·보안 인증을 책임지고 있습니다.",
            sections: [
                {
                    heading: "제품을 혼자 책임지는 오너십",
                    items: [
                        "특정 기능만이 아니라 개발·유지보수·고객 현장 대응·보안 인증까지 제품 전 과정을 단독으로 맡고 있습니다. 한 부분만 아는 게 아니라 제품 전체 구조를 이해하고 운영합니다.",
                    ],
                },
                {
                    heading: "장비·프로토콜이 얽힌 문제를 근거로 해결",
                    items: [
                        "제조사마다 다른 카메라·VMS의 비표준 동작을, 겉으로 드러난 결과가 아니라 응답 전문과 로그를 근거로 끝까지 파고들어 원인을 규명합니다.",
                        "예를 들어 비밀번호는 실제로 변경됐는데 응답이 비표준이라 실패로 처리되던 문제를, 실제 장비 동작까지 확인해 바로잡았습니다. 이런 프로토콜 레벨 디버깅이 제 강점입니다.",
                    ],
                },
                {
                    heading: "보안과 안정성",
                    items: [
                        "보안기능확인서 취득을 이끌며 암호화·난수(DRBG)·TLS·핵심 오픈소스 최신화까지, 제품 보안을 실제 인증을 통과할 수 있는 수준으로 정비했습니다.",
                        "다수 장비를 동시에 처리하는 환경에서 경합·중복 실행·비정상 종료에도 견디도록 안정성을 확보하는 데 신경 씁니다.",
                    ],
                },
            ],
            tech: ["Java", "Spring MVC", "JSP", "PostgreSQL", "JDBC", "Jasypt", "JNI (C/C++)", "ONVIF", "SOAP/gSOAP", "VMS SDK", "TLS", "DRBG", "Apache Tomcat"],
        },
        en: {
            title: "PrivKeeper P — Password-Management Security Solution",
            subtitle: "Main work · Sole owner · Nov 2023 – Present",
            image: "/screenshots/privkeeperp.png",
            overview:
                "A security product that automatically manages the accounts and passwords of diverse devices — cameras, VMS, network gear, servers — by policy. I own nearly every layer of it on my own: the web app, the crypto module, external device integrations, and the install/operation environment, along with development, maintenance, customer support, and security certification.",
            sections: [
                {
                    heading: "Full product ownership",
                    items: [
                        "I own the entire product — development, maintenance, on-site customer support, and security certification — not just a single feature. I understand and operate the whole thing, not one corner of it.",
                    ],
                },
                {
                    heading: "Solving device/protocol problems from evidence",
                    items: [
                        "When cameras and VMS from different vendors behave in non-standard ways, I dig into raw responses and logs — not just the surface result — to find the real cause.",
                        "For example, I fixed a case where a password had actually changed but a non-standard response was treated as a failure, by verifying the device's real behavior. This kind of protocol-level debugging is a core strength of mine.",
                    ],
                },
                {
                    heading: "Security and stability",
                    items: [
                        "I led the security-function certification, getting the product's security (encryption, DRBG randomness, TLS, core OSS upgrades) to a level that actually passes certification.",
                        "I care about stability under load — making the system withstand contention, duplicate runs, and abnormal termination when handling many devices at once.",
                    ],
                },
            ],
            tech: ["Java", "Spring MVC", "JSP", "PostgreSQL", "JDBC", "Jasypt", "JNI (C/C++)", "ONVIF", "SOAP/gSOAP", "VMS SDK", "TLS", "DRBG", "Apache Tomcat"],
        },
    },

    onviprobe: {
        ko: {
            title: "OnviProbe — ONVIF 카메라 진단 도구",
            subtitle: "직접 개발 · Go",
            image: "/screenshots/onviprobe.png",
            overview:
                "PrivKeeper가 특정 카메라의 비밀번호를 실제로 바꿀 수 있을지, 카메라를 건드리지 않고 미리 예측하는 진단 도구입니다. 카메라마다 ONVIF 구현이 달라 '왜 이 카메라만 안 되는가'를 매번 사후에 분석하던 반복을 줄이려고, 필요를 느껴 Go로 직접 만들었습니다.",
            sections: [
                {
                    heading: "필요를 스스로 정의하고 직접 해결",
                    items: [
                        "현장에서 반복되던 사후 분석을 그냥 넘기지 않고, '미리 판단할 수 있으면 되지 않을까'라는 생각에서 도구를 직접 설계·개발했습니다. 불편함을 개선으로 연결하는 성향이 잘 드러나는 프로젝트입니다.",
                    ],
                },
                {
                    heading: "프로토콜을 깊이 이해한 진단",
                    items: [
                        "제품의 ONVIF 처리 로직과 표준(Core 사양)을 함께 재현해, 표준과 제품 동작이 갈리는 지점까지 짚어냅니다.",
                        "실패 원인을 유형별 코드로 분류하고 WS-Security 인증 방식도 자동으로 대체 처리하는 등, 프로토콜을 표면이 아니라 동작 수준에서 다룹니다.",
                    ],
                },
                {
                    heading: "실무 효과",
                    items: ["현장 투입 전에 될/안 될 카메라와 그 이유를 미리 파악해, 사후 장애 분석 부담을 줄였습니다."],
                },
            ],
            tech: ["Go", "ONVIF", "SOAP", "WS-Security", "gSOAP", "네트워크 스캔"],
        },
        en: {
            title: "OnviProbe — ONVIF Camera Diagnostic Tool",
            subtitle: "Built on my own · Go",
            image: "/screenshots/onviprobe.png",
            overview:
                "A tool that predicts, without touching the camera, whether PrivKeeper can actually change a given camera's password. Because every camera implements ONVIF differently, I kept analyzing 'why only this one fails' after the fact — so I built this in Go to get ahead of it.",
            sections: [
                {
                    heading: "Defining the need and solving it myself",
                    items: [
                        "Instead of accepting the repetitive after-the-fact analysis, I asked 'what if we could judge it up front?' and designed and built the tool myself. It captures my habit of turning friction into improvement.",
                    ],
                },
                {
                    heading: "Diagnosis grounded in real protocol behavior",
                    items: [
                        "I reproduced both the product's ONVIF logic and the ONVIF Core spec to pinpoint exactly where the standard and the product diverge.",
                        "I categorized failure causes into codes and added automatic fallback for WS-Security auth — working at the level of actual behavior, not the surface.",
                    ],
                },
                {
                    heading: "Real-world impact",
                    items: ["Identify which cameras will or won't work — and why — before deployment, cutting after-the-fact troubleshooting."],
                },
            ],
            tech: ["Go", "ONVIF", "SOAP", "WS-Security", "gSOAP", "Network Scan"],
        },
    },

    utilapp: {
        ko: {
            title: "utilApp — 방송 암호화(CAS) TS/EMM 분석 도구",
            subtitle: "직접 개발 · 사내 실사용 · Qt / C++",
            image: "/screenshots/utilapp.png",
            overview:
                "방송 수신제한시스템(CAS) 환경에서 암호화가 제대로 걸렸는지, EMM이 정상 수신되는지를 현장에서 바로 확인할 수 있는 사내 진단 도구입니다. 필요한 점검을 직접 도구로 만들었고, 현재 사내에서 실제로 쓰이고 있습니다.",
            sections: [
                {
                    heading: "필요한 점검을 직접 도구로 (사내 실사용)",
                    items: [
                        "현장에서 방송 암호화 상태와 EMM 수신을 즉시 확인할 수단이 없어 Qt/C++로 직접 만들었고, 만든 도구가 사내에서 실제로 사용되고 있습니다. 여기서도 '불편하면 직접 만든다'는 성향이 이어집니다.",
                    ],
                },
                {
                    heading: "방송 암호화(CAS) 도메인 이해",
                    items: [
                        "실시간·파일 기반 TS 패킷 분석으로 스크램블링(암호화) 적용 여부와 EMM 수신 상태를 점검하고, TS·ECM·EMM·License 등 방송 암호화의 핵심 요소를 다룹니다.",
                    ],
                },
            ],
            tech: ["Qt 5.14.2", "C++", "MinGW", "TS (Transport Stream)", "ECM/EMM", "CAS(수신제한시스템)"],
        },
        en: {
            title: "utilApp — Broadcast Encryption (CAS) TS/EMM Analyzer",
            subtitle: "Built on my own · In real internal use · Qt / C++",
            image: "/screenshots/utilapp.png",
            overview:
                "An in-house diagnostic tool for a broadcast Conditional Access System (CAS) that lets you check, right in the field, whether encryption is applied correctly and whether EMM is being received. I built the check I needed as a tool, and it's now in real internal use.",
            sections: [
                {
                    heading: "Built the check I needed (now in real use)",
                    items: [
                        "There was no quick way to verify broadcast-encryption status and EMM reception on site, so I built one in Qt/C++ — and it's actually used internally. The same 'if it's inconvenient, I build it' instinct carries over here.",
                    ],
                },
                {
                    heading: "CAS domain understanding",
                    items: [
                        "Real-time and file-based TS packet analysis to check scrambling (encryption) and EMM reception, working with the core CAS elements — TS, ECM, EMM, and License.",
                    ],
                },
            ],
            tech: ["Qt 5.14.2", "C++", "MinGW", "TS (Transport Stream)", "ECM/EMM", "CAS"],
        },
    },

    aiauto: {
        ko: {
            title: "PrivKeeper 장애 대응 자동화 (AI · LLM)",
            subtitle: "직접 구현 · LLM 학습/적용",
            image: "/screenshots/aiauto.png",
            overview:
                "담당 제품의 고객 문의·장애를 AI가 자동으로 분석하고 대응 초안을 만들어 주는 사내 자동화 도구입니다. LLM을 공부에 그치지 않고 실무에 바로 적용해보려고 직접 구현했습니다.",
            sections: [
                {
                    heading: "새 기술을 배우고 바로 실무에 적용",
                    items: [
                        "LLM을 학습하는 데서 멈추지 않고 담당 제품의 실제 고객 대응 문제에 적용해 본 프로젝트입니다. 새로운 기술을 '이걸로 뭘 더 편하게 만들 수 있을까' 관점으로 받아들이는 성향이 드러납니다.",
                    ],
                },
                {
                    heading: "무엇을 만들었나",
                    items: [
                        "고객 문의·장애를 자동으로 분류하고, 유사 사례 검색과 대응 초안 생성까지 이어지는 흐름을 직접 구현했습니다.",
                        "여러 AI 모델(Gemini·GPT)을 비교·활용하며, 담당 제품의 도메인 지식을 AI 도구로 연결했습니다.",
                    ],
                },
            ],
            tech: ["Python", "Gemini", "GPT", "RAG", "ChromaDB", "Streamlit"],
        },
        en: {
            title: "PrivKeeper Incident-Response Automation (AI · LLM)",
            subtitle: "Built on my own · Learning & applying LLMs",
            image: "/screenshots/aiauto.png",
            overview:
                "An internal tool that uses AI to automatically analyze customer inquiries/incidents for the product I own and draft responses. I built it to apply LLMs in a real context rather than just study them.",
            sections: [
                {
                    heading: "Learning new tech and applying it right away",
                    items: [
                        "I didn't stop at studying LLMs — I applied them to a real customer-support problem on my own product. It shows how I approach new tech: 'what can I make easier with this?'",
                    ],
                },
                {
                    heading: "What I built",
                    items: [
                        "An end-to-end flow that auto-classifies inquiries/incidents, retrieves similar cases, and drafts responses.",
                        "Compared and used multiple AI models (Gemini, GPT), connecting the product's domain knowledge to an AI tool.",
                    ],
                },
            ],
            tech: ["Python", "Gemini", "GPT", "RAG", "ChromaDB", "Streamlit"],
        },
    },

    cctv: {
        ko: {
            title: "CCTV 이상행동 대응 RAG 솔루션 (정부 R&D · VLM 과제)",
            subtitle: "RAG·LLM 파트 담당 · 진행 중",
            image: "/screenshots/cctv.png",
            overview:
                "CCTV 이상행동(낙상·화재·학대·배회 등)이 발생했을 때, 담당자가 상황에 맞는 조치를 빠르게 판단할 수 있도록 RAG/LLM으로 행동 권고와 리포트를 자동 생성하는 정부 R&D VLM 과제입니다. 이 과제에서 RAG·LLM 파트를 담당하고 있습니다.",
            sections: [
                {
                    heading: "정부 R&D 과제에서 RAG·LLM 담당",
                    items: [
                        "여러 문서에 흩어진 대응 가이드를 검색·요약해, 상황(이벤트·시설·시간)에 맞는 행동 권고와 리포트로 만들어내는 RAG/LLM 파이프라인을 설계합니다.",
                        "AI를 개인 학습을 넘어 정부 과제 수준의 실제 문제에 적용하는 경험을 쌓고 있습니다.",
                    ],
                },
                {
                    heading: "상태",
                    items: ["구현을 마무리하기 전 단계이며, 현재 성능 평가를 준비하고 있습니다."],
                },
            ],
            tech: ["Python", "RAG", "ChromaDB", "sentence-transformers", "Ollama / LLM", "VLM"],
        },
        en: {
            title: "CCTV Anomaly-Response RAG Solution (Government R&D · VLM Project)",
            subtitle: "Owning the RAG/LLM part · Ongoing",
            image: "/screenshots/cctv.png",
            overview:
                "A government R&D VLM project that uses RAG/LLM to auto-generate action recommendations and reports so an operator can quickly decide what to do when a CCTV anomaly (fall, fire, abuse, loitering, etc.) occurs. I own the RAG/LLM part.",
            sections: [
                {
                    heading: "Owning RAG/LLM on a government R&D project",
                    items: [
                        "I design a RAG/LLM pipeline that searches and summarizes response guidance scattered across documents, and turns it into situational (event/facility/time) recommendations and reports.",
                        "It's experience applying AI beyond personal study — to a real, government-project-scale problem.",
                    ],
                },
                {
                    heading: "Status",
                    items: ["Implementation isn't finalized yet; currently preparing for performance evaluation."],
                },
            ],
            tech: ["Python", "RAG", "ChromaDB", "sentence-transformers", "Ollama / LLM", "VLM"],
        },
    },
};

export const projectSlugs = Object.keys(projectDetails);
