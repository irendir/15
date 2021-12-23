import {Button, Card} from "react-bootstrap";

function Product({product, addToCart, removeFromCart, addToWishList}) {
    let originalPrice = <span className={'text-dark ml-2'}
                              style={{fontSize: '.9rem', textDecoration: 'line-through'}}>{product.originalPrice}$</span>
    return (<Card>
        <span style={{position: 'absolute', right: '1rem', top: '1rem', cursor: 'pointer'}} onClick={() => addToWishList(product.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-heart"
                 viewBox="0 0 16 16">
              <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
        </span>
        <Card.Img variant="top" src={product.imgSrc} />
        <Card.Body>
            <Card.Title>{product.brand} {product.model}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Card.Title className={"text-danger"}>{product.price.toFixed(2)}$
                {product.originalPrice ? originalPrice : ''}
            </Card.Title>
            {product.selected ? <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove from Cart</Button>
                : <Button variant="success" onClick={() => addToCart(product.id)}>Add to Cart</Button>}
        </Card.Body>
    </Card>)
}

export default Product;