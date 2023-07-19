export const datosProductos = [
  {
    id: 1,
    nombre: "Pan de Molde",
    precio: 300,
    categoria: "Salado",
    cardImg:
      "https://res.cloudinary.com/djvnzpw39/image/upload/v1687292095/IntegradorReact/products/pan_molde_zicgnb.png",
  },

  {
    id: 2,
    nombre: "Pan Varilla",
    precio: 450,
    categoria: "Salado",
    cardImg:
      "https://res.cloudinary.com/djvnzpw39/image/upload/v1687292284/IntegradorReact/products/pan_varrilla_lhfnvi.png",
  },

  {
    id: 3,
    nombre: "Medialunas",
    precio: 260,
    categoria: "Dulce",
    cardImg:
      "https://res.cloudinary.com/djvnzpw39/image/upload/v1687292384/IntegradorReact/products/mediaLunas_gyqrqu.png",
  },

  {
    id: 4,
    nombre: "Budin de Manzana",
    precio: 640,
    categoria: "Dulce",
    cardImg:
      "https://res.cloudinary.com/djvnzpw39/image/upload/v1687292386/IntegradorReact/products/budin_manzana_hclrzi.png",
  },

  {
    id: 5,
    nombre: "Croissant",
    precio: 500,
    categoria: "Dulce",
    cardImg:
      "https://res.cloudinary.com/djvnzpw39/image/upload/v1687292387/IntegradorReact/products/croissant_k9cw1m.png",
  },

  {
    id: 6,
    nombre: "Pan de frutos Secos",
    precio: 870,
    categoria: "Salado",
    cardImg:
      "https://res.cloudinary.com/djvnzpw39/image/upload/v1687292386/IntegradorReact/products/pan_frutosSecos_ec1som.png",
  },

  {
    id: 7,
    nombre: "Chipas",
    precio: 770,
    categoria: "Salado",
    cardImg:
      "https://res.cloudinary.com/djvnzpw39/image/upload/v1687292385/IntegradorReact/products/chipa_rxlmbm.png",
  },

  {
    id: 8,
    nombre: "Pan con chocolate",
    precio: 1070,
    categoria: "Dulce",
    cardImg:
      "https://res.cloudinary.com/djvnzpw39/image/upload/v1687292384/IntegradorReact/products/pan_de_chocolate_l7d1j7.png",
  },

  {
    id: 9,
    nombre: "Budin con frutas",
    precio: 610,
    categoria: "Dulce",
    cardImg:
      "https://res.cloudinary.com/djvnzpw39/image/upload/v1687292387/IntegradorReact/products/budin_uoc7c1.png",
  },

  {
    id: 10,
    nombre: "Pan de Masa Madre",
    precio: 1800,
    categoria: "Integral",
    cardImg:
      "https://res.cloudinary.com/djvnzpw39/image/upload/v1687292387/IntegradorReact/products/pan_masa_madre_aympop.png",
  },
];

export const products = datosProductos.reduce((acc, product) => {
  if (!acc[product.categoria]) {
    acc[product.categoria] = [];
  }

  acc[product.categoria] = [...acc[product.categoria], product];

  return acc;
}, {});
