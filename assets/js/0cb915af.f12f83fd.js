(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[7477],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),c=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),d=r,h=s["".concat(m,".").concat(d)]||s[d]||p[d]||l;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(7294),r=t(944),l=t(6010),i="tabItem_vU9c",o="tabItemActive_cw6a";var m=37,c=39;var u=function(e){var n=e.lazy,t=e.block,u=e.defaultValue,p=e.values,s=e.groupId,d=e.className,h=(0,r.Z)(),k=h.tabGroupChoices,b=h.setTabGroupChoices,f=(0,a.useState)(u),g=f[0],N=f[1],v=a.Children.toArray(e.children),y=[];if(null!=s){var C=k[s];null!=C&&C!==g&&p.some((function(e){return e.value===C}))&&N(C)}var _=function(e){var n=e.currentTarget,t=y.indexOf(n),a=p[t].value;N(a),null!=s&&(b(s,a),setTimeout((function(){var e,t,a,r,l,i,m,c;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,l=e.right,i=window,m=i.innerHeight,c=i.innerWidth,t>=0&&l<=c&&r<=m&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(o),setTimeout((function(){return n.classList.remove(o)}),2e3))}),150))},w=function(e){var n,t;switch(e.keyCode){case c:var a=y.indexOf(e.target)+1;t=y[a]||y[0];break;case m:var r=y.indexOf(e.target)-1;t=y[r]||y[y.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":g===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:_,onClick:_},t)}))),n?(0,a.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},9443:function(e,n,t){"use strict";var a=(0,t(7294).createContext)(void 0);n.Z=a},944:function(e,n,t){"use strict";var a=t(7294),r=t(9443);n.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},5607:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return h}});var a=t(2122),r=t(9756),l=(t(7294),t(3905)),i=t(1395),o=t(8215),m=["components"],c={id:"superbench-config"},u="SuperBench Config File",p={unversionedId:"superbench-config",id:"superbench-config",isDocsHomePage:!1,title:"SuperBench Config File",description:"YAML format configuration file is an efficient method to take full advantage of SuperBench.",source:"@site/../docs/superbench-config.mdx",sourceDirName:".",slug:"/superbench-config",permalink:"/superbenchmark/docs/superbench-config",editUrl:"https://github.com/microsoft/superbenchmark/edit/main/website/../docs/superbench-config.mdx",version:"current",frontMatter:{id:"superbench-config"},sidebar:"api",previous:{title:"CLI",permalink:"/superbenchmark/docs/cli"}},s=[{value:"Conventions",id:"conventions",children:[]},{value:"Configuration Schema",id:"configuration-schema",children:[{value:"<code>version</code>",id:"version",children:[]},{value:"<code>superbench</code>",id:"superbench",children:[]},{value:"<code>superbench.enable</code>",id:"superbenchenable",children:[]},{value:"<code>superbench.monitor</code>",id:"superbenchmonitor",children:[]},{value:"<code>superbench.var</code>",id:"superbenchvar",children:[]},{value:"<code>superbench.benchmarks</code>",id:"superbenchbenchmarks",children:[]}]},{value:"<code>Benchmark</code> Schema",id:"benchmark-schema",children:[{value:"<code>enable</code>",id:"enable-1",children:[]},{value:"<code>timeout</code>",id:"timeout",children:[]},{value:"<code>modes</code>",id:"modes",children:[]},{value:"<code>frameworks</code>",id:"frameworks",children:[]},{value:"<code>models</code>",id:"models",children:[]},{value:"<code>parameters</code>",id:"parameters",children:[]}]},{value:"<code>Mode</code> Schema",id:"mode-schema",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>proc_num</code>",id:"proc_num",children:[]},{value:"<code>node_num</code>",id:"node_num",children:[]},{value:"<code>prefix</code>",id:"prefix",children:[]},{value:"<code>env</code>",id:"env",children:[]},{value:"<code>mca</code>",id:"mca",children:[]},{value:"<code>parallel</code>",id:"parallel",children:[]},{value:"<code>pattern</code>",id:"pattern",children:[]}]}],d={toc:s};function h(e){var n=e.components,t=(0,r.Z)(e,m);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"superbench-config-file"},"SuperBench Config File"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2/spec.html"},"YAML")," format configuration file is an efficient method to take full advantage of SuperBench.\nYou can put it in any place and specify the path to config file through ",(0,l.kt)("inlineCode",{parentName:"p"},"-c /path/to/config.yaml")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"sb")," CLI."),(0,l.kt)("p",null,"This document covers schema of SuperBench configuration YAML file.\nYou can learn YAML basics from ",(0,l.kt)("a",{parentName:"p",href:"https://learnxinyminutes.com/docs/yaml/"},"Learn YAML in Y minutes"),".\nSuperBench configuration supports most of the YAML features, including anchors and aliases, merge key, etc."),(0,l.kt)("h2",{id:"conventions"},"Conventions"),(0,l.kt)("p",null,"Here lists syntax conventions used in this document:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The schema and example are in YAML format.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In YAML mappings which use a colon ",(0,l.kt)("inlineCode",{parentName:"p"},":")," to mark ",(0,l.kt)("inlineCode",{parentName:"p"},"key: value")," pair."),(0,l.kt)("p",{parentName:"li"},"The left side of colon is a literal keyword defined in configuration,\nif it is surrounded by ",(0,l.kt)("inlineCode",{parentName:"p"},"${}"),", like ",(0,l.kt)("inlineCode",{parentName:"p"},"${name}"),", then the key is a string that can be defined by user."),(0,l.kt)("p",{parentName:"li"},"The right side of colon is a data type, which may be Python built-in types (like ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dict"),"),\nor a rich structure defined in this document (first character capitalized).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The notation ",(0,l.kt)("inlineCode",{parentName:"p"},"[ datatype ]")," indicates a YAML sequence of the mentioned data type.\nFor example, ",(0,l.kt)("inlineCode",{parentName:"p"},"[ string ]")," is a list of strings.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The notation ",(0,l.kt)("inlineCode",{parentName:"p"},"|")," indicates there are multiple optional data types.\nFor example, ",(0,l.kt)("inlineCode",{parentName:"p"},"string | [ string ]")," means either a string or a list of strings is allowed."))),(0,l.kt)("h2",{id:"configuration-schema"},"Configuration Schema"),(0,l.kt)("p",null,"The configuration file describes all benchmarks running by SuperBench.\nThere will be one or more benchmarks, each benchmark has its own settings and parameters.\nOne benchmark may have one or more modes, which indicates how to run benchmarks in all given machines."),(0,l.kt)("p",null,"Here is an overview of SuperBench configuration structure:"),(0,l.kt)(i.Z,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"schema",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: string\nsuperbench:\n  enable: string | [ string ]\n  monitor:\n    enable: bool\n    sample_duration: int\n    sample_interval: int\n  var:\n    ${var_name}: dict\n  benchmarks:\n    ${benchmark_name}: Benchmark\n"))),(0,l.kt)(o.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: v0.6\nsuperbench:\n  enable: benchmark_1\n  monitor:\n    enable: false\n    sample_duration: 10\n    sample_interval: 1\n  var:\n    var_1: value\n  benchmarks:\n    benchmark_1:\n      enable: true\n      modes:\n      - name: local\n")))),(0,l.kt)("h3",{id:"version"},(0,l.kt)("inlineCode",{parentName:"h3"},"version")),(0,l.kt)("p",null,"Version of the configuration file.\nLower version ",(0,l.kt)("inlineCode",{parentName:"p"},"sb")," CLI may not understand higher version config."),(0,l.kt)("h3",{id:"superbench"},(0,l.kt)("inlineCode",{parentName:"h3"},"superbench")),(0,l.kt)("p",null,"SuperBench configuration for all benchmarks."),(0,l.kt)("h3",{id:"superbenchenable"},(0,l.kt)("inlineCode",{parentName:"h3"},"superbench.enable")),(0,l.kt)("p",null,"Enable which benchmark to run, could be one or multiple benchmarks' name.\nIf not specified, will use ",(0,l.kt)("a",{parentName:"p",href:"#enable"},(0,l.kt)("inlineCode",{parentName:"a"},"${benchmark_name}.enable"))," in each benchmark as default."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"value from: benchmark names defined in ",(0,l.kt)("inlineCode",{parentName:"li"},"superbench.benchmarks")),(0,l.kt)("li",{parentName:"ul"},"default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"null"))),(0,l.kt)("h3",{id:"superbenchmonitor"},(0,l.kt)("inlineCode",{parentName:"h3"},"superbench.monitor")),(0,l.kt)("p",null,"Enable monitor to collect system metrics periodically, currently only support CUDA platform. There are three settings:"),(0,l.kt)("h4",{id:"enable"},(0,l.kt)("inlineCode",{parentName:"h4"},"enable")),(0,l.kt)("p",null,"Whether enable the monitor module or not."),(0,l.kt)("h4",{id:"sample_duration"},(0,l.kt)("inlineCode",{parentName:"h4"},"sample_duration")),(0,l.kt)("p",null,"Calculate the average metrics during sample_duration seconds, such as CPU usage and NIC bandwidth."),(0,l.kt)("h4",{id:"sample_interval"},(0,l.kt)("inlineCode",{parentName:"h4"},"sample_interval")),(0,l.kt)("p",null,"Do sampling every sample_interval seconds."),(0,l.kt)("h3",{id:"superbenchvar"},(0,l.kt)("inlineCode",{parentName:"h3"},"superbench.var")),(0,l.kt)("p",null,"User-defined variables to be used in the configuration.\nLeveraging YAML ",(0,l.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2/spec.html#id2765878"},"anchors and aliases"),",\ncommon settings can be defined here to avoid config duplication."),(0,l.kt)("p",null,"Here is a usage example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{3-6,11,15}","{3-6,11,15}":!0},"superbench:\n  var:\n    common_param: &param\n      num_warmup: 16\n      num_steps: 128\n      batch_size: 128\n  benchmarks:\n    model-benchmarks:foo:\n      models:\n        - resnet50\n      parameters: *param\n    model-benchmarks:bar:\n      models:\n        - vgg19\n      parameters: *param\n")),(0,l.kt)("p",null,"The above configuration equals to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{6-9,13-16}","{6-9,13-16}":!0},"superbench:\n  benchmarks:\n    model-benchmarks:foo:\n      models:\n        - resnet50\n      parameters:\n        num_warmup: 16\n        num_steps: 128\n        batch_size: 128\n    model-benchmarks:bar:\n      models:\n        - vgg19\n      parameters:\n        num_warmup: 16\n        num_steps: 128\n        batch_size: 128\n")),(0,l.kt)("h3",{id:"superbenchbenchmarks"},(0,l.kt)("inlineCode",{parentName:"h3"},"superbench.benchmarks")),(0,l.kt)("p",null,"Mappings of ",(0,l.kt)("inlineCode",{parentName:"p"},"${benchmark_name}: Benchmark"),"."),(0,l.kt)("p",null,"There are three types of benchmarks,\n",(0,l.kt)("a",{parentName:"p",href:"/superbenchmark/docs/user-tutorial/benchmarks/micro-benchmarks"},"micro-benchmark"),",\n",(0,l.kt)("a",{parentName:"p",href:"/superbenchmark/docs/user-tutorial/benchmarks/model-benchmarks"},"model-benchmark"),",\nand ",(0,l.kt)("a",{parentName:"p",href:"/superbenchmark/docs/user-tutorial/benchmarks/docker-benchmarks"},"docker-benchmark"),".\nEach benchmark has its own unique name listed in docs."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"${benchmark_name}")," can be one of the followings:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"${benchmark_unique_name}"),", it can be the exact same as benchmark's own unique name;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"${benchmark_unique_name}:${annotation}"),", or if there's a need to run one benchmark with different settings,\nan annotation separated by ",(0,l.kt)("inlineCode",{parentName:"li"},":")," can be appended after benchmark's unique name.")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#benchmark-schema"},(0,l.kt)("inlineCode",{parentName:"a"},"Benchmark")," Schema")," for benchmark definition."),(0,l.kt)("h2",{id:"benchmark-schema"},(0,l.kt)("inlineCode",{parentName:"h2"},"Benchmark")," Schema"),(0,l.kt)("p",null,"Definition for each benchmark, here is an overview of ",(0,l.kt)("inlineCode",{parentName:"p"},"Benchmark")," configuration structure:"),(0,l.kt)(i.Z,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"schema",mdxType:"TabItem"},(0,l.kt)("h4",{id:"micro-benchmark"},"Micro-Benchmark"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"${benchmark_name}:\n  enable: bool\n  timeout: int\n  modes: [ Mode ]\n  frameworks: [ enum ]\n  parameters:\n    run_count: int\n    duration: int\n    log_raw_data: bool\n    ${argument}: bool | str | int | float | list\n")),(0,l.kt)("h4",{id:"model-benchmark"},"Model-Benchmark"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"model-benchmarks:${annotation}:\n  enable: bool\n  timeout: int\n  modes: [ Mode ]\n  frameworks: [ enum ]\n  models: [ enum ]\n  parameters:\n    run_count: int\n    duration: int\n    log_raw_data: bool\n    num_warmup: int\n    num_steps: int\n    sample_count: int\n    batch_size: int\n    precision: [ enum ]\n    model_action: [ enum ]\n    pin_memory: bool\n    ${argument}: bool | str | int | float | list\n"))),(0,l.kt)(o.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("h4",{id:"micro-benchmark-1"},"Micro-Benchmark"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kernel-launch:\n  enable: true\n  timeout: 120\n  modes:\n    - name: local\n      proc_num: 8\n      prefix: CUDA_VISIBLE_DEVICES={proc_rank}\n      parallel: yes\n  parameters:\n    num_warmup: 100\n    num_steps: 2000000\n    interval: 2000\n")),(0,l.kt)("h4",{id:"model-benchmark-1"},"Model-Benchmark"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"model-benchmarks:resnet:\n  enable: true\n  timeout: 1800\n  modes:\n    - name: torch.distributed\n      proc_num: 8\n      node_num: 1\n  frameworks:\n    - pytorch\n  models:\n    - resnet50\n    - resnet101\n    - resnet152\n  parameters:\n    duration: 0\n    num_warmup: 16\n    num_steps: 128\n    batch_size: 128\n    precision:\n      - float32\n      - float16\n    model_action:\n      - train\n")))),(0,l.kt)("h3",{id:"enable-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"enable")),(0,l.kt)("p",null,"Enable current benchmark or not, can be overwritten by ",(0,l.kt)("a",{parentName:"p",href:"#superbenchenable"},(0,l.kt)("inlineCode",{parentName:"a"},"superbench.enable")),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("h3",{id:"timeout"},(0,l.kt)("inlineCode",{parentName:"h3"},"timeout")),(0,l.kt)("p",null,"Set the timeout value in seconds, the benchmarking will stop early if timeout is triggerred."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"default value: none")),(0,l.kt)("h3",{id:"modes"},(0,l.kt)("inlineCode",{parentName:"h3"},"modes")),(0,l.kt)("p",null,"A list of modes in which the benchmark runs.\nCurrently only one mode is supported for each benchmark."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#mode-schema"},(0,l.kt)("inlineCode",{parentName:"a"},"Mode")," Schema")," for mode definition."),(0,l.kt)("h3",{id:"frameworks"},(0,l.kt)("inlineCode",{parentName:"h3"},"frameworks")),(0,l.kt)("p",null,"A list of frameworks in which the benchmark runs.\nSome benchmarks can support multiple frameworks while others only support one."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"accepted values: ",(0,l.kt)("inlineCode",{parentName:"li"},"[ onnxruntime | pytorch | tf1 | tf2 | none ]")),(0,l.kt)("li",{parentName:"ul"},"default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"[ none ]"))),(0,l.kt)("h3",{id:"models"},(0,l.kt)("inlineCode",{parentName:"h3"},"models")),(0,l.kt)("p",null,"A list of models to run, only supported in model-benchmark."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"accepted values:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# pytorch framework\n[ alexnet | densenet121 | densenet169 | densenet201 | densenet161 | googlenet | inception_v3 |\n  mnasnet0_5 | mnasnet0_75 | mnasnet1_0 | mnasnet1_3 | mobilenet_v2 |\n  resnet18 | resnet34 | resnet50 | resnet101 | resnet152 |\n  resnext50_32x4d | resnext101_32x8d | wide_resnet50_2 | wide_resnet101_2 |\n  shufflenet_v2_x0_5 | shufflenet_v2_x1_0 | shufflenet_v2_x1_5 | shufflenet_v2_x2_0 |\n  squeezenet1_0 | squeezenet1_1 |\n  vgg11 | vgg11_bn | vgg13 | vgg13_bn | vgg16 | vgg16_bn | vgg19_bn | vgg19 |\n  bert-base | bert-large | gpt2-small | gpt2-medium | gpt2-large | gpt2-xl ]\n"))),(0,l.kt)("li",{parentName:"ul"},"default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"[ ]"))),(0,l.kt)("h3",{id:"parameters"},(0,l.kt)("inlineCode",{parentName:"h3"},"parameters")),(0,l.kt)("p",null,"Parameters for benchmark to use, varying for different benchmarks."),(0,l.kt)("p",null,"There have three common parameters for all benchmarks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"run_count: how many times do user want to run this benchmark, default value is 1."),(0,l.kt)("li",{parentName:"ul"},"duration: the elapsed time of benchmark in seconds. It can work for all model-benchmark. But for micro-benchmark, benchmark authors should consume it by themselves."),(0,l.kt)("li",{parentName:"ul"},"log_raw_data: log raw data into file instead of saving it into result object, default value is ",(0,l.kt)("inlineCode",{parentName:"li"},"False"),".  Benchmarks who have large raw output may want to set it as ",(0,l.kt)("inlineCode",{parentName:"li"},"True"),", such as ",(0,l.kt)("inlineCode",{parentName:"li"},"nccl-bw"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"rccl-bw"),".")),(0,l.kt)("p",null,"For Model-Benchmark, there have some parameters that can control the elapsed time."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"duration: the elapsed time of benchmark in seconds."),(0,l.kt)("li",{parentName:"ul"},"num_warmup: the number of warmup step."),(0,l.kt)("li",{parentName:"ul"},"num_steps: the number of test step.")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"duration > 0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"num_warmup + num_steps > 0"),", then benchmark will take the least as the elapsed time. Otherwise only one of them will take effect."),(0,l.kt)("h2",{id:"mode-schema"},(0,l.kt)("inlineCode",{parentName:"h2"},"Mode")," Schema"),(0,l.kt)("p",null,"Definition for each benchmark mode, here is an overview of ",(0,l.kt)("inlineCode",{parentName:"p"},"Mode")," configuration structure:"),(0,l.kt)(i.Z,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"schema",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: enum\nproc_num: int\nnode_num: int\nenv: dict\nmca: dict\nprefix: str\nparallel: bool\n"))),(0,l.kt)(o.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: local\nproc_num: 8\nprefix: CUDA_VISIBLE_DEVICES={proc_rank}\nparallel: yes\n")))),(0,l.kt)("h3",{id:"name"},(0,l.kt)("inlineCode",{parentName:"h3"},"name")),(0,l.kt)("p",null,"Mode name to use. Here lists available modes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"local"),": run benchmark as local process."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"torch.distributed"),": launch benchmark through ",(0,l.kt)("a",{parentName:"li",href:"https://pytorch.org/docs/stable/distributed.html#launch-utility"},"PyTorch DDP"),", each process will run on one GPU."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mpi"),": launch benchmark through MPI, the benchmark implementation could leverage MPI interface.")),(0,l.kt)("p",null,"Some attributes may only be suitable for specific mode."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"}),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"th"},"local")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"th"},"torch.distributed")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"th"},"mpi")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"proc_num")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"node_num")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"prefix")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2718")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"env")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"mca")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"parallel")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2718")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"pattern")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"accepted values: ",(0,l.kt)("inlineCode",{parentName:"li"},"local | torch.distributed | mpi")),(0,l.kt)("li",{parentName:"ul"},"default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"local"))),(0,l.kt)("h3",{id:"proc_num"},(0,l.kt)("inlineCode",{parentName:"h3"},"proc_num")),(0,l.kt)("p",null,"Process number to run per node.\nEach process will run an individual benchmark, how processes communicate depends on the mode."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"1"))),(0,l.kt)("h3",{id:"node_num"},(0,l.kt)("inlineCode",{parentName:"h3"},"node_num")),(0,l.kt)("p",null,"Node number to run in the mode. Defaults to all nodes provided by host file in the run.\nWill be ignored in ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," mode."),(0,l.kt)("p",null,"For example, assuming you are running model benchmark on 4 nodes,\n",(0,l.kt)("inlineCode",{parentName:"p"},"proc_num: 8, node_num: 1")," will run 8-GPU distributed training on each node,\nwhile ",(0,l.kt)("inlineCode",{parentName:"p"},"proc_num: 8, node_num: null")," will run 32-GPU distributed training on all nodes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"null"))),(0,l.kt)("h3",{id:"prefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"prefix")),(0,l.kt)("p",null,"Command prefix to use in the mode, in Python formatted string."),(0,l.kt)("p",null,"Available variables in formatted string includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"proc_rank")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"proc_num"))),(0,l.kt)("p",null,"So ",(0,l.kt)("inlineCode",{parentName:"p"},"prefix: CUDA_VISIBLE_DEVICES={proc_rank}")," will be expressed as ",(0,l.kt)("inlineCode",{parentName:"p"},"CUDA_VISIBLE_DEVICES=0"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"CUDA_VISIBLE_DEVICES=1"),", etc."),(0,l.kt)("h3",{id:"env"},(0,l.kt)("inlineCode",{parentName:"h3"},"env")),(0,l.kt)("p",null,"Environment variables to use in the mode, in a flatten key-value dictionary.\nThe value needs to be string, any integer or boolean values need to be enclosed in quotes."),(0,l.kt)("p",null,"Formatted string is also supported in value, available variables include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"proc_rank")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"proc_num"))),(0,l.kt)("h3",{id:"mca"},(0,l.kt)("inlineCode",{parentName:"h3"},"mca")),(0,l.kt)("p",null,"MCA (Modular Component Architecture) frameworks, components, or modules to use in MPI,\nin a flatten key-value dictionary.\nOnly available for ",(0,l.kt)("inlineCode",{parentName:"p"},"mpi")," mode."),(0,l.kt)("h3",{id:"parallel"},(0,l.kt)("inlineCode",{parentName:"h3"},"parallel")),(0,l.kt)("p",null,"Whether run benchmarks in parallel (all ranks at the same time) or in sequence (one rank at a time).\nOnly available for ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," mode."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"yes"))),(0,l.kt)("h3",{id:"pattern"},(0,l.kt)("inlineCode",{parentName:"h3"},"pattern")),(0,l.kt)("p",null,"Pattern variables to run benchmarks with nodes in specified traffic pattern combination, in a flatten key-value dictionary.\nOnly available for ",(0,l.kt)("inlineCode",{parentName:"p"},"mpi")," mode."),(0,l.kt)("p",null,"Available variables in formatted string includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"accepted values: ",(0,l.kt)("inlineCode",{parentName:"li"},"all-nodes"))))))}h.isMDXComponent=!0},6010:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);