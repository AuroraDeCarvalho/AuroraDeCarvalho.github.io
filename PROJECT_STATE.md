# Aurora de Carvalho — Estado do projeto

Atualizado: 2026-10-01
Status: `SITE-ESTATICO-PORTAVEL / HOSPEDAGEM-EXTERNA-PENDENTE-DECISAO-HUMANA`

## Estado corrente

- Site estático fundacional (`index.html` + `assets/` + `content/catalog.json`),
  zero framework/build/analytics, com identidade visual A ("Alvorada editorial").
- Arquitetura de publicação corrigida (ADR-0002): GitHub = SCM/versionamento/
  backup; GitHub Pages = preview técnico temporário; hospedagem oficial =
  serviço externo ainda não contratado; `auroradecarvalho.com` = domínio
  canônico futuro.
- Site auditado como host-agnostic: paths relativos, sem build, sem arquivos
  específicos de provedor (`.nojekyll`/`CNAME`/workflows); metadados canônicos
  apontam para o domínio futuro. Servido pelo Pages é byte-idêntico ao local.
- Owner independente: `/home/andre/aurora-de-carvalho`; GitHub Personal Account
  `AuroraDeCarvalho`, repo `AuroraDeCarvalho/AuroraDeCarvalho.github.io`.
- Diretriz consolidada: `ilumino-workspace` é referência metodológica;
  `aurora-de-carvalho` é owner independente que adota essa maturidade
  (ver `docs/ARCHITECTURE.md` e `docs/adr/ADR-0001-*`).

## Referências ativas

- SPEC vigente: `docs/SPEC-0001-digital-identity-foundation.md`.
- ADRs vigentes: `docs/adr/ADR-0001-independencia-ownership-heranca-metodologica.md`
  (ownership) + `docs/adr/ADR-0002-publicacao-hospedagem-externa.md`
  (publicação/hospedagem, `PENDING_HUMAN_DECISION`).
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
- Sem blocker técnico: preview Pages no ar (HTTP 200, em sincronia com `main`),
  repo limpo e em sincronia com `origin/main`.
