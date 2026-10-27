/**
 * Catálogo de productos de Barcino Meats
 * Fácil de mantener y ampliar. Cada elemento tiene:
 * - id: Identificador único
 * - title: Nombre del corte / producto
 * - thumb: Imagen principal que se muestra en la cuadrícula
 * - gallery: Lista de fotos en alta resolución para el modal / slider
 */
const PRODUCTS = [
    {
        id: "belly-bone-in-rind-on",
        title: "Belly Bone in Rind On",
        thumb: "assets/img/products/pork/01_bellybone/G_bellyBoneRindOn.jpg",
        gallery: [
            "assets/img/products/pork/01_bellybone/bellyBoneRindOn.jpg",
            "assets/img/products/pork/01_bellybone/bellyBoneRindOn2.jpg",
            "assets/img/products/pork/01_bellybone/bellyBoneRindOn3.jpg",
            "assets/img/products/pork/01_bellybone/bellyBoneRindOn5.jpg",
            "assets/img/products/pork/01_bellybone/bellyBoneRindOn6.jpg"
        ]
    },
    {
        id: "boneless-collar",
        title: "Boneless Collar",
        thumb: "assets/img/products/pork/02_boneless/G_bonelesscollar.jpg",
        gallery: [
            "assets/img/products/pork/02_boneless/bonelesscollar.jpg",
            "assets/img/products/pork/02_boneless/bonelesscollar2.jpg",
            "assets/img/products/pork/02_boneless/bonelesscollar3.jpg"
        ]
    },
    {
        id: "boneless-pork-belly-without-skin",
        title: "Boneless Pork Belly Without Skin",
        thumb: "assets/img/products/pork/03_bonelessPorkBellyWithoutSkin/G_bonelessPorkBellyWithoutSkin.jpg",
        gallery: [
            "assets/img/products/pork/03_bonelessPorkBellyWithoutSkin/bonelessPorkBellyWithoutSkin-1.jpg",
            "assets/img/products/pork/03_bonelessPorkBellyWithoutSkin/bonelessPorkBellyWithoutSkin-2.jpg",
            "assets/img/products/pork/03_bonelessPorkBellyWithoutSkin/bonelessPorkBellyWithoutSkin-3.jpg"
        ]
    },
    {
        id: "slipper",
        title: "Slipper",
        thumb: "assets/img/products/pork/04_boomerang/G_slipper.jpg",
        gallery: [
            "assets/img/products/pork/04_boomerang/boomerang.jpg",
            "assets/img/products/pork/04_boomerang/boomerang2.jpg"
        ]
    },
    {
        id: "ham-4d-tunnel-boned-with-fat-cover",
        title: "Ham 4D Tunnel Boned With Fat Cover",
        thumb: "assets/img/products/pork/05_ham4d/G_ham4dTunnelBonnedWithFatCover.jpg",
        gallery: [
            "assets/img/products/pork/05_ham4d/ham4dtunnelbonedwithfatcover-1.jpg",
            "assets/img/products/pork/05_ham4d/ham4dtunnelbonedwithfatcover-4.jpg",
            "assets/img/products/pork/05_ham4d/ham4dtunnelbonedwithfatcover-5.jpg"
        ]
    },
    {
        id: "horse-shoe",
        title: "Horse Shoe",
        thumb: "assets/img/products/pork/06_horseshoe/G_horseshoe.jpg",
        gallery: [
            "assets/img/products/pork/06_horseshoe/horseshoe-1.jpg",
            "assets/img/products/pork/06_horseshoe/horseshoe-2.jpg",
            "assets/img/products/pork/06_horseshoe/horseshoe-3.jpg"
        ]
    },
    {
        id: "loin-rindless",
        title: "Loin Rindless",
        thumb: "assets/img/products/pork/07_loinRindless/G_loinrindless.jpg",
        gallery: [
            "assets/img/products/pork/07_loinRindless/loinrindless-1.jpg",
            "assets/img/products/pork/07_loinRindless/loinrindless-2.jpg",
            "assets/img/products/pork/07_loinRindless/loinrindless-3.jpg"
        ]
    },
    {
        id: "3d-shoulder",
        title: "3D Shoulder",
        thumb: "assets/img/products/pork/08_pala4d/G_3DShoulder.jpg",
        gallery: [
            "assets/img/products/pork/08_pala4d/bone-inPorkShoulderWithFat-1.jpg",
            "assets/img/products/pork/08_pala4d/bone-inPorkShoulderWithFat-2.jpg",
            "assets/img/products/pork/08_pala4d/bone-inPorkShoulderWithFat-3.jpg"
        ]
    },
    {
        id: "ham-4d-tunnel-boned",
        title: "Ham 4D Tunnel Boned",
        thumb: "assets/img/products/pork/10_porkLoinWithoutskin/G_Ham4DTunnelBonned.jpg",
        gallery: [
            "assets/img/products/pork/10_porkLoinWithoutskin/porkLoinWithoutSkin-1.jpg",
            "assets/img/products/pork/10_porkLoinWithoutskin/porkLoinWithoutSkin-2.jpg",
            "assets/img/products/pork/10_porkLoinWithoutskin/porkLoinWithoutSkin-3.jpg"
        ]
    },
    {
        id: "ham-4d-tunnel-boned-in-rind-on",
        title: "Ham 4D Tunnel Boned in Rind On",
        thumb: "assets/img/products/pork/11_porkLoinWithSkin/G_Ham4DTunnelBonnedInRindOn.jpg",
        gallery: [
            "assets/img/products/pork/11_porkLoinWithSkin/porkLoinWithSkin-1.jpg",
            "assets/img/products/pork/11_porkLoinWithSkin/porkLoinWithSkin-2.jpg",
            "assets/img/products/pork/11_porkLoinWithSkin/porkLoinWithSkin-3.jpg"
        ]
    },
    {
        id: "rind-on-back",
        title: "Rind On Back",
        thumb: "assets/img/products/pork/13_rindOnBack/G_rindOnBack.jpg",
        gallery: [
            "assets/img/products/pork/13_rindOnBack/rindOnBack-1.jpg",
            "assets/img/products/pork/13_rindOnBack/rindOnBack-2.jpg",
            "assets/img/products/pork/13_rindOnBack/rindOnBack-4.jpg"
        ]
    },
    {
        id: "skinless-back",
        title: "Skinless Back",
        thumb: "assets/img/products/pork/14_skinless back/G_skinless-back.jpg",
        gallery: [
            "assets/img/products/pork/14_skinless back/skinless-back_1.jpg",
            "assets/img/products/pork/14_skinless back/skinless-back_2.jpg",
            "assets/img/products/pork/14_skinless back/skinless-back_3.jpg"
        ]
    },
    {
        id: "tender-loin",
        title: "Tender Loin",
        thumb: "assets/img/products/pork/15_tenderloin/G_tenderloin.jpg",
        gallery: [
            "assets/img/products/pork/15_tenderloin/tenderloin-2.jpg",
            "assets/img/products/pork/15_tenderloin/tenderloin-3.jpg",
            "assets/img/products/pork/15_tenderloin/tenderloin-4.jpg"
        ]
    }
];
