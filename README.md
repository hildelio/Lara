# 🌿 Lara Rocha - Psicóloga Homepage

Homepage profissional para a psicóloga Lara Rocha (CRP 03/16015), especializada em atendimento presencial e online em Salvador, BA.

## 📋 Sobre o Projeto

Este é um website profissional desenvolvido com foco em:
- **Acessibilidade** - Seguindo as diretrizes WCAG 2.1
- **Performance** - Otimizado para carregamento rápido
- **Responsividade** - Funciona perfeitamente em todos os dispositivos
- **SEO** - Otimizado para mecanismos de busca

## 🏗️ Estrutura do Projeto

```
lara-rocha-homepage/
├── index.html                    # Página principal
├── assets/                       # Recursos do projeto
│   ├── css/
│   │   └── styles.css           # Estilos principais
│   ├── js/
│   │   └── main.js              # JavaScript principal
│   └── images/                  # Imagens
│       ├── profile.jpeg         # Foto da psicóloga
│       └── carousel/            # Imagens do carrossel
│           ├── slide1.svg
│           ├── slide2.svg
│           ├── slide3.svg
│           ├── slide4.svg
│           └── slide5.svg
└── README.md                    # Documentação
```

## ✨ Funcionalidades

### 🎨 Design & UX
- Design minimalista e acolhedor
- Paleta de cores inspirada na natureza
- Tipografia elegante (Playfair Display + Lora + Montserrat)
- Animações suaves e não intrusivas

### 📱 Responsividade
- Layout adaptável para desktop, tablet e mobile
- Menu hambúrguer em dispositivos móveis
- Imagens otimizadas para diferentes tamanhos de tela

### 🖼️ Carrossel de Imagens
- 5 slides com transições suaves
- Imagens locais (sem dependências externas)
- Pausa automática ao interagir
- Acessível via teclado

### 🎯 Seções
1. **Hero** - Apresentação principal com carrossel
2. **Sobre** - Informações da psicóloga
3. **Serviços** - Tipos de atendimento
4. **Convênios** - Planos de saúde aceitos
5. **Contato** - Formas de contato direto

### ⚡ Performance
- CSS e JavaScript otimizados
- Imagens em formato SVG (leves)
- Lazy loading implementado
- Código minificado e organizado

### ♿ Acessibilidade
- Navegação por teclado
- Leitores de tela compatíveis
- Contraste adequado
- Textos alternativos em imagens
- Estrutura semântica HTML5

## 🚀 Como Usar

1. **Desenvolvimento Local:**
   - Abra o arquivo `index.html` em um navegador
   - Ou use o Live Server do VS Code

2. **Hospedagem:**
   - Faça upload de todos os arquivos para seu servidor
   - Certifique-se de manter a estrutura de pastas

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos avançados com Grid e Flexbox
- **JavaScript ES6+** - Interatividade moderna
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia

## 📞 Informações de Contato

- **Telefone:** (71) 99278-1671
- **WhatsApp:** Link direto com mensagem pré-definida
- **E-mail:** lararochap@hotmail.com
- **CRP:** 03/16015

## 🎨 Paleta de Cores

- **Background:** #F8F6F2 (Creme claro)
- **Texto Principal:** #3D403A (Verde escuro)
- **Acentos:** #5A6349 (Verde oliva)
- **Branco:** #FFFFFF

## � Correções Recentes Implementadas

### ✅ Carrossel de Imagens JPG
- **Problema**: Carrossel usando imagens SVG placeholder
- **Solução**: Migrado para usar 4 imagens JPG reais (slide1.jpg - slide4.jpg)
- **Benefício**: Melhor qualidade visual e profissionalismo

### ✅ Correção de Sobreposição do Header
- **Problema**: Header sobrepondo conteúdo em telas de laptop (1024-1366px)
- **Solução**: 
  - Ajustado padding-top da seção hero para 120px
  - Adicionadas media queries específicas para laptops
  - Altura do header otimizada para diferentes tamanhos de tela
- **Benefício**: Layout perfeito em todas as resoluções

### ✅ Acessibilidade Aprimorada
- **Melhorias Implementadas**:
  - Estrutura semântica HTML5 com `<figure>`, `<header>`, `<article>`
  - ARIA roles para melhor navegação por leitores de tela
  - Focus styles aprimorados para navegação por teclado
  - Suporte a modo de alto contraste
  - Roles semânticos (`role="listitem"`, `role="presentation"`)
- **Benefício**: Conformidade com WCAG 2.1 AA

### 📱 Media Queries Otimizadas
- **Desktop Large** (1200px+): Layout completo
- **Laptop Standard** (1024-1199px): Prevenção de sobreposição
- **Tablet/Laptop Small** (769-1023px): Layout adaptado
- **Mobile** (768px-): Interface otimizada para touch

## �📝 Licença

Este projeto foi desenvolvido especificamente para Lara Rocha - Psicóloga.
Todos os direitos reservados © 2025.

---

**Desenvolvido com 💚 por um desenvolvedor especializado em websites para profissionais da saúde mental.**
