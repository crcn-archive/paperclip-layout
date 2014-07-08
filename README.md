```javascript
var pc = require("paperclip");
pc.use(require("paperclip-layout");
pc.layouts.setProperties({
  myLayoutName: require("./layouts/main.pc")
});
```

main.pc

```html
<h1> {{ html: blocks.main }} </h1>
```

usage:

```html
{{#layout:"myLayoutName"}}
  hello world
{{/}}
```

output:

```html
<h1>hello world</h1>
```