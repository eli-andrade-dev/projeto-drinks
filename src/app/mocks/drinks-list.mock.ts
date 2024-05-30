// import { DrinkType } from '../types/drinks.types.component';

// export const DrinksListMock: DrinkType[] = [
//   {
//     name: "Mojito",
//     ingredients: [
//       "50ml de rum branco",
//       "1/2 limão",
//       "1 colher de chá de açúcar",
//       "10 folhas de hortelã",
//       "Água com gás",
//       "Gelo"
//     ],
//     instructions: "Macere o limão com o açúcar e a hortelã. Adicione gelo, rum e complete com água com gás.",
//     image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/2900285529b5e3cec0142dd262adf5b2/Derivates/846727c55a95b7b73bbb5c1280e923f9c7bf55b3.jpg"
//   },
//   {
//     name: "Caipirinha",
//     ingredients: [
//       "1 limão",
//       "2 colheres de chá de açúcar",
//       "50ml de cachaça",
//       "Gelo"
//     ],
//     instructions: "Macere o limão com o açúcar. Adicione gelo e cachaça, misture bem.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/caipirnha-720x720-primary-40900f56782b4c1d8c79494c9b413f9c.webp"
//   },
//   {
//     name: "Margarita",
//     ingredients: [
//       "50ml de tequila",
//       "25ml de licor de laranja",
//       "25ml de suco de limão",
//       "Sal para a borda do copo",
//       "Gelo"
//     ],
//     instructions: "Misture a tequila, o licor de laranja e o suco de limão com gelo em uma coqueteleira. Passe limão na borda do copo e mergulhe no sal. Coe o drink no copo.",
//     image: "https://vinepair.com/wp-content/uploads/2023/08/margarita-google-1000x1000.jpg"
//   },
//   {
//     name: "Pina Colada",
//     ingredients: [
//       "50ml de rum",
//       "100ml de suco de abacaxi",
//       "30ml de leite de coco",
//       "Gelo"
//     ],
//     instructions: "Misture todos os ingredientes no liquidificador com gelo e bata até ficar homogêneo.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/pina-colada.webp"
//   },
//   {
//     name: "Bloody Mary",
//     ingredients: [
//       "50ml de vodka",
//       "100ml de suco de tomate",
//       "15ml de suco de limão",
//       "1 pitada de sal",
//       "1 pitada de pimenta",
//       "1 talo de aipo",
//       "Molho inglês a gosto",
//       "Molho de pimenta a gosto",
//       "Gelo"
//     ],
//     instructions: "Misture todos os ingredientes em um copo com gelo. Mexa bem.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/Bloody-Mary_Recipe.webp"
//   },
//   {
//     name: "Dry Martini",
//     ingredients: [
//       "60ml de gin",
//       "10ml de vermute seco",
//       "1 azeitona ou casca de limão para decorar",
//       "Gelo"
//     ],
//     instructions: "Mexa o gin e o vermute com gelo e coe em uma taça de martini gelada. Decore com a azeitona ou a casca de limão.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrbdvssr3EfNSQrAjc2CE8KaLsUnJV37Zrm-7NOCD-MS0Bq6rWbSbo7ABgCDR8AVvfYU&usqp=CAU"
//   },
//   {
//     name: "Manhattan",
//     ingredients: [
//       "50ml de whisky",
//       "25ml de vermute doce",
//       "2 gotas de angostura",
//       "Cereja para decorar",
//       "Gelo"
//     ],
//     instructions: "Misture todos os ingredientes em um mixing glass com gelo. Coe para uma taça de cocktail gelada. Decore com uma cereja.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/manhatam.jpg"
//   },
//   {
//     name: "Cosmopolitan",
//     ingredients: [
//       "40ml de vodka",
//       "15ml de licor de laranja",
//       "15ml de suco de limão",
//       "30ml de suco de cranberry",
//       "Gelo"
//     ],
//     instructions: "Misture todos os ingredientes em uma coqueteleira com gelo. Coe em uma taça de coquetel gelada.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/cosmopolitam.webp"
//   },
//   {
//     name: "Old Fashioned",
//     ingredients: [
//       "50ml de bourbon ou rye whisky",
//       "1 cubo de açúcar",
//       "2 gotas de angostura",
//       "1 colher de chá de água",
//       "Casca de laranja",
//       "Gelo"
//     ],
//     instructions: "Macere o açúcar com a angostura e a água em um copo baixo. Adicione o whisky e o gelo. Mexa bem e decore com a casca de laranja.",
//     image: "https://www.liquor.com/thmb/rxbQEXR-CQpExjfS8xtOAWXLovM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bourbon-old-fashioned-4000x4000-primary-ig-f0ce04bec6754db187ab1e8a16fd45c3.jpg"
//   },
//   {
//     name: "Whiskey Sour",
//     ingredients: [
//       "50ml de bourbon",
//       "25ml de suco de limão",
//       "15ml de xarope de açúcar",
//       "1 clara de ovo (opcional)",
//       "Gelo"
//     ],
//     instructions: "Misture todos os ingredientes em uma coqueteleira com gelo. Coe em um copo baixo com gelo.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/WhiskeySour.webp"
//   },
//   {
//     name: "Mai Tai",
//     ingredients: [
//       "40ml de rum claro",
//       "20ml de rum escuro",
//       "15ml de licor de laranja",
//       "15ml de xarope de amêndoas",
//       "10ml de suco de limão",
//       "Gelo"
//     ],
//     instructions: "Misture todos os ingredientes em uma coqueteleira com gelo. Coe em um copo alto com gelo.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/mai-tai-720x720-primary-e09e24f1cacd4b3896f5aa32ba51dcdd.webp"
//   },
//   {
//     name: "Daiquiri",
//     ingredients: [
//       "50ml de rum branco",
//       "25ml de suco de limão",
//       "15ml de xarope de açúcar",
//       "Gelo"
//     ],
//     instructions: "Misture todos os ingredientes em uma coqueteleira com gelo. Coe em uma taça de coquetel gelada.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/Daiquiri_3000x3000_primary-206eb2330cb04852ab7d780dcf3d55ef.webp"
//   },
//   {
//     name: "Negroni",
//     ingredients: [
//       "25ml de gin",
//       "25ml de vermute doce",
//       "25ml de Campari",
//       "Casca de laranja",
//       "Gelo"
//     ],
//     instructions: "Misture todos os ingredientes com gelo em um copo baixo. Decore com a casca de laranja.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/0425-negroni-recipe.webp"
//   },
//   {
//     name: "Gin Tônica",
//     ingredients: [
//       "50ml de gin",
//       "Água tônica",
//       "Rodela de limão",
//       "Gelo"
//     ],
//     instructions: "Encha um copo alto com gelo. Adicione o gin e complete com água tônica. Decore com a rodela de limão.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/Gin-tonica2-e1694726889886.jpg"
//   },
//   {
//     name: "Tequila Sunrise",
//     ingredients: [
//       "50ml de tequila",
//       "100ml de suco de laranja",
//       "10ml de xarope de grenadine",
//       "Gelo"
//     ],
//     instructions: "Encha um copo alto com gelo. Adicione a tequila e o suco de laranja. Derrame o xarope de grenadine lentamente para criar um efeito degradê.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/tequila-sunrise-18167a1.webp"
//   },
//   {
//     name: "Tom Collins",
//     ingredients: [
//       "50ml de gin",
//       "25ml de suco de limão",
//       "15ml de xarope de açúcar",
//       "Água com gás",
//       "Gelo"
//     ],
//     instructions: "Misture o gin, o suco de limão e o xarope de açúcar em um copo alto com gelo. Complete com água com gás.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/LQR-tomcollins-original-4000x4000-680e282529a34b30ac4b8ed495168109.webp"
//   },
//   {
//     name: "Aperol Spritz",
//     ingredients: [
//       "50ml de Aperol",
//       "100ml de prosecco",
//       "Água com gás",
//       "Rodela de laranja",
//       "Gelo"
//     ],
//     instructions: "Encha um copo grande com gelo. Adicione o Aperol, o prosecco e complete com água com gás. Decore com a rodela de laranja.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/aperol-spritz-720x720-primary-985457b239d7427da2f8b4be17131caa.webp"
//   },
//   {
//     name: "Moscow Mule",
//     ingredients: [
//       "50ml de vodka",
//       "10ml de suco de limão",
//       "Água de gengibre",
//       "Rodela de limão",
//       "Gelo"
//     ],
//     instructions: "Encha uma caneca de cobre com gelo. Adicione a vodka e o suco de limão. Complete com água de gengibre e decore com a rodela de limão.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/moscow-mule.webp"
//   },
//   {
//     name: "Mint Julep",
//     ingredients: [
//       "50ml de bourbon",
//       "4-5 folhas de hortelã",
//       "1 colher de chá de açúcar",
//       "Água",
//       "Gelo"
//     ],
//     instructions: "Macere as folhas de hortelã com o açúcar e um pouco de água no fundo de um copo. Encha o copo com gelo e adicione o bourbon. Mexa bem.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/Editorial_01_MintJulep-v2-6x4.webp"
//   },
//   {
//     name: "Espresso Martini",
//     ingredients: [
//       "40ml de vodka",
//       "20ml de licor de café",
//       "1 dose de café expresso",
//       "Gelo"
//     ],
//     instructions: "Misture todos os ingredientes em uma coqueteleira com gelo. Coe em uma taça de coquetel gelada.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/espresso-martini-lead-6613f83a8cb58.jpg"
//   },
//   {
//     name: "Bellini",
//     ingredients: [
//       "100ml de prosecco",
//       "50ml de purê de pêssego"
//     ],
//     instructions: "Adicione o purê de pêssego em uma taça de champanhe. Complete com prosecco e mexa delicadamente.",
//     image: "https://image-drinks-storage-app.s3.amazonaws.com/img/Bellini_RECIPE.webp"
//   }
// ];



