
---
### WIP (Don't Use)
---

# slate-eunoia

> A document editor powered by SlateJS


## Getting Started

### Dev Server

> This is normally what you'll want to develop against.

```
$ npm install
$ ./d
```

Open [localhost:8020](http://localhost:8020/) for live reloading.

### Example Server

```
$ npm install
$ ./e
```

Open [localhost:8022](http://localhost:8022/) for live reloading.

### Test Server

```
$ npm install
$ ./t
```

Open [localhost:8021](http://localhost:8021/) for live test watching.

**Better yet test with the REPL:**
- First open the browser to localhost:8021 to make sure the get the latest JS primed and recompiled (you only need to this once right after you star the test watcher with `./t`)
- Connect to the NREPL on port 3333. If using ProtoREPL: `cmd+opt+y` then `enter`
- In the newly opened REPL paste `(shadow.cljs.devtools.api/nrepl-select :browser-test)` and press `shift+enter`. This will switch the current namespace from clj to the currently running cljs server.
- Use `cmd+e` or whatever your eval command is to do REPL driven development!
- Tests will also run on save and show up in the REPL

### Dev Env Setup

[REPL Setup](https://medium.com/@loganpowell/clojurescript-development-for-javascript-developers-in-atom-with-shadow-cljs-and-protorepl-ec5e38e3de26) (specifically this [ProtoREPL in Atom section](https://gist.github.com/jasongilman/d1f70507bed021b48625))

# TODO

- [x] express slate documents in hiccup (investigate [hyperscript](https://github.com/ianstormtaylor/slate/blob/master/docs/reference/slate-hyperscript/index.md))
- [x] start links
- [x] make a better interactive test env to spec and fix edge cases - dev cards
- [ ] start schema
- [ ] start lists (ul, ol, checklist)
- [ ] start testing
- [ ] start polishing
- [ ] make module
- [ ] publish example to github page
- [ ] CRDTs
- [ ] embeds
- [ ] convert links to embeds
- [ ] images
- [ ] autocomplete
  - [ ] emojis
  - [ ] tags
- [ ] i18n
