// Constants
//
numCol = 4;

// pre and post
//
preHTML = `
`
postHTML = `
`

templateHTML = `

      <div class="col-xs-3" style="min-width:225px;padding:10px 30px 10px 30px;">
        <div style="text-align:center;">
          <div style="display: inline-block;width:100%; background-color:#0071bc; text-align: center; font-size:20pt;">
            <a href="{{link}}" style="color:#ffffff;text-decoration:none;">
              <strong>{{num}}</strong>
            </a>
          </div>
        </div>
        <div style="text-align:center;padding:20px 0 20px 0;">
          <h4>
            <a href="{{link}}" style="color: #757575;">
              <strong>{{text}}</strong></a>
          </h4>
          {{date}}
        </div>
      </div>

`

// add trigger
//
$("#convert").click(function(){
  var input = $("#tab-table").val();
  console.log(input);
  var links = input.split('\n');
  convert(links);
})

// get page contents
//
function get_contents(links) {
  if (!links.length) {
    return;
  }
	console.log(links);
  // get page
  //
  $.ajax({
    'url': links.shift(),
    xhrFields: {
      withCredentials: true
    },
    'data': {
    },
    'type': 'get',
    'dataType': 'html'
  })
  .done( function (response) {
    console.log(response);
    // get the part we're interested in
    var this_content = $(".show-content", response).html();
    // store response
    totalOutput += this_content;
    // call next ajax call using remainder of link array
    get_contents(links);
  })
  .fail( function (code, status) {
    // call next ajax call using remainder of link array
    get_contents(links);
  })
}

// a little global var action
var totalOutput = "";

// convert
//
function convert(links) {
  get_contents(links);
  $("#results").text(preHTML + totalOutput + postHTML);
  $("#status1").text("Generated.");
}

$("#copy").click(function(){
    $("#results").select();
    document.execCommand('copy');
    $("#status2").text("Copied.");
});
