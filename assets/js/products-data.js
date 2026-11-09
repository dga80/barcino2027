/**
 * Categorías principales solicitadas por el cliente
 */
const PRODUCT_CATEGORIES = [
    {
        id: "pork",
        label: "Pork",
        description: "Freshly butchered and frozen Spanish & European pork cuts sourced from accredited suppliers."
    },
    {
        id: "young-bull",
        label: "Young Bull",
        description: "Premium young bull cuts selected for consistent marbling, tenderness and wholesale grading."
    },
    {
        id: "turkey",
        label: "Turkey",
        description: "Year-round supply of whole and portioned premium turkey from trusted partner farms."
    },
    {
        id: "mutton",
        label: "Mutton",
        description: "High-welfare ovine and mutton cuts tailored for manufacturing, wholesale and foodservice."
    },
    {
        id: "otm-beef",
        label: "OTM Beef",
        description: "Over Thirty Months (OTM) beef cuts, traditional primals and custom processing grades."
    },
    {
        id: "pulled-meats",
        label: "Pulled Meats",
        description: "Slow-cooked pulled meat selections prepared for retail, hospitality and food manufacturing."
    },
    {
        id: "piglets",
        label: "Piglets",
        description: "Authentic Spanish suckling piglets (cochinillo) available whole or portioned."
    },
    {
        id: "cooked-ribs",
        label: "Cooked Ribs",
        description: "Tender, slow-cooked ribs prepared to specification for quick finishing and consistent quality."
    }
];

/**
 * Catálogo de productos de Barcino Meats
 * Cada elemento tiene:
 * - id: Identificador único
 * - category: ID de la categoría (pork, young-bull, turkey, mutton, otm-beef, pulled-meats, piglets, cooked-ribs)
 * - title: Nombre del corte / producto
 * - description: Breve descripción visible debajo de la miniatura
 * - thumb: Foto real en miniatura que se muestra directamente en la cuadrícula
 * - gallery: Lista de fotos reales en alta resolución para ampliar y hacer slide en el modal
 */
