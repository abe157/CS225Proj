DROP TABLE IF EXISTS product;
CREATE TABLE `product` (`id` int(11) NOT NULL AUTO_INCREMENT ,
                              `iChemNo` int(11) ,
                              `strEpaNo` VARCHAR(255),
                              PRIMARY KEY(`id`));
INSERT INTO product (iChemNo, strEpaNo) VALUE (0001,'product11');
INSERT INTO product (iChemNo, strEpaNo) VALUE (0002,'product12');
