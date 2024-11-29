var wms_layers = [];


        var lyr_OSMOpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OSM OpenTopoMap',
            'opacity': 0.688000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://c.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_ORGANIZACINTERRITORIALPROVINCIAL_1 = new ol.format.GeoJSON();
var features_ORGANIZACINTERRITORIALPROVINCIAL_1 = format_ORGANIZACINTERRITORIALPROVINCIAL_1.readFeatures(json_ORGANIZACINTERRITORIALPROVINCIAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ORGANIZACINTERRITORIALPROVINCIAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ORGANIZACINTERRITORIALPROVINCIAL_1.addFeatures(features_ORGANIZACINTERRITORIALPROVINCIAL_1);
var lyr_ORGANIZACINTERRITORIALPROVINCIAL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ORGANIZACINTERRITORIALPROVINCIAL_1, 
                style: style_ORGANIZACINTERRITORIALPROVINCIAL_1,
                popuplayertitle: "ORGANIZACIÓN TERRITORIAL PROVINCIAL",
                interactive: true,
                title: '<img src="styles/legend/ORGANIZACINTERRITORIALPROVINCIAL_1.png" /> ORGANIZACIÓN TERRITORIAL PROVINCIAL'
            });
var format_Establecimientos_Educativos_2024_2 = new ol.format.GeoJSON();
var features_Establecimientos_Educativos_2024_2 = format_Establecimientos_Educativos_2024_2.readFeatures(json_Establecimientos_Educativos_2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Establecimientos_Educativos_2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Establecimientos_Educativos_2024_2.addFeatures(features_Establecimientos_Educativos_2024_2);
var lyr_Establecimientos_Educativos_2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Establecimientos_Educativos_2024_2, 
                style: style_Establecimientos_Educativos_2024_2,
                popuplayertitle: "Establecimientos_Educativos_2024",
                interactive: true,
                title: '<img src="styles/legend/Establecimientos_Educativos_2024_2.png" /> Establecimientos_Educativos_2024'
            });

lyr_OSMOpenTopoMap_0.setVisible(true);lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.setVisible(true);lyr_Establecimientos_Educativos_2024_2.setVisible(true);
var layersList = [lyr_OSMOpenTopoMap_0,lyr_ORGANIZACINTERRITORIALPROVINCIAL_1,lyr_Establecimientos_Educativos_2024_2];
lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.set('fieldAliases', {'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'fcode': 'fcode', 'DPA_ANIO': 'DPA_ANIO', });
lyr_Establecimientos_Educativos_2024_2.set('fieldAliases', {'ZonaQR': 'ZonaQR', 'ACC_Fin': 'ACC_Fin', 'TE_fin': 'TE_fin', 'AMIE': 'AMIE', 'AMIE_MATRI': 'AMIE_MATRI', 'CodUnico': 'CodUnico', 'XUF': 'XUF', 'YUF': 'YUF', 'ContME': 'ContME', 'COD_ME': 'COD_ME', });
lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.set('fieldImages', {'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'fcode': 'TextEdit', 'DPA_ANIO': 'TextEdit', });
lyr_Establecimientos_Educativos_2024_2.set('fieldImages', {'ZonaQR': 'TextEdit', 'ACC_Fin': 'TextEdit', 'TE_fin': 'TextEdit', 'AMIE': 'TextEdit', 'AMIE_MATRI': 'TextEdit', 'CodUnico': 'TextEdit', 'XUF': 'TextEdit', 'YUF': 'TextEdit', 'ContME': 'TextEdit', 'COD_ME': 'TextEdit', });
lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.set('fieldLabels', {'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', 'fcode': 'no label', 'DPA_ANIO': 'no label', });
lyr_Establecimientos_Educativos_2024_2.set('fieldLabels', {'ZonaQR': 'no label', 'ACC_Fin': 'no label', 'TE_fin': 'no label', 'AMIE': 'no label', 'AMIE_MATRI': 'no label', 'CodUnico': 'no label', 'XUF': 'hidden field', 'YUF': 'no label', 'ContME': 'no label', 'COD_ME': 'no label', });
lyr_Establecimientos_Educativos_2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});