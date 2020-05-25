class Renderer{
    constructor(){

    }
    renderData(allCityData){
        $("#container-cities").empty()
        const source = $("#cities-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template({cities: allCityData})
        $("#container-cities").append(someHTML)
    }
}

