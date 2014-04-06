var d3Api = [
  "d3.select",
  "d3.selectAll",
  "d3.selection",
  "d3.event",
  "d3.mouse",
  "d3.touch",
  "d3.touches",
  "d3.transition",
  "d3.ease",
  "d3.timer",
  "d3.timer.flush",
  "d3.interpolate",
  "d3.interpolateNumber",
  "d3.interpolateRound",
  "d3.interpolateString",
  "d3.interpolateRgb",
  "d3.interpolateHsl",
  "d3.interpolateLab",
  "d3.interpolateHcl",
  "d3.interpolateArray",
  "d3.interpolateObject",
  "d3.interpolateTransform",
  "d3.interpolateZoom",
  "d3.interpolators",
  "d3.ascending",
  "d3.descending",
  "d3.min",
  "d3.max",
  "d3.extent",
  "d3.sum",
  "d3.mean",
  "d3.median",
  "d3.quantile",
  "d3.bisect",
  "d3.bisectRight",
  "d3.bisectLeft",
  "d3.bisector",
  "d3.shuffle",
  "d3.permute",
  "d3.zip",
  "d3.transpose",
  "d3.pairs",
  "d3.keys",
  "d3.values",
  "d3.entries",
  "d3.merge",
  "d3.range",
  "d3.nest",
  "d3.map",
  "d3.set",
  "d3.random.normal",
  "d3.random.logNormal",
  "d3.random.bates",
  "d3.random.irwinHall",
  "d3.transform",
  "d3.xhr",
  "d3.text",
  "d3.json",
  "d3.html",
  "d3.xml",
  "d3.csv",
  "d3.tsv",
  "d3.format",
  "d3.formatPrefix",
  "d3.requote",
  "d3.round",
  "d3.csv",
  "d3.csv",
  "d3.csv.parse",
  "d3.csv.parseRows",
  "d3.csv.format",
  "d3.csv.formatRows",
  "d3.tsv",
  "d3.tsv.parse",
  "d3.tsv.parseRows",
  "d3.tsv.format",
  "d3.tsv.formatRows",
  "d3.dsv",
  "d3.locale",
  "d3.rgb",
  "d3.hsl",
  "d3.lab",
  "d3.hcl",
  "d3.ns.prefix",
  "d3.ns.qualify",
  "d3.functor",
  "d3.rebind",
  "d3.dispatch",
  "d3.scale",
  "d3.scale.linear",
  "d3.scale.sqrt",
  "d3.scale.pow",
  "d3.scale.log",
  "d3.scale.quantize",
  "d3.scale.threshold",
  "d3.scale.quantile",
  "d3.scale.identity",
  "d3.scale.ordinal",
  "d3.scale.category",
  "d3.scale.category",
  "d3.scale.category",
  "d3.scale.category",
  "d3.svg",
  "d3.svg.line",
  "d3.svg.line.radial",
  "d3.svg.area",
  "d3.svg.area.radial",
  "d3.svg.arc",
  "d3.svg.symbol",
  "d3.svg.symbolTypes",
  "d3.svg.chord",
  "d3.svg.diagonal",
  "d3.svg.diagonal.radial",
  "d3.svg.axis",
  "d3.svg.brush",
  "d3.time",
  "d3.time.format",
  "d3.time.format.multi",
  "d3.time.format.utc",
  "d3.time.format.iso",
  "d3.time.scale",
  "d3.time.interval",
  "d3.time.day",
  "d3.time.days",
  "d3.time.dayOfYear",
  "d3.time.hour",
  "d3.time.hours",
  "d3.time.minute",
  "d3.time.minutes",
  "d3.time.month",
  "d3.time.months",
  "d3.time.second",
  "d3.time.seconds",
  "d3.time.sunday",
  "d3.time.sundays",
  "d3.time.sundayOfYear",
  "d3.time.monday",
  "d3.time.mondays",
  "d3.time.mondayOfYear",
  "d3.time.tuesday",
  "d3.time.tuesdays",
  "d3.time.tuesdayOfYear",
  "d3.time.wednesday",
  "d3.time.wednesdays",
  "d3.time.wednesdayOfYear",
  "d3.time.thursday",
  "d3.time.thursdays",
  "d3.time.thursdayOfYear",
  "d3.time.friday",
  "d3.time.fridays",
  "d3.time.fridayOfYear",
  "d3.time.saturday",
  "d3.time.saturdays",
  "d3.time.saturdayOfYear",
  "d3.time.week",
  "d3.time.weeks",
  "d3.time.weekOfYear",
  "d3.time.year",
  "d3.time.years",
  "d3.layout",
  "d3.layout.bundle",
  "d3.layout.chord",
  "d3.layout.cluster",
  "d3.layout.force",
  "d3.layout.hierarchy",
  "d3.layout.histogram",
  "d3.layout.pack",
  "d3.layout.partition",
  "d3.layout.pie",
  "d3.layout.stack",
  "d3.layout.tree",
  "d3.layout.treemap",
  "d3.geo",
  "d3.geo.path",
  "d3.geo.graticule",
  "d3.geo.circle",
  "d3.geo.area",
  "d3.geo.bounds",
  "d3.geo.centroid",
  "d3.geo.distance",
  "d3.geo.interpolate",
  "d3.geo.length",
  "d3.geo.rotation",
  "d3.geo.projection",
  "d3.geo.projectionMutator",
  "d3.geo.albers",
  "d3.geo.albersUsa",
  "d3.geo.azimuthalEqualArea",
  "d3.geo.azimuthalEquidistant",
  "d3.geo.conicConformal",
  "d3.geo.conicEquidistant",
  "d3.geo.conicEqualArea",
  "d3.geo.equirectangular",
  "d3.geo.gnomonic",
  "d3.geo.mercator",
  "d3.geo.orthographic",
  "d3.geo.stereographic",
  "d3.geo.azimuthalEqualArea.raw",
  "d3.geo.azimuthalEquidistant.raw",
  "d3.geo.conicConformal.raw",
  "d3.geo.conicEquidistant.raw",
  "d3.geo.conicEqualArea.raw",
  "d3.geo.equirectangular.raw",
  "d3.geo.gnomonic.raw",
  "d3.geo.mercator.raw",
  "d3.geo.orthographic.raw",
  "d3.geo.stereographic.raw",
  "d3.geo.transverseMercator.raw",
  "d3.geo.stream",
  "d3.geo.transform",
  "d3.geo.clipExtent",
  "d3.geom",
  "d3.geom.voronoi",
  "d3.geom.quadtree",
  "d3.geom.polygon",
  "d3.geom.hull",
  "d3.behavior",
  "d3.behavior.drag",
  "d3.behavior.zoom"
];

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });

    cb(matches);
  };
};

