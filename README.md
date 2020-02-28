# CS 225 Proj

version 0.03 test to get some of the front end working with a local SQL

- Bootstrap
- Leaflet
- jquery
- MySQL workbench
- npm
- NodeJS

## Instructions

1. Install `npm`,`node` and `nodemon`
1. Install `MySQL workbench` 
1. In `MySQL workbench` create a new `sql connection` called `agops` with the password `password`
1. (Note) if you change the name/password, edit them in `sqltest.js` file
1. In `MySQL workbench`, click `schemas`>`agops`>`Tables`>`Table Data Import Wizard` and import the files in the `csvfiles` directory of this github branch. 
The tables the create should follow the same name as the title of the file. Else the API might not work.
1. Run `nodemon ./sqltest.js` or `node ./sqltest.js` and in a browser go to `localhost:3000` and the webpage should be there.

Currently working is submitting orders. 
There is no implementation of the completion of orders on the document page.


## Students

- Abenezer Wudenhe
- Joel Borja
- Nicholas Kory
- Zhuocheng Shang

## Sources

- [Super Helpful video on getting started with node](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X) 
- [SQL & Java Script](https://www.sitepoint.com/using-node-mysql-javascript-client/)
- [Javascript creating HTML Elements](https://htmldog.com/guides/javascript/advanced/creatingelements/)
- [Boostrap list group element class](https://getbootstrap.com/docs/4.0/components/list-group/)
- [Using CSV & MySQL Work Bench](https://www.youtube.com/watch?v=vzYFZXI43hM)
- [Date & Time w/ Bootstrap](https://bootstrap-datepicker.readthedocs.io/en/latest/)
- [SQL date & time formats](https://www.w3schools.com/sql/func_sqlserver_convert.asp)
- [Bootstrap list styles class](https://www.w3schools.com/bootstrap/bootstrap_list_groups.asp)
- [Boostrap grid system](https://getbootstrap.com/docs/4.0/layout/grid/)


