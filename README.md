#dojo.d.ts
This work in progress node tool generates a Dojo library file for use with TypesScript, based on a Dojo provided api.json. Current api.json is Dojo 1.6. Pull requests are welcomed. 

###Prerequisites
```
Node js - http://nodejs.org/. 
TypeScript - npm install typescript -g
```

###Generating dojo.d.ts
Output to a single file: 
``` 
tsc dojoDocConverter.ts
node dojoDocConverter.js api.json [OUTPUT_FILE_NAME]
```

Output to multiple files by class name: 
``` 
tsc dojoDocConverter.ts
node dojoDocConverter.js api.json [OUTPUT_DIRECTORY]
```

###Usage
```
/// <reference path='dojo.d.ts' />
```

###Plans
*   Add in skipped classes that use keywords as property names.
*   Thorough testing