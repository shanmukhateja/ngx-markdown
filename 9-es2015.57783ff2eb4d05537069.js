(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{FysF:function(n,e,t){"use strict";t.r(e);var a=t("8VHZ"),o=t("N2ZZ"),r=t("nQ6I"),i=t("dLyB"),c=t("PCNd"),d=t("Fk62"),s=t("Ub9n"),p=t("965z"),m=t("FfMK"),l=t("qQg5"),b=t("CsWY"),g=t("OX7E"),w=t("DAd4");const h=[{path:"",component:(()=>{class n{constructor(n){this.elementRef=n,this.demoPython=t("PjZf").default,this.languagePipe=t("rqeO").default,this.markdown='### Markdown example\n---\nThis is an **example** where we bind a variable to the `markdown` component that is also bind to a textarea.\n\n#### example.component.ts\n```typescript\npublic markdown = "# Markdown";\n```\n\n#### example.component.html\n```html\n<textarea [(ngModel)]="markdown"></textarea>\n<markdown [data]="markdown"></markdown>\n```',this.typescriptMarkdown="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'markdown-demo',\n  templateUrl: './markdown-demo.component.html',\n  styleUrls: ['./markdown-demo.component.scss'],\n})\nexport class MarkdownDemoComponent {\n  public pipeMarkdown = '# Markdown';\n}"}ngOnInit(){this.setHeadings()}setHeadings(){const n=[];this.elementRef.nativeElement.querySelectorAll("h2").forEach(e=>n.push(e)),this.headings=n}}return n.\u0275fac=function(e){return new(e||n)(s.Lb(s.l))},n.\u0275cmp=s.Fb({type:n,selectors:[["app-bindings"]],decls:46,vars:19,consts:[[3,"headings"],["id","remote-url"],[3,"src"],["markdown","",3,"src"],["id","variable-binding"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap","16px"],["appearance","fill","color","accent","fxFlex.gt-sm","calc(50% - 8px)"],["matInput","",3,"ngModel","ngModelChange"],["fxFlex.gt-sm","calc(50% - 8px)",3,"data"],["id","pipe-usage"],["fxFlex.gt-sm","calc(50% - 8px)",3,"innerHTML"]],template:function(n,e){1&n&&(s.Qb(0,"app-scrollspy-nav-layout",0),s.Qb(1,"h1"),s.wc(2,"Bindings"),s.Pb(),s.Qb(3,"section"),s.Qb(4,"h2",1),s.wc(5,"Remote Url"),s.Pb(),s.Qb(6,"markdown"),s.wc(7," Using component with `src` property to fetch remote markdown file `app/bindings/remote/demo.md` "),s.Pb(),s.Mb(8,"markdown",2),s.Qb(9,"markdown"),s.wc(10," Using component with static `python` code block "),s.Pb(),s.Qb(11,"markdown"),s.wc(12),s.bc(13,"language"),s.Pb(),s.Qb(14,"markdown"),s.wc(15," Using directive with `src` property to fetch remote html file `app/bindings/remote/demo.html` "),s.Pb(),s.Mb(16,"div",3),s.Qb(17,"markdown"),s.wc(18," Using directive with `src` property to fetch remote C++ file `app/bindings/remote/demo.cpp` "),s.Pb(),s.Mb(19,"div",3),s.Pb(),s.Qb(20,"section"),s.Qb(21,"h2",4),s.wc(22,"Variable Binding"),s.Pb(),s.Qb(23,"markdown"),s.wc(24," Using component or directive with `data` property allow to bind a variable that will update the DOM when value changes "),s.Pb(),s.Qb(25,"div",5),s.Qb(26,"mat-form-field",6),s.Qb(27,"textarea",7),s.Yb("ngModelChange",(function(n){return e.markdown=n})),s.Pb(),s.Pb(),s.Mb(28,"markdown",8),s.Pb(),s.Qb(29,"markdown"),s.wc(30," Using `language` pipe you can specify the language of the variable content for synthax highlights "),s.Pb(),s.Mb(31,"markdown",2),s.Pb(),s.Qb(32,"section"),s.Qb(33,"h2",9),s.wc(34,"Pipe Usage"),s.Pb(),s.Qb(35,"markdown"),s.wc(36," Using `markdown` pipe to transform markdown to HTML allow you to chain pipe transformations and will update the DOM when value changes "),s.Pb(),s.Mb(37,"markdown",2),s.Qb(38,"markdown"),s.wc(39," In the following example using the synthax above, `typescriptMarkdown` property does not contain any `back-ticks` to set the content language but will be chain with `language` pipe instead to specify synthax highlights language along with `markdown` pipe for conversion "),s.Pb(),s.Qb(40,"div",5),s.Qb(41,"mat-form-field",6),s.Qb(42,"textarea",7),s.Yb("ngModelChange",(function(n){return e.typescriptMarkdown=n})),s.Pb(),s.Pb(),s.Mb(43,"div",10),s.bc(44,"markdown"),s.bc(45,"language"),s.Pb(),s.Pb(),s.Pb()),2&n&&(s.gc("headings",e.headings),s.Bb(8),s.gc("src","app/bindings/remote/demo.md"),s.Bb(4),s.xc(s.dc(13,11,e.demoPython,"python")),s.Bb(4),s.gc("src","app/bindings/remote/demo.html"),s.Bb(3),s.gc("src","app/bindings/remote/demo.cpp"),s.Bb(8),s.gc("ngModel",e.markdown),s.Bb(1),s.gc("data",e.markdown),s.Bb(3),s.gc("src","app/bindings/remote/language-pipe.html"),s.Bb(6),s.gc("src","app/bindings/remote/markdown-pipe.html"),s.Bb(5),s.gc("ngModel",e.typescriptMarkdown),s.Bb(1),s.gc("innerHTML",s.cc(44,14,s.dc(45,16,e.typescriptMarkdown,"typescript")),s.pc))},directives:[p.a,m.a,l.d,l.e,b.a,l.b,o.a,a.a,a.e,a.g],pipes:[g.a,w.a],styles:["[_nghost-%COMP%]{display:block}textarea[_ngcontent-%COMP%]{min-height:360px}"],changeDetection:0}),n})()}];let u=(()=>{class n{}return n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({factory:function(e){return new(e||n)},imports:[[d.e.forChild(h)],d.e]}),n})();t("SQXh"),t.d(e,"BindingsModule",(function(){return k}));let k=(()=>{class n{}return n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({factory:function(e){return new(e||n)},imports:[[u,a.c,r.a.forChild(),o.b,i.a,c.a]]}),n})()},PjZf:function(n,e,t){"use strict";t.r(e),e.default='s = "Python syntax highlighting"\nprint s'},rqeO:function(n,e,t){"use strict";t.r(e),e.default="<markdown [data]=\"markdown | language : 'typescript'\"></markdown>"}}]);