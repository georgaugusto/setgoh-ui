import{j as e}from"./jsx-runtime-2UOnWPoV.js";function i({tokens:n,hasRemValue:t=!1}){function a(s){const r=Number(s.replace("rem",""));return isNaN(r)?"0px":`${r*16} px`}return e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),t&&e.jsx("th",{children:"Pixels"})]})}),e.jsx("tbody",{children:Object.entries(n).map(([s,r])=>e.jsxs("tr",{children:[e.jsx("td",{children:s}),e.jsx("td",{children:r}),t&&e.jsx("td",{children:a(r)})]},s))})]})}try{i.displayName="TokensGrid",i.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{i as T};
