import L from 'leaflet';
import { LayerInfoService } from "@supermap/iclient-leaflet";
import maps from "./datas/maps";

const getLayers = async (mapUrl) => {
    const LayersInfo = await new LayerInfoService(mapUrl).getLayersInfo();
    const Layers = LayersInfo.result.subLayers.layers;

    return Layers;
}

const searchFeatures = async (filter) => {
    const Layers = await getLayers(maps.civ.url);
    let filterFeatures = [];
    const featuresPromises = Layers.map(async (layer) => {
        const queryParams = new L.supermap.GetFeaturesBySQLParameters({
            queryParameter: {
                name: layer.caption,
                attributeFilter: 'SMID > 0'
            },
            datasetNames: [`${layer.datasetInfo.dataSourceName}:${layer.datasetInfo.name}`]
        });
    
        const serviceResult = await new L.supermap.FeatureService(maps.civ.data_url).getFeaturesBySQL(queryParams);
        if(serviceResult.type === 'processCompleted'){
            const featuresCollection = serviceResult.result.features;
            const features = featuresCollection.features;
            
            features.forEach((feature) => {
                if (feature.properties.TYPE === filter || feature.properties.LAYER === filter) {
                    filterFeatures.push(feature);
                }
            });
        }
    });

    await Promise.all(featuresPromises);

    return filterFeatures;
}

export { getLayers, searchFeatures };
