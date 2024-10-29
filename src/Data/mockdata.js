const mockData = {
    lists: {
        "01list":{
            id: "01list",
            title: "To do", 
            cards: [{
                id: "01card",
                title: "Go to the bakery"
            }, {
                id: "02card",
                title: "Comprar tomate"
            }, {
                id: "03card",
                title: "Comprar pan"
            },]
        },
        "02list":{
            id: "02list",
            title: "In progress",
            cards: [{
                id: "01card",
                title: "Comprar útiles escolares"
            }]
        }
    }, 
    listIds: ["01list", "02list"]
}

export default mockData;