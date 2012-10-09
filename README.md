#dojo.d.ts
This node tool generates a Dojo library file for use with TypesScript, based on a Dojo provided api.json. Current api.json is Dojo 1.6. 

##Prerequisites
```
Node js - http://nodejs.org/. 
TypeScript - npm install typescript 
```

##Running
``` 
tsc dojoDocConverter.ts
node dojoDocConverter.js api.json dojo.d.ts
```

##Usage
```
/// <reference path='dojo.d.ts' />
```