(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Agent 3","image":"https://i.imgur.com/CaI9lLt.png"},{"id":2,"name":"Agent 4","image":"https://i.imgur.com/HMORuoz.png"},{"id":3,"name":"Agent 8","image":"https://i.imgur.com/ggvR7Dq.png"},{"id":4,"name":"Marina","image":"https://i.imgur.com/puxscxN.jpg"},{"id":5,"name":"Octoling","image":"https://i.imgur.com/v5NDsab.png"},{"id":6,"name":"Grizz","image":"https://i.imgur.com/LQqWf3m.jpg"},{"id":7,"name":"Captain Cuddlefish","image":"https://i.imgur.com/BzVAyJ9.jpg"},{"id":8,"name":"Dj Octavio","image":"https://i.imgur.com/qn5snfn.png"},{"id":9,"name":"Cucumber","image":"https://i.imgur.com/7ShEX17.png"},{"id":10,"name":"Pearl","image":"https://i.imgur.com/GUCif10.png"},{"id":11,"name":"Marie","image":"https://i.imgur.com/lbTqrRq.png"},{"id":12,"name":"Callie","image":"https://i.imgur.com/P5yvGtK.png"}]')},,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(3),i=a.n(c),o=a(4),s=a(5),m=a(7),l=a(6);a(13);var u=function(e){return n.a.createElement("div",{className:"image col-2",onClick:function(){return e.clickedFriend(e.id)}},n.a.createElement("img",{className:"card-1",alt:e.name,src:e.image}))},g=(a(14),function(e){return n.a.createElement("div",{className:"jumbotron text-center"},n.a.createElement("h1",{className:"display-4 text-center title"},"Memory Game"),n.a.createElement("p",{className:"lead text-center"},"Click on an image to earn points, but only once!"),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("p",{className:"result"},e.result),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("button",{type:"button",className:"btn btn-primary score"},"Score: ",n.a.createElement("span",{className:"badge badge-light"},e.currentScore)),n.a.createElement("button",{type:"button",className:"btn btn-primary top-score"},"Top Score: ",n.a.createElement("span",{className:"badge badge-light"},e.topScore)))}),p=a(1),d=function(e){for(var t=e.length;t>0;){var a=Math.floor(Math.random()*t),r=e[--t];e[t]=e[a],e[a]=r}return e},h=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).clickedFriend=function(t){console.log("Picture clicked with id: ".concat(t)),e.state.clicked.includes(t)?e.resetGame():(e.pointIncrease(),e.state.clicked.push(t),e.setState({gameOver:!1}))},e.pointIncrease=function(){var t=e.state.currentScore+1;console.log("the score is ".concat(t)),t===e.state.friends.length?e.setState({result:"You win! Start clicking to play again!",topScore:t,currentScore:0,clicked:[],friends:p,gameOver:!1}):t>e.state.topScore?e.setState({topScore:t,currentScore:t,result:"Correct! New high score!"}):e.setState({currentScore:t,result:"Correct!"}),e.resetFriendArray()},e.resetGame=function(){e.setState({points:0,currentScore:0,topScore:e.state.topScore,result:"You Lose! click a card to start over",gameOver:!0,clicked:[],friends:p}),console.log("Game over? ",e.state.gameOver),e.resetFriendArray()},e.resetFriendArray=function(){var t=d(p);e.setState({friends:t})},e.state={currentScore:0,topScore:0,result:"",clicked:[],friends:p,gameFinished:!1},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement(g,{topScore:this.state.topScore,currentScore:this.state.currentScore,result:this.state.result}),n.a.createElement("div",{className:"row"},this.state.friends.map((function(t){return n.a.createElement(u,{clickedFriend:e.clickedFriend,id:t.id,key:t.id,image:t.image})}))))}}]),a}(r.Component);a(15);i.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.53d2df7a.chunk.js.map