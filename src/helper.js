

export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleaner(data);
  }

  dataCleaner(data) {
    return data.reduce((districts, yearlyData) => {
      const district = yearlyData.Location;
      const year = yearlyData.TimeFrame;
      const schoolData = Math.round(1000*yearlyData.Data)/1000 || 0;

      if (!districts[district]) {
       districts[district] = { 'location': district, 'yearlyData': {}};
      }

      districts[district]['yearlyData'][year] = schoolData;
      return districts;
    }, {});
  };

  findByName (input) {
    if (input) {
      let locationKeys = Object.keys(this.data);
      let searchKeys = locationKeys.find(key => key.toLowerCase().includes(input.toLowerCase()));
      if (searchKeys) {
        return { location: searchKeys, data: this.data[searchKeys] };
      };
    } else {
      return undefined;
    }
  };

  findAllMatches(input) {
    const locationKeys = Object.keys(this.data);
    if(input) {
      const search = locationKeys.filter(location => location.toLowerCase().includes(input.toLowerCase()))
      return search.map((location,index)=> search[index] = this.data[location])
    }
    return locationKeys.map((location,index)=> this.data[location])
  }
}
