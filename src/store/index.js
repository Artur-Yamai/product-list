import { createStore } from 'vuex'

export default createStore({
  state: {
    productList: [
      {
        id: 0, 
        imgSrc: 'data:image/jpeg;base64,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',
        title: 'а Наименование товара', 
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000
      },
      {
          id: 1, 
          imgSrc: 'data:image/jpeg;base64,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',
          title: 'б Наименование товара', 
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 20000
      },
      {
          id: 2,
          imgSrc: 'data:image/jpeg;base64,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',
          title: 'г Наименование товара', 
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 30000
      },
      {
          id: 3, 
          imgSrc: 'data:image/jpeg;base64,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',
          title: 'в Наименование товара', 
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 40000
      },
    ]
  },
  getters: {
    getProductList: state => state.productList
  },
  mutations: {
    setProductList(state, product) {
      state.productList.push(product)
    },

    removeProduct(state, id) {      
      const index = state.productList.findIndex(el => el.id === id);
      state.productList.splice(index,1)
    },

    toSortProductList(state, param) {
      switch (param) {
        case 'priceToMax':
          state.productList.sort((a,b) => a.price - b.price);
          break;
        case 'priceToMin':          
          state.productList.sort((a,b) => b.price - a.price);
          break;
        default:
          state.productList.sort((a, b) => a.title < b.title ? -1 : 1);
          break;
      }
    }
  }
})
