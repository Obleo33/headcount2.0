

class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleaner(data);
  }

  dataCleaner(data) {
    return data.reduce((districts, yearlyData) => {
      const district = yearlyData.Location;
      const year = yearlyData.TimeFrame;
      const schoolData = Math.round(1000*yearlyData.Data)/1000 || 0;

      if (!districts[district.toUpperCase()]) {
       districts[district.toUpperCase()] = { 'location': district, 'yearlyData': {}};
      }

      districts[district.toUpperCase()]['yearlyData'][year] = schoolData;
      return districts;
    }, {});
  };

  findByName (input='') {
    return this.data[input.toUpperCase()]
  };

  findAllMatches(input) {
    const locationKeys = Object.keys(this.data);
    if(input) {
      const search = locationKeys.filter(location => location.includes(input.toUpperCase()))
      return search.map((location,index)=> search[index] = this.data[location])
    }
    return locationKeys.map((location,index)=> this.data[location])
  }
}

export default DistrictRepository
