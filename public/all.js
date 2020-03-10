
// Currently is not used. May need to delete
async function GetPlotInfo(plot_num){
  const data = {"OBJECTID": plot_num};
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify(data)
  };
  const response = await fetch("/GetPlotInfo", options);
  const response_data = await response.json();
  for(item of response_data){
    console.log( item );
  }
}


async function GetAllProducts(){
  const options = {
    method: "GET",
  };
  const response = await fetch("/GetAllProducts", options); //method is
  const data = await response.json()
  return data;
}


async function GetAllPeronnel(){
  const options = {
    method: "GET",
  };
  const response = await fetch("/GetAllPeronnel", options); //method is
  const data = await response.json()
  return data;
}

//query now returns all object where day completed is empty
async function GetAppPlotInfo(plot_num){
  const data = {"OBJECTID": plot_num};
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify(data)
  };
  const response = await fetch("/GetAppPlotInfo", options);
  const response_data = await response.json();
  return response_data;
}


async function GetRecentPlotInfo(plot_num){
  const data = {"OBJECTID": plot_num};
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify(data)
  };
  const response = await fetch("/GetRecentPlotInfo", options);
  const response_data = await response.json();
  return response_data;
}


// Functions for the Order page

async function GetForm(field_id){
  const container = document.createElement('div');
  container.setAttribute('style', "width:90%;margin:5%;padding: 5%;");

  const root = document.createElement('form');

  // Field ID Name ////////////////////////////////////////////

  const field_group = document.createElement('div');
  field_group.setAttribute('class',"form-group")

  const field_label = document.createElement('label');
  field_label.setAttribute('for',"field_name")
  field_label.textContent = "Feild:"

  const field_name = document.createElement('input');
  field_name.setAttribute('class','form-control');
  field_name.setAttribute('type','text');
  field_name.setAttribute('placeholder',field_id);
  field_name.setAttribute('readonly',"");
  field_name.setAttribute('id',"field_name");
  field_name.value = field_id;

  field_group.appendChild(field_label);
  field_group.appendChild(field_name);

  // Pesticide ////////////////////////////////////////////

  const pest_group = document.createElement('div');
  field_group.setAttribute('class',"form-group")

  const pest_label = document.createElement('label');
  pest_label.setAttribute('for',"pest_select")
  pest_label.textContent = "Pesticide:"

  pest_group.appendChild(pest_label);
  try{
    const pest_select = document.createElement('select');
    // pest_select.setAttribute('multiple',"")
    pest_select.setAttribute('class',"form-control")
    pest_select.setAttribute('id',"pest_select")
    const products = await GetAllProducts();
    for(item of products){
      const pest_select_item = document.createElement('option');
      pest_select_item.textContent = item.strChemical + ", " + item.strManufacturer;
      pest_select.appendChild(pest_select_item);
    }
    pest_group.appendChild(pest_select);
  } catch(err){
    console.log(err.message);
    const pest_select = document.createElement('input');
    pest_select.setAttribute('class','form-control');
    pest_select.setAttribute('type','text');
    pest_select.setAttribute('placeholder',"Pesticide");
    pest_select.setAttribute('id',"pest_select");
    pest_group.appendChild(pest_select);
  }



  // Rate ////////////////////////////////////////////
  const rate_group = document.createElement('div');
  rate_group.setAttribute('class',"form-group")

  const rate_label = document.createElement('label');
  rate_label.setAttribute('for',"rate_field")
  rate_label.textContent = "Rate:"

  const rate_field = document.createElement('input');
  rate_field.setAttribute('class','form-control');
  rate_field.setAttribute('type','text');
  rate_field.setAttribute('placeholder',"Rate Information");
  rate_field.setAttribute('id',"rate_field");

  rate_group.appendChild(rate_label);
  rate_group.appendChild(rate_field);


  // REI ////////////////////////////////////////////
  const rei_group = document.createElement('div');
  rei_group.setAttribute('class',"form-group")

  const rei_label = document.createElement('label');
  rei_label.setAttribute('for',"rei_field")
  rei_label.textContent = "REI:"

  const rei_field = document.createElement('input');
  rei_field.setAttribute('class','form-control');
  rei_field.setAttribute('type','text');
  rei_field.setAttribute('placeholder',"REI Information");
  rei_field.setAttribute('id',"rei_field");

  rei_group.appendChild(rei_label);
  rei_group.appendChild(rei_field);


  // PHI ////////////////////////////////////////////
  const phi_group = document.createElement('div');
  phi_group.setAttribute('class',"form-group")

  const phi_label = document.createElement('label');
  phi_label.setAttribute('for',"phi_field")
  phi_label.textContent = "PHI:"

  const phi_field = document.createElement('input');
  phi_field.setAttribute('class','form-control');
  rei_field.setAttribute('type','text');
  phi_field.setAttribute('placeholder',"PHI Information");
  phi_field.setAttribute('id',"phi_field");

  phi_group.appendChild(phi_label);
  phi_group.appendChild(phi_field);

  // equipment ////////////////////////////////////////////

  const equip_group = document.createElement('div');
  equip_group.setAttribute('class',"form-group")

  const equip_label = document.createElement('label');
  equip_label.setAttribute('for',"equip_field")
  equip_label.textContent = "Equipment:"

  const equip_field = document.createElement('input');
  equip_field.setAttribute('class','form-control');
  equip_field.setAttribute('type','text');
  equip_field.setAttribute('placeholder',"PHI Information");
  equip_field.setAttribute('id',"equip_field");

  equip_group.appendChild(equip_label);
  equip_group.appendChild(equip_field);



  // technician ////////////////////////////////////////////
  const tech_group = document.createElement('div');
  tech_group.setAttribute('class',"form-group")

  const tech_label = document.createElement('label');
  tech_label.setAttribute('for',"tech_select")
  tech_label.textContent = "Technician:"

  tech_group.appendChild(tech_label);
  try{
    const tech_select = document.createElement('select');
    tech_select.setAttribute('class',"form-control");
    tech_select.setAttribute('id',"tech_field");
    const techs = await GetAllPeronnel();
    for(item of techs){
      const tech_select_item = document.createElement('option');
      tech_select_item.textContent = item.Technician;
      tech_select.appendChild(tech_select_item);
    }
    tech_group.appendChild(tech_select);
  } catch(err){
    console.log(err.message);
    const tech_select = document.createElement('input');
    tech_select.setAttribute('class','form-control');
    tech_select.setAttribute('type','text');
    // tech_select.setAttribute('placeholder',"Technician:");
    tech_select.setAttribute('id',"tech_field");
    tech_group.appendChild(tech_select);
  }

  // DayScheduled ////////////////////////////////////////////

  const date_group = document.createElement('div');
  date_group.setAttribute('class',"form-group")

  const date_label = document.createElement('label');
  // date_label.setAttribute('for',"datetimepicker1")
  date_label.textContent = "Day Scheduled:"

  const date_input = document.createElement('div');
  date_input.setAttribute("class","input-group date");

  const date_text = document.createElement('input');
  date_text.setAttribute("class","form-control");
  date_text.setAttribute("type","text");
  date_text.setAttribute("id","datetimepicker1");

  const date_span = document.createElement('span');
  date_span.setAttribute("class","input-group-addon");
  const date_span_a = document.createElement('span');
  date_span_a.setAttribute("class","glyphicon glyphicon-calendar")

  const date_script = document.createElement('script');
  date_script.setAttribute("type","text/javascript");
  // date_script.textContent = "$(function() { $('#datetimepicker1').datetimepicker({format: 'YYYY-MM-DD hh:mm:ss'}); });"
  date_script.textContent = "$(function() { $('#datetimepicker1').datetimepicker({format: 'YYYY-MM-DD hh:mm:ss'}); });"
  // date_script.textContent = "$(function() { $('#datetimepicker1').datetimepicker(); });"


  date_span.appendChild(date_span_a);
  date_input.appendChild(date_text);
  date_input.appendChild(date_span);
  date_group.appendChild(date_label);
  date_group.appendChild(date_input);
  date_group.appendChild(date_script);


  // Submit Button ////////////////////////////////////////////
  const button_group = document.createElement('div');
  button_group.setAttribute('class',"form-group")

  const submit_button = document.createElement('button');
  submit_button.setAttribute("type","button");
  submit_button.setAttribute("class","btn btn-secondary");
  submit_button.textContent="Submit Order";
  submit_button.setAttribute("onclick","SubmitOrder();");

  button_group.appendChild(submit_button)

  ////////////////////////////////////////////

  root.appendChild(field_group);
  root.appendChild(pest_group);
  root.appendChild(rate_group)
  root.appendChild(rei_group);
  root.appendChild(phi_group);
  root.appendChild(equip_group);
  root.appendChild(tech_group);
  root.appendChild(date_group);
  root.appendChild(button_group);


  container.appendChild(root);
  // document.body.append(root);
  document.body.append(container);
}

