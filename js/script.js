let canvas = document.getElementById("canvas").getContext("2d")

console.log(infoEmpresas)

let appleIntradayData =
    [
        {
            "datetime": "2023-01-10T21:00:00Z",
            "volume": 4006802,
            "lastPrice": 130.73,
            "openPrice": 130.74,
            "lowPrice": 130.7,
            "highPrice": 130.75
        },
        {
            "datetime": "2023-01-10T20:55:00Z",
            "volume": 1897442,
            "lastPrice": 130.73,
            "openPrice": 130.28,
            "lowPrice": 130.27,
            "highPrice": 130.74
        },
        {
            "datetime": "2023-01-10T20:50:00Z",
            "volume": 1034818,
            "lastPrice": 130.29,
            "openPrice": 130.14,
            "lowPrice": 130.14,
            "highPrice": 130.38
        },
        {
            "datetime": "2023-01-10T20:45:00Z",
            "volume": 452482,
            "lastPrice": 130.14,
            "openPrice": 130.09,
            "lowPrice": 130.0329,
            "highPrice": 130.25
        },
        {
            "datetime": "2023-01-10T20:40:00Z",
            "volume": 530960,
            "lastPrice": 130.1,
            "openPrice": 130.22,
            "lowPrice": 130.01,
            "highPrice": 130.24
        },
        {
            "datetime": "2023-01-10T20:35:00Z",
            "volume": 414530,
            "lastPrice": 130.2239,
            "openPrice": 130.33,
            "lowPrice": 130.15,
            "highPrice": 130.37
        },
        {
            "datetime": "2023-01-10T20:30:00Z",
            "volume": 512641,
            "lastPrice": 130.3236,
            "openPrice": 130.145,
            "lowPrice": 130.145,
            "highPrice": 130.34
        },
        {
            "datetime": "2023-01-10T20:25:00Z",
            "volume": 347922,
            "lastPrice": 130.15,
            "openPrice": 130.155,
            "lowPrice": 130.11,
            "highPrice": 130.23
        },
        {
            "datetime": "2023-01-10T20:20:00Z",
            "volume": 531515,
            "lastPrice": 130.16,
            "openPrice": 130.1605,
            "lowPrice": 130.04,
            "highPrice": 130.25
        },
        {
            "datetime": "2023-01-10T20:15:00Z",
            "volume": 476132,
            "lastPrice": 130.1605,
            "openPrice": 130.02,
            "lowPrice": 130,
            "highPrice": 130.195
        },
        {
            "datetime": "2023-01-10T20:10:00Z",
            "volume": 483511,
            "lastPrice": 130.025,
            "openPrice": 129.96,
            "lowPrice": 129.8,
            "highPrice": 130.05
        },
        {
            "datetime": "2023-01-10T20:05:00Z",
            "volume": 448081,
            "lastPrice": 129.965,
            "openPrice": 130.0201,
            "lowPrice": 129.76,
            "highPrice": 130.075
        },
        {
            "datetime": "2023-01-10T20:00:00Z",
            "volume": 580297,
            "lastPrice": 130.03,
            "openPrice": 130.115,
            "lowPrice": 129.88,
            "highPrice": 130.135
        },
        {
            "datetime": "2023-01-10T19:55:00Z",
            "volume": 333720,
            "lastPrice": 130.115,
            "openPrice": 130.09,
            "lowPrice": 130,
            "highPrice": 130.1765
        },
        {
            "datetime": "2023-01-10T19:50:00Z",
            "volume": 371327,
            "lastPrice": 130.08,
            "openPrice": 130.1475,
            "lowPrice": 129.995,
            "highPrice": 130.2
        },
        {
            "datetime": "2023-01-10T19:45:00Z",
            "volume": 480207,
            "lastPrice": 130.15,
            "openPrice": 130.105,
            "lowPrice": 129.98,
            "highPrice": 130.15
        },
        {
            "datetime": "2023-01-10T19:40:00Z",
            "volume": 345596,
            "lastPrice": 130.105,
            "openPrice": 130.1738,
            "lowPrice": 130.05,
            "highPrice": 130.2
        },
        {
            "datetime": "2023-01-10T19:35:00Z",
            "volume": 321779,
            "lastPrice": 130.17,
            "openPrice": 130.31,
            "lowPrice": 130.13,
            "highPrice": 130.365
        },
        {
            "datetime": "2023-01-10T19:30:00Z",
            "volume": 449646,
            "lastPrice": 130.3072,
            "openPrice": 130.37,
            "lowPrice": 130.22,
            "highPrice": 130.42
        },
        {
            "datetime": "2023-01-10T19:25:00Z",
            "volume": 427060,
            "lastPrice": 130.3612,
            "openPrice": 130.3,
            "lowPrice": 130.18,
            "highPrice": 130.41
        },
        {
            "datetime": "2023-01-10T19:20:00Z",
            "volume": 525967,
            "lastPrice": 130.3029,
            "openPrice": 130.42,
            "lowPrice": 130.28,
            "highPrice": 130.51
        },
        {
            "datetime": "2023-01-10T19:15:00Z",
            "volume": 449705,
            "lastPrice": 130.425,
            "openPrice": 130.435,
            "lowPrice": 130.3939,
            "highPrice": 130.535
        },
        {
            "datetime": "2023-01-10T19:10:00Z",
            "volume": 412679,
            "lastPrice": 130.44,
            "openPrice": 130.375,
            "lowPrice": 130.35,
            "highPrice": 130.4999
        },
        {
            "datetime": "2023-01-10T19:05:00Z",
            "volume": 535098,
            "lastPrice": 130.38,
            "openPrice": 130.4554,
            "lowPrice": 130.23,
            "highPrice": 130.46
        },
        {
            "datetime": "2023-01-10T19:00:00Z",
            "volume": 951221,
            "lastPrice": 130.46,
            "openPrice": 130.23,
            "lowPrice": 130.23,
            "highPrice": 130.69
        },
        {
            "datetime": "2023-01-10T18:55:00Z",
            "volume": 773731,
            "lastPrice": 130.225,
            "openPrice": 130.0885,
            "lowPrice": 129.97,
            "highPrice": 130.27
        },
        {
            "datetime": "2023-01-10T18:50:00Z",
            "volume": 537963,
            "lastPrice": 130.09,
            "openPrice": 130.21,
            "lowPrice": 130.0012,
            "highPrice": 130.24
        },
        {
            "datetime": "2023-01-10T18:45:00Z",
            "volume": 613059,
            "lastPrice": 130.215,
            "openPrice": 129.805,
            "lowPrice": 129.795,
            "highPrice": 130.215
        },
        {
            "datetime": "2023-01-10T18:40:00Z",
            "volume": 485693,
            "lastPrice": 129.81,
            "openPrice": 129.91,
            "lowPrice": 129.775,
            "highPrice": 130.01
        },
        {
            "datetime": "2023-01-10T18:35:00Z",
            "volume": 386732,
            "lastPrice": 129.8987,
            "openPrice": 129.79,
            "lowPrice": 129.76,
            "highPrice": 129.95
        },
        {
            "datetime": "2023-01-10T18:30:00Z",
            "volume": 342994,
            "lastPrice": 129.7901,
            "openPrice": 129.6501,
            "lowPrice": 129.57,
            "highPrice": 129.84
        },
        {
            "datetime": "2023-01-10T18:25:00Z",
            "volume": 261865,
            "lastPrice": 129.6599,
            "openPrice": 129.745,
            "lowPrice": 129.6457,
            "highPrice": 129.76
        },
        {
            "datetime": "2023-01-10T18:20:00Z",
            "volume": 575919,
            "lastPrice": 129.75,
            "openPrice": 129.5996,
            "lowPrice": 129.42,
            "highPrice": 129.78
        },
        {
            "datetime": "2023-01-10T18:15:00Z",
            "volume": 540955,
            "lastPrice": 129.5901,
            "openPrice": 129.66,
            "lowPrice": 129.5,
            "highPrice": 129.675
        },
        {
            "datetime": "2023-01-10T18:10:00Z",
            "volume": 687649,
            "lastPrice": 129.665,
            "openPrice": 129.9501,
            "lowPrice": 129.665,
            "highPrice": 129.98
        },
        {
            "datetime": "2023-01-10T18:05:00Z",
            "volume": 655068,
            "lastPrice": 129.9501,
            "openPrice": 129.6824,
            "lowPrice": 129.62,
            "highPrice": 130
        },
        {
            "datetime": "2023-01-10T18:00:00Z",
            "volume": 496056,
            "lastPrice": 129.68,
            "openPrice": 129.73,
            "lowPrice": 129.61,
            "highPrice": 129.85
        },
        {
            "datetime": "2023-01-10T17:55:00Z",
            "volume": 283488,
            "lastPrice": 129.73,
            "openPrice": 129.71,
            "lowPrice": 129.665,
            "highPrice": 129.7908
        },
        {
            "datetime": "2023-01-10T17:50:00Z",
            "volume": 393120,
            "lastPrice": 129.71,
            "openPrice": 129.66,
            "lowPrice": 129.63,
            "highPrice": 129.86
        },
        {
            "datetime": "2023-01-10T17:45:00Z",
            "volume": 326884,
            "lastPrice": 129.66,
            "openPrice": 129.57,
            "lowPrice": 129.47,
            "highPrice": 129.67
        },
        {
            "datetime": "2023-01-10T17:40:00Z",
            "volume": 520162,
            "lastPrice": 129.58,
            "openPrice": 129.77,
            "lowPrice": 129.56,
            "highPrice": 129.82
        },
        {
            "datetime": "2023-01-10T17:35:00Z",
            "volume": 581831,
            "lastPrice": 129.765,
            "openPrice": 129.2683,
            "lowPrice": 129.24,
            "highPrice": 129.79
        },
        {
            "datetime": "2023-01-10T17:30:00Z",
            "volume": 391528,
            "lastPrice": 129.25,
            "openPrice": 129.11,
            "lowPrice": 129.0517,
            "highPrice": 129.37
        },
        {
            "datetime": "2023-01-10T17:25:00Z",
            "volume": 392549,
            "lastPrice": 129.12,
            "openPrice": 129.2182,
            "lowPrice": 129.04,
            "highPrice": 129.24
        },
        {
            "datetime": "2023-01-10T17:20:00Z",
            "volume": 431179,
            "lastPrice": 129.2163,
            "openPrice": 129.1,
            "lowPrice": 128.97,
            "highPrice": 129.23
        },
        {
            "datetime": "2023-01-10T17:15:00Z",
            "volume": 448018,
            "lastPrice": 129.1,
            "openPrice": 129.15,
            "lowPrice": 128.97,
            "highPrice": 129.1799
        },
        {
            "datetime": "2023-01-10T17:10:00Z",
            "volume": 574659,
            "lastPrice": 129.16,
            "openPrice": 128.93,
            "lowPrice": 128.89,
            "highPrice": 129.24
        },
        {
            "datetime": "2023-01-10T17:05:00Z",
            "volume": 438336,
            "lastPrice": 128.94,
            "openPrice": 128.48,
            "lowPrice": 128.48,
            "highPrice": 128.94
        },
        {
            "datetime": "2023-01-10T17:00:00Z",
            "volume": 723398,
            "lastPrice": 128.48,
            "openPrice": 128.87,
            "lowPrice": 128.45,
            "highPrice": 128.87
        },
        {
            "datetime": "2023-01-10T16:55:00Z",
            "volume": 519417,
            "lastPrice": 128.88,
            "openPrice": 128.8,
            "lowPrice": 128.795,
            "highPrice": 129.08
        },
        {
            "datetime": "2023-01-10T16:50:00Z",
            "volume": 492433,
            "lastPrice": 128.7958,
            "openPrice": 128.97,
            "lowPrice": 128.66,
            "highPrice": 129.05
        },
        {
            "datetime": "2023-01-10T16:45:00Z",
            "volume": 601330,
            "lastPrice": 128.965,
            "openPrice": 128.92,
            "lowPrice": 128.73,
            "highPrice": 129.08
        },
        {
            "datetime": "2023-01-10T16:40:00Z",
            "volume": 299153,
            "lastPrice": 128.925,
            "openPrice": 128.83,
            "lowPrice": 128.825,
            "highPrice": 128.995
        },
        {
            "datetime": "2023-01-10T16:35:00Z",
            "volume": 394376,
            "lastPrice": 128.825,
            "openPrice": 128.94,
            "lowPrice": 128.79,
            "highPrice": 129.0383
        },
        {
            "datetime": "2023-01-10T16:30:00Z",
            "volume": 618642,
            "lastPrice": 128.95,
            "openPrice": 129.02,
            "lowPrice": 128.77,
            "highPrice": 129.19
        },
        {
            "datetime": "2023-01-10T16:25:00Z",
            "volume": 655117,
            "lastPrice": 129.02,
            "openPrice": 129.13,
            "lowPrice": 128.8428,
            "highPrice": 129.197
        },
        {
            "datetime": "2023-01-10T16:20:00Z",
            "volume": 588276,
            "lastPrice": 129.13,
            "openPrice": 128.8,
            "lowPrice": 128.7939,
            "highPrice": 129.23
        },
        {
            "datetime": "2023-01-10T16:15:00Z",
            "volume": 649050,
            "lastPrice": 128.8024,
            "openPrice": 129.03,
            "lowPrice": 128.73,
            "highPrice": 129.1
        },
        {
            "datetime": "2023-01-10T16:10:00Z",
            "volume": 767546,
            "lastPrice": 129.02,
            "openPrice": 128.8703,
            "lowPrice": 128.83,
            "highPrice": 129.2
        },
        {
            "datetime": "2023-01-10T16:05:00Z",
            "volume": 605555,
            "lastPrice": 128.88,
            "openPrice": 129.095,
            "lowPrice": 128.8,
            "highPrice": 129.1
        },
        {
            "datetime": "2023-01-10T16:00:00Z",
            "volume": 614603,
            "lastPrice": 129.09,
            "openPrice": 129.1,
            "lowPrice": 128.935,
            "highPrice": 129.13
        },
        {
            "datetime": "2023-01-10T15:55:00Z",
            "volume": 754230,
            "lastPrice": 129.09,
            "openPrice": 128.82,
            "lowPrice": 128.75,
            "highPrice": 129.2
        },
        {
            "datetime": "2023-01-10T15:50:00Z",
            "volume": 759223,
            "lastPrice": 128.819,
            "openPrice": 128.465,
            "lowPrice": 128.44,
            "highPrice": 128.94
        },
        {
            "datetime": "2023-01-10T15:45:00Z",
            "volume": 1056338,
            "lastPrice": 128.46,
            "openPrice": 128.22,
            "lowPrice": 128.12,
            "highPrice": 128.56
        },
        {
            "datetime": "2023-01-10T15:40:00Z",
            "volume": 1148671,
            "lastPrice": 128.2316,
            "openPrice": 128.84,
            "lowPrice": 128.2316,
            "highPrice": 128.98
        },
        {
            "datetime": "2023-01-10T15:35:00Z",
            "volume": 693088,
            "lastPrice": 128.835,
            "openPrice": 128.81,
            "lowPrice": 128.73,
            "highPrice": 128.95
        },
        {
            "datetime": "2023-01-10T15:30:00Z",
            "volume": 1141447,
            "lastPrice": 128.8,
            "openPrice": 129.4,
            "lowPrice": 128.75,
            "highPrice": 129.4
        },
        {
            "datetime": "2023-01-10T15:25:00Z",
            "volume": 1011776,
            "lastPrice": 129.4001,
            "openPrice": 129.89,
            "lowPrice": 129.33,
            "highPrice": 130
        },
        {
            "datetime": "2023-01-10T15:20:00Z",
            "volume": 659831,
            "lastPrice": 129.9,
            "openPrice": 130.15,
            "lowPrice": 129.785,
            "highPrice": 130.23
        },
        {
            "datetime": "2023-01-10T15:15:00Z",
            "volume": 1124375,
            "lastPrice": 130.15,
            "openPrice": 130.3415,
            "lowPrice": 130.14,
            "highPrice": 130.8367
        },
        {
            "datetime": "2023-01-10T15:10:00Z",
            "volume": 1070222,
            "lastPrice": 130.34,
            "openPrice": 129.97,
            "lowPrice": 129.88,
            "highPrice": 130.671
        },
        {
            "datetime": "2023-01-10T15:05:00Z",
            "volume": 834024,
            "lastPrice": 129.965,
            "openPrice": 129.87,
            "lowPrice": 129.84,
            "highPrice": 130.2
        },
        {
            "datetime": "2023-01-10T15:00:00Z",
            "volume": 1038375,
            "lastPrice": 129.88,
            "openPrice": 129.99,
            "lowPrice": 129.61,
            "highPrice": 130.14
        },
        {
            "datetime": "2023-01-10T14:55:00Z",
            "volume": 1114364,
            "lastPrice": 129.99,
            "openPrice": 130.0601,
            "lowPrice": 129.775,
            "highPrice": 130.29
        },
        {
            "datetime": "2023-01-10T14:50:00Z",
            "volume": 1240916,
            "lastPrice": 130.06,
            "openPrice": 129.889,
            "lowPrice": 129.57,
            "highPrice": 130.25
        },
        {
            "datetime": "2023-01-10T14:45:00Z",
            "volume": 1053822,
            "lastPrice": 129.89,
            "openPrice": 130.095,
            "lowPrice": 129.51,
            "highPrice": 130.41
        },
        {
            "datetime": "2023-01-10T14:40:00Z",
            "volume": 1055795,
            "lastPrice": 130.1,
            "openPrice": 130.374,
            "lowPrice": 129.9,
            "highPrice": 130.45
        },
        {
            "datetime": "2023-01-10T14:35:00Z",
            "volume": 1161447,
            "lastPrice": 130.37,
            "openPrice": 131.1815,
            "lowPrice": 130.2201,
            "highPrice": 131.21
        },
        {
            "datetime": "2023-01-10T14:30:00Z",
            "volume": 2175441,
            "lastPrice": 131.19,
            "openPrice": 130.26,
            "lowPrice": 129.795,
            "highPrice": 131.2636
        },
        {
            "datetime": "2023-01-10T14:25:00Z",
            "volume": 164,
            "lastPrice": 130.26,
            "openPrice": 130.26,
            "lowPrice": 130.26,
            "highPrice": 130.26
        }
    ]





dataAppl = []
labels = []
console.log(intradataData)

appleIntradayData.map(data => {
    dataAppl.push(data.openPrice)
    labels.push(data.datetime)
})
//Invierto los arrays:
dataAppl = dataAppl.reverse()
labels = labels.reverse()

console.log(dataAppl, labels)

const config = {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "USD $",
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
                grace: "40%",
            },
            x: {
                display: false,
            }
        },
    }
}

let chart = new Chart(canvas, config)