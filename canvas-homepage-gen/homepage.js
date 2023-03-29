// Constants
//
numCol = 1;

// pre and post
//
preHTML = `
<!-- DON'T CHANGE ANYTHIGN ABOVE HERE -->
<!-- BEGIN SCHEDULE -->
<div style="width: 90%;margin: 0 auto 0 auto;">
  <div class="content-box">
`
postHTML = `
  </div>
</div>
<!-- END SCHEDULE -->
`

templateHTML = `

      <div class="grid-row" style="margin:0;margin-bottom:5px;">
        <div class="col" style="min-width:100px;text-align:center;">
          <div style="display:inline-block;width:100%;background-color:#0071bc;text-align:center;font-size:20pt;">
            <a href="{{link}}" style="color:#ffffff;text-decoration:none;">
              <strong>{{num}}</strong>
            </a>
          </div>
        </div>
        <div class="col" style="text-align:left;padding-left:20px;padding-top: 8px;">
          {{date}}
        </div>
        <div class="col" style="text-align:left;padding-left:20px;padding-top: 8px;">
          <div style="display:inline-block;width:100%;font-size:14pt;font-weight:bold;">
            <a href="{{link}}">
              <strong>{{text}}</strong></a>
          </div>
        </div>
      </div>
`

// add trigger
//
$("#convert").click(function(){
  var input = $("#tab-table").val();
  console.log(input);
  var lines = input.split('\n');
  var header = lines.shift().split('\t');
  var parsedLines = [];
  lines.map(function(item){
      var tabs = item.split('\t');
      obj = {};
      for (i=0; i<header.length; i++) {
        obj[header[i].toLowerCase()] = tabs[i];
      }
      parsedLines.push(obj);
    });
  console.log(parsedLines);
  convert(parsedLines);
})

// a better string replace
// https://stackoverflow.com/questions/2116558/fastest-method-to-replace-all-instances-of-a-character-in-a-string
//
String.prototype.replaceAll = function(str1, str2, ignore)
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

// convert
//
function convert(table) {
  var totalOutput = "";
  for (i=0; i<table.length; i++) {
    var outputChunk = templateHTML;
    // replace colCount with appropriate table item
    // Number
    var token = "{{num}}";
    console.log("token:", token, "replaced with", table[i]["number"]);
    outputChunk = outputChunk.replaceAll(token, table[i]["number"]);
    // Link
    var token = "{{link}}";
    console.log("token:", token, "replaced with", table[i]["link"]);
    outputChunk = outputChunk.replaceAll(token, table[i]["link"]);
    // Text
    var token = "{{text}}";
    console.log("token:", token, "replaced with", table[i]["title"]);
    outputChunk = outputChunk.replaceAll(token, table[i]["title"]);
    // Date
    var token = "{{date}}";
    console.log("token:", token, "replaced with", table[i]["date"]);
    outputChunk = outputChunk.replaceAll(token, table[i]["date"]);
    totalOutput += outputChunk;
  }
  // remove any remaining tokens
  totalOutput = totalOutput.replace(/{{[^}]*}}/g, '');
  $("#results").text(preHTML + totalOutput + postHTML);
  $("#status1").text("Generated.");
}

$("#copy").click(function(){
    $("#results").select();
    document.execCommand('copy');
    $("#status2").text("Copied.");
});
