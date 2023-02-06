import { useEffect, useState } from "react";
import NewsList from "../components/news/NewsList";
import ProductCategories from "../components/ProductCategories";
import ProductBox from "../components/products/ProductBox";
import SectionTitle from "../components/SectionTitle";

const productCategories = [{
    id: 1,
    color: 'yellow_bg',
    imageUrl: 'assets/images/shoes.png',
    name: 'Shoes'
},{
    id: 2,
    color: 'bluedark_bg',
    imageUrl: 'assets/images/underwear.png',
    name: 'Underwear'
},{
    id: 3,
    color: 'yellow_bg',
    imageUrl: 'assets/images/pent.png',
    name: 'Pante & socks'
},{
    id: 4,
    color: 'bluedark_bg',
    imageUrl: 'assets/images/t_shart.png',
    name: 'T-shirt & tankstop'
},{
    id: 5,
    color: 'yellow_bg',
    imageUrl: 'assets/images/jakit.png',
    name: 'cardigans & jumpers'
},{
    id: 6,
    color: 'bluedark_bg',
    imageUrl: 'assets/images/helbet.png',
    name: 'Top & hat'
}];

const productsList = [{
    "id": 1, 
    "imageUrl":"assets/images/shoes2.png", "name":"Short Openwork Cardigan", "price":"120.00"
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
    "id": 9, "imageUrl":"assets/images/tisat5.png", "name":"Short Openwork Cardigan", "price":"120.00"
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

export default function Home() {

    return (
        <>
            {/* Banner Section */}
            <section className="banner_main">
                <div className="container">
                    <div className="row">
                    <div className="col-md-8">
                        <div className="text-bg">
                            <h1> <span className="blodark"> Romofyi </span> <br />Trands 2019</h1>
                            <p>A huge fashion collection for ever </p>
                            <a className="read_more" href="#">Shop now</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ban_img">
                            <figure><img src="assets/images/ban_img.png" alt="#"/></figure>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* Six Box Section - product Categories */}
            <div className="six_box">
                <div className="container-fluid">
                    <div className="row">
                        {productCategories.map(function(item){
                            return (
                                <ProductCategories
                                    key={item.id}
                                    color={item.color}
                                    image={item.imageUrl}
                                    name={item.name}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* products Section */}
            <div id="project" className="project">
                <div className="container">
                    <SectionTitle 
                        title="Featured Products"
                    />
                    <div className="row">
                        <div className="product_main">
                            
                            {productsList.map((product) => {
                                return (
                                    <ProductBox
                                        key={product.id} 
                                        name={product.name}
                                        price={product.price}
                                        imageUrl={product.imageUrl}
                                    />
                                )
                            })}
                            
                            
                            <div className="col-md-12">
                                <a className="read_more" href="#">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fashion Section */}
            <div className="fashion">
                <img src="assets/images/fashion.jpg" alt="#"/>
            </div>
            {/* News Section */}
            <div className="news">
                <div className="container">
                    <SectionTitle 
                        title="Latest News"
                    />
                    <NewsList />
                </div>
            </div>
            {/* NewsLetter Section */}
            <div  className="newslatter">
                <div className="container">
                    <div className="row d_flex">
                    <div className="col-md-5">
                        <h3 className="neslatter">Subscribe To The Newsletter</h3>
                    </div>
                    <div className="col-md-7">
                        <form className="news_form">
                            <input className="letter_form" placeholder=" Enter your email" type="text" name="Enter your email" />
                            <button className="sumbit">Subscribe</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            {/* Three Box Section */}
            <div className="three_box">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="gift_box">
                            <i><img src="assets/images/icon_mony.png" /></i>
                            <span>Money Back</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gift_box">
                            <i><img src="assets/images/icon_gift.png" /></i>
                            <span>Special Gift</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gift_box">
                            <i><img src="assets/images/icon_car.png" /></i>
                            <span>Free Shipping</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}