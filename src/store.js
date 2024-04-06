import {create} from "zustand";

const useStore = create((set) => ({
    products : [
        { id: 1, name: 'Наполеон', img: './image/tort_napoleon.jpg', price: 500 },
        { id: 2, name: 'Торт "Графские развалины"', img: './image/cake_graf_razvalini.jpg', price: 520 },
        { id: 3, name: 'Пирожное "Птичье молоко"', img: './image/ptitsie_moloko.webp', price: 50 },
        { id: 4, name: 'Пирожное "Корзиночка"', img: './image/korzinka.jpg', price: 50 }
    ],
    addProduct: (prod) => set(state => (
        {
            products: [
                ...state.products,
                prod
            ]
        }
    )),
    delProduct: (idDel) => set(state => (
        {
            products: state.products.filter(pr => pr.id !== idDel)
        }
    ))
}))

export default useStore;


