import React from 'react'
import { useParams } from 'react-router-dom';

import SectionTitle from '../components/SectionTitle'

const productsList = [{
    "id": 1, 
    "imageUrl":"assets/images/shoes2.png", "name":"Shoes", "price":"120.00"
},
{
    "id": 2, "imageUrl":"assets/images/shoes3.png", "name":"Short Openwork Cardigan", "price":"120.00"
},
{
    "id": 3, "imageUrl":"assets/images/shoes4.png", "name":"Short Openwork Cardigan", "price":"120.00"
},
{
    "id": 4, "imageUrl":"assets/images/shoes5.png", "name":"Short Openwork Cardigan", "price":"120.00"
},
{
    "id": 5, "imageUrl":"assets/images/tisat1.png", "name":"Short Openwork Cardigan", "price":"120.00"
},
{
    "id": 6, "imageUrl":"assets/images/tisat2.png", "name":"Short Openwork Cardigan", "price":"120.00"
},
{
    "id": 7, "imageUrl":"assets/images/tisat3.png", "name":"Short Openwork Cardigan", "price":"120.00"
},
{
    "id": 8, "imageUrl":"assets/images/tisat4.png", "name":"Short Openwork Cardigan", "price":"120.00"
},{
    "id": 9, "imageUrl":"assets/images/tisat5.png", "name":"T-shirt", "price":"120.00"
},{
    "id": 10, "imageUrl":"assets/images/mix1.png", "name":"Short Openwork Cardigan", "price":"120.00"
},{
    "id": 11, "imageUrl":"assets/images/mix2.png", "name":"Short Openwork Cardigan", "price":"120.00"
},{
    "id": 12, "imageUrl":"assets/images/mix3.png", "name":"Short Openwork Cardigan", "price":"120.00"
},{
    "id": 13, "imageUrl":"assets/images/mix4.png", "name":"Short Openwork Cardigan", "price":"120.00"
},{
    "id": 14, "imageUrl":"assets/images/mix5.png", "name":"Short Openwork Cardigan", "price":"120.00"
}];

function SingleProduct() {

    const pageId = useParams().id;
    const foundProduct = productsList.find((product) => {
        if(product.id === pageId) {
            return true;
        }

        return false;
    })

    return (
        <div id="project" className="project">
            <div className="container">
                <SectionTitle 
                    title={foundProduct.name}
                />
                <div className="row">
                    <div className="col-md-12">
                        <div className="product_main">
                            {`$ ${foundProduct.price}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default SingleProduct