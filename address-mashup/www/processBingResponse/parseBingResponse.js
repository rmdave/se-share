/**
 * Created with IntelliJ IDEA.
 * User: rajeevdave
 * Date: 4/3/14
 * Time: 4:57 PM
 * Copyright Apigee
 *
 * display the response from Bing; need to make this a pretty
 *
 */
function handleData(bingResponse){


//    var respToProcess = sampleBingResponse.d.results;
    var respToProcess = bingResponse.poi.d.results;
    var txt='';

    txt="<table id='respTable'>  \
        <thead> \
        <tr> \
            <td>ID</td> \
            <td>Name</td> \
            <td>Latitude</td> \
            <td>Longitude</td> \
            <td>Distance</td> \
        </tr> \
    </thead> \
    </table> \
";

    $('#respTable').remove();
    $('#responseArea').append(txt);

    txt='';
    var count=respToProcess.length;


    for(var i=0; i< count; i++) {
        txt+='<tr>';

        txt+='<td>' + respToProcess[i].EntityID  +'</td>';
        txt+='<td>' + respToProcess[i].DisplayName  +'</td>';
        txt+='<td>' + respToProcess[i].Latitude  +'</td>';
        txt+='<td>' + respToProcess[i].Longitude  +'</td>';
        txt+='<td>' + respToProcess[i].__Distance +'</td>';

        txt+='</tr>';
    }
    $('#respTable tr:last').after(txt);



    // Populate Weather Info table
    txt="    <table id='weatherTable'> \
        <thead> \
        <tr> \
            <td>City</td> \
            <td>Current Temps</td> \
            <td>Cloudiness</td> \
        </tr> \
        </thead> \
    <tbody id='weatherTableBody'> \
\
    </tbody> \
    </table>";

    $('#weatherTable').remove();
    $('#weatherNearCity').append(txt);

    txt='';
    var weatherInfo=bingResponse.weather;
    txt+='<tr>';

    txt+='<td>' + weatherInfo.list[0].name  +'</td>';
    txt+='<td>' + weatherInfo.list[0].main.temp +'</td>';
    txt+='<td>' + weatherInfo.list[0].weather[0].description  +'</td>';

    txt+='</tr>';
    $('#weatherTable tr:last').after(txt);



}

$( '#bingForm' ).submit(function( event ) {

    event.preventDefault();



    var ajaxURL='http://demo23-test.apigee.net/v1/bing_america_poi?radius=' +
         $('#radius').val() +
        '&apikey=aGmcDXnQcC2AcG3Ryvont3he3dPWXax6';

    $.ajax({
        url:ajaxURL,
        success:function(data) {
            handleData(data);
        },
        error:function(){
            // failed request; give feedback to user
            $('#responseArea').html('<p class="error"><strong>Oops!</strong> Try that again in a few moments.</p>');
        }
    });


});

