var e=`---
title: Was neue Wettarten von Ihrer Plattform verlangen
description: Bet Builder, Spielerwetten, Micro-Betting. Jede neue Wettart ist vorne ein Knopf und hinten eine ganz andere Last.
date: 2026-11-16
slug: was-neue-wettarten-von-der-plattform-verlangen
key: new-bet-types
tags: Sportsbook, Wettarten, Risiko
---

Die größte Veränderung im Sportsbook der letzten Jahre ist keine neue Sportart und keine neue
Liga, sondern die Form der Wette selbst. Gewettet wird nicht mehr nur auf den Sieger, sondern
darauf, ob ein Spieler über 20 Punkte kommt, wer die erste Ecke tritt, wie der nächste Punkt fällt.

Vorne ist das ein Knopf mehr. Hinten bedeutet es neue Arbeit für Quotierung, Risiko und Abrechnung.

## Bet Builder und Same-Game-Kombis

Mehrere Tipps aus demselben Spiel auf einem Schein – in vielen Märkten inzwischen Standard. Das
Problem: Die Tipps sind nicht unabhängig. „Team gewinnt“ und „Stürmer trifft“ ziehen in dieselbe
Richtung. Wer die Quoten einfach multipliziert, verkauft einen falschen Preis zu eigenen Lasten.

- **Korrelationsquotierung.** Entweder liefert der Feed-Anbieter korrelierte Quoten, oder Sie
  legen per Regel fest, was nicht kombiniert werden darf. Ohne beides: nicht live gehen.
- **Limits auf Scheinebene.** Risikogrenzen für die ganze Kombination, nicht pro Tipp.
- **Teilabrechnung.** Ein Tipp steht früh fest, ein anderer erst nach Abpfiff – Oberfläche und
  Wallet müssen das korrekt zeigen.

## Spielerwetten

Spielermärkte – Punkte, Assists, Schüsse, Karten – sind zahlreich, dünn und anfällig für
Informationsvorsprung. Eine Verletzungsmeldung ist in sozialen Netzen oft schneller als die Quote.

- **Schnelles Sperren.** Fällt ein Spieler aus der Aufstellung, schließen alle zugehörigen Märkte
  gleichzeitig.
- **Eigene Marge und Limits je Markt.** Hauptmarkt-Limits auf einer Spielerwette sind eine offene Tür.
- **Mustererkennung.** Ähnliche Scheine auf denselben kleinen Markt gehören in eine Prüfwarteschlange.

## Micro-Betting

Nächster Punkt, nächster Schuss, nächster Spielzug – der Markt ist Sekunden offen. Entscheidend ist
die Datenlatenz: Die Quote muss vor dem Ereignis auf dem Schirm sein und darf danach nicht mehr
angenommen werden.

- **Latenzbudget.** Jeder Schritt vom Feed bis zur Scheinannahme in Millisekunden dokumentiert.
- **Automatische Abrechnung.** Sekundenmärkte rechnet niemand von Hand ab.
- **Volumen.** Mehr Scheine, kleinere Einsätze – das Reporting muss das getrennt ausweisen.

## Casino-Mechanik trifft Sport

Auf der ICE Barcelona 2026 zeigten mehrere Anbieter Produkte, die Crash-Mechanik in die
Sportwette übertragen: Ein Multiplikator steigt, der Spieler steigt aus, wann er will. Ob sich das
hält, ist offen. Sicher ist: Ein gemeinsames Wallet, eine gemeinsame Spielersicht und gemeinsame
Risikoregeln für Sportsbook und Casino werden wichtiger.

## Was einschalten?

Nicht jede neue Wettart muss am ersten Tag live sein. Drei Fragen:

1. Sehe ich das Risiko dieses Marktes **in Echtzeit**?
2. Wenn er falsch quotiert ist – **nach wie vielen Minuten** merke ich es?
3. Läuft die Abrechnung **automatisch**, oder braucht mein Team eine neue Schicht?

Nur wo alle drei Antworten klar sind. Wie das Sportsbook-Modul das löst, zeigt die
[Produktseite](page:products).
`;export{e as default};