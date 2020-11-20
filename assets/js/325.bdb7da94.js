(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{286:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("性能概要是APM系统中的一个增强特性. 我们使用线程转储来估算方法执行时间，而不是添加许多局部span。\n这样，与使用分布式跟踪来定位慢方法相比，资源成本要低得多。该特性适用于生产环境。本文档介绍如何将线程转储作为堆栈树归并到最终报告中.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("从数据库中读取数据并将其转换为gRPC中的数据结构.")]),t._v(" "),t._m(3),r("p",[t._v("复制代码并将其粘贴到此 "),r("a",{attrs:{href:"http://flowchart.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),r("OutboundLink")],1),t._v("以生成流程图.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("使用Java并行流中的group by和collector模式根据数据库记录中的第一个堆栈元素进行分组，\n并使用collector执行数据聚合. 生成一个多根树.")]),t._v(" "),t._m(6),r("p",[t._v("复制代码并将其粘贴到此 "),r("a",{attrs:{href:"http://flowchart.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),r("OutboundLink")],1),t._v("以生成流程图.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("请按照 "),r("router-link",{attrs:{to:"./backend-profile-export.html#export-command-line-usage"}},[t._v("导出工具")]),t._v(" 打包配置文件数据. 解压配置文件数据并使用 "),r("a",{attrs:{href:"../../../oap-server/server-tools/profile-exporter/tool-profile-snapshot-bootstrap/src/test/java/org/apache/skywalking/oap/server/tool/profile/exporter/ProfileExportedAnalyze.java"}},[t._v("分析主要功能")]),t._v(" 运行.")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"线程转储归并机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程转储归并机制"}},[this._v("#")]),this._v(" 线程转储归并机制")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"线程分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程分析"}},[this._v("#")]),this._v(" 线程分析")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"读取数据并进行转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读取数据并进行转换"}},[this._v("#")]),this._v(" 读取数据并进行转换")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("st=>start: Start\ne=>end: End\nop1=>operation: Load data using paging\nop2=>operation: Transform data using parallel\n\nst(right)->op1(right)->op2\nop2(right)->e\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("使用流按页读取数据(每页50条记录).")]),this._v(" "),e("li",[this._v("以并行流的形式将数据转换为gRPC数据结构.")]),this._v(" "),e("li",[this._v("合并到数据列表中.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"数据分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据分析"}},[this._v("#")]),this._v(" 数据分析")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("st=>start: Start\ne=>end: End\nop1=>operation: Group by first stack element\nsup=>operation: Generate empty stack tree\nacc=>operation: Accumulator data to stack tree\ncom=>operation: Combine stack trees\nfin=>operation: Calculate durations and build result\n\nst(right)->op1->sup(right)->acc\nacc(right)->com(right)->fin->e\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("strong",[t._v("按第一个堆栈元素分组")]),t._v(":使用每个堆栈中的第一级元素分组，确保堆栈具有相同的根节点e.")]),t._v(" "),r("li",[r("strong",[t._v("生成空栈")]),t._v(":生成多个顶级空树，为下一步做准备，\n生成多个顶级树的原因是可以并行地添加原始数据，而不需要生成锁.")]),t._v(" "),r("li",[r("strong",[t._v("累加数据至栈中")]),t._v(": 将每个线程转储添加到生成的树中.\n"),r("ol",[r("li",[t._v("遍历线程转储中的每个元素，以查找父元素中是否有具有相同代码签名和相同堆栈深度的子元素.\n如果不是，则添加此元素.")]),t._v(" "),r("li",[t._v("保留原节点中的转储序列和时间戳.")])])]),t._v(" "),r("li",[r("strong",[t._v("合并所有堆栈")]),t._v(": 使用与 "),r("code",[t._v("累加器")]),t._v(" 相同的规则将所有树结构组合成一个树结构.\n1.使用LDR遍历树节点。使用 "),r("code",[t._v("堆栈")]),t._v(" 数据结构来避免递归调用，每个堆栈元素表示需要合并的节点.\n2. 合并两个节点的方法是合并其子节点的列表. 如果它们具有相同的代码签名和相同的父节点，则在此节点中保存转储序列和时间戳. 否则，需要将节点作为新的子节点添加到目标节点中.")]),t._v(" "),r("li",[r("strong",[t._v("计算时间并生成结果")]),t._v(": 计算相关统计数据并生成响应.\n"),r("ol",[r("li",[t._v("使用与 "),r("code",[t._v("合并所有堆栈")]),t._v(" 步骤相同的遍历节点逻辑. 转换为GraphQL数据结构，并将所有节点放到一个列表中，以用于后续的持续时间计算.")]),t._v(" "),r("li",[t._v("并行计算每个节点的持续时间. 对于每个节点，对序列进行排序，如果有两个连续序列，持续时间应该添加这两个seq的时间戳的持续时间.")]),t._v(" "),r("li",[t._v("并行计算每个节点的执行. 对于每个节点，当前节点的持续时间应该减去所有子节点消耗的时间.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"配置文件数据调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件数据调试"}},[this._v("#")]),this._v(" 配置文件数据调试")])}],!1,null,null,null);e.default=s.exports}}]);