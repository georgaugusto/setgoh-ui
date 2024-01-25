import{A as d}from"./index-6UOLVykQ.js";import"./index-FaLGlFNx.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./jsx-runtime-2UOnWPoV.js";import"./extends-dGVwEr9R.js";import"./index-gMreU1aJ.js";const v={title:"Data display/Avatar",component:d,tags:["autodocs"],args:{src:"https://github.com/georgaugusto.png",alt:"Georg Schlegel",delayMs:600,size:"md",fallback:"DF"},argTypes:{src:{name:"src",description:"Path to image `string`",control:{type:"text"}},alt:{name:"alt",description:"Attribute describing the image",control:{type:"text"}},delayMs:{name:"delayMs",description:"Useful for delaying rendering so it only appears for those with slower connections.",control:{type:"number"}},size:{name:"size",description:"Size of the Avatar `string`",options:["xxs","xs","sm","md"],control:{type:"select"}},fallback:{name:"fallback",description:"Fallback",control:{type:"text"}}}},e={},t={args:{src:void 0,fallback:void 0},parameters:{docs:{description:{story:"When the image is not available, the component will be show a fallback avatar"}}}},a={args:{src:void 0},parameters:{docs:{description:{story:"When you do not use the `src` attribute, the component will use the `name` attribute to show the initials to name"}}}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    src: undefined,
    fallback: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'When the image is not available, the component will be show a fallback avatar'
      }
    }
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    src: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'When you do not use the \`src\` attribute, the component will use the \`name\` attribute to show the initials to name'
      }
    }
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const k=["Primary","WithFallback","WithInitials"];export{e as Primary,t as WithFallback,a as WithInitials,k as __namedExportsOrder,v as default};
