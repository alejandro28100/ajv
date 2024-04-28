(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{407:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"choosing-schema-language"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#choosing-schema-language"}},[e._v("#")]),e._v(" Choosing schema language")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#json-type-definition"}},[e._v("JSON Type Definition")])]),t("li",[t("a",{attrs:{href:"#json-schema"}},[e._v("JSON Schema")]),t("ul",[t("li",[t("a",{attrs:{href:"#draft-04"}},[e._v("draft-04")])]),t("li",[t("a",{attrs:{href:"#draft-07-and-draft-06"}},[e._v("draft-07 (and draft-06)")])]),t("li",[t("a",{attrs:{href:"#draft-2019-09-and-draft-2020-12"}},[e._v("draft 2019-09 (and draft-2020-12)")])])])]),t("li",[t("a",{attrs:{href:"#comparison"}},[e._v("Comparison")]),t("ul",[t("li",[t("a",{attrs:{href:"#json-schema"}},[e._v("JSON Schema")])]),t("li",[t("a",{attrs:{href:"#json-type-definition"}},[e._v("JSON Type Definition")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"json-type-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-type-definition"}},[e._v("#")]),e._v(" JSON Type Definition")]),e._v(" "),t("p",[e._v("Ajv supports the new specification focussed on defining cross-platform types of JSON messages/payloads - JSON Type Definition (JTD). See the informal reference of "),t("a",{attrs:{href:"../json-type-definition"}},[e._v("JTD schema forms")]),e._v(" and formal specification "),t("a",{attrs:{href:"https://datatracker.ietf.org/doc/rfc8927/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC8927"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"json-schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-schema"}},[e._v("#")]),e._v(" JSON Schema")]),e._v(" "),t("p",[e._v("Ajv supports most widely used drafts of JSON Schema specification. Please see the informal reference of available "),t("a",{attrs:{href:"../json-schema"}},[e._v("JSON Schema validation keywords")]),e._v(" and "),t("a",{attrs:{href:"https://json-schema.org/specification.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("specification drafts"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"draft-04"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#draft-04"}},[e._v("#")]),e._v(" draft-04")]),e._v(" "),t("p",[e._v("Draft-04 is not included in Ajv v7, because of some differences it has with the following drafts:")]),e._v(" "),t("ul",[t("li",[e._v("different schema member for schema identifier ("),t("code",[e._v("id")]),e._v(" in draft-04 instead of "),t("code",[e._v("$id")]),e._v(")")]),e._v(" "),t("li",[e._v("different syntax of exclusiveMaximum/Minimum")])]),e._v(" "),t("p",[e._v("You can still use draft-04 schemas with Ajv v6 - while this is no longer actively developed, any security related issues would still be supported at least until 30/06/2021.")]),e._v(" "),t("p",[e._v("To install v6:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" ajv@6\n")])])]),t("p",[e._v("You can migrate schemas from draft-04 to draft-07 using "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("ajv-cli"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"draft-07-and-draft-06"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#draft-07-and-draft-06"}},[e._v("#")]),e._v(" draft-07 (and draft-06)")]),e._v(" "),t("p",[e._v("These are the most widely used versions of JSON Schema specification, and they are supported with the main ajv export.")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Ajv "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ajv"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" ajv "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Ajv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("If you need to support draft-06 schemas you need to add additional meta-schema, but you may just change (or remove) "),t("code",[e._v("$schema")]),e._v(" attribute in your schemas - no other changes are needed:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" draft6MetaSchema "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ajv/dist/refs/json-schema-draft-06.json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\najv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("addMetaSchema")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("draft6MetaSchema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("h3",{attrs:{id:"draft-2019-09-and-draft-2020-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#draft-2019-09-and-draft-2020-12"}},[e._v("#")]),e._v(" draft 2019-09 (and draft-2020-12)")]),e._v(" "),t("p",[e._v("The main advantage of this JSON Schema version over draft-07 is the ability to spread the definition of records that do not allow additional properties across multiple schemas. If you do not need it, you might be better off with draft-07.")]),e._v(" "),t("p",[e._v("To use Ajv with the support of all JSON Schema draft-2019-09/2020-12 features you need to use a different export:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Ajv2019 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ajv/dist/2019"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" ajv "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Ajv2019")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("Optionally, you can add draft-07 meta-schema, to use both draft-07 and draft-2019-09 schemas in one Ajv instance:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" draft7MetaSchema "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ajv/dist/refs/json-schema-draft-07.json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\najv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("addMetaSchema")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("draft7MetaSchema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("Draft-2019-09 support is provided via a separate export in order to avoid increasing the bundle and generated code size for draft-07 users.")]),e._v(" "),t("p",[e._v("With this import Ajv supports the following features:")]),e._v(" "),t("ul",[t("li",[e._v("keywords "),t("RouterLink",{attrs:{to:"/json-schema.html#unevaluatedproperties"}},[t("code",[e._v("unevaluatedProperties")])]),e._v(" and "),t("RouterLink",{attrs:{to:"/json-schema.html#unevaluateditems"}},[t("code",[e._v("unevaluatedItems")])])],1),e._v(" "),t("li",[e._v("keywords "),t("RouterLink",{attrs:{to:"/json-schema.html#dependentrequired"}},[t("code",[e._v("dependentRequired")])]),e._v(", "),t("RouterLink",{attrs:{to:"/json-schema.html#dependentschemas"}},[t("code",[e._v("dependentSchemas")])]),e._v(", "),t("RouterLink",{attrs:{to:"/json-schema.html#maxcontains--mincontains"}},[t("code",[e._v("maxContains")]),e._v("/"),t("code",[e._v("minContain")])])],1),e._v(" "),t("li",[e._v("dynamic recursive references with ["),t("code",[e._v("recursiveAnchor")]),e._v("/"),t("code",[e._v("recursiveReference")]),e._v("] - see "),t("RouterLink",{attrs:{to:"/guide/combining-schemas.html#extending-recursive-schemas"}},[e._v("Extending recursive schemas")])],1),e._v(" "),t("li",[e._v("draft-2019-09 meta-schema is the default.")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Draft-2019-09 features performance cost (even when not used)")]),e._v(" "),t("p",[e._v("Supporting dynamic recursive references and "),t("code",[e._v("unevaluatedProperties")]),e._v("/"),t("code",[e._v("unevaluatedItems")]),e._v(' keywords adds additional generated code even to the validation functions where these features are not used (when possible, Ajv determines which properties/items are "unevaluated" at compilation time, but support for dynamic references always adds additional generated code). If you are not using these features in your schemas it is recommended to use default Ajv export with JSON-Schema draft-07 support.')])]),e._v(" "),t("h2",{attrs:{id:"comparison"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comparison"}},[e._v("#")]),e._v(" Comparison")]),e._v(" "),t("p",[e._v("Both "),t("RouterLink",{attrs:{to:"/json-schema.html"}},[e._v("JSON Schema")]),e._v(" and "),t("RouterLink",{attrs:{to:"/json-type-definition.html"}},[e._v("JSON Type Definition")]),e._v(" are cross-platform specifications with implementations in multiple programming languages that define the shape of your JSON data.")],1),e._v(" "),t("p",[e._v("You can see the difference between the two specifications in "),t("a",{attrs:{href:"./getting-started"}},[e._v("Getting started")]),e._v(" section examples.")]),e._v(" "),t("p",[e._v("This section compares their pros/cons to help decide which specification fits your application better.")]),e._v(" "),t("h3",{attrs:{id:"json-schema-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-schema-2"}},[e._v("#")]),e._v(" JSON Schema")]),e._v(" "),t("p",[t("strong",[e._v("Pros")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Wide specification adoption.")]),e._v(" "),t("li",[e._v("Used as part of OpenAPI specification.")]),e._v(" "),t("li",[e._v("Support of complex validation scenarios:\n"),t("ul",[t("li",[e._v("untagged unions and boolean logic")]),e._v(" "),t("li",[e._v("conditional schemas and dependencies")]),e._v(" "),t("li",[e._v("restrictions on the number ranges and the size of strings, arrays and objects")]),e._v(" "),t("li",[e._v("semantic validation with formats, patterns and content keywords")]),e._v(" "),t("li",[e._v("distribute strict record definitions across multiple schemas (with unevaluatedProperties)")])])]),e._v(" "),t("li",[e._v("Can be effectively used for validation of any JavaScript objects and configuration files.")])]),e._v(" "),t("p",[t("strong",[e._v("Cons")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Defines the collection of restrictions on the data, rather than the shape of the data.")]),e._v(" "),t("li",[e._v("No standard support for tagged unions.")]),e._v(" "),t("li",[e._v("Complex and error prone for the new users (Ajv has "),t("a",{attrs:{href:"../strict-mode"}},[e._v("strict mode")]),e._v(" enabled by default to compensate for it, but it is not cross-platform).")]),e._v(" "),t("li",[e._v("Some parts of specification are difficult to implement, creating the risk of implementations divergence:\n"),t("ul",[t("li",[e._v("reference resolution model")]),e._v(" "),t("li",[e._v("unevaluatedProperties/unevaluatedItems")]),e._v(" "),t("li",[e._v("dynamic recursive references")])])]),e._v(" "),t("li",[e._v("Internet draft status (rather than RFC)")])]),e._v(" "),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/json-schema.html"}},[e._v("JSON Schema")]),e._v(" for more information and the list of defined keywords.")],1),e._v(" "),t("h3",{attrs:{id:"json-type-definition-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-type-definition-2"}},[e._v("#")]),e._v(" JSON Type Definition")]),e._v(" "),t("p",[t("strong",[e._v("Pros")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Aligned with type systems of many languages - can be used to generate type definitions and efficient parsers and serializers to/from these types.")]),e._v(" "),t("li",[e._v("Very simple, enforcing the best practices for cross-platform JSON API modelling.")]),e._v(" "),t("li",[e._v("Simple to implement, ensuring consistency across implementations.")]),e._v(" "),t("li",[e._v("Defines the shape of JSON data via strictly defined schema forms (rather than the collection of restrictions).")]),e._v(" "),t("li",[e._v("Effective support for tagged unions.")]),e._v(" "),t("li",[e._v("Designed to protect against user mistakes.")]),e._v(" "),t("li",[e._v("Supports compilation of schemas to efficient "),t("RouterLink",{attrs:{to:"/guide/getting-started.html#parsing-and-serializing-json"}},[e._v("serializers and parsers")]),e._v(" (no need to validate as a separate step).")],1),e._v(" "),t("li",[e._v("Approved as "),t("a",{attrs:{href:"https://datatracker.ietf.org/doc/rfc8927/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC8927"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Substantial industry adoption since it was standardized in 2020, Ajv v8.12.0 fixed all reported JTD bugs.")])]),e._v(" "),t("p",[t("strong",[e._v("Cons")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Limited, compared with JSON Schema - no support for untagged unions"),t("sup",[e._v("1")]),e._v(", conditionals, references between different schema files"),t("sup",[e._v("2")]),e._v(", etc.")]),e._v(" "),t("li",[e._v("No meta-schema in the specification"),t("sup",[e._v("3")]),e._v(".")])]),e._v(" "),t("p",[t("sup",[e._v("1")]),e._v(' Ajv defines non-standard keyword "union" that can be used inside "metadata" object.')]),e._v(" "),t("p",[t("sup",[e._v("2")]),e._v(" You can still combine schemas from multiple files in the application code.")]),e._v(" "),t("p",[t("sup",[e._v("3")]),e._v(" Ajv defines meta-schema for JTD schemas.")]),e._v(" "),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/json-type-definition.html"}},[e._v("JSON Type Definition")]),e._v(" for more information and the list of defined schema forms.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);