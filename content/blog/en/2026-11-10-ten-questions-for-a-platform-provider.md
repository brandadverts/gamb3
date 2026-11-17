---
title: Ten questions to ask a platform provider
description: The demo looks good everywhere. What separates providers is what shows up on the first heavy matchday.
date: 2026-11-10
slug: ten-questions-for-a-platform-provider
key: provider-selection-questions
tags: platform selection, integration, operations
---

A platform search starts the same way in most teams: three or four demo calls, screens that look
alike, decks that move in the same order. Everything works in a demo. The difference shows up on
the first heavy matchday after go-live.

The questions below are there to bring that day forward. None of them has one correct answer;
what matters is that the answer is specific and can be written into a contract.

## What the demo does not show

**1. How many people use this screen at once?** A demo is smooth with one user. Ask what happens
when four people work the approval queue together, and what each of them sees when two open the
same record.

**2. What does the screen show when something fails?** When a provider stops responding, what does
the player see, which warning appears in the back office, and who gets told. "That does not happen"
is not an answer.

**3. Which outages have you had in the last six months?** Ask for dates, durations and what was
done. There is no infrastructure without outages; there are only providers who cannot talk about
them.

## Where the money sits

**4. Is the balance held in one place?** If sportsbook and casino run on separate wallets, players
wait for transfers when they move between products and you close two reconciliations at the end of
the day. A shared wallet is not a marketing line; it is an accounting decision.

**5. How long does end-of-day reconciliation take, and what happens when it does not match?** You
are not looking for a system that promises it will always match. You are looking for one that shows
you the gap within minutes.

**6. Who can adjust a balance by hand?** Who grants that right, how many people approve it, and
where the record is kept — all of it in writing.

## Who approves what

**7. Can approval flows be configured?** Do you decide whether a withdrawal above a threshold needs
a second approval, or is the threshold fixed on the provider's side?

**8. Can a user approve a request they raised themselves?** If the answer is yes, you are the one
who will have to explain it during a licence audit.

## Not a contract — contracts

**9. Can I see the API documentation today?** Documentation that is withheld in the middle of a
sales process will also be late after signature. Look for five things: the endpoint list, error
codes, retry safety (the same request never processed twice), webhook signing and the versioning
policy.

What decides how long integration takes is not the number of endpoints; it is how plainly those
five are written down. [The technical setup is here](page:technology).

## The way out

**10. If I leave, how do I get my data?** Player records, the transaction ledger and audit logs —
in what format, within how many days, at what cost? Asking this in a first meeting feels awkward.
Signing without asking gets expensive two years later.

## How to use the list

Do not turn these ten into a scorecard. The point is not to rank providers but to see where you
could not get a straight answer. If you asked three providers the same question and got three
evasions, the problem is not with them: it is that you have not yet decided which risk you are
willing to carry.

Once you have the answers, put the two questions that worried you most at the top of the technical
discovery agenda. That is exactly where our discovery starts — happy to run it
[on your own setup](page:demo).
