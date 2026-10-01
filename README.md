# Aurora de Carvalho — Identidade digital independente

GitHub (código-fonte + histórico + backup): `AuroraDeCarvalho/AuroraDeCarvalho.github.io` · SSH: `github-aurora`.
Preview técnico temporário: `https://auroradecarvalho.github.io/`
Hospedagem oficial: externa ao GitHub, ainda não contratada (ver `docs/adr/ADR-0002-publicacao-hospedagem-externa.md`).
Domínio canônico futuro: `auroradecarvalho.com` (sem compra nesta fase).

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
