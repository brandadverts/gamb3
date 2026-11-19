var e=`---
title: The first 30 days of a platform migration
description: Most migrations slip for reasons that are not technical — the order of the work is wrong.
date: 2026-11-16
slug: the-first-30-days-of-a-platform-migration
key: migration-first-30-days
tags: migration, data, operations
---

Moving a live operation onto new infrastructure is harder than building from scratch. Building
from scratch, you only look forward. In a migration you also have to look behind you — at the
balances, the open bet slips and the half-finished withdrawal requests you are carrying across.

The thirty days below are not a delivery promise. They are a frame for how the work is ordered.
The real duration depends on the number of integrations, the volume of data and what the licence
requires.

## Week 1 — Inventory

No code is written in the first week. What gets written is the list of what moves.

- How many player records are there, how many are fully verified, how many are restricted?
- Open bet slips, pending withdrawals, bonuses mid-wagering: what happens to each at cut-over?
- Which provider contracts exist, and which of them continue on the new platform?
- Which reports go to whom? Most of them are read by nobody. A migration is a good moment to
  retire them.

The output is a single table: moving, rebuilding, leaving behind.

## Week 2 — Data rehearsal

Data is rehearsed at least twice before go-live. A rehearsal is not "we copied the data"; it is
comparing the copy against the old system record by record.

Three things to check:

1. **Balance totals.** Does the total in the old system match the new one to the cent?
2. **Record counts.** Do player, transaction and audit record counts line up?
3. **Edge cases.** Negative balances, closed accounts, duplicates, incomplete verification —
   what happens to each when it moves?

Finding a gap in rehearsal is good news. The bad news is finding it in production.

## Week 3 — Parallel run

The new platform comes up while the old one keeps serving. The operations team rehearses real
scenarios on the new screens: approve a withdrawal, set up a bonus, close a case. This is not
a training week; training is a by-product of the rehearsal.

The same week, the rollback steps get written. "We'll roll back if something goes wrong" is not
a plan. The plan is: at which threshold, who decides, what is switched off in what order, and
where the data comes back from. A rollback plan that is not written down does not exist.

## Week 4 — Opening the traffic

Traffic is never opened all at once. Internal team first, then a small cohort of players, then
one market, then the rest. At every step you watch the same four numbers: balance variance,
error rate, support ticket volume, payment approval rate.

The most common mistake on launch day is switching platform and bringing a new provider live at
the same time. When something breaks you cannot tell which of the two caused it. Provider changes
wait at least two weeks after the migration.

## Day thirty

What you should hold at the end of day thirty is more than a live platform: a closed
reconciliation, a trained team, a written rollback plan and a list of what is still in the old
system. The old system is not switched off immediately — audit records and retention rules mean
it stays readable for a while.

The most useful question while planning a migration is this: *if this step goes wrong, how many
minutes until we notice?* Any step without an answer goes back into the plan.

If you want to put together the inventory for your own migration,
[let's set up a session with the engineers](page:demo).
`;export{e as default};