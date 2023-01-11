const rapidApiKey = "#"

//TODO:performanceId DE TESLA:
const teslaId = "0P0000OQN8"
const appleId = "0P000000GY"

const infoEmpresas = [
    {
        "Name": "Tesla Inc",
        "Currency": "USD",
        "Exchange": "XNAS",
        "Type": "ST",
        "TypeName": "Stock",
        "ExchangeShortName": "NASDAQ",
        "ExchangeTimeZoneOffsetFromUTCInSeconds": -18000,
        "CompanyId": "0C00004EP4",
        "PerformanceId": "0P0000OQN8",
        "ShareClassId": "0P0000OQN8",
        "FundShareClassId": "0P0000OQN8",
        "InceptionDate": "2010-06-29",
        "Sector": "Consumer Cyclical",
        "Industry": "Auto Manufacturers",
        "RegionAndTicker": "USA:TSLA",
        "Instrument": "126.1.TSLA"
    },
    {
        "Name": "Tesla Exploration Ltd",
        "Currency": "USD",
        "Exchange": "PINX",
        "Type": "ST",
        "TypeName": "Stock",
        "ExchangeShortName": "OTC",
        "ExchangeTimeZoneOffsetFromUTCInSeconds": 0,
        "CompanyId": "0C00000K2Z",
        "PerformanceId": "0P0000CDE8",
        "ShareClassId": "0P0000CDE8",
        "FundShareClassId": "0P0000CDE8",
        "InceptionDate": "2010-06-08",
        "Sector": "Energy",
        "Industry": "Oil & Gas Equipment & Services",
        "RegionAndTicker": "USA:TXLZF",
        "Instrument": "125.1.TXLZF"
    }
]


















