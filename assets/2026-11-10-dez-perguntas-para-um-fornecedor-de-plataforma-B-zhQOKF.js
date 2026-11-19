var e=`---
title: Dez perguntas para fazer a um fornecedor de plataforma
description: Na demo, toda plataforma funciona. A diferença aparece no primeiro dia de rodada cheia depois do lançamento.
date: 2026-11-10
slug: dez-perguntas-para-um-fornecedor-de-plataforma
key: provider-selection-questions
tags: escolha de plataforma, integração, operação
---

Quase toda busca por plataforma começa igual: três ou quatro reuniões de demo, telas parecidas,
apresentações que seguem a mesma ordem. Na demo, tudo funciona. A diferença só aparece no
primeiro dia de rodada cheia depois que a operação já está no ar.

As perguntas abaixo servem para antecipar esse dia. Nenhuma tem resposta certa; o que importa é
que a resposta seja concreta e caiba num contrato.

## O que a demo não mostra

**1. Quantas pessoas usam esta tela ao mesmo tempo?** Com um usuário, a demo é fluida. Pergunte o
que acontece quando quatro pessoas trabalham juntas na fila de aprovação e o que cada uma vê
quando duas abrem o mesmo registro.

**2. O que aparece quando algo falha?** Quando um fornecedor de jogos para de responder, o que o
jogador vê, qual alerta surge no back office e quem é avisado. "Isso não acontece" não é resposta.

**3. Quais incidentes vocês tiveram nos últimos seis meses?** Peça datas, duração e o que foi
feito. Não existe infraestrutura sem incidente; existe fornecedor que não consegue falar sobre
eles.

## Onde fica o dinheiro

**4. O saldo fica num lugar só?** Se sportsbook e cassino rodam em carteiras separadas, o jogador
espera transferência ao trocar de produto e você fecha duas conciliações no fim do dia. Carteira
única não é argumento de venda; é decisão contábil.

**5. Quanto tempo leva a conciliação diária, e o que acontece quando ela não bate?** Você não
procura um sistema que prometa bater sempre. Procura um que mostre a diferença em minutos.

**6. Quem pode ajustar saldo manualmente?** Quem concede essa permissão, quantas pessoas aprovam
e onde fica o registro — tudo por escrito.

## Quem aprova o quê

**7. Os fluxos de aprovação são configuráveis?** É você quem decide se um saque acima de certo
valor precisa de segunda aprovação, ou esse limite é fixo do lado do fornecedor?

**8. Um usuário consegue aprovar um pedido que ele mesmo abriu?** Se a resposta for sim, quem vai
ter que explicar isso na auditoria da licença é você.

## Não é um contrato — são contratos

**9. Posso ver a documentação da API hoje?** Documentação que não aparece no meio da venda também
vai atrasar depois da assinatura. Procure cinco coisas: lista de endpoints, códigos de erro,
reenvio seguro (a mesma requisição nunca é processada duas vezes), assinatura de webhook e
política de versões.

O que define o prazo de integração não é a quantidade de endpoints; é a clareza com que esses
cinco pontos estão escritos. [A estrutura técnica está aqui](page:technology).

## A porta de saída

**10. Se eu sair, como recebo meus dados?** Cadastro de jogadores, livro de transações e logs de
auditoria — em que formato, em quantos dias, a que custo? Perguntar isso na primeira reunião é
desconfortável. Assinar sem perguntar sai caro dois anos depois.

## Como usar a lista

Não transforme as dez perguntas numa planilha de notas. A ideia não é ranquear fornecedores, e
sim ver onde você não conseguiu uma resposta direta. Se três fornecedores desviaram da mesma
pergunta, o problema não está neles: você ainda não decidiu qual risco está disposto a carregar.

Com as respostas em mãos, leve as duas perguntas que mais incomodaram para o topo da pauta da
descoberta técnica. É exatamente por aí que a nossa começa — podemos fazer isso
[com a sua própria operação](page:demo).
`;export{e as default};