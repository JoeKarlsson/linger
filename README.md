# linger

Poems that only finish if you slow down.

**Read it:** https://linger.joekarlsson.com/

Each line starts as a skeleton of a few words. Hold still and the blanks fill in; scroll fast and they drain away. The skeleton is its own sparser poem, and the full poem is there only for readers who stay with each line for a few seconds.

## Editing

All poems live in `poems.js`. Each line is written once, and a prefix sets when a word appears:

- no prefix: always visible (the skim reading)
- `^word`: appears after a short pause
- `~word`: appears only if you linger

The home page list builds itself from that file. Timing values are at the top of the script in `poem.html`.

Plain HTML, CSS, and JavaScript. No build step, no tracking.

## License

The poems are CC BY-NC-ND 4.0: share them with credit, but don't sell or alter them. The code is MIT, so reuse the bloom effect however you like. See [LICENSE](LICENSE).

By [Joe Karlsson](https://joekarlsson.com).
