#dojo.d.ts
This work in progress node tool generates a Dojo library file for use with TypesScript, based on a Dojo provided api.json. Current api.json is Dojo 1.6. Pull requests are welcomed. 

###Prerequisites
```
Node js - http://nodejs.org/. 
TypeScript - npm install typescript -g
```

###Generating dojo.d.ts
``` 
tsc dojoDocConverter.ts
node dojoDocConverter.js api.json dojo.d.ts
```

###Usage
```
/// <reference path='dojo.d.ts' />
```

###Plans
*   Fix inheritance
*   Thorough testing