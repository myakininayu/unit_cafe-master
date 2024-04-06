import Table from 'react-bootstrap/Table';
import Product from './Product/Product';
import useStore from '../../store';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Products() {
  const products = useStore((state) => state.products);
  return (
    <div>
        <Table responsive bordered>
            <thead class="table-dark">
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Название</th>
                    <th scope="col">Фото</th>
                    <th scope="col">Цена за штуку</th>
                    <th scope="col">Редактирование</th> 
                </tr>
            </thead>
            <tbody>
                {products.map((prod) => { return <Product key={prod.id} prodInfo={prod}></Product> })}
            </tbody>     
        </Table>
        <Link className="d-grid gap-2" to="/products_form"><Button variant="primary" type="submit">Создать</Button></Link>
    </div>
  );
}

export default Products;
