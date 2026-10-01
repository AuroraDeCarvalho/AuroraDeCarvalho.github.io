# ADR-0002 — Arquitetura de publicação: GitHub como SCM, hospedagem externa como runtime

- Data: 2026-10-01
- Estado: `PENDING_HUMAN_DECISION` (candidata `RECOMMENDED`, sem contratação)
- Projeto: Aurora de Carvalho (`/home/andre/aurora-de-carvalho`)
- Sucessora de: `ADR-0001` (não a altera; registra evolução da camada de hospedagem)

## Decisão

1. `GitHub = código-fonte + histórico + backup versionado` (SCM). Continua sendo
   o remote `origin` e a fonte para deploys, mas não é a hospedagem pública final.
2. `Hospedagem externa = runtime/publicação oficial do site` (destino oficial,
   ainda não contratado — ver estado abaixo).
3. `GitHub Pages = preview técnico temporário`. Mantido no ar sem destruição,
   servindo o mesmo conteúdo estático, até a hospedagem oficial existir.
4. `auroradecarvalho.com = domínio canônico futuro` (sem compra/registro/DNS
   nesta missão). Metadados canônicos do site já apontam para ele.
5. Separação source × runtime: nenhum arquivo do site exige GitHub Pages para
   funcionar; servir o diretório como estático em qualquer host é suficiente.

## Contexto

- Fato: o site é estático puro (`index.html` + `assets/` + `content/`), zero
  framework/build/analytics/cookies; servido pelo Pages é byte-idêntico ao
  `index.html` local (verificado 2026-10-01, HTTP 200).
- Fato: a documentação anterior chamava o Pages de "site canônico"/"hospedagem",
  o que contradiz a arquitetura desejada. Correção documental nesta missão.
- Fato: acoplamentos reais a `auroradecarvalho.github.io` existiam só em
  metadados (`canonical`, `og:url`, `robots.txt`, `sitemap.xml`); corrigidos para
  o domínio canônico futuro. Paths de assets/links internos já eram relativos.

## Candidata recomendada (economic-fit-first)

**Cloudflare Pages** — `RECOMMENDED`, contratação pendente de decisão humana.

- Verificado na documentação oficial vigente (`developers.cloudflare.com/pages`,
  tabela de limites, 2026-10-01): plano Free US$ 0, 500 builds/mês, 100 domínios
  customizados por projeto, 20.000 arquivos, HTTPS e domínio próprio incluídos;
  sem número publicado de banda/requests no Free (ilimitado declarado na linha).
- Encaixe: deploy por Git igualmente simples e reversível; zero build necessário;
  sem servidor; sem analytics/tracking obrigatório (Web Analytics é opt-in);
  privacidade compatível com identidade infantil; saída por arquivos estáticos
  (sem lock-in relevante).
- Limite conhecido: conta Cloudflare + zona/DNS do domínio exigem ação humana
  futura; apex requer nameservers Cloudflare (documentado, reversível).

## Alternativas rejeitadas

1. **Manter GitHub Pages como oficial.** Rejeitada: contraria a diretriz
   arquitetural (source ≠ runtime); identidade ficaria acoplada ao provedor SCM.
2. **Netlify (Starter).** Rejeitada para preferência: Free US$ 0 mas 100 GB
   banda/mês e 300 min build — suficiente hoje, porém teto publicado inferior
   ao da candidata para crescimento sem custo.
3. **Vercel (Hobby).** Rejeitada: plano gratuito restrito a uso pessoal
   não-comercial — incompatível com evolução futura a catálogo/produtos (Fase 3).
4. **Servidor próprio / Contabo / Elgin / VPS.** Rejeitados: manutenção,
   custo e superfície desproporcionais ao estágio; proibidos nesta missão.
5. **Backend, CMS, framework, analytics.** Rejeitados: sem necessidade provada.

## Consequências

- Docs passam a definir Pages como preview temporário, nunca "site oficial".
- Nenhum arquivo novo de config de hospedagem foi necessário (estático puro
  não exige; criar acoplaria sem benefício). Deploy futuro = apontar a
  candidata ao repo ou upload do diretório.
- Nenhuma conta, gasto, domínio, DNS, secret, OAuth ou deploy externo nesta
  missão: tudo que exigir esses atos está em `HUMAN_DECISION_REQUIRED`.

## Limites (não decisão)

- Esta ADR não contrata, compra, registra, provisiona nem publica nada externo.
- Não autoriza redesenho, framework, backend, analytics ou mudança de ownership.
