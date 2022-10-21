const testSkuDataList = [
     {
          id: '1',
          name:'S22 Galaxy Ultra',
          description: 'Lorem ipsum dolor sit amet...',
          status:'active',
          brand: 'Samsung',
          category: 'Smartphone',

          date_created: '2022-03-11 15:30:00',
          date_updated: '2022-03-11 15:30:00',
          additional_sku_specs:[
             'memory'
          ],
          quantity: 22,
          list_sku:[
               {
                    id: '1',
                    name: 'Black galaxy',
                    description: '',
                    // timestamp yyyy-mm-dd hh:mm:ss
                    date_created: '2022-10-13 21:37:00',
                    date_updated: '2022-10-13 21:37:00',
                    cost: '300,00',
                    value: '5162,00',
                    // specifications
                    color: { 
                         name:'black', 
                         rgb: '0, 0, 0'
                    },
                    image: 'https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-s21-fe-128gb-preto-5g-6gb-ram-tela-64-cam-tripla-selfie-32mp/magazineluiza/233990000/e61df17d4e04c633f36b090c51002c08.jpg',
                    // height x length x width
                    dimensions: '15x7x1 cm',
                    weight: '500 g',
                    // additional
                    memory: '64 gb'

               },
               {
                    id: '2',
                    name:'Green galaxy',
                    description: '',
                    // timestamp yyyy-mm-dd hh:mm:ss
                    date_created: '2022-10-13 21:37:00',
                    date_updated: '2022-10-13 21:37:00',
                    cost: '300,00',
                    value: '5162,00',
                    // specifications
                    color: { 
                         name:'green', 
                         rgb: '59, 128, 66'
                    },
                    image: 'https://samsungbr.vtexassets.com/arquivos/ids/331036-800-auto?width=800&height=auto&aspect=true',
                    // height x length x width
                    dimensions: '15x7x1 cm',
                    weight: '500 g',
                    // additional
                    memory: '64 gb'

               }
          ]
     },

] 
export default testSkuDataList