var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var fs = require("fs");
var path = require("path");
var tsort = require("./tsort/tsort.js");
var SimpleType = (function () {
    function SimpleType(name, type, documentation) {
        this.name = name;
        this.type = type;
        this.documentation = documentation;
    }
    return SimpleType;
})();
var TSDocumentation = (function () {
    function TSDocumentation(summary) {
        this.summary = summary;
    }
    TSDocumentation.prototype.toString = function () {
        return "";
        var result = "/**\n";
        var split = this.summary.split("\n");

        for(var i = 0; i < split.length; i += 1) {
            result += " * " + split[i].replace(/\//g, "\\/") + "\n";
        }
        result += " */\n";
        return result;
    };
    return TSDocumentation;
})();
var TSProperty = (function (_super) {
    __extends(TSProperty, _super);
    function TSProperty(name, type, documentation) {
        _super.call(this, name, type, documentation);
    }
    TSProperty.prototype.toString = function (isModuleProp) {
        var b = "";
        var docs = this.documentation;

        if(docs) {
            b += docs.toString();
        }
        if(isModuleProp) {
            b += "export var ";
        }
        b += this.name;
        b += " : " + this.type;
        b += ";\n";
        return b;
    };
    return TSProperty;
})(SimpleType);
var TSFunction = (function (_super) {
    __extends(TSFunction, _super);
    function TSFunction(name, args, returnType, documentation, isOverload) {
        _super.call(this, name, returnType, documentation);
        this.isOverload = isOverload;
        this.args = args;
        this.returnType = returnType;
    }
    TSFunction.prototype.toString = function (isModuleFn) {
        var b = "";
        var docs = this.documentation;

        if(docs) {
            b += docs.toString();
        }
        if(isModuleFn) {
            b += "export function ";
        }
        b += this.name;
        b += " (";
        b += this.args;
        b += ")";
        b += " : " + this.returnType;
        if(this.isOverload) {
            b += "{ }";
        }
        b += ";\n";
        return b;
    };
    return TSFunction;
})(SimpleType);
var TSModule = (function () {
    function TSModule(name, functions, properties, classes) {
        if (typeof functions === "undefined") { functions = []; }
        if (typeof properties === "undefined") { properties = []; }
        if (typeof classes === "undefined") { classes = []; }
        this.id = "Module_" + (TSModule.NEXT_ID += 1);
        this.name = name;
        this.functions = functions;
        this.properties = properties;
        this.classes = classes;
    }
    TSModule.NEXT_ID = 0;
    TSModule.INTERFACE_NAMES = [
        "Object", 
        "Array", 
        "navigator", 
        "console", 
        "window", 
        "document"
    ];
    TSModule.GLOBAL_MEMBER_FILTER = {
        "Object": {
            "toString": true,
            "hasOwnProperty": true
        },
        "Array": {
            "slice": true,
            "concat": true
        }
    };
    TSModule.prototype.addFunction = function (f) {
        this.functions.push(f);
    };
    TSModule.prototype.addFunctions = function (fns) {
        var i = 0;
        for(i = 0; i < fns.length; i += 1) {
            this.addFunction(fns[i]);
        }
    };
    TSModule.prototype.addProperty = function (f) {
        this.properties.push(f);
    };
    TSModule.prototype.addProperties = function (props) {
        var i = 0;
        for(i = 0; i < props.length; i += 1) {
            this.addProperty(props[i]);
        }
    };
    TSModule.prototype.addClass = function (f) {
        this.classes.push(f);
    };
    TSModule.prototype.addClasses = function (classes) {
        var i = 0;
        for(i = 0; i < classes.length; i += 1) {
            this.addClass(classes[i]);
        }
    };
    TSModule.prototype.isFilteredMember = function (member) {
        var filters = TSModule.GLOBAL_MEMBER_FILTER[this.name];
        return filters && filters[member.name];
    };
    TSModule.prototype.toString = function () {
        var b = "";
        var i;
        var isInterface = TSModule.INTERFACE_NAMES.indexOf(this.name) >= 0;
        var member;
        var func;

        if(isInterface) {
            b += "interface ";
        } else {
            b += "module ";
        }
        b += this.name;
        b += "{\n";
        for(i = 0; i < this.properties.length; i += 1) {
            member = this.properties[i];
            if(!this.isFilteredMember(member)) {
                b += member.toString(!isInterface);
            }
        }
        for(i = 0; i < this.functions.length; i += 1) {
            member = this.functions[i];
            if(!this.isFilteredMember(member)) {
                b += this.functions[i].toString(!isInterface);
            }
        }
        for(i = 0; i < this.classes.length; i += 1) {
            b += this.classes[i].toString();
        }
        b += "}\n";
        return b;
    };
    return TSModule;
})();
var TSClass = (function () {
    function TSClass(name, fullname, functions, properties, mixins) {
        if (typeof functions === "undefined") { functions = []; }
        if (typeof properties === "undefined") { properties = []; }
        if (typeof mixins === "undefined") { mixins = []; }
        this.name = name;
        this.functions = functions;
        this.properties = properties;
        this.mixins = mixins;
        this.fullname = fullname;
    }
    TSClass.prototype.addFunction = function (f) {
        this.functions.push(f);
    };
    TSClass.prototype.addFunctions = function (fns) {
        var i = 0;
        for(i = 0; i < fns.length; i += 1) {
            this.addFunction(fns[i]);
        }
    };
    TSClass.prototype.addProperty = function (f) {
        this.properties.push(f);
    };
    TSClass.prototype.addProperties = function (props) {
        var i = 0;
        for(i = 0; i < props.length; i += 1) {
            this.addProperty(props[i]);
        }
    };
    TSClass.prototype.addMixin = function (f) {
        this.mixins.push(f);
    };
    TSClass.prototype.calculateMemberList = function (memberMap) {
        var memberName;
        var i;
        var mi;

        for(i = 0; i < this.properties.length; i += 1) {
            memberName = this.properties[i].name;
            if(!memberMap[memberName]) {
                memberMap[memberName] = true;
            }
        }
        for(i = 0; i < this.functions.length; i += 1) {
            memberName = this.functions[i].name;
            if(!memberMap[memberName]) {
                memberMap[memberName] = true;
            }
        }
        for(i = 0; i < this.mixins.length; i += 1) {
            mi = this.mixins[i];
            mi.calculateMemberList(memberMap);
        }
    };
    TSClass.prototype.getSuperclass = function () {
        return this.mixins.length > 0 ? this.mixins[0].fullname : "";
    };
    TSClass.prototype.toString = function (propertyAndFunctionsOnly, memberFilters) {
        if (typeof propertyAndFunctionsOnly === "undefined") { propertyAndFunctionsOnly = false; }
        if (typeof memberFilters === "undefined") { memberFilters = {
        }; }
        var b = "";
        var i;
        var j;
        var memberName;
        var mi;

        if(!propertyAndFunctionsOnly) {
            b += "export class ";
            b += this.name;
            if(this.mixins && this.mixins.length > 0) {
                b += " extends " + this.mixins[0].fullname + " ";
                this.mixins[0].calculateMemberList(memberFilters);
            }
            b += "{\n";
        }
        for(i = 1; i < this.mixins.length; i += 1) {
            mi = this.mixins[i];
            b += mi.toString(true, memberFilters);
        }
        for(i = 0; i < this.properties.length; i += 1) {
            memberName = this.properties[i].name;
            if(!memberFilters[memberName]) {
                memberFilters[memberName] = true;
                b += this.properties[i].toString(false);
            }
        }
        for(i = 0; i < this.functions.length; i += 1) {
            memberName = this.functions[i].name;
            if(!memberFilters[memberName]) {
                memberFilters[memberName] = true;
                b += this.functions[i].toString(false);
            }
        }
        if(!propertyAndFunctionsOnly) {
            b += "}\n";
        }
        return b;
    };
    return TSClass;
})();
var Converter = (function () {
    function Converter() {
        this.apiDoc = {
        };
        this.modules = [];
        this.classes = {
        };
    }
    Converter.prototype.getParameterName = function (parameter, isOptional) {
        var name = parameter.name;
        var usage = parameter.usage;

        if(isOptional) {
            name += "?";
        }
        return name;
    };
    Converter.prototype.getType = function (defType) {
        var type = "any";
        var defTypeToLower;

        if(defType != null && defType.indexOf("|") < 0 && defType.indexOf("__") < 0) {
            defType = defType.replace(/\./g, "").replace(/\:/g, "");
            if(this.apiDoc[defType]) {
                type = defType;
            }
            defTypeToLower = defType.toLowerCase();
            switch(defTypeToLower) {
                case 'array':
                case 'handle[]': {
                    type = 'any[]';
                    break;

                }
                case 'arguments': {
                    type = 'IArguments';
                    break;

                }
                case 'domnode[]': {
                    type = 'HTMLElement[]';
                    break;

                }
                case 'domevent': {
                    type = 'Event';
                    break;

                }
                case 'dom':
                case 'node':
                case 'domnode': {
                    type = 'HTMLElement';
                    break;

                }
                case 'function[]': {
                    type = "Function[]";
                    break;

                }
                case 'function': {
                    type = "Function";
                    break;

                }
                case 'regex': {
                    type = 'RegExp';
                    break;

                }
                case 'documentelement':
                case 'documentnode':
                case 'mdocumentelement': {
                    type = 'HTMLDocument';
                    break;

                }
                case 'number':
                case 'decimal':
                case 'integer':
                case 'int':
                case 'float':
                case 'read-only-number':
                case 'integer/float':
                case '-1': {
                    type = 'number';
                    break;

                }
                case 'uri':
                case 'dojo.uri.uri': {
                    type = 'dojo._Url';
                    break;

                }
                case 'string':
                case 'class':
                case 'strin':
                case 'attribute':
                case 'html':
                case 'channel/resource': {
                    type = 'String';
                    break;

                }
                case 'deferred':
                case '\'deferred\'': {
                    type = 'dojo.Deferred';
                    break;

                }
                case 'bool':
                case 'boolean':
                case 'booleam': {
                    type = 'bool';
                    break;

                }
                case 'widget': {
                    type = 'dijit._Widget';
                    break;

                }
                case 'widget(dijit.menu)': {
                    type = 'dijit.Menu';
                    break;

                }
                case 'item[][]': {
                    type = "any";
                    break;

                }
                case 'item[]': {
                    type = "any";
                    break;

                }
                case 'item': {
                    type = "any";
                    break;

                }
                case 'mouse': {
                    type = 'MouseEvent';
                    break;

                }
                case 'key': {
                    type = 'KeyboardEvent';
                    break;

                }
                case '_tree.node':
                case 'treenode': {
                    type = 'dijit._TreeNode';
                    break;

                }
                case 'time': {
                    type = 'Date';
                    break;

                }
                case 'nodelist': {
                    type = 'dojo.NodeList';
                    break;

                }
                case 'array[dojox.grid.__celldef[]]': {
                    type = 'dojox.grid.__CellDef[]';
                    break;

                }
                case 'array[widgets]': {
                    type = "dijit._Widget[]";
                    break;

                }
            }
        }
        return type;
    };
    Converter.prototype.isModule = function (definition) {
        return definition && !definition.type && !this.isClass(definition);
    };
    Converter.prototype.isClass = function (definition) {
        return !!(definition && definition.classlike);
    };
    Converter.prototype.isSubClass = function (definition) {
        var i;
        var location = definition.location;
        var namespaceClassParts = location.split(".");
        var soFar = "";

        for(i = 0; i < namespaceClassParts.length - 1; i += 1) {
            soFar += (i > 0 ? "." : "") + namespaceClassParts[i];
            if(this.isClass(this.apiDoc[soFar])) {
                return true;
            }
        }
        return false;
    };
    Converter.prototype.getModule = function (name) {
        var m = new TSModule(name);
        this.modules.push(m);
        return m;
    };
    Converter.prototype.getParameterTypeSets = function (parameterDefinitions, i, forceOptional) {
        if (typeof i === "undefined") { i = 0; }
        var result = [];
        var paramDef;
        var paramTypes;
        var paramType;
        var subparameterSets = [];
        var j;
        var k;
        var paramName;
        var newParam;
        var typeMap = {
        };
        var oneOrMore;

        i = i || 0;
        paramDef = parameterDefinitions[i];
        forceOptional = forceOptional || paramDef.usage === "optional";
        paramName = this.getParameterName(paramDef, forceOptional);
        paramTypes = paramDef.type ? paramDef.type.replace("(", "").replace(")", "").split("|") : [
            "any"
        ];
        if(i < parameterDefinitions.length - 1) {
            subparameterSets = this.getParameterTypeSets(parameterDefinitions, i + 1, forceOptional);
        }
        for(j = 0; j < paramTypes.length; j += 1) {
            paramType = paramTypes[j];
            if(paramType) {
                paramType = this.getType(paramType);
                if(!typeMap[paramType]) {
                    typeMap[paramType] = true;
                    newParam = [
                        paramName + ": " + paramType
                    ];
                    if(subparameterSets && subparameterSets.length > 0) {
                        for(k = 0; k < subparameterSets.length; k += 1) {
                            result.push(newParam.concat(subparameterSets[k]));
                        }
                    } else {
                        result.push(newParam);
                    }
                }
            }
        }
        if(paramDef.usage === "one-or-more") {
            result.push([
                [
                    "..." + paramName + j + ": " + paramType + "[]"
                ]
            ]);
        }
        return result;
    };
    Converter.prototype.calculateClassLoadOrders = function () {
        var i;
        var loadOrders = {
        };
        var cls;
        var superclass;
        var loadDependencies = [];

        for(i in this.classes) {
            cls = this.classes[i];
            superclass = cls.getSuperclass();
            if(superclass) {
                loadDependencies.push([
                    cls.fullname, 
                    superclass
                ]);
            }
        }
        var results = tsort(loadDependencies).reverse();
        for(i = 0; i < results.length; i += 1) {
            loadOrders[results[i]] = i + 1;
        }
        return loadOrders;
    };
    Converter.prototype.sortModules = function () {
        var modules = [];
        var loadOrders = {
        };
        var i;
        var m;
        var minOrder;
        var orders = {
        };

        loadOrders = this.calculateClassLoadOrders();
        for(i = 0; i < this.modules.length; i += 1) {
            m = this.modules[i];
            minOrder = (m.classes.length > 0 && loadOrders[m.classes[0].fullname]) || 99999999;
            orders[m.id] = minOrder;
            modules.push(m);
        }
        modules.sort(function (a, b) {
            return orders[a.id] - orders[b.id];
        });
        return modules;
    };
    Converter.prototype.processMixins = function () {
        var i;
        var j;
        var cls;
        var definition;
        var mis;
        var mi;

        for(i in this.classes) {
            cls = this.classes[i];
            definition = this.apiDoc[i];
            if(definition.mixins) {
                mis = definition.mixins && definition.mixins["instance"];
                for(j = 0; j < mis.length; j += 1) {
                    mi = this.classes[mis[j].location];
                    if(mi) {
                        cls.addMixin(mi);
                    }
                }
            }
        }
    };
    Converter.prototype.convertParameters = function (parameterDefinitions) {
        var result = [];
        if(parameterDefinitions) {
            result = this.getParameterTypeSets(parameterDefinitions);
        } else {
            result.push([]);
        }
        return result;
    };
    Converter.prototype.convertDocumentation = function (definition) {
        var summary = definition.summary;
        if(summary) {
            return new TSDocumentation(summary);
        }
    };
    Converter.prototype.convertProperties = function (propertyDefs) {
        var i;
        var propDef;
        var props = [];
        var name;

        if(propertyDefs) {
            for(i = 0; i < propertyDefs.length; i += 1) {
                propDef = propertyDefs[i];
                name = propDef.name;
                if(name && name !== 'constructor' && name !== 'class' && name.indexOf && name.indexOf("-") < 0) {
                    props.push(new TSProperty(name, this.getType(propDef.type), this.convertDocumentation(propDef)));
                }
            }
        }
        return props;
    };
    Converter.prototype.convertFunctions = function (functionDefs) {
        var i;
        var fnDef;
        var fns = [];
        var parameterSets;
        var j;
        var returnType;
        var returnTypes;
        var name;

        if(functionDefs) {
            for(i = 0; i < functionDefs.length; i += 1) {
                fnDef = functionDefs[i];
                name = fnDef.name;
                if(name && name !== 'constructor' && name.indexOf && name.indexOf("-") < 0) {
                    returnTypes = fnDef["return-types"];
                    returnType = "any";
                    if(returnTypes && returnTypes.length === 1) {
                        returnType = this.getType(returnTypes[0].type);
                    }
                    parameterSets = this.convertParameters(fnDef.parameters);
                    for(j = 0; j < parameterSets.length; j += 1) {
                        fns.push(new TSFunction(fnDef.name, parameterSets[j], returnType, this.convertDocumentation(fnDef)));
                    }
                }
            }
        }
        return fns;
    };
    Converter.prototype.convertModule = function (name, definition) {
        var m;
        if(definition) {
            m = this.getModule(name);
            m.addFunctions(this.convertFunctions(definition.methods));
            m.addProperties(this.convertProperties(definition.properties));
        }
        return m;
    };
    Converter.prototype.convertModules = function () {
        var i;
        var definition;

        for(i in this.apiDoc) {
            definition = this.apiDoc[i];
            if(this.isModule(definition) && !this.isSubClass(definition)) {
                this.convertModule(i, definition);
            }
        }
    };
    Converter.prototype.convertClass = function (name, fullName, definition) {
        return new TSClass(name, fullName, this.convertFunctions(definition.methods), this.convertProperties(definition.properties));
    };
    Converter.prototype.convertClasses = function () {
        var definition;
        var nameParts;
        var result = "";
        var m;
        var cls;

        for(var i in this.apiDoc) {
            definition = this.apiDoc[i];
            if(this.isClass(definition) && i.indexOf("-") < 0) {
                nameParts = i.split(".");
                if(nameParts.length > 1) {
                    m = nameParts.splice(0, nameParts.length - 1).join(".");
                    if(!this.isSubClass(definition)) {
                        cls = this.convertClass(nameParts[nameParts.length - 1], i, definition);
                        this.classes[i] = cls;
                        this.getModule(m).addClass(cls);
                    }
                }
            }
        }
        return result;
    };
    Converter.prototype.convert = function (convertApiDoc, singleFile) {
        this.apiDoc = convertApiDoc;
        var i;
        var moduleName;
        var b = "";
        var resultName;
        var m;
        var loadOrders;
        var modules;
        var resultMap = {
        };

        this.convertClasses();
        this.convertModules();
        this.processMixins();
        modules = this.sortModules();
        for(i = 0; i < modules.length; i += 1) {
            if(modules[i]) {
                moduleName = modules[i].name;
                if(moduleName.indexOf("-") < 0 && !moduleName.match(/\.\d+\.?/) && moduleName.indexOf("keyword") < 0 && moduleName.indexOf("window.") < 0 && moduleName.indexOf("document.") < 0 && moduleName.indexOf("_bool") < 0 && moduleName !== 'Math' && moduleName !== 'dojox.highlight.languages.pygments._html.tags' && moduleName !== 'dojox.dtl.contrib.data._BoundItem.get') {
                    m = modules[i];
                    if(singleFile) {
                        resultName = "dojo";
                    } else {
                        resultName = m.classes.length > 0 ? m.classes[0].fullname : moduleName;
                    }
                    resultMap[resultName] = (resultMap[resultName] || "") + modules[i].toString();
                }
            }
        }
        return resultMap;
    };
    return Converter;
})();
var converter = new Converter();
var out = process.argv[3];
var outDir = "";
var singleFile = false;
var conversionResult;

if(out) {
    if(path.extname(out) !== "") {
        singleFile = true;
        outDir = path.dirname(path.resolve(out));
    } else {
        outDir = out;
    }
} else {
    out = "./";
}
if(!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}
conversionResult = converter.convert(JSON.parse(fs.readFileSync(process.argv[2])), singleFile);
for(var i in conversionResult) {
    fs.writeFileSync(singleFile ? out : (out + "/" + i + ".d.ts"), conversionResult[i]);
}
