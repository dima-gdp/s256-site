(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{241:function(e,t,o){var content=o(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(130).default)("2e107364",content,!0,{sourceMap:!1})},242:function(e,t,o){"use strict";o(241)},243:function(e,t,o){var n=o(129)(!1);n.push([e.i,"*{padding:0;margin:0}*,:after,:before{box-sizing:border-box}body{line-height:1;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%}.wrap{display:flex;position:fixed;width:100%;height:100%;top:0;left:0;overflow-y:hidden;overflow-x:scroll}.section,.section-1,.section-2{flex:0 0 auto}.section{background:#f4a460}.section-1{background:#2e8b57}.section-2{background:#6a5acd}.table{position:fixed;top:100px;left:40px;font-size:18px;display:flex}.table label{margin-left:20px;display:flex;flex-direction:column}.table input{margin-top:10px;font-size:18px}.table span{font-weight:700}",""]),e.exports=n},244:function(e,t,o){"use strict";o.r(t);var n={name:"IndexPage",data:function(){return{speed:1,behavior:"auto"}},mounted:function(){window.matchMedia("(min-width: 770px)").matches&&window.addEventListener("wheel",this.replaceVerticalScrollByHorizontal,50,{passive:!1})},methods:{replaceVerticalScrollByHorizontal:function(e){if(0!==e.deltaY){var t=this.$refs.wrap;t.scrollTo({left:t.scrollLeft+e.deltaY*this.speed,behavior:this.behavior})}}}},r=(o(242),o(54)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"wrap",staticClass:"wrap"},[o("div",{staticClass:"table"},[o("label",[o("span",[e._v("Скорость: число(0.5, 1, 5)")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.speed,expression:"speed",modifiers:{number:!0}}],domProps:{value:e.speed},on:{input:function(t){t.target.composing||(e.speed=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("label",[o("span",[e._v("behavior: smooth | auto | instant")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.behavior,expression:"behavior"}],domProps:{value:e.behavior},on:{input:function(t){t.target.composing||(e.behavior=t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"section"},[e._v("\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, illum\n    recusandae? Corporis magni iusto temporibus aliquam harum reiciendis, eos\n    ratione ut. Quos earum et debitis maxime porro vitae facilis voluptate!\n  ")]),e._v(" "),o("div",{staticClass:"section-1"},[e._v("\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, illum\n    recusandae? Corporis magni iusto temporibus aliquam harum reiciendis, eos\n    ratione ut. Quos earum et debitis maxime porro vitae facilis voluptate!\n  ")]),e._v(" "),o("div",{staticClass:"section-2"},[e._v("\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, illum\n    recusandae? Corporis magni iusto temporibus aliquam harum reiciendis, eos\n    ratione ut. Quos earum et debitis maxime porro vitae facilis voluptate!\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);