async function SubmitOrder(){
  const field_name = document.getElementById("field_name").value;
  const pest_select = document.getElementById("pest_select").value;
  const rate_field = document.getElementById("rate_field").value;
  const rei_field = document.getElementById("rei_field").value;
  const phi_field = document.getElementById("phi_field").value;
  const equip_field = document.getElementById("equip_field").value;
  const tech_field = document.getElementById("tech_field").value;
  const datetime = document.getElementById("datetimepicker1").value;

  // console.log(field_name);
  // console.log(pest_select);
  // console.log(rate_field);
  // console.log(rei_field);
  // console.log(phi_field);
  // console.log(equip_field);
  // console.log(tech_field);
  // console.log(typeof datetime);

  // Some error checking here
  if(field_name == ""){ alert("Error with feild name"); return;}
  if(pest_select == ""){ alert("Error with pesticied entered"); return;}
  if(rate_field == ""){ alert("Error with rate entered"); return;}
  if(rei_field == ""){ alert("Error with REI entered"); return;}
  if(phi_field == ""){ alert("Error with PHI entered"); return;}
  if(equip_field == ""){ alert("Error with feild name"); return;}
  if(tech_field == ""){ alert("Error with technician entered"); return;}
  if(datetime == ""){ alert("Error with Day Scheduled"); return;}

  const data = {
    "field_name" : field_name,
    "pest_select" : pest_select,
    "rate_field" : rate_field,
    "rei_field" : rei_field,
    "phi_field" : phi_field,
    "equip_field" : equip_field,
    "tech_field" : tech_field,
    "datetime" : datetime,
  }

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify(data)
  };
  const resp = await fetch("/SubmitOrder", options);
  if(resp.status == 200){
    alert("Order Submitted Successfully!");
  } else {
    alert("Error Submitting Order!");
  }

}

