async function GetAllPeronnel(){
    // console.log(plot_num+".....");
    //const plot = {"fieldid": plot_num};
    var obj=[];
    $.ajax ({
        url:"/api/findalltech",
        type: "POST",
        contentType: "application/json",
        headers: { "Content-Type": "application/json", },
        dataType: 'json',
        cache: false,
        dataSrc: "",
        async: false,
        timeout: 600000,
        success: function (response) {

            var len = response.length;

            //obj = JSON.parse(response);
            var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
                + JSON.stringify(response, null, 4) + "&lt;/pre&gt;";
            //console.log("SUCCESS RES: ", response);
            //return response;
            var responseObj;
            for(i=0;i<len;i++){
                console.log("SUCCESS RES: ", response[i]);
                var temp = response[i].name
                obj[i] = temp.toString();
            }
            return;

        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
                + e.responseText + "&lt;/pre&gt;";
            console.log("ERROR : ", e);
            return;

        }

    });

    return obj;
}