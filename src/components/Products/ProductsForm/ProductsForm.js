import { useState, useEffect } from 'react';
import useStore from '../../../store';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductsForm = () => {

    const { addProduct, delProduct, getProduct, products, updateProduct  } = useStore();



    const params = useParams();       // хук, с помощью которого можно получить параметры из адресной строки 

    let editedProduct = products.filter(product => product.id === +params.id)[0]    // +<строка> - перевод к типу данных число


    const [item, setItem] = useState({
        id: editedProduct?.id,
        name: editedProduct?.name,
        image: editedProduct?.image,
        price: editedProduct?.price
    });
    const navigate = useNavigate();

    function addItem() {
        if (editedProduct) {
            updateProduct(item)
        } else {
            addProduct(item)
        }
        navigate('/products');
        setTimeout(()=>getProduct(),100)
    }

    return (
        <div className='m-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Название</Form.Label>
                <Form.Control type="text" value={item?.name} onChange={(e) => setItem({ ...item, name: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Картинка</Form.Label>
                <Form.Control type="text" value={item?.image} onChange={(e) => setItem({ ...item, image: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Цена</Form.Label>
                <Form.Control type="text" value={item?.price} onChange={(e) => setItem({ ...item, price: e.target.value })} />
            </Form.Group>
            <Button variant="primary" onClick={addItem}>Сохранить</Button>
        </div>
    );
}

export default ProductsForm;
