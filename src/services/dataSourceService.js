const DATA_SOURCE_COLLECTION = 'rediscli:datasources';

export default class DataSourceService {

    constructor(dataSources) {
        this.dataSources = dataSources;
    }

    list() {
        return JSON.parse(localStorage.getItem(DATA_SOURCE_COLLECTION)) || [];
    }
    
    get(id) {
        let dataSources = this.list();
        return dataSources.find(item => item.id === id);
    }

    create(dataSource) {
        debugger;
        let dataSources = this.list();

        let id = dataSources.slice(-1)[0] ? dataSources.slice(-1)[0].id + 1 : 1;

        dataSources.push({
            id,
            name: dataSource.name,
            host: dataSource.host
        });

        localStorage.setItem(DATA_SOURCE_COLLECTION, JSON.stringify(dataSources));
    }
}