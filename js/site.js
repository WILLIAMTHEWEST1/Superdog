//global object

let events = [{
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 240000,
        date: "06/01/2017"
    },
    {
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 250000,
        date: "06/01/2018"
    },
    {
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 257000,
        date: "06/01/2019"
    },
    {
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 130000,
        date: "06/01/2017"
    },
    {
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 140000,
        date: "06/01/2018"
    },
    {
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 150000,
        date: "06/01/2019"
    },
    {
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 40000,
        date: "06/01/2017"
    },
    {
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 45000,
        date: "06/01/2018"
    },
    {
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 50000,
        date: "06/01/2019"
    }
]


//function to actually build the Drop Down of distinct cities
function buildDropDown() {

    let eventDD = document.getElementById("eventDropDown");
    //Now clear the Drop Down
    eventDD.innerHTML = "";

    //Now we get the template
    let ddTemplate = document.getElementById("cityDD-template")

    let curEvents = events;

    //... is the Spread Operator "New" is a new Set Operator that we need to ".map". Inside the map we specify what properties we need from the array.
    let distinctEvents = [...new Set(curEvents.map((event) => event.city))];

    let ddItemNode = document.importNode(ddTemplate.content, true);
    let ddItem = ddItemNode.querySelector("a");
    ddItem.setAttribute("data-string", "All");
    ddItem.textContent = "All";
    eventDD.appendChild(ddItemNode);

    // This adds the Cities to the drop down
    for (let index = 0; index < distinctEvents.length; index++) {
        ddItemNode = document.importNode(ddTemplate.content, true);
        ddItem = ddItemNode.querySelector("a");
        ddItem.setAttribute("data-string", distinctEvents[index]);
        ddItem.textContent = distinctEvents[index];
        eventDD.appendChild(ddItemNode);

    }


}

function displayStats() {

}

//This gets the events for the selected city
function getEvents(ddElement) {

    let cityName = ddElement.getAttribute("data-string");
    alert("Hello " + cityName);

}