//TODO: COTIZACIÓN HISTÓRICA DE TESLA Y DE APPLE:
const cotizacionesHistoricas =
    [
        {
            "RequestKey": "0P0000OQN8",
            "1D": [
                {
                    "Volume": null,
                    "Price": 119.77,
                    "DateTime": "2023-01-10T14:29:00Z",
                    "Growth": 0,
                    "CalcString": "119.77-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 1883164,
                    "Price": 121.13,
                    "DateTime": "2023-01-10T14:30:00Z",
                    "Growth": 0.0114,
                    "CalcString": "121.13-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 1267116,
                    "Price": 122.36,
                    "DateTime": "2023-01-10T14:31:00Z",
                    "Growth": 0.0216,
                    "CalcString": "122.36-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 1196883,
                    "Price": 122.4667,
                    "DateTime": "2023-01-10T14:32:00Z",
                    "Growth": 0.0225,
                    "CalcString": "122.4667-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 884955,
                    "Price": 122.2,
                    "DateTime": "2023-01-10T14:33:00Z",
                    "Growth": 0.0203,
                    "CalcString": "122.2-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 722404,
                    "Price": 122.24,
                    "DateTime": "2023-01-10T14:34:00Z",
                    "Growth": 0.0206,
                    "CalcString": "122.24-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 528144,
                    "Price": 122.34,
                    "DateTime": "2023-01-10T14:35:00Z",
                    "Growth": 0.0215,
                    "CalcString": "122.34-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 1018937,
                    "Price": 121.695,
                    "DateTime": "2023-01-10T14:36:00Z",
                    "Growth": 0.0161,
                    "CalcString": "121.695-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 688503,
                    "Price": 121.94,
                    "DateTime": "2023-01-10T14:37:00Z",
                    "Growth": 0.0181,
                    "CalcString": "121.94-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 681038,
                    "Price": 121.46,
                    "DateTime": "2023-01-10T14:38:00Z",
                    "Growth": 0.0141,
                    "CalcString": "121.46-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 654664,
                    "Price": 121.2613,
                    "DateTime": "2023-01-10T14:39:00Z",
                    "Growth": 0.0125,
                    "CalcString": "121.2613-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 843579,
                    "Price": 120.21,
                    "DateTime": "2023-01-10T14:40:00Z",
                    "Growth": 0.0037,
                    "CalcString": "120.21-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 17635191,
                    "Price": 120.545,
                    "DateTime": "2023-01-10T14:40:51Z",
                    "Growth": 0.0065,
                    "CalcString": "120.545-119.77/119.77",
                    "ReferenceDate": "YesterdayPrice"
                }
            ],
            "3M": [
                {
                    "Volume": 83916800,
                    "Price": 223.07,
                    "DateTime": "2022-10-07T00:00:00Z",
                    "Growth": 0,
                    "CalcString": "223.07-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 67925018,
                    "Price": 222.96,
                    "DateTime": "2022-10-10T00:00:00Z",
                    "Growth": -0.0005,
                    "CalcString": "222.96-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 77013202,
                    "Price": 216.5,
                    "DateTime": "2022-10-11T00:00:00Z",
                    "Growth": -0.0295,
                    "CalcString": "216.5-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 66860699,
                    "Price": 217.24,
                    "DateTime": "2022-10-12T00:00:00Z",
                    "Growth": -0.0261,
                    "CalcString": "217.24-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 91483045,
                    "Price": 221.72,
                    "DateTime": "2022-10-13T00:00:00Z",
                    "Growth": -0.0061,
                    "CalcString": "221.72-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 94124511,
                    "Price": 204.99,
                    "DateTime": "2022-10-14T00:00:00Z",
                    "Growth": -0.0811,
                    "CalcString": "204.99-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 79428810,
                    "Price": 219.35,
                    "DateTime": "2022-10-17T00:00:00Z",
                    "Growth": -0.0167,
                    "CalcString": "219.35-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 75891905,
                    "Price": 220.19,
                    "DateTime": "2022-10-18T00:00:00Z",
                    "Growth": -0.0129,
                    "CalcString": "220.19-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 66571479,
                    "Price": 222.04,
                    "DateTime": "2022-10-19T00:00:00Z",
                    "Growth": -0.0046,
                    "CalcString": "222.04-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 117798062,
                    "Price": 207.28,
                    "DateTime": "2022-10-20T00:00:00Z",
                    "Growth": -0.0708,
                    "CalcString": "207.28-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 75713754,
                    "Price": 214.44,
                    "DateTime": "2022-10-21T00:00:00Z",
                    "Growth": -0.0387,
                    "CalcString": "214.44-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 100446765,
                    "Price": 211.25,
                    "DateTime": "2022-10-24T00:00:00Z",
                    "Growth": -0.053,
                    "CalcString": "211.25-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 96507870,
                    "Price": 222.415,
                    "DateTime": "2022-10-25T00:00:00Z",
                    "Growth": -0.0029,
                    "CalcString": "222.415-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 85327078,
                    "Price": 224.64,
                    "DateTime": "2022-10-26T00:00:00Z",
                    "Growth": 0.007,
                    "CalcString": "224.64-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 61638824,
                    "Price": 225.09,
                    "DateTime": "2022-10-27T00:00:00Z",
                    "Growth": 0.0091,
                    "CalcString": "225.09-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 69152386,
                    "Price": 228.52,
                    "DateTime": "2022-10-28T00:00:00Z",
                    "Growth": 0.0244,
                    "CalcString": "228.52-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 61554341,
                    "Price": 227.54,
                    "DateTime": "2022-10-31T00:00:00Z",
                    "Growth": 0.02,
                    "CalcString": "227.54-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 62688822,
                    "Price": 227.82,
                    "DateTime": "2022-11-01T00:00:00Z",
                    "Growth": 0.0213,
                    "CalcString": "227.82-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 63070293,
                    "Price": 214.98,
                    "DateTime": "2022-11-02T00:00:00Z",
                    "Growth": -0.0363,
                    "CalcString": "214.98-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 56538848,
                    "Price": 215.31,
                    "DateTime": "2022-11-03T00:00:00Z",
                    "Growth": -0.0348,
                    "CalcString": "215.31-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 98622212,
                    "Price": 207.47,
                    "DateTime": "2022-11-04T00:00:00Z",
                    "Growth": -0.0699,
                    "CalcString": "207.47-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 93916520,
                    "Price": 197.08,
                    "DateTime": "2022-11-07T00:00:00Z",
                    "Growth": -0.1165,
                    "CalcString": "197.08-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 128803404,
                    "Price": 191.3,
                    "DateTime": "2022-11-08T00:00:00Z",
                    "Growth": -0.1424,
                    "CalcString": "191.3-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 127062659,
                    "Price": 177.59,
                    "DateTime": "2022-11-09T00:00:00Z",
                    "Growth": -0.2039,
                    "CalcString": "177.59-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 132703015,
                    "Price": 190.72,
                    "DateTime": "2022-11-10T00:00:00Z",
                    "Growth": -0.145,
                    "CalcString": "190.72-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 114403575,
                    "Price": 195.97,
                    "DateTime": "2022-11-11T00:00:00Z",
                    "Growth": -0.1215,
                    "CalcString": "195.97-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 92226649,
                    "Price": 190.95,
                    "DateTime": "2022-11-14T00:00:00Z",
                    "Growth": -0.144,
                    "CalcString": "190.95-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 91293785,
                    "Price": 194.42,
                    "DateTime": "2022-11-15T00:00:00Z",
                    "Growth": -0.1284,
                    "CalcString": "194.42-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 66567599,
                    "Price": 186.92,
                    "DateTime": "2022-11-16T00:00:00Z",
                    "Growth": -0.1621,
                    "CalcString": "186.92-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 64335970,
                    "Price": 183.17,
                    "DateTime": "2022-11-17T00:00:00Z",
                    "Growth": -0.1789,
                    "CalcString": "183.17-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 76048866,
                    "Price": 180.19,
                    "DateTime": "2022-11-18T00:00:00Z",
                    "Growth": -0.1922,
                    "CalcString": "180.19-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 92882712,
                    "Price": 167.87,
                    "DateTime": "2022-11-21T00:00:00Z",
                    "Growth": -0.2475,
                    "CalcString": "167.87-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 78452327,
                    "Price": 169.91,
                    "DateTime": "2022-11-22T00:00:00Z",
                    "Growth": -0.2383,
                    "CalcString": "169.91-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 109536709,
                    "Price": 183.2,
                    "DateTime": "2022-11-23T00:00:00Z",
                    "Growth": -0.1787,
                    "CalcString": "183.2-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 50672739,
                    "Price": 182.86,
                    "DateTime": "2022-11-25T00:00:00Z",
                    "Growth": -0.1803,
                    "CalcString": "182.86-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 93038148,
                    "Price": 182.92,
                    "DateTime": "2022-11-28T00:00:00Z",
                    "Growth": -0.18,
                    "CalcString": "182.92-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 83357111,
                    "Price": 180.83,
                    "DateTime": "2022-11-29T00:00:00Z",
                    "Growth": -0.1894,
                    "CalcString": "180.83-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 109186404,
                    "Price": 194.7,
                    "DateTime": "2022-11-30T00:00:00Z",
                    "Growth": -0.1272,
                    "CalcString": "194.7-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 80046213,
                    "Price": 194.7,
                    "DateTime": "2022-12-01T00:00:00Z",
                    "Growth": -0.1272,
                    "CalcString": "194.7-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 73645922,
                    "Price": 194.86,
                    "DateTime": "2022-12-02T00:00:00Z",
                    "Growth": -0.1265,
                    "CalcString": "194.86-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 93122667,
                    "Price": 182.45,
                    "DateTime": "2022-12-05T00:00:00Z",
                    "Growth": -0.1821,
                    "CalcString": "182.45-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 92150823,
                    "Price": 179.82,
                    "DateTime": "2022-12-06T00:00:00Z",
                    "Growth": -0.1939,
                    "CalcString": "179.82-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 84213284,
                    "Price": 174.04,
                    "DateTime": "2022-12-07T00:00:00Z",
                    "Growth": -0.2198,
                    "CalcString": "174.04-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 97624491,
                    "Price": 173.44,
                    "DateTime": "2022-12-08T00:00:00Z",
                    "Growth": -0.2225,
                    "CalcString": "173.44-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 104872336,
                    "Price": 179.05,
                    "DateTime": "2022-12-09T00:00:00Z",
                    "Growth": -0.1973,
                    "CalcString": "179.05-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 109794471,
                    "Price": 167.82,
                    "DateTime": "2022-12-12T00:00:00Z",
                    "Growth": -0.2477,
                    "CalcString": "167.82-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 175862722,
                    "Price": 160.95,
                    "DateTime": "2022-12-13T00:00:00Z",
                    "Growth": -0.2785,
                    "CalcString": "160.95-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 140682338,
                    "Price": 156.8,
                    "DateTime": "2022-12-14T00:00:00Z",
                    "Growth": -0.2971,
                    "CalcString": "156.8-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 122334459,
                    "Price": 157.67,
                    "DateTime": "2022-12-15T00:00:00Z",
                    "Growth": -0.2932,
                    "CalcString": "157.67-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 139032175,
                    "Price": 150.23,
                    "DateTime": "2022-12-16T00:00:00Z",
                    "Growth": -0.3265,
                    "CalcString": "150.23-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 139390634,
                    "Price": 149.87,
                    "DateTime": "2022-12-19T00:00:00Z",
                    "Growth": -0.3281,
                    "CalcString": "149.87-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 159563267,
                    "Price": 137.8,
                    "DateTime": "2022-12-20T00:00:00Z",
                    "Growth": -0.3823,
                    "CalcString": "137.8-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 145417412,
                    "Price": 137.57,
                    "DateTime": "2022-12-21T00:00:00Z",
                    "Growth": -0.3833,
                    "CalcString": "137.57-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 210090250,
                    "Price": 125.35,
                    "DateTime": "2022-12-22T00:00:00Z",
                    "Growth": -0.4381,
                    "CalcString": "125.35-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 166989688,
                    "Price": 123.15,
                    "DateTime": "2022-12-23T00:00:00Z",
                    "Growth": -0.4479,
                    "CalcString": "123.15-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 208643444,
                    "Price": 109.1,
                    "DateTime": "2022-12-27T00:00:00Z",
                    "Growth": -0.5109,
                    "CalcString": "109.1-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 221070537,
                    "Price": 112.71,
                    "DateTime": "2022-12-28T00:00:00Z",
                    "Growth": -0.4947,
                    "CalcString": "112.71-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 221923313,
                    "Price": 121.82,
                    "DateTime": "2022-12-29T00:00:00Z",
                    "Growth": -0.4539,
                    "CalcString": "121.82-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 157777339,
                    "Price": 123.18,
                    "DateTime": "2022-12-30T00:00:00Z",
                    "Growth": -0.4478,
                    "CalcString": "123.18-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 231402818,
                    "Price": 108.1,
                    "DateTime": "2023-01-03T00:00:00Z",
                    "Growth": -0.5154,
                    "CalcString": "108.1-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 180388976,
                    "Price": 113.64,
                    "DateTime": "2023-01-04T00:00:00Z",
                    "Growth": -0.4906,
                    "CalcString": "113.64-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 157986324,
                    "Price": 110.34,
                    "DateTime": "2023-01-05T00:00:00Z",
                    "Growth": -0.5054,
                    "CalcString": "110.34-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 220911051,
                    "Price": 113.06,
                    "DateTime": "2023-01-06T00:00:00Z",
                    "Growth": -0.4932,
                    "CalcString": "113.06-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 190283951,
                    "Price": 119.77,
                    "DateTime": "2023-01-09T00:00:00Z",
                    "Growth": -0.4631,
                    "CalcString": "119.77-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 17635191,
                    "Price": 120.545,
                    "DateTime": "2023-01-10T14:40:51Z",
                    "Growth": -0.4596,
                    "CalcString": "120.545-223.07/223.07",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                }
            ],
            "1Y": [
                {
                    "Volume": 28054916,
                    "Price": 342.32,
                    "DateTime": "2022-01-07T00:00:00Z",
                    "Growth": 0,
                    "CalcString": "342.32-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 30604959,
                    "Price": 352.7066666667,
                    "DateTime": "2022-01-10T00:00:00Z",
                    "Growth": 0.0303,
                    "CalcString": "352.7066666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22021070,
                    "Price": 354.8,
                    "DateTime": "2022-01-11T00:00:00Z",
                    "Growth": 0.0365,
                    "CalcString": "354.8-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 27913005,
                    "Price": 368.74,
                    "DateTime": "2022-01-12T00:00:00Z",
                    "Growth": 0.0772,
                    "CalcString": "368.74-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 32403264,
                    "Price": 343.8533333333,
                    "DateTime": "2022-01-13T00:00:00Z",
                    "Growth": 0.0045,
                    "CalcString": "343.8533333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 24308137,
                    "Price": 349.87,
                    "DateTime": "2022-01-14T00:00:00Z",
                    "Growth": 0.0221,
                    "CalcString": "349.87-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22329803,
                    "Price": 343.5033333333,
                    "DateTime": "2022-01-18T00:00:00Z",
                    "Growth": 0.0035,
                    "CalcString": "343.5033333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 25147496,
                    "Price": 331.8833333333,
                    "DateTime": "2022-01-19T00:00:00Z",
                    "Growth": -0.0305,
                    "CalcString": "331.8833333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 23496248,
                    "Price": 332.09,
                    "DateTime": "2022-01-20T00:00:00Z",
                    "Growth": -0.0299,
                    "CalcString": "332.09-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 34472009,
                    "Price": 314.6333333333,
                    "DateTime": "2022-01-21T00:00:00Z",
                    "Growth": -0.0809,
                    "CalcString": "314.6333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 50791714,
                    "Price": 310,
                    "DateTime": "2022-01-24T00:00:00Z",
                    "Growth": -0.0944,
                    "CalcString": "310-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 28865302,
                    "Price": 306.1333333333,
                    "DateTime": "2022-01-25T00:00:00Z",
                    "Growth": -0.1057,
                    "CalcString": "306.1333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 34955761,
                    "Price": 312.47,
                    "DateTime": "2022-01-26T00:00:00Z",
                    "Growth": -0.0872,
                    "CalcString": "312.47-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 49036523,
                    "Price": 276.3666666667,
                    "DateTime": "2022-01-27T00:00:00Z",
                    "Growth": -0.1927,
                    "CalcString": "276.3666666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 44929650,
                    "Price": 282.1166666667,
                    "DateTime": "2022-01-28T00:00:00Z",
                    "Growth": -0.1759,
                    "CalcString": "282.1166666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 34812032,
                    "Price": 312.24,
                    "DateTime": "2022-01-31T00:00:00Z",
                    "Growth": -0.0879,
                    "CalcString": "312.24-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 24379446,
                    "Price": 310.4166666667,
                    "DateTime": "2022-02-01T00:00:00Z",
                    "Growth": -0.0932,
                    "CalcString": "310.4166666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22264345,
                    "Price": 301.8866666667,
                    "DateTime": "2022-02-02T00:00:00Z",
                    "Growth": -0.1181,
                    "CalcString": "301.8866666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 26285186,
                    "Price": 297.0466666667,
                    "DateTime": "2022-02-03T00:00:00Z",
                    "Growth": -0.1323,
                    "CalcString": "297.0466666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 24541822,
                    "Price": 307.7733333333,
                    "DateTime": "2022-02-04T00:00:00Z",
                    "Growth": -0.1009,
                    "CalcString": "307.7733333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 20331488,
                    "Price": 302.4466666667,
                    "DateTime": "2022-02-07T00:00:00Z",
                    "Growth": -0.1165,
                    "CalcString": "302.4466666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 16909671,
                    "Price": 307.3333333333,
                    "DateTime": "2022-02-08T00:00:00Z",
                    "Growth": -0.1022,
                    "CalcString": "307.3333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 17419848,
                    "Price": 310.6666666667,
                    "DateTime": "2022-02-09T00:00:00Z",
                    "Growth": -0.0925,
                    "CalcString": "310.6666666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22042277,
                    "Price": 301.5166666667,
                    "DateTime": "2022-02-10T00:00:00Z",
                    "Growth": -0.1192,
                    "CalcString": "301.5166666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 26548623,
                    "Price": 286.6666666667,
                    "DateTime": "2022-02-11T00:00:00Z",
                    "Growth": -0.1626,
                    "CalcString": "286.6666666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22585472,
                    "Price": 291.92,
                    "DateTime": "2022-02-14T00:00:00Z",
                    "Growth": -0.1472,
                    "CalcString": "291.92-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 19216514,
                    "Price": 307.4766666667,
                    "DateTime": "2022-02-15T00:00:00Z",
                    "Growth": -0.1018,
                    "CalcString": "307.4766666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 17098132,
                    "Price": 307.7966666667,
                    "DateTime": "2022-02-16T00:00:00Z",
                    "Growth": -0.1009,
                    "CalcString": "307.7966666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 18392806,
                    "Price": 292.1166666667,
                    "DateTime": "2022-02-17T00:00:00Z",
                    "Growth": -0.1467,
                    "CalcString": "292.1166666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22833947,
                    "Price": 285.66,
                    "DateTime": "2022-02-18T00:00:00Z",
                    "Growth": -0.1655,
                    "CalcString": "285.66-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 27762734,
                    "Price": 273.8433333333,
                    "DateTime": "2022-02-22T00:00:00Z",
                    "Growth": -0.2,
                    "CalcString": "273.8433333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 31752336,
                    "Price": 254.68,
                    "DateTime": "2022-02-23T00:00:00Z",
                    "Growth": -0.256,
                    "CalcString": "254.68-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 45107425,
                    "Price": 266.9233333333,
                    "DateTime": "2022-02-24T00:00:00Z",
                    "Growth": -0.2203,
                    "CalcString": "266.9233333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 25355921,
                    "Price": 269.9566666667,
                    "DateTime": "2022-02-25T00:00:00Z",
                    "Growth": -0.2114,
                    "CalcString": "269.9566666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 33002289,
                    "Price": 290.1433333333,
                    "DateTime": "2022-02-28T00:00:00Z",
                    "Growth": -0.1524,
                    "CalcString": "290.1433333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 24922287,
                    "Price": 288.1233333333,
                    "DateTime": "2022-03-01T00:00:00Z",
                    "Growth": -0.1583,
                    "CalcString": "288.1233333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 24881146,
                    "Price": 293.2966666667,
                    "DateTime": "2022-03-02T00:00:00Z",
                    "Growth": -0.1432,
                    "CalcString": "293.2966666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 20541169,
                    "Price": 279.7633333333,
                    "DateTime": "2022-03-03T00:00:00Z",
                    "Growth": -0.1827,
                    "CalcString": "279.7633333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22393287,
                    "Price": 279.43,
                    "DateTime": "2022-03-04T00:00:00Z",
                    "Growth": -0.1837,
                    "CalcString": "279.43-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 24164724,
                    "Price": 268.1933333333,
                    "DateTime": "2022-03-07T00:00:00Z",
                    "Growth": -0.2165,
                    "CalcString": "268.1933333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 26799702,
                    "Price": 274.8,
                    "DateTime": "2022-03-08T00:00:00Z",
                    "Growth": -0.1972,
                    "CalcString": "274.8-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 19727993,
                    "Price": 286.3233333333,
                    "DateTime": "2022-03-09T00:00:00Z",
                    "Growth": -0.1636,
                    "CalcString": "286.3233333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 19549548,
                    "Price": 279.4333333333,
                    "DateTime": "2022-03-10T00:00:00Z",
                    "Growth": -0.1837,
                    "CalcString": "279.4333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22345722,
                    "Price": 265.1166666667,
                    "DateTime": "2022-03-11T00:00:00Z",
                    "Growth": -0.2255,
                    "CalcString": "265.1166666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 23717421,
                    "Price": 255.4566666667,
                    "DateTime": "2022-03-14T00:00:00Z",
                    "Growth": -0.2537,
                    "CalcString": "255.4566666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22280381,
                    "Price": 267.2966666667,
                    "DateTime": "2022-03-15T00:00:00Z",
                    "Growth": -0.2192,
                    "CalcString": "267.2966666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 28009607,
                    "Price": 280.0766666667,
                    "DateTime": "2022-03-16T00:00:00Z",
                    "Growth": -0.1818,
                    "CalcString": "280.0766666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22194324,
                    "Price": 290.5333333333,
                    "DateTime": "2022-03-17T00:00:00Z",
                    "Growth": -0.1513,
                    "CalcString": "290.5333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 33471397,
                    "Price": 301.7966666667,
                    "DateTime": "2022-03-18T00:00:00Z",
                    "Growth": -0.1184,
                    "CalcString": "301.7966666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 27327216,
                    "Price": 307.0533333333,
                    "DateTime": "2022-03-21T00:00:00Z",
                    "Growth": -0.103,
                    "CalcString": "307.0533333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 35289519,
                    "Price": 331.3266666667,
                    "DateTime": "2022-03-22T00:00:00Z",
                    "Growth": -0.0321,
                    "CalcString": "331.3266666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 40225383,
                    "Price": 333.0366666667,
                    "DateTime": "2022-03-23T00:00:00Z",
                    "Growth": -0.0271,
                    "CalcString": "333.0366666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22973626,
                    "Price": 337.9733333333,
                    "DateTime": "2022-03-24T00:00:00Z",
                    "Growth": -0.0127,
                    "CalcString": "337.9733333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 20677182,
                    "Price": 336.88,
                    "DateTime": "2022-03-25T00:00:00Z",
                    "Growth": -0.0159,
                    "CalcString": "336.88-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 34168693,
                    "Price": 363.9466666667,
                    "DateTime": "2022-03-28T00:00:00Z",
                    "Growth": 0.0632,
                    "CalcString": "363.9466666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 24538273,
                    "Price": 366.5233333333,
                    "DateTime": "2022-03-29T00:00:00Z",
                    "Growth": 0.0707,
                    "CalcString": "366.5233333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 19955002,
                    "Price": 364.6633333333,
                    "DateTime": "2022-03-30T00:00:00Z",
                    "Growth": 0.0653,
                    "CalcString": "364.6633333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 16330919,
                    "Price": 359.2,
                    "DateTime": "2022-03-31T00:00:00Z",
                    "Growth": 0.0493,
                    "CalcString": "359.2-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 18087741,
                    "Price": 361.53,
                    "DateTime": "2022-04-01T00:00:00Z",
                    "Growth": 0.0561,
                    "CalcString": "361.53-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 27392567,
                    "Price": 381.8166666667,
                    "DateTime": "2022-04-04T00:00:00Z",
                    "Growth": 0.1154,
                    "CalcString": "381.8166666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 26691673,
                    "Price": 363.7533333333,
                    "DateTime": "2022-04-05T00:00:00Z",
                    "Growth": 0.0626,
                    "CalcString": "363.7533333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29782845,
                    "Price": 348.5866666667,
                    "DateTime": "2022-04-06T00:00:00Z",
                    "Growth": 0.0183,
                    "CalcString": "348.5866666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 26482353,
                    "Price": 352.42,
                    "DateTime": "2022-04-07T00:00:00Z",
                    "Growth": 0.0295,
                    "CalcString": "352.42-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 18337896,
                    "Price": 341.83,
                    "DateTime": "2022-04-08T00:00:00Z",
                    "Growth": -0.0014,
                    "CalcString": "341.83-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 19785735,
                    "Price": 325.31,
                    "DateTime": "2022-04-11T00:00:00Z",
                    "Growth": -0.0497,
                    "CalcString": "325.31-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 21992032,
                    "Price": 328.9833333333,
                    "DateTime": "2022-04-12T00:00:00Z",
                    "Growth": -0.039,
                    "CalcString": "328.9833333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 18373737,
                    "Price": 340.79,
                    "DateTime": "2022-04-13T00:00:00Z",
                    "Growth": -0.0045,
                    "CalcString": "340.79-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 19474135,
                    "Price": 328.3333333333,
                    "DateTime": "2022-04-14T00:00:00Z",
                    "Growth": -0.0409,
                    "CalcString": "328.3333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 17238407,
                    "Price": 334.7633333333,
                    "DateTime": "2022-04-18T00:00:00Z",
                    "Growth": -0.0221,
                    "CalcString": "334.7633333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 16615944,
                    "Price": 342.7166666667,
                    "DateTime": "2022-04-19T00:00:00Z",
                    "Growth": 0.0012,
                    "CalcString": "342.7166666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 23570442,
                    "Price": 325.7333333333,
                    "DateTime": "2022-04-20T00:00:00Z",
                    "Growth": -0.0485,
                    "CalcString": "325.7333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 35138779,
                    "Price": 336.26,
                    "DateTime": "2022-04-21T00:00:00Z",
                    "Growth": -0.0177,
                    "CalcString": "336.26-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 23232186,
                    "Price": 335.0166666667,
                    "DateTime": "2022-04-22T00:00:00Z",
                    "Growth": -0.0213,
                    "CalcString": "335.0166666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22780445,
                    "Price": 332.6733333333,
                    "DateTime": "2022-04-25T00:00:00Z",
                    "Growth": -0.0282,
                    "CalcString": "332.6733333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 45377889,
                    "Price": 292.14,
                    "DateTime": "2022-04-26T00:00:00Z",
                    "Growth": -0.1466,
                    "CalcString": "292.14-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 25652132,
                    "Price": 293.8366666667,
                    "DateTime": "2022-04-27T00:00:00Z",
                    "Growth": -0.1416,
                    "CalcString": "293.8366666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 41649509,
                    "Price": 292.5033333333,
                    "DateTime": "2022-04-28T00:00:00Z",
                    "Growth": -0.1455,
                    "CalcString": "292.5033333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29377665,
                    "Price": 290.2533333333,
                    "DateTime": "2022-04-29T00:00:00Z",
                    "Growth": -0.1521,
                    "CalcString": "290.2533333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 25260457,
                    "Price": 300.98,
                    "DateTime": "2022-05-02T00:00:00Z",
                    "Growth": -0.1208,
                    "CalcString": "300.98-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 21236525,
                    "Price": 303.0833333333,
                    "DateTime": "2022-05-03T00:00:00Z",
                    "Growth": -0.1146,
                    "CalcString": "303.0833333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 27214568,
                    "Price": 317.54,
                    "DateTime": "2022-05-04T00:00:00Z",
                    "Growth": -0.0724,
                    "CalcString": "317.54-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 30839731,
                    "Price": 291.0933333333,
                    "DateTime": "2022-05-05T00:00:00Z",
                    "Growth": -0.1496,
                    "CalcString": "291.0933333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 24301037,
                    "Price": 288.55,
                    "DateTime": "2022-05-06T00:00:00Z",
                    "Growth": -0.1571,
                    "CalcString": "288.55-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 30270074,
                    "Price": 262.37,
                    "DateTime": "2022-05-09T00:00:00Z",
                    "Growth": -0.2336,
                    "CalcString": "262.37-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 28133877,
                    "Price": 266.68,
                    "DateTime": "2022-05-10T00:00:00Z",
                    "Growth": -0.221,
                    "CalcString": "266.68-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 32408153,
                    "Price": 244.6666666667,
                    "DateTime": "2022-05-11T00:00:00Z",
                    "Growth": -0.2853,
                    "CalcString": "244.6666666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 46770954,
                    "Price": 242.6666666667,
                    "DateTime": "2022-05-12T00:00:00Z",
                    "Growth": -0.2911,
                    "CalcString": "242.6666666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 30716908,
                    "Price": 256.53,
                    "DateTime": "2022-05-13T00:00:00Z",
                    "Growth": -0.2506,
                    "CalcString": "256.53-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 28699513,
                    "Price": 241.4566666667,
                    "DateTime": "2022-05-16T00:00:00Z",
                    "Growth": -0.2946,
                    "CalcString": "241.4566666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 26745370,
                    "Price": 253.87,
                    "DateTime": "2022-05-17T00:00:00Z",
                    "Growth": -0.2584,
                    "CalcString": "253.87-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29270604,
                    "Price": 236.6033333333,
                    "DateTime": "2022-05-18T00:00:00Z",
                    "Growth": -0.3088,
                    "CalcString": "236.6033333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 30098891,
                    "Price": 236.4733333333,
                    "DateTime": "2022-05-19T00:00:00Z",
                    "Growth": -0.3092,
                    "CalcString": "236.4733333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 48324435,
                    "Price": 221.3,
                    "DateTime": "2022-05-20T00:00:00Z",
                    "Growth": -0.3535,
                    "CalcString": "221.3-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29634546,
                    "Price": 224.9666666667,
                    "DateTime": "2022-05-23T00:00:00Z",
                    "Growth": -0.3428,
                    "CalcString": "224.9666666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29697505,
                    "Price": 209.3866666667,
                    "DateTime": "2022-05-24T00:00:00Z",
                    "Growth": -0.3883,
                    "CalcString": "209.3866666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 30713108,
                    "Price": 219.6,
                    "DateTime": "2022-05-25T00:00:00Z",
                    "Growth": -0.3585,
                    "CalcString": "219.6-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 35334448,
                    "Price": 235.91,
                    "DateTime": "2022-05-26T00:00:00Z",
                    "Growth": -0.3108,
                    "CalcString": "235.91-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29764994,
                    "Price": 253.21,
                    "DateTime": "2022-05-27T00:00:00Z",
                    "Growth": -0.2603,
                    "CalcString": "253.21-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 33971457,
                    "Price": 252.7533333333,
                    "DateTime": "2022-05-31T00:00:00Z",
                    "Growth": -0.2616,
                    "CalcString": "252.7533333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 25749321,
                    "Price": 246.79,
                    "DateTime": "2022-06-01T00:00:00Z",
                    "Growth": -0.2791,
                    "CalcString": "246.79-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 31157706,
                    "Price": 258.3333333333,
                    "DateTime": "2022-06-02T00:00:00Z",
                    "Growth": -0.2453,
                    "CalcString": "258.3333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 37464579,
                    "Price": 234.5166666667,
                    "DateTime": "2022-06-03T00:00:00Z",
                    "Growth": -0.3149,
                    "CalcString": "234.5166666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 28068174,
                    "Price": 238.28,
                    "DateTime": "2022-06-06T00:00:00Z",
                    "Growth": -0.3039,
                    "CalcString": "238.28-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 24269534,
                    "Price": 238.8866666667,
                    "DateTime": "2022-06-07T00:00:00Z",
                    "Growth": -0.3022,
                    "CalcString": "238.8866666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 25403540,
                    "Price": 241.8666666667,
                    "DateTime": "2022-06-08T00:00:00Z",
                    "Growth": -0.2934,
                    "CalcString": "241.8666666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 32163769,
                    "Price": 239.7066666667,
                    "DateTime": "2022-06-09T00:00:00Z",
                    "Growth": -0.2998,
                    "CalcString": "239.7066666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 32696966,
                    "Price": 232.23,
                    "DateTime": "2022-06-10T00:00:00Z",
                    "Growth": -0.3216,
                    "CalcString": "232.23-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 34255754,
                    "Price": 215.7366666667,
                    "DateTime": "2022-06-13T00:00:00Z",
                    "Growth": -0.3698,
                    "CalcString": "215.7366666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 32662932,
                    "Price": 220.89,
                    "DateTime": "2022-06-14T00:00:00Z",
                    "Growth": -0.3547,
                    "CalcString": "220.89-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 39710645,
                    "Price": 233,
                    "DateTime": "2022-06-15T00:00:00Z",
                    "Growth": -0.3194,
                    "CalcString": "233-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 35796900,
                    "Price": 213.1,
                    "DateTime": "2022-06-16T00:00:00Z",
                    "Growth": -0.3775,
                    "CalcString": "213.1-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 30880590,
                    "Price": 216.76,
                    "DateTime": "2022-06-17T00:00:00Z",
                    "Growth": -0.3668,
                    "CalcString": "216.76-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 40930985,
                    "Price": 237.0366666667,
                    "DateTime": "2022-06-21T00:00:00Z",
                    "Growth": -0.3076,
                    "CalcString": "237.0366666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 33842420,
                    "Price": 236.0866666667,
                    "DateTime": "2022-06-22T00:00:00Z",
                    "Growth": -0.3103,
                    "CalcString": "236.0866666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 34734226,
                    "Price": 235.07,
                    "DateTime": "2022-06-23T00:00:00Z",
                    "Growth": -0.3133,
                    "CalcString": "235.07-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 31923565,
                    "Price": 245.7066666667,
                    "DateTime": "2022-06-24T00:00:00Z",
                    "Growth": -0.2822,
                    "CalcString": "245.7066666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29726104,
                    "Price": 244.92,
                    "DateTime": "2022-06-27T00:00:00Z",
                    "Growth": -0.2845,
                    "CalcString": "244.92-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 30222167,
                    "Price": 232.6633333333,
                    "DateTime": "2022-06-28T00:00:00Z",
                    "Growth": -0.3203,
                    "CalcString": "232.6633333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 27632418,
                    "Price": 228.49,
                    "DateTime": "2022-06-29T00:00:00Z",
                    "Growth": -0.3325,
                    "CalcString": "228.49-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 31533484,
                    "Price": 224.4733333333,
                    "DateTime": "2022-06-30T00:00:00Z",
                    "Growth": -0.3443,
                    "CalcString": "224.4733333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 24820148,
                    "Price": 227.2633333333,
                    "DateTime": "2022-07-01T00:00:00Z",
                    "Growth": -0.3361,
                    "CalcString": "227.2633333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 28259704,
                    "Price": 233.0666666667,
                    "DateTime": "2022-07-05T00:00:00Z",
                    "Growth": -0.3192,
                    "CalcString": "233.0666666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 23951210,
                    "Price": 231.7333333333,
                    "DateTime": "2022-07-06T00:00:00Z",
                    "Growth": -0.3231,
                    "CalcString": "231.7333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 27310230,
                    "Price": 244.5433333333,
                    "DateTime": "2022-07-07T00:00:00Z",
                    "Growth": -0.2856,
                    "CalcString": "244.5433333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 33951362,
                    "Price": 250.7633333333,
                    "DateTime": "2022-07-08T00:00:00Z",
                    "Growth": -0.2675,
                    "CalcString": "250.7633333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 33169740,
                    "Price": 234.3433333333,
                    "DateTime": "2022-07-11T00:00:00Z",
                    "Growth": -0.3154,
                    "CalcString": "234.3433333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29310320,
                    "Price": 233.07,
                    "DateTime": "2022-07-12T00:00:00Z",
                    "Growth": -0.3191,
                    "CalcString": "233.07-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 32651499,
                    "Price": 237.04,
                    "DateTime": "2022-07-13T00:00:00Z",
                    "Growth": -0.3075,
                    "CalcString": "237.04-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 26185833,
                    "Price": 238.3133333333,
                    "DateTime": "2022-07-14T00:00:00Z",
                    "Growth": -0.3038,
                    "CalcString": "238.3133333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 23227673,
                    "Price": 240.0666666667,
                    "DateTime": "2022-07-15T00:00:00Z",
                    "Growth": -0.2987,
                    "CalcString": "240.0666666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 27512476,
                    "Price": 240.5466666667,
                    "DateTime": "2022-07-18T00:00:00Z",
                    "Growth": -0.2973,
                    "CalcString": "240.5466666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 26963370,
                    "Price": 245.53,
                    "DateTime": "2022-07-19T00:00:00Z",
                    "Growth": -0.2827,
                    "CalcString": "245.53-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29621363,
                    "Price": 247.5,
                    "DateTime": "2022-07-20T00:00:00Z",
                    "Growth": -0.277,
                    "CalcString": "247.5-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 47344059,
                    "Price": 271.7066666667,
                    "DateTime": "2022-07-21T00:00:00Z",
                    "Growth": -0.2063,
                    "CalcString": "271.7066666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 34490949,
                    "Price": 272.2433333333,
                    "DateTime": "2022-07-22T00:00:00Z",
                    "Growth": -0.2047,
                    "CalcString": "272.2433333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 21357835,
                    "Price": 268.4333333333,
                    "DateTime": "2022-07-25T00:00:00Z",
                    "Growth": -0.2158,
                    "CalcString": "268.4333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22273586,
                    "Price": 258.86,
                    "DateTime": "2022-07-26T00:00:00Z",
                    "Growth": -0.2438,
                    "CalcString": "258.86-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29369996,
                    "Price": 274.82,
                    "DateTime": "2022-07-27T00:00:00Z",
                    "Growth": -0.1972,
                    "CalcString": "274.82-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 28240997,
                    "Price": 280.9,
                    "DateTime": "2022-07-28T00:00:00Z",
                    "Growth": -0.1794,
                    "CalcString": "280.9-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 31770961,
                    "Price": 297.15,
                    "DateTime": "2022-07-29T00:00:00Z",
                    "Growth": -0.132,
                    "CalcString": "297.15-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 39014296,
                    "Price": 297.2766666667,
                    "DateTime": "2022-08-01T00:00:00Z",
                    "Growth": -0.1316,
                    "CalcString": "297.2766666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 31859156,
                    "Price": 300.5866666667,
                    "DateTime": "2022-08-02T00:00:00Z",
                    "Growth": -0.1219,
                    "CalcString": "300.5866666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 26697035,
                    "Price": 307.3966666667,
                    "DateTime": "2022-08-03T00:00:00Z",
                    "Growth": -0.102,
                    "CalcString": "307.3966666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 24085439,
                    "Price": 308.6333333333,
                    "DateTime": "2022-08-04T00:00:00Z",
                    "Growth": -0.0984,
                    "CalcString": "308.6333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 37724299,
                    "Price": 288.17,
                    "DateTime": "2022-08-05T00:00:00Z",
                    "Growth": -0.1582,
                    "CalcString": "288.17-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 33121758,
                    "Price": 290.4233333333,
                    "DateTime": "2022-08-08T00:00:00Z",
                    "Growth": -0.1516,
                    "CalcString": "290.4233333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 28748227,
                    "Price": 283.3333333333,
                    "DateTime": "2022-08-09T00:00:00Z",
                    "Growth": -0.1723,
                    "CalcString": "283.3333333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 31639624,
                    "Price": 294.3566666667,
                    "DateTime": "2022-08-10T00:00:00Z",
                    "Growth": -0.1401,
                    "CalcString": "294.3566666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 23385015,
                    "Price": 286.63,
                    "DateTime": "2022-08-11T00:00:00Z",
                    "Growth": -0.1627,
                    "CalcString": "286.63-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 26552429,
                    "Price": 300.03,
                    "DateTime": "2022-08-12T00:00:00Z",
                    "Growth": -0.1235,
                    "CalcString": "300.03-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29786389,
                    "Price": 309.32,
                    "DateTime": "2022-08-15T00:00:00Z",
                    "Growth": -0.0964,
                    "CalcString": "309.32-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 29378774,
                    "Price": 306.5633333333,
                    "DateTime": "2022-08-16T00:00:00Z",
                    "Growth": -0.1045,
                    "CalcString": "306.5633333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 22921990,
                    "Price": 303.9966666667,
                    "DateTime": "2022-08-17T00:00:00Z",
                    "Growth": -0.112,
                    "CalcString": "303.9966666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 15833512,
                    "Price": 302.87,
                    "DateTime": "2022-08-18T00:00:00Z",
                    "Growth": -0.1152,
                    "CalcString": "302.87-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 20465129,
                    "Price": 296.6666666667,
                    "DateTime": "2022-08-19T00:00:00Z",
                    "Growth": -0.1334,
                    "CalcString": "296.6666666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 18614449,
                    "Price": 289.9133333333,
                    "DateTime": "2022-08-22T00:00:00Z",
                    "Growth": -0.1531,
                    "CalcString": "289.9133333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 21328348,
                    "Price": 296.4533333333,
                    "DateTime": "2022-08-23T00:00:00Z",
                    "Growth": -0.134,
                    "CalcString": "296.4533333333-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 19086572,
                    "Price": 297.0966666667,
                    "DateTime": "2022-08-24T00:00:00Z",
                    "Growth": -0.1321,
                    "CalcString": "297.0966666667-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 53230013,
                    "Price": 296.07,
                    "DateTime": "2022-08-25T00:00:00Z",
                    "Growth": -0.1351,
                    "CalcString": "296.07-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 57163947,
                    "Price": 288.09,
                    "DateTime": "2022-08-26T00:00:00Z",
                    "Growth": -0.1584,
                    "CalcString": "288.09-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 41864742,
                    "Price": 284.82,
                    "DateTime": "2022-08-29T00:00:00Z",
                    "Growth": -0.168,
                    "CalcString": "284.82-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 50541759,
                    "Price": 277.7,
                    "DateTime": "2022-08-30T00:00:00Z",
                    "Growth": -0.1888,
                    "CalcString": "277.7-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 52107337,
                    "Price": 275.61,
                    "DateTime": "2022-08-31T00:00:00Z",
                    "Growth": -0.1949,
                    "CalcString": "275.61-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 54287024,
                    "Price": 277.16,
                    "DateTime": "2022-09-01T00:00:00Z",
                    "Growth": -0.1903,
                    "CalcString": "277.16-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 50890090,
                    "Price": 270.21,
                    "DateTime": "2022-09-02T00:00:00Z",
                    "Growth": -0.2107,
                    "CalcString": "270.21-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 55859984,
                    "Price": 274.42,
                    "DateTime": "2022-09-06T00:00:00Z",
                    "Growth": -0.1984,
                    "CalcString": "274.42-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 50028916,
                    "Price": 283.7,
                    "DateTime": "2022-09-07T00:00:00Z",
                    "Growth": -0.1712,
                    "CalcString": "283.7-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 53713124,
                    "Price": 289.26,
                    "DateTime": "2022-09-08T00:00:00Z",
                    "Growth": -0.155,
                    "CalcString": "289.26-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 54470854,
                    "Price": 299.68,
                    "DateTime": "2022-09-09T00:00:00Z",
                    "Growth": -0.1246,
                    "CalcString": "299.68-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 48674604,
                    "Price": 304.42,
                    "DateTime": "2022-09-12T00:00:00Z",
                    "Growth": -0.1107,
                    "CalcString": "304.42-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 68229619,
                    "Price": 292.13,
                    "DateTime": "2022-09-13T00:00:00Z",
                    "Growth": -0.1466,
                    "CalcString": "292.13-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 72628653,
                    "Price": 302.61,
                    "DateTime": "2022-09-14T00:00:00Z",
                    "Growth": -0.116,
                    "CalcString": "302.61-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 64795523,
                    "Price": 303.75,
                    "DateTime": "2022-09-15T00:00:00Z",
                    "Growth": -0.1127,
                    "CalcString": "303.75-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 87087786,
                    "Price": 303.35,
                    "DateTime": "2022-09-16T00:00:00Z",
                    "Growth": -0.1138,
                    "CalcString": "303.35-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 60231156,
                    "Price": 309.07,
                    "DateTime": "2022-09-19T00:00:00Z",
                    "Growth": -0.0971,
                    "CalcString": "309.07-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 61642783,
                    "Price": 308.73,
                    "DateTime": "2022-09-20T00:00:00Z",
                    "Growth": -0.0981,
                    "CalcString": "308.73-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 62555656,
                    "Price": 300.8,
                    "DateTime": "2022-09-21T00:00:00Z",
                    "Growth": -0.1213,
                    "CalcString": "300.8-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 70545413,
                    "Price": 288.59,
                    "DateTime": "2022-09-22T00:00:00Z",
                    "Growth": -0.157,
                    "CalcString": "288.59-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 63748362,
                    "Price": 275.33,
                    "DateTime": "2022-09-23T00:00:00Z",
                    "Growth": -0.1957,
                    "CalcString": "275.33-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 58076913,
                    "Price": 276.01,
                    "DateTime": "2022-09-26T00:00:00Z",
                    "Growth": -0.1937,
                    "CalcString": "276.01-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 61925185,
                    "Price": 282.94,
                    "DateTime": "2022-09-27T00:00:00Z",
                    "Growth": -0.1735,
                    "CalcString": "282.94-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 54664809,
                    "Price": 287.81,
                    "DateTime": "2022-09-28T00:00:00Z",
                    "Growth": -0.1592,
                    "CalcString": "287.81-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 77620642,
                    "Price": 268.21,
                    "DateTime": "2022-09-29T00:00:00Z",
                    "Growth": -0.2165,
                    "CalcString": "268.21-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 67726598,
                    "Price": 265.25,
                    "DateTime": "2022-09-30T00:00:00Z",
                    "Growth": -0.2251,
                    "CalcString": "265.25-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 98363541,
                    "Price": 242.4,
                    "DateTime": "2022-10-03T00:00:00Z",
                    "Growth": -0.2919,
                    "CalcString": "242.4-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 109578535,
                    "Price": 249.44,
                    "DateTime": "2022-10-04T00:00:00Z",
                    "Growth": -0.2713,
                    "CalcString": "249.44-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 86982673,
                    "Price": 240.81,
                    "DateTime": "2022-10-05T00:00:00Z",
                    "Growth": -0.2965,
                    "CalcString": "240.81-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 69298437,
                    "Price": 238.13,
                    "DateTime": "2022-10-06T00:00:00Z",
                    "Growth": -0.3044,
                    "CalcString": "238.13-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 83916800,
                    "Price": 223.07,
                    "DateTime": "2022-10-07T00:00:00Z",
                    "Growth": -0.3484,
                    "CalcString": "223.07-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 67925018,
                    "Price": 222.96,
                    "DateTime": "2022-10-10T00:00:00Z",
                    "Growth": -0.3487,
                    "CalcString": "222.96-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 77013202,
                    "Price": 216.5,
                    "DateTime": "2022-10-11T00:00:00Z",
                    "Growth": -0.3676,
                    "CalcString": "216.5-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 66860699,
                    "Price": 217.24,
                    "DateTime": "2022-10-12T00:00:00Z",
                    "Growth": -0.3654,
                    "CalcString": "217.24-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 91483045,
                    "Price": 221.72,
                    "DateTime": "2022-10-13T00:00:00Z",
                    "Growth": -0.3523,
                    "CalcString": "221.72-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 94124511,
                    "Price": 204.99,
                    "DateTime": "2022-10-14T00:00:00Z",
                    "Growth": -0.4012,
                    "CalcString": "204.99-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 79428810,
                    "Price": 219.35,
                    "DateTime": "2022-10-17T00:00:00Z",
                    "Growth": -0.3592,
                    "CalcString": "219.35-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 75891905,
                    "Price": 220.19,
                    "DateTime": "2022-10-18T00:00:00Z",
                    "Growth": -0.3568,
                    "CalcString": "220.19-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 66571479,
                    "Price": 222.04,
                    "DateTime": "2022-10-19T00:00:00Z",
                    "Growth": -0.3514,
                    "CalcString": "222.04-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 117798062,
                    "Price": 207.28,
                    "DateTime": "2022-10-20T00:00:00Z",
                    "Growth": -0.3945,
                    "CalcString": "207.28-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 75713754,
                    "Price": 214.44,
                    "DateTime": "2022-10-21T00:00:00Z",
                    "Growth": -0.3736,
                    "CalcString": "214.44-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 100446765,
                    "Price": 211.25,
                    "DateTime": "2022-10-24T00:00:00Z",
                    "Growth": -0.3829,
                    "CalcString": "211.25-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 96507870,
                    "Price": 222.415,
                    "DateTime": "2022-10-25T00:00:00Z",
                    "Growth": -0.3503,
                    "CalcString": "222.415-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 85327078,
                    "Price": 224.64,
                    "DateTime": "2022-10-26T00:00:00Z",
                    "Growth": -0.3438,
                    "CalcString": "224.64-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 61638824,
                    "Price": 225.09,
                    "DateTime": "2022-10-27T00:00:00Z",
                    "Growth": -0.3425,
                    "CalcString": "225.09-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 69152386,
                    "Price": 228.52,
                    "DateTime": "2022-10-28T00:00:00Z",
                    "Growth": -0.3324,
                    "CalcString": "228.52-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 61554341,
                    "Price": 227.54,
                    "DateTime": "2022-10-31T00:00:00Z",
                    "Growth": -0.3353,
                    "CalcString": "227.54-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 62688822,
                    "Price": 227.82,
                    "DateTime": "2022-11-01T00:00:00Z",
                    "Growth": -0.3345,
                    "CalcString": "227.82-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 63070293,
                    "Price": 214.98,
                    "DateTime": "2022-11-02T00:00:00Z",
                    "Growth": -0.372,
                    "CalcString": "214.98-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 56538848,
                    "Price": 215.31,
                    "DateTime": "2022-11-03T00:00:00Z",
                    "Growth": -0.371,
                    "CalcString": "215.31-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 98622212,
                    "Price": 207.47,
                    "DateTime": "2022-11-04T00:00:00Z",
                    "Growth": -0.3939,
                    "CalcString": "207.47-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 93916520,
                    "Price": 197.08,
                    "DateTime": "2022-11-07T00:00:00Z",
                    "Growth": -0.4243,
                    "CalcString": "197.08-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 128803404,
                    "Price": 191.3,
                    "DateTime": "2022-11-08T00:00:00Z",
                    "Growth": -0.4412,
                    "CalcString": "191.3-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 127062659,
                    "Price": 177.59,
                    "DateTime": "2022-11-09T00:00:00Z",
                    "Growth": -0.4812,
                    "CalcString": "177.59-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 132703015,
                    "Price": 190.72,
                    "DateTime": "2022-11-10T00:00:00Z",
                    "Growth": -0.4429,
                    "CalcString": "190.72-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 114403575,
                    "Price": 195.97,
                    "DateTime": "2022-11-11T00:00:00Z",
                    "Growth": -0.4275,
                    "CalcString": "195.97-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 92226649,
                    "Price": 190.95,
                    "DateTime": "2022-11-14T00:00:00Z",
                    "Growth": -0.4422,
                    "CalcString": "190.95-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 91293785,
                    "Price": 194.42,
                    "DateTime": "2022-11-15T00:00:00Z",
                    "Growth": -0.4321,
                    "CalcString": "194.42-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 66567599,
                    "Price": 186.92,
                    "DateTime": "2022-11-16T00:00:00Z",
                    "Growth": -0.454,
                    "CalcString": "186.92-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 64335970,
                    "Price": 183.17,
                    "DateTime": "2022-11-17T00:00:00Z",
                    "Growth": -0.4649,
                    "CalcString": "183.17-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 76048866,
                    "Price": 180.19,
                    "DateTime": "2022-11-18T00:00:00Z",
                    "Growth": -0.4736,
                    "CalcString": "180.19-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 92882712,
                    "Price": 167.87,
                    "DateTime": "2022-11-21T00:00:00Z",
                    "Growth": -0.5096,
                    "CalcString": "167.87-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 78452327,
                    "Price": 169.91,
                    "DateTime": "2022-11-22T00:00:00Z",
                    "Growth": -0.5037,
                    "CalcString": "169.91-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 109536709,
                    "Price": 183.2,
                    "DateTime": "2022-11-23T00:00:00Z",
                    "Growth": -0.4648,
                    "CalcString": "183.2-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 50672739,
                    "Price": 182.86,
                    "DateTime": "2022-11-25T00:00:00Z",
                    "Growth": -0.4658,
                    "CalcString": "182.86-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 93038148,
                    "Price": 182.92,
                    "DateTime": "2022-11-28T00:00:00Z",
                    "Growth": -0.4656,
                    "CalcString": "182.92-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 83357111,
                    "Price": 180.83,
                    "DateTime": "2022-11-29T00:00:00Z",
                    "Growth": -0.4718,
                    "CalcString": "180.83-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 109186404,
                    "Price": 194.7,
                    "DateTime": "2022-11-30T00:00:00Z",
                    "Growth": -0.4312,
                    "CalcString": "194.7-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 80046213,
                    "Price": 194.7,
                    "DateTime": "2022-12-01T00:00:00Z",
                    "Growth": -0.4312,
                    "CalcString": "194.7-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 73645922,
                    "Price": 194.86,
                    "DateTime": "2022-12-02T00:00:00Z",
                    "Growth": -0.4308,
                    "CalcString": "194.86-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 93122667,
                    "Price": 182.45,
                    "DateTime": "2022-12-05T00:00:00Z",
                    "Growth": -0.467,
                    "CalcString": "182.45-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 92150823,
                    "Price": 179.82,
                    "DateTime": "2022-12-06T00:00:00Z",
                    "Growth": -0.4747,
                    "CalcString": "179.82-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 84213284,
                    "Price": 174.04,
                    "DateTime": "2022-12-07T00:00:00Z",
                    "Growth": -0.4916,
                    "CalcString": "174.04-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 97624491,
                    "Price": 173.44,
                    "DateTime": "2022-12-08T00:00:00Z",
                    "Growth": -0.4933,
                    "CalcString": "173.44-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 104872336,
                    "Price": 179.05,
                    "DateTime": "2022-12-09T00:00:00Z",
                    "Growth": -0.477,
                    "CalcString": "179.05-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 109794471,
                    "Price": 167.82,
                    "DateTime": "2022-12-12T00:00:00Z",
                    "Growth": -0.5098,
                    "CalcString": "167.82-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 175862722,
                    "Price": 160.95,
                    "DateTime": "2022-12-13T00:00:00Z",
                    "Growth": -0.5298,
                    "CalcString": "160.95-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 140682338,
                    "Price": 156.8,
                    "DateTime": "2022-12-14T00:00:00Z",
                    "Growth": -0.5419,
                    "CalcString": "156.8-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 122334459,
                    "Price": 157.67,
                    "DateTime": "2022-12-15T00:00:00Z",
                    "Growth": -0.5394,
                    "CalcString": "157.67-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 139032175,
                    "Price": 150.23,
                    "DateTime": "2022-12-16T00:00:00Z",
                    "Growth": -0.5611,
                    "CalcString": "150.23-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 139390634,
                    "Price": 149.87,
                    "DateTime": "2022-12-19T00:00:00Z",
                    "Growth": -0.5622,
                    "CalcString": "149.87-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 159563267,
                    "Price": 137.8,
                    "DateTime": "2022-12-20T00:00:00Z",
                    "Growth": -0.5975,
                    "CalcString": "137.8-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 145417412,
                    "Price": 137.57,
                    "DateTime": "2022-12-21T00:00:00Z",
                    "Growth": -0.5981,
                    "CalcString": "137.57-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 210090250,
                    "Price": 125.35,
                    "DateTime": "2022-12-22T00:00:00Z",
                    "Growth": -0.6338,
                    "CalcString": "125.35-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 166989688,
                    "Price": 123.15,
                    "DateTime": "2022-12-23T00:00:00Z",
                    "Growth": -0.6402,
                    "CalcString": "123.15-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 208643444,
                    "Price": 109.1,
                    "DateTime": "2022-12-27T00:00:00Z",
                    "Growth": -0.6813,
                    "CalcString": "109.1-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 221070537,
                    "Price": 112.71,
                    "DateTime": "2022-12-28T00:00:00Z",
                    "Growth": -0.6707,
                    "CalcString": "112.71-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 221923313,
                    "Price": 121.82,
                    "DateTime": "2022-12-29T00:00:00Z",
                    "Growth": -0.6441,
                    "CalcString": "121.82-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 157777339,
                    "Price": 123.18,
                    "DateTime": "2022-12-30T00:00:00Z",
                    "Growth": -0.6402,
                    "CalcString": "123.18-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 231402818,
                    "Price": 108.1,
                    "DateTime": "2023-01-03T00:00:00Z",
                    "Growth": -0.6842,
                    "CalcString": "108.1-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 180388976,
                    "Price": 113.64,
                    "DateTime": "2023-01-04T00:00:00Z",
                    "Growth": -0.668,
                    "CalcString": "113.64-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 157986324,
                    "Price": 110.34,
                    "DateTime": "2023-01-05T00:00:00Z",
                    "Growth": -0.6777,
                    "CalcString": "110.34-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 220911051,
                    "Price": 113.06,
                    "DateTime": "2023-01-06T00:00:00Z",
                    "Growth": -0.6697,
                    "CalcString": "113.06-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 190283951,
                    "Price": 119.77,
                    "DateTime": "2023-01-09T00:00:00Z",
                    "Growth": -0.6501,
                    "CalcString": "119.77-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 17635191,
                    "Price": 120.545,
                    "DateTime": "2023-01-10T14:40:51Z",
                    "Growth": -0.6479,
                    "CalcString": "120.545-342.32/342.32",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                }
            ],
            "5Y": [
                {
                    "Volume": 7146631,
                    "Price": 22.246,
                    "DateTime": "2018-01-09T00:00:00Z",
                    "Growth": 0,
                    "CalcString": "22.246-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 6214069,
                    "Price": 23.6206666667,
                    "DateTime": "2018-01-31T00:00:00Z",
                    "Growth": 0.0618,
                    "CalcString": "23.6206666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 6069658,
                    "Price": 22.8706666667,
                    "DateTime": "2018-02-28T00:00:00Z",
                    "Growth": 0.0281,
                    "CalcString": "22.8706666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 15170749,
                    "Price": 17.742,
                    "DateTime": "2018-03-29T00:00:00Z",
                    "Growth": -0.2025,
                    "CalcString": "17.742-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 4228172,
                    "Price": 19.5933333333,
                    "DateTime": "2018-04-30T00:00:00Z",
                    "Growth": -0.1192,
                    "CalcString": "19.5933333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 5919721,
                    "Price": 18.982,
                    "DateTime": "2018-05-31T00:00:00Z",
                    "Growth": -0.1467,
                    "CalcString": "18.982-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 6492396,
                    "Price": 22.8633333333,
                    "DateTime": "2018-06-29T00:00:00Z",
                    "Growth": 0.0278,
                    "CalcString": "22.8633333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 5076916,
                    "Price": 19.876,
                    "DateTime": "2018-07-31T00:00:00Z",
                    "Growth": -0.1065,
                    "CalcString": "19.876-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 5375104,
                    "Price": 20.1106666667,
                    "DateTime": "2018-08-31T00:00:00Z",
                    "Growth": -0.096,
                    "CalcString": "20.1106666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 33649694,
                    "Price": 17.6513333333,
                    "DateTime": "2018-09-28T00:00:00Z",
                    "Growth": -0.2065,
                    "CalcString": "17.6513333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 7624348,
                    "Price": 22.488,
                    "DateTime": "2018-10-31T00:00:00Z",
                    "Growth": 0.0109,
                    "CalcString": "22.488-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 5628895,
                    "Price": 23.3653333333,
                    "DateTime": "2018-11-30T00:00:00Z",
                    "Growth": 0.0503,
                    "CalcString": "23.3653333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 6302338,
                    "Price": 22.1866666667,
                    "DateTime": "2018-12-31T00:00:00Z",
                    "Growth": -0.0027,
                    "CalcString": "22.1866666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 12569245,
                    "Price": 20.468,
                    "DateTime": "2019-01-31T00:00:00Z",
                    "Growth": -0.0799,
                    "CalcString": "20.468-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 10520653,
                    "Price": 21.3253333333,
                    "DateTime": "2019-02-28T00:00:00Z",
                    "Growth": -0.0414,
                    "CalcString": "21.3253333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 5991338,
                    "Price": 18.6573333333,
                    "DateTime": "2019-03-29T00:00:00Z",
                    "Growth": -0.1613,
                    "CalcString": "18.6573333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 9464628,
                    "Price": 15.9126666667,
                    "DateTime": "2019-04-30T00:00:00Z",
                    "Growth": -0.2847,
                    "CalcString": "15.9126666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 10406732,
                    "Price": 12.344,
                    "DateTime": "2019-05-31T00:00:00Z",
                    "Growth": -0.4451,
                    "CalcString": "12.344-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 6851384,
                    "Price": 14.8973333333,
                    "DateTime": "2019-06-28T00:00:00Z",
                    "Growth": -0.3303,
                    "CalcString": "14.8973333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 9178208,
                    "Price": 16.1073333333,
                    "DateTime": "2019-07-31T00:00:00Z",
                    "Growth": -0.2759,
                    "CalcString": "16.1073333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 9327775,
                    "Price": 15.0406666667,
                    "DateTime": "2019-08-30T00:00:00Z",
                    "Growth": -0.3239,
                    "CalcString": "15.0406666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 5946161,
                    "Price": 16.058,
                    "DateTime": "2019-09-30T00:00:00Z",
                    "Growth": -0.2782,
                    "CalcString": "16.058-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 5066956,
                    "Price": 20.9946666667,
                    "DateTime": "2019-10-31T00:00:00Z",
                    "Growth": -0.0562,
                    "CalcString": "20.9946666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 2465629,
                    "Price": 21.996,
                    "DateTime": "2019-11-29T00:00:00Z",
                    "Growth": -0.0112,
                    "CalcString": "21.996-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 10292456,
                    "Price": 27.8886666667,
                    "DateTime": "2019-12-31T00:00:00Z",
                    "Growth": 0.2536,
                    "CalcString": "27.8886666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 15719266,
                    "Price": 43.3713333333,
                    "DateTime": "2020-01-31T00:00:00Z",
                    "Growth": 0.9496,
                    "CalcString": "43.3713333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 24564171,
                    "Price": 44.5326666667,
                    "DateTime": "2020-02-28T00:00:00Z",
                    "Growth": 1.0018,
                    "CalcString": "44.5326666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 17771485,
                    "Price": 34.9333333333,
                    "DateTime": "2020-03-31T00:00:00Z",
                    "Growth": 0.5703,
                    "CalcString": "34.9333333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 28471854,
                    "Price": 52.1253333333,
                    "DateTime": "2020-04-30T00:00:00Z",
                    "Growth": 1.3431,
                    "CalcString": "52.1253333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 11812489,
                    "Price": 55.6666666667,
                    "DateTime": "2020-05-29T00:00:00Z",
                    "Growth": 1.5023,
                    "CalcString": "55.6666666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 16918501,
                    "Price": 71.9873333333,
                    "DateTime": "2020-06-30T00:00:00Z",
                    "Growth": 2.236,
                    "CalcString": "71.9873333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 12246960,
                    "Price": 95.384,
                    "DateTime": "2020-07-31T00:00:00Z",
                    "Growth": 3.2877,
                    "CalcString": "95.384-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 118374406,
                    "Price": 166.1066666667,
                    "DateTime": "2020-08-31T00:00:00Z",
                    "Growth": 6.4668,
                    "CalcString": "166.1066666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 48145566,
                    "Price": 143.0033333333,
                    "DateTime": "2020-09-30T00:00:00Z",
                    "Growth": 5.4283,
                    "CalcString": "143.0033333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 42587639,
                    "Price": 129.3466666667,
                    "DateTime": "2020-10-30T00:00:00Z",
                    "Growth": 4.8144,
                    "CalcString": "129.3466666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 63003052,
                    "Price": 189.2,
                    "DateTime": "2020-11-30T00:00:00Z",
                    "Growth": 7.5049,
                    "CalcString": "189.2-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 49649928,
                    "Price": 235.2233333333,
                    "DateTime": "2020-12-31T00:00:00Z",
                    "Growth": 9.5737,
                    "CalcString": "235.2233333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 34990754,
                    "Price": 264.51,
                    "DateTime": "2021-01-29T00:00:00Z",
                    "Growth": 10.8902,
                    "CalcString": "264.51-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 41089173,
                    "Price": 225.1666666667,
                    "DateTime": "2021-02-26T00:00:00Z",
                    "Growth": 9.1217,
                    "CalcString": "225.1666666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 33337288,
                    "Price": 222.6433333333,
                    "DateTime": "2021-03-31T00:00:00Z",
                    "Growth": 9.0082,
                    "CalcString": "222.6433333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 40758722,
                    "Price": 236.48,
                    "DateTime": "2021-04-30T00:00:00Z",
                    "Growth": 9.6302,
                    "CalcString": "236.48-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 22737038,
                    "Price": 208.4066666667,
                    "DateTime": "2021-05-28T00:00:00Z",
                    "Growth": 8.3683,
                    "CalcString": "208.4066666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 18924862,
                    "Price": 226.5666666667,
                    "DateTime": "2021-06-30T00:00:00Z",
                    "Growth": 9.1846,
                    "CalcString": "226.5666666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 29656411,
                    "Price": 229.0666666667,
                    "DateTime": "2021-07-30T00:00:00Z",
                    "Growth": 9.297,
                    "CalcString": "229.0666666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 20855436,
                    "Price": 245.24,
                    "DateTime": "2021-08-31T00:00:00Z",
                    "Growth": 10.024,
                    "CalcString": "245.24-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 17955961,
                    "Price": 258.4933333333,
                    "DateTime": "2021-09-30T00:00:00Z",
                    "Growth": 10.6198,
                    "CalcString": "258.4933333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 29918417,
                    "Price": 371.3333333333,
                    "DateTime": "2021-10-29T00:00:00Z",
                    "Growth": 15.6921,
                    "CalcString": "371.3333333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 27092038,
                    "Price": 381.5866666667,
                    "DateTime": "2021-11-30T00:00:00Z",
                    "Growth": 16.153,
                    "CalcString": "381.5866666667-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 13577875,
                    "Price": 352.26,
                    "DateTime": "2021-12-31T00:00:00Z",
                    "Growth": 14.8348,
                    "CalcString": "352.26-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 34812032,
                    "Price": 312.24,
                    "DateTime": "2022-01-31T00:00:00Z",
                    "Growth": 13.0358,
                    "CalcString": "312.24-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 33002289,
                    "Price": 290.1433333333,
                    "DateTime": "2022-02-28T00:00:00Z",
                    "Growth": 12.0425,
                    "CalcString": "290.1433333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 16330919,
                    "Price": 359.2,
                    "DateTime": "2022-03-31T00:00:00Z",
                    "Growth": 15.1467,
                    "CalcString": "359.2-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 29377665,
                    "Price": 290.2533333333,
                    "DateTime": "2022-04-29T00:00:00Z",
                    "Growth": 12.0474,
                    "CalcString": "290.2533333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 33971457,
                    "Price": 252.7533333333,
                    "DateTime": "2022-05-31T00:00:00Z",
                    "Growth": 10.3617,
                    "CalcString": "252.7533333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 31533484,
                    "Price": 224.4733333333,
                    "DateTime": "2022-06-30T00:00:00Z",
                    "Growth": 9.0905,
                    "CalcString": "224.4733333333-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 31770961,
                    "Price": 297.15,
                    "DateTime": "2022-07-29T00:00:00Z",
                    "Growth": 12.3575,
                    "CalcString": "297.15-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 52107337,
                    "Price": 275.61,
                    "DateTime": "2022-08-31T00:00:00Z",
                    "Growth": 11.3892,
                    "CalcString": "275.61-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 67726598,
                    "Price": 265.25,
                    "DateTime": "2022-09-30T00:00:00Z",
                    "Growth": 10.9235,
                    "CalcString": "265.25-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 61554341,
                    "Price": 227.54,
                    "DateTime": "2022-10-31T00:00:00Z",
                    "Growth": 9.2284,
                    "CalcString": "227.54-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 109186404,
                    "Price": 194.7,
                    "DateTime": "2022-11-30T00:00:00Z",
                    "Growth": 7.7521,
                    "CalcString": "194.7-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 157777339,
                    "Price": 123.18,
                    "DateTime": "2022-12-30T00:00:00Z",
                    "Growth": 4.5372,
                    "CalcString": "123.18-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 190283951,
                    "Price": 119.77,
                    "DateTime": "2023-01-09T00:00:00Z",
                    "Growth": 4.3839,
                    "CalcString": "119.77-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 17635191,
                    "Price": 120.545,
                    "DateTime": "2023-01-10T14:40:51Z",
                    "Growth": 4.4187,
                    "CalcString": "120.545-22.246/22.246",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                }
            ],
            "MAX": [
                {
                    "Volume": 18783276,
                    "Price": 1.5926666667,
                    "DateTime": "2010-06-29T00:00:00Z",
                    "Growth": 0,
                    "CalcString": "1.5926666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 17194394,
                    "Price": 1.5886666667,
                    "DateTime": "2010-06-30T00:00:00Z",
                    "Growth": -0.0025,
                    "CalcString": "1.5886666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 426830,
                    "Price": 1.3293333333,
                    "DateTime": "2010-07-30T00:00:00Z",
                    "Growth": -0.1653,
                    "CalcString": "1.3293333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 201012,
                    "Price": 1.2986666667,
                    "DateTime": "2010-08-31T00:00:00Z",
                    "Growth": -0.1846,
                    "CalcString": "1.2986666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 2196625,
                    "Price": 1.3603334,
                    "DateTime": "2010-09-30T00:00:00Z",
                    "Growth": -0.1459,
                    "CalcString": "1.3603334-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 280682,
                    "Price": 1.456,
                    "DateTime": "2010-10-29T00:00:00Z",
                    "Growth": -0.0858,
                    "CalcString": "1.456-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 2222958,
                    "Price": 2.3553333333,
                    "DateTime": "2010-11-30T00:00:00Z",
                    "Growth": 0.4789,
                    "CalcString": "2.3553333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 1417847,
                    "Price": 1.7753333333,
                    "DateTime": "2010-12-31T00:00:00Z",
                    "Growth": 0.1147,
                    "CalcString": "1.7753333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 830214,
                    "Price": 1.6066666667,
                    "DateTime": "2011-01-31T00:00:00Z",
                    "Growth": 0.0088,
                    "CalcString": "1.6066666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 1051106,
                    "Price": 1.5926666667,
                    "DateTime": "2011-02-28T00:00:00Z",
                    "Growth": 0,
                    "CalcString": "1.5926666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 11522337,
                    "Price": 1.85,
                    "DateTime": "2011-03-31T00:00:00Z",
                    "Growth": 0.1616,
                    "CalcString": "1.85-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 726340,
                    "Price": 1.84,
                    "DateTime": "2011-04-29T00:00:00Z",
                    "Growth": 0.1553,
                    "CalcString": "1.84-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3290522,
                    "Price": 2.0093333333,
                    "DateTime": "2011-05-31T00:00:00Z",
                    "Growth": 0.2616,
                    "CalcString": "2.0093333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 946654,
                    "Price": 1.942,
                    "DateTime": "2011-06-30T00:00:00Z",
                    "Growth": 0.2193,
                    "CalcString": "1.942-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 948127,
                    "Price": 1.878,
                    "DateTime": "2011-07-29T00:00:00Z",
                    "Growth": 0.1792,
                    "CalcString": "1.878-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 823735,
                    "Price": 1.6493333333,
                    "DateTime": "2011-08-31T00:00:00Z",
                    "Growth": 0.0356,
                    "CalcString": "1.6493333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 1336054,
                    "Price": 1.626,
                    "DateTime": "2011-09-30T00:00:00Z",
                    "Growth": 0.0209,
                    "CalcString": "1.626-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 1133969,
                    "Price": 1.958,
                    "DateTime": "2011-10-31T00:00:00Z",
                    "Growth": 0.2294,
                    "CalcString": "1.958-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 760965,
                    "Price": 2.1826666667,
                    "DateTime": "2011-11-30T00:00:00Z",
                    "Growth": 0.3704,
                    "CalcString": "2.1826666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 339860,
                    "Price": 1.904,
                    "DateTime": "2011-12-30T00:00:00Z",
                    "Growth": 0.1955,
                    "CalcString": "1.904-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 956713,
                    "Price": 1.938,
                    "DateTime": "2012-01-31T00:00:00Z",
                    "Growth": 0.2168,
                    "CalcString": "1.938-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 535684,
                    "Price": 2.2273333333,
                    "DateTime": "2012-02-29T00:00:00Z",
                    "Growth": 0.3985,
                    "CalcString": "2.2273333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 886312,
                    "Price": 2.4826666667,
                    "DateTime": "2012-03-30T00:00:00Z",
                    "Growth": 0.5588,
                    "CalcString": "2.4826666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 413948,
                    "Price": 2.2086666667,
                    "DateTime": "2012-04-30T00:00:00Z",
                    "Growth": 0.3868,
                    "CalcString": "2.2086666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 1118701,
                    "Price": 1.9666666667,
                    "DateTime": "2012-05-31T00:00:00Z",
                    "Growth": 0.2348,
                    "CalcString": "1.9666666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 1125704,
                    "Price": 2.086,
                    "DateTime": "2012-06-29T00:00:00Z",
                    "Growth": 0.3098,
                    "CalcString": "2.086-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 1575060,
                    "Price": 1.828,
                    "DateTime": "2012-07-31T00:00:00Z",
                    "Growth": 0.1478,
                    "CalcString": "1.828-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 539736,
                    "Price": 1.9013333333,
                    "DateTime": "2012-08-31T00:00:00Z",
                    "Growth": 0.1938,
                    "CalcString": "1.9013333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4343338,
                    "Price": 1.952,
                    "DateTime": "2012-09-28T00:00:00Z",
                    "Growth": 0.2256,
                    "CalcString": "1.952-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 775142,
                    "Price": 1.8754266,
                    "DateTime": "2012-10-31T00:00:00Z",
                    "Growth": 0.1775,
                    "CalcString": "1.8754266-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 1420284,
                    "Price": 2.2546666667,
                    "DateTime": "2012-11-30T00:00:00Z",
                    "Growth": 0.4157,
                    "CalcString": "2.2546666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 594846,
                    "Price": 2.258,
                    "DateTime": "2012-12-31T00:00:00Z",
                    "Growth": 0.4177,
                    "CalcString": "2.258-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 901318,
                    "Price": 2.5006666667,
                    "DateTime": "2013-01-31T00:00:00Z",
                    "Growth": 0.5701,
                    "CalcString": "2.5006666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 1964893,
                    "Price": 2.322,
                    "DateTime": "2013-02-28T00:00:00Z",
                    "Growth": 0.4579,
                    "CalcString": "2.322-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 1158652,
                    "Price": 2.526,
                    "DateTime": "2013-03-28T00:00:00Z",
                    "Growth": 0.586,
                    "CalcString": "2.526-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5523948,
                    "Price": 3.5993333333,
                    "DateTime": "2013-04-30T00:00:00Z",
                    "Growth": 1.2599,
                    "CalcString": "3.5993333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 15171929,
                    "Price": 6.5173333333,
                    "DateTime": "2013-05-31T00:00:00Z",
                    "Growth": 3.0921,
                    "CalcString": "6.5173333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5750431,
                    "Price": 7.1573333333,
                    "DateTime": "2013-06-28T00:00:00Z",
                    "Growth": 3.4939,
                    "CalcString": "7.1573333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6351637,
                    "Price": 8.952,
                    "DateTime": "2013-07-31T00:00:00Z",
                    "Growth": 4.6208,
                    "CalcString": "8.952-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 11028358,
                    "Price": 11.2666666667,
                    "DateTime": "2013-08-30T00:00:00Z",
                    "Growth": 6.0741,
                    "CalcString": "11.2666666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 8934541,
                    "Price": 12.8913333333,
                    "DateTime": "2013-09-30T00:00:00Z",
                    "Growth": 7.0942,
                    "CalcString": "12.8913333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 9340455,
                    "Price": 10.6626666667,
                    "DateTime": "2013-10-31T00:00:00Z",
                    "Growth": 5.6949,
                    "CalcString": "10.6626666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 9716219,
                    "Price": 8.4853333333,
                    "DateTime": "2013-11-29T00:00:00Z",
                    "Growth": 4.3278,
                    "CalcString": "8.4853333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4266710,
                    "Price": 10.0286,
                    "DateTime": "2013-12-31T00:00:00Z",
                    "Growth": 5.2967,
                    "CalcString": "10.0286-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6512951,
                    "Price": 12.094,
                    "DateTime": "2014-01-31T00:00:00Z",
                    "Growth": 6.5936,
                    "CalcString": "12.094-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 14612693,
                    "Price": 16.3206666667,
                    "DateTime": "2014-02-28T00:00:00Z",
                    "Growth": 9.2474,
                    "CalcString": "16.3206666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 8380023,
                    "Price": 13.8966666667,
                    "DateTime": "2014-03-31T00:00:00Z",
                    "Growth": 7.7254,
                    "CalcString": "13.8966666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4443453,
                    "Price": 13.8593333333,
                    "DateTime": "2014-04-30T00:00:00Z",
                    "Growth": 7.702,
                    "CalcString": "13.8593333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5586068,
                    "Price": 13.8513333333,
                    "DateTime": "2014-05-30T00:00:00Z",
                    "Growth": 7.6969,
                    "CalcString": "13.8513333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4833602,
                    "Price": 16.004,
                    "DateTime": "2014-06-30T00:00:00Z",
                    "Growth": 9.0486,
                    "CalcString": "16.004-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 7749058,
                    "Price": 14.8866666667,
                    "DateTime": "2014-07-31T00:00:00Z",
                    "Growth": 8.347,
                    "CalcString": "14.8866666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6453958,
                    "Price": 17.98,
                    "DateTime": "2014-08-29T00:00:00Z",
                    "Growth": 10.2892,
                    "CalcString": "17.98-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4248127,
                    "Price": 16.1786666667,
                    "DateTime": "2014-09-30T00:00:00Z",
                    "Growth": 9.1582,
                    "CalcString": "16.1786666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3775327,
                    "Price": 16.1133333333,
                    "DateTime": "2014-10-31T00:00:00Z",
                    "Growth": 9.1172,
                    "CalcString": "16.1133333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 2119688,
                    "Price": 16.3013333333,
                    "DateTime": "2014-11-28T00:00:00Z",
                    "Growth": 9.2352,
                    "CalcString": "16.3013333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 2402097,
                    "Price": 14.8273333333,
                    "DateTime": "2014-12-31T00:00:00Z",
                    "Growth": 8.3098,
                    "CalcString": "14.8273333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3006959,
                    "Price": 13.5733333333,
                    "DateTime": "2015-01-30T00:00:00Z",
                    "Growth": 7.5224,
                    "CalcString": "13.5733333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3882084,
                    "Price": 13.556,
                    "DateTime": "2015-02-27T00:00:00Z",
                    "Growth": 7.5115,
                    "CalcString": "13.556-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5026569,
                    "Price": 12.5846666667,
                    "DateTime": "2015-03-31T00:00:00Z",
                    "Growth": 6.9016,
                    "CalcString": "12.5846666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3911857,
                    "Price": 15.07,
                    "DateTime": "2015-04-30T00:00:00Z",
                    "Growth": 8.4621,
                    "CalcString": "15.07-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3789283,
                    "Price": 16.72,
                    "DateTime": "2015-05-29T00:00:00Z",
                    "Growth": 9.4981,
                    "CalcString": "16.72-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3086935,
                    "Price": 17.884,
                    "DateTime": "2015-06-30T00:00:00Z",
                    "Growth": 10.229,
                    "CalcString": "17.884-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 2222552,
                    "Price": 17.7433333333,
                    "DateTime": "2015-07-31T00:00:00Z",
                    "Growth": 10.1406,
                    "CalcString": "17.7433333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4700232,
                    "Price": 16.604,
                    "DateTime": "2015-08-31T00:00:00Z",
                    "Growth": 9.4253,
                    "CalcString": "16.604-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4929582,
                    "Price": 16.56,
                    "DateTime": "2015-09-30T00:00:00Z",
                    "Growth": 9.3977,
                    "CalcString": "16.56-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4438901,
                    "Price": 13.7953333333,
                    "DateTime": "2015-10-30T00:00:00Z",
                    "Growth": 7.6618,
                    "CalcString": "13.7953333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 2659813,
                    "Price": 15.3506666667,
                    "DateTime": "2015-11-30T00:00:00Z",
                    "Growth": 8.6383,
                    "CalcString": "15.3506666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 2715038,
                    "Price": 16.0006666667,
                    "DateTime": "2015-12-31T00:00:00Z",
                    "Growth": 9.0465,
                    "CalcString": "16.0006666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 2852289,
                    "Price": 12.7466666667,
                    "DateTime": "2016-01-29T00:00:00Z",
                    "Growth": 7.0033,
                    "CalcString": "12.7466666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4498997,
                    "Price": 12.7953333333,
                    "DateTime": "2016-02-29T00:00:00Z",
                    "Growth": 7.0339,
                    "CalcString": "12.7953333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 8012872,
                    "Price": 15.318,
                    "DateTime": "2016-03-31T00:00:00Z",
                    "Growth": 8.6178,
                    "CalcString": "15.318-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5413787,
                    "Price": 16.0506666667,
                    "DateTime": "2016-04-29T00:00:00Z",
                    "Growth": 9.0779,
                    "CalcString": "16.0506666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 2789002,
                    "Price": 14.882,
                    "DateTime": "2016-05-31T00:00:00Z",
                    "Growth": 8.3441,
                    "CalcString": "14.882-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4843111,
                    "Price": 14.152,
                    "DateTime": "2016-06-30T00:00:00Z",
                    "Growth": 7.8857,
                    "CalcString": "14.152-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3070813,
                    "Price": 15.6526666667,
                    "DateTime": "2016-07-29T00:00:00Z",
                    "Growth": 8.828,
                    "CalcString": "15.6526666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3276548,
                    "Price": 14.134,
                    "DateTime": "2016-08-31T00:00:00Z",
                    "Growth": 7.8744,
                    "CalcString": "14.134-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 2586273,
                    "Price": 13.602,
                    "DateTime": "2016-09-30T00:00:00Z",
                    "Growth": 7.5404,
                    "CalcString": "13.602-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4692273,
                    "Price": 13.182,
                    "DateTime": "2016-10-31T00:00:00Z",
                    "Growth": 7.2767,
                    "CalcString": "13.182-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3547104,
                    "Price": 12.6266666667,
                    "DateTime": "2016-11-30T00:00:00Z",
                    "Growth": 6.928,
                    "CalcString": "12.6266666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4642620,
                    "Price": 14.246,
                    "DateTime": "2016-12-30T00:00:00Z",
                    "Growth": 7.9447,
                    "CalcString": "14.246-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4116104,
                    "Price": 16.7953333333,
                    "DateTime": "2017-01-31T00:00:00Z",
                    "Growth": 9.5454,
                    "CalcString": "16.7953333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6078145,
                    "Price": 16.666,
                    "DateTime": "2017-02-28T00:00:00Z",
                    "Growth": 9.4642,
                    "CalcString": "16.666-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3294640,
                    "Price": 18.5533333333,
                    "DateTime": "2017-03-31T00:00:00Z",
                    "Growth": 10.6492,
                    "CalcString": "18.5533333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4505478,
                    "Price": 20.938,
                    "DateTime": "2017-04-28T00:00:00Z",
                    "Growth": 12.1465,
                    "CalcString": "20.938-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 9963444,
                    "Price": 22.734,
                    "DateTime": "2017-05-31T00:00:00Z",
                    "Growth": 13.2742,
                    "CalcString": "22.734-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5848521,
                    "Price": 24.1073333333,
                    "DateTime": "2017-06-30T00:00:00Z",
                    "Growth": 14.1365,
                    "CalcString": "24.1073333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 8535136,
                    "Price": 21.5646666667,
                    "DateTime": "2017-07-31T00:00:00Z",
                    "Growth": 12.54,
                    "CalcString": "21.5646666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4072795,
                    "Price": 23.7266666667,
                    "DateTime": "2017-08-31T00:00:00Z",
                    "Growth": 13.8974,
                    "CalcString": "23.7266666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5107082,
                    "Price": 22.74,
                    "DateTime": "2017-09-29T00:00:00Z",
                    "Growth": 13.2779,
                    "CalcString": "22.74-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5672347,
                    "Price": 22.102,
                    "DateTime": "2017-10-31T00:00:00Z",
                    "Growth": 12.8774,
                    "CalcString": "22.102-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4351587,
                    "Price": 20.59,
                    "DateTime": "2017-11-30T00:00:00Z",
                    "Growth": 11.928,
                    "CalcString": "20.59-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 3777155,
                    "Price": 20.7566666667,
                    "DateTime": "2017-12-29T00:00:00Z",
                    "Growth": 12.0326,
                    "CalcString": "20.7566666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6214069,
                    "Price": 23.6206666667,
                    "DateTime": "2018-01-31T00:00:00Z",
                    "Growth": 13.8309,
                    "CalcString": "23.6206666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6069658,
                    "Price": 22.8706666667,
                    "DateTime": "2018-02-28T00:00:00Z",
                    "Growth": 13.36,
                    "CalcString": "22.8706666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 15170749,
                    "Price": 17.742,
                    "DateTime": "2018-03-29T00:00:00Z",
                    "Growth": 10.1398,
                    "CalcString": "17.742-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4228172,
                    "Price": 19.5933333333,
                    "DateTime": "2018-04-30T00:00:00Z",
                    "Growth": 11.3022,
                    "CalcString": "19.5933333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5919721,
                    "Price": 18.982,
                    "DateTime": "2018-05-31T00:00:00Z",
                    "Growth": 10.9184,
                    "CalcString": "18.982-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6492396,
                    "Price": 22.8633333333,
                    "DateTime": "2018-06-29T00:00:00Z",
                    "Growth": 13.3554,
                    "CalcString": "22.8633333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5076916,
                    "Price": 19.876,
                    "DateTime": "2018-07-31T00:00:00Z",
                    "Growth": 11.4797,
                    "CalcString": "19.876-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5375104,
                    "Price": 20.1106666667,
                    "DateTime": "2018-08-31T00:00:00Z",
                    "Growth": 11.627,
                    "CalcString": "20.1106666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 33649694,
                    "Price": 17.6513333333,
                    "DateTime": "2018-09-28T00:00:00Z",
                    "Growth": 10.0829,
                    "CalcString": "17.6513333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 7624348,
                    "Price": 22.488,
                    "DateTime": "2018-10-31T00:00:00Z",
                    "Growth": 13.1197,
                    "CalcString": "22.488-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5628895,
                    "Price": 23.3653333333,
                    "DateTime": "2018-11-30T00:00:00Z",
                    "Growth": 13.6706,
                    "CalcString": "23.3653333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6302338,
                    "Price": 22.1866666667,
                    "DateTime": "2018-12-31T00:00:00Z",
                    "Growth": 12.9305,
                    "CalcString": "22.1866666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 12569245,
                    "Price": 20.468,
                    "DateTime": "2019-01-31T00:00:00Z",
                    "Growth": 11.8514,
                    "CalcString": "20.468-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 10520653,
                    "Price": 21.3253333333,
                    "DateTime": "2019-02-28T00:00:00Z",
                    "Growth": 12.3897,
                    "CalcString": "21.3253333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5991338,
                    "Price": 18.6573333333,
                    "DateTime": "2019-03-29T00:00:00Z",
                    "Growth": 10.7145,
                    "CalcString": "18.6573333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 9464628,
                    "Price": 15.9126666667,
                    "DateTime": "2019-04-30T00:00:00Z",
                    "Growth": 8.9912,
                    "CalcString": "15.9126666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 10406732,
                    "Price": 12.344,
                    "DateTime": "2019-05-31T00:00:00Z",
                    "Growth": 6.7505,
                    "CalcString": "12.344-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6851384,
                    "Price": 14.8973333333,
                    "DateTime": "2019-06-28T00:00:00Z",
                    "Growth": 8.3537,
                    "CalcString": "14.8973333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 9178208,
                    "Price": 16.1073333333,
                    "DateTime": "2019-07-31T00:00:00Z",
                    "Growth": 9.1134,
                    "CalcString": "16.1073333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 9327775,
                    "Price": 15.0406666667,
                    "DateTime": "2019-08-30T00:00:00Z",
                    "Growth": 8.4437,
                    "CalcString": "15.0406666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5946161,
                    "Price": 16.058,
                    "DateTime": "2019-09-30T00:00:00Z",
                    "Growth": 9.0825,
                    "CalcString": "16.058-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 5066956,
                    "Price": 20.9946666667,
                    "DateTime": "2019-10-31T00:00:00Z",
                    "Growth": 12.1821,
                    "CalcString": "20.9946666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 2465629,
                    "Price": 21.996,
                    "DateTime": "2019-11-29T00:00:00Z",
                    "Growth": 12.8108,
                    "CalcString": "21.996-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 10292456,
                    "Price": 27.8886666667,
                    "DateTime": "2019-12-31T00:00:00Z",
                    "Growth": 16.5107,
                    "CalcString": "27.8886666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 15719266,
                    "Price": 43.3713333333,
                    "DateTime": "2020-01-31T00:00:00Z",
                    "Growth": 26.2319,
                    "CalcString": "43.3713333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 24564171,
                    "Price": 44.5326666667,
                    "DateTime": "2020-02-28T00:00:00Z",
                    "Growth": 26.9611,
                    "CalcString": "44.5326666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 17771485,
                    "Price": 34.9333333333,
                    "DateTime": "2020-03-31T00:00:00Z",
                    "Growth": 20.9339,
                    "CalcString": "34.9333333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 28471854,
                    "Price": 52.1253333333,
                    "DateTime": "2020-04-30T00:00:00Z",
                    "Growth": 31.7283,
                    "CalcString": "52.1253333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 11812489,
                    "Price": 55.6666666667,
                    "DateTime": "2020-05-29T00:00:00Z",
                    "Growth": 33.9519,
                    "CalcString": "55.6666666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 16918501,
                    "Price": 71.9873333333,
                    "DateTime": "2020-06-30T00:00:00Z",
                    "Growth": 44.1992,
                    "CalcString": "71.9873333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 12246960,
                    "Price": 95.384,
                    "DateTime": "2020-07-31T00:00:00Z",
                    "Growth": 58.8895,
                    "CalcString": "95.384-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 118374406,
                    "Price": 166.1066666667,
                    "DateTime": "2020-08-31T00:00:00Z",
                    "Growth": 103.2947,
                    "CalcString": "166.1066666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 48145566,
                    "Price": 143.0033333333,
                    "DateTime": "2020-09-30T00:00:00Z",
                    "Growth": 88.7886,
                    "CalcString": "143.0033333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 42587639,
                    "Price": 129.3466666667,
                    "DateTime": "2020-10-30T00:00:00Z",
                    "Growth": 80.2139,
                    "CalcString": "129.3466666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 63003052,
                    "Price": 189.2,
                    "DateTime": "2020-11-30T00:00:00Z",
                    "Growth": 117.7945,
                    "CalcString": "189.2-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 49649928,
                    "Price": 235.2233333333,
                    "DateTime": "2020-12-31T00:00:00Z",
                    "Growth": 146.6915,
                    "CalcString": "235.2233333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 34990754,
                    "Price": 264.51,
                    "DateTime": "2021-01-29T00:00:00Z",
                    "Growth": 165.0799,
                    "CalcString": "264.51-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 41089173,
                    "Price": 225.1666666667,
                    "DateTime": "2021-02-26T00:00:00Z",
                    "Growth": 140.3771,
                    "CalcString": "225.1666666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 33337288,
                    "Price": 222.6433333333,
                    "DateTime": "2021-03-31T00:00:00Z",
                    "Growth": 138.7928,
                    "CalcString": "222.6433333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 40758722,
                    "Price": 236.48,
                    "DateTime": "2021-04-30T00:00:00Z",
                    "Growth": 147.4805,
                    "CalcString": "236.48-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 22737038,
                    "Price": 208.4066666667,
                    "DateTime": "2021-05-28T00:00:00Z",
                    "Growth": 129.8539,
                    "CalcString": "208.4066666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 18924862,
                    "Price": 226.5666666667,
                    "DateTime": "2021-06-30T00:00:00Z",
                    "Growth": 141.2562,
                    "CalcString": "226.5666666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 29656411,
                    "Price": 229.0666666667,
                    "DateTime": "2021-07-30T00:00:00Z",
                    "Growth": 142.8259,
                    "CalcString": "229.0666666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 20855436,
                    "Price": 245.24,
                    "DateTime": "2021-08-31T00:00:00Z",
                    "Growth": 152.9807,
                    "CalcString": "245.24-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 17955961,
                    "Price": 258.4933333333,
                    "DateTime": "2021-09-30T00:00:00Z",
                    "Growth": 161.3022,
                    "CalcString": "258.4933333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 29918417,
                    "Price": 371.3333333333,
                    "DateTime": "2021-10-29T00:00:00Z",
                    "Growth": 232.1519,
                    "CalcString": "371.3333333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 27092038,
                    "Price": 381.5866666667,
                    "DateTime": "2021-11-30T00:00:00Z",
                    "Growth": 238.5898,
                    "CalcString": "381.5866666667-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 13577875,
                    "Price": 352.26,
                    "DateTime": "2021-12-31T00:00:00Z",
                    "Growth": 220.1762,
                    "CalcString": "352.26-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 34812032,
                    "Price": 312.24,
                    "DateTime": "2022-01-31T00:00:00Z",
                    "Growth": 195.0486,
                    "CalcString": "312.24-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 33002289,
                    "Price": 290.1433333333,
                    "DateTime": "2022-02-28T00:00:00Z",
                    "Growth": 181.1746,
                    "CalcString": "290.1433333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 16330919,
                    "Price": 359.2,
                    "DateTime": "2022-03-31T00:00:00Z",
                    "Growth": 224.5337,
                    "CalcString": "359.2-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 29377665,
                    "Price": 290.2533333333,
                    "DateTime": "2022-04-29T00:00:00Z",
                    "Growth": 181.2436,
                    "CalcString": "290.2533333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 33971457,
                    "Price": 252.7533333333,
                    "DateTime": "2022-05-31T00:00:00Z",
                    "Growth": 157.6982,
                    "CalcString": "252.7533333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 31533484,
                    "Price": 224.4733333333,
                    "DateTime": "2022-06-30T00:00:00Z",
                    "Growth": 139.9418,
                    "CalcString": "224.4733333333-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 31770961,
                    "Price": 297.15,
                    "DateTime": "2022-07-29T00:00:00Z",
                    "Growth": 185.5739,
                    "CalcString": "297.15-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 52107337,
                    "Price": 275.61,
                    "DateTime": "2022-08-31T00:00:00Z",
                    "Growth": 172.0494,
                    "CalcString": "275.61-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 67726598,
                    "Price": 265.25,
                    "DateTime": "2022-09-30T00:00:00Z",
                    "Growth": 165.5446,
                    "CalcString": "265.25-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 61554341,
                    "Price": 227.54,
                    "DateTime": "2022-10-31T00:00:00Z",
                    "Growth": 141.8673,
                    "CalcString": "227.54-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 109186404,
                    "Price": 194.7,
                    "DateTime": "2022-11-30T00:00:00Z",
                    "Growth": 121.2478,
                    "CalcString": "194.7-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 157777339,
                    "Price": 123.18,
                    "DateTime": "2022-12-30T00:00:00Z",
                    "Growth": 76.342,
                    "CalcString": "123.18-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 190283951,
                    "Price": 119.77,
                    "DateTime": "2023-01-09T00:00:00Z",
                    "Growth": 74.2009,
                    "CalcString": "119.77-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 17635191,
                    "Price": 120.545,
                    "DateTime": "2023-01-10T14:40:51Z",
                    "Growth": 74.6875,
                    "CalcString": "120.545-1.5926666667/1.5926666667",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                }
            ]
        },
        {
            "RequestKey": "0P000000GY",
            "1D": [
                {
                    "Volume": null,
                    "Price": 130.15,
                    "DateTime": "2023-01-10T14:29:00Z",
                    "Growth": 0,
                    "CalcString": "130.15-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 963806,
                    "Price": 129.845,
                    "DateTime": "2023-01-10T14:30:00Z",
                    "Growth": -0.0023,
                    "CalcString": "129.845-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 346336,
                    "Price": 130.46,
                    "DateTime": "2023-01-10T14:31:00Z",
                    "Growth": 0.0024,
                    "CalcString": "130.46-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 283489,
                    "Price": 130.74,
                    "DateTime": "2023-01-10T14:32:00Z",
                    "Growth": 0.0045,
                    "CalcString": "130.74-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 249081,
                    "Price": 130.6881,
                    "DateTime": "2023-01-10T14:33:00Z",
                    "Growth": 0.0041,
                    "CalcString": "130.6881-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 332729,
                    "Price": 131.19,
                    "DateTime": "2023-01-10T14:34:00Z",
                    "Growth": 0.008,
                    "CalcString": "131.19-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 350170,
                    "Price": 131.07,
                    "DateTime": "2023-01-10T14:35:00Z",
                    "Growth": 0.0071,
                    "CalcString": "131.07-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 201848,
                    "Price": 130.775,
                    "DateTime": "2023-01-10T14:36:00Z",
                    "Growth": 0.0048,
                    "CalcString": "130.775-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 201990,
                    "Price": 130.74,
                    "DateTime": "2023-01-10T14:37:00Z",
                    "Growth": 0.0045,
                    "CalcString": "130.74-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 182184,
                    "Price": 130.45,
                    "DateTime": "2023-01-10T14:38:00Z",
                    "Growth": 0.0023,
                    "CalcString": "130.45-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 225255,
                    "Price": 130.37,
                    "DateTime": "2023-01-10T14:39:00Z",
                    "Growth": 0.0017,
                    "CalcString": "130.37-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 166224,
                    "Price": 130.17,
                    "DateTime": "2023-01-10T14:40:00Z",
                    "Growth": 0.0002,
                    "CalcString": "130.17-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                },
                {
                    "Volume": 4922811,
                    "Price": 130.31,
                    "DateTime": "2023-01-10T14:40:51Z",
                    "Growth": 0.0012,
                    "CalcString": "130.31-130.15/130.15",
                    "ReferenceDate": "YesterdayPrice"
                }
            ],
            "3M": [
                {
                    "Volume": 85925559,
                    "Price": 140.09,
                    "DateTime": "2022-10-07T00:00:00Z",
                    "Growth": 0,
                    "CalcString": "140.09-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 74899002,
                    "Price": 140.42,
                    "DateTime": "2022-10-10T00:00:00Z",
                    "Growth": 0.0024,
                    "CalcString": "140.42-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 77033672,
                    "Price": 138.98,
                    "DateTime": "2022-10-11T00:00:00Z",
                    "Growth": -0.0079,
                    "CalcString": "138.98-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 70433744,
                    "Price": 138.34,
                    "DateTime": "2022-10-12T00:00:00Z",
                    "Growth": -0.0125,
                    "CalcString": "138.34-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 113223975,
                    "Price": 142.99,
                    "DateTime": "2022-10-13T00:00:00Z",
                    "Growth": 0.0207,
                    "CalcString": "142.99-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 88597969,
                    "Price": 138.38,
                    "DateTime": "2022-10-14T00:00:00Z",
                    "Growth": -0.0122,
                    "CalcString": "138.38-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 85250939,
                    "Price": 142.41,
                    "DateTime": "2022-10-17T00:00:00Z",
                    "Growth": 0.0166,
                    "CalcString": "142.41-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 99136610,
                    "Price": 143.75,
                    "DateTime": "2022-10-18T00:00:00Z",
                    "Growth": 0.0261,
                    "CalcString": "143.75-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 61758340,
                    "Price": 143.86,
                    "DateTime": "2022-10-19T00:00:00Z",
                    "Growth": 0.0269,
                    "CalcString": "143.86-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 64521989,
                    "Price": 143.39,
                    "DateTime": "2022-10-20T00:00:00Z",
                    "Growth": 0.0236,
                    "CalcString": "143.39-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 86548609,
                    "Price": 147.27,
                    "DateTime": "2022-10-21T00:00:00Z",
                    "Growth": 0.0513,
                    "CalcString": "147.27-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 75981918,
                    "Price": 149.45,
                    "DateTime": "2022-10-24T00:00:00Z",
                    "Growth": 0.0668,
                    "CalcString": "149.45-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 74732290,
                    "Price": 152.34,
                    "DateTime": "2022-10-25T00:00:00Z",
                    "Growth": 0.0874,
                    "CalcString": "152.34-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 88436172,
                    "Price": 149.35,
                    "DateTime": "2022-10-26T00:00:00Z",
                    "Growth": 0.0661,
                    "CalcString": "149.35-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 109180150,
                    "Price": 144.8,
                    "DateTime": "2022-10-27T00:00:00Z",
                    "Growth": 0.0336,
                    "CalcString": "144.8-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 164762371,
                    "Price": 155.74,
                    "DateTime": "2022-10-28T00:00:00Z",
                    "Growth": 0.1117,
                    "CalcString": "155.74-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 97943171,
                    "Price": 153.34,
                    "DateTime": "2022-10-31T00:00:00Z",
                    "Growth": 0.0946,
                    "CalcString": "153.34-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 80379345,
                    "Price": 150.65,
                    "DateTime": "2022-11-01T00:00:00Z",
                    "Growth": 0.0754,
                    "CalcString": "150.65-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 93604623,
                    "Price": 145.03,
                    "DateTime": "2022-11-02T00:00:00Z",
                    "Growth": 0.0353,
                    "CalcString": "145.03-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 97918516,
                    "Price": 138.88,
                    "DateTime": "2022-11-03T00:00:00Z",
                    "Growth": -0.0086,
                    "CalcString": "138.88-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 140814796,
                    "Price": 138.38,
                    "DateTime": "2022-11-04T00:00:00Z",
                    "Growth": -0.0122,
                    "CalcString": "138.38-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 83374628,
                    "Price": 138.92,
                    "DateTime": "2022-11-07T00:00:00Z",
                    "Growth": -0.0084,
                    "CalcString": "138.92-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 89908477,
                    "Price": 139.5,
                    "DateTime": "2022-11-08T00:00:00Z",
                    "Growth": -0.0042,
                    "CalcString": "139.5-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 74917794,
                    "Price": 134.87,
                    "DateTime": "2022-11-09T00:00:00Z",
                    "Growth": -0.0373,
                    "CalcString": "134.87-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 118854028,
                    "Price": 146.87,
                    "DateTime": "2022-11-10T00:00:00Z",
                    "Growth": 0.0484,
                    "CalcString": "146.87-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 93979665,
                    "Price": 149.7,
                    "DateTime": "2022-11-11T00:00:00Z",
                    "Growth": 0.0686,
                    "CalcString": "149.7-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 73374114,
                    "Price": 148.28,
                    "DateTime": "2022-11-14T00:00:00Z",
                    "Growth": 0.0585,
                    "CalcString": "148.28-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 89868332,
                    "Price": 150.04,
                    "DateTime": "2022-11-15T00:00:00Z",
                    "Growth": 0.071,
                    "CalcString": "150.04-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 64218266,
                    "Price": 148.79,
                    "DateTime": "2022-11-16T00:00:00Z",
                    "Growth": 0.0621,
                    "CalcString": "148.79-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 80389400,
                    "Price": 150.72,
                    "DateTime": "2022-11-17T00:00:00Z",
                    "Growth": 0.0759,
                    "CalcString": "150.72-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 74829573,
                    "Price": 151.29,
                    "DateTime": "2022-11-18T00:00:00Z",
                    "Growth": 0.0799,
                    "CalcString": "151.29-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 58724070,
                    "Price": 148.01,
                    "DateTime": "2022-11-21T00:00:00Z",
                    "Growth": 0.0565,
                    "CalcString": "148.01-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 51804132,
                    "Price": 150.18,
                    "DateTime": "2022-11-22T00:00:00Z",
                    "Growth": 0.072,
                    "CalcString": "150.18-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 58301395,
                    "Price": 151.07,
                    "DateTime": "2022-11-23T00:00:00Z",
                    "Growth": 0.0784,
                    "CalcString": "151.07-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 35195860,
                    "Price": 148.11,
                    "DateTime": "2022-11-25T00:00:00Z",
                    "Growth": 0.0572,
                    "CalcString": "148.11-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 69346522,
                    "Price": 144.22,
                    "DateTime": "2022-11-28T00:00:00Z",
                    "Growth": 0.0295,
                    "CalcString": "144.22-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 83763803,
                    "Price": 141.17,
                    "DateTime": "2022-11-29T00:00:00Z",
                    "Growth": 0.0077,
                    "CalcString": "141.17-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 111380880,
                    "Price": 148.03,
                    "DateTime": "2022-11-30T00:00:00Z",
                    "Growth": 0.0567,
                    "CalcString": "148.03-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 71250416,
                    "Price": 148.31,
                    "DateTime": "2022-12-01T00:00:00Z",
                    "Growth": 0.0587,
                    "CalcString": "148.31-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 65447446,
                    "Price": 147.81,
                    "DateTime": "2022-12-02T00:00:00Z",
                    "Growth": 0.0551,
                    "CalcString": "147.81-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 68826442,
                    "Price": 146.63,
                    "DateTime": "2022-12-05T00:00:00Z",
                    "Growth": 0.0467,
                    "CalcString": "146.63-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 64727186,
                    "Price": 142.91,
                    "DateTime": "2022-12-06T00:00:00Z",
                    "Growth": 0.0201,
                    "CalcString": "142.91-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 69721094,
                    "Price": 140.94,
                    "DateTime": "2022-12-07T00:00:00Z",
                    "Growth": 0.0061,
                    "CalcString": "140.94-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 62128338,
                    "Price": 142.65,
                    "DateTime": "2022-12-08T00:00:00Z",
                    "Growth": 0.0183,
                    "CalcString": "142.65-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 76097011,
                    "Price": 142.16,
                    "DateTime": "2022-12-09T00:00:00Z",
                    "Growth": 0.0148,
                    "CalcString": "142.16-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 70462654,
                    "Price": 144.49,
                    "DateTime": "2022-12-12T00:00:00Z",
                    "Growth": 0.0314,
                    "CalcString": "144.49-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 93886161,
                    "Price": 145.47,
                    "DateTime": "2022-12-13T00:00:00Z",
                    "Growth": 0.0384,
                    "CalcString": "145.47-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 82291182,
                    "Price": 143.21,
                    "DateTime": "2022-12-14T00:00:00Z",
                    "Growth": 0.0223,
                    "CalcString": "143.21-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 98931907,
                    "Price": 136.5,
                    "DateTime": "2022-12-15T00:00:00Z",
                    "Growth": -0.0256,
                    "CalcString": "136.5-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 160156900,
                    "Price": 134.51,
                    "DateTime": "2022-12-16T00:00:00Z",
                    "Growth": -0.0398,
                    "CalcString": "134.51-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 79592614,
                    "Price": 132.37,
                    "DateTime": "2022-12-19T00:00:00Z",
                    "Growth": -0.0551,
                    "CalcString": "132.37-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 77432819,
                    "Price": 132.3,
                    "DateTime": "2022-12-20T00:00:00Z",
                    "Growth": -0.0556,
                    "CalcString": "132.3-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 85927993,
                    "Price": 135.45,
                    "DateTime": "2022-12-21T00:00:00Z",
                    "Growth": -0.0331,
                    "CalcString": "135.45-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 77852108,
                    "Price": 132.23,
                    "DateTime": "2022-12-22T00:00:00Z",
                    "Growth": -0.0561,
                    "CalcString": "132.23-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 63814893,
                    "Price": 131.86,
                    "DateTime": "2022-12-23T00:00:00Z",
                    "Growth": -0.0587,
                    "CalcString": "131.86-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 69007830,
                    "Price": 130.03,
                    "DateTime": "2022-12-27T00:00:00Z",
                    "Growth": -0.0718,
                    "CalcString": "130.03-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 85438391,
                    "Price": 126.04,
                    "DateTime": "2022-12-28T00:00:00Z",
                    "Growth": -0.1003,
                    "CalcString": "126.04-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 75703710,
                    "Price": 129.61,
                    "DateTime": "2022-12-29T00:00:00Z",
                    "Growth": -0.0748,
                    "CalcString": "129.61-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 77034209,
                    "Price": 129.93,
                    "DateTime": "2022-12-30T00:00:00Z",
                    "Growth": -0.0725,
                    "CalcString": "129.93-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 112117471,
                    "Price": 125.07,
                    "DateTime": "2023-01-03T00:00:00Z",
                    "Growth": -0.1072,
                    "CalcString": "125.07-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 89113633,
                    "Price": 126.36,
                    "DateTime": "2023-01-04T00:00:00Z",
                    "Growth": -0.098,
                    "CalcString": "126.36-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 80962708,
                    "Price": 125.02,
                    "DateTime": "2023-01-05T00:00:00Z",
                    "Growth": -0.1076,
                    "CalcString": "125.02-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 87754715,
                    "Price": 129.62,
                    "DateTime": "2023-01-06T00:00:00Z",
                    "Growth": -0.0747,
                    "CalcString": "129.62-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 70790813,
                    "Price": 130.15,
                    "DateTime": "2023-01-09T00:00:00Z",
                    "Growth": -0.071,
                    "CalcString": "130.15-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                },
                {
                    "Volume": 4922811,
                    "Price": 130.31,
                    "DateTime": "2023-01-10T14:40:51Z",
                    "Growth": -0.0698,
                    "CalcString": "130.31-140.09/140.09",
                    "ReferenceDate": "2022-10-07T00:00:00Z"
                }
            ],
            "1Y": [
                {
                    "Volume": 86709147,
                    "Price": 172.17,
                    "DateTime": "2022-01-07T00:00:00Z",
                    "Growth": 0,
                    "CalcString": "172.17-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 106765552,
                    "Price": 172.19,
                    "DateTime": "2022-01-10T00:00:00Z",
                    "Growth": 0.0001,
                    "CalcString": "172.19-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 76138312,
                    "Price": 175.08,
                    "DateTime": "2022-01-11T00:00:00Z",
                    "Growth": 0.0169,
                    "CalcString": "175.08-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 74805173,
                    "Price": 175.53,
                    "DateTime": "2022-01-12T00:00:00Z",
                    "Growth": 0.0195,
                    "CalcString": "175.53-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 84505760,
                    "Price": 172.19,
                    "DateTime": "2022-01-13T00:00:00Z",
                    "Growth": 0.0001,
                    "CalcString": "172.19-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 80440780,
                    "Price": 173.07,
                    "DateTime": "2022-01-14T00:00:00Z",
                    "Growth": 0.0052,
                    "CalcString": "173.07-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 91168729,
                    "Price": 169.8,
                    "DateTime": "2022-01-18T00:00:00Z",
                    "Growth": -0.0138,
                    "CalcString": "169.8-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 94814990,
                    "Price": 166.23,
                    "DateTime": "2022-01-19T00:00:00Z",
                    "Growth": -0.0345,
                    "CalcString": "166.23-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 91420515,
                    "Price": 164.51,
                    "DateTime": "2022-01-20T00:00:00Z",
                    "Growth": -0.0445,
                    "CalcString": "164.51-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 122848858,
                    "Price": 162.41,
                    "DateTime": "2022-01-21T00:00:00Z",
                    "Growth": -0.0567,
                    "CalcString": "162.41-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 162706686,
                    "Price": 161.62,
                    "DateTime": "2022-01-24T00:00:00Z",
                    "Growth": -0.0613,
                    "CalcString": "161.62-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 115798367,
                    "Price": 159.78,
                    "DateTime": "2022-01-25T00:00:00Z",
                    "Growth": -0.072,
                    "CalcString": "159.78-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 108275308,
                    "Price": 159.69,
                    "DateTime": "2022-01-26T00:00:00Z",
                    "Growth": -0.0725,
                    "CalcString": "159.69-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 121954638,
                    "Price": 159.22,
                    "DateTime": "2022-01-27T00:00:00Z",
                    "Growth": -0.0752,
                    "CalcString": "159.22-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 179935660,
                    "Price": 170.33,
                    "DateTime": "2022-01-28T00:00:00Z",
                    "Growth": -0.0107,
                    "CalcString": "170.33-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 115541590,
                    "Price": 174.78,
                    "DateTime": "2022-01-31T00:00:00Z",
                    "Growth": 0.0152,
                    "CalcString": "174.78-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 86213911,
                    "Price": 174.61,
                    "DateTime": "2022-02-01T00:00:00Z",
                    "Growth": 0.0142,
                    "CalcString": "174.61-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 84914256,
                    "Price": 175.84,
                    "DateTime": "2022-02-02T00:00:00Z",
                    "Growth": 0.0213,
                    "CalcString": "175.84-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 89418074,
                    "Price": 172.9,
                    "DateTime": "2022-02-03T00:00:00Z",
                    "Growth": 0.0042,
                    "CalcString": "172.9-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 82465400,
                    "Price": 172.39,
                    "DateTime": "2022-02-04T00:00:00Z",
                    "Growth": 0.0013,
                    "CalcString": "172.39-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 77251204,
                    "Price": 171.66,
                    "DateTime": "2022-02-07T00:00:00Z",
                    "Growth": -0.003,
                    "CalcString": "171.66-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 74829217,
                    "Price": 174.83,
                    "DateTime": "2022-02-08T00:00:00Z",
                    "Growth": 0.0154,
                    "CalcString": "174.83-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 71285038,
                    "Price": 176.28,
                    "DateTime": "2022-02-09T00:00:00Z",
                    "Growth": 0.0239,
                    "CalcString": "176.28-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 90865899,
                    "Price": 172.12,
                    "DateTime": "2022-02-10T00:00:00Z",
                    "Growth": -0.0003,
                    "CalcString": "172.12-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 98670687,
                    "Price": 168.64,
                    "DateTime": "2022-02-11T00:00:00Z",
                    "Growth": -0.0205,
                    "CalcString": "168.64-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 86185530,
                    "Price": 168.88,
                    "DateTime": "2022-02-14T00:00:00Z",
                    "Growth": -0.0191,
                    "CalcString": "168.88-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 64286320,
                    "Price": 172.79,
                    "DateTime": "2022-02-15T00:00:00Z",
                    "Growth": 0.0036,
                    "CalcString": "172.79-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 61177398,
                    "Price": 172.55,
                    "DateTime": "2022-02-16T00:00:00Z",
                    "Growth": 0.0022,
                    "CalcString": "172.55-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 69589344,
                    "Price": 168.88,
                    "DateTime": "2022-02-17T00:00:00Z",
                    "Growth": -0.0191,
                    "CalcString": "168.88-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 82772674,
                    "Price": 167.3,
                    "DateTime": "2022-02-18T00:00:00Z",
                    "Growth": -0.0283,
                    "CalcString": "167.3-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 91162758,
                    "Price": 164.32,
                    "DateTime": "2022-02-22T00:00:00Z",
                    "Growth": -0.0456,
                    "CalcString": "164.32-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 90009247,
                    "Price": 160.07,
                    "DateTime": "2022-02-23T00:00:00Z",
                    "Growth": -0.0703,
                    "CalcString": "160.07-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 141147540,
                    "Price": 162.74,
                    "DateTime": "2022-02-24T00:00:00Z",
                    "Growth": -0.0548,
                    "CalcString": "162.74-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 91974222,
                    "Price": 164.85,
                    "DateTime": "2022-02-25T00:00:00Z",
                    "Growth": -0.0425,
                    "CalcString": "164.85-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 95056629,
                    "Price": 165.12,
                    "DateTime": "2022-02-28T00:00:00Z",
                    "Growth": -0.0409,
                    "CalcString": "165.12-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 83474425,
                    "Price": 163.2,
                    "DateTime": "2022-03-01T00:00:00Z",
                    "Growth": -0.0521,
                    "CalcString": "163.2-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 79724750,
                    "Price": 166.56,
                    "DateTime": "2022-03-02T00:00:00Z",
                    "Growth": -0.0326,
                    "CalcString": "166.56-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 76678441,
                    "Price": 166.23,
                    "DateTime": "2022-03-03T00:00:00Z",
                    "Growth": -0.0345,
                    "CalcString": "166.23-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 83819592,
                    "Price": 163.17,
                    "DateTime": "2022-03-04T00:00:00Z",
                    "Growth": -0.0523,
                    "CalcString": "163.17-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 96418845,
                    "Price": 159.3,
                    "DateTime": "2022-03-07T00:00:00Z",
                    "Growth": -0.0748,
                    "CalcString": "159.3-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 131148280,
                    "Price": 157.44,
                    "DateTime": "2022-03-08T00:00:00Z",
                    "Growth": -0.0856,
                    "CalcString": "157.44-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 91454905,
                    "Price": 162.95,
                    "DateTime": "2022-03-09T00:00:00Z",
                    "Growth": -0.0536,
                    "CalcString": "162.95-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 105342033,
                    "Price": 158.52,
                    "DateTime": "2022-03-10T00:00:00Z",
                    "Growth": -0.0793,
                    "CalcString": "158.52-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 96970102,
                    "Price": 154.73,
                    "DateTime": "2022-03-11T00:00:00Z",
                    "Growth": -0.1013,
                    "CalcString": "154.73-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 108732111,
                    "Price": 150.62,
                    "DateTime": "2022-03-14T00:00:00Z",
                    "Growth": -0.1252,
                    "CalcString": "150.62-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 92964302,
                    "Price": 155.09,
                    "DateTime": "2022-03-15T00:00:00Z",
                    "Growth": -0.0992,
                    "CalcString": "155.09-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 102300157,
                    "Price": 159.59,
                    "DateTime": "2022-03-16T00:00:00Z",
                    "Growth": -0.0731,
                    "CalcString": "159.59-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 75615376,
                    "Price": 160.62,
                    "DateTime": "2022-03-17T00:00:00Z",
                    "Growth": -0.0671,
                    "CalcString": "160.62-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 123511692,
                    "Price": 163.98,
                    "DateTime": "2022-03-18T00:00:00Z",
                    "Growth": -0.0476,
                    "CalcString": "163.98-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 95811352,
                    "Price": 165.38,
                    "DateTime": "2022-03-21T00:00:00Z",
                    "Growth": -0.0394,
                    "CalcString": "165.38-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 81532007,
                    "Price": 168.82,
                    "DateTime": "2022-03-22T00:00:00Z",
                    "Growth": -0.0195,
                    "CalcString": "168.82-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 98062674,
                    "Price": 170.21,
                    "DateTime": "2022-03-23T00:00:00Z",
                    "Growth": -0.0114,
                    "CalcString": "170.21-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 90131418,
                    "Price": 174.07,
                    "DateTime": "2022-03-24T00:00:00Z",
                    "Growth": 0.011,
                    "CalcString": "174.07-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 80546156,
                    "Price": 174.72,
                    "DateTime": "2022-03-25T00:00:00Z",
                    "Growth": 0.0148,
                    "CalcString": "174.72-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 90371916,
                    "Price": 175.6,
                    "DateTime": "2022-03-28T00:00:00Z",
                    "Growth": 0.0199,
                    "CalcString": "175.6-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 100589440,
                    "Price": 178.96,
                    "DateTime": "2022-03-29T00:00:00Z",
                    "Growth": 0.0394,
                    "CalcString": "178.96-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 92633154,
                    "Price": 177.77,
                    "DateTime": "2022-03-30T00:00:00Z",
                    "Growth": 0.0325,
                    "CalcString": "177.77-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 103049285,
                    "Price": 174.61,
                    "DateTime": "2022-03-31T00:00:00Z",
                    "Growth": 0.0142,
                    "CalcString": "174.61-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 78751328,
                    "Price": 174.31,
                    "DateTime": "2022-04-01T00:00:00Z",
                    "Growth": 0.0124,
                    "CalcString": "174.31-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 76545983,
                    "Price": 178.44,
                    "DateTime": "2022-04-04T00:00:00Z",
                    "Growth": 0.0364,
                    "CalcString": "178.44-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 73401786,
                    "Price": 175.06,
                    "DateTime": "2022-04-05T00:00:00Z",
                    "Growth": 0.0168,
                    "CalcString": "175.06-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 89058782,
                    "Price": 171.83,
                    "DateTime": "2022-04-06T00:00:00Z",
                    "Growth": -0.002,
                    "CalcString": "171.83-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 77594650,
                    "Price": 172.14,
                    "DateTime": "2022-04-07T00:00:00Z",
                    "Growth": -0.0002,
                    "CalcString": "172.14-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 76575508,
                    "Price": 170.09,
                    "DateTime": "2022-04-08T00:00:00Z",
                    "Growth": -0.0121,
                    "CalcString": "170.09-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 72246706,
                    "Price": 165.75,
                    "DateTime": "2022-04-11T00:00:00Z",
                    "Growth": -0.0373,
                    "CalcString": "165.75-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 79265181,
                    "Price": 167.66,
                    "DateTime": "2022-04-12T00:00:00Z",
                    "Growth": -0.0262,
                    "CalcString": "167.66-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 70618925,
                    "Price": 170.4,
                    "DateTime": "2022-04-13T00:00:00Z",
                    "Growth": -0.0103,
                    "CalcString": "170.4-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 75329376,
                    "Price": 165.29,
                    "DateTime": "2022-04-14T00:00:00Z",
                    "Growth": -0.04,
                    "CalcString": "165.29-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 69023941,
                    "Price": 165.07,
                    "DateTime": "2022-04-18T00:00:00Z",
                    "Growth": -0.0412,
                    "CalcString": "165.07-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 67723833,
                    "Price": 167.4,
                    "DateTime": "2022-04-19T00:00:00Z",
                    "Growth": -0.0277,
                    "CalcString": "167.4-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 67929814,
                    "Price": 167.23,
                    "DateTime": "2022-04-20T00:00:00Z",
                    "Growth": -0.0287,
                    "CalcString": "167.23-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 87227768,
                    "Price": 166.42,
                    "DateTime": "2022-04-21T00:00:00Z",
                    "Growth": -0.0334,
                    "CalcString": "166.42-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 84882424,
                    "Price": 161.79,
                    "DateTime": "2022-04-22T00:00:00Z",
                    "Growth": -0.0603,
                    "CalcString": "161.79-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 96046376,
                    "Price": 162.88,
                    "DateTime": "2022-04-25T00:00:00Z",
                    "Growth": -0.054,
                    "CalcString": "162.88-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 95623240,
                    "Price": 156.8,
                    "DateTime": "2022-04-26T00:00:00Z",
                    "Growth": -0.0893,
                    "CalcString": "156.8-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 88063191,
                    "Price": 156.57,
                    "DateTime": "2022-04-27T00:00:00Z",
                    "Growth": -0.0906,
                    "CalcString": "156.57-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 130216792,
                    "Price": 163.64,
                    "DateTime": "2022-04-28T00:00:00Z",
                    "Growth": -0.0495,
                    "CalcString": "163.64-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 131747571,
                    "Price": 157.65,
                    "DateTime": "2022-04-29T00:00:00Z",
                    "Growth": -0.0843,
                    "CalcString": "157.65-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 123055265,
                    "Price": 157.96,
                    "DateTime": "2022-05-02T00:00:00Z",
                    "Growth": -0.0825,
                    "CalcString": "157.96-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 88966526,
                    "Price": 159.48,
                    "DateTime": "2022-05-03T00:00:00Z",
                    "Growth": -0.0737,
                    "CalcString": "159.48-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 108256503,
                    "Price": 166.02,
                    "DateTime": "2022-05-04T00:00:00Z",
                    "Growth": -0.0357,
                    "CalcString": "166.02-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 130525275,
                    "Price": 156.77,
                    "DateTime": "2022-05-05T00:00:00Z",
                    "Growth": -0.0894,
                    "CalcString": "156.77-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 116124647,
                    "Price": 157.28,
                    "DateTime": "2022-05-06T00:00:00Z",
                    "Growth": -0.0865,
                    "CalcString": "157.28-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 131577921,
                    "Price": 152.06,
                    "DateTime": "2022-05-09T00:00:00Z",
                    "Growth": -0.1168,
                    "CalcString": "152.06-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 115366736,
                    "Price": 154.51,
                    "DateTime": "2022-05-10T00:00:00Z",
                    "Growth": -0.1026,
                    "CalcString": "154.51-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 142689825,
                    "Price": 146.5,
                    "DateTime": "2022-05-11T00:00:00Z",
                    "Growth": -0.1491,
                    "CalcString": "146.5-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 182602041,
                    "Price": 142.56,
                    "DateTime": "2022-05-12T00:00:00Z",
                    "Growth": -0.172,
                    "CalcString": "142.56-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 113990852,
                    "Price": 147.11,
                    "DateTime": "2022-05-13T00:00:00Z",
                    "Growth": -0.1456,
                    "CalcString": "147.11-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 86643781,
                    "Price": 145.54,
                    "DateTime": "2022-05-16T00:00:00Z",
                    "Growth": -0.1547,
                    "CalcString": "145.54-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 78336254,
                    "Price": 149.24,
                    "DateTime": "2022-05-17T00:00:00Z",
                    "Growth": -0.1332,
                    "CalcString": "149.24-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 109742890,
                    "Price": 140.82,
                    "DateTime": "2022-05-18T00:00:00Z",
                    "Growth": -0.1821,
                    "CalcString": "140.82-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 136095640,
                    "Price": 137.35,
                    "DateTime": "2022-05-19T00:00:00Z",
                    "Growth": -0.2022,
                    "CalcString": "137.35-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 137426125,
                    "Price": 137.59,
                    "DateTime": "2022-05-20T00:00:00Z",
                    "Growth": -0.2008,
                    "CalcString": "137.59-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 117726265,
                    "Price": 143.11,
                    "DateTime": "2022-05-23T00:00:00Z",
                    "Growth": -0.1688,
                    "CalcString": "143.11-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 104132746,
                    "Price": 140.36,
                    "DateTime": "2022-05-24T00:00:00Z",
                    "Growth": -0.1848,
                    "CalcString": "140.36-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 92482696,
                    "Price": 140.52,
                    "DateTime": "2022-05-25T00:00:00Z",
                    "Growth": -0.1838,
                    "CalcString": "140.52-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 90601548,
                    "Price": 143.78,
                    "DateTime": "2022-05-26T00:00:00Z",
                    "Growth": -0.1649,
                    "CalcString": "143.78-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 90978503,
                    "Price": 149.64,
                    "DateTime": "2022-05-27T00:00:00Z",
                    "Growth": -0.1309,
                    "CalcString": "149.64-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 103718416,
                    "Price": 148.84,
                    "DateTime": "2022-05-31T00:00:00Z",
                    "Growth": -0.1355,
                    "CalcString": "148.84-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 74286635,
                    "Price": 148.71,
                    "DateTime": "2022-06-01T00:00:00Z",
                    "Growth": -0.1363,
                    "CalcString": "148.71-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 72348055,
                    "Price": 151.21,
                    "DateTime": "2022-06-02T00:00:00Z",
                    "Growth": -0.1217,
                    "CalcString": "151.21-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 88570289,
                    "Price": 145.38,
                    "DateTime": "2022-06-03T00:00:00Z",
                    "Growth": -0.1556,
                    "CalcString": "145.38-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 71598380,
                    "Price": 146.14,
                    "DateTime": "2022-06-06T00:00:00Z",
                    "Growth": -0.1512,
                    "CalcString": "146.14-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 67808150,
                    "Price": 148.71,
                    "DateTime": "2022-06-07T00:00:00Z",
                    "Growth": -0.1363,
                    "CalcString": "148.71-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 53950201,
                    "Price": 147.96,
                    "DateTime": "2022-06-08T00:00:00Z",
                    "Growth": -0.1406,
                    "CalcString": "147.96-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 69472976,
                    "Price": 142.64,
                    "DateTime": "2022-06-09T00:00:00Z",
                    "Growth": -0.1715,
                    "CalcString": "142.64-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 91566637,
                    "Price": 137.13,
                    "DateTime": "2022-06-10T00:00:00Z",
                    "Growth": -0.2035,
                    "CalcString": "137.13-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 122207099,
                    "Price": 131.88,
                    "DateTime": "2022-06-13T00:00:00Z",
                    "Growth": -0.234,
                    "CalcString": "131.88-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 84784326,
                    "Price": 132.76,
                    "DateTime": "2022-06-14T00:00:00Z",
                    "Growth": -0.2289,
                    "CalcString": "132.76-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 91532972,
                    "Price": 135.43,
                    "DateTime": "2022-06-15T00:00:00Z",
                    "Growth": -0.2134,
                    "CalcString": "135.43-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 107961508,
                    "Price": 130.06,
                    "DateTime": "2022-06-16T00:00:00Z",
                    "Growth": -0.2446,
                    "CalcString": "130.06-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 134520290,
                    "Price": 131.56,
                    "DateTime": "2022-06-17T00:00:00Z",
                    "Growth": -0.2359,
                    "CalcString": "131.56-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 81000488,
                    "Price": 135.87,
                    "DateTime": "2022-06-21T00:00:00Z",
                    "Growth": -0.2108,
                    "CalcString": "135.87-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 73409234,
                    "Price": 135.35,
                    "DateTime": "2022-06-22T00:00:00Z",
                    "Growth": -0.2139,
                    "CalcString": "135.35-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 72433768,
                    "Price": 138.27,
                    "DateTime": "2022-06-23T00:00:00Z",
                    "Growth": -0.1969,
                    "CalcString": "138.27-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 89116837,
                    "Price": 141.66,
                    "DateTime": "2022-06-24T00:00:00Z",
                    "Growth": -0.1772,
                    "CalcString": "141.66-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 70207908,
                    "Price": 141.66,
                    "DateTime": "2022-06-27T00:00:00Z",
                    "Growth": -0.1772,
                    "CalcString": "141.66-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 67315328,
                    "Price": 137.44,
                    "DateTime": "2022-06-28T00:00:00Z",
                    "Growth": -0.2017,
                    "CalcString": "137.44-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 66242411,
                    "Price": 139.23,
                    "DateTime": "2022-06-29T00:00:00Z",
                    "Growth": -0.1913,
                    "CalcString": "139.23-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 98964467,
                    "Price": 136.72,
                    "DateTime": "2022-06-30T00:00:00Z",
                    "Growth": -0.2059,
                    "CalcString": "136.72-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 71051552,
                    "Price": 138.93,
                    "DateTime": "2022-07-01T00:00:00Z",
                    "Growth": -0.1931,
                    "CalcString": "138.93-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 73429641,
                    "Price": 141.56,
                    "DateTime": "2022-07-05T00:00:00Z",
                    "Growth": -0.1778,
                    "CalcString": "141.56-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 74064254,
                    "Price": 142.92,
                    "DateTime": "2022-07-06T00:00:00Z",
                    "Growth": -0.1699,
                    "CalcString": "142.92-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 66253709,
                    "Price": 146.35,
                    "DateTime": "2022-07-07T00:00:00Z",
                    "Growth": -0.15,
                    "CalcString": "146.35-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 64547798,
                    "Price": 147.04,
                    "DateTime": "2022-07-08T00:00:00Z",
                    "Growth": -0.146,
                    "CalcString": "147.04-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 63305113,
                    "Price": 144.87,
                    "DateTime": "2022-07-11T00:00:00Z",
                    "Growth": -0.1586,
                    "CalcString": "144.87-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 77588759,
                    "Price": 145.86,
                    "DateTime": "2022-07-12T00:00:00Z",
                    "Growth": -0.1528,
                    "CalcString": "145.86-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 71185560,
                    "Price": 145.49,
                    "DateTime": "2022-07-13T00:00:00Z",
                    "Growth": -0.155,
                    "CalcString": "145.49-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 78140744,
                    "Price": 148.47,
                    "DateTime": "2022-07-14T00:00:00Z",
                    "Growth": -0.1377,
                    "CalcString": "148.47-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 76259931,
                    "Price": 150.17,
                    "DateTime": "2022-07-15T00:00:00Z",
                    "Growth": -0.1278,
                    "CalcString": "150.17-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 81420868,
                    "Price": 147.07,
                    "DateTime": "2022-07-18T00:00:00Z",
                    "Growth": -0.1458,
                    "CalcString": "147.07-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 82982367,
                    "Price": 151,
                    "DateTime": "2022-07-19T00:00:00Z",
                    "Growth": -0.123,
                    "CalcString": "151-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 64823413,
                    "Price": 153.04,
                    "DateTime": "2022-07-20T00:00:00Z",
                    "Growth": -0.1111,
                    "CalcString": "153.04-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 65086636,
                    "Price": 155.35,
                    "DateTime": "2022-07-21T00:00:00Z",
                    "Growth": -0.0977,
                    "CalcString": "155.35-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 66675408,
                    "Price": 154.09,
                    "DateTime": "2022-07-22T00:00:00Z",
                    "Growth": -0.105,
                    "CalcString": "154.09-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 53623945,
                    "Price": 152.95,
                    "DateTime": "2022-07-25T00:00:00Z",
                    "Growth": -0.1116,
                    "CalcString": "152.95-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 55138691,
                    "Price": 151.6,
                    "DateTime": "2022-07-26T00:00:00Z",
                    "Growth": -0.1195,
                    "CalcString": "151.6-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 78620688,
                    "Price": 156.79,
                    "DateTime": "2022-07-27T00:00:00Z",
                    "Growth": -0.0893,
                    "CalcString": "156.79-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 81378731,
                    "Price": 157.35,
                    "DateTime": "2022-07-28T00:00:00Z",
                    "Growth": -0.0861,
                    "CalcString": "157.35-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 101786860,
                    "Price": 162.51,
                    "DateTime": "2022-07-29T00:00:00Z",
                    "Growth": -0.0561,
                    "CalcString": "162.51-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 67829379,
                    "Price": 161.51,
                    "DateTime": "2022-08-01T00:00:00Z",
                    "Growth": -0.0619,
                    "CalcString": "161.51-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 59907025,
                    "Price": 160.01,
                    "DateTime": "2022-08-02T00:00:00Z",
                    "Growth": -0.0706,
                    "CalcString": "160.01-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 82507488,
                    "Price": 166.13,
                    "DateTime": "2022-08-03T00:00:00Z",
                    "Growth": -0.0351,
                    "CalcString": "166.13-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 55474144,
                    "Price": 165.81,
                    "DateTime": "2022-08-04T00:00:00Z",
                    "Growth": -0.0369,
                    "CalcString": "165.81-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 56696985,
                    "Price": 165.35,
                    "DateTime": "2022-08-05T00:00:00Z",
                    "Growth": -0.0396,
                    "CalcString": "165.35-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 60362338,
                    "Price": 164.87,
                    "DateTime": "2022-08-08T00:00:00Z",
                    "Growth": -0.0424,
                    "CalcString": "164.87-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 63135503,
                    "Price": 164.92,
                    "DateTime": "2022-08-09T00:00:00Z",
                    "Growth": -0.0421,
                    "CalcString": "164.92-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 70170540,
                    "Price": 169.24,
                    "DateTime": "2022-08-10T00:00:00Z",
                    "Growth": -0.017,
                    "CalcString": "169.24-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 57149159,
                    "Price": 168.49,
                    "DateTime": "2022-08-11T00:00:00Z",
                    "Growth": -0.0214,
                    "CalcString": "168.49-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 68039382,
                    "Price": 172.1,
                    "DateTime": "2022-08-12T00:00:00Z",
                    "Growth": -0.0004,
                    "CalcString": "172.1-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 54091694,
                    "Price": 173.19,
                    "DateTime": "2022-08-15T00:00:00Z",
                    "Growth": 0.0059,
                    "CalcString": "173.19-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 56377050,
                    "Price": 173.03,
                    "DateTime": "2022-08-16T00:00:00Z",
                    "Growth": 0.005,
                    "CalcString": "173.03-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 79542037,
                    "Price": 174.55,
                    "DateTime": "2022-08-17T00:00:00Z",
                    "Growth": 0.0138,
                    "CalcString": "174.55-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 62290075,
                    "Price": 174.15,
                    "DateTime": "2022-08-18T00:00:00Z",
                    "Growth": 0.0115,
                    "CalcString": "174.15-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 70346295,
                    "Price": 171.52,
                    "DateTime": "2022-08-19T00:00:00Z",
                    "Growth": -0.0038,
                    "CalcString": "171.52-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 69026809,
                    "Price": 167.57,
                    "DateTime": "2022-08-22T00:00:00Z",
                    "Growth": -0.0267,
                    "CalcString": "167.57-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 54147079,
                    "Price": 167.23,
                    "DateTime": "2022-08-23T00:00:00Z",
                    "Growth": -0.0287,
                    "CalcString": "167.23-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 53841524,
                    "Price": 167.53,
                    "DateTime": "2022-08-24T00:00:00Z",
                    "Growth": -0.027,
                    "CalcString": "167.53-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 51218209,
                    "Price": 170.03,
                    "DateTime": "2022-08-25T00:00:00Z",
                    "Growth": -0.0124,
                    "CalcString": "170.03-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 78960980,
                    "Price": 163.62,
                    "DateTime": "2022-08-26T00:00:00Z",
                    "Growth": -0.0497,
                    "CalcString": "163.62-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 73313953,
                    "Price": 161.38,
                    "DateTime": "2022-08-29T00:00:00Z",
                    "Growth": -0.0627,
                    "CalcString": "161.38-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 77906197,
                    "Price": 158.91,
                    "DateTime": "2022-08-30T00:00:00Z",
                    "Growth": -0.077,
                    "CalcString": "158.91-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 87991091,
                    "Price": 157.22,
                    "DateTime": "2022-08-31T00:00:00Z",
                    "Growth": -0.0868,
                    "CalcString": "157.22-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 74229896,
                    "Price": 157.96,
                    "DateTime": "2022-09-01T00:00:00Z",
                    "Growth": -0.0825,
                    "CalcString": "157.96-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 76957768,
                    "Price": 155.81,
                    "DateTime": "2022-09-02T00:00:00Z",
                    "Growth": -0.095,
                    "CalcString": "155.81-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 73714843,
                    "Price": 154.53,
                    "DateTime": "2022-09-06T00:00:00Z",
                    "Growth": -0.1025,
                    "CalcString": "154.53-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 87449574,
                    "Price": 155.96,
                    "DateTime": "2022-09-07T00:00:00Z",
                    "Growth": -0.0942,
                    "CalcString": "155.96-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 84923847,
                    "Price": 154.46,
                    "DateTime": "2022-09-08T00:00:00Z",
                    "Growth": -0.1029,
                    "CalcString": "154.46-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 68081006,
                    "Price": 157.37,
                    "DateTime": "2022-09-09T00:00:00Z",
                    "Growth": -0.086,
                    "CalcString": "157.37-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 104955962,
                    "Price": 163.43,
                    "DateTime": "2022-09-12T00:00:00Z",
                    "Growth": -0.0508,
                    "CalcString": "163.43-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 122656614,
                    "Price": 153.84,
                    "DateTime": "2022-09-13T00:00:00Z",
                    "Growth": -0.1065,
                    "CalcString": "153.84-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 87965409,
                    "Price": 155.31,
                    "DateTime": "2022-09-14T00:00:00Z",
                    "Growth": -0.0979,
                    "CalcString": "155.31-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 90481110,
                    "Price": 152.37,
                    "DateTime": "2022-09-15T00:00:00Z",
                    "Growth": -0.115,
                    "CalcString": "152.37-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 162278841,
                    "Price": 150.7,
                    "DateTime": "2022-09-16T00:00:00Z",
                    "Growth": -0.1247,
                    "CalcString": "150.7-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 81474246,
                    "Price": 154.48,
                    "DateTime": "2022-09-19T00:00:00Z",
                    "Growth": -0.1027,
                    "CalcString": "154.48-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 107689796,
                    "Price": 156.9,
                    "DateTime": "2022-09-20T00:00:00Z",
                    "Growth": -0.0887,
                    "CalcString": "156.9-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 101696790,
                    "Price": 153.72,
                    "DateTime": "2022-09-21T00:00:00Z",
                    "Growth": -0.1072,
                    "CalcString": "153.72-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 86652542,
                    "Price": 152.74,
                    "DateTime": "2022-09-22T00:00:00Z",
                    "Growth": -0.1129,
                    "CalcString": "152.74-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 96029909,
                    "Price": 150.43,
                    "DateTime": "2022-09-23T00:00:00Z",
                    "Growth": -0.1263,
                    "CalcString": "150.43-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 93339409,
                    "Price": 150.77,
                    "DateTime": "2022-09-26T00:00:00Z",
                    "Growth": -0.1243,
                    "CalcString": "150.77-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 84442741,
                    "Price": 151.76,
                    "DateTime": "2022-09-27T00:00:00Z",
                    "Growth": -0.1185,
                    "CalcString": "151.76-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 146691387,
                    "Price": 149.84,
                    "DateTime": "2022-09-28T00:00:00Z",
                    "Growth": -0.1297,
                    "CalcString": "149.84-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 128138237,
                    "Price": 142.48,
                    "DateTime": "2022-09-29T00:00:00Z",
                    "Growth": -0.1724,
                    "CalcString": "142.48-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 124925274,
                    "Price": 138.2,
                    "DateTime": "2022-09-30T00:00:00Z",
                    "Growth": -0.1973,
                    "CalcString": "138.2-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 114311663,
                    "Price": 142.45,
                    "DateTime": "2022-10-03T00:00:00Z",
                    "Growth": -0.1726,
                    "CalcString": "142.45-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 87830064,
                    "Price": 146.1,
                    "DateTime": "2022-10-04T00:00:00Z",
                    "Growth": -0.1514,
                    "CalcString": "146.1-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 79470968,
                    "Price": 146.4,
                    "DateTime": "2022-10-05T00:00:00Z",
                    "Growth": -0.1497,
                    "CalcString": "146.4-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 68402169,
                    "Price": 145.43,
                    "DateTime": "2022-10-06T00:00:00Z",
                    "Growth": -0.1553,
                    "CalcString": "145.43-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 85925559,
                    "Price": 140.09,
                    "DateTime": "2022-10-07T00:00:00Z",
                    "Growth": -0.1863,
                    "CalcString": "140.09-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 74899002,
                    "Price": 140.42,
                    "DateTime": "2022-10-10T00:00:00Z",
                    "Growth": -0.1844,
                    "CalcString": "140.42-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 77033672,
                    "Price": 138.98,
                    "DateTime": "2022-10-11T00:00:00Z",
                    "Growth": -0.1928,
                    "CalcString": "138.98-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 70433744,
                    "Price": 138.34,
                    "DateTime": "2022-10-12T00:00:00Z",
                    "Growth": -0.1965,
                    "CalcString": "138.34-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 113223975,
                    "Price": 142.99,
                    "DateTime": "2022-10-13T00:00:00Z",
                    "Growth": -0.1695,
                    "CalcString": "142.99-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 88597969,
                    "Price": 138.38,
                    "DateTime": "2022-10-14T00:00:00Z",
                    "Growth": -0.1963,
                    "CalcString": "138.38-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 85250939,
                    "Price": 142.41,
                    "DateTime": "2022-10-17T00:00:00Z",
                    "Growth": -0.1729,
                    "CalcString": "142.41-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 99136610,
                    "Price": 143.75,
                    "DateTime": "2022-10-18T00:00:00Z",
                    "Growth": -0.1651,
                    "CalcString": "143.75-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 61758340,
                    "Price": 143.86,
                    "DateTime": "2022-10-19T00:00:00Z",
                    "Growth": -0.1644,
                    "CalcString": "143.86-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 64521989,
                    "Price": 143.39,
                    "DateTime": "2022-10-20T00:00:00Z",
                    "Growth": -0.1672,
                    "CalcString": "143.39-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 86548609,
                    "Price": 147.27,
                    "DateTime": "2022-10-21T00:00:00Z",
                    "Growth": -0.1446,
                    "CalcString": "147.27-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 75981918,
                    "Price": 149.45,
                    "DateTime": "2022-10-24T00:00:00Z",
                    "Growth": -0.132,
                    "CalcString": "149.45-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 74732290,
                    "Price": 152.34,
                    "DateTime": "2022-10-25T00:00:00Z",
                    "Growth": -0.1152,
                    "CalcString": "152.34-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 88436172,
                    "Price": 149.35,
                    "DateTime": "2022-10-26T00:00:00Z",
                    "Growth": -0.1325,
                    "CalcString": "149.35-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 109180150,
                    "Price": 144.8,
                    "DateTime": "2022-10-27T00:00:00Z",
                    "Growth": -0.159,
                    "CalcString": "144.8-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 164762371,
                    "Price": 155.74,
                    "DateTime": "2022-10-28T00:00:00Z",
                    "Growth": -0.0954,
                    "CalcString": "155.74-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 97943171,
                    "Price": 153.34,
                    "DateTime": "2022-10-31T00:00:00Z",
                    "Growth": -0.1094,
                    "CalcString": "153.34-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 80379345,
                    "Price": 150.65,
                    "DateTime": "2022-11-01T00:00:00Z",
                    "Growth": -0.125,
                    "CalcString": "150.65-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 93604623,
                    "Price": 145.03,
                    "DateTime": "2022-11-02T00:00:00Z",
                    "Growth": -0.1576,
                    "CalcString": "145.03-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 97918516,
                    "Price": 138.88,
                    "DateTime": "2022-11-03T00:00:00Z",
                    "Growth": -0.1934,
                    "CalcString": "138.88-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 140814796,
                    "Price": 138.38,
                    "DateTime": "2022-11-04T00:00:00Z",
                    "Growth": -0.1963,
                    "CalcString": "138.38-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 83374628,
                    "Price": 138.92,
                    "DateTime": "2022-11-07T00:00:00Z",
                    "Growth": -0.1931,
                    "CalcString": "138.92-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 89908477,
                    "Price": 139.5,
                    "DateTime": "2022-11-08T00:00:00Z",
                    "Growth": -0.1898,
                    "CalcString": "139.5-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 74917794,
                    "Price": 134.87,
                    "DateTime": "2022-11-09T00:00:00Z",
                    "Growth": -0.2166,
                    "CalcString": "134.87-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 118854028,
                    "Price": 146.87,
                    "DateTime": "2022-11-10T00:00:00Z",
                    "Growth": -0.1469,
                    "CalcString": "146.87-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 93979665,
                    "Price": 149.7,
                    "DateTime": "2022-11-11T00:00:00Z",
                    "Growth": -0.1305,
                    "CalcString": "149.7-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 73374114,
                    "Price": 148.28,
                    "DateTime": "2022-11-14T00:00:00Z",
                    "Growth": -0.1388,
                    "CalcString": "148.28-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 89868332,
                    "Price": 150.04,
                    "DateTime": "2022-11-15T00:00:00Z",
                    "Growth": -0.1285,
                    "CalcString": "150.04-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 64218266,
                    "Price": 148.79,
                    "DateTime": "2022-11-16T00:00:00Z",
                    "Growth": -0.1358,
                    "CalcString": "148.79-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 80389400,
                    "Price": 150.72,
                    "DateTime": "2022-11-17T00:00:00Z",
                    "Growth": -0.1246,
                    "CalcString": "150.72-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 74829573,
                    "Price": 151.29,
                    "DateTime": "2022-11-18T00:00:00Z",
                    "Growth": -0.1213,
                    "CalcString": "151.29-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 58724070,
                    "Price": 148.01,
                    "DateTime": "2022-11-21T00:00:00Z",
                    "Growth": -0.1403,
                    "CalcString": "148.01-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 51804132,
                    "Price": 150.18,
                    "DateTime": "2022-11-22T00:00:00Z",
                    "Growth": -0.1277,
                    "CalcString": "150.18-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 58301395,
                    "Price": 151.07,
                    "DateTime": "2022-11-23T00:00:00Z",
                    "Growth": -0.1226,
                    "CalcString": "151.07-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 35195860,
                    "Price": 148.11,
                    "DateTime": "2022-11-25T00:00:00Z",
                    "Growth": -0.1397,
                    "CalcString": "148.11-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 69346522,
                    "Price": 144.22,
                    "DateTime": "2022-11-28T00:00:00Z",
                    "Growth": -0.1623,
                    "CalcString": "144.22-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 83763803,
                    "Price": 141.17,
                    "DateTime": "2022-11-29T00:00:00Z",
                    "Growth": -0.1801,
                    "CalcString": "141.17-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 111380880,
                    "Price": 148.03,
                    "DateTime": "2022-11-30T00:00:00Z",
                    "Growth": -0.1402,
                    "CalcString": "148.03-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 71250416,
                    "Price": 148.31,
                    "DateTime": "2022-12-01T00:00:00Z",
                    "Growth": -0.1386,
                    "CalcString": "148.31-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 65447446,
                    "Price": 147.81,
                    "DateTime": "2022-12-02T00:00:00Z",
                    "Growth": -0.1415,
                    "CalcString": "147.81-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 68826442,
                    "Price": 146.63,
                    "DateTime": "2022-12-05T00:00:00Z",
                    "Growth": -0.1483,
                    "CalcString": "146.63-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 64727186,
                    "Price": 142.91,
                    "DateTime": "2022-12-06T00:00:00Z",
                    "Growth": -0.1699,
                    "CalcString": "142.91-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 69721094,
                    "Price": 140.94,
                    "DateTime": "2022-12-07T00:00:00Z",
                    "Growth": -0.1814,
                    "CalcString": "140.94-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 62128338,
                    "Price": 142.65,
                    "DateTime": "2022-12-08T00:00:00Z",
                    "Growth": -0.1715,
                    "CalcString": "142.65-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 76097011,
                    "Price": 142.16,
                    "DateTime": "2022-12-09T00:00:00Z",
                    "Growth": -0.1743,
                    "CalcString": "142.16-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 70462654,
                    "Price": 144.49,
                    "DateTime": "2022-12-12T00:00:00Z",
                    "Growth": -0.1608,
                    "CalcString": "144.49-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 93886161,
                    "Price": 145.47,
                    "DateTime": "2022-12-13T00:00:00Z",
                    "Growth": -0.1551,
                    "CalcString": "145.47-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 82291182,
                    "Price": 143.21,
                    "DateTime": "2022-12-14T00:00:00Z",
                    "Growth": -0.1682,
                    "CalcString": "143.21-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 98931907,
                    "Price": 136.5,
                    "DateTime": "2022-12-15T00:00:00Z",
                    "Growth": -0.2072,
                    "CalcString": "136.5-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 160156900,
                    "Price": 134.51,
                    "DateTime": "2022-12-16T00:00:00Z",
                    "Growth": -0.2187,
                    "CalcString": "134.51-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 79592614,
                    "Price": 132.37,
                    "DateTime": "2022-12-19T00:00:00Z",
                    "Growth": -0.2312,
                    "CalcString": "132.37-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 77432819,
                    "Price": 132.3,
                    "DateTime": "2022-12-20T00:00:00Z",
                    "Growth": -0.2316,
                    "CalcString": "132.3-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 85927993,
                    "Price": 135.45,
                    "DateTime": "2022-12-21T00:00:00Z",
                    "Growth": -0.2133,
                    "CalcString": "135.45-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 77852108,
                    "Price": 132.23,
                    "DateTime": "2022-12-22T00:00:00Z",
                    "Growth": -0.232,
                    "CalcString": "132.23-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 63814893,
                    "Price": 131.86,
                    "DateTime": "2022-12-23T00:00:00Z",
                    "Growth": -0.2341,
                    "CalcString": "131.86-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 69007830,
                    "Price": 130.03,
                    "DateTime": "2022-12-27T00:00:00Z",
                    "Growth": -0.2448,
                    "CalcString": "130.03-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 85438391,
                    "Price": 126.04,
                    "DateTime": "2022-12-28T00:00:00Z",
                    "Growth": -0.2679,
                    "CalcString": "126.04-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 75703710,
                    "Price": 129.61,
                    "DateTime": "2022-12-29T00:00:00Z",
                    "Growth": -0.2472,
                    "CalcString": "129.61-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 77034209,
                    "Price": 129.93,
                    "DateTime": "2022-12-30T00:00:00Z",
                    "Growth": -0.2453,
                    "CalcString": "129.93-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 112117471,
                    "Price": 125.07,
                    "DateTime": "2023-01-03T00:00:00Z",
                    "Growth": -0.2736,
                    "CalcString": "125.07-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 89113633,
                    "Price": 126.36,
                    "DateTime": "2023-01-04T00:00:00Z",
                    "Growth": -0.2661,
                    "CalcString": "126.36-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 80962708,
                    "Price": 125.02,
                    "DateTime": "2023-01-05T00:00:00Z",
                    "Growth": -0.2739,
                    "CalcString": "125.02-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 87754715,
                    "Price": 129.62,
                    "DateTime": "2023-01-06T00:00:00Z",
                    "Growth": -0.2471,
                    "CalcString": "129.62-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 70790813,
                    "Price": 130.15,
                    "DateTime": "2023-01-09T00:00:00Z",
                    "Growth": -0.2441,
                    "CalcString": "130.15-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                },
                {
                    "Volume": 4922811,
                    "Price": 130.31,
                    "DateTime": "2023-01-10T14:40:51Z",
                    "Growth": -0.2431,
                    "CalcString": "130.31-172.17/172.17",
                    "ReferenceDate": "2022-01-07T00:00:00Z"
                }
            ],
            "5Y": [
                {
                    "Volume": 21583997,
                    "Price": 43.5825,
                    "DateTime": "2018-01-09T00:00:00Z",
                    "Growth": 0,
                    "CalcString": "43.5825-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 32478930,
                    "Price": 41.8575,
                    "DateTime": "2018-01-31T00:00:00Z",
                    "Growth": -0.0396,
                    "CalcString": "41.8575-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 37782138,
                    "Price": 44.53,
                    "DateTime": "2018-02-28T00:00:00Z",
                    "Growth": 0.0217,
                    "CalcString": "44.53-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 38398505,
                    "Price": 41.945,
                    "DateTime": "2018-03-29T00:00:00Z",
                    "Growth": -0.0376,
                    "CalcString": "41.945-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 42427424,
                    "Price": 41.315,
                    "DateTime": "2018-04-30T00:00:00Z",
                    "Growth": -0.052,
                    "CalcString": "41.315-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 27482793,
                    "Price": 46.7175,
                    "DateTime": "2018-05-31T00:00:00Z",
                    "Growth": 0.0719,
                    "CalcString": "46.7175-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 22737666,
                    "Price": 46.2775,
                    "DateTime": "2018-06-29T00:00:00Z",
                    "Growth": 0.0618,
                    "CalcString": "46.2775-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 39373038,
                    "Price": 47.5725,
                    "DateTime": "2018-07-31T00:00:00Z",
                    "Growth": 0.0916,
                    "CalcString": "47.5725-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 43340134,
                    "Price": 56.9075,
                    "DateTime": "2018-08-31T00:00:00Z",
                    "Growth": 0.3057,
                    "CalcString": "56.9075-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 22929364,
                    "Price": 56.435,
                    "DateTime": "2018-09-28T00:00:00Z",
                    "Growth": 0.2949,
                    "CalcString": "56.435-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 38358933,
                    "Price": 54.715,
                    "DateTime": "2018-10-31T00:00:00Z",
                    "Growth": 0.2554,
                    "CalcString": "54.715-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 39531549,
                    "Price": 44.645,
                    "DateTime": "2018-11-30T00:00:00Z",
                    "Growth": 0.0244,
                    "CalcString": "44.645-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 35003466,
                    "Price": 39.435,
                    "DateTime": "2018-12-31T00:00:00Z",
                    "Growth": -0.0952,
                    "CalcString": "39.435-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 40739649,
                    "Price": 41.61,
                    "DateTime": "2019-01-31T00:00:00Z",
                    "Growth": -0.0453,
                    "CalcString": "41.61-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 28215416,
                    "Price": 43.2875,
                    "DateTime": "2019-02-28T00:00:00Z",
                    "Growth": -0.0068,
                    "CalcString": "43.2875-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 23563961,
                    "Price": 47.4875,
                    "DateTime": "2019-03-29T00:00:00Z",
                    "Growth": 0.0896,
                    "CalcString": "47.4875-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 46534923,
                    "Price": 50.1675,
                    "DateTime": "2019-04-30T00:00:00Z",
                    "Growth": 0.1511,
                    "CalcString": "50.1675-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 27043584,
                    "Price": 43.7675,
                    "DateTime": "2019-05-31T00:00:00Z",
                    "Growth": 0.0042,
                    "CalcString": "43.7675-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 31110642,
                    "Price": 49.48,
                    "DateTime": "2019-06-28T00:00:00Z",
                    "Growth": 0.1353,
                    "CalcString": "49.48-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 69281361,
                    "Price": 53.26,
                    "DateTime": "2019-07-31T00:00:00Z",
                    "Growth": 0.2221,
                    "CalcString": "53.26-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 21162561,
                    "Price": 52.185,
                    "DateTime": "2019-08-30T00:00:00Z",
                    "Growth": 0.1974,
                    "CalcString": "52.185-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 26318583,
                    "Price": 55.9925,
                    "DateTime": "2019-09-30T00:00:00Z",
                    "Growth": 0.2847,
                    "CalcString": "55.9925-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 34790520,
                    "Price": 62.19,
                    "DateTime": "2019-10-31T00:00:00Z",
                    "Growth": 0.4269,
                    "CalcString": "62.19-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 11654363,
                    "Price": 66.8125,
                    "DateTime": "2019-11-29T00:00:00Z",
                    "Growth": 0.533,
                    "CalcString": "66.8125-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 25247625,
                    "Price": 73.4125,
                    "DateTime": "2019-12-31T00:00:00Z",
                    "Growth": 0.6844,
                    "CalcString": "73.4125-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 49897096,
                    "Price": 77.3775,
                    "DateTime": "2020-01-31T00:00:00Z",
                    "Growth": 0.7754,
                    "CalcString": "77.3775-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 106721230,
                    "Price": 68.34,
                    "DateTime": "2020-02-28T00:00:00Z",
                    "Growth": 0.5681,
                    "CalcString": "68.34-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 49250501,
                    "Price": 63.5725,
                    "DateTime": "2020-03-31T00:00:00Z",
                    "Growth": 0.4587,
                    "CalcString": "63.5725-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 45765968,
                    "Price": 73.45,
                    "DateTime": "2020-04-30T00:00:00Z",
                    "Growth": 0.6853,
                    "CalcString": "73.45-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 38399532,
                    "Price": 79.485,
                    "DateTime": "2020-05-29T00:00:00Z",
                    "Growth": 0.8238,
                    "CalcString": "79.485-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 35055821,
                    "Price": 91.2,
                    "DateTime": "2020-06-30T00:00:00Z",
                    "Growth": 1.0926,
                    "CalcString": "91.2-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 93573867,
                    "Price": 106.26,
                    "DateTime": "2020-07-31T00:00:00Z",
                    "Growth": 1.4381,
                    "CalcString": "106.26-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 225702688,
                    "Price": 129.04,
                    "DateTime": "2020-08-31T00:00:00Z",
                    "Growth": 1.9608,
                    "CalcString": "129.04-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 142675184,
                    "Price": 115.81,
                    "DateTime": "2020-09-30T00:00:00Z",
                    "Growth": 1.6573,
                    "CalcString": "115.81-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 190573476,
                    "Price": 108.86,
                    "DateTime": "2020-10-30T00:00:00Z",
                    "Growth": 1.4978,
                    "CalcString": "108.86-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 169410176,
                    "Price": 119.05,
                    "DateTime": "2020-11-30T00:00:00Z",
                    "Growth": 1.7316,
                    "CalcString": "119.05-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 99116586,
                    "Price": 132.69,
                    "DateTime": "2020-12-31T00:00:00Z",
                    "Growth": 2.0446,
                    "CalcString": "132.69-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 177523812,
                    "Price": 131.96,
                    "DateTime": "2021-01-29T00:00:00Z",
                    "Growth": 2.0278,
                    "CalcString": "131.96-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 164560394,
                    "Price": 121.26,
                    "DateTime": "2021-02-26T00:00:00Z",
                    "Growth": 1.7823,
                    "CalcString": "121.26-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 118323826,
                    "Price": 122.15,
                    "DateTime": "2021-03-31T00:00:00Z",
                    "Growth": 1.8027,
                    "CalcString": "122.15-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 109839466,
                    "Price": 131.46,
                    "DateTime": "2021-04-30T00:00:00Z",
                    "Growth": 2.0163,
                    "CalcString": "131.46-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 71311109,
                    "Price": 124.61,
                    "DateTime": "2021-05-28T00:00:00Z",
                    "Growth": 1.8592,
                    "CalcString": "124.61-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 63261393,
                    "Price": 136.96,
                    "DateTime": "2021-06-30T00:00:00Z",
                    "Growth": 2.1425,
                    "CalcString": "136.96-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 70440626,
                    "Price": 145.86,
                    "DateTime": "2021-07-30T00:00:00Z",
                    "Growth": 2.3468,
                    "CalcString": "145.86-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 86453117,
                    "Price": 151.83,
                    "DateTime": "2021-08-31T00:00:00Z",
                    "Growth": 2.4837,
                    "CalcString": "151.83-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 89056664,
                    "Price": 141.5,
                    "DateTime": "2021-09-30T00:00:00Z",
                    "Growth": 2.2467,
                    "CalcString": "141.5-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 124953168,
                    "Price": 149.8,
                    "DateTime": "2021-10-29T00:00:00Z",
                    "Growth": 2.4372,
                    "CalcString": "149.8-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 174048056,
                    "Price": 165.3,
                    "DateTime": "2021-11-30T00:00:00Z",
                    "Growth": 2.7928,
                    "CalcString": "165.3-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 64062261,
                    "Price": 177.57,
                    "DateTime": "2021-12-31T00:00:00Z",
                    "Growth": 3.0743,
                    "CalcString": "177.57-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 115541590,
                    "Price": 174.78,
                    "DateTime": "2022-01-31T00:00:00Z",
                    "Growth": 3.0103,
                    "CalcString": "174.78-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 95056629,
                    "Price": 165.12,
                    "DateTime": "2022-02-28T00:00:00Z",
                    "Growth": 2.7887,
                    "CalcString": "165.12-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 103049285,
                    "Price": 174.61,
                    "DateTime": "2022-03-31T00:00:00Z",
                    "Growth": 3.0064,
                    "CalcString": "174.61-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 131747571,
                    "Price": 157.65,
                    "DateTime": "2022-04-29T00:00:00Z",
                    "Growth": 2.6173,
                    "CalcString": "157.65-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 103718416,
                    "Price": 148.84,
                    "DateTime": "2022-05-31T00:00:00Z",
                    "Growth": 2.4151,
                    "CalcString": "148.84-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 98964467,
                    "Price": 136.72,
                    "DateTime": "2022-06-30T00:00:00Z",
                    "Growth": 2.137,
                    "CalcString": "136.72-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 101786860,
                    "Price": 162.51,
                    "DateTime": "2022-07-29T00:00:00Z",
                    "Growth": 2.7288,
                    "CalcString": "162.51-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 87991091,
                    "Price": 157.22,
                    "DateTime": "2022-08-31T00:00:00Z",
                    "Growth": 2.6074,
                    "CalcString": "157.22-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 124925274,
                    "Price": 138.2,
                    "DateTime": "2022-09-30T00:00:00Z",
                    "Growth": 2.171,
                    "CalcString": "138.2-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 97943171,
                    "Price": 153.34,
                    "DateTime": "2022-10-31T00:00:00Z",
                    "Growth": 2.5184,
                    "CalcString": "153.34-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 111380880,
                    "Price": 148.03,
                    "DateTime": "2022-11-30T00:00:00Z",
                    "Growth": 2.3965,
                    "CalcString": "148.03-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 77034209,
                    "Price": 129.93,
                    "DateTime": "2022-12-30T00:00:00Z",
                    "Growth": 1.9812,
                    "CalcString": "129.93-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 70790813,
                    "Price": 130.15,
                    "DateTime": "2023-01-09T00:00:00Z",
                    "Growth": 1.9863,
                    "CalcString": "130.15-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                },
                {
                    "Volume": 4922811,
                    "Price": 130.31,
                    "DateTime": "2023-01-10T14:40:51Z",
                    "Growth": 1.99,
                    "CalcString": "130.31-43.5825/43.5825",
                    "ReferenceDate": "2018-01-09T00:00:00Z"
                }
            ],
            "MAX": [
                {
                    "Volume": 40476592,
                    "Price": 9.1489289286,
                    "DateTime": "2010-06-29T00:00:00Z",
                    "Growth": 0,
                    "CalcString": "9.1489289286-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 26409580,
                    "Price": 8.9832142857,
                    "DateTime": "2010-06-30T00:00:00Z",
                    "Growth": -0.0181,
                    "CalcString": "8.9832142857-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 16016280,
                    "Price": 9.1875,
                    "DateTime": "2010-07-30T00:00:00Z",
                    "Growth": 0.0042,
                    "CalcString": "9.1875-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 15028086,
                    "Price": 8.6821428571,
                    "DateTime": "2010-08-31T00:00:00Z",
                    "Growth": -0.051,
                    "CalcString": "8.6821428571-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 24049636,
                    "Price": 10.1339285714,
                    "DateTime": "2010-09-30T00:00:00Z",
                    "Growth": 0.1077,
                    "CalcString": "10.1339285714-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 15375304,
                    "Price": 10.7492860714,
                    "DateTime": "2010-10-29T00:00:00Z",
                    "Growth": 0.1749,
                    "CalcString": "10.7492860714-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 17923328,
                    "Price": 11.1125,
                    "DateTime": "2010-11-30T00:00:00Z",
                    "Growth": 0.2146,
                    "CalcString": "11.1125-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6916261,
                    "Price": 11.52,
                    "DateTime": "2010-12-31T00:00:00Z",
                    "Growth": 0.2592,
                    "CalcString": "11.52-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 13456210,
                    "Price": 12.1185717857,
                    "DateTime": "2011-01-31T00:00:00Z",
                    "Growth": 0.3246,
                    "CalcString": "12.1185717857-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 14395497,
                    "Price": 12.6146428571,
                    "DateTime": "2011-02-28T00:00:00Z",
                    "Growth": 0.3788,
                    "CalcString": "12.6146428571-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 9798858,
                    "Price": 12.4466967857,
                    "DateTime": "2011-03-31T00:00:00Z",
                    "Growth": 0.3605,
                    "CalcString": "12.4466967857-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 35940848,
                    "Price": 12.5046428571,
                    "DateTime": "2011-04-29T00:00:00Z",
                    "Growth": 0.3668,
                    "CalcString": "12.5046428571-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 14919162,
                    "Price": 12.4225,
                    "DateTime": "2011-05-31T00:00:00Z",
                    "Growth": 0.3578,
                    "CalcString": "12.4225-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 11543913,
                    "Price": 11.9882146429,
                    "DateTime": "2011-06-30T00:00:00Z",
                    "Growth": 0.3103,
                    "CalcString": "11.9882146429-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 22592270,
                    "Price": 13.9457146429,
                    "DateTime": "2011-07-29T00:00:00Z",
                    "Growth": 0.5243,
                    "CalcString": "13.9457146429-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 18669842,
                    "Price": 13.7439285714,
                    "DateTime": "2011-08-31T00:00:00Z",
                    "Growth": 0.5022,
                    "CalcString": "13.7439285714-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 19579888,
                    "Price": 13.6185717857,
                    "DateTime": "2011-09-30T00:00:00Z",
                    "Growth": 0.4885,
                    "CalcString": "13.6185717857-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 13772329,
                    "Price": 14.4564285714,
                    "DateTime": "2011-10-31T00:00:00Z",
                    "Growth": 0.5801,
                    "CalcString": "14.4564285714-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 14502386,
                    "Price": 13.65,
                    "DateTime": "2011-11-30T00:00:00Z",
                    "Growth": 0.492,
                    "CalcString": "13.65-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6420530,
                    "Price": 14.4642857143,
                    "DateTime": "2011-12-30T00:00:00Z",
                    "Growth": 0.581,
                    "CalcString": "14.4642857143-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 13996855,
                    "Price": 16.3028575,
                    "DateTime": "2012-01-31T00:00:00Z",
                    "Growth": 0.7819,
                    "CalcString": "16.3028575-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 34000056,
                    "Price": 19.3728571429,
                    "DateTime": "2012-02-29T00:00:00Z",
                    "Growth": 1.1175,
                    "CalcString": "19.3728571429-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 26108484,
                    "Price": 21.4125,
                    "DateTime": "2012-03-30T00:00:00Z",
                    "Growth": 1.3404,
                    "CalcString": "21.4125-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 18076434,
                    "Price": 20.8564278571,
                    "DateTime": "2012-04-30T00:00:00Z",
                    "Growth": 1.2797,
                    "CalcString": "20.8564278571-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 17568228,
                    "Price": 20.6332135714,
                    "DateTime": "2012-05-31T00:00:00Z",
                    "Growth": 1.2553,
                    "CalcString": "20.6332135714-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 15051433,
                    "Price": 20.8571428571,
                    "DateTime": "2012-06-29T00:00:00Z",
                    "Growth": 1.2797,
                    "CalcString": "20.8571428571-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 16511668,
                    "Price": 21.8128575,
                    "DateTime": "2012-07-31T00:00:00Z",
                    "Growth": 1.3842,
                    "CalcString": "21.8128575-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 12082801,
                    "Price": 23.7585714286,
                    "DateTime": "2012-08-31T00:00:00Z",
                    "Growth": 1.5969,
                    "CalcString": "23.7585714286-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 19111012,
                    "Price": 23.8251778571,
                    "DateTime": "2012-09-28T00:00:00Z",
                    "Growth": 1.6041,
                    "CalcString": "23.8251778571-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 18214352,
                    "Price": 21.2614289286,
                    "DateTime": "2012-10-31T00:00:00Z",
                    "Growth": 1.3239,
                    "CalcString": "21.2614289286-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 13974998,
                    "Price": 20.9028582143,
                    "DateTime": "2012-11-30T00:00:00Z",
                    "Growth": 1.2847,
                    "CalcString": "20.9028582143-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 23553256,
                    "Price": 19.0061753571,
                    "DateTime": "2012-12-31T00:00:00Z",
                    "Growth": 1.0774,
                    "CalcString": "19.0061753571-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 11404745,
                    "Price": 16.2675,
                    "DateTime": "2013-01-31T00:00:00Z",
                    "Growth": 0.7781,
                    "CalcString": "16.2675-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 11518391,
                    "Price": 15.7642857143,
                    "DateTime": "2013-02-28T00:00:00Z",
                    "Growth": 0.7231,
                    "CalcString": "15.7642857143-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 15820798,
                    "Price": 15.8092857143,
                    "DateTime": "2013-03-28T00:00:00Z",
                    "Growth": 0.728,
                    "CalcString": "15.8092857143-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 24697766,
                    "Price": 15.8135714286,
                    "DateTime": "2013-04-30T00:00:00Z",
                    "Growth": 0.7285,
                    "CalcString": "15.8135714286-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 13725006,
                    "Price": 16.0619639286,
                    "DateTime": "2013-05-31T00:00:00Z",
                    "Growth": 0.7556,
                    "CalcString": "16.0619639286-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 20665632,
                    "Price": 14.1617857143,
                    "DateTime": "2013-06-28T00:00:00Z",
                    "Growth": 0.5479,
                    "CalcString": "14.1617857143-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 11534193,
                    "Price": 16.1617857143,
                    "DateTime": "2013-07-31T00:00:00Z",
                    "Growth": 0.7665,
                    "CalcString": "16.1617857143-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 9728684,
                    "Price": 17.4005714286,
                    "DateTime": "2013-08-30T00:00:00Z",
                    "Growth": 0.9019,
                    "CalcString": "17.4005714286-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 9291344,
                    "Price": 17.0267857143,
                    "DateTime": "2013-09-30T00:00:00Z",
                    "Growth": 0.8611,
                    "CalcString": "17.0267857143-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 9846255,
                    "Price": 18.6679296429,
                    "DateTime": "2013-10-31T00:00:00Z",
                    "Growth": 1.0404,
                    "CalcString": "18.6679296429-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 11361745,
                    "Price": 19.8596432143,
                    "DateTime": "2013-11-29T00:00:00Z",
                    "Growth": 1.1707,
                    "CalcString": "19.8596432143-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 7974196,
                    "Price": 20.0364292857,
                    "DateTime": "2013-12-31T00:00:00Z",
                    "Growth": 1.19,
                    "CalcString": "20.0364292857-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 16619492,
                    "Price": 17.8785714286,
                    "DateTime": "2014-01-31T00:00:00Z",
                    "Growth": 0.9542,
                    "CalcString": "17.8785714286-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 13296379,
                    "Price": 18.7942857143,
                    "DateTime": "2014-02-28T00:00:00Z",
                    "Growth": 1.0543,
                    "CalcString": "18.7942857143-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 6023884,
                    "Price": 19.1692857143,
                    "DateTime": "2014-03-31T00:00:00Z",
                    "Growth": 1.0952,
                    "CalcString": "19.1692857143-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 16317269,
                    "Price": 21.0746428571,
                    "DateTime": "2014-04-30T00:00:00Z",
                    "Growth": 1.3035,
                    "CalcString": "21.0746428571-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 20143591,
                    "Price": 22.6071428571,
                    "DateTime": "2014-05-30T00:00:00Z",
                    "Growth": 1.471,
                    "CalcString": "22.6071428571-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 49589028,
                    "Price": 23.2325,
                    "DateTime": "2014-06-30T00:00:00Z",
                    "Growth": 1.5394,
                    "CalcString": "23.2325-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 56842647,
                    "Price": 23.9,
                    "DateTime": "2014-07-31T00:00:00Z",
                    "Growth": 1.6123,
                    "CalcString": "23.9-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 44595247,
                    "Price": 25.625,
                    "DateTime": "2014-08-29T00:00:00Z",
                    "Growth": 1.8009,
                    "CalcString": "25.625-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 55264139,
                    "Price": 25.1875,
                    "DateTime": "2014-09-30T00:00:00Z",
                    "Growth": 1.7531,
                    "CalcString": "25.1875-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 44639285,
                    "Price": 27,
                    "DateTime": "2014-10-31T00:00:00Z",
                    "Growth": 1.9512,
                    "CalcString": "27-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 24814400,
                    "Price": 29.7325,
                    "DateTime": "2014-11-28T00:00:00Z",
                    "Growth": 2.2498,
                    "CalcString": "29.7325-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 41403351,
                    "Price": 27.595,
                    "DateTime": "2014-12-31T00:00:00Z",
                    "Growth": 2.0162,
                    "CalcString": "27.595-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 83745461,
                    "Price": 29.29,
                    "DateTime": "2015-01-30T00:00:00Z",
                    "Growth": 2.2015,
                    "CalcString": "29.29-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 62014847,
                    "Price": 32.115,
                    "DateTime": "2015-02-27T00:00:00Z",
                    "Growth": 2.5102,
                    "CalcString": "32.115-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 42090553,
                    "Price": 31.1075,
                    "DateTime": "2015-03-31T00:00:00Z",
                    "Growth": 2.4001,
                    "CalcString": "31.1075-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 83195423,
                    "Price": 31.2875,
                    "DateTime": "2015-04-30T00:00:00Z",
                    "Growth": 2.4198,
                    "CalcString": "31.2875-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 50884452,
                    "Price": 32.57,
                    "DateTime": "2015-05-29T00:00:00Z",
                    "Growth": 2.56,
                    "CalcString": "32.57-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 44370682,
                    "Price": 31.35625,
                    "DateTime": "2015-06-30T00:00:00Z",
                    "Growth": 2.4273,
                    "CalcString": "31.35625-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 42884953,
                    "Price": 30.325,
                    "DateTime": "2015-07-31T00:00:00Z",
                    "Growth": 2.3146,
                    "CalcString": "30.325-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 56229271,
                    "Price": 28.19,
                    "DateTime": "2015-08-31T00:00:00Z",
                    "Growth": 2.0812,
                    "CalcString": "28.19-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 66473033,
                    "Price": 27.575,
                    "DateTime": "2015-09-30T00:00:00Z",
                    "Growth": 2.014,
                    "CalcString": "27.575-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 49365254,
                    "Price": 29.875,
                    "DateTime": "2015-10-30T00:00:00Z",
                    "Growth": 2.2654,
                    "CalcString": "29.875-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 39180322,
                    "Price": 29.575,
                    "DateTime": "2015-11-30T00:00:00Z",
                    "Growth": 2.2326,
                    "CalcString": "29.575-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 40912316,
                    "Price": 26.315,
                    "DateTime": "2015-12-31T00:00:00Z",
                    "Growth": 1.8763,
                    "CalcString": "26.315-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 64416504,
                    "Price": 24.335,
                    "DateTime": "2016-01-29T00:00:00Z",
                    "Growth": 1.6599,
                    "CalcString": "24.335-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 35216277,
                    "Price": 24.1725,
                    "DateTime": "2016-02-29T00:00:00Z",
                    "Growth": 1.6421,
                    "CalcString": "24.1725-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 25888449,
                    "Price": 27.2475,
                    "DateTime": "2016-03-31T00:00:00Z",
                    "Growth": 1.9782,
                    "CalcString": "27.2475-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 68531478,
                    "Price": 23.435,
                    "DateTime": "2016-04-29T00:00:00Z",
                    "Growth": 1.5615,
                    "CalcString": "23.435-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 42307212,
                    "Price": 24.965,
                    "DateTime": "2016-05-31T00:00:00Z",
                    "Growth": 1.7287,
                    "CalcString": "24.965-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 35836356,
                    "Price": 23.9,
                    "DateTime": "2016-06-30T00:00:00Z",
                    "Growth": 1.6123,
                    "CalcString": "23.9-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 27733688,
                    "Price": 26.0525,
                    "DateTime": "2016-07-29T00:00:00Z",
                    "Growth": 1.8476,
                    "CalcString": "26.0525-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 29662406,
                    "Price": 26.525,
                    "DateTime": "2016-08-31T00:00:00Z",
                    "Growth": 1.8992,
                    "CalcString": "26.525-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 36379106,
                    "Price": 28.2625,
                    "DateTime": "2016-09-30T00:00:00Z",
                    "Growth": 2.0892,
                    "CalcString": "28.2625-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 26419398,
                    "Price": 28.385,
                    "DateTime": "2016-10-31T00:00:00Z",
                    "Growth": 2.1025,
                    "CalcString": "28.385-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 36162258,
                    "Price": 27.63,
                    "DateTime": "2016-11-30T00:00:00Z",
                    "Growth": 2.02,
                    "CalcString": "27.63-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 30586265,
                    "Price": 28.955,
                    "DateTime": "2016-12-30T00:00:00Z",
                    "Growth": 2.1649,
                    "CalcString": "28.955-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 49200993,
                    "Price": 30.3375,
                    "DateTime": "2017-01-31T00:00:00Z",
                    "Growth": 2.316,
                    "CalcString": "30.3375-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 23482860,
                    "Price": 34.2475,
                    "DateTime": "2017-02-28T00:00:00Z",
                    "Growth": 2.7433,
                    "CalcString": "34.2475-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 19661651,
                    "Price": 35.915,
                    "DateTime": "2017-03-31T00:00:00Z",
                    "Growth": 2.9256,
                    "CalcString": "35.915-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 20860358,
                    "Price": 35.9125,
                    "DateTime": "2017-04-28T00:00:00Z",
                    "Growth": 2.9253,
                    "CalcString": "35.9125-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 24451164,
                    "Price": 38.19,
                    "DateTime": "2017-05-31T00:00:00Z",
                    "Growth": 3.1743,
                    "CalcString": "38.19-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 23024107,
                    "Price": 36.005,
                    "DateTime": "2017-06-30T00:00:00Z",
                    "Growth": 2.9354,
                    "CalcString": "36.005-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 19845920,
                    "Price": 37.1825,
                    "DateTime": "2017-07-31T00:00:00Z",
                    "Growth": 3.0641,
                    "CalcString": "37.1825-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 26785096,
                    "Price": 41,
                    "DateTime": "2017-08-31T00:00:00Z",
                    "Growth": 3.4814,
                    "CalcString": "41-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 26299810,
                    "Price": 38.53,
                    "DateTime": "2017-09-29T00:00:00Z",
                    "Growth": 3.2114,
                    "CalcString": "38.53-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 36046828,
                    "Price": 42.26,
                    "DateTime": "2017-10-31T00:00:00Z",
                    "Growth": 3.6191,
                    "CalcString": "42.26-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 41527218,
                    "Price": 42.9625,
                    "DateTime": "2017-11-30T00:00:00Z",
                    "Growth": 3.6959,
                    "CalcString": "42.9625-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 25999922,
                    "Price": 42.3075,
                    "DateTime": "2017-12-29T00:00:00Z",
                    "Growth": 3.6243,
                    "CalcString": "42.3075-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 32478930,
                    "Price": 41.8575,
                    "DateTime": "2018-01-31T00:00:00Z",
                    "Growth": 3.5751,
                    "CalcString": "41.8575-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 37782138,
                    "Price": 44.53,
                    "DateTime": "2018-02-28T00:00:00Z",
                    "Growth": 3.8672,
                    "CalcString": "44.53-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 38398505,
                    "Price": 41.945,
                    "DateTime": "2018-03-29T00:00:00Z",
                    "Growth": 3.5847,
                    "CalcString": "41.945-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 42427424,
                    "Price": 41.315,
                    "DateTime": "2018-04-30T00:00:00Z",
                    "Growth": 3.5158,
                    "CalcString": "41.315-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 27482793,
                    "Price": 46.7175,
                    "DateTime": "2018-05-31T00:00:00Z",
                    "Growth": 4.1063,
                    "CalcString": "46.7175-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 22737666,
                    "Price": 46.2775,
                    "DateTime": "2018-06-29T00:00:00Z",
                    "Growth": 4.0582,
                    "CalcString": "46.2775-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 39373038,
                    "Price": 47.5725,
                    "DateTime": "2018-07-31T00:00:00Z",
                    "Growth": 4.1998,
                    "CalcString": "47.5725-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 43340134,
                    "Price": 56.9075,
                    "DateTime": "2018-08-31T00:00:00Z",
                    "Growth": 5.2201,
                    "CalcString": "56.9075-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 22929364,
                    "Price": 56.435,
                    "DateTime": "2018-09-28T00:00:00Z",
                    "Growth": 5.1685,
                    "CalcString": "56.435-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 38358933,
                    "Price": 54.715,
                    "DateTime": "2018-10-31T00:00:00Z",
                    "Growth": 4.9805,
                    "CalcString": "54.715-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 39531549,
                    "Price": 44.645,
                    "DateTime": "2018-11-30T00:00:00Z",
                    "Growth": 3.8798,
                    "CalcString": "44.645-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 35003466,
                    "Price": 39.435,
                    "DateTime": "2018-12-31T00:00:00Z",
                    "Growth": 3.3103,
                    "CalcString": "39.435-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 40739649,
                    "Price": 41.61,
                    "DateTime": "2019-01-31T00:00:00Z",
                    "Growth": 3.5481,
                    "CalcString": "41.61-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 28215416,
                    "Price": 43.2875,
                    "DateTime": "2019-02-28T00:00:00Z",
                    "Growth": 3.7314,
                    "CalcString": "43.2875-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 23563961,
                    "Price": 47.4875,
                    "DateTime": "2019-03-29T00:00:00Z",
                    "Growth": 4.1905,
                    "CalcString": "47.4875-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 46534923,
                    "Price": 50.1675,
                    "DateTime": "2019-04-30T00:00:00Z",
                    "Growth": 4.4834,
                    "CalcString": "50.1675-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 27043584,
                    "Price": 43.7675,
                    "DateTime": "2019-05-31T00:00:00Z",
                    "Growth": 3.7839,
                    "CalcString": "43.7675-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 31110642,
                    "Price": 49.48,
                    "DateTime": "2019-06-28T00:00:00Z",
                    "Growth": 4.4083,
                    "CalcString": "49.48-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 69281361,
                    "Price": 53.26,
                    "DateTime": "2019-07-31T00:00:00Z",
                    "Growth": 4.8214,
                    "CalcString": "53.26-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 21162561,
                    "Price": 52.185,
                    "DateTime": "2019-08-30T00:00:00Z",
                    "Growth": 4.7039,
                    "CalcString": "52.185-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 26318583,
                    "Price": 55.9925,
                    "DateTime": "2019-09-30T00:00:00Z",
                    "Growth": 5.1201,
                    "CalcString": "55.9925-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 34790520,
                    "Price": 62.19,
                    "DateTime": "2019-10-31T00:00:00Z",
                    "Growth": 5.7975,
                    "CalcString": "62.19-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 11654363,
                    "Price": 66.8125,
                    "DateTime": "2019-11-29T00:00:00Z",
                    "Growth": 6.3028,
                    "CalcString": "66.8125-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 25247625,
                    "Price": 73.4125,
                    "DateTime": "2019-12-31T00:00:00Z",
                    "Growth": 7.0242,
                    "CalcString": "73.4125-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 49897096,
                    "Price": 77.3775,
                    "DateTime": "2020-01-31T00:00:00Z",
                    "Growth": 7.4575,
                    "CalcString": "77.3775-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 106721230,
                    "Price": 68.34,
                    "DateTime": "2020-02-28T00:00:00Z",
                    "Growth": 6.4697,
                    "CalcString": "68.34-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 49250501,
                    "Price": 63.5725,
                    "DateTime": "2020-03-31T00:00:00Z",
                    "Growth": 5.9486,
                    "CalcString": "63.5725-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 45765968,
                    "Price": 73.45,
                    "DateTime": "2020-04-30T00:00:00Z",
                    "Growth": 7.0283,
                    "CalcString": "73.45-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 38399532,
                    "Price": 79.485,
                    "DateTime": "2020-05-29T00:00:00Z",
                    "Growth": 7.6879,
                    "CalcString": "79.485-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 35055821,
                    "Price": 91.2,
                    "DateTime": "2020-06-30T00:00:00Z",
                    "Growth": 8.9684,
                    "CalcString": "91.2-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 93573867,
                    "Price": 106.26,
                    "DateTime": "2020-07-31T00:00:00Z",
                    "Growth": 10.6145,
                    "CalcString": "106.26-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 225702688,
                    "Price": 129.04,
                    "DateTime": "2020-08-31T00:00:00Z",
                    "Growth": 13.1044,
                    "CalcString": "129.04-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 142675184,
                    "Price": 115.81,
                    "DateTime": "2020-09-30T00:00:00Z",
                    "Growth": 11.6583,
                    "CalcString": "115.81-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 190573476,
                    "Price": 108.86,
                    "DateTime": "2020-10-30T00:00:00Z",
                    "Growth": 10.8987,
                    "CalcString": "108.86-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 169410176,
                    "Price": 119.05,
                    "DateTime": "2020-11-30T00:00:00Z",
                    "Growth": 12.0125,
                    "CalcString": "119.05-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 99116586,
                    "Price": 132.69,
                    "DateTime": "2020-12-31T00:00:00Z",
                    "Growth": 13.5033,
                    "CalcString": "132.69-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 177523812,
                    "Price": 131.96,
                    "DateTime": "2021-01-29T00:00:00Z",
                    "Growth": 13.4235,
                    "CalcString": "131.96-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 164560394,
                    "Price": 121.26,
                    "DateTime": "2021-02-26T00:00:00Z",
                    "Growth": 12.254,
                    "CalcString": "121.26-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 118323826,
                    "Price": 122.15,
                    "DateTime": "2021-03-31T00:00:00Z",
                    "Growth": 12.3513,
                    "CalcString": "122.15-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 109839466,
                    "Price": 131.46,
                    "DateTime": "2021-04-30T00:00:00Z",
                    "Growth": 13.3689,
                    "CalcString": "131.46-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 71311109,
                    "Price": 124.61,
                    "DateTime": "2021-05-28T00:00:00Z",
                    "Growth": 12.6202,
                    "CalcString": "124.61-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 63261393,
                    "Price": 136.96,
                    "DateTime": "2021-06-30T00:00:00Z",
                    "Growth": 13.9701,
                    "CalcString": "136.96-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 70440626,
                    "Price": 145.86,
                    "DateTime": "2021-07-30T00:00:00Z",
                    "Growth": 14.9428,
                    "CalcString": "145.86-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 86453117,
                    "Price": 151.83,
                    "DateTime": "2021-08-31T00:00:00Z",
                    "Growth": 15.5954,
                    "CalcString": "151.83-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 89056664,
                    "Price": 141.5,
                    "DateTime": "2021-09-30T00:00:00Z",
                    "Growth": 14.4663,
                    "CalcString": "141.5-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 124953168,
                    "Price": 149.8,
                    "DateTime": "2021-10-29T00:00:00Z",
                    "Growth": 15.3735,
                    "CalcString": "149.8-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 174048056,
                    "Price": 165.3,
                    "DateTime": "2021-11-30T00:00:00Z",
                    "Growth": 17.0677,
                    "CalcString": "165.3-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 64062261,
                    "Price": 177.57,
                    "DateTime": "2021-12-31T00:00:00Z",
                    "Growth": 18.4088,
                    "CalcString": "177.57-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 115541590,
                    "Price": 174.78,
                    "DateTime": "2022-01-31T00:00:00Z",
                    "Growth": 18.1039,
                    "CalcString": "174.78-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 95056629,
                    "Price": 165.12,
                    "DateTime": "2022-02-28T00:00:00Z",
                    "Growth": 17.048,
                    "CalcString": "165.12-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 103049285,
                    "Price": 174.61,
                    "DateTime": "2022-03-31T00:00:00Z",
                    "Growth": 18.0853,
                    "CalcString": "174.61-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 131747571,
                    "Price": 157.65,
                    "DateTime": "2022-04-29T00:00:00Z",
                    "Growth": 16.2315,
                    "CalcString": "157.65-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 103718416,
                    "Price": 148.84,
                    "DateTime": "2022-05-31T00:00:00Z",
                    "Growth": 15.2686,
                    "CalcString": "148.84-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 98964467,
                    "Price": 136.72,
                    "DateTime": "2022-06-30T00:00:00Z",
                    "Growth": 13.9438,
                    "CalcString": "136.72-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 101786860,
                    "Price": 162.51,
                    "DateTime": "2022-07-29T00:00:00Z",
                    "Growth": 16.7627,
                    "CalcString": "162.51-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 87991091,
                    "Price": 157.22,
                    "DateTime": "2022-08-31T00:00:00Z",
                    "Growth": 16.1845,
                    "CalcString": "157.22-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 124925274,
                    "Price": 138.2,
                    "DateTime": "2022-09-30T00:00:00Z",
                    "Growth": 14.1056,
                    "CalcString": "138.2-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 97943171,
                    "Price": 153.34,
                    "DateTime": "2022-10-31T00:00:00Z",
                    "Growth": 15.7604,
                    "CalcString": "153.34-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 111380880,
                    "Price": 148.03,
                    "DateTime": "2022-11-30T00:00:00Z",
                    "Growth": 15.18,
                    "CalcString": "148.03-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 77034209,
                    "Price": 129.93,
                    "DateTime": "2022-12-30T00:00:00Z",
                    "Growth": 13.2017,
                    "CalcString": "129.93-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 70790813,
                    "Price": 130.15,
                    "DateTime": "2023-01-09T00:00:00Z",
                    "Growth": 13.2257,
                    "CalcString": "130.15-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                },
                {
                    "Volume": 4922811,
                    "Price": 130.31,
                    "DateTime": "2023-01-10T14:40:51Z",
                    "Growth": 13.2432,
                    "CalcString": "130.31-9.1489289286/9.1489289286",
                    "ReferenceDate": "2010-06-29T00:00:00Z"
                }
            ]
        }
    ]































//TODO: INTRADATA DE TESLA Y DE APPLE:
const intradataData = [
    {
        "0P0000OQN8": [
            {
                "datetime": "2023-01-10T21:00:00Z",
                "volume": 1654488,
                "lastPrice": 118.85,
                "openPrice": 118.84,
                "lowPrice": 118.82,
                "highPrice": 118.85
            },
            {
                "datetime": "2023-01-10T20:55:00Z",
                "volume": 2543469,
                "lastPrice": 118.84,
                "openPrice": 118.365,
                "lowPrice": 118.359,
                "highPrice": 118.88
            },
            {
                "datetime": "2023-01-10T20:50:00Z",
                "volume": 2198985,
                "lastPrice": 118.35,
                "openPrice": 118.49,
                "lowPrice": 118.21,
                "highPrice": 118.6291
            },
            {
                "datetime": "2023-01-10T20:45:00Z",
                "volume": 2138765,
                "lastPrice": 118.47,
                "openPrice": 118.07,
                "lowPrice": 117.97,
                "highPrice": 118.49
            },
            {
                "datetime": "2023-01-10T20:40:00Z",
                "volume": 1400816,
                "lastPrice": 118.0702,
                "openPrice": 118.065,
                "lowPrice": 117.7201,
                "highPrice": 118.13
            },
            {
                "datetime": "2023-01-10T20:35:00Z",
                "volume": 1352890,
                "lastPrice": 118.0691,
                "openPrice": 117.9712,
                "lowPrice": 117.86,
                "highPrice": 118.17
            },
            {
                "datetime": "2023-01-10T20:30:00Z",
                "volume": 1911448,
                "lastPrice": 117.97,
                "openPrice": 117.5839,
                "lowPrice": 117.5839,
                "highPrice": 118.17
            },
            {
                "datetime": "2023-01-10T20:25:00Z",
                "volume": 1262235,
                "lastPrice": 117.58,
                "openPrice": 117.2601,
                "lowPrice": 117.22,
                "highPrice": 117.68
            },
            {
                "datetime": "2023-01-10T20:20:00Z",
                "volume": 1053721,
                "lastPrice": 117.26,
                "openPrice": 117.37,
                "lowPrice": 117.1,
                "highPrice": 117.42
            },
            {
                "datetime": "2023-01-10T20:15:00Z",
                "volume": 1328266,
                "lastPrice": 117.371,
                "openPrice": 117.08,
                "lowPrice": 117.06,
                "highPrice": 117.47
            },
            {
                "datetime": "2023-01-10T20:10:00Z",
                "volume": 1178168,
                "lastPrice": 117.085,
                "openPrice": 117.06,
                "lowPrice": 116.87,
                "highPrice": 117.19
            },
            {
                "datetime": "2023-01-10T20:05:00Z",
                "volume": 1653123,
                "lastPrice": 117.07,
                "openPrice": 117.2196,
                "lowPrice": 116.65,
                "highPrice": 117.3
            },
            {
                "datetime": "2023-01-10T20:00:00Z",
                "volume": 1124545,
                "lastPrice": 117.2142,
                "openPrice": 117.68,
                "lowPrice": 117.11,
                "highPrice": 117.7352
            },
            {
                "datetime": "2023-01-10T19:55:00Z",
                "volume": 679501,
                "lastPrice": 117.6793,
                "openPrice": 117.57,
                "lowPrice": 117.4,
                "highPrice": 117.76
            },
            {
                "datetime": "2023-01-10T19:50:00Z",
                "volume": 1042662,
                "lastPrice": 117.58,
                "openPrice": 117.6112,
                "lowPrice": 117.41,
                "highPrice": 117.71
            },
            {
                "datetime": "2023-01-10T19:45:00Z",
                "volume": 1179791,
                "lastPrice": 117.618,
                "openPrice": 117.4701,
                "lowPrice": 117.24,
                "highPrice": 117.71
            },
            {
                "datetime": "2023-01-10T19:40:00Z",
                "volume": 1056419,
                "lastPrice": 117.4701,
                "openPrice": 117.49,
                "lowPrice": 117.39,
                "highPrice": 117.6645
            },
            {
                "datetime": "2023-01-10T19:35:00Z",
                "volume": 985316,
                "lastPrice": 117.48,
                "openPrice": 117.7301,
                "lowPrice": 117.44,
                "highPrice": 117.89
            },
            {
                "datetime": "2023-01-10T19:30:00Z",
                "volume": 1163151,
                "lastPrice": 117.73,
                "openPrice": 117.7107,
                "lowPrice": 117.46,
                "highPrice": 117.93
            },
            {
                "datetime": "2023-01-10T19:25:00Z",
                "volume": 1001974,
                "lastPrice": 117.71,
                "openPrice": 117.7434,
                "lowPrice": 117.48,
                "highPrice": 117.8
            },
            {
                "datetime": "2023-01-10T19:20:00Z",
                "volume": 1055476,
                "lastPrice": 117.75,
                "openPrice": 117.791,
                "lowPrice": 117.65,
                "highPrice": 118.07
            },
            {
                "datetime": "2023-01-10T19:15:00Z",
                "volume": 1026453,
                "lastPrice": 117.7915,
                "openPrice": 117.6707,
                "lowPrice": 117.5,
                "highPrice": 117.82
            },
            {
                "datetime": "2023-01-10T19:10:00Z",
                "volume": 1116409,
                "lastPrice": 117.6799,
                "openPrice": 117.96,
                "lowPrice": 117.67,
                "highPrice": 118.12
            },
            {
                "datetime": "2023-01-10T19:05:00Z",
                "volume": 1098822,
                "lastPrice": 117.962,
                "openPrice": 117.75,
                "lowPrice": 117.6,
                "highPrice": 118.09
            },
            {
                "datetime": "2023-01-10T19:00:00Z",
                "volume": 1155064,
                "lastPrice": 117.74,
                "openPrice": 117.81,
                "lowPrice": 117.6,
                "highPrice": 118.03
            },
            {
                "datetime": "2023-01-10T18:55:00Z",
                "volume": 1250038,
                "lastPrice": 117.8,
                "openPrice": 117.735,
                "lowPrice": 117.32,
                "highPrice": 117.86
            },
            {
                "datetime": "2023-01-10T18:50:00Z",
                "volume": 930666,
                "lastPrice": 117.73,
                "openPrice": 117.9301,
                "lowPrice": 117.67,
                "highPrice": 118.03
            },
            {
                "datetime": "2023-01-10T18:45:00Z",
                "volume": 1049110,
                "lastPrice": 117.9367,
                "openPrice": 117.7999,
                "lowPrice": 117.69,
                "highPrice": 118.05
            },
            {
                "datetime": "2023-01-10T18:40:00Z",
                "volume": 1674242,
                "lastPrice": 117.7973,
                "openPrice": 117.9,
                "lowPrice": 117.72,
                "highPrice": 118.25
            },
            {
                "datetime": "2023-01-10T18:35:00Z",
                "volume": 1512843,
                "lastPrice": 117.9,
                "openPrice": 117.36,
                "lowPrice": 117.36,
                "highPrice": 118.03
            },
            {
                "datetime": "2023-01-10T18:30:00Z",
                "volume": 1464573,
                "lastPrice": 117.3684,
                "openPrice": 117.5166,
                "lowPrice": 117.01,
                "highPrice": 117.53
            },
            {
                "datetime": "2023-01-10T18:25:00Z",
                "volume": 851007,
                "lastPrice": 117.52,
                "openPrice": 117.6791,
                "lowPrice": 117.5,
                "highPrice": 117.79
            },
            {
                "datetime": "2023-01-10T18:20:00Z",
                "volume": 1036410,
                "lastPrice": 117.7,
                "openPrice": 117.68,
                "lowPrice": 117.4,
                "highPrice": 117.75
            },
            {
                "datetime": "2023-01-10T18:15:00Z",
                "volume": 1096058,
                "lastPrice": 117.6899,
                "openPrice": 117.84,
                "lowPrice": 117.51,
                "highPrice": 117.96
            },
            {
                "datetime": "2023-01-10T18:10:00Z",
                "volume": 1710843,
                "lastPrice": 117.837,
                "openPrice": 117.73,
                "lowPrice": 117.422,
                "highPrice": 118.05
            },
            {
                "datetime": "2023-01-10T18:05:00Z",
                "volume": 1131563,
                "lastPrice": 117.7371,
                "openPrice": 117.4,
                "lowPrice": 117.24,
                "highPrice": 117.75
            },
            {
                "datetime": "2023-01-10T18:00:00Z",
                "volume": 1231735,
                "lastPrice": 117.3721,
                "openPrice": 117.4,
                "lowPrice": 117.18,
                "highPrice": 117.68
            },
            {
                "datetime": "2023-01-10T17:55:00Z",
                "volume": 1135544,
                "lastPrice": 117.41,
                "openPrice": 117.385,
                "lowPrice": 117.12,
                "highPrice": 117.47
            },
            {
                "datetime": "2023-01-10T17:50:00Z",
                "volume": 1217753,
                "lastPrice": 117.395,
                "openPrice": 117.49,
                "lowPrice": 117.3,
                "highPrice": 117.5799
            },
            {
                "datetime": "2023-01-10T17:45:00Z",
                "volume": 1431283,
                "lastPrice": 117.4902,
                "openPrice": 117.32,
                "lowPrice": 117.23,
                "highPrice": 117.77
            },
            {
                "datetime": "2023-01-10T17:40:00Z",
                "volume": 1636256,
                "lastPrice": 117.32,
                "openPrice": 117.17,
                "lowPrice": 117.0301,
                "highPrice": 117.56
            },
            {
                "datetime": "2023-01-10T17:35:00Z",
                "volume": 1622486,
                "lastPrice": 117.18,
                "openPrice": 116.57,
                "lowPrice": 116.38,
                "highPrice": 117.28
            },
            {
                "datetime": "2023-01-10T17:30:00Z",
                "volume": 1209707,
                "lastPrice": 116.5601,
                "openPrice": 116.1149,
                "lowPrice": 116.04,
                "highPrice": 116.66
            },
            {
                "datetime": "2023-01-10T17:25:00Z",
                "volume": 792178,
                "lastPrice": 116.12,
                "openPrice": 116.1795,
                "lowPrice": 115.96,
                "highPrice": 116.37
            },
            {
                "datetime": "2023-01-10T17:20:00Z",
                "volume": 1043953,
                "lastPrice": 116.1832,
                "openPrice": 116.065,
                "lowPrice": 115.9,
                "highPrice": 116.21
            },
            {
                "datetime": "2023-01-10T17:15:00Z",
                "volume": 930565,
                "lastPrice": 116.065,
                "openPrice": 116.4,
                "lowPrice": 115.97,
                "highPrice": 116.4499
            },
            {
                "datetime": "2023-01-10T17:10:00Z",
                "volume": 1257199,
                "lastPrice": 116.41,
                "openPrice": 116.2899,
                "lowPrice": 116,
                "highPrice": 116.55
            },
            {
                "datetime": "2023-01-10T17:05:00Z",
                "volume": 992440,
                "lastPrice": 116.29,
                "openPrice": 115.96,
                "lowPrice": 115.9401,
                "highPrice": 116.3522
            },
            {
                "datetime": "2023-01-10T17:00:00Z",
                "volume": 1716656,
                "lastPrice": 115.9615,
                "openPrice": 116.31,
                "lowPrice": 115.71,
                "highPrice": 116.3499
            },
            {
                "datetime": "2023-01-10T16:55:00Z",
                "volume": 1372185,
                "lastPrice": 116.3199,
                "openPrice": 116.7827,
                "lowPrice": 116.2129,
                "highPrice": 117.04
            },
            {
                "datetime": "2023-01-10T16:50:00Z",
                "volume": 900769,
                "lastPrice": 116.78,
                "openPrice": 116.7448,
                "lowPrice": 116.64,
                "highPrice": 116.939
            },
            {
                "datetime": "2023-01-10T16:45:00Z",
                "volume": 1666356,
                "lastPrice": 116.7415,
                "openPrice": 116.7926,
                "lowPrice": 116.54,
                "highPrice": 117.03
            },
            {
                "datetime": "2023-01-10T16:40:00Z",
                "volume": 1177542,
                "lastPrice": 116.7918,
                "openPrice": 116.34,
                "lowPrice": 116.34,
                "highPrice": 116.92
            },
            {
                "datetime": "2023-01-10T16:35:00Z",
                "volume": 1020424,
                "lastPrice": 116.32,
                "openPrice": 116.27,
                "lowPrice": 116.21,
                "highPrice": 116.58
            },
            {
                "datetime": "2023-01-10T16:30:00Z",
                "volume": 1629545,
                "lastPrice": 116.29,
                "openPrice": 116.56,
                "lowPrice": 116.1801,
                "highPrice": 116.99
            },
            {
                "datetime": "2023-01-10T16:25:00Z",
                "volume": 2004237,
                "lastPrice": 116.575,
                "openPrice": 116.36,
                "lowPrice": 116.06,
                "highPrice": 117.08
            },
            {
                "datetime": "2023-01-10T16:20:00Z",
                "volume": 1324820,
                "lastPrice": 116.37,
                "openPrice": 115.849,
                "lowPrice": 115.72,
                "highPrice": 116.4147
            },
            {
                "datetime": "2023-01-10T16:15:00Z",
                "volume": 1494665,
                "lastPrice": 115.85,
                "openPrice": 116.31,
                "lowPrice": 115.76,
                "highPrice": 116.59
            },
            {
                "datetime": "2023-01-10T16:10:00Z",
                "volume": 1525715,
                "lastPrice": 116.31,
                "openPrice": 116.02,
                "lowPrice": 115.8,
                "highPrice": 116.69
            },
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
                "volume": 2535335,
                "lastPrice": 116.07,
                "openPrice": 115.53,
                "lowPrice": 115.46,
                "highPrice": 116.545
            },
            {
                "datetime": "2023-01-10T15:45:00Z",
                "volume": 3064145,
                "lastPrice": 115.53,
                "openPrice": 115.27,
                "lowPrice": 114.92,
                "highPrice": 115.9
            },
            {
                "datetime": "2023-01-10T15:40:00Z",
                "volume": 3252324,
                "lastPrice": 115.27,
                "openPrice": 116.25,
                "lowPrice": 115.21,
                "highPrice": 116.56
            },
            {
                "datetime": "2023-01-10T15:35:00Z",
                "volume": 2422455,
                "lastPrice": 116.2637,
                "openPrice": 116.36,
                "lowPrice": 116.02,
                "highPrice": 116.6
            },
            {
                "datetime": "2023-01-10T15:30:00Z",
                "volume": 3642699,
                "lastPrice": 116.36,
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
        ],
        "0P000000GY": [
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
                "volume": 1897642,
                "lastPrice": 130.73,
                "openPrice": 130.29,
                "lowPrice": 130.27,
                "highPrice": 130.74
            },
            {
                "datetime": "2023-01-10T20:50:00Z",
                "volume": 1034618,
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
                "lastPrice": 130.14,
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
                "volume": 654917,
                "lastPrice": 129.02,
                "openPrice": 129.13,
                "lowPrice": 128.8428,
                "highPrice": 129.197
            },
            {
                "datetime": "2023-01-10T16:20:00Z",
                "volume": 588476,
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
                "lastPrice": 130.07,
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
                "openPrice": 131.19,
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
    }
]





























//TODO: INFORMACIÓN DE LA COTIZACIÓN DE TESLA (PARA LA TABLA)
let tablaTesla = {
    "status": "OK",
    "lastPrice": 876.35,
    "bid": 872,
    "bidSize": 1,
    "ask": 872.99,
    "askSize": 4,
    "lotSize": 100,
    "volume": 18392806,
    "recentTradingDayOpenPrice": 913.26,
    "dayRangeHigh": 918.4999,
    "dayRangeLow": 874.1,
    "lastClose": 923.39,
    "priceOfTradeAfter": 872.73,
    "timeOfTradeAfter": "2022-02-17T20:00:00.000",
    "recentTradingDay": "2022-02-17",
    "lastUpdateTime": "2022-02-17T16:15:00.000",
    "recentTradingDayJulian": "17-02-2022",
    "tradingStatus": "Closed",
    "marketCap": 905714394899.85,
    "dividendYield": null,
    "yearRangeHigh": 1243.49,
    "yearRangeLow": 539.49,
    "currencyCode": "USD",
    "currencySymbol": "$",
    "listedCurrency": "USD",
    "tradedCurrency": null,
    "avgVolume": 19816920.532258064,
    "exchangeID": "XNAS",
    "exchangeName": "NASDAQ",
    "exchangeTimeZone": "EST",
    "type": "Equity",
    "ts": "1645149692000",
    "dayChange": -47.04,
    "dayChangePer": -5.0943,
    "bidMarket": "16",
    "askMarket": "16",
    "originationMarket": "16",
    "message": "126.1.TSLA",
    "lastUpdateRealTimeDate": "17-02-2022",
    "lastUpdateRealTimeTime": "21:01:32.000",
    "nav": null,
    "oneDayReturn": null,
    "navLastDate": null,
    "navLastDate1": null,
    "navLastTime": null,
    "isBats": true
}



































//TODO: 3 NOTICIAS TESLA:
const newsTesla =
    [
        {
            "Id": 1080016,
            "Title": "Tesla Investors Closely Following Discrimination Suit ",
            "Locale": "en-US",
            "Status": "Live",
            "Collection": {
                "name": "Market Update",
                "id": 179
            },
            "Content": {
                "evergreen": false,
                "LargeIconPath": null,
                "SmallIconPath": null,
                "ClosedCaptioning": null,
                "HDVideoURL": null,
                "VideoPodcastURL": null,
                "VideoFileURL": null,
                "Deck": "Shares are down nearly double the market's decline so far this year. ",
                "VideoDescription": null,
                "RemoveArchive": false,
                "Body": "<xhtml xmlns=\"http://cms.morningstar.com/api/v2\"><p><img alt=\"\" src=\"https://im.morningstar.com/content/CMSImages/19446.png\"/></p>\n<p>Long-term shareholders of Tesla <span class=\"CMS__Security\" title=\"0P0000OQN8\">TSLA</span>  are preparing to push the company on race issues after <a href=\"https://www.wsj.com/articles/tesla-sued-by-california-civil-rights-agency-for-alleged-racial-discrimination-harassment-11644468985\" target=\"_blank\">California sued the electric car maker</a> for alleged racial discrimination and harassment.</p>\n<p>The complaint filed by the California Department of Fair Employment and Housing earlier this month followed claims from hundreds of workers that they were the targets of discrimination, including the use of racial slurs by co-workers.</p>\n<p>Since news of the lawsuit broke on Feb. 9, 2022, Tesla shares are up 0.05%, reversing a slide triggered in part by investors focusing on <span class=\"CMS__Document\" title=\"1076428\">growing competition and the impact of supply-chain disruptions</span>. By contrast, the Morningstar US Large-Mid Index is down 0.84% in that time. After closing at $923.39 per share on Feb. 16, it still trades above Morningstar's fair value estimate of $700. Since the start of the year, Tesla is down 12.7%, about double the 6.4% decline for the U.S. large-mid index.</p>\n<p>That may not sound like the lawsuit and related issues are affecting the company, but that may change soon as the so-called proxy season unwinds. Shareholders often voice their concerns at corporate annual meetings by voting on management, key business issues, who sits on the board of directors, and proposals by other investors.  </p>\n<p>To be sure, such resolutions are nonbinding, but boards normally pay close attention because shareholders also vote on directors. If the issues described in the lawsuit \"become much more rampant and you see lots of employees speaking up and leaving the company, if Tesla is unable to retain its superstar employees, that could be a problem,\" says Morningstar senior analyst Seth Goldstein, who covers Tesla.</p>\n<p>The New York State Common Retirement Fund is <a href=\"https://www.bloomberg.com/news/articles/2022-02-15/n-y-pension-ramps-up-pressure-on-tesla-after-race-bias-lawsuit\">proposing a resolution</a> that Tesla publish what it spends on settling discrimination complaints, along with its progress on addressing diversity and inclusion. The company published its first diversity report in 2020.</p>\n<p>Tesla has been the target of numerous complaints about having a work environment hostile to Blacks and women, particularly at its location in Fremont, California, one of its four large global facilities. </p>\n<p><a href=\"https://www.washingtonpost.com/technology/2021/10/04/tesla-discrimination-case/\" target=\"_blank\">A former employee at the site was awarded $137 million in damages last year</a> after a federal jury found that Tesla had subjected the worker to a racially hostile work environment. Tesla asked for a new trial or a lower award. Another former employee won $1 million after an arbitrator found his supervisors at Fremont called him a racial slur and gave him undesirable hours after he complained. The company faces a proposed <a href=\"https://www.reuters.com/business/autos-transportation/california-lawsuit-latest-accuse-tesla-discrimination-2022-02-10/\" target=\"_blank\">class-action lawsuit</a> about racism in the workplace as well as several lawsuits by female employees regarding sexual harassment. </p>\n<p>Tesla, in turn, has called the California suit \"<a href=\"https://www.tesla.com/blog/dfehs-misguided-lawsuit\" target=\"_blank\">misguided</a>\" and noted that investigations by the agency over the past five years \"did not find misconduct against\" the company. Tesla didn't respond to request for comment.</p>\n<p>“The California lawsuit is another proof point that the issue is a very serious one and we’ll continue to engage,\" says John Streur, chief executive officer of Calvert Research and Management, a sustainable investment firm owned by Morgan Stanley. Last year, a  <span class=\"CMS__Document\" title=\"1061914\">resolution proposed by Calvert</span>  won a majority of votes at Tesla's annual meeting. The resolution asked Tesla to provide more data about its diversity, equity, and inclusion efforts, arguing that increased diversity at the company will help ensure it remains competitive and innovative.</p>\n<p>In a Feb. 15 interview, Streur wouldn't specify the results of Calvert's conversations with Tesla. He did say his objective is \"to strengthen their capacity to create a safe and inclusive work environment for all people and improve the company’s ability to drive value for all stakeholders.\"</p>\n<p>The issues in the California lawsuit are \"a financially material risk factor,\" Streur says. He describes Calvert as a long-term owner, \"almost a permanent investor in some of these companies, so we take a long horizon.\" Employees \"innovate and drive the technology of the products going forward and to really be able to staff and scale globally is critical to the success and for the long-term value of Tesla.\"</p>\n<p>It's a difficult needle to thread because many investors regard Tesla as a solution to the climate crisis, leading the way to net-zero emissions. Tesla Energy is also one of the largest solar panel players in the U.S. Recently, Tesla placed among the top 10 companies in the <a href=\"https://www.asyousow.org/press-releases/2022/2/15/clean200-outperform-msci-acwi-global-index\" target=\"_blank\">Clean200 list</a> of publicly traded companies that are leading the way to a clean energy future.</p>\n<p>Other long-term investors may also act. Garvin Jabusch, portfolio manager of Green Alpha Advisors, which runs Shelton Green Alpha <span class=\"CMS__Security\" title=\"F00000P7YY\">NEXTX</span>, says he read the complaint at length. \"There's an awful lot of smoke there. I find it hard to believe there wouldn't be some fire.\" Green Alpha has owned Tesla for clients since 2010. </p>\n<p>In the past, Tesla has pushed back with a narrative that punitive regulators, prodded by incumbent automakers, are overreacting to allegations. But this is not what is happening now.</p>\n<p>\"This should never have involved regulators, because Tesla shouldn't have allowed this behavior to exist,\" Jabusch says. The portfolio manager doesn't regard himself as an activist shareholder, but he has asked Tesla for a meeting to discuss the California lawsuit and says that depending on the outcome of the litigation, he may consider divesting or selling his entire position in the shares. </p>\n<p>NIA Impact Capital CEO Kristin Hull says she is planning to move Tesla out of client portfolios into a new \"activist\" portfolio. \"It's too embarrassing\" to hold it in client portfolios after the California lawsuit, Hull says. She made a shareholder proposal last year asking Tesla to report on its use of mandatory arbitration, in which employees must submit to arbitration rather than bring their claims to court. Tesla has been criticized for requiring mandatory arbitration for employee claims of sexual harassment and racial discrimination. The proposal garnered 46.4% of the vote.</p>\n<p>With President Joe Biden to sign into law a bill ending mandatory arbitration for claims of sexual harassment or assault, Hull plans to submit a rewritten proposal that focuses on racial discrimination. </p>\n<p>\"When it comes to ownership on a company that's doing egregious things, we need people who are able to see the long term,\" Hull says. \"When people don't feel comfortable bringing their full selves, Tesla won’t have the innovation that's required.\"  </p>\n<p>Morningstar's Goldstein notes that any settlement \"is really not going to have a huge impact,\" given Tesla's market value of nearly $1 trillion. Still, Goldstein expects \"management and policy changes to ensure these discrimination types of lawsuits don't have to happen again. This could be the likely change for internal policies that hopefully would prevent this from happening to other employees.\" </p></xhtml>",
                "Transcript": null
            },
            "Authors": [
                {
                    "id": "2493",
                    "isPrimary": true,
                    "name": "Leslie Norton",
                    "Holdings": "",
                    "Profiles": [
                        {
                            "jobTitle": "Director",
                            "byLine": "Leslie Norton",
                            "shortBio": "Leslie Norton is Morningstar's editorial director, sustainability.",
                            "longBio": "",
                            "isPrimaryProfile": true
                        }
                    ],
                    "image": "http://im.mstar.com/content/im/78x78/mstaranalyst.png"
                }
            ],
            "RelatedDocuments": [
                {
                    "id": 1061914,
                    "title": "Tesla's Growing Investor Revolt",
                    "publishDate": "2021-10-14"
                }
            ],
            "PublishDateUTC": "1645135200000",
            "UpdateDateUTC": "1645132835000",
            "Securities": [
                {
                    "shareClassId": "0P0000OQN8",
                    "secId": "0P0000OQN8",
                    "name": "Tesla Inc",
                    "ticker": "TSLA",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "E0",
                    "category": "Auto Manufacturers",
                    "parentId": "0C00004EP4"
                },
                {
                    "shareClassId": "F00000P7YY",
                    "secId": "F00000P7YY",
                    "name": "Shelton Green Alpha",
                    "ticker": "NEXTX",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "FO",
                    "category": "Mid-Cap Growth",
                    "parentId": "FS00009VYQ"
                }
            ],
            "Keywords": [
                {
                    "id": 34,
                    "name": "SOCIALLYRESPONSIBLEINVESTING",
                    "isPrimary": true
                }
            ],
            "AuthorDisclosure": "",
            "Tags": [
                {
                    "id": 2001,
                    "name": "Individual",
                    "categoryId": 2
                },
                {
                    "id": 2004,
                    "name": "Fund Buyer",
                    "categoryId": 2
                },
                {
                    "id": 3002,
                    "name": "United States",
                    "categoryId": 3
                },
                {
                    "id": 4003,
                    "name": "Company",
                    "categoryId": 4
                },
                {
                    "id": 5049,
                    "name": "Stewardship",
                    "categoryId": 5
                },
                {
                    "id": 5062,
                    "name": "ESG/Sustainable Investing",
                    "categoryId": 5
                },
                {
                    "id": 8011,
                    "name": "Editorial",
                    "categoryId": 8
                },
                {
                    "id": 10006,
                    "name": "Fund Corporate Actions",
                    "categoryId": 5
                },
                {
                    "id": 10012,
                    "name": "Align Principal & Agent Interests",
                    "categoryId": 5
                },
                {
                    "id": 10024,
                    "name": "Diversity, Equity & Inclusion",
                    "categoryId": 5
                }
            ]
        },
        {
            "Id": 1078855,
            "Title": "Why Some Fund Managers Have to Bet Against Apple and Microsoft Stock",
            "Locale": "en-US",
            "Status": "Live",
            "Collection": {
                "name": "Fund Spy",
                "id": 2
            },
            "Content": {
                "evergreen": false,
                "LargeIconPath": null,
                "SmallIconPath": null,
                "ClosedCaptioning": null,
                "HDVideoURL": null,
                "VideoPodcastURL": null,
                "VideoFileURL": null,
                "Deck": "Some growth funds are holding smaller positions in mega-cap names to avoid hitting SEC limits.",
                "VideoDescription": null,
                "RemoveArchive": false,
                "Body": "<xhtml xmlns=\"http://cms.morningstar.com/api/v2\"><p><img alt=\"\" src=\"https://im.morningstar.com/content/CMSImages/19378.png\"/></p>\n<p>For managers of some large-growth stock funds, big gains in Apple <span class=\"CMS__Security\" title=\"0P000000GY\">AAPL</span> and Microsoft <span class=\"CMS__Security\" title=\"0P000003MH\">MSFT</span> have become too much of a good thing.</p>\n<p>These two stocks, along with other giant technology names, have now become such large weightings in the key market indexes against which actively managed funds benchmark holdings and performance that they're running up against certain limits set by the Securities and Exchange Commission.</p>\n<p>As a result, some fund managers are finding themselves in the position of essentially betting against continued outperformance of these big tech stocks by having to hold smaller positions in the stocks than the market indexes otherwise would suggest.</p>\n<p>This isn't an entirely new problem. Large-growth managers for years have grappled with how to manage their funds against an ever-consolidating Russell 1000 Growth Index that, even after retreating in early 2022, remains historically concentrated. </p>\n<p>Using the iShares Russell 1000 Growth ETF <span class=\"CMS__Security\" title=\"FEUSA0001B\">IWF</span> as a proxy for the large-cap growth index, at the start of 2014, 21% of the benchmark sat in its top 10 holdings. While some familiar stocks, like Apple, Microsoft, and Alphabet <span class=\"CMS__Security\" title=\"0P000002HD\">GOOGL</span>, were among the 10 largest index holdings at that time, the top 10 also included traditional defensive stocks like Philip Morris International <span class=\"CMS__Security\" title=\"0P0000CUPM\">PM</span>  and Coca-Cola <span class=\"CMS__Security\" title=\"0P000001BW\">KO</span>. </p>\n<p>Since then, technology stocks have pushed the index to new heights, as Google (whose parent company is Alphabet), Apple, Meta Platforms (formerly Facebook <span class=\"CMS__Security\" title=\"0P0000W3KZ\">FB</span>), Microsoft, and Amazon.com <span class=\"CMS__Security\" title=\"0P000000B7\">AMZN</span>--the \"GAMMA\" stocks--collectively contributed nearly half of the index's more than 250% gain. </p>\n<p>The rise of the GAMMAs has created a top-heavy index; the top 10 companies are now almost exclusively tech companies and accounted for just under 50% of the Russell 1000 Growth as of January 2022.  </p>\n<p><img alt=\"\" class=\"grid-width\" src=\"https://im.morningstar.com/content/CMSImages/19376.png\"/></p>\n<p>This level of concentration is historically unique, but it is not without fundamental justification. The top 10 companies in the index contributed over 35% of the index's earnings before interest, taxes, depreciation, and amortization over the trailing 12 months through January 2022--a 20-year high. Big tech was a clear beneficiary of the pandemic-inspired work- and shop-from-home trend. Amazon, Microsoft, Apple, and Alphabet each profited massively from the spike in demand for e-commerce, digital advertising, and cloud computing services. In fact, between December 2019 and January 2022, the Russell 1000 Growth--excluding financials, which earn significant interest revenue--added roughly $207 billion in aggregate EBITDA, of which the GAMMAs contributed $196 billion, nearly 95%. Without the GAMMA stocks, the aggregate index barely grew cash earnings at all. Investing, however, is a forward-looking endeavor, and some growth investors are concerned that mega-cap tech companies' big revenue and earnings spikes merely pulled forward future demand, and that their long-term prospects are not as rosy as recent results would indicate.  </p>\n<p><img alt=\"\" class=\"grid-width\" src=\"https://im.morningstar.com/content/CMSImages/19386.png\"/></p>\n<p>Portfolio holdings data suggest top-rated managers have a cautious attitude toward these companies, though mutual fund regulations also play a role. Within the large-growth Morningstar Category, there are 55 actively managed strategies that earn at least a Morningstar Analyst Rating of Bronze on one of their share classes. Of those 55 strategies, only four were overweight the basket of the index's top 10 companies as of their latest reported portfolios. </p>\n<p>SEC diversification requirements make it hard for most large-growth funds to even hold the GAMMAs at their current market weightings, let alone overweight them. To be considered officially diversified by the SEC, a fund cannot hold more than 5% in a single company in 75% of its portfolio. Forty-one of the 55 active large-growth Morningstar Medalists meet this rule, which essentially means they can make 25% of their portfolios as concentrated as they wish, but after that, the 5% limit kicks in. However, as of January 2022, Apple and Microsoft alone ate up over 23% of the index.</p>\n<p>Holding both at market weights would prevent diversified managers from putting any more than 5% of their assets in any other stock. A diversified manager currently cannot hold the Russell 1000 Growth Index's top three constituents at or above market weights without breaching SEC regulations. This is a big reason why nearly all actively managed large-growth funds are underweight the index's biggest names. This has led some strategies, including T. Rowe Price Growth Stock <span class=\"CMS__Security\" title=\"FOUSA00EJ5\">PRGFX</span>, T. Rowe Price Blue Chip Growth <span class=\"CMS__Security\" title=\"FOUSA00EI7\">TRBCX</span>, and Vanguard US Growth <span class=\"CMS__Security\" title=\"FOUSA00FU1\">VWUSX</span>, <span class=\"CMS__Document\" title=\"1033370\">to officially change to \"nondiversified\" mandates</span>, which allows them to get as concentrated as they please. Still, the bulk of large-growth funds are structured to meet the SEC's diversification standard. </p>\n<p>Diversified managers face a real conundrum when it comes to the index's top two stocks, especially. No matter how bullish they are on Apple and Microsoft, they have almost no wiggle room to overweight them. Instead, it leads many of them to bet against the two by owning proportionately less than the index. In fact, all 55 medalist strategies collectively underweight the two stocks. That could hamper these strategies if Apple and Microsoft continue to outperform the broader index and their managers can't find opportunities among relatively smaller companies to make up for the lost ground. This issue affects most large-growth fund owners; of the $1.8 trillion of mutual fund assets in the large-growth category, $1.4 trillion sits in officially diversified mandates. </p>\n<p>Still, there does appear to be legitimate bearish sentiment toward Apple. Only two medalists, American Century Select <span class=\"CMS__Security\" title=\"FOUSA00GS9\">TWSIX</span>  and American Century Ultra <span class=\"CMS__Security\" title=\"FOUSA00JHC\">TWUIX</span>, are overweight Apple, while nearly a third do not even own it. And of the medalists that do own it, their average weighting is less than half the index's. Microsoft has more supporters; almost 90% of medalists own it, though they also keep it at a much smaller average weight than the index. After the top two holdings, the average medalist position in the remaining eight of the top 10 index constituents is generally at or above market weights, although almost half of the medalists avoid Tesla <span class=\"CMS__Security\" title=\"0P0000OQN8\">TSLA</span>, and more than 60% do not own Home Depot <span class=\"CMS__Security\" title=\"0P000002OY\">HD</span>. </p>\n<p><img alt=\"\" class=\"grid-width\" src=\"https://im.morningstar.com/content/CMSImages/19357.png\"/></p>\n<p>If the index gets more top-heavy, it will force investors in diversified strategies to increase their bets against the top names, no matter what they think of them. This may not be a bad thing; concentration levels rise and fall with the markets, but it is certainly going to be a major factor in how active large-growth managers perform against their passive competitors going forward. </p></xhtml>",
                "Transcript": null
            },
            "Authors": [
                {
                    "id": "2372",
                    "isPrimary": true,
                    "name": "Jack Shannon",
                    "Holdings": "VINIX, VSCIX, DFISX, PTTAX, VBTIX, VGSNX, SPY, VTHR",
                    "Profiles": [
                        {
                            "jobTitle": "Analyst",
                            "byLine": "Jack Shannon",
                            "shortBio": "Jack Shannon is a manager research analyst, equity strategies, for Morningstar.",
                            "longBio": "Jack Shannon is a manager research analyst, equity strategies, for Morningstar Research Services LLC, a wholly owned subsidiary of Morningstar, Inc. \r\n\r\nBefore joining Morningstar in 2020, Shannon spent five years in financial and analytics-based roles in the consulting, asset-management, and banking industries. \r\n\r\nShannon holds a bachelor's degree in economics and history from James Madison University. He also holds a Master of Business Administration in investments and corporate finance from the University of Notre Dame's Mendoza College of Business. He is a Level II Candidate in the Chartered Financial Analyst® program.",
                            "isPrimaryProfile": true
                        }
                    ],
                    "image": "http://im.mstar.com/content/im/78x78/mstaranalyst.png"
                }
            ],
            "RelatedDocuments": [
                {
                    "id": 1070378,
                    "title": "This Year’s Outperforming Large-Growth Fund Managers ",
                    "publishDate": "2021-12-03"
                }
            ],
            "PublishDateUTC": "1644946200000",
            "UpdateDateUTC": "1644963505000",
            "Securities": [
                {
                    "shareClassId": "0P0000OQN8",
                    "secId": "0P0000OQN8",
                    "name": "Tesla Inc",
                    "ticker": "TSLA",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "E0",
                    "category": "Auto Manufacturers",
                    "parentId": "0C00004EP4"
                },
                {
                    "shareClassId": "0P0000W3KZ",
                    "secId": "0P0000W3KZ",
                    "name": "Meta Platforms Inc",
                    "ticker": "FB",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "E0",
                    "category": "Internet Content & Information",
                    "parentId": "0C000098V0"
                },
                {
                    "shareClassId": "FOUSA00EI7",
                    "secId": "1100107061",
                    "name": "T. Rowe Price Blue Chip Growth",
                    "ticker": "TRBCX",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "FO",
                    "category": "Large Growth",
                    "parentId": "FSUSA0020C"
                },
                {
                    "shareClassId": "FOUSA00EJ5",
                    "secId": "1100107100",
                    "name": "T. Rowe Price Growth Stock",
                    "ticker": "PRGFX",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "FO",
                    "category": "Large Growth",
                    "parentId": "FSUSA00219"
                },
                {
                    "shareClassId": "FOUSA00FU1",
                    "secId": "1100109797",
                    "name": "Vanguard US Growth Investor",
                    "ticker": "VWUSX",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "FO",
                    "category": "Large Growth",
                    "parentId": "FSUSA002RC"
                },
                {
                    "shareClassId": "FOUSA00GS9",
                    "secId": "1100111658",
                    "name": "American Century Select I",
                    "ticker": "TWSIX",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "FO",
                    "category": "Large Growth",
                    "parentId": "FSUSA002M4"
                },
                {
                    "shareClassId": "FOUSA00JHC",
                    "secId": "1100116824",
                    "name": "American Century Ultra® I",
                    "ticker": "TWUIX",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "FO",
                    "category": "Large Growth",
                    "parentId": "FSUSA002M8"
                },
                {
                    "shareClassId": "FEUSA0001B",
                    "secId": "1200100347",
                    "name": "iShares Russell 1000 Growth ETF",
                    "ticker": "IWF",
                    "country": "USA",
                    "exchange": "ARCX",
                    "currency": "USD",
                    "securityType": "FE",
                    "category": "Large Growth",
                    "parentId": "FSUSA00B5L"
                },
                {
                    "shareClassId": "0P000000B7",
                    "secId": "200100B12V",
                    "name": "Amazon.com Inc",
                    "ticker": "AMZN",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "E0",
                    "category": "Internet Retail",
                    "parentId": "0C000009EB"
                },
                {
                    "shareClassId": "0P000002HD",
                    "secId": "200100K53J",
                    "name": "Alphabet Inc",
                    "ticker": "GOOGL",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "E0",
                    "category": "Internet Content & Information",
                    "parentId": "0C000007XQ"
                },
                {
                    "shareClassId": "0P000000GY",
                    "secId": "200100N017",
                    "name": "Apple Inc",
                    "ticker": "AAPL",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "E0",
                    "category": "Consumer Electronics",
                    "parentId": "0C00000ADA"
                },
                {
                    "shareClassId": "0P000003MH",
                    "secId": "200100Q876",
                    "name": "Microsoft Corp",
                    "ticker": "MSFT",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "E0",
                    "category": "Software - Infrastructure",
                    "parentId": "0C000008EC"
                }
            ],
            "Keywords": [
                {
                    "id": 2,
                    "name": "MUTUALFUNDS",
                    "isPrimary": true
                }
            ],
            "AuthorDisclosure": "",
            "Tags": [
                {
                    "id": 2001,
                    "name": "Individual",
                    "categoryId": 2
                },
                {
                    "id": 2002,
                    "name": "Advisor",
                    "categoryId": 2
                },
                {
                    "id": 2003,
                    "name": "AM Sales & Marketing",
                    "categoryId": 2
                },
                {
                    "id": 2004,
                    "name": "Fund Buyer",
                    "categoryId": 2
                },
                {
                    "id": 3002,
                    "name": "United States",
                    "categoryId": 3
                },
                {
                    "id": 4001,
                    "name": "Security/Fund",
                    "categoryId": 4
                },
                {
                    "id": 4005,
                    "name": "Sector/Category",
                    "categoryId": 4
                },
                {
                    "id": 5003,
                    "name": "Asset Allocation",
                    "categoryId": 5
                },
                {
                    "id": 5020,
                    "name": "ETFs",
                    "categoryId": 5
                },
                {
                    "id": 5034,
                    "name": "In Search of Management Skill",
                    "categoryId": 5
                },
                {
                    "id": 5038,
                    "name": "Medalists",
                    "categoryId": 5
                },
                {
                    "id": 5069,
                    "name": "Benchmarks",
                    "categoryId": 5
                },
                {
                    "id": 5085,
                    "name": "Active Investing",
                    "categoryId": 5
                },
                {
                    "id": 5086,
                    "name": "Passive Investing",
                    "categoryId": 5
                },
                {
                    "id": 6001,
                    "name": "Equity",
                    "categoryId": 6
                },
                {
                    "id": 8006,
                    "name": "Manager Research",
                    "categoryId": 8
                }
            ]
        },
        {
            "Id": 1078938,
            "Title": "Tesla Stock vs. Alphabet Stock: Which Is the Better Buy Today?",
            "Locale": "en-US",
            "Status": "Live",
            "Collection": {
                "name": "Commentary",
                "id": 17
            },
            "Content": {
                "evergreen": true,
                "LargeIconPath": null,
                "SmallIconPath": null,
                "ClosedCaptioning": null,
                "HDVideoURL": null,
                "VideoPodcastURL": null,
                "VideoFileURL": null,
                "Deck": "Both may be mega-cap growth stocks, but only one is undervalued today.",
                "VideoDescription": null,
                "RemoveArchive": true,
                "Body": "<xhtml xmlns=\"http://cms.morningstar.com/api/v2\"><p><img alt=\"\" src=\"https://im.morningstar.com/content/CMSImages/19345.png\"/></p>\n<p>They’re two of the world’s most valuable companies by market capitalization. They’re popular names in exchange-traded funds and mutual funds that favor large-growth stocks, too. And they’re both disruptors: Alphabet <span class=\"CMS__Security\" title=\"0P000002HD\">GOOGL</span> has changed the way we think about online search (after all, who hasn’t said “I’ll Google it”), while Tesla <span class=\"CMS__Security\" title=\"0P0000OQN8\">TSLA</span>  is leading the charge in taking electric vehicles mainstream.</p>\n<p>We’re pitting these two companies against each other to determine which is the better investment opportunity today based on a few of Morningstar’s proprietary metrics.\n</p>\n<p>As part of this feature, we’re providing access to the full Analyst Reports for both companies to readers for free for a few weeks; Analyst Reports are a part of our paid <a href=\"https://www.morningstar.com/premium?referid=A4568\">Premium Membership</a>. By using the Analyst Reports for Alphabet and Tesla, you can dig into some of our proprietary metrics more deeply and find out what our analysts have to say about each company’s business strategy, competitive advantages, valuation, and risk. You’ll also have access to similar metrics about close competitors and what the bull and bear cases are for each stock.</p>\n<p>Take a look:</p>\n<p><a href=\"https://www.morningstar.com/stocks/xnas/googl/quote\">Alphabet’s Analyst Report</a><br/>\n<a href=\"https://www.morningstar.com/stocks/xnas/tsla/quote\">Tesla’s Analyst Report</a></p>\n<p>Who wins this stock versus stock cage match? That depends on what Morningstar metrics matter most to you. Let’s run each company through a few of them.\n</p>\n<p><img alt=\"\" src=\"https://im.morningstar.com/content/CMSImages/19344.png\"/><br/>\n<strong><br/>\n</strong></p>\n<p><strong>Price/Fair Value Winner:</strong> Alphabet<br/>\nMorningstar’s analysts calculate a fair value estimate for each stock they cover. The fair value estimate represents the intrinsic value of a stock, based on how much cash we think the company can generate in the future. A stock’s price/fair value is simply its current market price divided by the fair value estimate. A stock trading below 1.0 is undervalued; a stock trading around 1.0 is fairly valued; and a stock trading above 1.0 is overvalued.</p>\n<p>As of this writing, we think Alphabet’s stock is about 25% undervalued, while Tesla’s stock is 23% overvalued. The winner from a price perspective is Alphabet; it is trading at a more attractive price today.</p>\n<p>Watch: <span class=\"CMS__Document\" title=\"735361\">The Morningstar Fair Value Estimate</span> </p>\n<p><strong>Uncertainty Winner:</strong> Alphabet<br/>\nMorningstar's uncertainty rating represents the predictability of the company's future cash flows and, therefore, the level of certainty we have in our fair value estimate of a given company. Companies that enjoy sales predictability, modest operating and financial leverage, and limited exposure to contingent events carry low uncertainty; those with less predictable sales, significant leverage, and significant exposure to contingent events carry higher uncertainty.</p>\n<p>Our analysts think Alphabet’s cash flow uncertainty is high--but Tesla’s uncertainty is even higher. Alphabet wins for its relatively lower uncertainty because we’re more confident in our fair value estimate of that stock.</p>\n<p><strong>Economic Moat Winner:</strong> Alphabet<br/>\nThe Morningstar Economic Moat Rating represents a company's sustainable competitive advantage. A company with an economic moat can fend off competition and earn high returns on capital for many years to come. A company whose competitive advantages we expect to last more than 20 years has a wide moat, one that can fend off its rivals for 10 years has a narrow moat, while a firm with either no advantage or one that we think will quickly dissipate has no moat.</p>\n<p>Our analysts think Alphabet has carved out a wide economic moat, while Tesla has only built a narrow economic moat. Alphabet for the win on this metric.</p>\n<p>Watch: <span class=\"CMS__Document\" title=\"735365\">The Morningstar Economic Moat Rating</span></p>\n<p><strong>Capital Allocation Winner:</strong> Tie<br/>\nThe Morningstar Capital Allocation Rating represents our assessment of how well a company manages its balance sheet, investments, and shareholder distributions. Analysts assign each company one of three ratings--Exemplary, Standard, or Poor--based on their assessments of how well a management team provides shareholder returns. Adept corporate managers can make a good company even better.</p>\n<p>Both Alphabet and Tesla earn our top rating when it comes to capital allocation.\n</p>\n<p>Watch: <span class=\"CMS__Document\" title=\"1013460\">Introducing the Morningstar Capital Allocation Rating</span></p>\n<p><strong>Overall Winner:</strong> Alphabet<br/>\nAt the end of the day, the “winner” of any cage match from Morningstar’s perspective is the stock that’s trading at the largest discount to our fair value estimate after being adjusted for uncertainty. The Morningstar Rating for stocks encapsulates just that. Stocks rated 4 and 5 stars are undervalued after being adjusted for uncertainty, stocks rated 3 stars are fairly valued, and stocks rated 1 or 2 stars are overvalued after being adjusted for uncertainty.</p>\n<p>Alphabet earns a 4-star rating as of this writing, while Tesla earns a 2-star rating. Alphabet is the much better value today from Morningstar’s perspective.</p>\n<p><em>Watch: <span class=\"CMS__Document\" title=\"735356\">The Morningstar Rating for Stocks</span> </em></p>\n<p><a href=\"https://www.morningstar.com/premium?referid=A4568\">Start your free 14-day trial of Morningstar Premium</a><em>. Understand the difference between a good company and a great opportunity. Unlock our analysts' fair value estimates and get continuous research and analysis to help you make the best decisions.</em></p></xhtml>",
                "Transcript": null
            },
            "Authors": [
                {
                    "id": "12",
                    "isPrimary": true,
                    "name": "Susan Dziubinski",
                    "Holdings": "OAKLX VINIX PRRIX POAGX VWILX RNWGX VASVX DODFX VPCCX SLADX NEWFX MORN FCNTX",
                    "Profiles": [
                        {
                            "jobTitle": "",
                            "byLine": "Susan Dziubinski",
                            "shortBio": "Susan Dziubinski is director of content for Morningstar.com.",
                            "longBio": "Susan Dziubinski is director of content for Morningstar.com®, Morningstar’s website for individual investors. \r\n\r\nBefore assuming her current role in 2013, Dziubinski was the publisher of Morningstar’s newsletter business. As a product manager, Dziubinski led several businesses, including Morningstar’s library and books businesses. She has also served as editor of Morningstar® FundInvestorSM and director of Morningstar University on Morningstar.com. Dziubinski joined Morningstar in 1991 as an analyst for Morningstar® Mutual FundsTM.  \r\n\r\nDziubinski holds a bachelor’s degree in English and a master’s degree in literature from DePaul University.",
                            "isPrimaryProfile": true
                        }
                    ],
                    "image": "http://im.mstar.com/Content/CMSImages/78x78/12-sdziubinski-78x78.jpg"
                }
            ],
            "RelatedDocuments": [],
            "PublishDateUTC": "1644872400000",
            "UpdateDateUTC": "1645024088000",
            "Securities": [
                {
                    "shareClassId": "0P0000OQN8",
                    "secId": "0P0000OQN8",
                    "name": "Tesla Inc",
                    "ticker": "TSLA",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "E0",
                    "category": "Auto Manufacturers",
                    "parentId": "0C00004EP4"
                },
                {
                    "shareClassId": "0P000002HD",
                    "secId": "200100K53J",
                    "name": "Alphabet Inc",
                    "ticker": "GOOGL",
                    "country": "USA",
                    "exchange": "NAS",
                    "currency": "USD",
                    "securityType": "E0",
                    "category": "Internet Content & Information",
                    "parentId": "0C000007XQ"
                }
            ],
            "Keywords": [
                {
                    "id": 3,
                    "name": "STOCKS",
                    "isPrimary": false
                },
                {
                    "id": 13,
                    "name": "STOCKPICKS",
                    "isPrimary": true
                }
            ],
            "AuthorDisclosure": "",
            "Tags": [
                {
                    "id": 1002,
                    "name": "Commentary",
                    "categoryId": 1
                },
                {
                    "id": 2001,
                    "name": "Individual",
                    "categoryId": 2
                },
                {
                    "id": 3002,
                    "name": "United States",
                    "categoryId": 3
                },
                {
                    "id": 4003,
                    "name": "Company",
                    "categoryId": 4
                },
                {
                    "id": 5036,
                    "name": "Economic Moats",
                    "categoryId": 5
                },
                {
                    "id": 5056,
                    "name": "Valuation",
                    "categoryId": 5
                },
                {
                    "id": 6001,
                    "name": "Equity",
                    "categoryId": 6
                },
                {
                    "id": 8011,
                    "name": "Editorial",
                    "categoryId": 8
                },
                {
                    "id": 10011,
                    "name": "Closing the Behavior Gap",
                    "categoryId": 5
                }
            ]
        }
    ]


