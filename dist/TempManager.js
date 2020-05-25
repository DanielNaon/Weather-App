
class TempManager{
    constructor(cityData){
        this.cityData = []
    }
    async getDataFromDB(){
      let bringAllData = await $.get('/cities')
      console.log(bringAllData)
        //   for(let i=0; i<bringAllData.length; i++){
        //       let newCity = bringAllData[i]
        //       this.cityData.push(newCity)
        //   }
        this.cityData = bringAllData
            console.log(this.cityData)
            return bringAllData
     }

    // sending an api request for the server to get data on a new city weather 
    async getCityData(cityName){
        console.log(this.cityData)
       let newCityData = await $.get(`/city/${cityName}`)
       console.log(newCityData)
        let newCity = {
            name: newCityData.name.replace(/\s+/g, '-').toLowerCase(),
            temperature: newCityData.main.temp,
            condition: newCityData.weather[0].description,
            conditionPic: ''
        }
        console.log(newCity)
        this.cityData.push(newCity)
        console.log(this.cityData)
        return newCity
    }
    async saveCity(cityName){
        console.log(this.cityData)
        let cityObj=  this.cityData.find(m=> m.name == cityName)
        console.log(cityObj)
        $.post('/city', cityObj, function(response){
            console.log('POST DONE')
        })
    }
    async removeCity(cityName){
        // let city = this.cityData.find(n=>n.name == cityName)
        // console.log(city)
        // for(let i=0; i<this.cityData.length-1; i++){
        //     if(this.cityData[i].name == cityName){
        //        this.cityData.splice(i, 1)
        //        console.log(this.cityData)
        //     }
        // }
        let req = await $.ajax({
        url: `/city/${cityName}`,
        method: "DELETE",
        success: function (response) {
            console.log("DELETE Complete!")

            }
        })
    }
}

// const test1 = async function()
// {
//     let p1 = new TempManager()
//     await p1.getDataFromDB()
//     await p1.getCityData('Jerusalem')
//     // await p1.saveCity('Jerusalem')
//     await p1.removeCity('london')
// }

// test1()

