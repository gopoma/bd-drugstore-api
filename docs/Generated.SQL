/* 
Created: 6/5/2023
Modified: 6/6/2023
Model: BD_BOTICA
Database: MySQL 8.0 
*/

-- Create database section -------------------------------------------------
CREATE DATABASE IF NOT EXISTS BD_BOTICA;
USE BD_BOTICA;

-- Create tables section -------------------------------------------------

-- Table GZM_USUARIO

CREATE TABLE `GZM_USUARIO`
(
  `UsuCod` Int(12) NOT NULL,
  `UsuNom` Varchar(60),
  `UsuApe` Varchar(60),
  `UsuNomCom` Varchar(120),
  `RolCod` Int(4),
  `UsuEma` Varchar(255),
  `UsuCon` Varchar(255),
  `UsuTel` Int(9),
  `UsuDir` Varchar(255),
  `UsuFecInsAño` Int(4),
  `UsuFecInsMes` Int(2),
  `UsuFecInsDia` Int(2),
  `UsuEstReg` Varchar(1)
)
;

CREATE INDEX `IX_Relationship11` ON `GZM_USUARIO` (`RolCod`)
;

ALTER TABLE `GZM_USUARIO` ADD PRIMARY KEY (`UsuCod`)
;

-- Table V1M_ARTICULO

CREATE TABLE `V1M_ARTICULO`
(
  `ArtCod` Int(12) NOT NULL,
  `ArtNom` Varchar(60),
  `ArtLab` Int(4),
  `ArtCat` Int(4),
  `ArtTipUniMed` Int(4),
  `ArtFecVenAño` Int(4),
  `ArtFecVenMes` Int(2),
  `ArtFecVenDia` Int(2),
  `ArtPreUni` Decimal(10,2),
  `ArtSto` Int(12),
  `ArtEstReg` Varchar(1)
)
;

CREATE INDEX `IX_Relationship4` ON `V1M_ARTICULO` (`ArtTipUniMed`)
;

CREATE INDEX `IX_Relationship5` ON `V1M_ARTICULO` (`ArtLab`)
;

CREATE INDEX `IX_Relationship6` ON `V1M_ARTICULO` (`ArtCat`)
;

ALTER TABLE `V1M_ARTICULO` ADD PRIMARY KEY (`ArtCod`)
;

-- Table V1T_PEDIDO

CREATE TABLE `V1T_PEDIDO`
(
  `PedNum` Int(12) NOT NULL,
  `PedFecAño` Int(4),
  `PedFecMes` Int(2),
  `PedFecDia` Int(2),
  `PedEstReg` Varchar(1),
  `PedCli` Int(12),
  `TipEstPedCod` Int(3)
)
;

CREATE INDEX `IX_Relationship9` ON `V1T_PEDIDO` (`PedCli`)
;

CREATE INDEX `IX_Relationship10` ON `V1T_PEDIDO` (`TipEstPedCod`)
;

ALTER TABLE `V1T_PEDIDO` ADD PRIMARY KEY (`PedNum`)
;

-- Table V1T_PEDIDO_ARTICULO

CREATE TABLE `V1T_PEDIDO_ARTICULO`
(
  `PedArtPed` Int(12) NOT NULL,
  `PedArtArt` Int(12) NOT NULL,
  `PedArtPreUni` Int(10),
  `PedArtCanSol` Int(12),
  `PedArtCanDes` Int(12),
  `PedArtEstReg` Varchar(1)
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
  `RolCod` Int(4) NOT NULL,
  `RolDes` Varchar(40),
  `RolEstReg` Varchar(1)
)
;

ALTER TABLE `GZZ_ROL` ADD PRIMARY KEY (`RolCod`)
;

-- Table V1Z_TIPO_ESTADO_PEDIDO

CREATE TABLE `V1Z_TIPO_ESTADO_PEDIDO`
(
  `TipEstPedCod` Int(3) NOT NULL,
  `TipEstPedDes` Varchar(40),
  `TipEstPedEstReg` Varchar(1)
)
;

ALTER TABLE `V1Z_TIPO_ESTADO_PEDIDO` ADD PRIMARY KEY (`TipEstPedCod`)
;

-- Table V1Z_TIPO_UNIDAD_MEDIDA

CREATE TABLE `V1Z_TIPO_UNIDAD_MEDIDA`
(
  `TipUniMedCod` Int(4) NOT NULL,
  `TipUniMedDes` Varchar(40),
  `TipUniMedEstReg` Varchar(1)
)
;

ALTER TABLE `V1Z_TIPO_UNIDAD_MEDIDA` ADD PRIMARY KEY (`TipUniMedCod`)
;

-- Table V1Z_LABORATORIO

CREATE TABLE `V1Z_LABORATORIO`
(
  `LabCod` Int(4) NOT NULL,
  `LabDes` Varchar(40),
  `LabEstReg` Varchar(1)
)
;

ALTER TABLE `V1Z_LABORATORIO` ADD PRIMARY KEY (`LabCod`)
;

-- Table V1Z_CATEGORIA

CREATE TABLE `V1Z_CATEGORIA`
(
  `CatCod` Int(4) NOT NULL,
  `CatDes` Varchar(40),
  `CatEstReg` Varchar(1)
)
;

ALTER TABLE `V1Z_CATEGORIA` ADD PRIMARY KEY (`CatCod`)
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


