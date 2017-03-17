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
    return locationKeys.map(location=> this.data[location])
  };

  findAverage(district) {
    district = district.toUpperCase();
    const yearlyData = this.data[district].yearlyData
    const keys = Object.keys(yearlyData)
    const avg =  keys.reduce((average, curr) => {
      average += yearlyData[curr];
      return average;
    }, 0);
    return (Math.round(1000*(avg/keys.length))/1000);
  };

  compareDistrictAverages(district1, district2) {
    const distOneAvg = this.findAverage(district1);
    const distTwoAvg = this.findAverage(district2);
    const compared = () => {
      if (distOneAvg > distTwoAvg) {
        return (Math.round(1000*(distTwoAvg/distOneAvg))/1000)
      }
      return (Math.round(1000*(distOneAvg/distTwoAvg))/1000);
    }
    return { [district1.toUpperCase()]: distOneAvg, [district2.toUpperCase()]: distTwoAvg, 'Compared': compared()}
  };
}

export default DistrictRepository;
