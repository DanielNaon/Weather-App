let tempmanager= new TempManager()
let renderer=  new Renderer()

async function loadPage(){
    let data = await tempmanager.getDataFromDB()
    await renderer.renderData(data)
}
async function handleSearch(){
    let cityInput = $('input').val()
    console.log(cityInput)
    let newCity =await tempmanager.getCityData(cityInput)
    console.log(tempmanager.cityData)
    await renderer.renderData(tempmanager.cityData)
}
$("#container-cities").on("click", ".save", async function(){
    console.log($(this).closest('div').find('div').attr('id'))
    let cityName = $(this).closest('div').find('div').attr('id')
    await tempmanager.saveCity(cityName)
    let data = await tempmanager.getDataFromDB()
    await renderer.renderData(data)
})
$("#container-cities").on("click", ".remove", async function(){
    console.log($(this).closest('div').find('div').attr('id'))
    let cityName = $(this).closest('div').find('div').attr('id')
    await tempmanager.removeCity(cityName)
    await tempmanager.getDataFromDB()
    await renderer.renderData(tempmanager.cityData)
})
loadPage()