function WishList({shopList}) {
    return <div>
        <h4>Wish List</h4>
        <ul style={{listStyleType: 'none'}}>
            {shopList.map(el => <li key={el.id}>{el.brand} {el.model} ({el.price.toFixed(2)}$)</li>)}
        </ul>
    </div>
}

export default WishList;