webpackJsonp([1],{CpMC:function(l,e){},g0NJ:function(l,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"HelloWorld",data:function(){return{}},methods:{init:function(){}},mounted:function(){var l,e,t,n,i,o,r=new THREE.Vector2,s=new THREE.Object3D;function a(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}function d(l){l.preventDefault(),r.x=l.clientX/window.innerWidth*2-1,r.y=-l.clientY/window.innerHeight*2+1}(e=new THREE.Scene).background=new THREE.Color(15790320),(l=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,1e4)).position.set(300,300,300),l.lookAt(e.position),t=new THREE.Raycaster,(n=new THREE.WebGLRenderer).setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement),document.addEventListener("mousemove",d,!1),window.addEventListener("resize",a,!1),function(){var l=new THREE.DirectionalLight(16777215,1.1);l.position.set(300,1e3,500),l.target.position.set(0,0,0),l.castShadow=!0;var t=300;l.shadow.camera=new THREE.OrthographicCamera(-t,t,t,-t,500,1600),l.shadow.bias=1e-4,l.shadow.mapSize.width=l.shadow.mapSize.height=1024,e.add(l);var n=new THREE.AmbientLight(16777215,.6);e.add(n)}(),function(){var t=new THREE.AxesHelper(2e3);e.add(t);var i=new THREE.GridHelper(600,60);e.add(i);var o=new THREE.OrbitControls(l,n.domElement);o.enableDamping=!0,o.dampingFactor=.25,o.rotateSpeed=.35}(),function(){for(var l=document.querySelector("#svg_shapes").querySelectorAll("path"),t=0;t<l.length;t++){var n=l[t].getAttribute("d"),i=transformSVGPathExposed(n),o=new THREE.ExtrudeGeometry(i,{amount:25,stes:1,bevelEnabled:!1});o.rotateX(Math.PI/2);var r=l[t].getAttribute("fill"),a=new THREE.MeshPhongMaterial({color:r,shininess:100}),d=new THREE.Mesh(o,a);d.name=l[t].getAttribute("name"),s.add(d)}s.translateX(-200),s.translateZ(-200),s.translateY(25),e.add(s)}(),function o(){requestAnimationFrame(o);!function(){t.setFromCamera(r,l);var o=t.intersectObjects(s.children);o.length>0?i!=o[0].object&&(i&&i.material.emissive.setHex(i.currentHex),(i=o[0].object).currentHex=i.material.emissive.getHex(),i.material.emissive.setHex(16711680)):(i&&i.material.emissive.setHex(i.currentHex),i=null);n.render(e,l)}()}(),o=new THREE.MeshPhongMaterial({color:0}),s.children.forEach(function(l){var t=new THREE.BoxGeometry(2,20,2),n=new THREE.Mesh(t,o);n.position.y=30,console.log(l),n.position.x=l.geometry.boundingSphere.center.x-200,n.position.z=l.geometry.boundingSphere.center.z-200,e.add(n)})}},i={render:function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("div",{staticClass:"container"},[l._m(0),l._v(" "),t("canvas",{attrs:{id:"canvas"}}),l._v(" "),t("div",{staticClass:"svg-container"},[t("svg",{attrs:{id:"svg_shapes",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"90 0 600 560"}},[t("path",{attrs:{name:"麦当劳",id:"svg_4",d:"m201.90463,23.01591l65.87312,0l0,47.61912l-65.87312,0l0,-47.61912z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null",fill:"#3f7f00"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_5",d:"m130.47595,235.71465l94.44459,0l0,42.06355l-94.44459,0l0,-42.06355z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null","fill-opacity":"null",fill:"#3f7f00"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_6",d:"m129.6823,182.53996l84.12711,0l0,41.2699l-84.12711,0l0,-41.2699z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null","fill-opacity":"null",fill:"#3f7f00"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_8",d:"m214.80591,113.92551l32.77018,-32.77018l23.57026,23.57026l-32.77018,32.77018l-23.57026,-23.57026z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null","fill-opacity":"null",fill:"#3f7f00"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_9",d:"m242.58371,140.11603l32.77018,-32.77018l23.57026,23.57026l-32.77018,32.77018l-23.57026,-23.57026z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null","fill-opacity":"null",fill:"#3f7f00"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_10",d:"m264.80595,79.79849l48.2464,-48.2464l15.23692,15.23692l-48.2464,48.2464l-15.23692,-15.23692z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null","fill-opacity":"null",fill:"#3f7f00"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_11",d:"m282.2663,98.84614l48.2464,-48.2464l15.23692,15.23692l-48.2464,48.2464l-15.23692,-15.23692z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null","fill-opacity":"null",fill:"#3f7f00"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_12",d:"m302.90125,118.68745l48.2464,-48.2464l15.23692,15.23692l-48.2464,48.2464l-15.23692,-15.23692z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null","fill-opacity":"null",fill:"#3f7f00"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_13",d:"m324.32987,140.11605l48.2464,-48.2464l15.23692,15.23692l-48.2464,48.2464l-15.23692,-15.23692z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null","fill-opacity":"null",fill:"#3f7f00"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_14",d:"m129.6823,139.68275l39.6826,0l0,34.12704l-39.6826,0l0,-34.12704z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null",fill:"#bf005f"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_15",d:"m175.7141,139.68275l37.30164,0l0,34.12704l-37.30164,0l0,-34.12704z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null",fill:"#007f3f"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_16",d:"m274.12698,175.39709l46.03181,0l0,26.98417l-46.03181,0l0,-26.98417z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null",fill:"#7f003f"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_17",d:"m137.23366,49.58187l47.23197,47.23197l-21.46164,21.46164l-47.23197,-47.23197l21.46164,-21.46164z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null",fill:"#7f003f"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_18",d:"m336.03183,205.55586l69.04772,0l0,31.74608l-69.04772,0l0,-31.74608z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null",fill:"#5656ff"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_19",d:"m336.03183,274.60361l69.04772,0l0,20.63496l-69.04772,0l0,-20.63496z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null",fill:"#5656ff"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_20",d:"m336.03183,305.42343l69.04772,0l0,74.60332l-69.04772,0l0,-74.60332z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null",fill:"#007f3f"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_21",d:"m155.48768,30.53422l47.23197,47.23197l-15.11243,15.11243l-47.23197,-47.23197l15.11243,-15.11243z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null",fill:"#7f003f"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_23",d:"m337.61912,200.0003c0,0 66.66677,0 66.66677,0c0,0 2.38096,-71.42868 2.38096,-71.42868c0,0 -23.02959,0 -23.33294,0c0.30335,0 -31.82833,32.93901 -32.53973,31.74608c0.15812,0.63553 -13.26811,0.79365 -13.49208,0c0.10362,0 0.31703,39.6826 0.31703,39.6826z","stroke-opacity":"null","stroke-width":"1.5",stroke:"null",fill:"#bf5f00"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_25",d:"m279.68253,216.67462l38.88895,0l0,64.28581l-38.88895,0l0,-64.28581z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null",fill:"#7f003f"}}),l._v(" "),t("path",{attrs:{name:"麦当劳",id:"svg_26",d:"m293.96826,293.91617l26.19052,0l0,46.82546l-26.19052,0l0,-46.82546z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"1.5",stroke:"null",fill:"#7f003f"}})])])])},staticRenderFns:[function(){var l=this.$createElement,e=this._self._c||l;return e("div",{staticClass:"from"},[e("a",{attrs:{href:"https://github.com/luosijie/threejs-examples/tree/master/mall"}},[this._v("项目地址")])])}]};var o=t("VU/8")(n,i,!1,function(l){t("CpMC")},"data-v-ac8c36fa",null);e.default=o.exports}});
//# sourceMappingURL=1.d8411d0b1f4c03f9d2fb.js.map