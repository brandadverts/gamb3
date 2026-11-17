---
title: O que os novos tipos de aposta exigem da sua plataforma
description: Criar aposta, apostas em jogador, microapostas. Cada tipo novo é um botão na frente e uma carga bem diferente por trás.
date: 2026-11-16
slug: o-que-os-novos-tipos-de-aposta-exigem
key: new-bet-types
tags: sportsbook, tipos de aposta, risco
---

A maior mudança do sportsbook nos últimos anos não é um esporte novo nem uma liga nova. É o
formato da aposta. Ninguém aposta só em quem vence: aposta se o jogador passa de 20 pontos, quem
cobra o primeiro escanteio, como sai o próximo ponto.

Na frente, é mais um botão. Por trás, é trabalho novo para odds, risco e liquidação.

## Criar aposta e múltiplas do mesmo jogo

Juntar várias seleções do mesmo jogo num bilhete já é esperado em muitos mercados. O problema é
simples: as seleções não são independentes. "Time vence" e "atacante marca" puxam para o mesmo
lado. Multiplicar as odds sem considerar isso é vender um preço errado contra você.

- **Odds com correlação.** Ou o fornecedor do feed calcula, ou você define por regra o que não
  pode ser combinado. Sem nenhum dos dois, não lança.
- **Limite por bilhete.** O risco se mede na combinação inteira.
- **Liquidação parcial.** Uma seleção fecha cedo, outra só no apito final; tela e carteira precisam
  mostrar isso direito.

## Apostas em jogador

Pontos, assistências, finalizações, cartões: mercados numerosos, de pouca liquidez e sensíveis a
informação. Notícia de lesão às vezes chega nas redes antes de chegar nas odds.

- **Suspensão rápida.** Jogador saiu da escalação: todos os mercados dele fecham juntos.
- **Margem e limite por mercado.** Usar o limite do mercado principal é deixar a porta aberta.
- **Detecção de padrão.** Bilhetes parecidos no mesmo mercado pequeno vão para revisão.

## Microapostas

Próximo ponto, próximo chute, próxima jogada: o mercado vive segundos. Tudo depende da latência
dos dados: a odd tem que estar na tela antes do lance e não pode ser aceita depois.

- **Orçamento de latência**, etapa por etapa, do feed ao aceite, em milissegundos.
- **Liquidação automática**: ninguém liquida à mão mercado de um segundo.
- **Volume**: mais bilhetes, valores menores; o relatório precisa separar isso.

## Mecânica de cassino no esporte

Na ICE Barcelona 2026, vários fornecedores mostraram produtos que levam a mecânica dos jogos crash
para a aposta esportiva: um multiplicador sobe e o jogador saca quando quiser. Se isso vai pegar,
ninguém sabe. O que já é certo: carteira, visão do jogador e regras de risco compartilhadas entre
sportsbook e cassino pesam mais a cada ano.

## Quais ligar

Não precisa lançar tudo no primeiro dia. Três perguntas:

1. Consigo ver o risco desse mercado **em tempo real**?
2. Se a odd estiver errada, **em quantos minutos** eu percebo?
3. A liquidação é **automática**, ou vai exigir mais um turno da equipe?

Lance o que tiver três respostas claras. Como o módulo de sportsbook resolve isso está na
[página de produtos](page:products).