$(function() {

  // make typeahead search box
  $('#apiSearchBox').typeahead({
    hint: true,
    minLength: 3,
    highlight: true,
  } , {
    name: 'd3Api',
    source: substringMatcher(d3Api)
  }).on('typeahead:selected', function(ev) {

    var results = $('section#results');


    results.empty();

    var selectedApi = $(ev.target).val();

    // fetch api file
    var url = "https://s3.amazonaws.com/d3examples.bocoup.com/api/" +
      selectedApi + ".json";

    $.getJSON(url, function(data) {

      if (Object.keys(data.blocks).length) {
        Object.keys(data.blocks).forEach(function(blockId) {
          var block = data.blocks[blockId];

          // <a class="gist" href="<%= url %>" style="background-image: url(<%= thumbnail %>);">
          //   <span class="description">
          //     <%= description %>
          //   </span>
          // </a>

          var a = $('<a>', {
            "class" : 'gist',
            href : block.thumbnail.length > 0 ?
              "http://bl.ocks.org/" + block.userId + "/" + blockId :
              "http://gist.github.com/" + blockId,
          });
          if (block.thumbnail.length) {
            a.css({
              "background-image" : "url(" + block.thumbnail + ")"
            });
          }

          var span = $('<span>', {"class" : "description"})
            .text(block.description !== null ?
              block.description :
              "No title provided"
            );
          span.appendTo(a);
          a.appendTo(results);

        });
      } else {
        console.log("none found");
      }
    }).fail(function(err) {
      $('<div>', { "class" : "error" })
        .text("There are no examples of this at present")
        .appendTo("#results");
    });
  });
});