import img1 from "../../assets/images/products/produit1.jpg";
import img2 from "../../assets/images/products/produit2.jpg";
import img3 from "../../assets/images/products/produit3.jpg";
import img4 from "../../assets/images/products/produit4.jpg";
import img5 from "../../assets/images/products/produit5.jpg";
import img6 from "../../assets/images/products/produit6.jpg";
import img7 from "../../assets/images/products/produit7.jpg";
import img8 from "../../assets/images/products/produit8.jpg";
import img9 from "../../assets/images/products/produit9.jpg";

const product_card = [
  {
    _id: "1",
    name: "Graines de Chia Bio",
    category: "BIO",
    image: img1,
    price: 17.5,
    countInStock: 11,
    brand: "Santiveri",
    rating: 4.5,
    numReviews: 10,
    description:
      "La graine de chia est la Reine des graines. C’est un super-aliment aux propriétés nutritionnelles particulières et remarquables. La graine de chia est extrêmement riche en acides gras essentiels de type Oméga 3 et en Vitamine E. Elle possède une teneur élevée en fibres record ce qui lui confère un grand pouvoir rassasiant une fois hydratée. 5 g de Chia couvrent 50% des apports journaliers recommandés en oméga 3.",
  },
  {
    _id: "2",
    name: "Flocons d’Avoine",
    category: "PROTEINES",
    image: img2,
    price: 45.0,
    countInStock: 20,
    brand: " impact sport nutrition",
    rating: 4.0,
    numReviews: 10,
    description:
      "L’Avoine est une céréale très appréciée par bon nombre de sportifs et fait partie intégrante de leur alimentation. C’est une céréale complète sur le plan nutritionnel et très digeste. Les protéines qu’elle renferme sont de très bonne qualité mais l’avoine est essentiellement connu pour sa richesse en fibres solubles (les bêta-glucanes) qui favorisent une bonne fonction digestive. Nos flocons d’avoine sont très pratiques et faciles à utiliser. Ce sont de petites graines précuites à la vapeur qui s’incorporent très facilement dans toutes sortes de préparations et collations.",
  },
  {
    _id: "3",
    name: "Galettes de Riz Intégral Bio",
    category: "BIO",
    image: img3,
    price: 7.5,
    countInStock: 0,
    brand: "Santiveri",
    rating: 3,
    numReviews: 20,
    description:
      "Nos galettes sont élaborées à partir d’un grain de riz intégral. Elles sont fabriquées selon un process de fabrication qui préservent toutes les qualités nutritionnelles du grain de riz. Tous les ingrédients sont d’origine 100% biologique. Ces galettes sont l’alternative idéale au pain pour se composer des en-cas healthy au petit-déjeuner ou en collation. Elles peuvent être consommées sucrées avec de la confiture diététique ou du miel ou salées avec du fromage frais et des fines herbes.",
  },
  {
    _id: "4",
    name: "Galettes de 6 Céréales Bio",
    category: "BIO",
    image: img4,
    price: 9.2,
    countInStock: 15,
    brand: "Santiveri",
    rating: 3.5,
    numReviews: 14,
    description:
      "Nos galettes proviennent d’un mélange de 6 céréales complètes d’origine 100% biologique. Elles sont élaborées à partir d’un process de fabrication qui préservent toutes les qualités nutritionnelles des grains de céréales (riz, avoine, maïs, seigle, orge millet). Ces galettes sont l’alternative idéale au pain pour se composer des en-cas healthy au petit-déjeuner ou en collation.",
  },
  {
    _id: "5",
    name: "Crackers Blé Intégral",
    category: "Sans Sucre",
    image: img5,
    price: 11.5,
    countInStock: 5,
    brand: "MiSURA",
    rating: 4.5,
    numReviews: 7,
    description:
      "Les Crackers FIBREXTRA sont idéals pour remplacer les produits de boulangerie standards. Élaborés à partir d’une farine de blé intégrale et garantis sans sucres ajoutés et sans huile de palme, ces en-cas ultra-sain sont parfaits pour accompagner vos plats, vos légumes ou encore vos crudités. Ils se dégustent natures ou accompagnés en version salée ou sucrée. Les crackers FIBREXTRA conviennent parfaitement aux personnes qui suivent un régime de perte de poids ou qui souhaitent simplement entretenir leur ligne.",
  },
  {
    _id: "6",
    name: "Farine Mix C Sans Gluten",
    category: "SANS GLUTEN",
    image: img6,
    price: 15.9,
    countInStock: 12,
    brand: "Schär",
    rating: 4,
    numReviews: 15,
    description:
      "Mix C est une farine sans gluten de qualité supérieure. Sa texture tendre en fait une farine idéale pour toutes sortes de pâtisseries maison. Simple à utiliser, Mix C vous permet de réaliser de délicieuses gourmandises sans gluten.",
  },
  {
    _id: "7",
    name: "NutriMemo Oméga 3",
    category: "HERBES & PLANTES",
    image: img7,
    price: 38.5,
    countInStock: 150,
    brand: "NutriCeutik",
    rating: 4.5,
    numReviews: 11,
    description:
      "Les oméga 3 sont indispensables au bon fonctionnement de l’organisme, ils participent au bien-être cérébral, à la santé cardiovasculaire et à l’anabolisme protéique. Les oméga 3 font partie intégrante de la nutrition des sportifs. Non synthétisés par l’organisme, ils doivent obligatoirement être apportés par l’alimentation. NutriMemo est une solution 100% naturelle clé en mains. Chaque capsule apporte près de 360 mg d’oméga 3 sous forme de EPA/DHA, deux métabolites actifs. La formule est enrichie en vitamine E d’origine naturelle pour offrir un produit complet.",
  },
  {
    _id: "8",
    name: "Premium Whey",
    category: "PROTEINES",
    image: img8,
    price: 145,
    countInStock: 120,
    brand: "impact sport nutrition",
    rating: 5,
    numReviews: 15,
    description:
      "La caséine micellaire est la forme de caséine la plus pure et la plus efficace. Elle est à la caséine ce que l’isolat est à la whey. C’est une lacto-protéine à digestion lente obtenue par ultrafiltration à partir de lait. C’est une protéine de haute valeur biologique à action anti-catabolisante. Elle protège les muscles en prévenant le catabolisme nutritionnel entre 2 repas ou pendant le sommeil en délivrant progressivement les nombreux acides aminés qui la composent. C’est la protéine de la nuit par excellence mais c’est également la protéine qu’il faut privilégier dans les phases de sèche. Cette caséine micellaire native et non dénaturée conserve toutes ses qualités nutritionnelles originelles.",
  },
  {
    _id: "9",
    name: "Vinaigre de Cidre Bio",
    category: "BIO",
    image: img9,
    price: 12.45,
    countInStock: 50,
    brand: "Santiveri",
    rating: 3.75,
    numReviews: 15,
    description:
      "Le vinaigre de cidre possède de nombreuses vertus thérapeutiques et bienfaits sur la santé. Il agit favorablement sur la digestion en renforçant la flore intestinale. Son contenu riche en sels minéraux et oligo-éléments en fait un excellent détoxificateur de l’organisme.",
  },
];
export default product_card;
