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
    },

    /* ==========================================================================
       OTM BEEF (Over Thirty Months)
       ========================================================================== */
    {
        id: "otm-topside",
        category: "otm-beef",
        title: "Topside / Inside Round (Tapa)",
        description: "Lean, boneless OTM beef topside primal cut · Fresh & Frozen",
        thumb: "assets/img/products/otm-beef/7 - Tapa.jpg",
        gallery: [
            "assets/img/products/otm-beef/7 - Tapa.jpg"
        ]
    },
    {
        id: "otm-knuckle",
        category: "otm-beef",
        title: "Knuckle / Thick Flank (Babilla)",
        description: "Well-trimmed boneless OTM beef knuckle · Fresh & Frozen",
        thumb: "assets/img/products/otm-beef/8 - Babilla.jpg",
        gallery: [
            "assets/img/products/otm-beef/8 - Babilla.jpg"
        ]
    },
    {
        id: "otm-rump",
        category: "otm-beef",
        title: "Rump with Cap & Tail (Cadera)",
        description: "Full beef rump primal with cap and tail · Export grade",
        thumb: "assets/img/products/otm-beef/9 - Cadera con rabillo y tapilla.jpg",
        gallery: [
            "assets/img/products/otm-beef/9 - Cadera con rabillo y tapilla.jpg"
        ]
    },
    {
        id: "otm-silverside-flat",
        category: "otm-beef",
        title: "Outside Flat (Contra sin Redondo)",
        description: "Boneless OTM beef silverside flat primal · Fresh & Frozen",
        thumb: "assets/img/products/otm-beef/19 - Contra sin redondo.jpg",
        gallery: [
            "assets/img/products/otm-beef/19 - Contra sin redondo.jpg"
        ]
    },
    {
        id: "otm-boneless-loin-3-ribs",
        category: "otm-beef",
        title: "Boneless Loin 3 Ribs (Lomo sin Hueso)",
        description: "Carefully marbled boneless beef striploin cut · Fresh & Frozen",
        thumb: "assets/img/products/otm-beef/31 - Lomo sin hueso 3 costillas.jpg",
        gallery: [
            "assets/img/products/otm-beef/31 - Lomo sin hueso 3 costillas.jpg"
        ]
    },
    {
        id: "otm-entrecote",
        category: "otm-beef",
        title: "Entrecôte / Ribeye (Entrecot)",
        description: "Selected tender beef ribeye primal cut · Fresh & Frozen",
        thumb: "assets/img/products/otm-beef/33 - Entrecot.jpg",
        gallery: [
            "assets/img/products/otm-beef/33 - Entrecot.jpg"
        ]
    },
    {
        id: "otm-chuck",
        category: "otm-beef",
        title: "Chuck / Neck (Aguja)",
        description: "Flavorful boneless beef chuck roll cut for roasting and manufacturing",
        thumb: "assets/img/products/otm-beef/45 - Aguja.jpg",
        gallery: [
            "assets/img/products/otm-beef/45 - Aguja.jpg"
        ]
    },
    {
        id: "otm-brisket",
        category: "otm-beef",
        title: "Brisket (Pecho)",
        description: "Deep-flavored beef brisket primal for smoking, curing and slow cooking",
        thumb: "assets/img/products/otm-beef/50 - Pecho.jpg",
        gallery: [
            "assets/img/products/otm-beef/50 - Pecho.jpg"
        ]
    },

    /* ==========================================================================
       PIGLETS (Authentic Spanish Suckling Pig / Cochinillo)
       ========================================================================== */
    {
        id: "piglet-whole-fresh",
        category: "piglets",
        title: "Whole Suckling Pig (Cochinillo Entero)",
        description: "Authentic whole Spanish suckling pig · Fresh & Vacuum Packed",
        thumb: "assets/img/products/piglets/Fresco/tabladillo_frescos_cochinillo entero.jpg",
        gallery: [
            "assets/img/products/piglets/Fresco/tabladillo_frescos_cochinillo entero.jpg",
            "assets/img/products/piglets/Fresco/tabladillo_frescos_cochinillo entero_envasado.jpg"
        ]
    },
    {
        id: "piglet-forequarter-fresh",
        category: "piglets",
        title: "Suckling Pig Forequarter (Cuarto Delantero)",
        description: "Fresh portioned suckling pig forequarter · Ready for oven roasting",
        thumb: "assets/img/products/piglets/Fresco/tabladillo_frescos_cuarto delantero cochinillo.jpg",
        gallery: [
            "assets/img/products/piglets/Fresco/tabladillo_frescos_cuarto delantero cochinillo.jpg",
            "assets/img/products/piglets/Fresco/Cuarto de cochinillo envasado_Al Horno y Punto_Tabladillo 1.jpg",
            "assets/img/products/piglets/Fresco/Cuarto de cochinillo envasado_Al Horno y Punto_Tabladillo 2.jpg"
        ]
    },
    {
        id: "piglet-rack-fresh",
        category: "piglets",
        title: "Suckling Pig Rack / Ribs (Carré)",
        description: "Tender suckling pig rack rib primal · Vacuum packed",
        thumb: "assets/img/products/piglets/Fresco/tabladillo_frescos_carre cochinillo_envasado2.jpg",
        gallery: [
            "assets/img/products/piglets/Fresco/tabladillo_frescos_carre cochinillo_envasado2.jpg",
            "assets/img/products/piglets/Fresco/tabladillo_frescos_carre cochinillo_envasado3.jpg"
        ]
    },
    {
        id: "piglet-shanks-fresh",
        category: "piglets",
        title: "Suckling Pig Hind Shanks (Jamoncitos)",
        description: "Fresh portioned suckling pig hind shanks / mini hams",
        thumb: "assets/img/products/piglets/Fresco/tabladillo_frescos_jamoncitos cochinillo.jpg",
        gallery: [
            "assets/img/products/piglets/Fresco/tabladillo_frescos_jamoncitos cochinillo.jpg",
            "assets/img/products/piglets/Fresco/tabladillo_frescos_jamoncitos cochinillo_envasado_2.jpg"
        ]
    },
    {
        id: "piglet-shoulders-fresh",
        category: "piglets",
        title: "Suckling Pig Shoulders (Paletillas)",
        description: "Fresh whole suckling pig shoulders trimmed for gourmet presentation",
        thumb: "assets/img/products/piglets/Fresco/tabladillo_frescos_paletillas cochinillo.jpg",
        gallery: [
            "assets/img/products/piglets/Fresco/tabladillo_frescos_paletillas cochinillo.jpg"
        ]
    },
    {
        id: "piglet-mask-fresh",
        category: "piglets",
        title: "Suckling Pig Mask (Careta)",
        description: "Cleaned fresh suckling pig mask / head cut for traditional recipes",
        thumb: "assets/img/products/piglets/Fresco/tabladillo_frescos_careta de cochinillo.jpg",
        gallery: [
            "assets/img/products/piglets/Fresco/tabladillo_frescos_careta de cochinillo.jpg"
        ]
    },
    {
        id: "piglet-whole-pre-roasted",
        category: "piglets",
        title: "Pre-Roasted Whole Suckling Pig (Cochinillo Asado Entero)",
        description: "Slow pre-roasted authentic suckling pig · Crispy skin in 50 minutes",
        thumb: "assets/img/products/piglets/Preasado/Packaging/Entero.jpg",
        gallery: [
            "assets/img/products/piglets/Preasado/Packaging/Entero.jpg",
            "assets/img/products/piglets/Preasado/Producto/Entero-cochinillo-preasado-envasado-al-vacio.jpg"
        ]
    },
    {
        id: "piglet-half-pre-roasted",
        category: "piglets",
        title: "Pre-Roasted Half Suckling Pig (Medio Cochinillo Asado)",
        description: "Slow-cooked half suckling pig in natural juices · 5 servings",
        thumb: "assets/img/products/piglets/Preasado/Packaging/Medio.jpg",
        gallery: [
            "assets/img/products/piglets/Preasado/Packaging/Medio.jpg",
            "assets/img/products/piglets/Preasado/Producto/Medio-cochinillo-preasado-envasado-al-vacio.jpg"
        ]
    },
    {
        id: "piglet-quarter-pre-roasted",
        category: "piglets",
        title: "Pre-Roasted Suckling Pig Quarter (Cuarto Asado)",
        description: "Pre-roasted suckling pig quarter cut · Crispy & juicy in 30 minutes",
        thumb: "assets/img/products/piglets/Preasado/Packaging/Cuarto.jpg",
        gallery: [
            "assets/img/products/piglets/Preasado/Packaging/Cuarto.jpg",
            "assets/img/products/piglets/Preasado/Packaging/Cuarto Sin frio.jpg",
            "assets/img/products/piglets/Preasado/Producto/Cuarto-de-cochinillo-preasado-envasado-al-vacio.jpg"
        ]
    },
    {
        id: "piglet-shank-pre-roasted",
        category: "piglets",
        title: "Pre-Roasted Suckling Pig Shank (Jamoncito Asado)",
        description: "Individual pre-roasted suckling pig portion · Ready in oven or air fryer",
        thumb: "assets/img/products/piglets/Preasado/Packaging/Jamoncito.jpg",
        gallery: [
            "assets/img/products/piglets/Preasado/Packaging/Jamoncito.jpg",
            "assets/img/products/piglets/Preasado/Producto/Jamoncito asado envasado_Tabladillo.jpg"
        ]
    },
    {
        id: "piglet-roti-pre-roasted",
        category: "piglets",
        title: "Pre-Roasted Boneless Suckling Pig Rôti (Roti Asado)",
        description: "100% boneless rolled suckling pig rôti · Easy slicing & consistent portions",
        thumb: "assets/img/products/piglets/Preasado/Packaging/Roti asado (1).jpg",
        gallery: [
            "assets/img/products/piglets/Preasado/Packaging/Roti asado (1).jpg",
            "assets/img/products/piglets/Preasado/Packaging/Roti asado (2).jpg",
            "assets/img/products/piglets/Preasado/Packaging/Roti asado Sin frio.jpg",
            "assets/img/products/piglets/Preasado/Producto/Roti preasado envasado FyC.jpg",
            "assets/img/products/piglets/Preasado/Producto/Roti preasado envasado Sin Frio.jpg"
        ]
    },
    {
        id: "piglet-cochifrito-pre-roasted",
        category: "piglets",
        title: "Pre-Roasted Suckling Pig Cochifrito (Cochifrito Asado)",
        description: "Hand-cut suckling pig bites · Ultra-crispy tapas ready in 5 minutes",
        thumb: "assets/img/products/piglets/Preasado/Packaging/Cochifrito.jpg",
        gallery: [
            "assets/img/products/piglets/Preasado/Packaging/Cochifrito.jpg",
            "assets/img/products/piglets/Preasado/Producto/Cochifrito asado envasado_Tabladillo 1.jpg"
        ]
    },
    {
        id: "piglet-chips-pre-roasted",
        category: "piglets",
        title: "Pre-Roasted Suckling Pig Chips (Chips de Cochinillo)",
        description: "Gourmet crispy suckling pig crackling chips for appetizers & snacking",
        thumb: "assets/img/products/piglets/Preasado/Packaging/Chips.jpg",
        gallery: [
            "assets/img/products/piglets/Preasado/Packaging/Chips.jpg",
            "assets/img/products/piglets/Preasado/Producto/Chips asado envasado_Tabladillo 1.jpg"
        ]
    },
    {
        id: "piglet-can-pre-roasted",
        category: "piglets",
        title: "Suckling Pig Roast ¡Al Momento! (Lata)",
        description: "Ambient shelf-stable gourmet suckling pig confit roast in a can",
        thumb: "assets/img/products/piglets/Preasado/Packaging/lata cochinillo al momento.jpg",
        gallery: [
            "assets/img/products/piglets/Preasado/Packaging/lata cochinillo al momento.jpg",
            "assets/img/products/piglets/Preasado/Producto/lata cochinillo al momento 2.jpg"
        ]
    }
];
