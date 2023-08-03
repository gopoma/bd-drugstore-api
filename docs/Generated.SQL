/*
Created: 6/5/2023
Modified: 6/19/2023
Model: BD_BOTICA
Database: MySQL 8.0
*/

-- Drop previous database
DROP DATABASE IF EXISTS BD_BOTICA;

-- Create database section
CREATE DATABASE IF NOT EXISTS BD_BOTICA;
USE BD_BOTICA;

-- Create tables section -------------------------------------------------

-- Table GZM_USUARIO

CREATE TABLE `GZM_USUARIO`
(
  `UsuCod` Int NOT NULL AUTO_INCREMENT,
  `UsuNom` Varchar(60),
  `UsuApe` Varchar(60),
  `UsuNomCom` Varchar(120),
  `RolCod` Smallint,
  `UsuEma` Varchar(255),
  `UsuCon` Varchar(255),
  `UsuTel` Int(9),
  `UsuDir` Varchar(255),
  `UsuFecInsAño` Int(4),
  `UsuFecInsMes` Int(2),
  `UsuFecInsDia` Int(2),
  `UsuEstReg` Varchar(1) DEFAULT "A",
  PRIMARY KEY (`UsuCod`)
)
;

CREATE INDEX `IX_Relationship11` ON `GZM_USUARIO` (`RolCod`)
;

-- Table V1M_ARTICULO

CREATE TABLE `V1M_ARTICULO`
(
  `ArtCod` Int NOT NULL AUTO_INCREMENT,
  `ArtNom` Varchar(60),
  `ArtLab` Smallint,
  `ArtCat` Smallint,
  `ArtTipUniMed` Smallint,
  `ArtFecVenAño` Int(4),
  `ArtFecVenMes` Int(2),
  `ArtFecVenDia` Int(2),
  `ArtPreUni` Decimal(10,2),
  `ArtSto` Int(12),
  `ArtEstReg` Varchar(1) DEFAULT "A",
  PRIMARY KEY (`ArtCod`)
)
;

CREATE INDEX `IX_Relationship4` ON `V1M_ARTICULO` (`ArtTipUniMed`)
;

CREATE INDEX `IX_Relationship5` ON `V1M_ARTICULO` (`ArtLab`)
;

CREATE INDEX `IX_Relationship6` ON `V1M_ARTICULO` (`ArtCat`)
;

-- Table V1T_PEDIDO

CREATE TABLE `V1T_PEDIDO`
(
  `PedNum` Int NOT NULL AUTO_INCREMENT,
  `PedFecAño` Int(4),
  `PedFecMes` Int(2),
  `PedFecDia` Int(2),
  `PedEstReg` Varchar(1) DEFAULT "A",
  `PedCli` Int,
  `TipEstPedCod` Smallint,
  PRIMARY KEY (`PedNum`)
)
;

CREATE INDEX `IX_Relationship9` ON `V1T_PEDIDO` (`PedCli`)
;

CREATE INDEX `IX_Relationship10` ON `V1T_PEDIDO` (`TipEstPedCod`)
;

-- Table V1T_PEDIDO_ARTICULO

CREATE TABLE `V1T_PEDIDO_ARTICULO`
(
  `PedArtPed` Int NOT NULL,
  `PedArtArt` Int NOT NULL,
  `PedArtPreUni` Decimal(10,2),
  `PedArtCanSol` Int(12),
  `PedArtCanDes` Int(12),
  `PedArtEstReg` Varchar(1) DEFAULT "A"
)
;

CREATE INDEX `IX_Relationship7` ON `V1T_PEDIDO_ARTICULO` (`PedArtArt`)
;

CREATE INDEX `IX_Relationship8` ON `V1T_PEDIDO_ARTICULO` (`PedArtPed`)
;

ALTER TABLE `V1T_PEDIDO_ARTICULO` ADD PRIMARY KEY (`PedArtPed`, `PedArtArt`)
;

-- Table GZZ_ROL

