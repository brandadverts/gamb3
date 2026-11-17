import type { Dictionary } from "./tr";

/**
 * Textos em português (pt-BR). Escritos para quem opera a plataforma de verdade — direção técnica,
 * pagamentos, trading — e não para um folheto. Números no formato brasileiro (590.418 · 97,2%).
 */
const pt: Dictionary = {
  site: {
    name: "Gamb Gaming",
    tagline: "B2B / iGAMING",
  },

  meta: {
    home: {
      title: "Gamb Gaming — seu parceiro de tecnologia em iGaming",
      description:
        "Sportsbook, cassino, pagamentos, bônus, CRM, risco e IA para operadores licenciados. Montagem e operação com um time só.",
    },
    products: {
      title: "Produtos e módulos de iGaming — Gamb Gaming",
      description:
        "Sportsbook, agregação de cassino, carteira única, pagamentos, CRM, bônus, afiliados, risco e IA: os 32 módulos que uma operação de iGaming precisa, em uma plataforma.",
    },
    technology: {
      title: "Arquitetura de plataforma iGaming e API — Gamb Gaming",
      description:
        "Integração orientada a API, serviços modulares, camada de dados comum e segurança embutida. Uma infraestrutura que se comporta igual na rodada mais cheia.",
    },
    cases: {
      title: "Casos: lançamento, migração, multimarca — Gamb Gaming",
      description:
        "Um lançamento do zero, uma migração sem parada e uma segunda marca: três cenários representativos, seus riscos e as medidas previstas.",
    },
    packages: {
      title: "Pacotes e escopo: Launch, Scale, Enterprise — Gamb Gaming",
      description:
        "Escopos de partida para operações novas, operadores em crescimento e grupos multimarca. O preço sai depois da descoberta.",
    },
    demo: {
      title: "Agendar uma demo — Gamb Gaming",
      description:
        "Percorra a plataforma com o time técnico: seus objetivos, os módulos e um plano de início em uma única conversa.",
    },
    blog: {
      title: "Blog: notas sobre infraestrutura de iGaming — Gamb Gaming",
      description:
        "Escolha de plataforma, integração, pagamentos, risco e operação — escrito para times que procuram um fornecedor.",
    },
    notfound: {
      title: "Página não encontrada — Gamb Gaming",
      description: "A página mudou de lugar ou o endereço foi digitado errado.",
    },
  },

  nav: {
    home: "Início",
    products: "Produtos",
    technology: "Tecnologia",
    cases: "Casos",
    packages: "Pacotes",
    blog: "Blog",
    demo: "Agendar uma demo",
    menu: "Menu",
    close: "Fechar",
    mainNav: "Menu principal",
    mobileNav: "Menu móvel",
    skip: "Ir para o conteúdo",
    language: "Idioma",
    logoLabel: "Início da Gamb Gaming",
    menuNote: ["Tecnologia B2B apenas para operadores licenciados.", "Não damos suporte a jogadores nem a usuários finais."],
  },

  footer: {
    headline: ["A tecnologia", "por trás do jogo."],
    copy: "Parceiro de tecnologia e operação de ponta a ponta para operadores de iGaming licenciados.",
    explore: "Explorar",
    products: "Produtos",
    pagesLabel: "Páginas",
    cardTitle: "Vamos percorrer a plataforma juntos.",
    cardCopy: "Conte o que você está montando; a visita será preparada em cima da sua operação.",
    legal:
      "A Gamb Gaming presta serviços de tecnologia e operação somente a operadores licenciados. Não oferece jogo, apostas nem suporte de conta a usuários finais. O escopo dos serviços depende da regulamentação do mercado em que o operador atua.",
    rights: "Todos os direitos reservados.",
    top: "Voltar ao topo",
  },

  heroes: {
    home: {
      title: ["Seu parceiro de", "tecnologia em iGaming."],
      description:
        "Sportsbook, cassino, pagamentos, bônus, CRM, risco e IA para operadores licenciados. Montagem e operação com um time só.",
    },
    products: {
      title: ["A operação inteira,", "em uma plataforma."],
      description:
        "{modules} módulos em {groups} áreas: do jogo ao saque, do bônus ao risco. Comece pelo que precisa; o resto entra quando você estiver pronto.",
    },
    technology: {
      title: ["O tráfego sobe.", "O jogo continua."],
      description:
        "Integração orientada a API, serviços modulares e uma camada de dados comum — feitos para a rodada mais pesada da temporada.",
      bullets: ["Orientada a API", "Modular", "Carteira única", "Acesso por papel"],
    },
    cases: {
      title: ["Montar uma operação", "é um problema com solução."],
      description:
        "Lançamentos novos, migrações controladas e crescimento multimarca. Três cenários representativos.",
    },
    packages: {
      title: ["Construa hoje.", "Deixe o amanhã aberto."],
      description:
        "Nada de plano de prateleira. Um ponto de partida do tamanho da sua operação e um escopo que cresce junto.",
    },
  },

  home: {
    stats: [
      { value: "100%", label: "FOCO NO CLIENTE" },
      { value: "14 dias", label: "PLANO DE ABERTURA ALVO" },
      { value: "{modules} módulos", label: "UMA PLATAFORMA" },
    ],
    heroPrimary: "Conhecer a plataforma",
    heroSecondary: "Ver nossos serviços",
    servicesTitle: "O que mais nos pedem",
    servicesCopy: "Da montagem ao dia a dia, a experiência que a sua operação precisa.",
    services: [
      { title: "Plataforma e integração", copy: "Reunir produtos, dados e processos em uma espinha dorsal só." },
      { title: "Operação de pagamentos", copy: "Conexões de pagamento, acompanhamento de transações e conciliação." },
      { title: "CRM e gestão de jogadores", copy: "Segmentação, campanhas e ciclo de vida." },
      { title: "Risco e segurança", copy: "Centralizar identidade, acesso, limites e regras de risco." },
      { title: "Gestão de afiliados", copy: "Parcerias, comissões e acompanhamento de desempenho." },
    ],
    tileSlogan: "Uma plataforma dá conta de tudo.",
    tileLink: "Ver todos os módulos",
    consoleTitle: "Seu time começa o dia em uma tela só.",
    consoleCopy:
      "Trading, pagamentos, CRM e risco olham os mesmos dados. Quem aprovou o quê, qual campanha está no ar, qual transação espera: tudo no mesmo lugar.",
    consolePoints: [
      "Telas organizadas pelo seu papel",
      "Uma fila comum para tudo que aguarda aprovação",
      "Filtro por marca e por mercado",
    ],
    consoleCta: "Ver os produtos",
    platformTitle: "A operação inteira fala a mesma língua.",
    platformCopy:
      "Em vez de ferramentas soltas e relatórios colados na mão, tudo — da primeira sessão ao saque — se encontra em uma camada de dados comum.",
    platformFeatures: [
      { title: "Uma visão do jogador", copy: "Ler conta, carteira, jogo e campanhas lado a lado." },
      { title: "Operação compartilhada", copy: "Os times de produto trabalham com as mesmas regras, permissões e aprovações." },
      { title: "Crescimento medível", copy: "Acompanhar canal, produto e segmento em um único modelo de relatório." },
    ],
    audienceTitle: "Onde você estiver, é de lá que a gente parte.",
    audienceCopy:
      "Do time que abre a primeira marca ao grupo multimarca: o ponto de partida muda; o destino não.",
    audiences: [
      {
        title: "Abrindo a primeira marca",
        copy: "Licença e time prontos; agora é colocar produtos, pagamentos e retaguarda no ar ao mesmo tempo.",
        points: ["Escopo básico de produto", "Checklist de abertura", "Treinamento do time"],
      },
      {
        title: "Cansados de ferramentas soltas",
        copy: "Times que querem ver o jogador e a receita em um lugar, não em cinco painéis e uma planilha.",
        points: ["Carteira e dados compartilhados", "CRM e segmentação", "Migração em fases"],
      },
      {
        title: "Entrando em novos mercados",
        copy: "Grupos que tocam várias marcas e mercados na mesma plataforma, cada um com suas regras e permissões.",
        points: ["Configuração por marca", "Restrições de mercado", "Relatórios centralizados"],
      },
    ],
    bandTitle: "O tráfego sobe. O desempenho fica.",
    bandCta: "Conhecer a arquitetura",
    bandFacts: [
      { title: "Orientada a API", copy: "Produtos e serviços externos conversam por contratos definidos." },
      { title: "Modular", copy: "Um produto é atualizado enquanto os outros seguem servindo." },
      { title: "Observável", copy: "Saúde dos serviços e fluxo das transações em um lugar só." },
    ],
    processTitle: "Da descoberta ao ar, um caminho claro.",
    processCopy: "Em cada passo definimos juntos o escopo, os responsáveis e os critérios de aceite.",
    processSteps: [
      { title: "Descoberta", copy: "Mercado, licença, produto e necessidades de integração." },
      { title: "Plano", copy: "Escopo técnico, estrutura de marcas e calendário de entrada no ar." },
      { title: "Montagem", copy: "Ambientes, produtos, fornecedores e papéis operacionais prontos." },
      { title: "Validação", copy: "Testes ponta a ponta, treinamento e checklist de abertura fechado." },
    ],
    awardsTitle: "Reconhecimento internacional.",
    awardsCopy: "Nosso fornecedor venceu nos prêmios EGR B2B, SBC e SiGMA, ficou em primeiro lugar no MiGEA em três anos diferentes e foi finalista muitas outras vezes.",
    awardsLabel: "Prêmios do nosso fornecedor",
    ctaTitle: "Vamos achar o ponto de partida certo para a sua operação.",
    ctaCopy: "Conte o que você precisa; montamos juntos o escopo de produto, integração e migração.",
  },

  panel: {
    tabsLabel: "Visões do painel",
    general: "Visão geral",
    last12: "Últimas 12 horas",
    note: "Para ver mais,",
    noteLink: "agende uma demo",
    modulesLabel: "Módulos de {group}",
    overview: {
      kpis: [
        { label: "Jogadores ativos", value: "590.418", delta: "+6%" },
        { label: "Bilhetes abertos", value: "1.284.730", delta: "+11%" },
        { label: "Aguardando aprovação", value: "214", delta: "−37" },
      ],
      chartLabel: "Sessões por hora",
      rows: [
        { time: "21:04", text: "12 partidas retiradas por suspeita de fraude, bilhetes cancelados", tag: "Risco" },
        { time: "21:02", text: "Novo provedor de jogos adicionado ao lobby", tag: "Cassino" },
        { time: "20:57", text: "Campanha de fim de semana no ar", tag: "CRM" },
        { time: "20:49", text: "1.380 pedidos de saque na fila de aprovação", tag: "Financeiro" },
      ],
    },
    groups: {
      "oyun-icerik": {
        kpis: [
          { label: "Partidas ao vivo", value: "1.846", delta: "−12" },
          { label: "Sessões de cassino", value: "212.640", delta: "+9%" },
          { label: "Jogos publicados", value: "5.120", delta: "+48" },
        ],
        chartLabel: "Bilhetes e rodadas por hora",
        stats: {
          "urun-sportsbook": "1.284.730 bilhetes abertos",
          "urun-game-provider": "38 provedores",
          "urun-canli-casino": "412 mesas abertas",
          "urun-sanal-espor": "96 eventos",
          "urun-hizli-oyunlar": "18.400 rodadas / h",
          "urun-turnuva-jackpot": "7 torneios",
        },
      },
      "oyuncu-hesap": {
        kpis: [
          { label: "Jogadores ativos", value: "590.418", delta: "+6%" },
          { label: "Cadastros de hoje", value: "8.940", delta: "+4%" },
          { label: "Verificações pendentes", value: "1.126", delta: "−180" },
        ],
        chartLabel: "Acessos por hora",
        stats: {
          "urun-oyuncu-hesap": "590.418 ativos",
          "urun-cuzdan": "0 diferença de saldo",
          "urun-kyc": "1.126 na fila",
          "urun-sorumlu-oyun": "3.480 limites ativos",
        },
      },
      "odeme-finans": {
        kpis: [
          { label: "Depósitos aprovados", value: "97,2%", delta: "+0,4" },
          { label: "Saques pendentes", value: "1.380", delta: "−96" },
          { label: "Conciliação", value: "99,98%", delta: "+0,01" },
        ],
        chartLabel: "Transações por hora",
        stats: {
          "urun-gambpay": "842.300 transações",
          "urun-finans": "14 acertos em aberto",
          "urun-kripto": "12% de participação",
        },
      },
      "buyume-pazarlama": {
        kpis: [
          { label: "Campanhas no ar", value: "17", delta: "+2" },
          { label: "Bônus distribuídos", value: "18.930", delta: "+12%" },
          { label: "Jogadores que voltaram", value: "31.240", delta: "+18%" },
        ],
        chartLabel: "Resposta às campanhas",
        stats: {
          "urun-gambcrm": "126 segmentos",
          "urun-bonus": "42 bônus ativos",
          "urun-pazarlama": "9 envios agendados",
          "urun-gambaffiliate": "1.240 parceiros",
          "urun-sadakat": "2.310 jogadores VIP",
          "urun-is-gelistirme": "3 estudos de mercado",
        },
      },
      "risk-uyum": {
        kpis: [
          { label: "Alertas abertos", value: "57", delta: "+12" },
          { label: "Contas em análise", value: "311", delta: "+46" },
          { label: "Bilhetes cancelados", value: "4.218", delta: "hoje" },
        ],
        chartLabel: "Movimentos marcados",
        stats: {
          "urun-risk-fraud": "12 partidas retiradas",
          "urun-aml": "23 casos abertos",
          "urun-uyum": "2 relatórios prontos",
        },
      },
      "veri-yapay-zeka": {
        kpis: [
          { label: "Risco alto de evasão", value: "12.480", delta: "jogadores" },
          { label: "Cliques em recomendações", value: "18,4%", delta: "+1,1" },
          { label: "Escore alto de fraude", value: "64", delta: "transações" },
        ],
        chartLabel: "Chamadas aos modelos",
        stats: {
          "urun-ai": "4 modelos no ar",
          "urun-bi": "36 painéis",
          "urun-veri-akisi": "2,1 mi eventos / h",
        },
      },
      "operasyon-altyapi": {
        kpis: [
          { label: "Disponibilidade", value: "99,97%", delta: "30 dias" },
          { label: "Chamados abertos", value: "148", delta: "−21" },
          { label: "Marcas ativas", value: "6", delta: "+1" },
        ],
        chartLabel: "Requisições por hora",
        stats: {
          "urun-arka-ofis": "214 aguardando aprovação",
          "urun-cms": "12 publicações hoje",
          "urun-destek": "148 chamados abertos",
          "urun-bayi": "860 agentes",
          "urun-api": "64 ms de resposta",
          "urun-coklu-marka": "6 marcas",
          "urun-altyapi": "0 alarmes abertos",
        },
      },
    },
  },

  catalog: {
    groups: {
      "oyun-icerik": {
        name: "Jogo e conteúdo",
        summary: "Tudo o que o jogador vê: apostas, cassino e todos os jogos no meio do caminho.",
      },
      "oyuncu-hesap": {
        name: "Jogador e conta",
        summary: "Do cadastro ao saque, cada passo preso à conta do jogador.",
      },
      "odeme-finans": {
        name: "Pagamento e financeiro",
        summary: "O dinheiro que entra, o que sai e as contas fechadas no fim do dia.",
      },
      "buyume-pazarlama": {
        name: "Crescimento e marketing",
        summary: "As ferramentas que trazem o jogador, seguram e chamam de volta.",
      },
      "risk-uyum": { name: "Risco e conformidade", summary: "As regras que protegem o caixa, a licença e o jogador." },
      "veri-yapay-zeka": {
        name: "Dados e IA",
        summary: "Decidir com dados e modelos, não no palpite.",
      },
      "operasyon-altyapi": {
        name: "Operação e infraestrutura",
        summary: "As ferramentas do dia a dia e o chão em que tudo se apoia.",
      },
    },
    modules: {
      "urun-sportsbook": {
        name: "Sportsbook",
        tag: "",
        description: "Tocar pré-jogo e ao vivo de um lugar só.",
        items: [
          "Fluxos de pré-jogo e ao vivo",
          "Configuração de odds, limites e margem",
          "Criador de aposta e saque antecipado",
          "Fluxos de bilhete, estorno e cancelamento",
        ],
      },
      "urun-game-provider": {
        name: "Agregação de provedores de jogo",
        tag: "",
        description: "Conectar provedores de cassino com uma integração; gerir catálogo e lobby.",
        items: [
          "Vários provedores, uma API",
          "Catálogo de jogos e arranjo do lobby",
          "Visibilidade de jogos por mercado",
          "Relatórios e conciliação por provedor",
        ],
      },
      "urun-canli-casino": {
        name: "Cassino ao vivo",
        tag: "",
        description: "Oferecer mesas ao vivo e jogos com crupiê na mesma carteira.",
        items: [
          "Lobby de mesas ao vivo",
          "Limites de mesa e visibilidade",
          "Troca sem corte com carteira única",
          "Histórico de sessão e de apostas",
        ],
      },
      "urun-sanal-espor": {
        name: "Virtuais e e-sports",
        tag: "",
        description: "Conteúdo para apostar a qualquer hora, independente do calendário.",
        items: [
          "Ligas virtuais e corridas",
          "Mercados de e-sports",
          "Perfis próprios de limite e margem",
          "Bilhete comum com o sportsbook",
        ],
      },
      "urun-hizli-oyunlar": {
        name: "Jogos rápidos",
        tag: "",
        description: "Um catálogo pronto de rodadas curtas: crash, dados, minas.",
        items: [
          "Catálogo de jogos de rodada curta",
          "Resultados de rodada verificáveis",
          "Ajuste de margem por jogo",
          "Destaque no lobby",
        ],
      },
      "urun-turnuva-jackpot": {
        name: "Torneios e jackpots",
        tag: "",
        description: "Transformar o jogo em corrida com rankings e prêmios acumulados.",
        items: [
          "Modelos de torneio e calendário",
          "Rankings ao vivo",
          "Jackpots progressivos",
          "Regras de distribuição de prêmios",
        ],
      },
      "urun-oyuncu-hesap": {
        name: "Gestão de contas de jogador",
        tag: "",
        description: "Cadastro, perfil, sessões e estados de conta em um lugar só.",
        items: [
          "Fluxos de cadastro e entrada",
          "Perfil, etiquetas e notas",
          "Situação da conta e restrições",
          "Todo o histórico do jogador em uma tela",
        ],
      },
      "urun-cuzdan": {
        name: "Carteira única",
        tag: "",
        description: "Um saldo em todos os produtos; cada movimento no livro.",
        items: [
          "Saldo real e de bônus separados",
          "Múltiplas moedas",
          "Livro de transações",
          "Ajuste de saldo com aprovação",
        ],
      },
      "urun-kyc": {
        name: "KYC e verificação de identidade",
        tag: "",
        description: "Ligar provedores de verificação ao cadastro e ao saque.",
        items: [
          "Envio de documentos e fila de análise",
          "Integrações com provedores de verificação",
          "Regras de verificação por mercado",
          "Checagem de idade e endereço",
        ],
      },
      "urun-sorumlu-oyun": {
        name: "Jogo responsável",
        tag: "",
        description: "Limites, pausas e autoexclusão fazem parte da conta do jogador.",
        items: [
          "Limites de depósito, perda e tempo",
          "Pausa e autoexclusão",
          "Avisos de tempo de sessão",
          "Sinais de comportamento de risco",
        ],
      },
      "urun-gambpay": {
        name: "gambpay",
        tag: "Pagamentos",
        description: "Acompanhar fluxos de pagamento, estados de transação e etapas de aprovação.",
        items: [
          "Fluxos de depósito e saque",
          "Limites e roteamento por método",
          "Permissões e etapas de aprovação",
          "Acompanhamento do status da transação",
        ],
      },
      "urun-finans": {
        name: "Financeiro e conciliação",
        tag: "",
        description: "Fechar caixa, acertos e o dia na mesma tabela.",
        items: [
          "Conciliação diária e por período",
          "Relatórios de GGR / NGR e receita",
          "Acertos de provedores e parceiros",
          "Exportação para a contabilidade",
        ],
      },
      "urun-kripto": {
        name: "Pagamentos em cripto",
        tag: "",
        description: "Depósitos e saques em cripto; a mesma carteira, as mesmas regras.",
        items: [
          "Várias redes e ativos",
          "Conversão automática",
          "Monitoramento de endereços e transações",
          "Regras de aprovação de saque",
        ],
      },
      "urun-gambcrm": {
        name: "gambcrm",
        tag: "CRM",
        description: "Transformar dado de jogador em ação que dá para medir.",
        items: [
          "Segmentos e montagem de campanhas",
          "Ciclo de vida do jogador",
          "Gatilhos em tempo real",
          "Medição do resultado das campanhas",
        ],
      },
      "urun-bonus": {
        name: "Gestão de bônus",
        tag: "",
        description: "Desenhar bônus junto com regras, orçamento e exigência de rollover.",
        items: [
          "Bônus de boas-vindas, depósito e perda",
          "Apostas e giros grátis",
          "Regras de rollover e validade",
          "Orçamento de bônus e controle de abuso",
        ],
      },
      "urun-pazarlama": {
        name: "Automação de marketing",
        tag: "",
        description: "Planejar campanhas, levar aos canais e medir o retorno.",
        items: [
          "Calendário de campanhas e códigos promocionais",
          "E-mail, SMS e push",
          "Banners e páginas de entrada no site",
          "Retorno por canal e por campanha",
        ],
      },
      "urun-gambaffiliate": {
        name: "gambaffiliate",
        tag: "Afiliados",
        description: "Crescer a rede de parceiros com números que os dois lados enxergam.",
        items: [
          "Modelos de comissão",
          "Acompanhamento de campanhas e tráfego",
          "Portal do parceiro e períodos de acerto",
          "Estruturas de subafiliação",
        ],
      },
      "urun-sadakat": {
        name: "Fidelidade e VIP",
        tag: "",
        description: "Cuidar da fidelidade com níveis, pontos e vantagens.",
        items: [
          "Sistema de níveis e pontos",
          "Ferramentas para gerentes VIP",
          "Ofertas personalizadas",
          "Regras de devolução de perdas",
        ],
      },
      "urun-is-gelistirme": {
        name: "Desenvolvimento de negócio",
        tag: "Serviço",
        description: "Da entrada no mercado aos acordos com provedores, montamos o plano com você.",
        items: [
          "Análise de mercado e concorrência",
          "Escolha de provedores e parceiros de pagamento",
          "Plano de lançamento e crescimento",
          "Revisão periódica de desempenho",
        ],
      },
      "urun-risk-fraud": {
        name: "Gestão de risco e fraude",
        tag: "",
        description: "Pegar cedo comportamento suspeito de conta, bônus e aposta.",
        items: [
          "Cruzamento de múltiplas contas e dispositivos",
          "Regras contra abuso de bônus",
          "Perfis de risco de aposta e limite",
          "Fila de análise e registro de casos",
        ],
      },
      "urun-aml": {
        name: "PLD e monitoramento de transações",
        tag: "",
        description: "Acompanhar e documentar por regras os movimentos de dinheiro fora do padrão.",
        items: [
          "Regras de limiar e de padrão",
          "Fluxo de origem de recursos",
          "Registro de transações suspeitas",
          "Um histórico pronto para auditoria",
        ],
      },
      "urun-uyum": {
        name: "Conformidade e relatórios regulatórios",
        tag: "",
        description: "Gerar pelo painel os relatórios que o regulador pede.",
        items: [
          "Modelos de relatório por mercado",
          "Registros de auditoria inalteráveis",
          "Regras de retenção de dados",
          "Relatórios de permissão e acesso",
        ],
      },
      "urun-ai": {
        name: "Módulos de IA",
        tag: "IA",
        description: "Ligar modelos de previsão e recomendação às decisões do dia.",
        items: [
          "Recomendações de jogo e aposta",
          "Previsão de risco de evasão",
          "Escore de fraude e risco",
          "Assistente de IA para o time de operação",
        ],
      },
      "urun-bi": {
        name: "BI e relatórios",
        tag: "",
        description: "Desempenho de produto, canal e segmento sobre definições comuns.",
        items: [
          "Painéis prontos",
          "Montador de relatórios próprios",
          "Envio agendado de relatórios",
          "Exportação para o data warehouse",
        ],
      },
      "urun-veri-akisi": {
        name: "Fluxo de dados em tempo real",
        tag: "",
        description: "Levar eventos de jogador e transação para os seus sistemas na hora.",
        items: [
          "Fluxo de eventos e webhooks",
          "Gatilhos de segmento",
          "Painéis de métricas ao vivo",
          "Integrações com ferramentas externas",
        ],
      },
      "urun-arka-ofis": {
        name: "Retaguarda",
        tag: "",
        description: "O painel de administração em que todos os times seguem as mesmas regras.",
        items: ["Papéis e permissões", "Fluxos de aprovação", "Histórico de mudanças", "Visão multimarca"],
      },
      "urun-cms": {
        name: "CMS e front-end",
        tag: "",
        description: "Cuidar da interface web e móvel, dos conteúdos e dos temas sem escrever código.",
        items: [
          "Front-end web e móvel pronto",
          "Gestão de páginas, banners e menus",
          "Temas de marca",
          "Vários idiomas",
        ],
      },
      "urun-destek": {
        name: "Ferramentas de atendimento",
        tag: "",
        description: "O atendimento vê o jogador, a transação e o histórico na mesma tela.",
        items: [
          "Gestão de chamados e casos",
          "Integração de chat ao vivo",
          "Respostas prontas e etiquetas",
          "Acesso ao histórico do jogador em um clique",
        ],
      },
      "urun-bayi": {
        name: "Gestão de agentes e rede",
        tag: "",
        description: "Tocar a sua rede de campo com hierarquia, limites e comissões.",
        items: [
          "Estrutura de agentes em vários níveis",
          "Distribuição de saldo e limites",
          "Contas de comissão",
          "Relatórios por agente",
        ],
      },
      "urun-api": {
        name: "Camada de API e integração",
        tag: "",
        description: "Sistemas externos se conectam por contratos definidos.",
        items: [
          "Endpoints REST e WebSocket",
          "Ambiente de testes",
          "Notificações por webhook",
          "Documentação versionada",
        ],
      },
      "urun-coklu-marka": {
        name: "Multimarca",
        tag: "",
        description: "Abrir novas marcas e mercados na mesma plataforma.",
        items: [
          "Configuração por marca",
          "Regras de mercado e idioma",
          "Permissões e relatórios separados",
          "Camada comum de jogador e carteira",
        ],
      },
      "urun-altyapi": {
        name: "Infraestrutura e monitoramento",
        tag: "Serviço",
        description: "Hospedagem, escala e monitoramento ficam com a gente.",
        items: [
          "Infraestrutura em nuvem gerenciada",
          "Escala automática",
          "Monitoramento e alertas",
          "Backup e plano de volta atrás",
        ],
      },
    },
  },

  products: {
    indexLabel: "Áreas de produto",
    flowTitle: "{modules} módulos, um cadastro de jogador.",
    flowCopy:
      "Cada passo do jogador depois do cadastro cai no módulo certo; tudo é escrito na mesma conta e na mesma carteira.",
    playerFlow: [
      { step: "Cadastro", module: "Contas de jogador · KYC", copy: "A conta abre e a verificação começa." },
      { step: "Depósito", module: "gambpay", copy: "O pagamento é aprovado e a carteira única atualiza." },
      { step: "Jogo", module: "Sportsbook · Cassino", copy: "O mesmo saldo vale nos dois produtos." },
      { step: "Contato", module: "gambcrm · Bônus", copy: "A atividade alimenta segmentos e gatilhos." },
      { step: "Origem", module: "gambaffiliate", copy: "Creditada ao parceiro que trouxe o jogador." },
    ],
    capsTitle: "Atrás de cada módulo, a mesma disciplina de operação.",
    capsCopy:
      "Os módulos funcionam separados; juntos, dados, permissões e relatórios passam sem emenda.",
    capabilities: [
      { title: "Papéis e permissões", copy: "Papéis detalhados para cada time chegar só ao que é dele." },
      { title: "Gestão de regras", copy: "Cuidar de limites, aprovações, visibilidade e regras de operação em um lugar." },
      { title: "Histórico de mudanças", copy: "Rastrear mudanças críticas por usuário, hora e resultado." },
      { title: "Relatórios", copy: "Comparar métricas de produto e operação sobre definições comuns." },
      { title: "Avisos", copy: "Avisar o time certo em tempo real em operações e limiares importantes." },
      { title: "Multimarca", copy: "Tocar várias marcas e mercados em uma plataforma, sob controle." },
    ],
    integrationTitle: "Continue com os parceiros que você já tem.",
    integrationCopy:
      "Serviços de provedor, pagamento, identidade e dados se conectam à plataforma pela camada de API, de forma controlada.",
    integrationCta: "Ver a montagem técnica",
    integrationLabel: "Tipos de serviço que dá para conectar",
    integrationTypes: [
      "Provedores de jogo",
      "Feeds de odds e dados",
      "Meios de pagamento",
      "Verificação de identidade",
      "Canais de mensagem",
      "Data warehouse e BI",
    ],
    ctaTitle: "Veja os módulos em fluxos de operação de verdade.",
    ctaCopy: "Vamos marcar um tour de produto pelas prioridades do seu time.",
  },

  technology: {
    layersTitle: "Por fora, o jogo. Por dentro, a engenharia.",
    layersCopy: "Quatro camadas, cada uma com sua responsabilidade. Escolha uma para ver o detalhe.",
    layersLabel: "Camadas da plataforma",
    layersCaption:
      "Esquema conceitual. O modelo de implantação e o escopo de integração são definidos na descoberta técnica.",
    layers: [
      {
        title: "Experiência",
        summary: "Interface web · Móvel · Administração do operador",
        detail:
          "A cara que o jogador vê e a retaguarda que o seu time usa rodam sobre os mesmos serviços. Tema e conteúdo são geridos por marca.",
        parts: ["Interface do jogador", "Retaguarda", "Temas de marca", "Gestão de conteúdo"],
      },
      {
        title: "Acesso",
        summary: "Camada de API · Autenticação · Autorização",
        detail:
          "Todas as requisições passam por uma porta só. Identidade, permissões e limite de taxa valem ali; os serviços internos nunca ficam expostos.",
        parts: ["Gateway de API", "Sessão e identidade", "Checagem de papel", "Limite de taxa"],
      },
      {
        title: "Serviços de negócio",
        summary: "Apostas esportivas · Cassino · Pagamentos · CRM",
        detail:
          "Cada produto roda no próprio serviço e conversa por contratos definidos. Um é atualizado e os outros seguem servindo.",
        parts: ["Apostas esportivas", "Cassino", "Pagamentos", "CRM", "Afiliados"],
      },
      {
        title: "Dados e controle",
        summary: "Dados comuns · Registros de transação · Monitoramento",
        detail:
          "Carteira, jogador e transações ficam em uma camada comum. Cada mudança é registrada; a saúde dos serviços é vista de forma central.",
        parts: ["Carteira única", "Dados do jogador", "Registro de auditoria", "Monitoramento e alertas"],
      },
    ],
    principlesTitle: "Pronta para crescer, aberta a mudar.",
    principlesCopy:
      "A plataforma é construída para evoluir produtos de forma independente, proteger os serviços críticos e colocar conexões novas no ar rápido.",
    principles: [
      { title: "Orientada a API", copy: "Produtos e serviços externos se comunicam por contratos definidos." },
      { title: "Serviços modulares", copy: "O que é novo entra no escopo sem refazer o sistema inteiro." },
      { title: "Observabilidade", copy: "Saúde dos serviços, fluxo das transações e sinais de erro vistos de forma central." },
      { title: "Resiliência", copy: "Os fluxos críticos são protegidos com repetição controlada, filas e isolamento." },
    ],
    securityTitle: "Segurança não é camada que se põe depois.",
    securityCopy:
      "Acesso, registro, proteção de dados e aprovações de operação fazem parte do jeito como a plataforma funciona.",
    securityPoints: [
      "Acesso por papel e menor privilégio",
      "Aprovações e registros de auditoria em operações críticas",
      "Separação de dados de ambiente, marca e operação",
      "Monitoramento, alerta e resposta a incidentes",
    ],
    apiTitle: "Contratos legíveis, respostas previsíveis.",
    apiCopy:
      "Seu time sabe com o que vai lidar antes de começar. O exemplo abaixo mostra como é uma operação de carteira.",
    request: "Requisição",
    response: "Resposta",
    sample: "Exemplo ilustrativo",
    apiNotes: [
      {
        title: "Seguro para repetir",
        copy: "Uma requisição com a mesma chave não é processada duas vezes; se a conexão cair, repetir é seguro.",
      },
      {
        title: "Baseado em estado",
        copy: "Cada operação carrega um estado explícito. As mudanças chegam ao seu sistema por webhook.",
      },
      {
        title: "Versionado",
        copy: "Os contratos são versionados; campos novos entram sem quebrar integrações existentes.",
      },
    ],
    apiCaption: "Os endpoints e campos reais estão na documentação de API entregue na descoberta técnica.",
    stepsTitle: "Da conexão ao tráfego real, sob controle.",
    integrationSteps: [
      { title: "Contrato", copy: "Escopo de API e modelo de dados" },
      { title: "Ambiente de testes", copy: "Desenvolver e testar sem risco" },
      { title: "Validação", copy: "Cenários ponta a ponta" },
      { title: "No ar", copy: "Uma abertura monitorada e controlada" },
    ],
    ctaTitle: "Vamos olhar juntos a sua arquitetura atual.",
    ctaCopy:
      "Converse sobre pontos de integração, riscos de migração e o modelo de implantação recomendado com o nosso time técnico.",
  },

  cases: {
    listLabel: "Cenários",
    need: "A necessidade",
    approach: "A abordagem",
    result: "Resultado pretendido",
    phasesLabel: "Fases",
    caseStudies: [
      {
        title: "Do zero ao primeiro dia no ar.",
        need: "Um time com licença e organização resolvidas, que agora vai ao mercado com todos os produtos tocados de um lugar só.",
        approach:
          "Primeiro se fecha o escopo básico de produto. A montagem de marca e ambientes anda junto com a integração.",
        result:
          "Fluxos essenciais validados, um time de operação treinado e um checklist de abertura combinado.",
        phases: ["Escopo", "Montagem", "Integração", "Ensaio", "Abertura"],
      },
      {
        title: "O mesmo negócio, uma base nova.",
        need: "Renovar a base técnica sem parar uma operação que está rodando.",
        approach:
          "Os fluxos de dados, carteira e produto são partidos em fases controladas. Cada fase anda com plano de volta atrás.",
        result: "Um plano de migração que dá para medir e uma plataforma em que dá para continuar construindo.",
        phases: ["Inventário", "Ensaio de dados", "Operação paralela", "Subida de tráfego", "Virada"],
      },
      {
        title: "Segunda marca, a mesma espinha.",
        need: "Um operador de uma marca abre a segunda para um mercado novo, com time e regras próprios.",
        approach:
          "A carteira e a camada de dados comuns ficam. Marca, restrições de mercado e permissões são configuradas à parte.",
        result: "Infraestrutura compartilhada, identidade de marca própria e relatórios que mostram as duas juntas.",
        phases: ["Regras do mercado", "Estrutura de marca", "Conteúdo", "Permissões", "Abertura"],
      },
    ],
    caption: "Os cenários são ilustrativos; não apontam para um cliente ou resultado específico.",
    methodTitle: "Todo projeto começa com as mesmas quatro perguntas.",
    methodCopy:
      "Os critérios de sucesso são definidos no começo; o avanço é medido pelo que foi entregue, não por suposição.",
    methodQuestions: [
      { title: "Para onde vamos?", copy: "Mercado-alvo, escopo de produto e prioridades comerciais." },
      { title: "O que protegemos?", copy: "A experiência atual do jogador, os dados e os fluxos críticos." },
      { title: "O que mudamos?", copy: "Plataforma, provedores, processos e responsabilidades do time." },
      { title: "Como verificamos?", copy: "Cenários de teste, critérios de aceite e medições de abertura." },
    ],
    riskTitle: "O que pode dar errado a gente conversa antes.",
    riskCopy:
      "Os quatro riscos mais comuns em um projeto de migração e onde o plano está em cada um.",
    riskHead: ["Risco", "Medida"],
    riskTable: [
      {
        risk: "Perda ou divergência na migração de dados",
        measure: "Ensaios repetidos antes da abertura e comparação registro a registro.",
      },
      {
        risk: "Diferença nos saldos de carteira",
        measure: "Conciliação de saldos na virada; sem a diferença fechada, o tráfego não abre.",
      },
      {
        risk: "Queda no dia da abertura",
        measure: "Tráfego em etapas, painéis de monitoramento e passos de volta atrás escritos antes.",
      },
      {
        risk: "O time não se acostumar com as ferramentas novas",
        measure: "Treinamento por papel e ensaio com casos reais antes de abrir.",
      },
    ],
    outcomesTitle: "Um plano visível. Responsabilidades claras. Uma abertura controlada.",
    outcomes: [
      { title: "Um escopo", copy: "Requisitos de produto e integração" },
      { title: "Um calendário", copy: "Dependências entre os times" },
      { title: "Um plano de aceite", copy: "Critérios de teste e abertura" },
    ],
    ctaTitle: "O próximo caso pode ser o seu.",
    ctaCopy: "Vamos pesar juntos as suas prioridades para uma operação nova ou uma troca de plataforma.",
  },

  packages: {
    listLabel: "Pacotes",
    price: "Proposta sob medida",
    planCta: "Vamos falar de escopo",
    plans: [
      {
        audience: "Para operações novas",
        summary: "O escopo básico para abrir a sua primeira marca.",
        items: [
          "Montagem dos produtos básicos",
          "Configuração da marca",
          "Plano de entrada no ar",
          "Retaguarda e definição de papéis",
          "Treinamento de abertura",
        ],
      },
      {
        audience: "Para operadores em crescimento",
        summary: "Todos os produtos juntos, o dado do jogador em um lugar.",
        items: [
          "Um ecossistema de produto unificado",
          "CRM e segmentação",
          "Integração ampliada",
          "Gestão de afiliados",
          "Relatórios avançados",
        ],
      },
      {
        audience: "Para projetos de escopo próprio",
        summary: "Estruturas multimarca e migrações de plataforma.",
        items: [
          "Desenvolvimentos sob medida",
          "Planejamento da migração",
          "Modelo de operação próprio",
          "Várias marcas e mercados",
          "Um time de projeto dedicado",
        ],
      },
    ],
    includedTitle: "Escolha o que escolher.",
    includedCopy: "O escopo muda; o jeito de trabalhar não. Estes quatro passos estão em todo projeto.",
    includedInAll: [
      { title: "Descoberta", copy: "Escopo, calendário e responsabilidades ficam por escrito." },
      { title: "Ambiente de testes", copy: "As integrações são testadas sem risco antes de ir ao ar." },
      { title: "Treinamento do time", copy: "Cada papel aprende as próprias telas com casos reais." },
      { title: "Checklist de abertura", copy: "A entrada no ar segue passos combinados por todos." },
    ],
    compareTitle: "A mesma base. Velocidades diferentes.",
    compareCopy:
      "Os pacotes não são uma lista fechada de produtos, e sim um quadro para achar o escopo de partida certo.",
    capability: "Recurso",
    included: "Incluído",
    notIncluded: "Não incluído",
    comparison: [
      { label: "Plataforma básica e administração", cells: ["Incluído", "Incluído", "Incluído"] },
      { label: "Sportsbook / Cassino", cells: ["À escolha", "Incluído", "Incluído"] },
      { label: "Operação de pagamentos", cells: ["Básico", "Avançado", "Sob medida"] },
      { label: "CRM e segmentação", cells: ["Inicial", "Avançado", "Sob medida"] },
      { label: "Bônus e marketing", cells: ["Básico", "Avançado", "Sob medida"] },
      { label: "Gestão de afiliados", cells: ["Opcional", "Incluído", "Sob medida"] },
      { label: "Risco e fraude", cells: ["Básico", "Avançado", "Sob medida"] },
      { label: "Módulos de IA", cells: ["—", "Opcional", "Incluído"] },
      { label: "Multimarca", cells: ["—", "Opcional", "Incluído"] },
      { label: "Migração e personalização", cells: ["—", "Opcional", "Incluído"] },
    ],
    faqTitle: "Antes de decidir.",
    faqs: [
      {
        question: "Os pacotes são fechados?",
        answer:
          "Não. São um quadro de partida; o escopo final sai depois da descoberta, conforme as suas necessidades de produto, mercado e integração.",
      },
      {
        question: "Quanto tempo leva para entrar no ar?",
        answer:
          "Depende do andamento da licença, do número de integrações, da migração de dados e do processo de aceite. No fim da descoberta você recebe um plano realista.",
      },
      {
        question: "Podemos continuar com nossos provedores atuais?",
        answer:
          "Depois de confirmados o encaixe técnico e os acordos comerciais, a integração dos seus provedores atuais pode entrar no escopo.",
      },
      {
        question: "O suporte à operação está incluído?",
        answer:
          "Treinamento, entrada no ar e acompanhamento contínuo são planejados conforme o modelo de serviço escolhido.",
      },
      {
        question: "Podemos começar com um produto só?",
        answer:
          "Sim. Os módulos funcionam separados. Dá para começar só com pagamentos ou CRM e somar o resto depois.",
      },
      {
        question: "Vocês fornecem a licença?",
        answer:
          "Não. A Gamb Gaming é parceira de tecnologia e operação; trabalhamos apenas com operadores que têm licença própria ou estão no processo.",
      },
      {
        question: "Como o preço é definido?",
        answer:
          "Como o escopo de produto, mercado e integração muda em cada operação, o preço é proposto depois da descoberta.",
      },
      {
        question: "Vocês atendem jogadores diretamente?",
        answer:
          "Não. A Gamb Gaming trabalha só com empresas; não oferece jogo, apostas nem suporte de conta a usuários finais.",
      },
    ],
    ctaTitle: "Comece pelo necessário, cresça quando estiver pronto.",
    ctaCopy: "Vamos procurar não o pacote certo, mas o escopo certo.",
  },

  demo: {
    title: ["Vamos conhecer", "a plataforma juntos."],
    lead: "Fluxos de verdade. Um tour pela plataforma com o próprio time técnico.",
    stepsLabel: "O que acontece na conversa",
    steps: [
      { title: "Descoberta", copy: "Seus objetivos e prioridades." },
      { title: "Tour de produto", copy: "Módulos e fluxos de trabalho." },
      { title: "Próximos passos", copy: "Escopo e plano de início." },
    ],
    fineprint: ["Apenas para contatos B2B de operadores.", "Não damos suporte a jogadores nem a usuários finais."],
    formTitle: "Conte como é a sua operação.",
    required: "Os campos marcados com * são obrigatórios.",
    fields: {
      name: "Nome completo",
      namePh: "Seu nome e sobrenome",
      role: "Seu cargo",
      rolePh: "ex.: Diretor de operações",
      email: "E-mail corporativo",
      emailPh: "voce@suaoperacao.com",
      company: "Empresa / nome da operação",
      companyPh: "Escreva o nome da operação",
      stage: "Fase do projeto",
      stageChoose: "Escolher",
      products: "Produtos do seu interesse",
      message: "Em resumo, o que você precisa",
      messagePh: "Mercado-alvo, escopo de produto e início previsto...",
      website: "Site",
      consent:
        "Li o aviso de privacidade. Concordo com o tratamento dos meus dados para responderem ao meu contato.",
    },
    stages: ["Operação nova", "Troca de plataforma", "Crescimento"],
    errors: {
      name: "Escreva seu nome e sobrenome.",
      email: "Escreva seu e-mail corporativo.",
      emailFormat: "Use o formato nome@empresa.com.",
      company: "Escreva o nome da empresa ou da operação.",
      consent: "Aceite o aviso de privacidade para continuar.",
      send: "Não foi possível enviar seu pedido. Confira a conexão e tente de novo.",
    },
    submit: "Enviar pedido de demo",
    sending: "Enviando…",
    previewHint: "Modo prévia: o formulário funciona, mas nenhum pedido é enviado de verdade.",
    thanks: "Obrigado",
    sentCopy: "Nosso time entra em contato para avaliar o seu escopo.",
    previewFlag:
      "Isto é uma prévia: o formulário foi validado, mas o seu pedido não foi enviado a nenhum servidor e nada foi guardado.",
    summary: { company: "Empresa", email: "E-mail", stage: "Fase do projeto", products: "Produtos" },
    again: "Fazer outro pedido",
  },

  notfound: {
    title: ["Esta página", "não está aqui."],
    copy: "O endereço pode ter mudado ou foi digitado errado.",
    cta: "Voltar ao início",
  },

  blog: {
    title: ["Notas de quem opera.", "Para quem procura plataforma."],
    lead: "Escolha de plataforma, integração, pagamentos, risco e operação — escrito de dentro do trabalho, não de um folheto.",
    latest: "Últimos textos",
    readMore: "Ler o texto",
    minutes: "{n} min de leitura",
    back: "Todos os textos",
    related: "Talvez também interesse",
    empty: "Ainda não há textos neste idioma.",
    author: "Equipe Gamb Gaming",
    updated: "Publicado em",
    notFound: "Este texto não foi encontrado ou foi retirado.",
    ctaTitle: "Vamos falar disso em cima da sua operação.",
    ctaCopy: "Leve suas perguntas direto ao time técnico em um tour pela plataforma.",
  },
};

export default pt;
