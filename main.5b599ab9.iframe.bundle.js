(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{152:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CommandPalette_CommandPalette_CommandPalette}));var _line,_polyline,objectSpread2=__webpack_require__(45),toConsumableArray=__webpack_require__(521),slicedToArray=__webpack_require__(272),react=__webpack_require__(0),CommandPaletteContext=__webpack_require__(95),fuse_esm=__webpack_require__(520),react_hotkeys_hook_esm=(__webpack_require__(905),__webpack_require__(179));function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgArrowUpRight(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,["title","titleId"]);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-up-right",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_line||(_line=react.createElement("line",{x1:7,y1:17,x2:17,y2:7})),_polyline||(_polyline=react.createElement("polyline",{points:"7 7 17 7 17 17"})))}var _circle,meh_line,_line2,_line3,ForwardRef=react.forwardRef(SvgArrowUpRight),AnimatePresence=(__webpack_require__.p,__webpack_require__(934)),motion=__webpack_require__(928);function meh_extends(){return(meh_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function meh_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function meh_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgMeh(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=meh_objectWithoutProperties(_ref,["title","titleId"]);return react.createElement("svg",meh_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-meh",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_circle||(_circle=react.createElement("circle",{cx:12,cy:12,r:10})),meh_line||(meh_line=react.createElement("line",{x1:8,y1:15,x2:16,y2:15})),_line2||(_line2=react.createElement("line",{x1:9,y1:9,x2:9.01,y2:9})),_line3||(_line3=react.createElement("line",{x1:15,y1:9,x2:15.01,y2:9})))}var meh_ForwardRef=react.forwardRef(SvgMeh),jsx_runtime=(__webpack_require__.p,__webpack_require__(906),__webpack_require__(9)),CommandPaletteNoResults_CommandPaletteNoResults=function CommandPaletteNoResults(){return Object(jsx_runtime.jsxs)("div",{className:"command-palette--no-results--container",children:[Object(jsx_runtime.jsx)(meh_ForwardRef,{width:32,height:32}),Object(jsx_runtime.jsx)("p",{children:"There are no actions to see here."})]})},defaultFuseOptions={keys:["title"],includeScore:!0,threshold:.2},defaultInputOptions={placeholder:"What are you searching for?"},CommandPalette_CommandPalette_CommandPalette=function CommandPalette(_ref){var children=_ref.children,_ref$renderOnNoResult=_ref.renderOnNoResults,renderOnNoResults=void 0===_ref$renderOnNoResult?Object(jsx_runtime.jsx)(CommandPaletteNoResults_CommandPaletteNoResults,{}):_ref$renderOnNoResult,InputProps=_ref.InputProps,FuseOptions=_ref.FuseOptions,_useState=Object(react.useState)([]),_useState2=Object(slicedToArray.a)(_useState,2),actions=_useState2[0],setActions=_useState2[1],_useState3=Object(react.useState)(!1),_useState4=Object(slicedToArray.a)(_useState3,2),shown=_useState4[0],setShown=_useState4[1],_useState5=Object(react.useState)(void 0),_useState6=Object(slicedToArray.a)(_useState5,2),input=_useState6[0],setInput=_useState6[1],inputRef=Object(react.useRef)(null),itemsRef=Object(react.useRef)([]);Object(react.useEffect)((function(){itemsRef.current=itemsRef.current.slice(0,actions.length)}),[actions]);var addAction=Object(react.useCallback)((function(newAction){return setActions((function(prevActions){if(prevActions.find((function(action){return action.id===newAction.id})))throw Error("This action already has been added. Did you forget to remove this action with removeAction beforehand?");return[].concat(Object(toConsumableArray.a)(prevActions),[newAction])}))}),[]),removeAction=Object(react.useCallback)((function(givenAction){return setActions((function(prevActions){return prevActions.filter((function(action){return action.id!==givenAction.id}))}))}),[]),hide=function hide(){return setShown(!1)},MergedFuseOptions=Object(react.useMemo)((function(){return Object(objectSpread2.a)(Object(objectSpread2.a)({},defaultFuseOptions),FuseOptions)}),[FuseOptions]),MergedInputProps=Object(react.useMemo)((function(){return Object(objectSpread2.a)(Object(objectSpread2.a)({},defaultInputOptions),InputProps)}),[InputProps]),filteredActions=Object(react.useMemo)((function(){var _results$;if(!input)return actions;console.time("fuse");var results=new fuse_esm.a(actions,MergedFuseOptions).search(input),sortedResults=results.sort((function(a,b){var _a$score,_b$score;return(null!==(_a$score=a.score)&&void 0!==_a$score?_a$score:0)-(null!==(_b$score=b.score)&&void 0!==_b$score?_b$score:0)})).map((function(v){return v.item}));return console.log("fuse results",results),console.log("fuse matches",null==results||null===(_results$=results[0])||void 0===_results$?void 0:_results$.matches),console.timeEnd("fuse"),sortedResults}),[actions,input,MergedFuseOptions]);return Object(react_hotkeys_hook_esm.a)("escape",Object(react.useCallback)((function(e){shown&&hide()}),[shown]),{enableOnTags:["INPUT"]}),Object(react_hotkeys_hook_esm.a)("up",Object(react.useCallback)((function(e){var _document$activeEleme,_itemsRef$current,_inputRef$current,_itemsRef$current2,_itemsRef$current3,_itemsRef$current4;if(shown){e.preventDefault();var prevElem=null===(_document$activeEleme=document.activeElement)||void 0===_document$activeEleme?void 0:_document$activeEleme.previousElementSibling;prevElem||document.activeElement!==(null===(_itemsRef$current=itemsRef.current)||void 0===_itemsRef$current?void 0:_itemsRef$current[0])?prevElem?prevElem.focus():null===(_itemsRef$current2=itemsRef.current)||void 0===_itemsRef$current2||null===(_itemsRef$current3=_itemsRef$current2[(null===(_itemsRef$current4=itemsRef.current)||void 0===_itemsRef$current4?void 0:_itemsRef$current4.length)-1])||void 0===_itemsRef$current3||_itemsRef$current3.focus():null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current||_inputRef$current.focus()}}),[shown]),{enableOnTags:["INPUT"]}),Object(react_hotkeys_hook_esm.a)("down",Object(react.useCallback)((function(e){var _document$activeEleme2,_inputRef$current2,_itemsRef$current5,_itemsRef$current5$;if(shown){e.preventDefault();var nextElem=null===(_document$activeEleme2=document.activeElement)||void 0===_document$activeEleme2?void 0:_document$activeEleme2.nextElementSibling;nextElem?-1===nextElem.tabIndex?null===(_itemsRef$current5=itemsRef.current)||void 0===_itemsRef$current5||null===(_itemsRef$current5$=_itemsRef$current5[0])||void 0===_itemsRef$current5$||_itemsRef$current5$.focus():nextElem.focus():null===(_inputRef$current2=inputRef.current)||void 0===_inputRef$current2||_inputRef$current2.focus()}}),[shown]),{enableOnTags:["INPUT"]}),Object(jsx_runtime.jsxs)(CommandPaletteContext.a.Provider,{value:{actions:actions,addAction:addAction,removeAction:removeAction,show:function show(){return setShown(!0)},hide:hide,toggle:function toggle(){return setShown((function(prevShown){return!prevShown}))},shown:shown},children:[children,Object(jsx_runtime.jsx)(AnimatePresence.a,{children:shown&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(motion.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.2}},className:"command-palette--overlay",onClick:hide}),Object(jsx_runtime.jsxs)(motion.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.2}},className:"command-palette",children:[Object(jsx_runtime.jsxs)("header",{className:"command-palette--header",children:[Object(jsx_runtime.jsx)(motion.a.input,Object(objectSpread2.a)(Object(objectSpread2.a)({layoutId:"command-palette-input",type:"search"},MergedInputProps),{},{onInput:function handleInput(e){!function search(text){setInput(text)}(e.currentTarget.value)},ref:inputRef,autoFocus:!0})),Object(jsx_runtime.jsxs)("div",{className:"command-palette--header--help",children:[Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("kbd",{children:"↑↓"})," or ",Object(jsx_runtime.jsx)("kbd",{children:"tab"})," to navigate"]}),Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("kbd",{children:"enter"})," or ",Object(jsx_runtime.jsx)("kbd",{children:"click"})," to select"]}),Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("kbd",{children:"esc"})," to close"]})]})]}),Object(jsx_runtime.jsx)("section",{className:"command-palette--results",tabIndex:-1,children:filteredActions.length>0?filteredActions.map((function(action,i){return Object(jsx_runtime.jsxs)("div",{tabIndex:0,ref:function ref(el){return itemsRef.current[i]=el},onKeyDown:function onKeyDown(e){if("Enter"===e.key)return action.onSelect()},className:"command-palette--results-result",onClick:function onClick(){var result=action.onSelect();return hide(),result},children:[action.leading&&Object(jsx_runtime.jsx)("div",{children:action.leading}),Object(jsx_runtime.jsx)("p",{className:"command-palette--results-result-title",children:action.title}),Object(jsx_runtime.jsx)("div",{className:"trailing",children:Object(jsx_runtime.jsx)(ForwardRef,{width:18})})]},action.id)})):renderOnNoResults})]})]})})]})};try{CommandPalette_CommandPalette_CommandPalette.displayName="CommandPalette",CommandPalette_CommandPalette_CommandPalette.__docgenInfo={description:"",displayName:"CommandPalette",props:{FuseOptions:{defaultValue:null,description:"Options for the fuzzy searching which are provided by module Fuse.js.\nVisit their [online documentation](https://fusejs.io/api/options.html) for more information.",name:"FuseOptions",required:!1,type:{name:"IFuseOptions<Action>"}},renderOnNoResults:{defaultValue:{value:"<CommandPaletteNoResults />"},description:"What to show when there are no results",name:"renderOnNoResults",required:!1,type:{name:"ReactNode"}},InputProps:{defaultValue:null,description:"Options for the `input` element.\nThese are the basic properties you can expect from an `input` element, with extra properties from Framer Motion. For more information about these extra properties from Framer Motion you can visit their [online documentation](https://www.framer.com/api/motion/component/#props).\n@example ```typescript\n<CommandPalette InputProps={{ placeholder: 'What action do you want to perform?' }}\n```",name:"InputProps",required:!1,type:{name:'HTMLMotionProps<"input">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CommandPalette/CommandPalette.tsx#CommandPalette"]={docgenInfo:CommandPalette_CommandPalette_CommandPalette.__docgenInfo,name:"CommandPalette",path:"src/CommandPalette/CommandPalette.tsx#CommandPalette"})}catch(__react_docgen_typescript_loader_error){}try{CommandPalette.displayName="CommandPalette",CommandPalette.__docgenInfo={description:"",displayName:"CommandPalette",props:{FuseOptions:{defaultValue:null,description:"Options for the fuzzy searching which are provided by module Fuse.js.\nVisit their [online documentation](https://fusejs.io/api/options.html) for more information.",name:"FuseOptions",required:!1,type:{name:"IFuseOptions<Action>"}},renderOnNoResults:{defaultValue:{value:"<CommandPaletteNoResults />"},description:"What to show when there are no results",name:"renderOnNoResults",required:!1,type:{name:"ReactNode"}},InputProps:{defaultValue:null,description:"Options for the `input` element.\nThese are the basic properties you can expect from an `input` element, with extra properties from Framer Motion. For more information about these extra properties from Framer Motion you can visit their [online documentation](https://www.framer.com/api/motion/component/#props).\n@example ```typescript\n<CommandPalette InputProps={{ placeholder: 'What action do you want to perform?' }}\n```",name:"InputProps",required:!1,type:{name:'HTMLMotionProps<"input">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CommandPalette/index.tsx#CommandPalette"]={docgenInfo:CommandPalette.__docgenInfo,name:"CommandPalette",path:"src/CommandPalette/index.tsx#CommandPalette"})}catch(__react_docgen_typescript_loader_error){}},490:function(module,exports,__webpack_require__){},544:function(module,exports,__webpack_require__){__webpack_require__(545),__webpack_require__(702),__webpack_require__(703),__webpack_require__(920),__webpack_require__(921),__webpack_require__(924),__webpack_require__(925),__webpack_require__(923),__webpack_require__(922),__webpack_require__(926),__webpack_require__(927),module.exports=__webpack_require__(901)},612:function(module,exports){},703:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(401)},901:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(401).configure)([__webpack_require__(902),__webpack_require__(903)],module,!1)}).call(this,__webpack_require__(241)(module))},902:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=902},903:function(module,exports,__webpack_require__){var map={"./stories/CommandPalette.stories.tsx":904,"./stories/CommandPaletteWithInputTransition.stories.tsx":919};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=903},904:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"CustomPlaceholder",(function(){return CustomPlaceholder})),__webpack_require__.d(__webpack_exports__,"CustomKeybinding",(function(){return CustomKeybinding}));var _home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_CommandPalette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(152),_CommandPalette_CommandPaletteContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(95),lorem_ipsum__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(490),__webpack_require__(266)),react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(179),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9);__webpack_exports__.default={title:"CommandPalette/Basics",component:_CommandPalette__WEBPACK_IMPORTED_MODULE_2__.a};var lorem=new lorem_ipsum__WEBPACK_IMPORTED_MODULE_5__.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),testActions=Array.from({length:50},(function(_,i){return{id:i,title:lorem.generateSentences(1),onSelect:function onSelect(){alert("You selected action #"+i)}}})),Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_CommandPalette__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args),{},{children:["Render your children within the",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("code",{children:"<CommandPalette />"}),"to access the context. ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ToggleCommandPaletteButton,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ComponentWhichRegistersActions,{})]}))},ToggleCommandPaletteButton=function ToggleCommandPaletteButton(){var toggle=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_CommandPalette_CommandPaletteContext__WEBPACK_IMPORTED_MODULE_3__.a).toggle;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{onClick:toggle,children:"Toggle open the command palette"})},ComponentWhichRegistersActions=function ComponentWhichRegistersActions(){var _useContext2=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_CommandPalette_CommandPaletteContext__WEBPACK_IMPORTED_MODULE_3__.a),addAction=_useContext2.addAction,removeAction=_useContext2.removeAction;return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){return testActions.forEach((function(action){return addAction(action)})),function(){testActions.forEach((function(action){return removeAction(action)}))}}),[addAction,removeAction]),null},Default=Template.bind({});Default.args={};var CustomPlaceholder=Template.bind({});CustomPlaceholder.args={InputProps:{placeholder:"Imagine if you couldn't search through all this... 😌"}};var ComponentWhichTogglesCommandPalette=function ComponentWhichTogglesCommandPalette(){var toggle=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_CommandPalette_CommandPaletteContext__WEBPACK_IMPORTED_MODULE_3__.a).toggle;return Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_6__.a)("shift+p",(function(e){e.preventDefault(),toggle()}),{enableOnTags:["INPUT"]}),null},CustomKeybinding=function CustomKeybindingTemplate(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_CommandPalette__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args),{},{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p",{children:["Press ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("kbd",{children:"shift"})," + ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("kbd",{children:"p"})," to toggle the command palette."]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ToggleCommandPaletteButton,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ComponentWhichRegistersActions,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ComponentWhichTogglesCommandPalette,{})]}))}.bind({});CustomKeybinding.args={},Default.parameters=Object(_home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:'(args) => (\n  <CommandPalette {...args}>\n    Render your children within the\n    <code>{"<CommandPalette />"}</code>\n    to access the context. <ToggleCommandPaletteButton />\n    <ComponentWhichRegistersActions />\n  </CommandPalette>\n)'}},Default.parameters),CustomPlaceholder.parameters=Object(_home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:'(args) => (\n  <CommandPalette {...args}>\n    Render your children within the\n    <code>{"<CommandPalette />"}</code>\n    to access the context. <ToggleCommandPaletteButton />\n    <ComponentWhichRegistersActions />\n  </CommandPalette>\n)'}},CustomPlaceholder.parameters),CustomKeybinding.parameters=Object(_home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => (\n  <CommandPalette {...args}>\n    <p>\n      Press <kbd>shift</kbd> + <kbd>p</kbd> to toggle the command palette.\n    </p>\n    <ToggleCommandPaletteButton />\n    <ComponentWhichRegistersActions />\n    <ComponentWhichTogglesCommandPalette />\n  </CommandPalette>\n)"}},CustomKeybinding.parameters)},905:function(module,exports,__webpack_require__){},906:function(module,exports,__webpack_require__){},919:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"InputTransition",(function(){return InputTransition}));var _home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_CommandPalette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(152),_CommandPalette_CommandPaletteContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(95),lorem_ipsum__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(490),__webpack_require__(266)),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(929),framer_motion__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(928),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9);__webpack_exports__.default={title:"CommandPalette/Basics/InputTransition",component:_CommandPalette__WEBPACK_IMPORTED_MODULE_2__.a};var lorem=new lorem_ipsum__WEBPACK_IMPORTED_MODULE_5__.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),testActions=Array.from({length:50},(function(_,i){return{id:i,title:lorem.generateSentences(1),onSelect:function onSelect(){alert("You selected action #"+i)}}})),InputWithTransition=function InputWithTransition(){var show=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_CommandPalette_CommandPaletteContext__WEBPACK_IMPORTED_MODULE_3__.a).show;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.a.input,{layoutId:"command-palette-input",type:"search",placeholder:"What are you searching for?",onFocus:show})},ComponentWhichRegistersActions=function ComponentWhichRegistersActions(){var _useContext2=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_CommandPalette_CommandPaletteContext__WEBPACK_IMPORTED_MODULE_3__.a),addAction=_useContext2.addAction,removeAction=_useContext2.removeAction;return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){return testActions.forEach((function(action){return addAction(action)})),function(){testActions.forEach((function(action){return removeAction(action)}))}}),[addAction,removeAction]),null},InputTransition=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.a,{type:"crossfade",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_CommandPalette__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args),{},{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{children:"This input down below creates an animation when pressed."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{children:"It could be used anywhere in your application, for example: as a search bar in the header"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(InputWithTransition,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{children:"It uses Framer Motion for the animation, so you would have to add Framer Motion to your application as well."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ComponentWhichRegistersActions,{})]}))})}.bind({});InputTransition.args={},InputTransition.parameters=Object(_home_runner_work_react_command_palette_react_command_palette_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:'(args) => (\n  <AnimateSharedLayout type="crossfade">\n    <CommandPalette {...args}>\n      <p>This input down below creates an animation when pressed.</p>\n      <p>\n        It could be used anywhere in your application, for example: as a search\n        bar in the header\n      </p>\n      <InputWithTransition />\n\n      <p>\n        It uses Framer Motion for the animation, so you would have to add Framer\n        Motion to your application as well.\n      </p>\n      <ComponentWhichRegistersActions />\n    </CommandPalette>\n  </AnimateSharedLayout>\n)'}},InputTransition.parameters)},927:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(935),esm=__webpack_require__(6),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{theme:__webpack_require__(257).a.dark}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},95:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);function noop(){}var CommandPaletteContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)({actions:[],addAction:noop,removeAction:noop,show:noop,hide:noop,toggle:noop,shown:!1});__webpack_exports__.a=CommandPaletteContext}},[[544,2,3]]]);