CREATE TABLE `GZZ_ROL`
(
  `RolCod` Smallint NOT NULL AUTO_INCREMENT,
  `RolDes` Varchar(60),
  `RolEstReg` Varchar(1) DEFAULT "A",
  PRIMARY KEY (`RolCod`)
)
;

-- Table V1Z_TIPO_ESTADO_PEDIDO

CREATE TABLE `V1Z_TIPO_ESTADO_PEDIDO`
(
  `TipEstPedCod` Smallint NOT NULL AUTO_INCREMENT,
  `TipEstPedDes` Varchar(60),
  `TipEstPedEstReg` Varchar(1) DEFAULT "A",
  PRIMARY KEY (`TipEstPedCod`)
)
;

-- Table V1Z_TIPO_UNIDAD_MEDIDA

CREATE TABLE `V1Z_TIPO_UNIDAD_MEDIDA`
(
  `TipUniMedCod` Smallint NOT NULL AUTO_INCREMENT,
  `TipUniMedDes` Varchar(60),
  `TipUniMedEstReg` Varchar(1) DEFAULT "A",
  PRIMARY KEY (`TipUniMedCod`)
)
;

-- Table V1Z_LABORATORIO

CREATE TABLE `V1Z_LABORATORIO`
(
  `LabCod` Smallint NOT NULL AUTO_INCREMENT,
  `LabDes` Varchar(60),
  `LabEstReg` Varchar(1) DEFAULT "A",
  PRIMARY KEY (`LabCod`)
)
;

-- Table V1Z_CATEGORIA

CREATE TABLE `V1Z_CATEGORIA`
(
  `CatCod` Smallint NOT NULL AUTO_INCREMENT,
  `CatDes` Varchar(60),
  `CatEstReg` Varchar(1) DEFAULT "A",
  PRIMARY KEY (`CatCod`)
)
;

-- Create foreign keys (relationships) section -------------------------------------------------

ALTER TABLE `V1M_ARTICULO` ADD CONSTRAINT `Int06_TIP_UNI_MED_ARTICULO` FOREIGN KEY (`ArtTipUniMed`) REFERENCES `V1Z_TIPO_UNIDAD_MEDIDA` (`TipUniMedCod`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `V1M_ARTICULO` ADD CONSTRAINT `Int08_LABORATORIO_ARTICULO` FOREIGN KEY (`ArtLab`) REFERENCES `V1Z_LABORATORIO` (`LabCod`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `V1M_ARTICULO` ADD CONSTRAINT `Int07_CATEGORIA_ARTICULO` FOREIGN KEY (`ArtCat`) REFERENCES `V1Z_CATEGORIA` (`CatCod`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `V1T_PEDIDO_ARTICULO` ADD CONSTRAINT `Int05_PEDIDO_ARTICULO_ARTICULO` FOREIGN KEY (`PedArtArt`) REFERENCES `V1M_ARTICULO` (`ArtCod`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `V1T_PEDIDO_ARTICULO` ADD CONSTRAINT `Int04_PEDIDO_PEDIDO_ARTICULO` FOREIGN KEY (`PedArtPed`) REFERENCES `V1T_PEDIDO` (`PedNum`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `V1T_PEDIDO` ADD CONSTRAINT `Int02_USUARIO_PEDIDO` FOREIGN KEY (`PedCli`) REFERENCES `GZM_USUARIO` (`UsuCod`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `V1T_PEDIDO` ADD CONSTRAINT `Int03_TIP_ESP_PED_COD_PEDIDO` FOREIGN KEY (`TipEstPedCod`) REFERENCES `V1Z_TIPO_ESTADO_PEDIDO` (`TipEstPedCod`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `GZM_USUARIO` ADD CONSTRAINT `Int01_ROL_USUARIO` FOREIGN KEY (`RolCod`) REFERENCES `GZZ_ROL` (`RolCod`) ON DELETE RESTRICT ON UPDATE RESTRICT
;
