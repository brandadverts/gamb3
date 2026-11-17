---
title: What new bet types ask of your platform
description: Bet builders, player props, micro-betting. Every new bet type is one button on the front end and a different workload behind it.
date: 2026-11-16
slug: what-new-bet-types-ask-of-your-platform
key: new-bet-types
tags: sportsbook, bet types, risk
---

The biggest change in sportsbook over the last few years is not a new sport or a new league.
It is the shape of the bet. Players no longer only ask who wins the match; they ask whether a
player goes over 20 points, who takes the first corner, how the next point is won.

On the front end, that is one more button. Behind it, it is new work for pricing, risk and
settlement.

## Bet builders and same-game parlays

Putting several selections from the same match on one slip is now expected in many markets.
The difficulty is simple: the legs are not independent. "Team wins" and "striker scores" pull
in the same direction. Multiply their odds without accounting for that and you have a price
that is wrong in the player's favour.

What the platform needs:

- **Correlation pricing.** Either your feed provider prices correlated legs, or you define by
  rule which selections cannot be combined. If you have neither, the product should not go
  live.
- **Slip-level limits.** Risk limits that look at the whole combination, not each leg.
- **Partial settlement.** One leg settles early, another waits for full time. Screens and
  wallet have to show that correctly.

## Player props

Player markets — points, assists, shots, cards — are numerous, thin and exposed to
information. Injury news can travel on social media before it reaches the odds.

- **Fast suspension.** When a player drops out of the line-up, every market tied to them
  closes at once.
- **Per-market margin and limits.** Using main-market limits on a player prop is an open door.
- **Pattern detection.** Similar slips arriving on the same small market should land in a
  review queue.

## Micro-betting

Next point, next shot, next play. The market is open for seconds. What decides everything is
data latency: the price must be on screen before the event and must not be accepted after it.

- **A latency budget.** Every step from feed to slip acceptance written down in milliseconds.
- **Automated settlement.** Nobody settles second-long markets by hand.
- **Volume.** Slip counts multiply while stakes per slip drop. Reporting has to show that
  separately.

## Casino mechanics meet sport

At ICE Barcelona 2026 several suppliers showed products that bring crash-game mechanics to
sports betting: a multiplier climbs, the player cashes out when they choose. Whether these
stick is an open question. What is certain is that sportsbook and casino sharing one wallet,
one player view and one set of risk rules matters more every year.

## Which ones to switch on

You do not have to launch every new bet type on day one. Ask three questions:

1. Can I see this market's risk **in real time**?
2. If it is mispriced, **how many minutes** until I notice?
3. Is settlement **automated**, or does it add a new shift to my team?

Launch the products where all three answers are clear. You can see how the sportsbook module
handles this [on the products page](page:products).
