var fs = require("fs");

function Documentation(summary) {
    this.summary = summary;
    this.toString = function () {
        var result = "/**\n",
            split = summary.split("\n");
        for (var i = 0; i < split.length; i += 1) {
            result += " * " + split[i].replace(/\//g, "\\/") + "\n";
        }
        result += " */\n";
        return result;
    };
}

function Property(name, type, documentation, isModuleProp) {
    this.name = name;
    this.documentation = documentation;
    this.type = type;
    this.isModuleProp = isModuleProp;
    this.toString = function () {
        var b = "";
        if (documentation) {
            b += documentation.toString();
        }
        if (isModuleProp) {
            b += "export var ";
        }
        b += name;
        b += " : " + type;
        b += ";\n";
        return b;
    }
}

function Function(name, args, returnType, documentation, isModuleFn, isOverload) {
    this.name = name;
    this.args = args;
    this.documentation = documentation;
    this.returnType = returnType;
    this.isModuleFn = isModuleFn;
    this.toString = function() {
        var b = "";
        if (documentation) {
            b += documentation.toString();
        }
        if (isModuleFn) {
            b += "export function ";
        }
        b += name;
        b += " (";
        b += args;
        b += ")";
        b += " : " + returnType;
        if (isOverload) {
            b += "{ }";
        }
        b += ";\n";
        return b;
    }
}

function Module(name, functions, properties, classes) {
    var modules;
    classes = classes || [];
    properties = properties || [];
    functions = functions || [];

    this.name = name;

    this.addFunction = function (f) {
        functions.push(f);
    };

    this.addFunctions = function (fns) {
        var i = 0;
        for (i = 0; i < fns.length; i += 1) {
            this.addFunction(fns[i]);
        }
    };

    this.addProperty = function (f) {
        properties.push(f);
    };

    this.addProperties = function (props) {
        var i = 0;
        for (i = 0; i < props.length; i += 1) {
            this.addProperty(props[i]);
        }
    };

    this.addClass = function (f) {
        classes.push(f);
    };

    this.addClasses = function (classes) {
        var i = 0;
        for (i = 0; i < classes.length; i += 1) {
            this.addClass(classes[i]);
        }
    };

    this.toString = function () {
        var b = "",
            i;
        b += "module ";
        b += name;
        b += "{\n";
        for (i = 0; i < properties.length; i += 1) {
            b += properties[i].toString();
        }
        for (i = 0; i < functions.length; i += 1) {
            b += functions[i].toString();
        }
        for (i = 0; i < classes.length; i += 1) {
            b += classes[i].toString();
        }
        b += "}\n";
        return b;
    };
}


function Class(name, fullName, functions, properties, mixins) {
    var modules;
    mixins = mixins || [];
    properties = properties || [];
    functions = functions || [];

    this.properties = properties;
    this.functions = functions;

    this.fullName = fullName;
    this.name = name;

    this.addFunction = function (f) {
        functions.push(f);
    };

    this.addFunctions = function (fns) {
        var i = 0;
        for (i = 0; i < fns.length; i += 1) {
            this.addFunction(fns[i]);
        }
    };

    this.addProperty = function (f) {
        properties.push(f);
    };

    this.addProperties = function (props) {
        var i = 0;
        for (i = 0; i < props.length; i += 1) {
            this.addProperty(props[i]);
        }
    };

    this.addMixin = function (f) {
        mixins.push(f);
    };

    this.addClasses = function (mixins) {
        var i = 0;
        for (i = 0; i < mixins.length; i += 1) {
            this.addMixin(mixins[i]);
        }
    };

    /**
     * Calculates the members that belong to this class/superclass
     */
    this.calculateMemberList = function(memberMap) {
        var memberName, i;
        for (i = 0; i < properties.length; i += 1) {
            memberName = properties[i].name;
            if (!memberMap[memberName]) {
                memberMap[memberName] = true;
            }
        }
        for (i = 0; i < functions.length; i += 1) {
            memberName = functions[i].name;
            if (!memberMap[memberName]) {
                memberMap[memberName] = true;
            }
        }

        // Mixin the other ones
        for (i = 0; i < mixins.length; i += 1) {
            mi = mixins[i];
            mi.calculateMemberList(memberMap);
        }
    };

    this.toString = function (propertyAndFunctionsOnly, memberFilters) {
        var b = "",
            i,
            j,
            memberName,
            mi;

        memberFilters = memberFilters || {};

        if (!propertyAndFunctionsOnly) {
            b += "export class ";
            b += name;

            // Support only one superclass
            /*if (mixins && mixins.length > 0) {
                b += " extends " + mixins[0].fullName + " ";
                mixins[0].calculateMemberList(memberFilters);
            }*/

            b += "{\n";
        }

        // Mixin the other ones
        for (i = 0; i < mixins.length; i += 1) {
            mi = mixins[i];
            b += mi.toString(true, memberFilters);
        }

        for (i = 0; i < properties.length; i += 1) {
            memberName = properties[i].name;
            if (!memberFilters[memberName]) {
                memberFilters[memberName] = true;
                b += properties[i].toString();
            }
        }
        for (i = 0; i < functions.length; i += 1) {
            memberName = functions[i].name;
            if (!memberFilters[memberName]) {
                memberFilters[memberName] = true;
                b += functions[i].toString();
            }
        }

        // HACK: for mixins
        /*for (i = 0; i < mixins.length; i += 1) {
            miProps = mixins[i].properties;
            miFuncs = mixins[i].functions;

            if (miProps) {
                for (j = 0; j < miProps.length; j += 1) {
                    if (!processedProps[miProps[j].name]) {
                        b += miProps[j].toString();
                    }
                }
            }
            if (miFuncs) {
                for (j = 0; j < miFuncs.length; j += 1) {
                    if (!processedFunctions[miFuncs[j].name]) {
                        b += miFuncs[j].toString();
                    }
                }
            }
            //b += mixins[i].toString(true);
        }*/
        if (!propertyAndFunctionsOnly) {
            b += "}\n";
        }
        return b;
    };
}

function Converter() {
    var apiDoc, modules = {}, classes = {};
    
    /**
     * Gets a parameter name from a parameter definition
     */
    this.getParameterName = function (parameter, isOptional) {
        var name = parameter.name,
			usage = parameter.usage;
        if (isOptional) {
            name += "?";
        }
        return name;
    };

    /**
     * Gets the typescript type for the api doc type
     */
    this.getType = function (defType) {
        var type = "any", defTypeToLower;
        if (defType != null && defType.indexOf("|") < 0 && defType.indexOf("__") < 0) {
            defType = defType.replace(/\./g, "").replace(/\:/g, "");
            if (apiDoc[defType]) {
                type = defType;
            }
            defTypeToLower = defType.toLowerCase();
            switch (defTypeToLower) {
                case 'array':
                case 'handle[]':
                    type = 'any[]';
                    break;
                case 'arguments':
                    type = 'IArguments';
                    break;
                case 'domnode[]':
                    type = 'HTMLElement[]';
                    break;
                case 'domevent':
                    type = 'Event';
                    break;
                case 'dom':
                case 'node':
                case 'domnode':
                    type = 'HTMLElement';
                    break;
                case 'function[]':
                    type = "{(a?:any) : any;}[]";
                    break;
                case 'function':
                    type = "(a?:any) => any";
                    break;
                case 'regex':
                    type = 'RegExp';
                    break;
                case 'documentelement':
                case 'documentnode':
                case 'mdocumentelement':
                    type = 'HTMLDocument';
                    break;
                case 'number':
                case 'decimal':
                case 'integer':
                case 'int':
                case 'float':
                case 'read-only-number':
                case 'integer/float':
                case '-1':
                    type = 'number';
                    break;
                case 'uri':
                case 'dojo.uri.uri':
                    type = 'dojo._Url';
                    break;
                case 'string':
                case 'string.':
                case 'class':
                case 'strin':
                case 'attribute':
                case 'html':
                case 'channel/resource':
                    type = 'String';
                    break;
                case 'deferred':
                case '\'deferred\'':
                    type = 'dojo.Deferred';
                    break;
                case 'bool':
                case 'boolean':
                case 'boolean.':
                case 'booleam':
                    type = 'bool';
                    break;
                case 'widget':
                    type = 'dijit._Widget';
                    break;
                case 'widget(dijit.menu)':
                    type = 'dijit.Menu';
                    break;
                case 'item[][]':
                    //type = 'dojo.data.Item[][]';
                    type = "any";
                    break;
                case 'item[]':
                    //type = 'dojo.data.Item[]';
                    type = "any";
                    break;
                case 'item':
                    //type = 'dojo.data.Item';
                    type = "any";
                    break;
                case 'mouse':
                    type = 'MouseEvent';
                    break;
                case 'key':
                    type = 'KeyboardEvent';
                    break;
                case '_tree.node':
                case 'treenode':
                    type = 'dijit._TreeNode';
                    break;
                case 'time':
                    type = 'Date';
                    break;
                case 'nodelist':
                    type = 'dojo.NodeList';
                    break;
                case 'array[dojox.grid.__celldef[]]':
                    type = 'dojox.grid.__CellDef[]';
                    break;
                case 'array[widgets]':
                    type = "dijit._Widget[]";
                    break;
            }
        }
        return type;
    };

    this.isModule = function (definition) {
        return definition && !definition.type && !this.isClass(definition);
    };

    this.isClass = function (definition) {
        return definition && definition.classlike;
    };

    this.isSubClass = function (definition) {
        var location = definition.location, namespaceClassParts = location.split("."), soFar = "";
        for (i = 0; i < namespaceClassParts.length - 1; i += 1) {
            soFar += (i > 0 ? "." : "") + namespaceClassParts[i];
            if (this.isClass(apiDoc[soFar])) {
                return true;
            }
        }
        return false;
    };

    this.getModule = function (name) {
        var module = modules[name] = modules[name] || new Module(name);
        return module;
    };


    /**
     * Expands the parameter definition into unique sets of parameters
     * cause some parameters can be multiple types
     */
    this.getParameterTypeSets = function (parameterDefinitions, i, forceOptional) {
        var result = [], paramDef, paramTypes, paramType, subparameterSets = [], j, k, paramName, newParam, typeMap = {}, oneOrMore;
        i = i || 0;
        paramDef = parameterDefinitions[i];
        forceOptional = forceOptional || paramDef.usage === "optional";

        paramName = this.getParameterName(paramDef, forceOptional);
        paramTypes = paramDef.type ? paramDef.type.replace("(", "").replace(")", "").split("|") : ["any"];

        // If there are more parameters after this one
        if (i < parameterDefinitions.length - 1) {
            subparameterSets = this.getParameterTypeSets(parameterDefinitions, i + 1, forceOptional);
        }

        for (j = 0; j < paramTypes.length; j += 1) {
            paramType = paramTypes[j];
            if (paramType) {
                paramType = this.getType(paramType);
                // This prevents multiple types that resolve to the same type so any,any
                if (!typeMap[paramType]) {
                    typeMap[paramType] = true;
                    newParam = [paramName + ": " + paramType];

                    if (subparameterSets && subparameterSets.length > 0) {
                        for (k = 0; k < subparameterSets.length; k += 1) {
                            result.push(newParam.concat(subparameterSets[k]));
                        }
                    } else {
                        result.push(newParam);
                    }
                }
            }
        }

        // Add in a whole bunch of optional parameters to handle it,
        // since typescript doesn't support this ability
        if (paramDef.usage === "one-or-more") {
            oneOrMore = [];
            for (j = 0; j < 10; j += 1) {
                oneOrMore.push(["oneOrMore" + j + "?: " + paramType]);
            }
            result.push(oneOrMore);
        }

        return result;
    },

    this.processMixins = function () {
        var i, j, cls, definition, mis, mi;
        for (i in classes) {
            cls = classes[i];
            definition = apiDoc[i];
            if (definition.mixins) {
                mis = definition.mixins && definition.mixins["instance"];
                for (j = 0; j < mis.length; j += 1) {
                    mi = classes[mis[j].location];
                    if (mi) {
                        cls.addMixin(mi);
                    }
                }
            }
        }
    };

    this.convertParameters = function (parameterDefinitions) {
        var result = [];

        if (parameterDefinitions) {
            result = this.getParameterTypeSets(parameterDefinitions);
        } else {
            result.push([]);
        }

        return result;
    };

    this.convertDocumentation = function (definition) {
        var summary = definition.summary;
        if (summary) {
            return new Documentation(summary);
        }
    };

    this.convertProperties = function (propertyDefs, isModule) {
        var i, propDef, props = [], name;
        if (propertyDefs) {
            for (i = 0; i < propertyDefs.length; i += 1) {
                propDef = propertyDefs[i];
                name = propDef.name;
                // Some of the docs have properties with dashes in them, filter those out.  
                if (name && name !== 'constructor' && name !== 'class' && name.indexOf && name.indexOf("-") < 0) {     
                    props.push(new Property(name, this.getType(propDef.type), this.convertDocumentation(propDef), isModule));
                }
            }
        }
        return props;
    };

    this.convertFunctions = function (functionDefs, isModule) {
        var i, fnDef, fns = [], parameterSets, j, returnType, returnTypes, name;
        if (functionDefs) {
            for (i = 0; i < functionDefs.length; i += 1) {
                fnDef = functionDefs[i];
                name = fnDef.name;
                if (name && name !== 'constructor' && name.indexOf && name.indexOf("-") < 0) {
                    // Functions in dojo can have more than one return type
                    // so if there is more than one, just use "any" as the ts return type
                    // we can't use void, cause sometimes they don't list the return types of the functions correctly
                    returnTypes = fnDef["return-types"];
                    returnType = "any";
                    if (returnTypes && returnTypes.length === 1) {
                        returnType = this.getType(returnTypes[0].type);
                    }

                    parameterSets = this.convertParameters(fnDef.parameters);

                    // A single function can have multiple different ways to call it, 
                    // we create an overloaded function for every way
                    for (j = 0; j < parameterSets.length; j += 1) {
                        fns.push(new Function(fnDef.name, parameterSets[j], returnType, this.convertDocumentation(fnDef), isModule));
                    }

                    // Add an "overload" definition
                    //fns.push(new Function(fnDef.name, ["a?:any"], "any", this.convertDocumentation(fnDef), isModule, true));
                }
            }
        }
        return fns;
    };

    this.convertModule = function(name, definition) {
        var m, i, provide, provideDef;
        if (definition) {
            m = this.getModule(name);
            m.addFunctions(this.convertFunctions(definition.methods, true));
            m.addProperties(this.convertProperties(definition.properties, true));
        }

        return m;
    };

    this.convertModules = function (roots) {
        var i;
        for (i in apiDoc) {
            definition = apiDoc[i];
            if (this.isModule(definition) && !this.isSubClass(definition)) {
                this.convertModule(i, definition);
            }
        }
    };

    this.convertClass = function (name, fullName, definition) {
        return new Class(name, fullName, this.convertFunctions(definition.methods, false), this.convertProperties(definition.properties, false));
    };

    this.convertClasses = function () {
        var definition, nameParts, result = "", module, cls;
        for (var i in apiDoc) {
            definition = apiDoc[i];
            if (this.isClass(definition) && i.indexOf("-") < 0) {
                nameParts = i.split(".");
                if (nameParts.length > 1) {
                    module = nameParts.splice(0, nameParts.length - 1).join(".");

                    // Sometimes the inner classes get into the docs, we want to filter those out since typescript doesnt support em
                    if (!this.isSubClass(definition)) {
                        cls = this.convertClass(nameParts[nameParts.length - 1], i, definition);
                        classes[i] = cls;
                        this.getModule(module).addClass(cls);
                    }
                }
            }
        }
        return result;
    };

    /**
     * Converts the API DOC in json format to TypeScript
     */
    this.convert = function (convertApiDoc, roots) {
        apiDoc = convertApiDoc;

        var i, moduleName, module, b = "";

        this.convertClasses();

        // Create all the root modules
    /*    for (i = 0; i < roots.length; i += 1) {
            moduleName = roots[i];
            modules[moduleName] = this.convertModule(moduleName, apiDoc[moduleName]);
        }*/
        this.convertModules(roots);

        this.processMixins();

        for (i in modules) {
            // Can't have module names with dashes or Numbers, or has the word keyword in the namespace
            if (i.indexOf("-") < 0 &&
                !i.match(/\.\d+\.?/) &&
                i.indexOf("keyword") < 0 &&
                i.indexOf("window.") < 0 &&
                i.indexOf("document.") < 0 &&
                i.indexOf("_bool") < 0 &&
                i !== 'Math' &&
                i !== 'dojox.highlight.languages.pygments._html.tags' &&
                i !== 'dojox.dtl.contrib.data._BoundItem.get') {
                b += modules[i].toString();
            }
        }
        return b;
    };
}

var converter = new Converter();
fs.writeFileSync(process.argv[3], converter.convert(JSON.parse(fs.readFileSync(process.argv[2])), ["dojo", "dijit", "dojox"]));
