var e=`---
title: Die ersten 30 Tage einer Plattformmigration
description: Die meisten Migrationen verzögern sich nicht aus technischen Gründen, sondern wegen der Reihenfolge.
date: 2026-11-16
slug: die-ersten-30-tage-einer-plattformmigration
key: migration-first-30-days
tags: Migration, Daten, Betrieb
---

Einen laufenden Betrieb auf eine neue Infrastruktur zu heben ist schwerer, als neu zu bauen.
Beim Neubau schauen Sie nur nach vorn. Bei einer Migration schauen Sie auch zurück — auf Salden,
offene Wettscheine und halb bearbeitete Auszahlungsanträge, die mitgehen.

Die folgenden dreißig Tage sind kein Terminversprechen, sondern ein Rahmen für die Reihenfolge
der Arbeit. Die tatsächliche Dauer hängt von der Zahl der Anbindungen, der Datenmenge und den
Lizenzanforderungen ab.

## Woche 1 — Bestandsaufnahme

In der ersten Woche wird kein Code geschrieben, sondern aufgeschrieben, was überhaupt umzieht.

- Wie viele Spielerdatensätze gibt es, wie viele sind vollständig geprüft, wie viele gesperrt?
- Offene Wettscheine, wartende Auszahlungen, laufende Bonusumsätze: Was passiert damit beim
  Umschalten?
- Welche Anbieterverträge bestehen, welche laufen auf der neuen Plattform weiter?
- Welche Berichte gehen an wen? Die meisten liest niemand. Eine Migration ist ein guter Anlass,
  sie abzuschalten.

Das Ergebnis ist eine einzige Tabelle: umziehen, neu aufbauen, zurücklassen.

## Woche 2 — Datenprobe

Daten werden vor dem Livegang mindestens zweimal geprobt. Eine Probe ist nicht "wir haben
kopiert", sondern der Abgleich der Kopie mit dem Altsystem auf Datensatzebene.

Drei Dinge:

1. **Saldosumme.** Stimmt die Gesamtsumme im Altsystem auf den Cent mit der neuen überein?
2. **Datensatzzahlen.** Passen Spieler-, Transaktions- und Protokollzahlen zusammen?
3. **Randfälle.** Negative Salden, geschlossene Konten, Dubletten, unvollständige Prüfungen —
   was wird daraus beim Umzug?

Eine Differenz in der Probe ist eine gute Nachricht. Die schlechte wäre, sie im Livebetrieb zu
finden.

## Woche 3 — Parallelbetrieb

Die neue Plattform steht, während die alte weiterläuft. Das Betriebsteam probt echte Szenarien
auf den neuen Bildschirmen: eine Auszahlung freigeben, einen Bonus anlegen, einen Fall schließen.
Das ist keine Schulungswoche; Schulung ist das Nebenprodukt der Probe.

In derselben Woche werden die Rückfallschritte geschrieben. "Wir gehen zurück, wenn etwas
schiefgeht" ist kein Plan. Der Plan lautet: ab welcher Schwelle, wer entscheidet, was wird in
welcher Reihenfolge abgeschaltet, woher kommen die Daten zurück. Ein Rückfallplan, der nicht
geschrieben ist, existiert nicht.

## Woche 4 — Traffic öffnen

Traffic wird nie auf einmal geöffnet. Erst das interne Team, dann eine kleine Spielergruppe,
dann ein Markt, dann alles. Bei jedem Schritt zählen dieselben vier Zahlen: Saldoabweichung,
Fehlerquote, Zahl der Supportanfragen, Freigabequote der Zahlungen.

Der häufigste Fehler am Starttag ist, Plattformwechsel und neue Anbieteranbindung gleichzeitig
zu machen. Geht etwas kaputt, wissen Sie nicht, woran es lag. Anbieterwechsel warten mindestens
zwei Wochen nach der Migration.

## Tag dreißig

Am Ende von Tag dreißig sollte mehr dastehen als eine laufende Plattform: eine geschlossene
Abstimmung, ein geschultes Team, ein schriftlicher Rückfallplan und eine Liste dessen, was im
Altsystem bleibt. Das Altsystem wird nicht sofort abgeschaltet — Prüfprotokolle und
Aufbewahrungsfristen halten es eine Weile lesbar.

Die nützlichste Frage bei der Planung ist diese: *Wenn dieser Schritt schiefgeht, nach wie vielen
Minuten merken wir es?* Jeder Schritt ohne Antwort geht zurück in den Plan.

Wenn Sie die Bestandsaufnahme für Ihre eigene Migration machen wollen,
[setzen wir uns mit dem technischen Team zusammen](page:demo).
`;export{e as default};