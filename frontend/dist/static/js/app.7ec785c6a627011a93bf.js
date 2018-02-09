webpackJsonp([1],{27:function(e,t,r){"use strict";(function(e){var a=r(16),n=r(83),i=r(74),s=r.n(i),o=r(76),c=r.n(o),l=r(77),v=r.n(l);a.a.use(n.a);var _=[{path:"/",name:"Home",component:s.a},{path:"/remarks",name:"Remarks",component:v.a},{path:"*",name:"Not Found",component:c.a}];t.a=new n.a({mode:"history",base:e,routes:_})}).call(t,"/")},28:function(e,t,r){function a(e){r(68)}var n=r(3)(r(31),r(80),a,null,null);e.exports=n.exports},30:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(16),n=r(29),i=r(28),s=r.n(i),o=r(27);a.a.config.productionTip=!1,a.a.use(n.a),new a.a({el:"#app",router:o.a,render:function(e){return e(s.a)}})},31:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(26),n=(r.n(a),r(71)),i=(r.n(n),r(34)),s=(r.n(i),r(64)),o=(r.n(s),r(65)),c=(r.n(o),r(75)),l=r.n(c);t.default={name:"app",components:{"left-nav":l.a}}},32:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(33),n=r.n(a);t.default={data:function(){return{filteredRemarks:[],remarks:[{body:"Nice job customizing the CSS.",category:"awesome",retrievals:22},{body:"Great use of multiple selectors, and multiple arguments to `.append()`!",category:"awesome",retrievals:11},{body:"You can simplify this code with [multiple selectors](https://api.jquery.com/multiple-selector/), like so:\n\n```js\n$('#topContacts, #footerContacts').append(...);",category:"nitpick",retrievals:26},{body:"A cleaner way to append multiple elements like this is to include all of the elements as arguments to a single `.append()` call, like so:",category:"nitpick",retrievals:10},{body:"This property name should be `majors` (**note**: plural).",category:"critical",retrievals:5},{body:"This property name should be `contacts` (**note**: plural).\n\nLook at the `locationFinder` function in `helper.js`.",category:"critical",retrievals:13}],remarkSearchText:"",remarkType:"comments"}},watch:{remarkSearchText:function(e){if(!e)return void(this.filteredRemarks=[]);var t=e.split(" "),r=this.remarks.filter(function(e){var r=!0,a=!1,i=void 0;try{for(var s,o=n()(t);!(r=(s=o.next()).done);r=!0){var c=s.value;if(!e.body.toUpperCase().includes(c.toUpperCase()))return!1}}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return!0});r.sort(function(e,t){return t.retrievals-e.retrievals}),this.filteredRemarks=r.slice(0,5)}}}},64:function(e,t){},65:function(e,t){},66:function(e,t){},67:function(e,t){},68:function(e,t){},69:function(e,t){},74:function(e,t,r){function a(e){r(67)}var n=r(3)(null,r(79),a,null,null);e.exports=n.exports},75:function(e,t,r){function a(e){r(66)}var n=r(3)(null,r(78),a,null,null);e.exports=n.exports},76:function(e,t,r){var a=r(3)(null,r(81),null,null,null);e.exports=a.exports},77:function(e,t,r){function a(e){r(69)}var n=r(3)(r(32),r(82),a,null,null);e.exports=n.exports},78:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{attrs:{id:"left-nav"}},[r("div",{staticClass:"nav-header text-center"},[r("router-link",{attrs:{to:"/"}},[e._v("ur"),r("strong",[e._v("Plus")])])],1),e._v(" "),r("ul",{staticClass:"nav nav-pills flex-column"},[r("li",{staticClass:"nav-item remarks"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/remarks"}},[e._v("Remark Storage")])],1),e._v(" "),"/remarks"===this.$route.path?r("div",{staticClass:"nav-item-child-group"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)]):e._e()]),e._v(" "),e._m(4)])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"nav-item remarks"},[r("a",{staticClass:"nav-link",attrs:{href:"#introduction"}},[e._v("Introduction")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"nav-item remarks"},[r("a",{staticClass:"nav-link",attrs:{href:"#installation"}},[e._v("Installation")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"nav-item remarks"},[r("a",{staticClass:"nav-link",attrs:{href:"#tutorial"}},[e._v("Tutorial")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"nav-item remarks"},[r("a",{staticClass:"nav-link",attrs:{href:"#authentication"}},[e._v("Authentication")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav-footer"},[r("span",[e._v("Created by Michael Hays")]),e._v(" "),r("span",{staticClass:"footer-icons"},[r("a",{attrs:{href:"https://github.com/michaelhays",target:"_blank"}},[r("span",{staticClass:"fa fa-lg fa-github"})]),e._v(" "),r("a",{attrs:{href:"https://twitter.com/michaelhays64",target:"_blank"}},[r("span",{staticClass:"fa fa-lg fa-twitter"})])])])}]}},79:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("div",{staticClass:"container documentation"},[r("a",{staticClass:"github-corner",attrs:{href:"https://github.com/michaelhays/urplus",target:"_blank","aria-label":"View source on Github"}},[r("svg",{attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[r("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e._v(" "),r("path",{staticClass:"octo-arm",attrs:{fill:"currentColor",d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"}}),e._v(" "),r("path",{staticClass:"octo-body",attrs:{fill:"currentColor",d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"}})])]),e._v(" "),r("h1",[e._v("Overview")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("\n      urPlus is a collection of apps for the enhancement of the Udacity reviewer experience.\n    ")]),e._v(" "),r("p",[e._v("\n      Currently, there is one live app: "),r("router-link",{attrs:{to:"/remarks"}},[e._v("Remark Storage")]),e._v(".\n    ")],1),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-secondary"},[r("strong",[e._v("Disclaimer:")]),e._v(" urPlus is not built or endorsed by Udacity, Inc.\n    ")])}]}},80:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("left-nav"),e._v(" "),r("router-view")],1)])])},staticRenderFns:[]}},81:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("div",{staticClass:"container"},[r("p",[e._v("\n      404 - Page not found\n    ")])])])}]}},82:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("div",{staticClass:"container documentation"},[r("h2",{attrs:{id:"introduction"}},[e._v("Introduction")]),e._v(" "),r("hr"),e._v(" "),e._m(0),e._v(" "),r("p",[e._v("\n      If you've been a project reviewer with Udacity for a while,\n      I'm sure you've realized the value of keeping your most\n      frequently used remarks handy for quick retrieval.\n      You may already have a method of storing and retrieving your remarks.\n      Remark Storage brings this functionality to the review interface,\n      so that you can access your saved remarks without managing another page or app.\n    ")]),e._v(" "),r("p",[e._v("\n      It also adds the following conveniences to the review interface:\n    ")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("\n      It is highly recommended that you complete the short\n      tutorial below before using the Remark Storage app.\n      I've tried to make it as concise and painless as possible, while still\n      covering all of the essentials.\n    ")]),e._v(" "),r("h2",{attrs:{id:"installation"}},[e._v("Installation")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("\n      To install the Remark Storage app (as well as the\n      "),r("router-link",{attrs:{to:"/assign"}},[e._v("Remote Assignment")]),e._v(" app),\n      simply click the button below to install the Chrome Extension.\n    ")],1),e._v(" "),r("button",{staticClass:"btn urplus-btn-primary",attrs:{onclick:"chrome.webstore.install()"}},[e._v("\n      Install Chrome Extension\n    ")]),e._v(" "),r("br"),r("br"),e._v(" "),r("p",[e._v("\n      Of course, this means you will have to use Google Chrome when completing reviews.\n      Other browsers are currently not supported.\n    ")]),e._v(" "),r("h2",{attrs:{id:"tutorial"}},[e._v("Tutorial")]),e._v(" "),r("hr"),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("\n      Each of these has their own interface for remark storage and retrieval,\n      with slight differences from each other.\n    ")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),r("p",[e._v("\n      Keep in mind that for each remark type (comments, critiques, and general comments),\n      the body and category are fields that the student will see (the remark content),\n      and the title and topic are fields that only you will see (the remark identification).\n    ")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),r("p",[e._v("\n      When performing reviews, each area for editing remarks will have an addon for the\n      Remark Storage app. This addon comes in two forms—remark storage and\n      remark retrieval—with the visibility of each depending on the context.\n    ")]),e._v(" "),r("p",[e._v("\n      The remark storage interface:\n    ")]),e._v(" "),e._m(15),e._v(" "),r("br"),e._v(" "),r("p",[e._v("\n      And the remark retrieval interface:\n    ")]),e._v(" "),r("div",{staticClass:"remark-addon"},[r("div",{staticClass:"remark-search"},[r("div",{staticClass:"form-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.remarkSearchText,expression:"remarkSearchText"}],staticClass:"remark-search-input form-control",attrs:{placeholder:"Search comments",type:"text"},domProps:{value:e.remarkSearchText},on:{input:function(t){t.target.composing||(e.remarkSearchText=t.target.value)}}})])])]),e._v(" "),r("br"),e._v(" "),e._m(16),e._v(" "),r("h5",[e._v("Adding a Remark")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),r("iframe",{staticClass:"tutorial-video",attrs:{src:"https://www.youtube.com/embed/iVFRN_hY4Hc?rel=0&VQ=HD1080",frameborder:"0",allowfullscreen:""}}),e._v(" "),e._m(20),e._v(" "),r("p",[e._v("\n      The process is the same for storing critiques and general comments,\n      with the exception that there is no topic field for either of those remark types.\n    ")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),r("h5",[e._v("Updating a remark")]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),r("p",[e._v("\n      As mentioned, each remark is identified by its title-topic pair. So, you can't update\n      the title field or the topic field for a remark; that would require deleting the existing remark\n      and creating a new remark with the new title-topic pair.\n    ")]),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),r("h5",[e._v("Deleting a remark")]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),r("div",{staticClass:"remark-addon"},[r("div",{staticClass:"remark-search"},[r("div",{staticClass:"form-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.remarkSearchText,expression:"remarkSearchText"}],staticClass:"remark-search-input form-control",attrs:{placeholder:"Search comments",type:"text"},domProps:{value:e.remarkSearchText},on:{input:function(t){t.target.composing||(e.remarkSearchText=t.target.value)}}})]),e._v(" "),r("ul",e._l(e.filteredRemarks,function(t,a){return r("li",{key:t.body,class:["remark-"+t.category]},[r("span",[e._v(e._s(a+1))]),e._v(" "),r("span",[e._v(e._s(t.body))])])}))])]),e._v(" "),r("br"),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),r("p",[e._v('\n      The search text matches each individual word, separated by spaces.\n      So, searching "dog jumps quick" will match a remark with the body\n      "The quick brown fox jumps over the lazy dog". The search is case-insensitive.\n    ')]),e._v(" "),r("p",[e._v("\n      You can load a remark into the actual Udacity input area in one of three ways:\n    ")]),e._v(" "),e._m(36),e._v(" "),r("p",[e._v("\n      Check out this short video demo. A student has appended one string to two different\n      selectors on two lines of code. This can be simplified using jQuery's multiple selectors.\n    ")]),e._v(" "),r("iframe",{staticClass:"tutorial-video",attrs:{src:"https://www.youtube.com/embed/OVsoeDXZsBk?rel=0&VQ=HD1080",frameborder:"0",allowfullscreen:""}}),e._v(" "),r("p",[e._v('\n      As you can see, this process can be incredibly efficient. To submit the comment to the student,\n      we simply type "mul sel" to match "multiple" and "selectors" in the comment body,\n      press Enter to load the first remark, and the comment is automatically submitted.\n      That\'s a mouse click and 8 keystrokes to type a thorough and specific comment. Pretty good!\n    ')]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),r("p",[e._v("\n      Often times, we have a frequently used comment in which the bulk of the body\n      is the same, but a phrase or variable will be specific to each submission.\n    ")]),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),r("pre",[e._v("      <#>.forEach(function(<#>) {\n        // format and append each element\n      });")]),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),r("pre",[e._v("      work.jobs.forEach(function(job) {\n        // format and append each element\n      });")]),e._v(" "),r("h2",{attrs:{id:"authentication"}},[e._v("Authentication")]),e._v(" "),r("hr"),e._v(" "),e._m(45)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      The Remark Storage app provides an integrated and efficient means of\n      storing and retrieving your created review "),r("i",[e._v("remarks")]),e._v("\n      (Code Review comments, Project Review critiques, and Additional Reviewer Comments).\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Displays current submission price")]),e._v(" "),r("li",[e._v("Expands "),r("code",[e._v("<textarea>")]),e._v(" when composing remark")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",[r("strong",[e._v("Naming conventions")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      A "),r("b",[e._v("remark")]),e._v(" is one of three things:\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Comment – made in the Code Review")]),e._v(" "),r("li",[e._v("Critique – made in the bulk of the Project Review, one for each rubric criterion")]),e._v(" "),r("li",[e._v('General Comment – made in the "Additional Reviewer Comments" section at the bottom of the Project Review')])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      A "),r("b",[e._v("comment")]),e._v(" is stored as an object with four fields:\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[e._v("Body – the value of the "),r("code",[e._v("<textarea>")]),e._v(", the text that the student sees")]),e._v(" "),r("li",[e._v("Category – the type of comment, i.e.\n        "),r("span",{staticClass:"text-success"},[e._v("awesome")]),e._v(",\n        "),r("span",{staticClass:"text-secondary"},[e._v("nitpick")]),e._v(", or\n        "),r("span",{staticClass:"text-warning"},[e._v("critical")])]),e._v(" "),r("li",[e._v("Title – a short description of the comment")]),e._v(" "),r("li",[e._v("Topic – the general topic that the comment fits in, usually (but not necessarily) one of the rubric criteria")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      A "),r("b",[e._v("critique")]),e._v(" is stored as an object with three fields\n      (topic is automatically set to the rubric criteria):\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[e._v("Body – the value of the "),r("code",[e._v("<textarea>")]),e._v(", the text that the student sees")]),e._v(" "),r("li",[e._v("Category – the result of the criteria, i.e.\n        "),r("span",{staticClass:"text-success"},[e._v("passed")]),e._v(" or\n        "),r("span",{staticClass:"text-warning"},[e._v("failed")])]),e._v(" "),r("li",[e._v("Title – a short description of the critique")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      A "),r("b",[e._v("general comment")]),e._v(" is stored as an object with three fields (topic doesn't exist):\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[e._v("Body – the value of the "),r("code",[e._v("<textarea>")]),e._v(", the text that the student sees")]),e._v(" "),r("li",[e._v("Category – the result of the project, i.e.\n        "),r("span",{staticClass:"text-success"},[e._v("passed")]),e._v(" or\n        "),r("span",{staticClass:"text-warning"},[e._v("failed")])]),e._v(" "),r("li",[e._v("Title – a short description of the general comment")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-secondary"},[r("strong",[e._v("Note")]),e._v(": The category field for general comments has no effect\n      on what the student sees. It's just a helpful way to distinguish general comments\n      when retrieving them, as you'll see below.\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      A remark is identified by its "),r("b",[e._v("title-topic pair")]),e._v(". So, once you have created a remark\n      with title A and topic B, you can create a second remark with title A, or topic B,\n      but not both title A and topic B. Since the topic for critiques is equal to\n      the criteria, you cannot repeat titles for critiques of the same criterion,\n      though you can repeat titles across critieria. For general comments, there is no topic,\n      so you cannot repeat titles. I will use the term "),r("i",[e._v("title-topic pair")]),e._v(" to refer to\n      the identifying field for each remark type for the rest of this tutorial.\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      Remarks are automatically separated by "),r("em",[e._v("project")]),e._v(". So, remarks created for the\n      Online Resume project will not be accessible when reviewing an Article to Mockup\n      submission, and vice versa.\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",[r("strong",[e._v("Addon Interface")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"remark-addon"},[r("div",{staticClass:"remark-save form-inline"},[r("button",{staticClass:"btn urplus-btn-primary",attrs:{title:"Add new remark"}},[r("span",{staticClass:"fa fa-plus"})]),e._v(" "),r("button",{staticClass:"btn urplus-btn-primary",attrs:{title:"Update existing remark"}},[r("span",{staticClass:"fa fa-upload"})]),e._v(" "),r("button",{staticClass:"btn urplus-btn-danger",attrs:{title:"Remove existing remark"}},[r("span",{staticClass:"fa fa-trash"})]),e._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Title"}}),e._v(" "),r("input",{staticClass:"form-control",attrs:{list:"comment-topics",type:"text",placeholder:"Topic"}}),e._v(" "),r("datalist",{attrs:{id:"comment-topics"}},[r("option",{attrs:{value:"Topic1"}}),e._v(" "),r("option",{attrs:{value:"Topic2"}}),e._v(" "),r("option",{attrs:{value:"Topic3"}})])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",[r("strong",[e._v("Remark Storage")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      To store a remark, simply compose a remark as you normally would by choosing the\n      category and writing the body. Then, provide the remark identification by\n      entering the title field and (if necessary) topic field.\n      Lastly, store the comment in the urPlus database by clicking the "),r("i",[e._v("Add new remark")]),e._v(" button:\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("button",{staticClass:"btn urplus-btn-primary",attrs:{title:"Add new remark"}},[r("span",{staticClass:"fa fa-plus"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      Check out the video demo below. A student has made a "),r("span",{staticClass:"text-warning"},[e._v("critical")]),e._v(" mistake.\n      They have manually appended each element of the "),r("code",[e._v("bio.skills")]),e._v(" array;\n      however, it is a rubric requirement to iterate over the "),r("code",[e._v("bio.skills")]),e._v("\n      array with a "),r("code",[e._v("for")]),e._v(" or "),r("code",[e._v("forEach")]),e._v(" loop. This is a common mistake\n      in Online Resume submissions, so let's create a comment that we can reuse later.\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      As you can see, we start by composing the comment as we normally do.\n      We click the "),r("i",[e._v("Required")]),e._v(" radio button to define the category as\n      "),r("span",{staticClass:"text-warning"},[e._v("critical")]),e._v(" and fill out the\n      "),r("code",[e._v("<textarea>")]),e._v(" with the desired content to populate the body.\n      Then, we enter "),r("code",[e._v("bio.skills forEach")]),e._v(" for the title and "),r("code",[e._v("Display")]),e._v(" for the topic.\n      Once our four comment fields are entered, we click the "),r("i",[e._v("Add new remark")]),e._v(" button\n      and our comment is stored in the urPlus database.\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      The "),r("i",[e._v("Add new remark")]),e._v(" button is disabled if at least one of three things is true:\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("The content in the "),r("code",[e._v("<textarea>")]),e._v(" is identical to the body of an existing remark")]),e._v(" "),r("li",[e._v("The title-topic pair is identical to the title-topic pair of an existing remark")]),e._v(" "),r("li",[e._v("Any field of the remark is empty")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      To update a remark, simply change the body and/or the category of an existing\n      remark and click the "),r("i",[e._v("Update existing remark")]),e._v(" button:\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("button",{staticClass:"btn urplus-btn-primary",attrs:{title:"Update existing remark"}},[r("span",{staticClass:"fa fa-upload"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      The "),r("i",[e._v("Update existing remark")]),e._v(" button is disabled if at least one of three things is true:\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("The content in the "),r("code",[e._v("<textarea>")]),e._v(" is identical to the body of an existing remark\n        "),r("em",[e._v("and")]),e._v(" the selected category is identical to the category for that remark")]),e._v(" "),r("li",[e._v("The title-topic pair is "),r("em",[e._v("not")]),e._v(" identical to the title-topic pair of an existing remark")]),e._v(" "),r("li",[e._v("Any field of the remark is empty")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      To delete a remark, click the "),r("i",[e._v("Delete existing remark")]),e._v(" button:\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("button",{staticClass:"btn urplus-btn-danger",attrs:{title:"Delete existing remark"}},[r("span",{staticClass:"fa fa-trash"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      The "),r("i",[e._v("Delete existing remark")]),e._v(" button is disabled if at least one of three things is true:\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Not all of the fields (body, category, title, or topic) are identical to an existing remark")]),e._v(" "),r("li",[e._v("Any field of the remark is empty")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      Note that you can only delete a remark if "),r("em",[e._v("all")]),e._v(" of the fields are identical\n      to the existing remark. This is to ensure that you intend to delete a remark, which\n      removes the count of retrievals for that remark (more on that below).\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",[r("strong",[e._v("Remark Retrieval")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      Once you have created some remarks, you can quickly retrieve and submit them in\n      other reviews through the remark retrieval interface. The core is in the\n      "),r("i",[e._v("Remark search bar")]),e._v(":\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      This retrieval addon above is semi-functioning – type "),r("i",[e._v("element")]),e._v("\n      in the search bar and see how the stored comments are filtered!\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      Text entered in this box will search through the "),r("em",[e._v("bodies")]),e._v(" of all\n      existing remarks for that project to find a match. For critiques, that search\n      will be restricted to each respective criterion.\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Press Enter to load the first remark")]),e._v(" "),r("li",[e._v("Press one of the keys 1-5 to load the respective numbered remark")]),e._v(" "),r("li",[e._v("Click the remark")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      Each remark has an additional field called "),r("i",[e._v("retrievals")]),e._v(", which is incremented\n      each time the remark is selected. The filtered remarks are sorted by descending\n      "),r("i",[e._v("retrievals")]),e._v(", so that your most frequently used remarks show up first.\n      Updating a remark does not reset the retrieval count, but deleting a remark\n      deletes the retrieval count with it.\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",[r("strong",[e._v("Placeholder text")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("The purpose of the Remark Storage app is to "),r("em",[e._v("optimize")]),e._v(", not "),r("em",[e._v("generalize")]),e._v(".")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      Remark Storage identifies "),r("code",[e._v("<#>")]),e._v(" as a\n      placeholder phrase that can be used to mark an area that needs to be\n      tailored to each submission. For instance, let's say that we have a comment\n      that describes how to use a "),r("code",[e._v("forEach")]),e._v(" loop in a certain context,\n      but the variable name of the array varies with each submission. We can\n      use "),r("code",[e._v("<#>")]),e._v(" in place of the variable name, like so:\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      When we select this comment from the remark retrieval interface,\n      instead of instantly submitting that comment, the first instance of\n      "),r("code",[e._v("<#>")]),e._v(" will be highlighted, ready to be immediately\n      replaced with the submission-specific phrase. Then, pressing\n      "),r("code",[e._v("Tab")]),e._v(" highlights the next instance of "),r("code",[e._v("<#>")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-secondary"},[r("strong",[e._v("Note")]),e._v(": "),r("code",[e._v("Tab")]),e._v(" always highlights the "),r("i",[e._v("first")]),e._v("\n      instance of "),r("code",[e._v("<#>")]),e._v(" in a remark. Once you have replaced the first\n      "),r("code",[e._v("<#>")]),e._v(", the next instance just becomes the first.\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      If there are no instances of "),r("code",[e._v("<#>")]),e._v(" remaining,\n      "),r("code",[e._v("Tab")]),e._v(" submits the remark to the review.\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      So, after replacing all instances of "),r("code",[e._v("<#>")]),e._v(", we press\n       "),r("code",[e._v("Tab")]),e._v(" to submit the comment:\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      The Remark Storage app is authenticated with your Udacity\n      "),r("a",{attrs:{href:"https://jwt.io/",target:"_blank"}},[e._v("JSON Web Token")]),e._v(".\n      This is how your personal remarks that you create and store are\n      separated from remarks that another Udacity reviewer creates –\n      all without having to create a separate account.\n      This means that as long as you are using a browser on which you\n      have installed the urPlus Chrome Extension,\n      you will have access to all of your remarks.\n    ")])}]}}},[30]);
//# sourceMappingURL=app.7ec785c6a627011a93bf.js.map