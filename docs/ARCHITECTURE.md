# Architecture — Aurora de Carvalho

- Tipo: site estático, HTML + CSS, zero framework, zero build, zero analytics, zero cookies.
- Entrada: `index.html`; estilos: `assets/styles.css`; favicon: `assets/favicon.svg`.
- Catálogo editorial: `content/catalog.json` (fonte para futuras listagens).
- Metadata: canonical `https://auroradecarvalho.github.io/`, Open Graph básico, `robots.txt`, `sitemap.xml`.
- Config operacional privada: `.local/` (gitignored) + mapa central `~/.config/familia-digital/account-map.json`.
- Remoto: `origin` → `git@github-aurora:AuroraDeCarvalho/AuroraDeCarvalho.github.io.git` (SSH exclusiva).
- Hospedagem provisória: GitHub Pages do repo `<user>.github.io`; futura: domínio próprio sem acoplar identidade ao provedor.
- Isolamento: repo, remote, SSH, Chrome profile e Google próprios; nenhum compartilhamento com irmãos.

## Owner e workspace canônico

- Owner independente e gravável: `/home/andre/aurora-de-carvalho` (`write_scope` exatamente este diretório).
- A identidade digital de Aurora NÃO pertence arquiteturalmente ao ecossistema iLúmino e NÃO deve ser movida para `/home/andre/ilumino-workspace/repositories/` nem para qualquer subárvore iLúmino.
- GitHub: Personal Account `AuroraDeCarvalho`; repositório `AuroraDeCarvalho/AuroraDeCarvalho.github.io`. Sem Organization, sem repositório central familiar, sem quarto projeto de governança, sem camada intermediária.
- Não há compartilhamento de Git ownership, backlog, secrets, assets ou identidade com o iLúmino, nem com projetos de terceiros.

## iLúmino como referência metodológica (não parent workspace)

- `ilumino-workspace` é referência metodológica; `aurora-de-carvalho` é owner independente que adota essa maturidade, adaptada localmente e proporcionalmente ao estágio do projeto.
- Herança metodológica aplicável, quando pertinente: documentação viva; `AGENTS.md`; `PROJECT_STATE.md`; SPEC/ADR para decisões materiais; owner e `write_scope` explícitos; separação fato/hipótese/decisão; gates `PREWRITE`, `PRECOMMIT`, `PREPUSH`, `CLOSEOUT`; validação baseada em evidência (sem fabricar PASS); preservação de ancestry e estado Git; política rigorosa de segredos; `economic-fit-first` para futuras decisões materiais de stack/superfície; mudanças pequenas, verificáveis e reversíveis.
- Isso é herança de princípios e mecanismos, NÃO dependência física ou operacional.

## Ausência de dependência runtime/build

- O projeto NÃO depende em runtime/build de arquivos de `ilumino-workspace`.
- Sem symlink para governança; sem necessidade de estar dentro da árvore iLúmino.
- Sem sincronização automática de documentação com o iLúmino; o que for incorporado aqui vive localmente e evolui por decisão local.
- Decisão material registrada em `docs/adr/ADR-0001-independencia-ownership-heranca-metodologica.md`.
