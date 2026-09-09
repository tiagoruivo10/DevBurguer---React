export const PRODUCTS_DETAILS = {
  // === HAMBÚRGUERES ===
  'Classic Burger': {
    description:
      'Smash bovino artesanal suculento, queijo cheddar derretido, fatias de tomate selecionado, alface americana fresca e molho especial da casa no pão brioche amanteigado.',
    isBurger: true,
    ingredients: [
      'Pão brioche selado na manteiga',
      'Smash bovino artesanal (150g)',
      'Queijo cheddar fatiado',
      'Alface americana crocante',
      'Tomate fresco em rodelas',
      'Molho especial do chef',
    ],
    removable: ['Sem alface', 'Sem tomate', 'Sem queijo', 'Molho à parte'],
    highlights: ['Pão Brioche Selado', 'Carne 100% Bovina', 'Salada Fresca'],
  },

  'Double Cheese': {
    description:
      'Para os amantes de queijo: 2 carnes smash bovinas artesanais prensadas na chapa quente, cheddar duplo derretendo e nosso molho secreto da casa.',
    isBurger: true,
    ingredients: [
      'Pão brioche fofinho',
      '2x Smash bovino artesanal (total 180g)',
      'Queijo cheddar duplo derretido',
      'Molho secreto da casa',
    ],
    removable: ['Sem queijo', 'Molho à parte'],
    highlights: ['Duplo Smash', 'Cheddar em Dobro', 'Mais Vendido'],
  },

  'Bacon Supreme': {
    description:
      'O queridinho da galera! Smash bovino suculento, generosa camada de cheddar cremoso, tiras fartas de bacon extremamente crocante e molho barbecue defumado.',
    isBurger: true,
    ingredients: [
      'Pão brioche com gergelim',
      'Smash bovino artesanal (160g)',
      'Cheddar cremoso especial',
      'Bacon crocante em tiras fartas',
      'Molho barbecue defumado',
    ],
    removable: ['Sem bacon', 'Sem queijo', 'Molho à parte'],
    highlights: ['Bacon Super Crocante', 'Cheddar Cremoso', 'Defumado'],
  },

  'Cheddar Bacon': {
    description:
      'Combinação perfeita e agridoce: smash bovino nobre, blend de queijo cheddar, bacon crocante em cubos e cebola caramelizada artesanal reduzida no açúcar mascavo.',
    isBurger: true,
    ingredients: [
      'Pão australiano macio',
      'Smash bovino artesanal (160g)',
      'Blend de cheddar cremoso',
      'Bacon crocante em cubos',
      'Cebola caramelizada artesanal',
    ],
    removable: ['Sem cebola caramelizada', 'Sem bacon', 'Sem queijo'],
    highlights: ['Cebola Caramelizada', 'Bacon em Cubos', 'Pão Australiano'],
  },

  'Crispy Chicken': {
    description:
      'Filé de sobrecoxa de frango marinado em especiarias, empanado na farinha crocante panko, queijo derretido, alface fresca e maionese verde artesanal.',
    isBurger: true,
    ingredients: [
      'Pão brioche selado',
      'Frango empanado super crocante (160g)',
      'Queijo prato derretido',
      'Alface americana fresca',
      'Maionese verde da casa com ervas',
    ],
    removable: ['Sem alface', 'Sem queijo', 'Maionese à parte'],
    highlights: ['Empanamento Panko', 'Super Crocante', 'Maionese Verde'],
  },

  'BBQ Burger': {
    description:
      'Blend bovino alto e suculento grelhado na brasa, queijo cheddar fatiado, bacon crocante, montanha de cebola crispy dourada e molho barbecue rústico.',
    isBurger: true,
    ingredients: [
      'Pão brioche tostado',
      'Smash bovino artesanal (160g)',
      'Queijo cheddar fatiado',
      'Bacon crocante',
      'Cebola crispy dourada artesanal',
      'Molho barbecue rústico',
    ],
    removable: ['Sem cebola crispy', 'Sem bacon', 'Barbecue à parte'],
    highlights: ['Cebola Crispy', 'Molho Barbecue Rústico', 'Sabor Brasa'],
  },

  // === ACOMPANHAMENTOS ===
  'Batata Frita': {
    description:
      'Porção individual de batatas fritas palito sequinhas, douradas e crocantes, temperadas com leve toque de sal marinho e páprica suave.',
    isBurger: false,
    ingredients: ['Batatas selecionadas', 'Sal marinho', 'Ervas finas'],
    removable: ['Sem sal', 'Sem tempero'],
    highlights: ['Crocante & Sequinha', 'Feita na Hora'],
  },

  'Batata Cheddar & Bacon': {
    description:
      'Porção generosa de batatas fritas crocantes cobertas por uma cascata de cheddar cremoso quente e cubos de bacon crocante dourados.',
    isBurger: false,
    ingredients: [
      'Batatas fritas rústicas',
      'Cheddar cremoso quente',
      'Cubos de bacon crocante',
    ],
    removable: ['Bacon à parte', 'Cheddar à parte'],
    highlights: ['Cascata de Cheddar', 'Bacon Farto', 'Ideal para Compartilhar'],
  },

  'Onion Rings': {
    description:
      'Anéis generosos de cebola fresca empanados na farinha panko temperada, fritos até atingirem a textura dourada perfeita. Acompanha molho da casa.',
    isBurger: false,
    ingredients: ['Cebolas frescas em anéis', 'Empanamento panko crocante', 'Molho da casa'],
    removable: ['Molho à parte'],
    highlights: ['Empanamento Especial', '100% Crocante'],
  },

  'Batata Loaded': {
    description:
      'A versão turbinada: batatas crocantes com camada dupla de cheddar, bacon crocante, cebolinha fresca picada e molho especial da casa.',
    isBurger: false,
    ingredients: [
      'Batatas rústicas crocantes',
      'Cheddar cremoso duplo',
      'Bacon crocante em cubos',
      'Cebolinha fresca picada',
      'Molho especial do chef',
    ],
    removable: ['Sem cebolinha', 'Bacon à parte', 'Molho à parte'],
    highlights: ['Super Recheada', 'Cheddar Duplo'],
  },

  'Nuggets Crocantes': {
    description:
      '8 unidades de nuggets de peito de frango 100% selecionado, empanados em crosta dourada e crocante. Acompanha molho barbecue ou maionese verde.',
    isBurger: false,
    ingredients: ['8x Nuggets de frango selecionado', 'Molho à escolha'],
    removable: ['Molho à parte'],
    highlights: ['8 Unidades', 'Frango Nobre'],
  },

  // === SOBREMESAS ===
  'Brownie Supreme': {
    description:
      'Brownie artesanal de chocolate nobre 50% cacau, servido quentinho com uma bola generosa de sorvete de baunilha e calda de chocolate belga.',
    isBurger: false,
    ingredients: [
      'Brownie de chocolate artesanal (quentinho)',
      '1x Bola de sorvete de baunilha cremosa',
      'Calda de chocolate belga',
    ],
    removable: ['Sem calda de chocolate', 'Calda à parte'],
    highlights: ['Quente com Gelado', 'Chocolate Belga'],
  },

  'Brownie com Nutella': {
    description:
      'Delicioso brownie de chocolate coberto com uma camada farta de Nutella pura original e servido com sorvete de creme de baunilha.',
    isBurger: false,
    ingredients: [
      'Brownie de chocolate macio',
      'Nutella original pura',
      'Sorvete de creme artesanal',
    ],
    removable: ['Nutella à parte'],
    highlights: ['Nutella Original', 'Super Recheado'],
  },

  'Milkshake de Ovomaltine': {
    description:
      'Milkshake super cremoso batido com sorvete artesanal, calda de chocolate e muita crocância de flocos de Ovomaltine, finalizado com chantilly.',
    isBurger: false,
    ingredients: [
      'Sorvete artesanal de creme',
      'Flocos crocantes de Ovomaltine',
      'Calda de chocolate',
      'Chantilly cremoso',
    ],
    removable: ['Sem chantilly', 'Sem calda'],
    highlights: ['Crocância do Ovomaltine', 'Super Cremoso'],
  },

  'Petit Gateau': {
    description:
      'Clássico bolinho francês de chocolate meio amargo com casca macia e recheio cremoso que escorre ao cortar, servido com sorvete de baunilha.',
    isBurger: false,
    ingredients: [
      'Bolinho de chocolate com recheio quente derretido',
      'Sorvete artesanal de baunilha',
      'Calda de frutas vermelhas ou chocolate',
    ],
    removable: ['Sem calda'],
    highlights: ['Recheio Derretido', 'Sobremesa Clássica'],
  },

  // === BEBIDAS ===
  'Coca-Cola': {
    description: 'Refrigerante Coca-Cola em lata 350 ml, servido trincando de gelado.',
    isBurger: false,
    ingredients: ['Lata 350 ml'],
    highlights: ['Servido Gelado'],
  },
  'Coca-Cola Zero': {
    description: 'Refrigerante Coca-Cola Zero Açúcar em lata 350 ml, servido super gelado.',
    isBurger: false,
    ingredients: ['Lata 350 ml - Zero Açúcar'],
    highlights: ['Zero Açúcar', 'Servido Gelado'],
  },
  'Guaraná Antarctica': {
    description: 'Refrigerante Guaraná Antarctica em lata 350 ml, refrescante e servido bem gelado.',
    isBurger: false,
    ingredients: ['Lata 350 ml'],
    highlights: ['Refrescante', 'Servido Gelado'],
  },
  'Fanta Laranja': {
    description: 'Refrigerante Fanta Laranja em lata 350 ml, sabor cítrico vibrante servido gelado.',
    isBurger: false,
    ingredients: ['Lata 350 ml'],
    highlights: ['Sabor Laranja', 'Servido Gelado'],
  },
  'Água Mineral': {
    description: 'Garrafa de água mineral límpida sem gás 500 ml.',
    isBurger: false,
    ingredients: ['Garrafa 500 ml'],
    highlights: ['Sem Gás'],
  },
  'Milkshake de Chocolate': {
    description:
      'Milkshake cremoso preparado com sorvete artesanal de chocolate belga, calda especial e generosa camada de chantilly.',
    isBurger: false,
    ingredients: [
      'Sorvete artesanal de chocolate',
      'Leite integral cremoso',
      'Calda de chocolate',
      'Chantilly',
    ],
    removable: ['Sem chantilly', 'Sem calda'],
    highlights: ['Chocolate Belga', '500 ml'],
  },
  'Milkshake de Oreo': {
    description:
      'Milkshake de baunilha batido com generosos pedaços de biscoito Oreo crocante, finalizado com chantilly e farelo de biscoito.',
    isBurger: false,
    ingredients: [
      'Sorvete artesanal de baunilha',
      'Biscoitos Oreo triturados',
      'Chantilly',
    ],
    removable: ['Sem chantilly'],
    highlights: ['Pedaços de Oreo', '500 ml'],
  },
};

export function getProductDetails(productName = '') {
  const cleanName = (productName || '').trim();

  // Busca direta pelo nome exato
  if (PRODUCTS_DETAILS[cleanName]) {
    return PRODUCTS_DETAILS[cleanName];
  }

  // Busca aproximada caso haja pequenas diferenças
  const foundKey = Object.keys(PRODUCTS_DETAILS).find((key) =>
    cleanName.toLowerCase().includes(key.toLowerCase()) ||
    key.toLowerCase().includes(cleanName.toLowerCase()),
  );

  if (foundKey) {
    return PRODUCTS_DETAILS[foundKey];
  }

  // Fallback genérico caso seja um produto novo cadastrado futuramente
  return {
    description: 'Produto artesanal preparado com ingredientes selecionados e muito carinho.',
    isBurger: cleanName.toLowerCase().includes('burger') || cleanName.toLowerCase().includes('hamb'),
    ingredients: ['Ingredientes frescos da casa'],
    removable: [],
    highlights: ['Artesanal', 'Feito na Hora'],
  };
}