// Functions for the View page

async function GetOrders(field_id){
  const fieldinfo = await GetAppPlotInfo(field_id);

  // console.log(fieldinfo);

  const root = document.createElement('div');
  root.setAttribute("class","container");
  root.setAttribute('style', "width:90%;margin:5%;padding: 5%;");



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
      rows.appendChild(col);
    }
    root.appendChild(rows);
  }

  document.body.append(root);
}



// Functions for the Document Page page
async function SubmitDoc(){
  const field_name = document.getElementById("field_name").value;
  const pest_select = document.getElementById("pest_select").value;
  const rate_field = document.getElementById("rate_field").value;
  const rei_field = document.getElementById("rei_field").value;
  const phi_field = document.getElementById("phi_field").value;
  const equip_field = document.getElementById("equip_field").value;
  const tech_field = document.getElementById("tech_field").value;
  const datetime = document.getElementById("datetimepicker1").value;

  // console.log(field_name);
  // console.log(pest_select);
  // console.log(rate_field);
  // console.log(rei_field);
  // console.log(phi_field);
  // console.log(equip_field);
  // console.log(tech_field);
  // console.log(typeof datetime);

  // Some error checking here
  if(field_name == ""){ alert("Error with feild name"); return;}
  if(pest_select == ""){ alert("Error with pesticied entered"); return;}
  if(rate_field == ""){ alert("Error with rate entered"); return;}
  if(rei_field == ""){ alert("Error with REI entered"); return;}
  if(phi_field == ""){ alert("Error with PHI entered"); return;}
  if(equip_field == ""){ alert("Error with feild name"); return;}
  if(tech_field == ""){ alert("Error with technician entered"); return;}
  if(datetime == ""){ alert("Error with Day Scheduled"); return;}

  const data = {
    "field_name" : field_name,
    "pest_select" : pest_select,
    "rate_field" : rate_field,
    "rei_field" : rei_field,
    "phi_field" : phi_field,
    "equip_field" : equip_field,
    "tech_field" : tech_field,
    "datetime" : datetime,
  }

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify(data)
  };
  const resp = await fetch("/SubmitDoc", options);
  if(resp.status == 200){
    alert("Doc Submitted Successfully!");
  } else {
    alert("Error Submitting Doc!");
  }

}


async function GetOrdersToDocument(field_id){
  const fieldinfo = await GetAppPlotInfo(field_id);

  // console.log(fieldinfo);

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
    date_text.setAttribute("id","datetimepicker1");

    const date_span = document.createElement('span');
    date_span.setAttribute("class","input-group-addon");
    const date_span_a = document.createElement('span');
    date_span_a.setAttribute("class","glyphicon glyphicon-calendar")

    const date_script = document.createElement('script');
    date_script.setAttribute("type","text/javascript");
    date_script.textContent = "$(function() { $('#datetimepicker1').datetimepicker({format: 'YYYY-MM-DD hh:mm:ss'}); });"


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
    submit_button.setAttribute("onclick","SubmitDoc();");
    button_group.appendChild(submit_button)

    rows.appendChild(button_group);


    root.appendChild(rows);
  }









  document.body.append(root);
}
