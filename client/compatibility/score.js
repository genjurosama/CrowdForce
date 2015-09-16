/*! score.js ~ (c) 2014 Nic Mulvaney */
    /*! Compiled @ 2014-10-02 15:40 */
!function(){var a,b,c,d=function(b){a=this._merge(this._defaults,b||{}),this.set(this._get().score)};d.prototype={version:"0.0.7",set:function(c){if(!Object.keys(a).length)throw"No default settings found";var d=void 0!==c?"number"==typeof c||"string"==typeof c?c:"object"==typeof c&&"score"in c?c.score:0:0;d=parseFloat(d);var e,f,g=0,h=a.levels.length;for(var i in a.levels){if(e=a.levels[i],d<e.checkmark){f=a.levels[i-1];break}g+=e.checkmark}f||(i=h,f=a.levels[h-1]);var j=d-f.checkmark,k=e.checkmark-f.checkmark,l=(j/k*100).toFixed(2);l=isFinite(l)?l:100;var m=this._restrict(d/a.levels[h-1].checkmark*100).toFixed(2),n=a.level!==i;return a.level=i,b=this._merge({score:d,level:i,levelscore:j,levelprogress:l,leveltotal:k,totalprogress:m,levelup:n,totallevels:a.levels.length,prestige:b.prestige||0},f),n&&this._callback(a.callback,b),this._save(),this},increment:function(c){return this.set(b.score+(c||1)*a.multiplier),this},decrement:function(c){return this.set(b.score-(c||1)*a.multiplier),this},multiplier:function(b,d,e){return a.multiplier=b,d&&(clearTimeout(c),c=setTimeout(function(){a.multiplier=1,this._callback(e)},d)),this},prestige:function(){return b.totalprogress>=100&&(b.prestige++,this.set(0)),this},scorecard:function(){return b},_restrict:function(a){return Math.max(Math.min(a,100),0)},_merge:function(a,b){for(var c in b)a[c]=b[c];return a},_callback:function(a,b){a&&a(b)},_save:function(){return a.persistant?localStorage.setItem("sjsscore",JSON.stringify(b)):!1},_get:function(){var c={score:0,prestige:0};return b=a.persistant?JSON.parse(localStorage.getItem("sjsscore"))||c:c},_defaults:{}},"undefined"!=typeof module&&module.exports?module.exports=d:window.Score=d}(),Score.prototype._defaults={level:0,score:0,multiplier:1,persistant:!0,levels:[{checkmark:0,status:"turtle",quote:"You're just a little newbie"},{checkmark:50,status:"sheep",quote:"You're certainly not following the herd"},{checkmark:150,status:"pig",quote:"Oh my god, smokey bacon!"},{checkmark:300,status:"rabbit",quote:"Ok, I'll admit you're a speed deamon"},{checkmark:600,status:"cat",quote:"Your powers are strong my friend"},{checkmark:1200,status:"octopus",quote:"Your reach is far"},{checkmark:2e3,status:"bee",quote:"The busiest player i've ever seen"},{checkmark:2500,status:"horse",quote:"Oh boy, you're a powerful stallion"},{checkmark:3e3,status:"gorilla",quote:"You're a true survivor, grrr!"},{checkmark:4e3,status:"dolphin",quote:"You've arrived! you will be known forever as a Legend"}],callback:function(){}};