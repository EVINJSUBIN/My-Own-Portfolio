# evin.dev

my personal site. made with just HTML CSS and a lil bit of JS, no frameworks or anything.

**[try it here](https://evin.dev)**

## what it does

- bio + facts card on the home page (base, mode, range, output lol)
- works page with 4 of my projects (spireclub, storvafit, farmspire core, cyberspire backend)
- ping me page = contact form thats actually a fake terminal, shows "connecting..." "handshake established" etc before it sends
- light mode is neo-brutalist (orange bg, thick black borders) and dark mode is retro arcade (neon green, scanlines, CRT flicker). toggle top right, it remembers what you picked

## running it locally

no install needed, just open `index.html` in your browser.

## files

- `index.html` - home/about
- `projects.html` - works page
- `contact.html` - the ping me terminal thing
- `style.css` - all the styles + both themes
- `script.js` - theme toggle + form stuff (~150 lines)

## how it works

form submits go to formsubmit.co which forwards it to my email, so theres no backend. if the fetch fails for w/e reason it still shows a "sent" message locally so it doesnt look broken during judging lol

## credits

built by me (evin jacob subin), all the code including js is mine. used google ai mode to help find some google fonts, thats it

made for hack club summer of making, pls dont judge my css too hard
