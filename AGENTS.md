# AGENTS.md — Aurora de Carvalho

## Owner e escopo

- Único owner gravável: `/home/andre/aurora-de-carvalho`.
- `write_scope = ["/home/andre/aurora-de-carvalho"]`.
- Não escrever em `/home/andre/ilumino-workspace` nem em projetos de terceiros.
- `/home/andre/ilumino-workspace` pode ser consultado SOMENTE READ-ONLY como
  fonte metodológica; leitura não concede escrita nem cria dependência.
- GitHub: Personal Account `AuroraDeCarvalho`, repo
  `AuroraDeCarvalho/AuroraDeCarvalho.github.io`. Sem Organization, sem
  repositório central familiar, sem camada intermediária.

## Ordem de leitura

1. Este `AGENTS.md`;
2. `PROJECT_STATE.md`;
3. A SPEC ou ADR ativa nele referenciada;
4. Somente os docs estritamente necessários (`docs/IDENTITY.md`,
   `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/PRIVACY-AND-SAFETY.md`);
5. Git, diff e verificações conforme a necessidade.

## Antes de mudança material

- Registrar ou atualizar SPEC/ADR curta com objetivo, limites e validação
  proporcional. Decisões arquiteturais materiais vão para `docs/adr/`.
- Separar fato observado, hipótese e decisão. Não afirmar o que não foi
  verificado; não fabricar PASS.
- Mudanças pequenas, verificáveis e reversíveis. Sem framework, backend,
  analytics, CMS ou dependências sem necessidade provada
  (`economic-fit-first` em futuras decisões materiais de stack/superfície).

## Gates

- `PREWRITE`: recapturar branch, HEAD, status, remote/upstream e ancestry
  relevante antes de alterar.
- `PRECOMMIT`: recapturar status, revisar diff integral, rodar validações
  proporcionais existentes.
- `PREPUSH`: só com remote/upstream válido e sem exigir autenticação nova,
  credencial, SSH ou intervenção fora do contratado. Publicação de Pages é
  missão separada.
- `CLOSEOUT`: reportar veredito factual, HEAD inicial/final, arquivos,
  validações executadas, estado Git final e pendências reais.

## Git e segredos

- Preservar ancestry e estado Git: sem squash/rebase/reset destrutivo,
  sem force-push, sem mudança de remote sem decisão material explícita.
- Nunca incluir segredos ou PII operacional em docs, Git, logs ou prompts
  (credenciais, chaves, tokens, documentos, contatos privados, rotinas).
  `.local/` é operacional privado e permanece gitignored.
