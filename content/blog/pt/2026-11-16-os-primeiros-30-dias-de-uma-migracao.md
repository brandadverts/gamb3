---
title: Os primeiros 30 dias de uma migração de plataforma
description: A maioria das migrações atrasa por motivos que não são técnicos — o problema é a ordem do trabalho.
date: 2026-11-16
slug: os-primeiros-30-dias-de-uma-migracao
key: migration-first-30-days
tags: migração, dados, operação
---

Levar uma operação que está no ar para uma infraestrutura nova é mais difícil do que começar do
zero. Começando do zero, você só olha para frente. Na migração, também precisa olhar para trás:
saldos, bilhetes em aberto e saques pela metade que vão junto na mudança.

Os trinta dias abaixo não são promessa de prazo. São um jeito de ordenar o trabalho. A duração
real depende do número de integrações, do volume de dados e do que a licença exige.

## Semana 1 — Inventário

Na primeira semana não se escreve código. Escreve-se a lista do que vai mudar de casa.

- Quantos cadastros de jogador existem, quantos estão totalmente verificados, quantos têm
  restrição?
- Bilhetes em aberto, saques pendentes, bônus no meio do rollover: o que acontece com cada um na
  virada?
- Quais contratos com fornecedores existem, e quais continuam na plataforma nova?
- Quais relatórios vão para quem? A maioria ninguém lê. A migração é um bom momento para
  aposentá-los.

O resultado é uma única tabela: o que vai, o que será refeito, o que fica para trás.

## Semana 2 — Ensaio de dados

Os dados são ensaiados pelo menos duas vezes antes do lançamento. Ensaio não é "copiamos os
dados"; é comparar a cópia com o sistema antigo, registro por registro.

Três coisas para conferir:

1. **Totais de saldo.** O total do sistema antigo bate com o do novo até o centavo?
2. **Contagem de registros.** Jogadores, transações e registros de auditoria fecham?
3. **Casos de borda.** Saldo negativo, conta encerrada, cadastro duplicado, verificação
   incompleta — o que acontece com cada um na mudança?

Achar diferença no ensaio é boa notícia. Notícia ruim é achar em produção.

## Semana 3 — Operação em paralelo

A plataforma nova sobe enquanto a antiga continua atendendo. A equipe de operação ensaia cenários
reais nas telas novas: aprovar um saque, configurar um bônus, fechar um caso. Não é semana de
treinamento; o treinamento sai como subproduto do ensaio.

Na mesma semana, escreve-se o plano de volta. "Se der errado, a gente volta" não é plano. Plano é:
a partir de qual limite, quem decide, o que é desligado em que ordem e de onde os dados voltam.
Plano de volta que não está escrito não existe.

## Semana 4 — Abrindo o tráfego

O tráfego nunca abre de uma vez. Primeiro a equipe interna, depois um grupo pequeno de jogadores,
depois um mercado, depois o resto. Em cada etapa, olham-se os mesmos quatro números: diferença de
saldo, taxa de erro, volume de chamados no suporte e taxa de aprovação de pagamentos.

O erro mais comum no dia do lançamento é trocar de plataforma e colocar um fornecedor novo no ar
ao mesmo tempo. Quando algo quebra, não dá para saber qual dos dois causou. Troca de fornecedor
espera pelo menos duas semanas depois da migração.

## Dia trinta

No fim do trigésimo dia, você precisa ter mais do que uma plataforma no ar: conciliação fechada,
equipe treinada, plano de volta escrito e a lista do que ainda está no sistema antigo. O sistema
antigo não é desligado na hora — registros de auditoria e regras de retenção fazem com que ele
continue legível por um tempo.

A pergunta mais útil ao planejar uma migração é esta: *se esta etapa der errado, em quantos
minutos a gente percebe?* Toda etapa sem resposta volta para o plano.

Se quiser montar o inventário da sua própria migração,
[vamos marcar uma sessão com os engenheiros](page:demo).
