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
    const locationKeys = Object.keys(this.data);
    const searchKeys = locationKeys.map(location => location.toLowerCase())

    if(input){
      let search = input.toLowerCase()
      let resultsArr = searchKeys.filter((location, index) => {
        if(location.includes(search)){
          return locationKeys[index]
        }
      });

      // let results = resultsArr.reduce
      return resultsArr
    } else {
      return undefined;
    }
  }
}
