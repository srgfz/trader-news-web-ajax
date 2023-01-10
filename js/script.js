let canvas = document.getElementById("canvas").getContext("2d")
appleHistoryData = [
    {
        "datetime": "2023-01-10T16:05:00Z",
        "volume": 1599516,
        "lastPrice": 116.0115,
        "openPrice": 116.13,
        "lowPrice": 115.78,
        "highPrice": 116.41
    },
    {
        "datetime": "2023-01-10T16:00:00Z",
        "volume": 1777190,
        "lastPrice": 116.13,
        "openPrice": 115.9699,
        "lowPrice": 115.44,
        "highPrice": 116.18
    },
    {
        "datetime": "2023-01-10T15:55:00Z",
        "volume": 1948908,
        "lastPrice": 115.965,
        "openPrice": 116.08,
        "lowPrice": 115.82,
        "highPrice": 116.4699
    },
    {
        "datetime": "2023-01-10T15:50:00Z",
        "volume": 2535235,
        "lastPrice": 116.07,
        "openPrice": 115.52,
        "lowPrice": 115.46,
        "highPrice": 116.545
    },
    {
        "datetime": "2023-01-10T15:45:00Z",
        "volume": 3064245,
        "lastPrice": 115.53,
        "openPrice": 115.27,
        "lowPrice": 114.92,
        "highPrice": 115.9
    },
    {
        "datetime": "2023-01-10T15:40:00Z",
        "volume": 3252224,
        "lastPrice": 115.27,
        "openPrice": 116.2519,
        "lowPrice": 115.21,
        "highPrice": 116.56
    },
    {
        "datetime": "2023-01-10T15:35:00Z",
        "volume": 2422555,
        "lastPrice": 116.25,
        "openPrice": 116.36,
        "lowPrice": 116.02,
        "highPrice": 116.6
    },
    {
        "datetime": "2023-01-10T15:30:00Z",
        "volume": 3642699,
        "lastPrice": 116.3699,
        "openPrice": 117.865,
        "lowPrice": 116.24,
        "highPrice": 117.87
    },
    {
        "datetime": "2023-01-10T15:25:00Z",
        "volume": 2097677,
        "lastPrice": 117.85,
        "openPrice": 118.33,
        "lowPrice": 117.716,
        "highPrice": 118.6679
    },
    {
        "datetime": "2023-01-10T15:20:00Z",
        "volume": 2276214,
        "lastPrice": 118.315,
        "openPrice": 118.97,
        "lowPrice": 118.0501,
        "highPrice": 119.15
    },
    {
        "datetime": "2023-01-10T15:15:00Z",
        "volume": 2880290,
        "lastPrice": 118.9899,
        "openPrice": 119.32,
        "lowPrice": 118.84,
        "highPrice": 119.76
    },
    {
        "datetime": "2023-01-10T15:10:00Z",
        "volume": 3220927,
        "lastPrice": 119.32,
        "openPrice": 118.23,
        "lowPrice": 117.9761,
        "highPrice": 119.4501
    },
    {
        "datetime": "2023-01-10T15:05:00Z",
        "volume": 2508098,
        "lastPrice": 118.2171,
        "openPrice": 117.91,
        "lowPrice": 117.58,
        "highPrice": 118.41
    },
    {
        "datetime": "2023-01-10T15:00:00Z",
        "volume": 2731631,
        "lastPrice": 117.89,
        "openPrice": 118.92,
        "lowPrice": 117.6916,
        "highPrice": 118.95
    },
    {
        "datetime": "2023-01-10T14:55:00Z",
        "volume": 3280679,
        "lastPrice": 118.922,
        "openPrice": 118.32,
        "lowPrice": 117.94,
        "highPrice": 119.34
    },
    {
        "datetime": "2023-01-10T14:50:00Z",
        "volume": 4352654,
        "lastPrice": 118.32,
        "openPrice": 118.33,
        "lowPrice": 117.36,
        "highPrice": 118.93
    },
    {
        "datetime": "2023-01-10T14:45:00Z",
        "volume": 4708432,
        "lastPrice": 118.32,
        "openPrice": 119.2499,
        "lowPrice": 117.61,
        "highPrice": 119.6145
    },
    {
        "datetime": "2023-01-10T14:40:00Z",
        "volume": 4675097,
        "lastPrice": 119.2499,
        "openPrice": 121.3,
        "lowPrice": 118.91,
        "highPrice": 121.3
    },
    {
        "datetime": "2023-01-10T14:35:00Z",
        "volume": 3571286,
        "lastPrice": 121.2613,
        "openPrice": 122.2625,
        "lowPrice": 121.05,
        "highPrice": 122.68
    },
    {
        "datetime": "2023-01-10T14:30:00Z",
        "volume": 5954522,
        "lastPrice": 122.24,
        "openPrice": 121.07,
        "lowPrice": 120.3,
        "highPrice": 122.76
    }
]




dataAppl = []
labels = []
appleHistoryData.map(data => {
    dataAppl.push(data.openPrice)
    labels.push(data.datetime)
})
console.log(dataAppl)

const config = {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Cotización ",
                backgroundColor: "rgb(0,0,0,0.5)",
                borderColor: "rgb(245, 245, 245)",
                data: dataAppl,
                fill: true,
            }
        ]
    },
    options: {
        legend: {
            display: false,
            hidden: true,
        },
        scales: {
            y: {
                max: 125,
                grace: "40%",
            },
            x: {
                display: false,
            }
        },
    }
}

let chart = new Chart(canvas, config)