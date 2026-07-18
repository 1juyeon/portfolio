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
            title: "PrivKeeper — 비밀번호 통합 관리 보안 솔루션",
            subtitle: "메인 업무 · 단독 담당 · Java 웹 + C++/JNI 네이티브",
            image: "/screenshots/privkeeperp.png",
            overview:
                "CCTV·관제 환경의 비밀번호 통합 관리 솔루션 PrivKeeper를 담당합니다. Java 웹 애플리케이션(PrivKeeper P)과 C++/JNI 네이티브 모듈(PrivKeeper 1.5)로 이루어진 하나의 제품을, 카메라·리눅스/윈도우 서버·네트워크 스위치·VMS 등 이기종 장치의 비밀번호 자동 변경 기능부터 국가 보안기능 확인서 발급, 라이브러리 현대화, 현장 이슈 대응까지 전 주기에 걸쳐 담당했습니다. 웹 저장소 기준 2년 6개월간 커밋 110여 건을 반영했습니다.",
            sections: [
                {
                    heading: "주요 성과",
                    items: [
                        "관리 대상 장치 전방위 확장 — 카메라 → 리눅스/윈도우 서버 → 네트워크 스위치. 스위치는 제조사·모델마다 콘솔 명령이 달라, 현장에서 콘솔 출력만 확인하면 JSON 템플릿 추가로 신규 장비를 지원하는 구조로 설계해 코드 수정 없이 대응 범위를 넓혔습니다.",
                        "국가 보안기능 확인서 발급 대응 — 국정원 보안 가이드(국가용 보안요구사항)에 맞게 제품 기능을 보완·수정했습니다. 무결성 검증 추가, 세션·계정 보안 개선, 전 기능 감사 로그 확보 등 코드 차원의 대응과 함께, 제출 산출물(취약점 개선 내역서·보안기능 구현명세서·제품 설명서·자체 시험 결과서)을 실제 코드와 일치하게 검토·정비했습니다.",
                        "레거시 스택 전면 현대화 — libcurl·OpenSSL·Log4j·PostgreSQL·JDBC 교체에 이어 JDK 25 + Tomcat 11 + Spring/Security 7 + Jakarta 전환까지 수행. 위험도 분석으로 로드맵을 세우고, 교체 후 실제 통신을 캡처·검증해 안정성을 확보했습니다.",
                        "제품 보안성 강화 — 비밀번호 생성 규칙에 국가 보안 기준(연속·반복·역순·직전 재사용 금지)을 반영하고, 난수 생성을 안전한 방식(DRBG)으로 교체했으며, 세션 하이재킹·자동 로그인 우회 같은 실제 취약점을 직접 찾아 막았습니다.",
                    ],
                },
                {
                    heading: "사례 1 — 비밀번호가 '성공했는데 실패한' 미스터리 (SVMS 동기화 불일치)",
                    items: [
                        "상황: 현장에서 카메라 비밀번호를 바꾼 뒤 일부 카메라 영상이 끊기는 장애가 발생. 로그상으로는 변경이 성공/롤백된 것으로 보였습니다.",
                        "접근: 제품·카메라·VMS 세 곳의 비밀번호 상태를 교차 비교하고 Java–JNI–C++ 호출 흐름을 끝까지 추적. 제품·카메라는 옛 비밀번호로 되돌렸는데 VMS에만 새 비밀번호가 남는 '조용한 불일치(silent drift)'가 일어나는 경로를 찾아, 비동기 COM 호출이 실패로 보고된 뒤에도 실제로는 서버에 반영되는 시나리오를 가설로 세웠습니다.",
                        "결과: 원인 가설·재현 조건·점검 우선순위를 담은 분석 보고서를 작성해 유사 장애 진단 기준으로 삼고, '로그가 성공이라고 찍혀도 실제 상태를 대조 검증해야 한다'는 관점을 팀에 공유했습니다.",
                    ],
                },
                {
                    heading: "사례 2 — 테스트할 카메라가 없는 상태에서 라이브러리 업그레이드 검증",
                    items: [
                        "상황: libcurl·OpenSSL을 새 버전으로 교체한 뒤, 실제 카메라가 없어 통신이 정상인지 확인하기 어려운 상황.",
                        "접근: 카메라 통신의 핵심 요소(HTTPS 핸드셰이크·자체 서명 인증서·Digest 인증·TLS 1.2 강제)를 공개 테스트 서버로 재현해 하나씩 검증하고, 실제 통신을 패킷 캡처해 지문(JA3/JA4)과 cipher 목록까지 분석해 세 개의 통신 경로가 의도대로 동작함을 증거로 입증했습니다.",
                        "결과: 물리 장비 없이도 업그레이드 안전성을 확인해 배포를 진행했고, 검증 절차를 문서로 남겨 다음 라이브러리 교체 때 재사용할 수 있게 했습니다.",
                    ],
                },
                {
                    heading: "사례 3 — 원인이 20가지로 갈리는 SDK 초기화 오류",
                    items: [
                        "상황: VMS 연동 SDK가 '로딩 실패'/'초기화 실패'라는 모호한 코드만 남기고 멈추는 장애.",
                        "접근: 오류 코드가 실제로 세팅되는 지점을 역추적한 뒤, 가능한 원인을 COM 등록·권한·비트 불일치·네트워크·인증·타임아웃 등 20여 가지로 체계적으로 분류하고, 현장에서 빠르게 좁혀갈 수 있는 점검 순서를 만들었습니다.",
                        "결과: '어디부터 봐야 할지 모르겠는' 장애를 순서대로 진단할 수 있는 체크리스트로 바꿔 현장 대응 시간을 줄였습니다.",
                    ],
                },
                {
                    heading: "사례 4 — 카메라마다 다른 인증 방식으로 비밀번호 변경 실패",
                    items: [
                        "상황: 특정 제조사 카메라에서 ONVIF 비밀번호 변경이 인증 단계에서 실패.",
                        "접근: 카메라마다 받아들이는 인증 방식이 다르다는 점에 착안해, 여러 인증 방식을 순서대로 자동 시도하는 폴백 구조를 넣고, 어떤 방식에서 통과/실패했는지 로그로 남겨 원인이 바로 보이도록 했습니다.",
                        "결과: 그동안 '왜 안 되는지 모르던' 카메라들의 실패 지점을 눈으로 확인하게 되었고, 같은 모델의 다른 카메라 이슈도 빠르게 진단하게 됐습니다.",
                    ],
                },
                {
                    heading: "사례 5 — 세션 값만 복사하면 남의 계정에 접근되는 취약점",
                    items: [
                        "상황: 같은 네트워크에서 세션 식별자를 복사·붙여넣기하면 다른 사용자의 계정에 접근되는 문제.",
                        "접근·결과: 세션 재사용에 IP 등 추가 조건을 걸어 탈취를 차단하고, 전 기능에 감사 로그를 남겨 보안 검증 기준을 충족시켰습니다. 자동 로그인 우회·로그인 실패 계정 잠금 오류 등 인증 관련 취약점도 함께 정비했습니다.",
                    ],
                },
                {
                    heading: "사례 6 — 최신 윈도우에서만 재현되는 서버 비밀번호 변경 실패",
                    items: [
                        "상황: 윈도우 최신 버전(24H2)에서 서버 비밀번호 변경이 실패하는 현장 이슈.",
                        "접근·결과: OS 버전 변화에 따른 동작 차이를 원인으로 좁혀 수정했고, 랜덤 비밀번호 생성이 특정 조건에서 무한 반복에 빠지던 문제도 함께 잡아 안정성을 높였습니다.",
                    ],
                },
            ],
            tech: ["Java", "Spring / Spring Security", "JSP", "PostgreSQL", "JNI (C/C++)", "ONVIF", "SUNAPI", "SSH", "TLS", "DRBG", "OpenSSL / libcurl", "Tomcat 11", "JDK 25"],
        },
        en: {
            title: "PrivKeeper — Unified Password-Management Security Solution",
            subtitle: "Main work · Sole owner · Java web + C++/JNI native",
            image: "/screenshots/privkeeperp.png",
            overview:
                "I own PrivKeeper, a unified password-management solution for CCTV/surveillance environments. It's a single product made of a Java web application (PrivKeeper P) and a C++/JNI native module (PrivKeeper 1.5), and I've handled its full lifecycle — from automatic password changes across heterogeneous devices (cameras, Linux/Windows servers, network switches, VMS) to the national security-function verification, library modernization, and field issues. I've contributed ~110 commits over 2.5 years in the web repository.",
            sections: [
                {
                    heading: "Key achievements",
                    items: [
                        "Expanded the managed device scope across the board — cameras → Linux/Windows servers → network switches. Since switch console commands differ by vendor/model, I designed it so a new device can be supported just by adding a JSON template after checking the console output in the field — extending coverage without code changes.",
                        "Handled the national security-function verification — adapting product features to the national intelligence agency's security guidelines: added integrity verification, improved session/account security, ensured audit logs across all features, and reconciled the submitted deliverables (vulnerability-fix report, security-function spec, product manual, self-test results) with the actual code.",
                        "Modernized the legacy stack end to end — upgraded libcurl, OpenSSL, Log4j, PostgreSQL, and JDBC, then carried out a large migration to JDK 25 + Tomcat 11 + Spring/Security 7 + Jakarta. I planned a roadmap from a risk analysis and verified stability by capturing real traffic afterward.",
                        "Strengthened product security — applied national security rules to password generation (no sequences, repeats, reversals, or immediate reuse), replaced randomness with a safe scheme (DRBG), and found and fixed real vulnerabilities such as session hijacking and auto-login bypass.",
                    ],
                },
                {
                    heading: "Case 1 — The 'succeeded but failed' password mystery (SVMS sync drift)",
                    items: [
                        "Situation: After changing camera passwords in the field, some camera streams went black, even though the logs showed the change as succeeded/rolled back.",
                        "Approach: I cross-compared the password state across the product, the camera, and the VMS, and traced the Java–JNI–C++ call flow to the end. I found a path where the product and camera reverted to the old password but only the VMS kept the new one — a silent drift — and hypothesized that an async COM call was actually applied on the server even after being reported as failed.",
                        "Result: I wrote an analysis report with the hypothesis, reproduction conditions, and inspection priorities, which became the reference for diagnosing similar failures. I shared the lesson: 'even if the log says success, you must cross-verify the real state.'",
                    ],
                },
                {
                    heading: "Case 2 — Verifying a library upgrade with no test cameras available",
                    items: [
                        "Situation: After upgrading libcurl/OpenSSL, there were no real cameras to confirm the communication still worked.",
                        "Approach: I reproduced the core elements of camera communication (HTTPS handshake, self-signed certificates, Digest auth, forced TLS 1.2) against public test servers and verified them one by one — then packet-captured real traffic and analyzed fingerprints (JA3/JA4) and cipher lists to prove, with evidence, that all three communication paths behaved as intended.",
                        "Result: Confirmed the upgrade was safe without physical devices and shipped it, leaving the verification procedure documented for reuse in the next library upgrade.",
                    ],
                },
                {
                    heading: "Case 3 — An SDK init error with 20 possible causes",
                    items: [
                        "Situation: The VMS integration SDK would stop with only a vague 'load failure'/'init failure' code.",
                        "Approach: I traced back to where the error code is actually set, then systematically classified the possible causes into ~20 (COM registration, permissions, bitness mismatch, network, auth, timeout, etc.) and built an inspection order to narrow it down quickly in the field.",
                        "Result: Turned a 'where do I even start' failure into a step-by-step checklist, reducing field response time.",
                    ],
                },
                {
                    heading: "Case 4 — Password change failing due to per-camera auth differences",
                    items: [
                        "Situation: On certain vendor cameras, ONVIF password changes failed at the authentication step.",
                        "Approach: Noting that each camera accepts a different auth method, I added a fallback that tries several auth methods in order and logs which one passed/failed so the cause is immediately visible.",
                        "Result: The failure points of previously mysterious cameras became visible, and similar issues on other cameras of the same model could be diagnosed quickly.",
                    ],
                },
                {
                    heading: "Case 5 — Account access by simply copying a session value",
                    items: [
                        "Situation: On the same network, copying and pasting a session identifier granted access to another user's account.",
                        "Approach & result: I bound session reuse to extra conditions (such as IP) to block hijacking and added audit logs across all features to meet the security verification criteria. I also cleaned up related auth vulnerabilities, including auto-login bypass and a login-failure account-lock bug.",
                    ],
                },
                {
                    heading: "Case 6 — Server password change failing only on the latest Windows",
                    items: [
                        "Situation: A field issue where server password changes failed on the latest Windows (24H2).",
                        "Approach & result: I narrowed the cause to behavioral differences across OS versions and fixed it, and also resolved a case where random password generation could fall into an infinite loop under certain conditions.",
                    ],
                },
            ],
            tech: ["Java", "Spring / Spring Security", "JSP", "PostgreSQL", "JNI (C/C++)", "ONVIF", "SUNAPI", "SSH", "TLS", "DRBG", "OpenSSL / libcurl", "Tomcat 11", "JDK 25"],
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
