# Architecture — Aurora de Carvalho

- Tipo: site estático, HTML + CSS, zero framework, zero build, zero analytics, zero cookies.
- Entrada: `index.html`; estilos: `assets/styles.css`; favicon: `assets/favicon.svg`.
- Catálogo editorial: `content/catalog.json` (fonte para futuras listagens).
- Metadata: canonical `https://auroradecarvalho.github.io/`, Open Graph básico, `robots.txt`, `sitemap.xml`.
- Config operacional privada: `.local/` (gitignored) + mapa central `~/.config/familia-digital/account-map.json`.
- Remoto: `origin` → `git@github-aurora:AuroraDeCarvalho/AuroraDeCarvalho.github.io.git` (SSH exclusiva).
- Hospedagem provisória: GitHub Pages do repo `<user>.github.io`; futura: domínio próprio sem acoplar identidade ao provedor.
- Isolamento: repo, remote, SSH, Chrome profile e Google próprios; nenhum compartilhamento com irmãos.
