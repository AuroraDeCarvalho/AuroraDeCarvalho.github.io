# Aurora de Carvalho — Estado do projeto

Atualizado: 2026-10-01
Status: `SITE-MULTIPAGINA-V1 / HOSPEDAGEM-EXTERNA-PENDENTE-DECISAO-HUMANA`

## Estado corrente

- Site estático multipágina v1 (SPEC-0002): `index.html` + `loja.html` +
  `projetos.html` + `blog.html` + `links.html` + `sobre.html` + `contato.html`,
  `assets/styles.css` (design system A em custom properties) + `assets/app.js`
  (vanilla progressivo), `content/catalog.json` honesto (vazio onde não há item
  real), zero framework/build/analytics.
- Identidade visual A ("Alvorada editorial") amadurecida: papel quente, Georgia
  local, cobre `#b45309`, terrosos/creme/neutros/verde discreto, footer editorial,
  motivos botânicos próprios em SVG. Sem imagens de terceiros, sem retrato
  inventado, sem newsletter com coleta, sem preços/posts fictícios.
- Arquitetura de publicação inalterada (ADR-0002): GitHub = SCM/versionamento/
  backup; GitHub Pages = preview técnico temporário; hospedagem oficial =
  serviço externo ainda não contratado; `auroradecarvalho.com` = domínio
  canônico futuro. Nenhum hosting provisionado nesta missão.
- Owner independente: `/home/andre/aurora-de-carvalho`; GitHub Personal Account
  `AuroraDeCarvalho`, repo `AuroraDeCarvalho/AuroraDeCarvalho.github.io`.
- Diretriz consolidada: `ilumino-workspace` é referência metodológica;
  `aurora-de-carvalho` é owner independente que adota essa maturidade
  (ver `docs/ARCHITECTURE.md` e `docs/adr/ADR-0001-*`).

## Referências ativas

- SPECs vigentes: `docs/SPEC-0001-digital-identity-foundation.md` (fundação) +
  `docs/SPEC-0002-site-multipagina-v1.md` (site multipágina v1).
- ADRs vigentes: `docs/adr/ADR-0001-independencia-ownership-heranca-metodologica.md`
  (ownership) + `docs/adr/ADR-0002-publicacao-hospedagem-externa.md`
  (publicação/hospedagem, `PENDING_HUMAN_DECISION`). Nenhum ADR novo: multipágina
  estática sem build permanece dentro do ADR-0002.
- Docs vivos: `README.md`, `docs/IDENTITY.md`, `docs/ROADMAP.md`,
  `docs/ARCHITECTURE.md`, `docs/PRIVACY-AND-SAFETY.md`.

## Pendências priorizadas

1. Decisão humana: aprovar contratação da hospedagem externa recomendada
   (Cloudflare Pages, custo US$ 0 no estágio atual) — sem conta, gasto, domínio,
   DNS ou deploy externo até lá (`HUMAN_DECISION_REQUIRED`).
2. Fase 1 do roadmap: 2–3 projetos reais com fotos seguras.
3. Compra/transferência de `auroradecarvalho.com` em missão financeira separada,
   junto da ativação da hospedagem oficial.

## Próximo passo

- Aguardar decisão humana sobre hospedagem; então executar contratação + domínio
  + DNS + deploy oficial em missão própria.

## Blockers / decisões abertas

- `HUMAN_DECISION_REQUIRED`: aprovação da candidata (Cloudflare Pages) e
  autorização para criar conta / contratar / registrar domínio / alterar DNS.
- Sem blocker técnico: repo limpo e (após push desta missão) em sincronia com
  `origin/main`.
