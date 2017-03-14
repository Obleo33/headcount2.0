export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleaner(data);
  }

  dataCleaner(data) {
    return data.reduce((districts, yearlyData) => {
      const location = yearlyData.Location;
      const year = yearlyData.TimeFrame;
      const data = yearlyData.Data;

      if (!districts[location]) {
       districts[location] = {};
      }

      districts[location][year] = data
      return districts;
    }, {});
  };

  findByName (input) {
    if (!input) {
      return undefined;
    } else {
      let locationKeys = Object.keys(this.data);
      let searchKeys = locationKeys.find(key => key.toLowerCase().includes(input.toLowerCase()));
      if (searchKeys) {
        return { location: searchKeys, data: {} };
      };
    }
  };
}
