import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import style from './Product.module.css'
import useStore from '../../../store';

const Product = (props) => {
  const delProduct = useStore((state) => state.delProduct);

  return (
    <tr>
        <th scope="row">{props.prodInfo.id}</th>
        <td>{props.prodInfo.name}</td>
        <td><Image className={style.img} src={props.prodInfo.img} alt="Торт"></Image></td>
        <td>{props.prodInfo.price}₽</td>
        <td min-height="200px">
          <div className="d-flex flex-row justify-content-center">
            <div className="d-flex flex-row justify-content-center">
              <Link to={`/products_form/${props.prodInfo.id}`}><Button variant="primary" type="submit">Изменить</Button></Link>
              <Button type="submit" variant="danger" onClick={() => delProduct(props.prodInfo.id)} class="btn btn-danger">Удалить</Button>
          </div>
          </div>
        </td>
    </tr>
  );
}

export default Product;
