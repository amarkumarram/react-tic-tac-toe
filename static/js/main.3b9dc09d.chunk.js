(this["webpackJsonptictactoe-with-react-typescript-sass"]=this["webpackJsonptictactoe-with-react-typescript-sass"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),c=a(33),l=a.n(c),s=(a(39),a(40),a(6)),i=a(9),o=a(16),d=a(11),j=a(22);j.a.apps.length?j.a.app():j.a.initializeApp({apiKey:"AIzaSyBiRlApFE8Pylq9ntzqzDyHB9CWP-ZUGnw",authDomain:"amar-tictactoe.firebaseapp.com",projectId:"amar-tictactoe",storageBucket:"amar-tictactoe.appspot.com",messagingSenderId:"789612009205",appId:"1:789612009205:web:aa39f2365485fcccd497bc",measurementId:"G-VVK3LC9ZGC"});var m=j.a.firestore(),b=a(2);function u(e){var t=e.errorMsg,a=e.handlePlayerName,n=e.playerName,c=Object(r.useState)(Object(s.a)({},t)),l=Object(i.a)(c,2),j=l[0],m=l[1],u=Object(d.f)();Object(r.useEffect)((function(){m(Object(s.a)({},t))}),[t]);return Object(b.jsx)("div",{className:"flexContainer",children:Object(b.jsxs)("form",{className:"flexFormContainer",autoComplete:"off",children:[Object(b.jsx)(o.b,{to:"/play-remotely",children:"Play Remotely"}),Object(b.jsx)("div",{className:"turnInfo orSeparator",children:"OR"}),Object(b.jsx)("label",{children:"First Player Name:"}),Object(b.jsx)("input",{type:"text",placeholder:"Enter first player name",onChange:function(e){return a(e)},name:"firstPlayerName"}),Object(b.jsx)("div",{id:"firstPlayerError",className:"error",children:j.firstPlayerError}),Object(b.jsx)("label",{children:"Second Player Name:"}),Object(b.jsx)("input",{type:"text",placeholder:"Enter second player name",onChange:function(e){return a(e)},name:"secondPlayerName"}),Object(b.jsx)("div",{id:"secondPlayerError",className:"error",children:j.secondPlayerError}),Object(b.jsx)("button",{type:"button",onClick:function(){""==n.firstPlayerName?m(Object(s.a)(Object(s.a)({},j),{},{firstPlayerError:"Please enter valid first player name."})):""==n.secondPlayerName?m(Object(s.a)(Object(s.a)({},j),{},{secondPlayerError:"Please enter valid second player name."})):(m({firstPlayerError:"",secondPlayerError:""}),u.push({pathname:"/play-adjacently"}))},children:"Play"})]})})}function f(e){var t=e.playerName,a=e.playerPosition,n=e.setDocId,c=e.newGame;e.docId;Object(r.useEffect)((function(){n("")}),[]);var l=Object(d.f)();return Object(b.jsxs)(b.Fragment,{children:["first"==a?""!=t.secondPlayerName&&Object(b.jsxs)("h1",{className:"turnInfo",children:[t.secondPlayerName," has left the game!"]}):""!=t.firstPlayerName&&Object(b.jsxs)("h1",{className:"turnInfo",children:[t.firstPlayerName," has left the game!"]}),Object(b.jsxs)("h1",{className:"turnInfo zero-margin-top",children:["Go to ",Object(b.jsx)("span",{className:"menuContainer gameLeft",children:Object(b.jsx)("button",{onClick:function(){return c(),void l.push("/react-tic-tac-toe")},children:"Home"})})]})]})}var O=a(25);function y(e){var t=e.clickHandler,a=e.cellNumber;return Object(b.jsx)("div",{className:"gridCell gridCellValue",onClick:function(e){return t(e)},"data-cell":a})}a(51);function h(e){var t=e.resetGame,a=e.enableReset,n=e.playerName,c=e.handleCellClick,l=e.resultText,s=e.clickedCellArr,o=e.createNewGame,d=e.isRemotely,j=e.remoteLink,m=e.joinGameStatus,u=e.playerPosition,f=e.whoReset,O=n.firstPlayerName,h=n.secondPlayerName,x=Object(r.useState)("Copy Link"),p=Object(i.a)(x,2),N=p[0],g=p[1],P="Link Copied!";return Object(b.jsxs)(b.Fragment,{children:[d&&!m&&Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h3",{className:"zero-margin-bottom",children:"Joinging link:"}),Object(b.jsx)("h4",{className:"zero-margin-top zero-margin-bottom margin-top-ten",children:j}),Object(b.jsx)("button",{onClick:function(){return navigator.clipboard.writeText(j),g(P),void setTimeout((function(){g("Copy Link")}),2e3)},disabled:N==P,className:"copy-link margin-top-ten",children:N})]}),d&&m&&0==(null===s||void 0===s?void 0:s.length)?"first"==u&&n.secondPlayerName==f?Object(b.jsxs)("h2",{className:"turnInfo",children:[n.secondPlayerName," has reset the game!"]}):"second"==u&&n.firstPlayerName==f?Object(b.jsxs)("h2",{className:"turnInfo",children:[n.firstPlayerName," has reset the game!"]}):"":"",Object(b.jsxs)("div",{className:"grandParentGridContainer",children:[Object(b.jsxs)("div",{className:"menuContainer",children:[Object(b.jsx)("button",{onClick:function(){return o()},children:"New Game"}),Object(b.jsx)("button",{onClick:function(){return t()},disabled:!a,children:"Reset"})]}),Object(b.jsxs)("div",{className:"parentGridContainer",children:[Object(b.jsxs)("div",{className:"parentGridCell",children:[Object(b.jsx)("h2",{children:"First Player"}),Object(b.jsx)("h3",{children:O})]}),Object(b.jsxs)("div",{className:"gridContainer",children:[Object(b.jsx)(y,{clickHandler:c,cellNumber:"1"}),Object(b.jsx)(y,{clickHandler:c,cellNumber:"2"}),Object(b.jsx)(y,{clickHandler:c,cellNumber:"3"}),Object(b.jsx)(y,{clickHandler:c,cellNumber:"4"}),Object(b.jsx)(y,{clickHandler:c,cellNumber:"5"}),Object(b.jsx)(y,{clickHandler:c,cellNumber:"6"}),Object(b.jsx)(y,{clickHandler:c,cellNumber:"7"}),Object(b.jsx)(y,{clickHandler:c,cellNumber:"8"}),Object(b.jsx)(y,{clickHandler:c,cellNumber:"9"})]}),Object(b.jsxs)("div",{className:"parentGridCell",children:[Object(b.jsx)("h2",{children:"Second Player"}),Object(b.jsx)("h3",{children:h})]})]}),""!=l?Object(b.jsx)("h2",{className:"resultInfo",children:l}):d&&!m?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{className:"turnInfo zero-margin-bottom",children:"Kindly do not refresh the page."}),Object(b.jsx)("h4",{className:"turnInfo zero-margin-top zero-margin-bottom",children:"Waiting for second player to join"}),Object(b.jsx)("div",{className:"flex-center-margin",children:Object(b.jsx)("div",{className:"dot-typing"})})]}):d?"first"==u?Object(b.jsx)("h2",{className:"turnInfo",children:(null===s||void 0===s?void 0:s.length)%2==0?O+", it's your turn now.":h+" is paying..."}):"second"==u&&Object(b.jsx)("h2",{className:"turnInfo",children:(null===s||void 0===s?void 0:s.length)%2==0?O+" is paying...":h+", it's your turn now."}):Object(b.jsxs)("h2",{className:"turnInfo",children:[(null===s||void 0===s?void 0:s.length)%2==0?O:h,", it's your turn now."]})]})]})}function x(e){var t=e.handlePlayerName,a=e.formErrorMsg,r=e.generateLink,n=e.isDisabled,c=e.createNewGame;return Object(b.jsx)("div",{className:"flexContainer",children:Object(b.jsxs)("form",{className:"flexFormContainer",autoComplete:"off",children:[Object(b.jsx)("label",{children:"First Player Name:"}),Object(b.jsx)("input",{type:"text",placeholder:"Enter first player name",onChange:function(e){return t(e)},name:"firstPlayerName"}),Object(b.jsx)("div",{id:"firstPlayerError",className:"error",children:a.firstPlayerError}),Object(b.jsx)("button",{type:"button",onClick:function(){return r()},disabled:n,children:"Generate Link"}),Object(b.jsx)("div",{className:"turnInfo orSeparator",children:"OR"}),Object(b.jsx)("button",{onClick:function(){return c()},children:"Back"})]})})}function p(e){var t=e.handlePlayerName,a=e.formErrorMsg,n=e.disableJoinBtn,c=e.joinGame,l=(e.playerName,Object(d.g)().id),s=Object(r.useState)(""),j=Object(i.a)(s,2),u=(j[0],j[1],Object(r.useState)("")),f=Object(i.a)(u,2),O=f[0],y=f[1],h=Object(r.useState)(!1),x=Object(i.a)(h,2),p=x[0],N=x[1],g=Object(r.useState)(!1),P=Object(i.a)(g,2),v=P[0],C=P[1],k=Object(d.f)();Object(r.useEffect)((function(){m.collection("amar-tictactoe").doc(l).get().then((function(e){if(e.exists){var t=e.data(),a=null===t||void 0===t?void 0:t.second_player_name;y(a),""==a&&N(!0)}else C(!0)}))}),[]);return Object(b.jsx)(b.Fragment,{children:""!=O?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"turnInfo",children:"Link has expired!"}),Object(b.jsx)("h1",{className:"turnInfo zero-margin-top zero-margin-bottom",children:Object(b.jsx)(o.b,{to:"/play-remotely",children:"Generate New Link"})}),Object(b.jsx)("div",{className:"turnInfo orSeparator",children:"OR"}),Object(b.jsx)("h1",{className:"zero-margin-top",children:Object(b.jsx)(o.b,{to:"/",children:"Home"})})]}):p?Object(b.jsx)("div",{className:"flexContainer",children:Object(b.jsxs)("form",{className:"flexFormContainer",autoComplete:"off",children:[Object(b.jsx)("label",{children:"Second Player Name:"}),Object(b.jsx)("input",{type:"text",placeholder:"Enter second player name",onChange:function(e){return t(e)},name:"secondPlayerName"}),Object(b.jsx)("div",{id:"secondPlayerError",className:"error",children:a.secondPlayerError}),Object(b.jsx)("button",{type:"button",onClick:function(){"success"==c(l)&&k.push("/play-remotely")},disabled:n,children:"Join Game"}),Object(b.jsx)("div",{className:"turnInfo orSeparator",children:"OR"}),Object(b.jsx)(o.b,{to:"/react-tic-tac-toe",children:"Home"})]})}):v&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"turnInfo",children:"Link is invalid!"}),Object(b.jsxs)("h1",{className:"turnInfo zero-margin-top",children:["Go to ",Object(b.jsx)(o.b,{to:"/",children:"Home"})]})]})})}function N(e){var t=e.playerName,a=e.newGame,n=e.isRemotely,c=e.handlePlayerName,l=e.errorMsg,o=e.player,j=e.joinGame,u=e.isDisabled,f=e.generateLink,y=e.remoteLink,N=e.joinGameStatus,g=e.playerPosition,P=e.docId,v=e.setIsDisabled,C=Object(r.useState)([]),k=Object(i.a)(C,2),E=k[0],I=k[1],G=Object(r.useState)(""),S=Object(i.a)(G,2),w=S[0],_=S[1],L=Object(r.useState)([]),R=Object(i.a)(L,2),H=R[0],F=R[1],M=Object(r.useState)(!1),z=Object(i.a)(M,2),A=z[0],D=z[1],T=Object(r.useState)(""),B=Object(i.a)(T,2),W=B[0],J=B[1],K=Object(r.useState)([]),V=Object(i.a)(K,2),Z=V[0],q=V[1],Y=Object(r.useState)(""),U=Object(i.a)(Y,2),$=U[0],Q=U[1],X=Object(r.useState)(Object(s.a)({},l)),ee=Object(i.a)(X,2),te=ee[0],ae=ee[1],re=Object(r.useState)(0),ne=Object(i.a)(re,2),ce=ne[0],le=ne[1],se=Object(d.f)(),ie=function(){se.push("/react-tic-tac-toe"),n&&""!=P&&m.collection("amar-tictactoe").doc(P).update({left_game:!0}),a()};Object(r.useEffect)((function(){ae(l)}),[]),Object(r.useEffect)((function(){var e=null===E||void 0===E?void 0:E.length;if(e>=5){var t;t=e%2!=0?E.filter((function(e,t){return t%2==0})):E.filter((function(e,t){return t%2!=0}));var a=oe(t);Q(a)}""!=P&&n&&m.collection("amar-tictactoe").doc(P).onSnapshot((function(t){var a=t.data();I(null===a||void 0===a?void 0:a.clicked_cell_arr),(null===a||void 0===a?void 0:a.clicked_cell_arr.length)>0&&D(!0);for(var r=[],n=Array.from(document.getElementsByClassName("gridCell")),c=1;c<=n.length;c++){var l=null===a||void 0===a?void 0:a.clicked_cell_arr.indexOf(c);l>-1?(n[c-1].innerHTML=l%2==0?"<span class='cross'>x</span>":"<span>o</span>",r[c-1]=[].concat(Object(O.a)(H),[n[c-1]])):(n[c-1].innerHTML="",n[c-1].style.backgroundColor="#ffffff")}F(r),(null===a||void 0===a?void 0:a.left_game)&&(v(!1),se.push("/game-left")),le(null===a||void 0===a?void 0:a.reset_count),J(null===a||void 0===a?void 0:a.reset_by),0==e&&D(!1),_(null===a||void 0===a?void 0:a.result_text)}))}),[P,null===E||void 0===E?void 0:E.length]);var oe=function(e){var t="nothing";return-1!=e.indexOf(5)&&(-1!=e.indexOf(1)&&-1!=e.indexOf(9)?(t="winner",q([1,5,9])):-1!=e.indexOf(2)&&-1!=e.indexOf(8)?(t="winner",q([2,5,8])):-1!=e.indexOf(3)&&-1!=e.indexOf(7)?(t="winner",q([3,5,7])):-1!=e.indexOf(4)&&-1!=e.indexOf(6)&&(t="winner",q([4,5,6]))),-1!=e.indexOf(1)&&"nothing"==t&&(-1!=e.indexOf(2)&&-1!=e.indexOf(3)?(t="winner",q([1,2,3])):-1!=e.indexOf(4)&&-1!=e.indexOf(7)&&(t="winner",q([1,4,7]))),-1!=e.indexOf(9)&&"nothing"==t&&(-1!=e.indexOf(3)&&-1!=e.indexOf(6)?(t="winner",q([3,6,9])):-1!=e.indexOf(7)&&-1!=e.indexOf(8)&&(t="winner",q([7,8,9]))),"nothing"==t&&q([]),t},de=function(e){if(""!=w||n){if(""==w&&(!n||N)&&("first"==g&&(null===E||void 0===E?void 0:E.length)%2==0||"second"==g&&(null===E||void 0===E?void 0:E.length)%2!=0)){var t=parseInt(e.target.getAttribute("data-cell"));if(!isNaN(t)&&-1==E.indexOf(t)){var a=[].concat(Object(O.a)(E),[t]);I(a),D(!0);var r=a.length;e.target.innerHTML=r%2==0?"<span>o</span>":"<span class='cross'>x</span>";var c=[];c[parseInt(e.target.getAttribute("data-cell"))]=e.target,n&&m.collection("amar-tictactoe").doc(P).update({clicked_cell_arr:a}),F(c)}}}else{var l=parseInt(e.target.getAttribute("data-cell"));if(!isNaN(l)&&-1==E.indexOf(l)){var s=[].concat(Object(O.a)(E),[l]);I(s),D(!0);var i=s.length;e.target.innerHTML=i%2==0?"<span>o</span>":"<span class='cross'>x</span>";var o=[];o[parseInt(e.target.getAttribute("data-cell"))]=e.target,F(o)}}},je=function(){for(var e=Array.from(document.getElementsByClassName("gridCell")),a=0;a<e.length;a++)e[a].innerHTML="",e[a].style.backgroundColor="#ffffff";if(I([]),_(""),F([]),D(!1),Q(""),n){var r="";"first"==g?(r=t.firstPlayerName,J(t.firstPlayerName)):(r=t.secondPlayerName,J(t.secondPlayerName)),m.collection("amar-tictactoe").doc(P).update({clicked_cell_arr:[],reset_count:ce+1,reset_by:r,result_text:""})}else le(0)};return Object(r.useEffect)((function(){if("winner"==$){var e=E.length%2!=0?"".concat(t.firstPlayerName," Won!"):"".concat(t.secondPlayerName," Won!");e=n?"first"==g&&E.length%2!=0?"You Won!":"".concat(t.secondPlayerName," Won!"):"second"==g&&E.length%2==0?"You Won!":"".concat(t.firstPlayerName," Won!"),_(e);for(var a=Array.from(document.getElementsByClassName("gridCell")),r=1;r<=a.length;r++){Z.indexOf(r)>-1&&(a[r-1].style.backgroundColor="#66ffff")}m.collection("amar-tictactoe").doc(P).update({result_text:e})}else 9==E.length&&"nothing"==$&&(_("Match Draw!"),m.collection("amar-tictactoe").doc(P).update({result_text:"Match Draw!"}))}),[Z]),Object(b.jsx)(b.Fragment,{children:n?""==y||void 0==y?"first"==o?Object(b.jsx)(x,{handlePlayerName:c,formErrorMsg:te,generateLink:f,isDisabled:u,createNewGame:ie}):N?Object(b.jsx)(h,{resetGame:je,enableReset:A,playerName:t,handleCellClick:de,resultText:w,clickedCellArr:E,createNewGame:ie,isRemotely:n,remoteLink:y,joinGameStatus:N,playerPosition:g,whoReset:W}):Object(b.jsx)(p,{handlePlayerName:c,formErrorMsg:te,joinGame:j,playerName:t,disableJoinBtn:u}):Object(b.jsx)(h,{resetGame:je,enableReset:A,playerName:t,handleCellClick:de,resultText:w,clickedCellArr:E,createNewGame:ie,isRemotely:n,remoteLink:y,joinGameStatus:N,playerPosition:g,whoReset:W}):""!=t.firstPlayerName&&""!=t.secondPlayerName?Object(b.jsx)(h,{resetGame:je,enableReset:A,playerName:t,handleCellClick:de,resultText:w,clickedCellArr:E,createNewGame:ie,isRemotely:n,remoteLink:y}):se.push("/react-tic-tac-toe")})}function g(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"turnInfo",children:"Page Not Found"}),Object(b.jsxs)("h1",{className:"turnInfo zero-margin-top",children:["Go to ",Object(b.jsx)(o.b,{to:"/react-tic-tac-toe",children:"Home"})]})]})}function P(){var e=Object(r.useState)({firstPlayerName:"",secondPlayerName:""}),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)({firstPlayerError:"",secondPlayerError:""}),l=Object(i.a)(c,2),j=l[0],O=l[1],y=Object(r.useState)(!1),h=Object(i.a)(y,2),x=h[0],p=h[1],P=Object(r.useState)(!1),v=Object(i.a)(P,2),C=v[0],k=v[1],E=Object(r.useState)(""),I=Object(i.a)(E,2),G=I[0],S=I[1],w=Object(r.useState)(""),_=Object(i.a)(w,2),L=_[0],R=_[1],H=Object(r.useState)(""),F=Object(i.a)(H,2),M=F[0],z=F[1];Object(r.useEffect)((function(){n({firstPlayerName:"",secondPlayerName:""}),O({firstPlayerError:"",secondPlayerError:""})}),[]);var A=function(e){var t=e.target.value.trim();/^[a-z A-Z]+$/.test(t)?("firstPlayerName"==e.target.name?n(Object(s.a)(Object(s.a)({},a),{},{firstPlayerName:t})):n(Object(s.a)(Object(s.a)({},a),{},{secondPlayerName:t})),"firstPlayerName"==e.target.name?O(Object(s.a)(Object(s.a)({},j),{},{firstPlayerError:""})):O(Object(s.a)(Object(s.a)({},j),{},{secondPlayerError:""}))):("firstPlayerName"==e.target.name?n(Object(s.a)(Object(s.a)({},a),{},{firstPlayerName:""})):n(Object(s.a)(Object(s.a)({},a),{},{secondPlayerName:""})),"firstPlayerName"==e.target.name?O(Object(s.a)(Object(s.a)({},j),{},{firstPlayerError:"Please enter valid first player name."})):O(Object(s.a)(Object(s.a)({},j),{},{secondPlayerError:"Please enter valid second player name."})))},D=function(){n({firstPlayerName:"",secondPlayerName:""}),O({firstPlayerError:"",secondPlayerError:""}),R(""),p(!1),k(!1),z("")},T=function(e){""==a.secondPlayerName?O(Object(s.a)(Object(s.a)({},j),{},{secondPlayerError:"Please enter valid second player name."})):(p(!0),O({firstPlayerError:"",secondPlayerError:""}),z(e),m.collection("amar-tictactoe").doc(e).update({second_player_name:a.secondPlayerName}),m.collection("amar-tictactoe").doc(e).get().then((function(e){var t=e.data(),r=null===t||void 0===t?void 0:t.first_player_name;n(Object(s.a)(Object(s.a)({},a),{},{firstPlayerName:r}))})),k(!0),S("second"))},B=function(){if(""==a.firstPlayerName)O(Object(s.a)(Object(s.a)({},j),{},{firstPlayerError:"Please enter valid first player name."}));else{p(!0),O({firstPlayerError:"",secondPlayerError:""});var e="";m.collection("amar-tictactoe").add({first_player_name:a.firstPlayerName,second_player_name:"",clicked_cell_arr:[],reset_count:0,reset_by:"",result_text:"",left_game:!1}).then((function(t){e=window.location.href+"/join/"+t.id,z(t.id),R(e),m.collection("amar-tictactoe").doc(t.id).onSnapshot((function(e){var t=e.data(),r=null===t||void 0===t?void 0:t.second_player_name;""!=r&&(n(Object(s.a)(Object(s.a)({},a),{},{secondPlayerName:r})),k(!0),S("first"))}))}))}};return Object(b.jsx)(o.a,{children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/react-tic-tac-toe",render:function(e){return Object(b.jsx)(u,{errorMsg:j,handlePlayerName:A,playerName:a})}}),Object(b.jsx)(d.a,{exact:!0,path:"/play-adjacently",render:function(e){return Object(b.jsx)(N,{playerName:a,newGame:D,handlePlayerName:A,errorMsg:j,isRemotely:!1})}}),Object(b.jsx)(d.a,{exact:!0,path:"/play-remotely",render:function(e){return Object(b.jsx)(N,{playerName:a,newGame:D,handlePlayerName:A,errorMsg:j,isRemotely:!0,player:"first",joinGame:T,isDisabled:x,joinGameStatus:C,generateLink:B,remoteLink:L,playerPosition:G,docId:M,setIsDisabled:p})}}),Object(b.jsx)(d.a,{exact:!0,path:"/play-remotely/join/:id?",render:function(e){return Object(b.jsx)(N,{playerName:a,newGame:D,handlePlayerName:A,errorMsg:j,isRemotely:!0,player:"second",joinGame:T,isDisabled:x,joinGameStatus:C,generateLink:B,remoteLink:L,playerPosition:G,docId:M,setIsDisabled:p})}}),Object(b.jsx)(d.a,{exact:!0,path:"/game-left",render:function(e){return Object(b.jsx)(f,{playerName:a,playerPosition:G,setDocId:z,newGame:D,docId:M})}}),Object(b.jsx)(d.a,{exact:!0,component:g})]})})}function v(){return Object(b.jsx)("div",{className:"screenCenter",children:Object(b.jsx)(P,{})})}var C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),r(e),n(e),c(e),l(e)}))};l.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),C()}},[[52,1,2]]]);
//# sourceMappingURL=main.3b9dc09d.chunk.js.map