"use strict";(self.webpackChunkmaison_components_storybook=self.webpackChunkmaison_components_storybook||[]).push([[7971],{"../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>table_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),utils=__webpack_require__("../lib/src/utils/utils.ts"),_excluded=["className"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className"],_excluded5=["className"],_excluded6=["className"],_excluded7=["className"],_excluded8=["className"],__jsx=react.createElement,Table=react.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("div",{className:"w-full overflow-auto"},__jsx("table",(0,esm_extends.Z)({ref,className:(0,utils.cn)("w-full caption-bottom text-sm",className)},props)))}));Table.displayName="Table";var TableHeader=react.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return __jsx("thead",(0,esm_extends.Z)({ref,className:(0,utils.cn)("[&_tr]:border-b",className)},props))}));TableHeader.displayName="TableHeader";var TableBody=react.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3);return __jsx("tbody",(0,esm_extends.Z)({ref,className:(0,utils.cn)("[&_tr:last-child]:border-0",className)},props))}));TableBody.displayName="TableBody";var TableFooter=react.forwardRef((function(_ref4,ref){var className=_ref4.className,props=(0,objectWithoutProperties.Z)(_ref4,_excluded4);return __jsx("tfoot",(0,esm_extends.Z)({ref,className:(0,utils.cn)("bg-primary font-medium text-primary-foreground",className)},props))}));TableFooter.displayName="TableFooter";var TableRow=react.forwardRef((function(_ref5,ref){var className=_ref5.className,props=(0,objectWithoutProperties.Z)(_ref5,_excluded5);return __jsx("tr",(0,esm_extends.Z)({ref,className:(0,utils.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",className)},props))}));TableRow.displayName="TableRow";var TableHead=react.forwardRef((function(_ref6,ref){var className=_ref6.className,props=(0,objectWithoutProperties.Z)(_ref6,_excluded6);return __jsx("th",(0,esm_extends.Z)({ref,className:(0,utils.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",className)},props))}));TableHead.displayName="TableHead";var TableCell=react.forwardRef((function(_ref7,ref){var className=_ref7.className,props=(0,objectWithoutProperties.Z)(_ref7,_excluded7);return __jsx("td",(0,esm_extends.Z)({ref,className:(0,utils.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",className)},props))}));TableCell.displayName="TableCell";var _Default$parameters,_Default$parameters2,TableCaption=react.forwardRef((function(_ref8,ref){var className=_ref8.className,props=(0,objectWithoutProperties.Z)(_ref8,_excluded8);return __jsx("caption",(0,esm_extends.Z)({ref,className:(0,utils.cn)("mt-4 text-sm text-muted-foreground",className)},props))}));TableCaption.displayName="TableCaption",Table.__docgenInfo={description:"",methods:[],displayName:"Table"},TableHeader.__docgenInfo={description:"",methods:[],displayName:"TableHeader"},TableBody.__docgenInfo={description:"",methods:[],displayName:"TableBody"},TableFooter.__docgenInfo={description:"",methods:[],displayName:"TableFooter"},TableHead.__docgenInfo={description:"",methods:[],displayName:"TableHead"},TableRow.__docgenInfo={description:"",methods:[],displayName:"TableRow"},TableCell.__docgenInfo={description:"",methods:[],displayName:"TableCell"},TableCaption.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/table/table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"../components/src/table/table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}var table_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const table_stories={title:"Components/Table",component:Table};var Default={args:{},render:function render(args){return table_stories_jsx(Table,args,table_stories_jsx(TableCaption,null,"A list of your recent invoices."),table_stories_jsx(TableHeader,null,table_stories_jsx(TableRow,null,table_stories_jsx(TableHead,{className:"w-[100px]"},"Invoice"),table_stories_jsx(TableHead,null,"Status"),table_stories_jsx(TableHead,null,"Method"),table_stories_jsx(TableHead,{className:"text-right"},"Amount"))),table_stories_jsx(TableBody,null,table_stories_jsx(TableRow,null,table_stories_jsx(TableCell,{className:"font-medium"},"INV001"),table_stories_jsx(TableCell,null,"Paid"),table_stories_jsx(TableCell,null,"Credit Card"),table_stories_jsx(TableCell,{className:"text-right"},"$250.00"))))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {},\n  render: args => <Table {...args}>\n      <TableCaption>A list of your recent invoices.</TableCaption>\n      <TableHeader>\n        <TableRow>\n          <TableHead className="w-[100px]">Invoice</TableHead>\n          <TableHead>Status</TableHead>\n          <TableHead>Method</TableHead>\n          <TableHead className="text-right">Amount</TableHead>\n        </TableRow>\n      </TableHeader>\n      <TableBody>\n        <TableRow>\n          <TableCell className="font-medium">INV001</TableCell>\n          <TableCell>Paid</TableCell>\n          <TableCell>Credit Card</TableCell>\n          <TableCell className="text-right">$250.00</TableCell>\n        </TableRow>\n      </TableBody>\n    </Table>\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"../lib/src/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@1.13.2/node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}}}]);