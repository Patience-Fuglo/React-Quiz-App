(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{26:function(e,c,t){},27:function(e,c,t){},36:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t(0),r=t.n(n),a=t(15),i=t.n(a),l=(t(26),t(9)),j=t(12),o=t(2),h=(t(27),function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"home_text",children:"Fun Trivia Games"}),Object(s.jsxs)("h3",{children:[Object(s.jsx)("br",{})," World Fact Quizes"]}),Object(s.jsx)("p",{children:"Quiz Maker, Pop Questions!"}),Object(s.jsx)("a",{href:"#/Quiz",className:"btn btn-dark",children:"Start Quiz"})]})})}),d=function(e){var c=Object(n.useState)(0),t=Object(l.a)(c,2),r=t[0],a=t[1],i=Object(o.f)(),j=[{text:"1. Which of the following cities was the first to open a public library?",answers:["a.Serville, Spain","b.Warsaw, Poland","c.Naples, Italy","d.stuttgart, Germany"],correctAnswer:"b.Warsaw, Poland"},{text:"2. Which nation in the world consumes more Coca-Cola per capita than any other?",answers:["a.Mexico","b.Norway","c.USA","d.Iceland"],correctAnswer:"d.Iceland"},{text:"3. When did East Germany begin building the Berlin Wall?",answers:["a. August 13, 1962","b.August 13, 1961","c.September 13, 1962","d.July 13, 1961"],correctAnswer:"b.August 13, 1961"},{text:"4.  Which is the oldest republic in the world?",answers:["a.Austria","b.Cuba","c.Argentina","d.San Marino"],correctAnswer:"d.San Marino"},{text:"5. The shortest war on record lasted ...?",answers:["a.1 hour","b.42 minutes","c.38 minutes","c.55 minutes"],correctAnswer:"c.38 minutes"}];function h(c){c.target.innerText===j[r].correctAnswer&&e.setScore(e.score+1),console.log("Current Score is:",e.score),r===j.length-1?i.push("/Score"):a(r+1)}return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"home_text",children:"Quiz"}),Object(s.jsx)("h3",{children:j[r].text}),Object(s.jsx)("div",{class:"container",children:Object(s.jsxs)("div",{class:"row row-cols-2",children:[Object(s.jsx)("h3",{children:Object(s.jsx)("div",{class:"col",children:Object(s.jsx)("a",{onClick:h,className:"btn btn-dark",children:j[r].answers[0]})})}),Object(s.jsx)("h3",{children:Object(s.jsx)("div",{class:"col",children:Object(s.jsx)("a",{onClick:h,className:"btn btn-dark",children:j[r].answers[1]})})}),Object(s.jsx)("h3",{children:Object(s.jsx)("div",{class:"col",children:Object(s.jsx)("a",{onClick:h,className:"btn btn-dark",children:j[r].answers[2]})})}),Object(s.jsx)("h3",{children:Object(s.jsx)("div",{class:"col",children:Object(s.jsx)("a",{onClick:h,className:"btn btn-dark",children:j[r].answers[3]})})})]})})]})})},b=t(17),u=t(18),x=t(20),O=t(19),p=function(e){Object(x.a)(t,e);var c=Object(O.a)(t);function t(){return Object(b.a)(this,t),c.apply(this,arguments)}return Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setScore(0)}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"home_text",children:"Score"}),Object(s.jsxs)("h2",{children:[" ",this.props.score," "]}),5===this.props.score&&Object(s.jsx)("h3",{children:"Perfect!"}),Object(s.jsx)("a",{href:"#/Quiz",className:"btn btn-dark",children:"Retake Quiz"})]})})}}]),t}(r.a.Component);var m=function(){var e=Object(n.useState)(0),c=Object(l.a)(e,2),t=c[0],r=c[1];return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(j.a,{basename:"/",children:Object(s.jsx)("div",{children:Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{path:"/Quiz",children:Object(s.jsx)(d,{score:t,setScore:r})}),Object(s.jsx)(o.a,{path:"/Score",children:Object(s.jsx)(p,{setScore:r,score:t})}),Object(s.jsx)(o.a,{path:"/",children:Object(s.jsx)(h,{})})]})})}),Object(s.jsx)("div",{})]})})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,r=c.getLCP,a=c.getTTFB;t(e),s(e),n(e),r(e),a(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),w()}},[[36,1,2]]]);
//# sourceMappingURL=main.563662e3.chunk.js.map