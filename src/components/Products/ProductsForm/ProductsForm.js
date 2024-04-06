import { useState } from 'react';
import useStore from '../../../store';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductsForm = () => {
    const params = useParams();       // хук, с помощью которого можно получить параметры из адресной строки 

    const products = useStore((state) => state.products);
    let editedProduct = products.filter(product => product.id === +params.id)[0]    // +<строка> - перевод к типу данных число

    const addProduct = useStore((state) => state.addProduct);
    const delProduct = useStore((state) => state.delProduct);

    const [item, setItem] = useState({name:  editedProduct?.name, 
                                      img:   editedProduct?.img, 
                                      price: editedProduct?.price});
    const navigate = useNavigate();

    function addItem() {
        delProduct(+params.id)     // При желании можно сделать отдельный метод на редактирование в сторе
                                   // Можно накинуть проверку на удаление, но и без этого работает
        addProduct({id: Date.now(), ...item})
        navigate('/products');
    }

    return (
        <div className='m-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Название</Form.Label>
                <Form.Control type="text" value={item?.name} onChange={(e) => setItem({...item, name: e.target.value})}/>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Картинка</Form.Label>
                <Form.Control type="text" value={item?.img} onChange={(e) => setItem({...item, img: e.target.value})}/>  
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Цена</Form.Label>
                <Form.Control type="text" value={item?.price} onChange={(e) => setItem({...item, price: e.target.value})}/>
            </Form.Group>
            <Button variant="primary" onClick={addItem}>Сохранить</Button>
        </div>
    );
}

export default ProductsForm;
