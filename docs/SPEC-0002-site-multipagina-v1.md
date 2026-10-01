# SPEC-0002 — Site multipágina v1 (fundação de produto)

- Estado: `ACEITA — EM EXECUÇÃO`
- Data: 2026-10-01
- Sucessora de: `SPEC-0001` (não a invalida; materializa as superfícies v1 como páginas navegáveis)
- Referência visual/estrutural (read-only, não publicada): `/home/andre/Desktop/AURORA/Mapa do Site Aurora de Carvalho.png`
- ADR nova: nenhuma (multipágina estática sem build permanece dentro de `ADR-0002`; decisão reversível documentada aqui)

## 1. Objetivo

Transformar a página-âncora fundacional em um site multipágina navegável que funcione
simultaneamente como identidade digital soberana, vitrine de produtos em preparação,
portfólio de projetos, hub de canais, superfície editorial futura, página
institucional e ponto de contato — sem inventar conteúdo factual e sem acoplar a
qualquer host, framework, backend ou serviço externo.

## 2. Fatos observados (PREWRITE 2026-10-01)

- `HEAD 06b6f70`, branch `main`, árvore limpa, em sincronia com `origin/main`; ancestry de 4 commits.
- `index.html` monolítico com 7 seções-âncora; `content/catalog.json` com `items: []`
  em projetos/ideias/produtos e apenas o link GitHub documentado em links.
- Não existe produto, projeto, post ou canal documentado além do GitHub — logo,
  Loja/Projetos/Blog entram em **estado honesto de preparação**, não com conteúdo fictício.
- Mockup de referência: hero editorial com CTAs triplos, faixa de produtos em destaque,
  projetos, blog/diário, "onde me encontrar", sobre com retrato ilustrado, newsletter,
  footer editorial; mapa com 7 superfícies (Início, Loja, Projetos, Blog, Links, Sobre,
  Contato). Desvios conscientes: sem retrato genérico como se fosse Aurora, sem
  newsletter com coleta de e-mail (sem backend seria UX enganosa), sem preços/posts
  fictícios, sem usernames inventados.

## 3. Escopo (inclui)

- 7 páginas estáticas: `index.html`, `loja.html`, `projetos.html`, `blog.html`,
  `links.html`, `sobre.html`, `contato.html`.
- Design system `Alvorada editorial` amadurecido em `assets/styles.css` via CSS custom
  properties (cores, espaçamento, tipografia, radius, bordas, sombras, containers,
  breakpoints); `assets/app.js` vanilla progressivo (menu mobile, ano dinâmico,
  link ativo); ilustrações próprias inline em SVG + composições CSS (nenhuma imagem
  de terceiro, nenhum retrato inventado, nenhum fetch remoto).
- SEO/metadados: title/description por página, canonical futuro por página em
  `https://auroradecarvalho.com/`, Open Graph básico, favicon, `robots.txt`,
  `sitemap.xml` com as 7 URLs.
- `content/catalog.json` atualizado como fonte editorial honesta (contadores vazios
  explícitos, nenhum item fictício).

## 4. Fora de escopo (não inclui)

Checkout, preços, estoque, avaliações, contas/usuários, newsletter com coleta,
formulário que finja envio, posts ou produtos fictícios, canais externos inventados,
framework/build/CMS/backend/analytics/tracking/CDN/fontes externas, qualquer conta,
DNS, domínio, deploy ou provedor (Cloudflare segue `PENDING_HUMAN_DECISION`).

## 5. Information architecture

Header global (Início · Loja · Projetos · Blog · Links · Sobre · Contato) + footer
editorial global. Home agrega: hero com posicionamento curto + 3 CTAs
(produtos/projetos/links), vitrine em preparação, projetos, diário, onde encontrar
Aurora, bloco sobre, footer. Loja: estado `em preparação` + estrutura futura
(categorias-molde rotuladas como não-ofertas) + garantias do que nunca será
fingido. Projetos/Blog: arquitetura de listagem + empty state editorial maduro.
Links: só canais documentados (GitHub); demais vagas marcadas como futuras, sem
usernames. Sobre: institucional curto, neutro, sem biografia inventada em 1ª pessoa.
Contato: painel supervisionado pelos responsáveis, sem e-mail operacional exposto,
sem formulário enganoso.

## 6. Requisitos de produto / visuais / responsividade / acessibilidade

- Visual: papel quente, serifada Georgia/system-safe, cobre `#b45309`, terrosos/creme/
  neutros/verde discreto, hierarquia tipográfica forte, ritmo vertical, footer completo;
  autoral e duradouro (infância → vida adulta), sem infantilização, sem clichês de
  gênero, sem cara de template.
- Responsivo: 320 / 360 / 390 / 412 / 768 / 1024 / 1440 — zero overflow horizontal,
  navegação utilizável por teclado e touch (sem dependência de hover), CTAs tocáveis,
  cards reordenados, SVGs fluidos.
- Acessibilidade proporcional: `lang="pt-BR"`, landmarks, headings coerentes, skip link,
  foco visível, `aria` mínimo necessário, alt útil, contraste suficiente,
  `prefers-reduced-motion` respeitado, alvos de toque adequados.
- Host-agnostic: paths relativos, zero dependência de GitHub Pages/Cloudflare/Vercel/
  Netlify/VPS; servir o diretório em qualquer HTTP static host basta.

## 7. Privacidade (proibido no conteúdo público)

Idade exata, nascimento, escola, endereço, bairro, rotina, localização, telefone,
e-mail operacional, documentos, saúde, finanças, credenciais, PII desnecessária;
sem nomes Tomás/Matias; sem identidade Andre/iLúmino na interface pública.

## 8. Critérios de aceitação

1. As 7 páginas + CSS/JS/assets retornam 200 servidas de HTTP estático local; zero
   404 internos; JSON válido; `git diff --check` limpo.
2. Grep de privacidade/identidade limpo (PII, Tomás/Matias, Andre/iLúmino,
   `github.io` como oficial, URLs absolutas de provedor).
3. Viewports mínimos sem overflow horizontal nem texto cortado (QA visual real quando
   houver navegador; caso contrário, limitação declarada).
4. Commits locais atômicos, ancestry preservada, push sem force para `origin/main`
   após `ssh -T git@github-aurora` como `AuroraDeCarvalho`.
