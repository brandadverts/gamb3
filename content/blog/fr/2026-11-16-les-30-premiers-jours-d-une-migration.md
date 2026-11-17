---
title: Les 30 premiers jours d'une migration de plateforme
description: La plupart des migrations dérapent pour des raisons qui ne sont pas techniques : le mauvais ordre.
date: 2026-11-16
slug: les-30-premiers-jours-d-une-migration
key: migration-first-30-days
tags: migration, données, exploitation
---

Déplacer une exploitation en marche vers une nouvelle infrastructure est plus difficile que de
partir de zéro. En partant de zéro, on ne regarde que devant. Dans une migration, il faut aussi
regarder derrière : les soldes, les paris ouverts et les demandes de retrait à moitié traitées
que l'on emporte avec soi.

Les trente jours qui suivent ne sont pas un engagement de calendrier, mais un cadre sur l'ordre
du travail. La durée réelle dépend du nombre d'intégrations, du volume de données et de ce
qu'exige la licence.

## Semaine 1 — Inventaire

On n'écrit pas de code la première semaine. On écrit ce qui va bouger.

- Combien de fiches joueurs, combien entièrement vérifiées, combien restreintes ?
- Paris ouverts, retraits en attente, bonus en cours de mise : que deviennent-ils à la bascule ?
- Quels contrats fournisseurs existent, lesquels continuent sur la nouvelle plateforme ?
- Quels rapports vont à qui ? La plupart ne sont lus par personne. Une migration est un bon
  moment pour les arrêter.

Le résultat tient dans un seul tableau : on déplace, on reconstruit, on abandonne.

## Semaine 2 — Répétition des données

Les données se répètent au moins deux fois avant la mise en ligne. Une répétition n'est pas
« on a copié » : c'est comparer la copie à l'ancien système, enregistrement par enregistrement.

Trois points :

1. **Total des soldes.** Le total de l'ancien système correspond-il au centime près au nouveau ?
2. **Nombre d'enregistrements.** Joueurs, transactions, journaux d'audit : les comptes tombent ?
3. **Cas limites.** Soldes négatifs, comptes fermés, doublons, vérifications incomplètes : que
   deviennent-ils en passant ?

Trouver un écart en répétition est une bonne nouvelle. La mauvaise, ce serait de le trouver en
production.

## Semaine 3 — Marche en parallèle

La nouvelle plateforme se lève pendant que l'ancienne continue de servir. L'équipe
d'exploitation répète de vrais scénarios sur les nouveaux écrans : valider un retrait, créer un
bonus, clôturer un dossier. Ce n'est pas une semaine de formation ; la formation est le produit
dérivé de la répétition.

La même semaine, on écrit les étapes de retour arrière. « On reviendra en arrière si ça se passe
mal » n'est pas un plan. Le plan, c'est : à partir de quel seuil, qui décide, qu'est-ce qu'on
coupe et dans quel ordre, d'où reviennent les données. Un plan de retour arrière non écrit
n'existe pas.

## Semaine 4 — Ouvrir le trafic

Le trafic ne s'ouvre jamais d'un coup. L'équipe interne d'abord, puis un petit groupe de
joueurs, puis un marché, puis le reste. À chaque étape on surveille les mêmes quatre chiffres :
écart de solde, taux d'erreur, volume de tickets, taux de validation des paiements.

L'erreur la plus fréquente le jour du lancement est de changer de plateforme et de brancher un
nouveau fournisseur en même temps. Quand quelque chose casse, impossible de savoir lequel des
deux est en cause. Les changements de fournisseur attendent au moins deux semaines après la
migration.

## Trentième jour

Ce que vous devez tenir au soir du trentième jour ne se limite pas à une plateforme en ligne :
un rapprochement clos, une équipe formée, un plan de retour arrière écrit et la liste de ce qui
reste dans l'ancien système. L'ancien système ne s'éteint pas tout de suite — les journaux
d'audit et les durées de conservation le gardent lisible un moment.

La question la plus utile pendant la planification est celle-ci : *si cette étape tourne mal,
au bout de combien de minutes le voyons-nous ?* Toute étape sans réponse retourne au plan.

Si vous voulez dresser l'inventaire de votre propre migration,
[organisons une séance avec l'équipe technique](page:demo).
