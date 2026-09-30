# ADR-0001 — Independência de ownership/workspace + adoção metodológica do iLúmino

- Data: 2026-09-30
- Estado: aceita
- Projeto: Aurora de Carvalho (`/home/andre/aurora-de-carvalho`)

## Decisão

1. `aurora-de-carvalho` é owner independente. Workspace canônico:
   `/home/andre/aurora-de-carvalho` (`write_scope` exatamente este diretório).
2. GitHub: Personal Account `AuroraDeCarvalho`, repositório
   `AuroraDeCarvalho/AuroraDeCarvalho.github.io`. Sem Organization, sem
   repositório central familiar, sem quarto projeto de governança, sem camada
   intermediária.
3. `ilumino-workspace` é referência metodológica — não parent workspace, não
   dependência física ou operacional. O projeto incorpora localmente, de forma
   proporcional ao seu estágio, os princípios e mecanismos adequados:
   documentação viva; `AGENTS.md`; `PROJECT_STATE.md`; SPEC/ADR para decisões
   materiais; owner e `write_scope` explícitos; separação fato/hipótese/decisão;
   gates `PREWRITE`, `PRECOMMIT`, `PREPUSH`, `CLOSEOUT`; validação baseada em
   evidência sem fabricar PASS; preservação de ancestry e estado Git; política
   rigorosa de segredos; `economic-fit-first` para futuras decisões materiais de
   stack/superfície; mudanças pequenas, verificáveis e reversíveis.

## Contexto

- A identidade digital de Aurora precisa de custódia própria, transferível e
  evolutiva (vitrine educativa → portfólio/publicação/comércio/serviços),
  sem acoplamento a ecossistema institucional adulto nem a projetos de terceiros.
- O iLúmino construiu maturidade documental e metodológica reaproveitável como
  referência, mas sua árvore, ownership, backlog, secrets, assets e identidade
  não pertencem a Aurora.
- Fato: o repositório local possui ancestry próprio (`bootstrap` →
  `establish independent digital identity`), remote `origin` exclusivo via SSH
  `github-aurora`, e nenhuma referência cruzada a iLúmino ou a terceiros.

## Consequências

- Aurora nunca é movida para `/home/andre/ilumino-workspace/repositories/` ou
  qualquer subárvore iLúmino.
- Nenhuma dependência runtime/build de arquivos de `ilumino-workspace`; sem
  symlink de governança; sem necessidade de estar dentro da árvore iLúmino.
- Sem compartilhamento de Git ownership, backlog, secrets, assets ou identidade
  com o iLúmino.
- Sem sincronização automática de documentação com o iLúmino; o incorporado
  localmente evolui por decisão local.
- Futuras decisões materiais de stack/superfície passam por `economic-fit-first`
  com decisão explícita, sem herdar stack automaticamente.

## Limites (não decisão)

- Esta ADR não cria Organization, repositório central familiar, projeto de
  governança ou camada intermediária.
- Não autoriza framework, backend, analytics, CMS, dependências, compra de
  domínio, publicação em Pages ou qualquer conta/credencial/SSH/infraestrutura.
- Não altera identidade visual/site além de correções documentais.

## Alternativas rejeitadas

1. Colocar Aurora em `/home/andre/ilumino-workspace/repositories/`.
   Rejeitada: subordinaria arquiteturalmente uma identidade pessoal independente
   a um ecossistema institucional, criando acoplamento físico, operacional e de
   ownership incompatível com custódia própria e transferibilidade.
2. Criar Organization ou repositório central familiar (incluindo quarto projeto
   de governança ou camada intermediária). Rejeitada: burocracia desproporcional
   ao estágio; a Personal Account `AuroraDeCarvalho` já expressa ownership.
3. Copiar mecanicamente a governança de produtos iLúmino (specs/ADRs/rituais
   específicos). Rejeitada: herança é de princípios e mecanismos proporcionais,
   não de burocracia de produto alheio.
4. Dependência física/operacional do iLúmino (symlink, build/runtime cruzado,
   sync automático de docs). Rejeitada: violaria independência e reversibilidade;
   o projeto deve construir e publicar sozinho.
