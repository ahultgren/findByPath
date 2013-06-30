# findByPath

Find nested properties in an object by specifying a path, eg "level1.level2.0.name".

```javascript
var findByPath = require('findByPath'),
obj = {
  level1: true,
  parent: {
    level2: "true"
  }
};

findByPath(obj, 'level1'); // true
findByPath(obj, 'parent.level2'); // "true"
findByPath(obj, 'parent/level2', '/'); // "true"
findByPath(obj, 'parent.child'); // undefined
```

See tests for more examples.


## Contributors

[Rodney Rehm](https://github.com/rodneyrehm) contributed the better part of the
code to [Reol.js](https://github.com/ahultgren/Reol.js/pull/4). Thanks!
