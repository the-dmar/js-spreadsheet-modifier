const sample = [
  [
    {
      Date: "2021-01-06T00:00:00.000Z",
    },
    {
      Region: "East",
    },
    {
      "Customer Name": "Jones",
    },
    {
      Units: 95,
    },
    {
      "Unit Cost": 1.99,
    },
    {
      Total: 189.05,
    },
  ],
  [
    {
      Date: "2021-01-23T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Kivell",
    },
    {
      Units: 50,
    },
    {
      "Unit Cost": 19.99,
    },
    {
      Total: 999.4999999999999,
    },
  ],
  [
    {
      Date: "2021-02-09T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Jardine",
    },
    {
      Units: 36,
    },
    {
      "Unit Cost": 4.99,
    },
    {
      Total: 179.64000000000001,
    },
  ],
  [
    {
      Date: "2021-02-26T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Gill",
    },
    {
      Units: 27,
    },
    {
      "Unit Cost": 19.99,
    },
    {
      Total: 539.7299999999999,
    },
  ],
  [
    {
      Date: "2021-03-15T00:00:00.000Z",
    },
    {
      Region: "West",
    },
    {
      "Customer Name": "Sorvino",
    },
    {
      Units: 56,
    },
    {
      "Unit Cost": 2.99,
    },
    {
      Total: 167.44,
    },
  ],
  [
    {
      Date: "2021-04-01T00:00:00.000Z",
    },
    {
      Region: "East",
    },
    {
      "Customer Name": "Jones",
    },
    {
      Units: 60,
    },
    {
      "Unit Cost": 4.99,
    },
    {
      Total: 299.40000000000003,
    },
  ],
  [
    {
      Date: "2021-04-18T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Andrews",
    },
    {
      Units: 75,
    },
    {
      "Unit Cost": 1.99,
    },
    {
      Total: 149.25,
    },
  ],
  [
    {
      Date: "2021-05-05T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Jardine",
    },
    {
      Units: 90,
    },
    {
      "Unit Cost": 4.99,
    },
    {
      Total: 449.1,
    },
  ],
  [
    {
      Date: "2021-05-22T00:00:00.000Z",
    },
    {
      Region: "West",
    },
    {
      "Customer Name": "Thompson",
    },
    {
      Units: 32,
    },
    {
      "Unit Cost": 1.99,
    },
    {
      Total: 63.68,
    },
  ],
  [
    {
      Date: "2021-06-08T00:00:00.000Z",
    },
    {
      Region: "East",
    },
    {
      "Customer Name": "Jones",
    },
    {
      Units: 60,
    },
    {
      "Unit Cost": 8.99,
    },
    {
      Total: 539.4,
    },
  ],
  [
    {
      Date: "2021-06-25T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Morgan",
    },
    {
      Units: 90,
    },
    {
      "Unit Cost": 4.99,
    },
    {
      Total: 449.1,
    },
  ],
  [
    {
      Date: "2021-07-12T00:00:00.000Z",
    },
    {
      Region: "East",
    },
    {
      "Customer Name": "Howard",
    },
    {
      Units: 29,
    },
    {
      "Unit Cost": 1.99,
    },
    {
      Total: 57.71,
    },
  ],
  [
    {
      Date: "2021-07-29T00:00:00.000Z",
    },
    {
      Region: "East",
    },
    {
      "Customer Name": "Parent",
    },
    {
      Units: 81,
    },
    {
      "Unit Cost": 19.99,
    },
    {
      Total: 1619.1899999999998,
    },
  ],
  [
    {
      Date: "2021-08-15T00:00:00.000Z",
    },
    {
      Region: "East",
    },
    {
      "Customer Name": "Jones",
    },
    {
      Units: 35,
    },
    {
      "Unit Cost": 4.99,
    },
    {
      Total: 174.65,
    },
  ],
  [
    {
      Date: "2021-09-01T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Smith",
    },
    {
      Units: 2,
    },
    {
      "Unit Cost": 125,
    },
    {
      Total: 250,
    },
  ],
  [
    {
      Date: "2021-09-18T00:00:00.000Z",
    },
    {
      Region: "East",
    },
    {
      "Customer Name": "Jones",
    },
    {
      Units: 16,
    },
    {
      "Unit Cost": 15.99,
    },
    {
      Total: 255.84,
    },
  ],
  [
    {
      Date: "2021-10-05T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Morgan",
    },
    {
      Units: 28,
    },
    {
      "Unit Cost": 8.99,
    },
    {
      Total: 251.72,
    },
  ],
  [
    {
      Date: "2021-10-22T00:00:00.000Z",
    },
    {
      Region: "East",
    },
    {
      "Customer Name": "Jones",
    },
    {
      Units: 64,
    },
    {
      "Unit Cost": 8.99,
    },
    {
      Total: 575.36,
    },
  ],
  [
    {
      Date: "2021-11-08T00:00:00.000Z",
    },
    {
      Region: "East",
    },
    {
      "Customer Name": "Parent",
    },
    {
      Units: 15,
    },
    {
      "Unit Cost": 19.99,
    },
    {
      Total: 299.84999999999997,
    },
  ],
  [
    {
      Date: "2021-11-25T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Kivell",
    },
    {
      Units: 96,
    },
    {
      "Unit Cost": 4.99,
    },
    {
      Total: 479.04,
    },
  ],
  [
    {
      Date: "2021-12-12T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Smith",
    },
    {
      Units: 67,
    },
    {
      "Unit Cost": 1.29,
    },
    {
      Total: 86.43,
    },
  ],
  [
    {
      Date: "2021-12-29T00:00:00.000Z",
    },
    {
      Region: "East",
    },
    {
      "Customer Name": "Parent",
    },
    {
      Units: 74,
    },
    {
      "Unit Cost": 15.99,
    },
    {
      Total: 1183.26,
    },
  ],
  [
    {
      Date: "2022-01-15T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Gill",
    },
    {
      Units: 46,
    },
    {
      "Unit Cost": 8.99,
    },
    {
      Total: 413.54,
    },
  ],
  [
    {
      Date: "2022-02-01T00:00:00.000Z",
    },
    {
      Region: "Central",
    },
    {
      "Customer Name": "Smith",
    },
    {
      Units: 87,
    },
    {
      "Unit Cost": 15,
    },
    {
      Total: 1305,
    },
  ],
]

export default sample
