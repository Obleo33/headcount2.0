export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleaner(data);
  }

  dataCleaner(data) {
    return data.reduce((districts, yearlyData) => {
      const location = yearlyData.Location;
      const year = yearlyData.TimeFrame;
      const data = Math.round(1000*yearlyData.Data)/1000 || 0;

      if (!districts[location]) {
       districts[location] = {};
      }

      districts[location][year] = data
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
      return locationKeys.filter(location => location.toLowerCase().includes(input.toLowerCase()))
    }

    return locationKeys
  }
}
