(this.webpackJsonpmyreact2=this.webpackJsonpmyreact2||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c),o=(a(14),a(15),a(8)),m=a(1),s=a(2),i=a(4),u=a(3),h=function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Job"),l.a.createElement("th",null,"Remove"),l.a.createElement("th",null)))},d=function(e){var t=e.characterData.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",{className:"rowName"},t.name),l.a.createElement("td",{className:"rowJob"},t.job),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")),l.a.createElement("td",null,l.a.createElement("button",{class:"icon-edit",onClick:function(){return function(t){document.getElementsByClassName("icon-edit")[t].style.display="none",document.getElementsByClassName("icon-cancel")[t].style.display="block",document.getElementsByClassName("icon-save")[t].style.display="block";var a=e.characterData[t].name,n=e.characterData[t].job;document.getElementsByClassName("rowName")[t].innerHTML="<td><input type='text' value='"+a+"'/></td>",document.getElementsByClassName("rowJob")[t].innerHTML="<td><input type='text' value='"+n+"'/></td>"}(a)}},l.a.createElement("img",{alt:"",src:"https://image.flaticon.com/icons/svg/66/66761.svg"})),l.a.createElement("button",{class:"icon-cancel",onClick:function(){return function(e){document.getElementsByClassName("icon-edit")[e].style.display="block",document.getElementsByClassName("icon-cancel")[e].style.display="none",document.getElementsByClassName("icon-save")[e].style.display="none"}(a)}},l.a.createElement("img",{alt:"",src:"https://image.flaticon.com/icons/svg/66/66847.svg"})),l.a.createElement("button",{class:"icon-save",onClick:function(){return function(e){document.getElementsByClassName("icon-edit")[e].style.display="block",document.getElementsByClassName("icon-cancel")[e].style.display="none",document.getElementsByClassName("icon-save")[e].style.display="none"}(a)}},l.a.createElement("img",{alt:"",src:"https://www.flaticon.com/premium-icon/icons/svg/2767/2767140.svg"}))))}));return l.a.createElement("tbody",null,t)},b=function(e){var t=e.characterData,a=e.removeCharacter;return l.a.createElement("table",null,l.a.createElement(h,null),l.a.createElement(d,{characterData:t,removeCharacter:a}))},y=a(7),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).initialState={name:"",job:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(y.a)({},n,l))},e.submitForm=function(){""===document.getElementById("name").value||""===document.getElementById("job").value?alert("Name as well as Job field must be filled"):document.getElementById("name").value.match("^[a-zA-Z ]*$")?document.getElementById("job").value.match("^[a-zA-Z ]*$")?(e.props.handleSubmit(e.state),e.setState(e.initialState)):alert("Job title should be Alphabetic only"):alert("Name should be Alphabetic only")},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"job"},"Job"),l.a.createElement("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),l.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),a}(l.a.Component),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={characters:[]},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(o.a)(e.state.characters),[t])})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.characters;return l.a.createElement("div",{className:"container"},l.a.createElement(b,{characterData:e,removeCharacter:this.removeCharacter}),l.a.createElement(E,{handleSubmit:this.handleSubmit}))}}]),a}(l.a.Component);r.a.render(l.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.80638034.chunk.js.map