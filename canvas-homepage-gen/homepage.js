// Constants
//
numCol = 4;

// pre and post
//
preHTML = `
<div style="width: 90%;margin: 0 auto 0 auto;">
  <div class="content-box">
    <div class="grid-row between-xs">
`
postHTML = `
    </div>
  </div>
</div>
`

// read template
//
// templateHTML = `
// <div id="flexbox" style="display:flex;">
//
//   <div style="width:25%;padding:10px 30px 10px 30px;">
//     <div style="text-align:center;">
//       <div style="display: inline-block;width:100%; background-color:#0071bc; text-align: center; font-size:20pt; color:#ffffff; ">
//         <a href="{{link1}}">
//           <strong>{{num1}}</strong>
//         </a>
//       </div>
//     </div>
//     <div style="text-align:center;padding:20px 0 20px 0;">
//       <h4>
//         <a href="{{link1}}" style="color: #757575;">
//           <strong>{{text1}}</strong></a>
//       </h4>
//       {{date1}}
//     </div>
//   </div>
//
//   <div style="width:25%;padding:10px 30px 10px 30px;">
//     <div style="text-align:center;">
//       <div style="display: inline-block;width:100%; background-color:#0071bc; text-align: center; font-size:20pt; color:#ffffff; ">
//         <a href="{{link2}}">
//           <strong>{{num2}}</strong>
//         </a>
//       </div>
//     </div>
//     <div style="text-align:center;padding:20px 0 20px 0;">
//       <h4>
//         <a href="{{link2}}" style="color: #757575;">
//           <strong>{{text2}}</strong></a>
//       </h4>
//       {{date2}}
//     </div>
//   </div>
//
//   <div style="width:25%;padding:10px 30px 10px 30px;">
//     <div style="text-align:center;">
//       <div style="display: inline-block;width:100%; background-color:#0071bc; text-align: center; font-size:20pt; color:#ffffff; ">
//         <a href="{{link3}}">
//           <strong>{{num3}}</strong>
//         </a>
//       </div>
//     </div>
//     <div style="text-align:center;padding:20px 0 20px 0;">
//       <h4>
//         <a href="{{link3}}" style="color: #757575;">
//           <strong>{{text3}}</strong></a>
//       </h4>
//       {{date3}}
//     </div>
//   </div>
//
//   <div style="width:25%;padding:10px 30px 10px 30px;">
//     <div style="text-align:center;">
//       <div style="display: inline-block;width:100%; background-color:#0071bc; text-align: center; font-size:20pt; color:#ffffff; ">
//         <a href="{{link4}}">
//           <strong>{{num4}}</strong>
//         </a>
//       </div>
//     </div>
//     <div style="text-align:center;padding:20px 0 20px 0;">
//       <h4>
//         <a href="{{link4}}" style="color: #757575;">
//           <strong>{{text4}}</strong></a>
//       </h4>
//       {{date4}}
//     </div>
//   </div>
//
// </div>
// `

templateHTML = `


      <div class="col-xs-3" style="min-width:225px;padding:10px 30px 10px 30px;">
        <div style="text-align:center;">
          <div style="display: inline-block;width:100%; background-color:#0071bc; text-align: center; font-size:20pt;">
            <a href="{{link1}}" style="color:#ffffff;text-decoration:none;">
              <strong>{{num1}}</strong>
            </a>
          </div>
        </div>
        <div style="text-align:center;padding:20px 0 20px 0;">
          <h4>
            <a href="{{link1}}" style="color: #757575;">
              <strong>{{text1}}</strong></a>
          </h4>
          {{date1}}
        </div>
      </div>

      <div class="col-xs-3" style="min-width:225px;padding:10px 30px 10px 30px;">
        <div style="text-align:center;">
          <div style="display: inline-block;width:100%; background-color:#0071bc; text-align: center; font-size:20pt;">
            <a href="{{link2}}" style="color:#ffffff;text-decoration:none;">
              <strong>{{num2}}</strong>
            </a>
          </div>
        </div>
        <div style="text-align:center;padding:20px 0 20px 0;">
          <h4>
            <a href="{{link2}}" style="color: #757575;">
              <strong>{{text2}}</strong></a>
          </h4>
          {{date2}}
        </div>
      </div>

      <div class="col-xs-3" style="min-width:225px;padding:10px 30px 10px 30px;">
        <div style="text-align:center;">
          <div style="display: inline-block;width:100%; background-color:#0071bc; text-align: center; font-size:20pt;">
            <a href="{{link3}}" style="color:#ffffff;text-decoration:none;">
              <strong>{{num3}}</strong>
            </a>
          </div>
        </div>
        <div style="text-align:center;padding:20px 0 20px 0;">
          <h4>
            <a href="{{link3}}" style="color: #757575;">
              <strong>{{text3}}</strong></a>
          </h4>
          {{date3}}
        </div>
      </div>

      <div class="col-xs-3" style="min-width:225px;padding:10px 30px 10px 30px;">
        <div style="text-align:center;">
          <div style="display: inline-block;width:100%; background-color:#0071bc; text-align: center; font-size:20pt;">
            <a href="{{link4}}" style="color:#ffffff;text-decoration:none;">
              <strong>{{num4}}</strong>
            </a>
          </div>
        </div>
        <div style="text-align:center;padding:20px 0 20px 0;">
          <h4>
            <a href="{{link4}}" style="color: #757575;">
              <strong>{{text4}}</strong></a>
          </h4>
          {{date4}}
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
  var colCount = 0;
  var totalOutput = "";
  var outputChunk = templateHTML;
  for (i=0; i<table.length; i++) {
    if (colCount >= numCol) {
        totalOutput += outputChunk;
        outputChunk = templateHTML;
        colCount = 0;
    }
    // increment column counter
    colCount++;
    // replace colCount with appropriate table item
    // Number
    var token = "{{num" + colCount + "}}";
    console.log("token:", token, "replaced with", table[i]["number"]);
    outputChunk = outputChunk.replaceAll(token, table[i]["number"]);
    // Link
    var token = "{{link" + colCount + "}}";
    console.log("token:", token, "replaced with", table[i]["link"]);
    outputChunk = outputChunk.replaceAll(token, table[i]["link"]);
    // Text
    var token = "{{text" + colCount + "}}";
    console.log("token:", token, "replaced with", table[i]["title"]);
    outputChunk = outputChunk.replaceAll(token, table[i]["title"]);
    // Date
    var token = "{{date" + colCount + "}}";
    console.log("token:", token, "replaced with", table[i]["date"]);
    outputChunk = outputChunk.replaceAll(token, table[i]["date"]);
  }
  if (colCount < numCol) {
    // remove any remaining tokens
    outputChunk = outputChunk.replace(/{{[^}]*}}/g, '');
    // add the last bit to
    totalOutput += outputChunk;
  }
  $("#results").text(preHTML + totalOutput + postHTML);
}
