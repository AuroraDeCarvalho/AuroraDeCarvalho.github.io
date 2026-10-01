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
- `index.html` — Início (hero, vitrine em preparação, projetos, diário, canais, sobre)
- `loja.html` · `projetos.html` · `blog.html` · `links.html` · `sobre.html` · `contato.html`
- `assets/styles.css` — design system A (alvorada editorial, custom properties)
- `assets/app.js` — JS vanilla progressivo (menu mobile, ano, link ativo)
- `assets/favicon.svg` — favicon tipográfico “A”
- `content/catalog.json` — catálogo editorial (vazio por decisão onde não há item real)
- `sitemap.xml` · `robots.txt` — SEO para o domínio canônico futuro
- `AGENTS.md` · `PROJECT_STATE.md` · `docs/IDENTITY.md` · `docs/ROADMAP.md` · `docs/PRIVACY-AND-SAFETY.md` · `docs/ARCHITECTURE.md` · `docs/adr/`
- `.local/` — config operacional privada (gitignored, sem segredos)

## Operação
Autoria: operador adulto (repo-local). Remote `origin` via SSH exclusiva.
Sem analytics, sem tracking, sem checkout. Contato supervisionado.
