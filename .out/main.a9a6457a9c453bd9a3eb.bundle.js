(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{310:function(module,exports,__webpack_require__){__webpack_require__(311),__webpack_require__(457),__webpack_require__(458),module.exports=__webpack_require__(609)},375:function(module,exports){},48:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(13);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_reveal_Slide__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(670),__webpack_require__(309)),react_reveal_Slide__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_4__),Button=function(_ref){var buttonText=_ref.buttonText,tenant=_ref.tenant,disabled=_ref.disabled,_onClick=_ref.onClick,inverted=_ref.inverted,buttonSize=_ref.size||"medium";return _ref.slide?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_4___default.a,{left:!0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function onClick(){return _onClick()},disabled:disabled,type:"button",className:"".concat(tenant," ").concat(buttonSize," ").concat(inverted?"inverted":"")},buttonText)):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function onClick(){return _onClick()},disabled:disabled,type:"button",className:"".concat(tenant," ").concat(buttonSize," ").concat(inverted?"inverted":"")},buttonText)};Button.displayName="Button",Button.propTypes={slide:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,inverted:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,buttonText:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,tenant:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},Button.defaultProps={tenant:"",size:"medium",inverted:!1,disabled:!1,slide:!1,onClick:function onClick(){return null}},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{tenant:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:'"medium"',computed:!1},type:{name:"string"},required:!1,description:""},inverted:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},slide:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onClick:{defaultValue:{value:"() => null",computed:!1},type:{name:"func"},required:!1,description:""},buttonText:{type:{name:"string"},required:!0,description:""}}},__webpack_exports__.a=Button,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/button.component.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/button/button.component.jsx"})},609:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(308);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(646)],module)}.call(this,__webpack_require__(610)(module))},646:function(module,exports,__webpack_require__){var map={"./stories/button.stories.js":647,"./stories/footer.stories.js":676};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=646},647:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Turo",(function(){return Turo})),__webpack_require__.d(__webpack_exports__,"DefaultDisabled",(function(){return DefaultDisabled})),__webpack_require__.d(__webpack_exports__,"DefaultInverted",(function(){return DefaultInverted})),__webpack_require__.d(__webpack_exports__,"DefaultAnimated",(function(){return DefaultAnimated})),__webpack_require__.d(__webpack_exports__,"TuroInverted",(function(){return TuroInverted}));__webpack_require__(24);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(102),_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(48),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(29);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}__webpack_require__(135).withSource;var addSourceDecorator=__webpack_require__(135).addSource,__SOURCE_PREFIX__="/Users/niamhlawlor/Development/storybook-playground/src/stories",__STORY__='import React from "react";\nimport { action } from "@storybook/addon-actions";\nimport Button from "../components/button/button.component";\nimport {\n  withKnobs,\n  text,\n  boolean,\n  number,\n  select,\n} from "@storybook/addon-knobs";\n\nexport default { title: "Button" };\n\nconst actionsData = {\n  onClick: action("onClick"),\n};\n\nexport const Default = () => (\n  <Button\n    buttonText={text("Button Text") || "Default Button"}\n    disabled={boolean("Disabled")}\n    inverted={boolean("Inverted")}\n    size={select("Size", ["small", "medium", "large", "xlarge"])}\n  />\n);\n\nDefault.story = {\n  decorators: [withKnobs],\n};\n\nexport const Turo = () => (\n  <Button\n    {...actionsData}\n    tenant={"turo"}\n    buttonText={text("Button Text") || "Button text"}\n    disabled={boolean("Disabled")}\n    inverted={boolean("Inverted")}\n    size={select("Size", ["small", "medium", "large", "xlarge"])}\n  />\n);\n\nTuro.story = {\n  decorators: [withKnobs],\n};\n\nexport const DefaultDisabled = () => <Button buttonText="Disabled" disabled />;\nexport const DefaultInverted = () => (\n  <Button {...actionsData} inverted buttonText={`Click Me`} />\n);\n\nexport const DefaultAnimated = () => (\n  <Button\n    {...actionsData}\n    buttonText={text("Button Text") || "Button text"}\n    disabled={boolean("Disabled")}\n    inverted={boolean("Inverted")}\n    slide={true}\n  />\n);\n\nDefaultAnimated.story = {\n  decorators: [withKnobs],\n};\n\nexport const TuroInverted = () => (\n  <Button {...actionsData} inverted tenant={"turo"} buttonText={`Click Me`} />\n);\n',__ADDS_MAP__={"button--default":{startLoc:{col:23,line:18},endLoc:{col:1,line:25},startBody:{col:23,line:18},endBody:{col:1,line:25}},"button--turo":{startLoc:{col:20,line:31},endLoc:{col:1,line:40},startBody:{col:20,line:31},endBody:{col:1,line:40}},"button--default-disabled":{startLoc:{col:31,line:46},endLoc:{col:78,line:46},startBody:{col:31,line:46},endBody:{col:78,line:46}},"button--default-inverted":{startLoc:{col:31,line:47},endLoc:{col:1,line:49},startBody:{col:31,line:47},endBody:{col:1,line:49}},"button--default-animated":{startLoc:{col:31,line:51},endLoc:{col:1,line:59},startBody:{col:31,line:51},endBody:{col:1,line:59}},"button--turo-inverted":{startLoc:{col:28,line:65},endLoc:{col:1,line:67},startBody:{col:28,line:65},endBody:{col:1,line:67}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\nimport { action } from "@storybook/addon-actions";\nimport Button from "../components/button/button.component";\nimport {\n  withKnobs,\n  text,\n  boolean,\n  number,\n  select,\n} from "@storybook/addon-knobs";\n\nexport default { title: "Button" };\n\nconst actionsData = {\n  onClick: action("onClick"),\n};\n\nexport const Default = () => (\n  <Button\n    buttonText={text("Button Text") || "Default Button"}\n    disabled={boolean("Disabled")}\n    inverted={boolean("Inverted")}\n    size={select("Size", ["small", "medium", "large", "xlarge"])}\n  />\n);\n\nDefault.story = {\n  decorators: [withKnobs],\n};\n\nexport const Turo = () => (\n  <Button\n    {...actionsData}\n    tenant={"turo"}\n    buttonText={text("Button Text") || "Button text"}\n    disabled={boolean("Disabled")}\n    inverted={boolean("Inverted")}\n    size={select("Size", ["small", "medium", "large", "xlarge"])}\n  />\n);\n\nTuro.story = {\n  decorators: [withKnobs],\n};\n\nexport const DefaultDisabled = () => <Button buttonText="Disabled" disabled />;\nexport const DefaultInverted = () => (\n  <Button {...actionsData} inverted buttonText={`Click Me`} />\n);\n\nexport const DefaultAnimated = () => (\n  <Button\n    {...actionsData}\n    buttonText={text("Button Text") || "Button text"}\n    disabled={boolean("Disabled")}\n    inverted={boolean("Inverted")}\n    slide={true}\n  />\n);\n\nDefaultAnimated.story = {\n  decorators: [withKnobs],\n};\n\nexport const TuroInverted = () => (\n  <Button {...actionsData} inverted tenant={"turo"} buttonText={`Click Me`} />\n);\n',locationsMap:{"button--default":{startLoc:{col:23,line:18},endLoc:{col:1,line:25},startBody:{col:23,line:18},endBody:{col:1,line:25}},"button--turo":{startLoc:{col:20,line:31},endLoc:{col:1,line:40},startBody:{col:20,line:31},endBody:{col:1,line:40}},"button--default-disabled":{startLoc:{col:31,line:46},endLoc:{col:78,line:46},startBody:{col:31,line:46},endBody:{col:78,line:46}},"button--default-inverted":{startLoc:{col:31,line:47},endLoc:{col:1,line:49},startBody:{col:31,line:47},endBody:{col:1,line:49}},"button--default-animated":{startLoc:{col:31,line:51},endLoc:{col:1,line:59},startBody:{col:31,line:51},endBody:{col:1,line:59}},"button--turo-inverted":{startLoc:{col:28,line:65},endLoc:{col:1,line:67},startBody:{col:28,line:65},endBody:{col:1,line:67}}}}},title:"Button"};var actionsData={onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onClick")},Default=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.a,{buttonText:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Button Text")||"Default Button",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Disabled"),inverted:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Inverted"),size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select)("Size",["small","medium","large","xlarge"])})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__});Default.story={decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs]};var Turo=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.a,_extends({},actionsData,{tenant:"turo",buttonText:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Button Text")||"Button text",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Disabled"),inverted:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Inverted"),size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select)("Size",["small","medium","large","xlarge"])}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__});Turo.story={decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs]};var _ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.a,{buttonText:"Disabled",disabled:!0}),DefaultDisabled=addSourceDecorator((function(){return _ref}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),DefaultInverted=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.a,_extends({},actionsData,{inverted:!0,buttonText:"Click Me"}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),DefaultAnimated=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.a,_extends({},actionsData,{buttonText:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Button Text")||"Button text",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Disabled"),inverted:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Inverted"),slide:!0}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__});DefaultAnimated.story={decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs]};var TuroInverted=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.a,_extends({},actionsData,{inverted:!0,tenant:"turo",buttonText:"Click Me"}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},670:function(module,exports,__webpack_require__){var api=__webpack_require__(305),content=__webpack_require__(671);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},671:function(module,exports,__webpack_require__){(exports=__webpack_require__(306)(!1)).push([module.i,'button {\n  background-color: #141414;\n  color: #fff;\n  margin: 2rem 0;\n  cursor: pointer;\n  min-width: 210px;\n  border: none;\n  transition: background 0.2s ease, color 0.3s ease;\n}\n\nbutton.small {\n  padding: 0.5rem 1rem;\n  font-size: 14px;\n}\n\nbutton.medium {\n  padding: 1rem 3rem;\n  font-size: 16px;\n}\n\nbutton.large {\n  padding: 2rem 4rem;\n  font-size: 18px;\n}\n\nbutton.xlarge {\n  padding: 3rem 6rem;\n  font-size: 20px;\n}\n\nbutton.inverted {\n  background-color: #fff;\n  color: #141414;\n  border: 1px solid #141414;\n}\n\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n\nbutton.turo {\n  background-color: #59d388;\n  color: #fff;\n  font-family: "Nitti Grotesk", "Roboto", sans-serif;\n}\n\nbutton.turo.inverted {\n  border: 1px solid #59d388;\n  background-color: #fff;\n  color: #59d388;\n  font-family: "Nitti Grotesk", "Roboto", sans-serif;\n}\n',""]),module.exports=exports},674:function(module,exports,__webpack_require__){var api=__webpack_require__(305),content=__webpack_require__(675);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},675:function(module,exports,__webpack_require__){(exports=__webpack_require__(306)(!1)).push([module.i,"div.footer {\n  max-width: 100%;\n  width: 580px;\n  min-height: 100px;\n  display: flex;\n  margin: 0 auto;\n  justify-content: space-between;\n  border-top: 1px solid #141414;\n  margin-top: 3rem;\n}\n\ndiv.footer.turo {\n  border-top: 1px solid #59d388;\n}\n",""]),module.exports=exports},676:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"SubmittingDefault",(function(){return SubmittingDefault})),__webpack_require__.d(__webpack_exports__,"Turo",(function(){return Turo})),__webpack_require__.d(__webpack_exports__,"SubmittingTuro",(function(){return SubmittingTuro}));__webpack_require__(24);var react=__webpack_require__(3),react_default=__webpack_require__.n(react),dist=__webpack_require__(102),prop_types=__webpack_require__(35),prop_types_default=__webpack_require__.n(prop_types),button_component=__webpack_require__(48),Footer=(__webpack_require__(674),function(_ref){var loading=_ref.loading,tenant=_ref.tenant,classList=tenant?"footer ".concat(tenant):"footer";return react_default.a.createElement("div",{className:classList},react_default.a.createElement(button_component.a,{inverted:!0,disabled:loading,tenant:tenant,buttonText:"Cancel"}),react_default.a.createElement(button_component.a,{disabled:loading,tenant:tenant,buttonText:loading?"Submitting...":"Submit"}))});Footer.displayName="Footer",Footer.propTypes={loading:prop_types_default.a.bool,tenant:prop_types_default.a.string},Footer.defaultProps={loading:!1,tenant:null},Footer.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{loading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},tenant:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""}}};var footer_component=Footer;function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/footer/footer.component.jsx"]={name:"Footer",docgenInfo:Footer.__docgenInfo,path:"src/components/footer/footer.component.jsx"});__webpack_require__(135).withSource;var addSourceDecorator=__webpack_require__(135).addSource,__SOURCE_PREFIX__="/Users/niamhlawlor/Development/storybook-playground/src/stories",__STORY__='import React from "react";\nimport { action } from "@storybook/addon-actions";\nimport Footer from "../components/footer/footer.component";\n\nexport default { title: "Footer" };\n\nconst actionsData = {\n  onSubmit: action("onSubmit"),\n  onCancel: action("onCancel"),\n};\n\nexport const Default = () => <Footer {...actionsData} />;\nexport const SubmittingDefault = () => <Footer {...actionsData} loading />;\nexport const Turo = () => <Footer {...actionsData} tenant={"turo"} />;\nexport const SubmittingTuro = () => (\n  <Footer {...actionsData} tenant={"turo"} loading />\n);\n',__ADDS_MAP__={"footer--default":{startLoc:{col:23,line:12},endLoc:{col:56,line:12},startBody:{col:23,line:12},endBody:{col:56,line:12}},"footer--submitting-default":{startLoc:{col:33,line:13},endLoc:{col:74,line:13},startBody:{col:33,line:13},endBody:{col:74,line:13}},"footer--turo":{startLoc:{col:20,line:14},endLoc:{col:69,line:14},startBody:{col:20,line:14},endBody:{col:69,line:14}},"footer--submitting-turo":{startLoc:{col:30,line:15},endLoc:{col:1,line:17},startBody:{col:30,line:15},endBody:{col:1,line:17}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},actionsData=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\nimport { action } from "@storybook/addon-actions";\nimport Footer from "../components/footer/footer.component";\n\nexport default { title: "Footer" };\n\nconst actionsData = {\n  onSubmit: action("onSubmit"),\n  onCancel: action("onCancel"),\n};\n\nexport const Default = () => <Footer {...actionsData} />;\nexport const SubmittingDefault = () => <Footer {...actionsData} loading />;\nexport const Turo = () => <Footer {...actionsData} tenant={"turo"} />;\nexport const SubmittingTuro = () => (\n  <Footer {...actionsData} tenant={"turo"} loading />\n);\n',locationsMap:{"footer--default":{startLoc:{col:23,line:12},endLoc:{col:56,line:12},startBody:{col:23,line:12},endBody:{col:56,line:12}},"footer--submitting-default":{startLoc:{col:33,line:13},endLoc:{col:74,line:13},startBody:{col:33,line:13},endBody:{col:74,line:13}},"footer--turo":{startLoc:{col:20,line:14},endLoc:{col:69,line:14},startBody:{col:20,line:14},endBody:{col:69,line:14}},"footer--submitting-turo":{startLoc:{col:30,line:15},endLoc:{col:1,line:17},startBody:{col:30,line:15},endBody:{col:1,line:17}}}}},title:"Footer"},{onSubmit:Object(dist.action)("onSubmit"),onCancel:Object(dist.action)("onCancel")}),Default=addSourceDecorator((function(){return react_default.a.createElement(footer_component,actionsData)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/footer.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),SubmittingDefault=addSourceDecorator((function(){return react_default.a.createElement(footer_component,_extends({},actionsData,{loading:!0}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/footer.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Turo=addSourceDecorator((function(){return react_default.a.createElement(footer_component,_extends({},actionsData,{tenant:"turo"}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/footer.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),SubmittingTuro=addSourceDecorator((function(){return react_default.a.createElement(footer_component,_extends({},actionsData,{tenant:"turo",loading:!0}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/footer.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})}},[[310,1,2]]]);
//# sourceMappingURL=main.a9a6457a9c453bd9a3eb.bundle.js.map