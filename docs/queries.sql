USE BD_BOTICA;

SELECT * FROM V1Z_LABORATORIO;

INSERT INTO V1Z_LABORATORIO (LabCod, LabDes, LabEstReg)
VALUES
	(1, "Andromaco", 'A'),
    (2, "Andromeda", 'A'),
    (3, "Gamma", 'A');

DELETE FROM V1Z_LABORATORIO WHERE LabCod>0;

SELECT V1M_ARTICULO.ArtCod, V1M_ARTICULO.ArtNom, 
V1Z_LABORATORIO.LabDes AS ArtLab, 
V1Z_CATEGORIA.CatDes AS ArtCat, 
V1Z_TIPO_UNIDAD_MEDIDA.TipUniMedDes AS ArtTipUniMed,
V1M_ARTICULO.ArtFecVenAño, V1M_ARTICULO.ArtFecVenMes, V1M_ARTICULO.ArtFecVenDia,
V1M_ARTICULO.ArtPreUni, V1M_ARTICULO.ArtSto, V1M_ARTICULO.ArtEstReg
FROM V1M_ARTICULO
JOIN V1Z_CATEGORIA ON V1M_ARTICULO.ArtCat=V1Z_CATEGORIA.CatCod
JOIN V1Z_LABORATORIO ON V1M_ARTICULO.ArtLab=V1Z_LABORATORIO.LabCod
JOIN V1Z_TIPO_UNIDAD_MEDIDA ON V1M_ARTICULO.ArtTipUniMed=V1Z_TIPO_UNIDAD_MEDIDA.TipUniMedCod;

UPDATE V1M_ARTICULO
SET ArtPreUni=20.28,
ArtSto=30,
ArtCat=3
WHERE ArtCod=4;
