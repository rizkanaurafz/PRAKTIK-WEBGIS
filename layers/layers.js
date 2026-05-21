var wms_layers = [];

var format_Praktikum7WebGISaksesibilitas_univgpkg_0 = new ol.format.GeoJSON();
var features_Praktikum7WebGISaksesibilitas_univgpkg_0 = format_Praktikum7WebGISaksesibilitas_univgpkg_0.readFeatures(json_Praktikum7WebGISaksesibilitas_univgpkg_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Praktikum7WebGISaksesibilitas_univgpkg_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Praktikum7WebGISaksesibilitas_univgpkg_0.addFeatures(features_Praktikum7WebGISaksesibilitas_univgpkg_0);
var lyr_Praktikum7WebGISaksesibilitas_univgpkg_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Praktikum7WebGISaksesibilitas_univgpkg_0, 
                style: style_Praktikum7WebGISaksesibilitas_univgpkg_0,
                popuplayertitle: 'Praktikum 7 - WebGIS/aksesibilitas_univ.gpkg',
                interactive: true,
                title: '<img src="styles/legend/Praktikum7WebGISaksesibilitas_univgpkg_0.png" /> Praktikum 7 - WebGIS/aksesibilitas_univ.gpkg'
            });
var format_union_1 = new ol.format.GeoJSON();
var features_union_1 = format_union_1.readFeatures(json_union_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_union_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_union_1.addFeatures(features_union_1);
var lyr_union_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_union_1, 
                style: style_union_1,
                popuplayertitle: 'union',
                interactive: true,
                title: '<img src="styles/legend/union_1.png" /> union'
            });
var format_univ_surabaya_2 = new ol.format.GeoJSON();
var features_univ_surabaya_2 = format_univ_surabaya_2.readFeatures(json_univ_surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_2.addFeatures(features_univ_surabaya_2);
var lyr_univ_surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_2, 
                style: style_univ_surabaya_2,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
    title: 'univ_surabaya<br />\
    <img src="styles/legend/univ_surabaya_2_0.png" /> ITS<br />\
    <img src="styles/legend/univ_surabaya_2_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/univ_surabaya_2_2.png" /> UNAIR<br />\
    <img src="styles/legend/univ_surabaya_2_3.png" /> UNESA<br />\
    <img src="styles/legend/univ_surabaya_2_4.png" /> UPNV Jatim<br />\
    <img src="styles/legend/univ_surabaya_2_5.png" /> <br />' });
var format_PTNdiSurabaya_3 = new ol.format.GeoJSON();
var features_PTNdiSurabaya_3 = format_PTNdiSurabaya_3.readFeatures(json_PTNdiSurabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNdiSurabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdiSurabaya_3.addFeatures(features_PTNdiSurabaya_3);
var lyr_PTNdiSurabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdiSurabaya_3, 
                style: style_PTNdiSurabaya_3,
                popuplayertitle: 'PTN di Surabaya',
                interactive: true,
    title: 'PTN di Surabaya<br />\
    <img src="styles/legend/PTNdiSurabaya_3_0.png" /> ITS<br />\
    <img src="styles/legend/PTNdiSurabaya_3_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdiSurabaya_3_2.png" /> UNAIR<br />\
    <img src="styles/legend/PTNdiSurabaya_3_3.png" /> UNESA<br />\
    <img src="styles/legend/PTNdiSurabaya_3_4.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTNdiSurabaya_3_5.png" /> <br />' });

lyr_Praktikum7WebGISaksesibilitas_univgpkg_0.setVisible(true);lyr_union_1.setVisible(true);lyr_univ_surabaya_2.setVisible(true);lyr_PTNdiSurabaya_3.setVisible(true);
var layersList = [lyr_Praktikum7WebGISaksesibilitas_univgpkg_0,lyr_union_1,lyr_univ_surabaya_2,lyr_PTNdiSurabaya_3];
lyr_Praktikum7WebGISaksesibilitas_univgpkg_0.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_union_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', });
lyr_PTNdiSurabaya_3.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Ranking QS': 'Ranking QS', 'Tahun Berdiri': 'Tahun Berdiri', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_Praktikum7WebGISaksesibilitas_univgpkg_0.set('fieldImages', {'fid': '', 'Access': '', });
lyr_union_1.set('fieldImages', {'fid': '', 'Access': '', });
lyr_univ_surabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_PTNdiSurabaya_3.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Ranking QS': 'TextEdit', 'Tahun Berdiri': 'Range', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Praktikum7WebGISaksesibilitas_univgpkg_0.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_union_1.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_univ_surabaya_2.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', });
lyr_PTNdiSurabaya_3.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Ranking QS': 'no label', 'Tahun Berdiri': 'no label', 'Fakultas': 'no label', 'Foto': 'no label', });
lyr_PTNdiSurabaya_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});