const PRODUCTS = [
    {
        id: "belly-bone-in-rind-on",
        category: "pork",
        title: "Belly Bone in Rind On",
        description: "Bone-in pork belly with skin on · Fresh & Frozen",
        thumb: "assets/img/products/pork/01_bellybone/bellyBoneRindOn.jpg",
        gallery: [
            "assets/img/products/pork/01_bellybone/bellyBoneRindOn.jpg",
            "assets/img/products/pork/01_bellybone/bellyBoneRindOn2.jpg",
            "assets/img/products/pork/01_bellybone/bellyBoneRindOn3.jpg",
            "assets/img/products/pork/01_bellybone/bellyBoneRindOn4.jpg",
            "assets/img/products/pork/01_bellybone/bellyBoneRindOn5.jpg",
            "assets/img/products/pork/01_bellybone/bellyBoneRindOn6.jpg"
        ]
    },
    {
        id: "boneless-collar",
        category: "pork",
        title: "Boneless Collar",
        description: "Trimmed boneless pork collar · Fresh & Frozen",
        thumb: "assets/img/products/pork/02_boneless/bonelesscollar.jpg",
        gallery: [
            "assets/img/products/pork/02_boneless/bonelesscollar.jpg",
            "assets/img/products/pork/02_boneless/bonelesscollar2.jpg",
            "assets/img/products/pork/02_boneless/bonelesscollar3.jpg"
        ]
    },
    {
        id: "boneless-pork-belly-without-skin",
        category: "pork",
        title: "Boneless Pork Belly Without Skin",
        description: "Rindless, boneless pork belly cut · Fresh & Frozen",
        thumb: "assets/img/products/pork/03_bonelessPorkBellyWithoutSkin/bonelessPorkBellyWithoutSkin-1.jpg",
        gallery: [
            "assets/img/products/pork/03_bonelessPorkBellyWithoutSkin/bonelessPorkBellyWithoutSkin-1.jpg",
            "assets/img/products/pork/03_bonelessPorkBellyWithoutSkin/bonelessPorkBellyWithoutSkin-2.jpg",
            "assets/img/products/pork/03_bonelessPorkBellyWithoutSkin/bonelessPorkBellyWithoutSkin-3.jpg"
        ]
    },
    {
        id: "slipper",
        category: "pork",
        title: "Slipper / Boomerang",
        description: "Specialty pork cut trimmed to specification",
        thumb: "assets/img/products/pork/04_boomerang/boomerang.jpg",
        gallery: [
            "assets/img/products/pork/04_boomerang/boomerang.jpg",
            "assets/img/products/pork/04_boomerang/boomerang2.jpg"
        ]
    },
    {
        id: "ham-4d-tunnel-boned-with-fat-cover",
        category: "pork",
        title: "Ham 4D Tunnel Boned With Fat Cover",
        description: "4D tunnel-boned pork leg with external fat cover",
        thumb: "assets/img/products/pork/05_ham4d/ham4dtunnelbonedwithfatcover-1.jpg",
        gallery: [
            "assets/img/products/pork/05_ham4d/ham4dtunnelbonedwithfatcover-1.jpg",
            "assets/img/products/pork/05_ham4d/ham4dtunnelbonedwithfatcover-4.jpg",
            "assets/img/products/pork/05_ham4d/ham4dtunnelbonedwithfatcover-5.jpg"
        ]
    },
    {
        id: "horse-shoe",
        category: "pork",
        title: "Horse Shoe",
        description: "Horseshoe gammon / pork leg cut · Export grade",
        thumb: "assets/img/products/pork/06_horseshoe/horseshoe-1.jpg",
        gallery: [
            "assets/img/products/pork/06_horseshoe/horseshoe-1.jpg",
            "assets/img/products/pork/06_horseshoe/horseshoe-2.jpg",
            "assets/img/products/pork/06_horseshoe/horseshoe-3.jpg"
        ]
    },
    {
        id: "loin-rindless",
        category: "pork",
        title: "Loin Rindless",
        description: "Boneless, skinless pork loin primal cut",
        thumb: "assets/img/products/pork/07_loinRindless/loinrindless-1.jpg",
        gallery: [
            "assets/img/products/pork/07_loinRindless/loinrindless-1.jpg",
            "assets/img/products/pork/07_loinRindless/loinrindless-2.jpg",
            "assets/img/products/pork/07_loinRindless/loinrindless-3.jpg"
        ]
    },
    {
        id: "3d-shoulder",
        category: "pork",
        title: "3D Shoulder (Bone-in With Fat)",
        description: "Pork shoulder cut with fat cover · Fresh & Frozen",
        thumb: "assets/img/products/pork/08_pala4d/bone-inPorkShoulderWithFat-1.jpg",
        gallery: [
            "assets/img/products/pork/08_pala4d/bone-inPorkShoulderWithFat-1.jpg",
            "assets/img/products/pork/08_pala4d/bone-inPorkShoulderWithFat-2.jpg",
            "assets/img/products/pork/08_pala4d/bone-inPorkShoulderWithFat-3.jpg"
        ]
    },
    {
        id: "pork-loin-without-skin",
        category: "pork",
        title: "Pork Loin Without Skin",
        description: "Trimmed skinless pork loin · Custom specification",
        thumb: "assets/img/products/pork/10_porkLoinWithoutskin/porkLoinWithoutSkin-1.jpg",
        gallery: [
            "assets/img/products/pork/10_porkLoinWithoutskin/porkLoinWithoutSkin-1.jpg",
            "assets/img/products/pork/10_porkLoinWithoutskin/porkLoinWithoutSkin-2.jpg",
            "assets/img/products/pork/10_porkLoinWithoutskin/porkLoinWithoutSkin-3.jpg"
        ]
    },
    {
        id: "pork-loin-with-skin",
        category: "pork",
        title: "Pork Loin With Skin",
        description: "Rind-on pork loin primal · Fresh & Frozen",
        thumb: "assets/img/products/pork/11_porkLoinWithSkin/porkLoinWithSkin-1.jpg",
        gallery: [
            "assets/img/products/pork/11_porkLoinWithSkin/porkLoinWithSkin-1.jpg",
            "assets/img/products/pork/11_porkLoinWithSkin/porkLoinWithSkin-2.jpg",
            "assets/img/products/pork/11_porkLoinWithSkin/porkLoinWithSkin-3.jpg"
        ]
    },
    {
        id: "pork-neck",
        category: "pork",
        title: "Pork Neck",
        description: "Well-marbled pork neck primal cut",
        thumb: "assets/img/products/pork/12_porkneck/porkneck.jpg",
        gallery: [
            "assets/img/products/pork/12_porkneck/porkneck.jpg",
            "assets/img/products/pork/12_porkneck/porkneck2.jpg"
        ]
    },
    {
        id: "rind-on-back",
        category: "pork",
        title: "Rind On Back",
        description: "Pork back cut with skin on · Export quality",
        thumb: "assets/img/products/pork/13_rindOnBack/rindOnBack-1.jpg",
        gallery: [
            "assets/img/products/pork/13_rindOnBack/rindOnBack-1.jpg",
            "assets/img/products/pork/13_rindOnBack/rindOnBack-2.jpg",
            "assets/img/products/pork/13_rindOnBack/rindOnBack-4.jpg"
        ]
    },
    {
        id: "skinless-back",
        category: "pork",
        title: "Skinless Back",
        description: "Trimmed rindless pork back cut",
        thumb: "assets/img/products/pork/14_skinless back/skinless-back_1.jpg",
        gallery: [
            "assets/img/products/pork/14_skinless back/skinless-back_1.jpg",
            "assets/img/products/pork/14_skinless back/skinless-back_2.jpg",
            "assets/img/products/pork/14_skinless back/skinless-back_3.jpg"
        ]
    },
    {
        id: "tender-loin",
        category: "pork",
        title: "Tender Loin",
        description: "Whole trimmed pork tenderloin fillet",
        thumb: "assets/img/products/pork/15_tenderloin/tenderloin-2.jpg",
        gallery: [
            "assets/img/products/pork/15_tenderloin/tenderloin-2.jpg",
            "assets/img/products/pork/15_tenderloin/tenderloin-3.jpg",
            "assets/img/products/pork/15_tenderloin/tenderloin-4.jpg"
        ]
    }
];
