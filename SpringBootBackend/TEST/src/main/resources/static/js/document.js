// Functions for the Document Page page
async function SubmitDoc(count){
    const field_name = document.getElementById("fieldid" + count.toString() ).getAttribute("value");
    // console.log(field_name);
    // return;
    const pest_select = document.getElementById("pesticide" + count.toString() ).getAttribute("value");
    const rate_field = document.getElementById("rate" + count.toString() ).getAttribute("value");
    const rei_field = document.getElementById("rei" + count.toString() ).getAttribute("value");
    const phi_field = document.getElementById("phi" + count.toString() ).getAttribute("value");
    const equip_field = document.getElementById("equipment" + count.toString() ).getAttribute("value");
    const tech_field = document.getElementById("technician" + count.toString() ).getAttribute("value");
    const datetime = document.getElementById("dayScheduled" + count.toString() ).value;
    const datetime2 = document.getElementById("datetimepicker" + count.toString() ).value;



    console.log(count +"count");
    console.log(field_name);
    console.log(pest_select);
    console.log(rate_field);
    console.log(rei_field);
    console.log(phi_field);
    console.log(equip_field);
    console.log(tech_field);
    console.log(datetime2 );

    // Some error checking here
    if(field_name == ""){ alert("Error with feild name"); return;}
    if(pest_select == ""){ alert("Error with pesticied entered"); return;}
    if(rate_field == ""){ alert("Error with rate entered"); return;}
    if(rei_field == ""){ alert("Error with REI entered"); return;}
    if(phi_field == ""){ alert("Error with PHI entered"); return;}
    if(equip_field == ""){ alert("Error with feild name"); return;}
    if(tech_field == ""){ alert("Error with technician entered"); return;}
    if(datetime2 == ""){ alert("Error with Day Completed"); return;}

    const plot = {
        "fieldid":field_name,
        "Pesticide" : pest_select,
        "Rate" : rate_field,
        "REI" : rei_field,
        "PHI" : phi_field,
        "Equipment" : equip_field,
        "Technician" : tech_field,
        "dayScheduled" : datetime,
        "dayCompleted" : datetime2
    }


    console.log("return "+plot.toString());

    // const options = {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json", },
    //     body: JSON.stringify(data)
    // };
    // const resp = await fetch("/SubmitDoc", options);
    // if(resp.status == 200){
    //     alert("Doc Submitted Successfully!");
    // } else {
    //     alert("Error Submitting Doc!");
    // }

    var obj;
    $.ajax ({
        url:"/api/submitdoc",
        type: "POST",
        data:JSON.stringify(plot),
        contentType: "application/json",
        dataType: "json",
        cache: false,
        dataSrc: "",
        async: false,
        timeout: 600000,
        success: function (response) {

            var len = response.length;
            // obj = JSON.parse(response);
            var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
                + JSON.stringify(response, null, 4) + "&lt;/pre&gt;";
            console.log("SUCCESS RES: ", response);
            alert("Document Submitted Successfully!");
            //return response;
            return;

        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
                + e.responseText + "&lt;/pre&gt;";
            console.log("ERROR : ", e);
            alert("Error Document Order!");
            return;

        }

    });
    window.location.replace("./index.html");
}

async function GetOrdersToDocument(field_id){
    const fieldinfo = await GetAppPlotInfo(field_id);

    console.log("doc return completedate"+fieldinfo.values());

    const root = document.createElement('div');
    root.setAttribute("class","container");
    root.setAttribute('style', "width:90%;margin:5%;padding: 5%;");

    // Creating Orders ////////////////////////////////////////////

    const length = Object.keys(fieldinfo).length;
    if(length == 0){
        const rows = document.createElement('div');
        rows.setAttribute("class","list-group row");

        const col = document.createElement('div');
        col.setAttribute("class","list-group-item col");
        col.innerHTML =   "<b>There are no current orders for this field</b>"

        rows.appendChild(col);
        root.appendChild(rows);
        document.body.append(root);
        return;
    }

    var count = 1;
    for(item of fieldinfo){

        const rows = document.createElement('div');
        rows.setAttribute("class","list-group row");

        const col_title = document.createElement('div');
        col_title.setAttribute("class","list-group-item col disabled");
        col_title.innerHTML =   "<b> Order # "+count+"</b> ";
        rows.appendChild(col_title);
        count += 1;

        for(key of Object.keys(item)){
            const col = document.createElement('div');
            col.setAttribute("class","list-group-item col");
            col.innerHTML =   "<b>" + key + ":</b> " + item[key];
            var identifier = key + count.toString();
            col.setAttribute("id", identifier);
            console.log("attribute "+identifier+"!!!");
            col.setAttribute("value", item[key]);
            rows.appendChild(col);
        }

        // DayCompleted ////////////////////////////////////////////

        const date_group = document.createElement('div');
        date_group.setAttribute('class',"form-group")
        const date_label = document.createElement('label');
        // date_label.setAttribute('for',"datetimepicker1")
        date_label.textContent = "Day Completed:"

        const date_input = document.createElement('div');
        date_input.setAttribute("class","input-group date");

        const date_text = document.createElement('input');
        date_text.setAttribute("class","form-control");
        date_text.setAttribute("type","text");
        var datetimepicker_id = "datetimepicker" + count.toString();
        date_text.setAttribute("id",datetimepicker_id);

        const date_span = document.createElement('span');
        date_span.setAttribute("class","input-group-addon");
        const date_span_a = document.createElement('span');
        date_span_a.setAttribute("class","glyphicon glyphicon-calendar")

        const date_script = document.createElement('script');
        date_script.setAttribute("type","text/javascript");
        date_script.textContent = "$(function() { $('#"+datetimepicker_id+"').datetimepicker({format: 'YYYY-MM-DD hh:mm:ss'}); });"


        date_span.appendChild(date_span_a);
        date_input.appendChild(date_text);
        date_input.appendChild(date_span);
        date_group.appendChild(date_label);
        date_group.appendChild(date_input);
        date_group.appendChild(date_script);


        rows.appendChild(date_group);

        // Submit Button ////////////////////////////////////////////
        const button_group = document.createElement('div');
        button_group.setAttribute('class',"form-group")

        const submit_button = document.createElement('button');
        submit_button.setAttribute("type","button");
        submit_button.setAttribute("class","btn btn-secondary");
        submit_button.textContent="Submit Doc.";
        var submit_exec = "SubmitDoc(" + count.toString() + ");";
        submit_button.setAttribute("onclick",submit_exec);
        button_group.appendChild(submit_button)

        rows.appendChild(button_group);


        root.appendChild(rows);
    }









    document.body.append(root);
}