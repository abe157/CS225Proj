DROP TABLE IF EXISTS AppOrder;
CREATE TABLE `AppOrder`  (`id` int(11) NOT NULL AUTO_INCREMENT ,
`fieldid`int(11),
`Pesticide`VARCHAR(255),
`Rate`VARCHAR(255),
`REI`VARCHAR(255),
`PHI`VARCHAR(255),
`Equipment`VARCHAR(255),
 `Technician` VARCHAR(255),
  `dayScheduled` DATETIME ,
    `dayCompleted` DATETIME , PRIMARY KEY(`id`));


DROP TABLE IF EXISTS Tech;
CREATE TABLE `Tech`  (`id` int(11) NOT NULL AUTO_INCREMENT ,
`name`VARCHAR(255),
PRIMARY KEY(`id`));

INSERT INTO Tech (name) VALUE ('Micky');
INSERT INTO Tech (name) VALUE ('Andrew');
INSERT INTO Tech (name) VALUE ('Charles');


DROP TABLE IF EXISTS Products;
CREATE TABLE `Products`  (`id` int(11) NOT NULL AUTO_INCREMENT ,
`iChemNo` int(11),
`strChemical` VARCHAR (255),
PRIMARY KEY(`id`));

INSERT INTO Products (iChemNo, strChemical)  VALUE (89,'27-3-4');
INSERT INTO Products (iChemNo, strChemical)  VALUE (255,'15-5-8 Microgreen');
INSERT INTO Products (iChemNo, strChemical)  VALUE (91,'31-0-0 PAR EX');