"use strict";(self.webpackChunkmaison_components_storybook=self.webpackChunkmaison_components_storybook||[]).push([[1860],{"../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.0.4_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XB:()=>$5cb92bef7577960e$export$177fb62ff3ec1f22});var esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs"),react_primitive_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");let $5cb92bef7577960e$var$originalBodyPointerEvents;const $5cb92bef7577960e$var$DismissableLayerContext=(0,react.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),$5cb92bef7577960e$export$177fb62ff3ec1f22=(0,react.forwardRef)(((props,forwardedRef)=>{var _node$ownerDocument;const{disableOutsidePointerEvents=!1,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,onDismiss,...layerProps}=props,context=(0,react.useContext)($5cb92bef7577960e$var$DismissableLayerContext),[node1,setNode]=(0,react.useState)(null),ownerDocument=null!==(_node$ownerDocument=null==node1?void 0:node1.ownerDocument)&&void 0!==_node$ownerDocument?_node$ownerDocument:null===globalThis||void 0===globalThis?void 0:globalThis.document,[,force]=(0,react.useState)({}),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setNode(node))),layers=Array.from(context.layers),[highestLayerWithOutsidePointerEventsDisabled]=[...context.layersWithOutsidePointerEventsDisabled].slice(-1),highestLayerWithOutsidePointerEventsDisabledIndex=layers.indexOf(highestLayerWithOutsidePointerEventsDisabled),index=node1?layers.indexOf(node1):-1,isBodyPointerEventsDisabled=context.layersWithOutsidePointerEventsDisabled.size>0,isPointerEventsEnabled=index>=highestLayerWithOutsidePointerEventsDisabledIndex,pointerDownOutside=function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handlePointerDownOutside=(0,react_use_callback_ref_dist.W)(onPointerDownOutside),isPointerInsideReactTreeRef=(0,react.useRef)(!1),handleClickRef=(0,react.useRef)((()=>{}));return(0,react.useEffect)((()=>{const handlePointerDown=event=>{if(event.target&&!isPointerInsideReactTreeRef.current){const eventDetail={originalEvent:event};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",handlePointerDownOutside,eventDetail,{discrete:!0})}"touch"===event.pointerType?(ownerDocument.removeEventListener("click",handleClickRef.current),handleClickRef.current=handleAndDispatchPointerDownOutsideEvent,ownerDocument.addEventListener("click",handleClickRef.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}isPointerInsideReactTreeRef.current=!1},timerId=window.setTimeout((()=>{ownerDocument.addEventListener("pointerdown",handlePointerDown)}),0);return()=>{window.clearTimeout(timerId),ownerDocument.removeEventListener("pointerdown",handlePointerDown),ownerDocument.removeEventListener("click",handleClickRef.current)}}),[ownerDocument,handlePointerDownOutside]),{onPointerDownCapture:()=>isPointerInsideReactTreeRef.current=!0}}((event=>{const target=event.target,isPointerDownOnBranch=[...context.branches].some((branch=>branch.contains(target)));isPointerEventsEnabled&&!isPointerDownOnBranch&&(null==onPointerDownOutside||onPointerDownOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument),focusOutside=function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handleFocusOutside=(0,react_use_callback_ref_dist.W)(onFocusOutside),isFocusInsideReactTreeRef=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{const handleFocus=event=>{if(event.target&&!isFocusInsideReactTreeRef.current){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",handleFocusOutside,{originalEvent:event},{discrete:!1})}};return ownerDocument.addEventListener("focusin",handleFocus),()=>ownerDocument.removeEventListener("focusin",handleFocus)}),[ownerDocument,handleFocusOutside]),{onFocusCapture:()=>isFocusInsideReactTreeRef.current=!0,onBlurCapture:()=>isFocusInsideReactTreeRef.current=!1}}((event=>{const target=event.target;[...context.branches].some((branch=>branch.contains(target)))||(null==onFocusOutside||onFocusOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument);return function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const onEscapeKeyDown=(0,react_use_callback_ref_dist.W)(onEscapeKeyDownProp);(0,react.useEffect)((()=>{const handleKeyDown=event=>{"Escape"===event.key&&onEscapeKeyDown(event)};return ownerDocument.addEventListener("keydown",handleKeyDown),()=>ownerDocument.removeEventListener("keydown",handleKeyDown)}),[onEscapeKeyDown,ownerDocument])}((event=>{index===context.layers.size-1&&(null==onEscapeKeyDown||onEscapeKeyDown(event),!event.defaultPrevented&&onDismiss&&(event.preventDefault(),onDismiss()))}),ownerDocument),(0,react.useEffect)((()=>{if(node1)return disableOutsidePointerEvents&&(0===context.layersWithOutsidePointerEventsDisabled.size&&($5cb92bef7577960e$var$originalBodyPointerEvents=ownerDocument.body.style.pointerEvents,ownerDocument.body.style.pointerEvents="none"),context.layersWithOutsidePointerEventsDisabled.add(node1)),context.layers.add(node1),$5cb92bef7577960e$var$dispatchUpdate(),()=>{disableOutsidePointerEvents&&1===context.layersWithOutsidePointerEventsDisabled.size&&(ownerDocument.body.style.pointerEvents=$5cb92bef7577960e$var$originalBodyPointerEvents)}}),[node1,ownerDocument,disableOutsidePointerEvents,context]),(0,react.useEffect)((()=>()=>{node1&&(context.layers.delete(node1),context.layersWithOutsidePointerEventsDisabled.delete(node1),$5cb92bef7577960e$var$dispatchUpdate())}),[node1,context]),(0,react.useEffect)((()=>{const handleUpdate=()=>force({});return document.addEventListener("dismissableLayer.update",handleUpdate),()=>document.removeEventListener("dismissableLayer.update",handleUpdate)}),[]),(0,react.createElement)(react_primitive_dist.WV.div,(0,esm_extends.Z)({},layerProps,{ref:composedRefs,style:{pointerEvents:isBodyPointerEventsDisabled?isPointerEventsEnabled?"auto":"none":void 0,...props.style},onFocusCapture:(0,dist.M)(props.onFocusCapture,focusOutside.onFocusCapture),onBlurCapture:(0,dist.M)(props.onBlurCapture,focusOutside.onBlurCapture),onPointerDownCapture:(0,dist.M)(props.onPointerDownCapture,pointerDownOutside.onPointerDownCapture)}))}));function $5cb92bef7577960e$var$dispatchUpdate(){const event=new CustomEvent("dismissableLayer.update");document.dispatchEvent(event)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name,handler,detail,{discrete}){const target=detail.originalEvent.target,event=new CustomEvent(name,{bubbles:!1,cancelable:!0,detail});handler&&target.addEventListener(name,handler,{once:!0}),discrete?(0,react_primitive_dist.jH)(target,event):target.dispatchEvent(event)}},"../../node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{M:()=>$1746a345f3d73bb7$export$f680877a34711e37});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $1746a345f3d73bb7$var$useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{});let $1746a345f3d73bb7$var$count=0;function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState($1746a345f3d73bb7$var$useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{deterministicId||setId((reactId=>null!=reactId?reactId:String($1746a345f3d73bb7$var$count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"../../node_modules/.pnpm/@radix-ui+react-portal@1.0.3_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-portal/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>$f1701beae083dbae$export$602eac185826482c});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs");const $f1701beae083dbae$export$602eac185826482c=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{var _globalThis$document;const{container=null===globalThis||void 0===globalThis||null===(_globalThis$document=globalThis.document)||void 0===_globalThis$document?void 0:_globalThis$document.body,...portalProps}=props;return container?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},portalProps,{ref:forwardedRef})),container):null}))},"../../node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>$921a889cee6df7e8$export$99c2b779aa4e8b8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $921a889cee6df7e8$export$99c2b779aa4e8b8b=props=>{const{present,children}=props,presence=function $921a889cee6df7e8$var$usePresence(present){const[node1,setNode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),stylesRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}),prevPresentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present),prevAnimationNameRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("none"),initialState=present?"mounted":"unmounted",[state,send]=function $fe963b355347cc68$export$3e6543de14f8614f(initialState,machine){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((state,event)=>{const nextState=machine[state][event];return null!=nextState?nextState:state}),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const currentAnimationName=$921a889cee6df7e8$var$getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=$921a889cee6df7e8$var$getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===(null==styles?void 0:styles.display))send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{if(node1){const handleAnimationEnd=event=>{const isCurrentAnimation=$921a889cee6df7e8$var$getAnimationName(stylesRef.current).includes(event.animationName);event.target===node1&&isCurrentAnimation&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)((()=>send("ANIMATION_END")))},handleAnimationStart=event=>{event.target===node1&&(prevAnimationNameRef.current=$921a889cee6df7e8$var$getAnimationName(stylesRef.current))};return node1.addEventListener("animationstart",handleAnimationStart),node1.addEventListener("animationcancel",handleAnimationEnd),node1.addEventListener("animationend",handleAnimationEnd),()=>{node1.removeEventListener("animationstart",handleAnimationStart),node1.removeEventListener("animationcancel",handleAnimationEnd),node1.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node1,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node&&(stylesRef.current=getComputedStyle(node)),setNode(node)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ref=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(presence.ref,child.ref);return"function"==typeof children||presence.isPresent?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{ref}):null};function $921a889cee6df7e8$var$getAnimationName(styles){return(null==styles?void 0:styles.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence"},"../../node_modules/.pnpm/@radix-ui+react-tooltip@1.0.6_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-tooltip/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{VY:()=>$a093c7e1ec25a057$export$7c6e2c02157bb7d2,fC:()=>$a093c7e1ec25a057$export$be92b6f5f03c0fe9,xz:()=>$a093c7e1ec25a057$export$41fb9f06171c75f4,zt:()=>$a093c7e1ec25a057$export$2881499e37b75b9a});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.0.4_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs"),_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.mjs"),_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-popper@1.1.2_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-popper/dist/index.mjs"),_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-portal@1.0.3_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-portal/dist/index.mjs"),__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs")),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.0.3_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs");const[$a093c7e1ec25a057$var$createTooltipContext,$a093c7e1ec25a057$export$1c540a2224f0d865]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)("Tooltip",[_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.D7]),$a093c7e1ec25a057$var$usePopperScope=(0,_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.D7)(),$a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION=700,[$a093c7e1ec25a057$var$TooltipProviderContextProvider,$a093c7e1ec25a057$var$useTooltipProviderContext]=$a093c7e1ec25a057$var$createTooltipContext("TooltipProvider"),$a093c7e1ec25a057$export$f78649fb9ca566b8=props=>{const{__scopeTooltip,delayDuration=$a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION,skipDelayDuration=300,disableHoverableContent=!1,children}=props,[isOpenDelayed,setIsOpenDelayed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),isPointerInTransitRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),skipDelayTimerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const skipDelayTimer=skipDelayTimerRef.current;return()=>window.clearTimeout(skipDelayTimer)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($a093c7e1ec25a057$var$TooltipProviderContextProvider,{scope:__scopeTooltip,isOpenDelayed,delayDuration,onOpen:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{window.clearTimeout(skipDelayTimerRef.current),setIsOpenDelayed(!1)}),[]),onClose:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{window.clearTimeout(skipDelayTimerRef.current),skipDelayTimerRef.current=window.setTimeout((()=>setIsOpenDelayed(!0)),skipDelayDuration)}),[skipDelayDuration]),isPointerInTransitRef,onPointerInTransitChange:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((inTransit=>{isPointerInTransitRef.current=inTransit}),[]),disableHoverableContent},children)},[$a093c7e1ec25a057$var$TooltipContextProvider,$a093c7e1ec25a057$var$useTooltipContext]=$a093c7e1ec25a057$var$createTooltipContext("Tooltip"),$a093c7e1ec25a057$export$28c660c63b792dea=props=>{const{__scopeTooltip,children,open:openProp,defaultOpen=!1,onOpenChange,disableHoverableContent:disableHoverableContentProp,delayDuration:delayDurationProp}=props,providerContext=$a093c7e1ec25a057$var$useTooltipProviderContext("Tooltip",props.__scopeTooltip),popperScope=$a093c7e1ec25a057$var$usePopperScope(__scopeTooltip),[trigger,setTrigger]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),contentId=(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_3__.M)(),openTimerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),disableHoverableContent=null!=disableHoverableContentProp?disableHoverableContentProp:providerContext.disableHoverableContent,delayDuration=null!=delayDurationProp?delayDurationProp:providerContext.delayDuration,wasOpenDelayedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),[open1=!1,setOpen]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__.T)({prop:openProp,defaultProp:defaultOpen,onChange:open=>{open?(providerContext.onOpen(),document.dispatchEvent(new CustomEvent("tooltip.open"))):providerContext.onClose(),null==onOpenChange||onOpenChange(open)}}),stateAttribute=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>open1?wasOpenDelayedRef.current?"delayed-open":"instant-open":"closed"),[open1]),handleOpen=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{window.clearTimeout(openTimerRef.current),wasOpenDelayedRef.current=!1,setOpen(!0)}),[setOpen]),handleClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{window.clearTimeout(openTimerRef.current),setOpen(!1)}),[setOpen]),handleDelayedOpen=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{window.clearTimeout(openTimerRef.current),openTimerRef.current=window.setTimeout((()=>{wasOpenDelayedRef.current=!0,setOpen(!0)}),delayDuration)}),[delayDuration,setOpen]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>window.clearTimeout(openTimerRef.current)),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.fC,popperScope,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($a093c7e1ec25a057$var$TooltipContextProvider,{scope:__scopeTooltip,contentId,open:open1,stateAttribute,trigger,onTriggerChange:setTrigger,onTriggerEnter:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{providerContext.isOpenDelayed?handleDelayedOpen():handleOpen()}),[providerContext.isOpenDelayed,handleDelayedOpen,handleOpen]),onTriggerLeave:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{disableHoverableContent?handleClose():window.clearTimeout(openTimerRef.current)}),[handleClose,disableHoverableContent]),onOpen:handleOpen,onClose:handleClose,disableHoverableContent},children))},$a093c7e1ec25a057$export$8c610744efcf8a1d=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeTooltip,...triggerProps}=props,context=$a093c7e1ec25a057$var$useTooltipContext("TooltipTrigger",__scopeTooltip),providerContext=$a093c7e1ec25a057$var$useTooltipProviderContext("TooltipTrigger",__scopeTooltip),popperScope=$a093c7e1ec25a057$var$usePopperScope(__scopeTooltip),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.e)(forwardedRef,ref,context.onTriggerChange),isPointerDownRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),hasPointerMoveOpenedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),handlePointerUp=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>isPointerDownRef.current=!1),[]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>document.removeEventListener("pointerup",handlePointerUp)),[handlePointerUp]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.ee,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({asChild:!0},popperScope),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.WV.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"aria-describedby":context.open?context.contentId:void 0,"data-state":context.stateAttribute},triggerProps,{ref:composedRefs,onPointerMove:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onPointerMove,(event=>{"touch"!==event.pointerType&&(hasPointerMoveOpenedRef.current||providerContext.isPointerInTransitRef.current||(context.onTriggerEnter(),hasPointerMoveOpenedRef.current=!0))})),onPointerLeave:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onPointerLeave,(()=>{context.onTriggerLeave(),hasPointerMoveOpenedRef.current=!1})),onPointerDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onPointerDown,(()=>{isPointerDownRef.current=!0,document.addEventListener("pointerup",handlePointerUp,{once:!0})})),onFocus:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onFocus,(()=>{isPointerDownRef.current||context.onOpen()})),onBlur:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onBlur,context.onClose),onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.M)(props.onClick,context.onClose)})))})),[$a093c7e1ec25a057$var$PortalProvider,$a093c7e1ec25a057$var$usePortalContext]=$a093c7e1ec25a057$var$createTooltipContext("TooltipPortal",{forceMount:void 0}),$a093c7e1ec25a057$export$e9003e2be37ec060=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const portalContext=$a093c7e1ec25a057$var$usePortalContext("TooltipContent",props.__scopeTooltip),{forceMount=portalContext.forceMount,side="top",...contentProps}=props,context=$a093c7e1ec25a057$var$useTooltipContext("TooltipContent",props.__scopeTooltip);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__.z,{present:forceMount||context.open},context.disableHoverableContent?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($a093c7e1ec25a057$var$TooltipContentImpl,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({side},contentProps,{ref:forwardedRef})):(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($a093c7e1ec25a057$var$TooltipContentHoverable,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({side},contentProps,{ref:forwardedRef})))})),$a093c7e1ec25a057$var$TooltipContentHoverable=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const context=$a093c7e1ec25a057$var$useTooltipContext("TooltipContent",props.__scopeTooltip),providerContext=$a093c7e1ec25a057$var$useTooltipProviderContext("TooltipContent",props.__scopeTooltip),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.e)(forwardedRef,ref),[pointerGraceArea,setPointerGraceArea]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),{trigger,onClose}=context,content=ref.current,{onPointerInTransitChange}=providerContext,handleRemoveGraceArea=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setPointerGraceArea(null),onPointerInTransitChange(!1)}),[onPointerInTransitChange]),handleCreateGraceArea=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((event,hoverTarget)=>{const currentTarget=event.currentTarget,exitPoint={x:event.clientX,y:event.clientY},paddedExitPoints=function $a093c7e1ec25a057$var$getPaddedExitPoints(exitPoint,exitSide,padding=5){const paddedExitPoints=[];switch(exitSide){case"top":paddedExitPoints.push({x:exitPoint.x-padding,y:exitPoint.y+padding},{x:exitPoint.x+padding,y:exitPoint.y+padding});break;case"bottom":paddedExitPoints.push({x:exitPoint.x-padding,y:exitPoint.y-padding},{x:exitPoint.x+padding,y:exitPoint.y-padding});break;case"left":paddedExitPoints.push({x:exitPoint.x+padding,y:exitPoint.y-padding},{x:exitPoint.x+padding,y:exitPoint.y+padding});break;case"right":paddedExitPoints.push({x:exitPoint.x-padding,y:exitPoint.y-padding},{x:exitPoint.x-padding,y:exitPoint.y+padding})}return paddedExitPoints}(exitPoint,function $a093c7e1ec25a057$var$getExitSideFromRect(point,rect){const top=Math.abs(rect.top-point.y),bottom=Math.abs(rect.bottom-point.y),right=Math.abs(rect.right-point.x),left=Math.abs(rect.left-point.x);switch(Math.min(top,bottom,right,left)){case left:return"left";case right:return"right";case top:return"top";case bottom:return"bottom";default:throw new Error("unreachable")}}(exitPoint,currentTarget.getBoundingClientRect())),graceArea=function $a093c7e1ec25a057$var$getHull(points){const newPoints=points.slice();return newPoints.sort(((a,b)=>a.x<b.x?-1:a.x>b.x?1:a.y<b.y?-1:a.y>b.y?1:0)),function $a093c7e1ec25a057$var$getHullPresorted(points){if(points.length<=1)return points.slice();const upperHull=[];for(let i=0;i<points.length;i++){const p=points[i];for(;upperHull.length>=2;){const q=upperHull[upperHull.length-1],r=upperHull[upperHull.length-2];if(!((q.x-r.x)*(p.y-r.y)>=(q.y-r.y)*(p.x-r.x)))break;upperHull.pop()}upperHull.push(p)}upperHull.pop();const lowerHull=[];for(let i1=points.length-1;i1>=0;i1--){const p=points[i1];for(;lowerHull.length>=2;){const q=lowerHull[lowerHull.length-1],r=lowerHull[lowerHull.length-2];if(!((q.x-r.x)*(p.y-r.y)>=(q.y-r.y)*(p.x-r.x)))break;lowerHull.pop()}lowerHull.push(p)}return lowerHull.pop(),1===upperHull.length&&1===lowerHull.length&&upperHull[0].x===lowerHull[0].x&&upperHull[0].y===lowerHull[0].y?upperHull:upperHull.concat(lowerHull)}(newPoints)}([...paddedExitPoints,...function $a093c7e1ec25a057$var$getPointsFromRect(rect){const{top,right,bottom,left}=rect;return[{x:left,y:top},{x:right,y:top},{x:right,y:bottom},{x:left,y:bottom}]}(hoverTarget.getBoundingClientRect())]);setPointerGraceArea(graceArea),onPointerInTransitChange(!0)}),[onPointerInTransitChange]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>handleRemoveGraceArea()),[handleRemoveGraceArea]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(trigger&&content){const handleTriggerLeave=event=>handleCreateGraceArea(event,content),handleContentLeave=event=>handleCreateGraceArea(event,trigger);return trigger.addEventListener("pointerleave",handleTriggerLeave),content.addEventListener("pointerleave",handleContentLeave),()=>{trigger.removeEventListener("pointerleave",handleTriggerLeave),content.removeEventListener("pointerleave",handleContentLeave)}}}),[trigger,content,handleCreateGraceArea,handleRemoveGraceArea]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(pointerGraceArea){const handleTrackPointerGrace=event=>{const target=event.target,pointerPosition={x:event.clientX,y:event.clientY},hasEnteredTarget=(null==trigger?void 0:trigger.contains(target))||(null==content?void 0:content.contains(target)),isPointerOutsideGraceArea=!function $a093c7e1ec25a057$var$isPointInPolygon(point,polygon){const{x,y}=point;let inside=!1;for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){const xi=polygon[i].x,yi=polygon[i].y,xj=polygon[j].x,yj=polygon[j].y;yi>y!=yj>y&&x<(xj-xi)*(y-yi)/(yj-yi)+xi&&(inside=!inside)}return inside}(pointerPosition,pointerGraceArea);hasEnteredTarget?handleRemoveGraceArea():isPointerOutsideGraceArea&&(handleRemoveGraceArea(),onClose())};return document.addEventListener("pointermove",handleTrackPointerGrace),()=>document.removeEventListener("pointermove",handleTrackPointerGrace)}}),[trigger,content,pointerGraceArea,onClose,handleRemoveGraceArea]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($a093c7e1ec25a057$var$TooltipContentImpl,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},props,{ref:composedRefs}))})),[$a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider,$a093c7e1ec25a057$var$useVisuallyHiddenContentContext]=$a093c7e1ec25a057$var$createTooltipContext("Tooltip",{isInside:!1}),$a093c7e1ec25a057$var$TooltipContentImpl=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeTooltip,children,"aria-label":ariaLabel,onEscapeKeyDown,onPointerDownOutside,...contentProps}=props,context=$a093c7e1ec25a057$var$useTooltipContext("TooltipContent",__scopeTooltip),popperScope=$a093c7e1ec25a057$var$usePopperScope(__scopeTooltip),{onClose}=context;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("tooltip.open",onClose),()=>document.removeEventListener("tooltip.open",onClose))),[onClose]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(context.trigger){const handleScroll=event=>{const target=event.target;null!=target&&target.contains(context.trigger)&&onClose()};return window.addEventListener("scroll",handleScroll,{capture:!0}),()=>window.removeEventListener("scroll",handleScroll,{capture:!0})}}),[context.trigger,onClose]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_11__.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown,onPointerDownOutside,onFocusOutside:event=>event.preventDefault(),onDismiss:onClose},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__.VY,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"data-state":context.stateAttribute},popperScope,contentProps,{ref:forwardedRef,style:{...contentProps.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_12__.A4,null,children),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider,{scope:__scopeTooltip,isInside:!0},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_13__.f,{id:context.contentId,role:"tooltip"},ariaLabel||children))))}));const $a093c7e1ec25a057$export$2881499e37b75b9a=$a093c7e1ec25a057$export$f78649fb9ca566b8,$a093c7e1ec25a057$export$be92b6f5f03c0fe9=$a093c7e1ec25a057$export$28c660c63b792dea,$a093c7e1ec25a057$export$41fb9f06171c75f4=$a093c7e1ec25a057$export$8c610744efcf8a1d,$a093c7e1ec25a057$export$7c6e2c02157bb7d2=$a093c7e1ec25a057$export$e9003e2be37ec060},"../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.0.3_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>$ea1ef594cf570d83$export$439d29a4e110a164,f:()=>$ea1ef594cf570d83$export$be92b6f5f03c0fe9});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs");const $ea1ef594cf570d83$export$439d29a4e110a164=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__.WV.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)({},props,{ref:forwardedRef,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...props.style}})))),$ea1ef594cf570d83$export$be92b6f5f03c0fe9=$ea1ef594cf570d83$export$439d29a4e110a164}}]);