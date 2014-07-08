define(["ember"], function(Ember){

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<section id=\"main\">\n\n  <header>\n    &dotsquare; bl.ocksplorer.org\n  </header>\n\n  <section id=\"search\">\n    <p>\n      Many examples of <a href=\"http://d3js.org/\">d3.js</a> usage are posted daily on <a href=\"http://bl.ocks.org/\">http://bl.ocks.org/</a>, however they aren't easy to find. If you are looking for a specific example of how to use a particular API call, you may be out of luck... until now.\n    </p>\n\n    <p>\n      Type any d3 API call below and see the blocks (or gists) that use it.\n    </p>\n    <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searchSubmit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "typeahead", {hash:{
    'search': ("search"),
    'value': ("search.query"),
    'application': ("controller")
  },hashTypes:{'search': "ID",'value': "ID",'application': "ID"},hashContexts:{'search': depth0,'value': depth0,'application': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n      <button type=\"submit\">Go</button>\n      <div class=\"small\">Start typing any d3 api name, for example <code>d3.svg.axis</code>...</div>\n    </form>\n  </section>\n\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <section id=\"add\">\n    Are we missing some blocks? That's because we are scanning for specific users! <br>You should <a href=\"https://docs.google.com/forms/d/1VdDdycNuqJVw3Ik6-ZLj6v7X9g2vWlw_RCC3RCfD9-I/viewform\">submit a github username</a> for us to scan. Scans happen every 4 hours so you won't see your changes right away.\n    <br>\n    <br>\n    Our data contains more information than we are showing. It includes co-occurance data between different API calls. If you'd like to download all of it, be our guest. You can get it <a href=\"https://s3.amazonaws.com/d3examples.bocoup.com/api/api.zip\">here</a>.\n  </section>\n\n  <footer>\n    Brought to you by <a href=\"http://ireneros.com\">Irene Ros</a> and <a href=\"http://bocoup.com\">Bocoup</a>. <br>\n    Thanks go out to <a href=\"http://tbranyen.com\">Tim Branyen</a>, <a href=\"https://github.com/tkellen\">Tyler Kellen</a>, <a href=\"http://www.brendanmcloughlin.com/\">Brendan McLoughlin</a> and <a href=\"https://twitter.com/Elijah_Meeks\">Elijah Meeks</a>.\n  </footer>\n\n</section>\n\n<script>\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create', 'UA-49782744-1', 'ocksplorer.org');\n  ga('send', 'pageview');\n\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<h3>No blocks found for for <em>");
  stack1 = helpers._triageMustache.call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</em>.</h3>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<br>Loading... <br/>\n<img src=\"/img/preload.gif\">\n");
  
});

Ember.TEMPLATES["search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <a class=\"gist\" href=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "block.url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" style=\"background-image: url(");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "block.thumbnail", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(");\">\n    <span class=\"description\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "block.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <span class=\"user\">\n        <br>by ");
  stack1 = helpers._triageMustache.call(depth0, "block.userId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </span>\n    </span>\n  </a>\n");
  return buffer;
  }

  data.buffer.push("<h3>Results for \"");
  stack1 = helpers._triageMustache.call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"</h3>\n");
  stack1 = helpers.each.call(depth0, "block", "in", "blocks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

});