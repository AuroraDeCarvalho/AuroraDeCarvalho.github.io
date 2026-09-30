# Aurora de Carvalho — Identidade digital independente

Site canônico provisório: `https://auroradecarvalho.github.io/`
Domínio futuro: `auroradecarvalho.com` (sem compra nesta fase).
GitHub: `AuroraDeCarvalho/AuroraDeCarvalho.github.io` · SSH: `github-aurora`.

## Princípios
Evidência antes de autoridade; simplicidade duradoura; privacidade por padrão;
custódia adulta transparente; site como fonte canônica.

## Diretriz arquitetural
Owner independente: `/home/andre/aurora-de-carvalho`. `ilumino-workspace` é
referência metodológica, não parent workspace (ver `docs/ARCHITECTURE.md` e
`docs/adr/ADR-0001-independencia-ownership-heranca-metodologica.md`).

## Estrutura
- `index.html` — Home, Projetos, Ideias, Produtos, Sobre, Contato, Links
- `assets/styles.css` — design system A (alvorada editorial)
- `assets/favicon.svg` — favicon tipográfico “A”
- `content/catalog.json` — catálogo editorial
- `AGENTS.md` · `PROJECT_STATE.md` · `docs/IDENTITY.md` · `docs/ROADMAP.md` · `docs/PRIVACY-AND-SAFETY.md` · `docs/ARCHITECTURE.md` · `docs/adr/`
- `.local/` — config operacional privada (gitignored, sem segredos)

## Operação
Autoria: operador adulto (repo-local). Remote `origin` via SSH exclusiva.
Sem analytics, sem tracking, sem checkout. Contato supervisionado.
