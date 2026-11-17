---
title: Dix questions à poser à un fournisseur de plateforme
description: En démo, tout le monde est bon. La différence apparaît au premier gros soir de match.
date: 2026-11-10
slug: dix-questions-a-poser-a-un-fournisseur
key: provider-selection-questions
tags: choix de plateforme, intégration, exploitation
---

La recherche d'une plateforme commence de la même façon dans presque toutes les équipes : trois
ou quatre démos, des écrans qui se ressemblent, des présentations qui suivent le même ordre. En
démo, tout fonctionne. La différence apparaît au premier gros soir de match après la mise en
ligne.

Les questions ci-dessous servent à faire venir ce soir-là plus tôt. Aucune n'a une seule bonne
réponse ; ce qui compte, c'est que la réponse soit précise et qu'elle puisse entrer dans un
contrat.

## Ce que la démo ne montre pas

**1. Combien de personnes utilisent cet écran en même temps ?** Une démo est fluide avec un seul
utilisateur. Demandez ce qui se passe quand quatre personnes traitent ensemble la file de
validation, et ce que chacune voit quand deux ouvrent le même dossier.

**2. Qu'affiche l'écran en cas d'erreur ?** Quand un fournisseur ne répond plus : que voit le
joueur, quelle alerte apparaît au back-office, qui est prévenu ? « Cela n'arrive pas » n'est pas
une réponse.

**3. Quelles coupures avez-vous eues ces six derniers mois ?** Demandez les dates, les durées et
ce qui a été fait. Il n'existe pas d'infrastructure sans coupure ; il existe des fournisseurs
incapables d'en parler.

## Où est l'argent

**4. Le solde est-il tenu à un seul endroit ?** Si le sportsbook et le casino tournent sur des
portefeuilles séparés, le joueur attend des transferts en passant de l'un à l'autre et vous
clôturez deux rapprochements le soir. Un portefeuille commun n'est pas un argument marketing,
c'est une décision comptable.

**5. Combien de temps prend le rapprochement de fin de journée, et que se passe-t-il en cas
d'écart ?** Vous ne cherchez pas un système qui promet qu'il n'y aura jamais d'écart, mais un
système qui montre l'écart en quelques minutes.

**6. Qui peut corriger un solde à la main ?** Qui accorde ce droit, combien de personnes
valident, et où la trace est conservée — par écrit.

## Qui valide quoi

**7. Les parcours de validation sont-ils configurables ?** Décidez-vous vous-même qu'un retrait
au-dessus d'un seuil demande une seconde validation, ou le seuil est-il figé chez le fournisseur ?

**8. Un utilisateur peut-il valider sa propre demande ?** Si la réponse est oui, c'est vous qui
devrez l'expliquer lors d'un contrôle de licence.

## Pas un contrat, des contrats

**9. Puis-je voir la documentation d'API aujourd'hui ?** Une documentation retenue en pleine
phase commerciale arrivera aussi en retard après signature. Regardez cinq choses : la liste des
points d'entrée, les codes d'erreur, la sûreté de rejeu (la même requête jamais traitée deux
fois), la signature des webhooks et la politique de versions.

Ce qui détermine la durée d'une intégration n'est pas le nombre de points d'entrée, mais la
clarté de ces cinq éléments. [Le dispositif technique est ici](page:technology).

## La porte de sortie

**10. Si je pars, comment je récupère mes données ?** Fiches joueurs, grand livre des
transactions, journaux d'audit : sous quel format, sous quel délai, à quel coût ? Poser la
question au premier rendez-vous paraît déplacé. Signer sans la poser coûte cher deux ans plus
tard.

## Comment utiliser la liste

N'en faites pas une grille de notation. Le but n'est pas de classer des fournisseurs, mais de
repérer où vous n'avez pas obtenu de réponse franche. Si trois fournisseurs esquivent la même
question, le problème ne vient pas d'eux : vous n'avez pas encore décidé en interne quel risque
vous acceptez de porter.

Une fois les réponses en main, placez les deux sujets qui vous ont le plus gêné en tête de
l'ordre du jour du cadrage technique. C'est exactement là que commence le nôtre —
[volontiers sur votre propre installation](page:demo).
