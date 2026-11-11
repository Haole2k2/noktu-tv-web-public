# NOKTU TV · Site institucional R3.1

## Objetivo
Site institucional premium de apresentação da NOKTU TV, separado dos serviços de reprodução e do painel comercial. Linguagem para consumidores: navegação por controle remoto, programação ao vivo, filmes, séries, dispositivos e NOKTU Connect. NÃO utilizar jargões de sistemas de distribuição de canais na cópia pública.

## Fonte visual e conteúdo
- Identidade canônica: `../Identidade` e arquivos `assets/wordmark.svg`, `assets/mark.svg`, Manrope OFL `assets/manrope-latin-variable.woff2`. Cores: Night #111719, Signature #62D6C3, Paper #F2F3EE.
- Hero e prévias de interface: skeletons neutros sem títulos de filmes, fotos, canais ou telas reais inventadas.
- Plataforma Samsung: em validação física; LG: planejada; Web/celular: em desenvolvimento. A marca de fabricante no site indica apenas contexto de dispositivo, não parceria, certificação ou aprovação comercial.
- SVGs de marcas: `assets/brand-samsung.svg` e `assets/brand-lg.svg` obtidos de Simple Icons v16:
  - https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/samsung.svg
  - https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/lg.svg
  - viewBox aparado só para remover espaços transparentes; paths originais preservados.
  - Licenças de arte/trademarks: https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md . A licença geral Simple Icons não concede direitos de uso de marcas de terceiros. Usar exclusivamente para identificação referencial, verificar as diretrizes das marcas antes de distribuição ampla.
- Em Web/celular: ícone original do kit NOKTU `assets/icon-devices.svg`; sem logotipo de um terceiro ou promessa de disponibilidade.
- Navegação: #inicio, #experiencia, #conexao, #dispositivos; tabs Início/Ao vivo com ARIA e teclado.

## QA e publicação
- `node tools/qa-release.mjs` verifica 13 condições, incluindo frases públicas sem 'IPTV', 'lista', 'M3U', 'Xtream', nomes de revenda ou provedores.
- `node ../qa/qa-public-site-r3.mjs` verifica 5 larguras (1920, 1440, 768, 390, 320), tabs, navegação, overflow e gera capturas de tela para revisão.
- Repositório de deploy público APENAS com site estático: https://github.com/Haole2k2/noktu-tv-web-public . Backup privado: https://github.com/Haole2k2/noktu-tv-site .
- Render workspace HaoleSolution, serviço `noktu-tv-site`: https://noktu-tv-site.onrender.com . O serviço estático não armazena banco ou credenciais.
- `noktutv.com.br` continua apontando à Vercel protegida por SSO. NÃO alterar DNS nem remover o noindex sem preparar e confirmar transferência do domínio.
- Não alterar app-web, AppTizen, Partners, Gateway, Core ou serviços 4173/4180/4184/4191.

## Limites
O kit NOKTU ainda requer verificação jurídica da marca R3. O site não promete catálogo, conteúdo ou direitos de obras; a disponibilidade depende de homologação e contratos pertinentes.
