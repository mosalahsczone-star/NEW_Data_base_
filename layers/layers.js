var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Positronlabelsonly_1 = new ol.layer.Tile({
            'title': 'Positron [labels only]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
            })
        });
var format_industrialfacility_2 = new ol.format.GeoJSON();
var features_industrialfacility_2 = format_industrialfacility_2.readFeatures(json_industrialfacility_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_industrialfacility_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_industrialfacility_2.addFeatures(features_industrialfacility_2);
cluster_industrialfacility_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_industrialfacility_2
});
var lyr_industrialfacility_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_industrialfacility_2, 
                style: style_industrialfacility_2,
                popuplayertitle: 'industrial facility',
                interactive: true,
                title: '<img src="styles/legend/industrialfacility_2.png" /> industrial facility'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Positronlabelsonly_1.setVisible(true);lyr_industrialfacility_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Positronlabelsonly_1,lyr_industrialfacility_2];
lyr_industrialfacility_2.set('fieldAliases', {'fid': 'fid', 'كود': 'كود', 'م': 'م', 'المنشأة الصناعية': 'المنشأة الصناعية', 'Longitude (X)': 'Longitude (X)', 'Latitude (Y)': 'Latitude (Y)', 'pdf': 'pdf', });
lyr_industrialfacility_2.set('fieldImages', {'fid': 'TextEdit', 'كود': 'Range', 'م': 'Range', 'المنشأة الصناعية': 'TextEdit', 'Longitude (X)': 'TextEdit', 'Latitude (Y)': 'TextEdit', 'pdf': 'ExternalResource', });
lyr_industrialfacility_2.set('fieldLabels', {'fid': 'hidden field', 'كود': 'inline label - visible with data', 'م': 'inline label - visible with data', 'المنشأة الصناعية': 'inline label - visible with data', 'Longitude (X)': 'inline label - visible with data', 'Latitude (Y)': 'inline label - visible with data', 'pdf': 'inline label - visible with data', });
lyr_industrialfacility_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});