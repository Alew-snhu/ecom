export default class HomeViewModel {

  public carouselImgSources = [
    {
      src:'https://www.americanmusical.com/ss-client/images/hp_customer_approved_gear_1326_400_102122.jpg'
    },
    {
      src:'https://www.americanmusical.com/ss-client/images/hp_artist_signature_gear_1326_400_101922.jpg'
    },
    {
      src:'https://www.americanmusical.com/ss-client/images/hp_under50_per_month_1326_400_101222.jpg'
    },
    {
      src: 'https://www.americanmusical.com/ss-client/images/hp_exclusive_run_gear_1326_400_101422.jpg'
    }
  ];

  public featuredCategories = [
    {
      name: "guitars",
      imgSrc: "https://www.ibanez.com/common/product_artist_file/file/pc_main_electric_guitars_na.jpg",
      routerPath:"/guitars",
    },
    {
      name: "Bass guitars",
      imgSrc: "https://www.roscoeguitars.com/images/roscoe_5_cb_top.jpg",
      routerPath:"/about",
    },
    {
      name: "Drums",
      imgSrc: "https://cdn.shopify.com/s/files/1/1422/9358/products/YAMAHA-PHEONIX-PHX-4-PIECE-DRUM-KIT-SAPPHIRE-GLOSS-OVER-BURL-ASH-DRUMAZON_02_1000x.jpg?v=1598221861",
      routerPath:"/about",
    },
    {
      name: "Accessories",
      imgSrc: "https://s3.us-west-2.amazonaws.com/static.ernieball.com/website/images/products/image_front/medium/P03215.png",
      routerPath:"/about",
    },

  ];
}