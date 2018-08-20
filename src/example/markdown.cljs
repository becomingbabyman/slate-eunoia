(ns example.markdown)

(def short-sample "
# Short markdown sample
============

[ ] a checklist 👍
[x] with checks
[ ] and tags #yolo
[ ] and assignment @joe
[ ] and references +otherdoc


**bold** *italic* `monospace` and then [a link](https://google.com)
Auto link https://google.com wee

```
# some python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print(i)
```

```
; some clojure
(def r (range 1 5))
(defn app []
  (->> (reduce + (map inc r))
    (str)
    (vec))
  [:div
   [:em \"React rendered.\"]
   [outline-component]])
```

## h2
- dash list :smile:
- dash list
- dash list

### h3
* star list
* star list
* star list

---

> quote
> quote
> quote
")
