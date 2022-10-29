const testSkuDataList = [
  {
    id: "1",
    name: "S22 Galaxy Ultra",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor pega na minha e balanca sit amet...",
    status: "active",
    brand: "Samsung",
    category: "Smartphone",

    date_created: "2022-03-11 15:30:00",
    date_updated: "2022-03-11 15:30:00",
    additional_sku_specs: [
      { id: 0, name: "memory" },
      { id: 1, name: "ram" },
    ],
    total_quantity: 11,
    list_sku: [
      {
        id: "1",
        name: "Black galaxy",
        description: "",
        // timestamp yyyy-mm-dd hh:mm:ss
        date_created: "2022-10-13 21:37:00",
        date_updated: "2022-10-13 21:37:00",
        quantity: 5,
        cost: "300,00",
        value: "5162,00",
        // specifications
        color: {
          name: "black",
          rgb: "0, 0, 0",
        },
        image:
          "https://www.cellshop.com/10393343-thickbox_default/smartphone-samsung-galaxy-s22-5g-dual-sim-8256gb-black.jpg",
        // height x length x width
        dimensions: "15x7x1 cm",
        weight: "500 g",
        // additional
        memory: "64 gb",
        ram: "4 gb"

      },
      {
        id: "2",
        name: "Green galaxy",
        description: "",
        // timestamp yyyy-mm-dd hh:mm:ss
        date_created: "2022-10-13 21:37:00",
        date_updated: "2022-10-13 21:37:00",
        quantity: 6,
        cost: "300,00",
        value: "5162,00",
        // specifications
        color: {
          name: "navy green",
          rgb: "63, 135, 106",
        },
        image:
          "https://samsungbr.vtexassets.com/arquivos/ids/331036-800-auto?width=800&height=auto&aspect=true",
        // height x length x width
        dimensions: "15x7x1 cm",
        weight: "500 g",
        // additional
        memory: "64 gb",
        ram: "2 gb"
      },
    ],
  },
];
export default testSkuDataList;
