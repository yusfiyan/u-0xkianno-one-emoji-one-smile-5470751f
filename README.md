# One Emoji, One Smile 🤗

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/yusfiyan/u-0xkianno-one-emoji-one-smile-5470751f/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/yusfiyan/u-0xkianno-one-emoji-one-smile-5470751f/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) bounty on [make.fun](https://make.fun/r/kgxbmb08).

## The entry

Exactly one emoji:

```
🤗
```

The hugging face — open arms, a smile, rosy cheeks: warmth aimed straight
at the stranger reading it. Warm at first glance, universally readable with
no irony or in-joke, clearly *chosen* rather than the first smiley every
entrant reaches for, and friendly rather than intimate, sarcastic or
flirtatious — a hug offered in emoji form, not a come-on.

## How it works

`main.ts` (Node 22+) writes that single emoji to
`$MAKEFUN_OUTPUT_DIR/entry.txt` — and nothing else. It writes only to the
absolute output directory the harness provides, never to a relative path,
then reads the file back and enforces the gate itself: exactly one emoji,
one character, not only whitespace.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
# Wrote entry: 🤗 (4 bytes)
```

## License

MIT — see [LICENSE](LICENSE).
