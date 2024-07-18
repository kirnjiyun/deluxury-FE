import React from "react";
import { Column } from "./NavbarStyles";
import { Link } from "react-router-dom";

export const menuItems = [
    {
        label: "MEN",
        content: (
            <>
                <Column>
                    <h3>Clothes</h3>
                    <Link to="/men/clothes">ALL</Link>
                    <Link to="/men/clothes/outer">Outer</Link>
                    <Link to="/men/clothes/top">Top</Link>
                    <Link to="/men/clothes/pants">Bottom</Link>
                    <Link to="/men/clothes/homewear">Homewear</Link>
                    <Link to="/men/clothes/innerwear">Innerwear</Link>
                </Column>
                <Column>
                    <h3>Bags</h3>
                    <Link to="/men/bags">ALL</Link>
                    <Link to="/men/bags/crossbag">Crossbag</Link>
                    <Link to="/men/bags/waistbag">Waistbag</Link>
                    <Link to="/men/bags/totebag">Totebag</Link>
                    <Link to="/men/bags/backpack">Backpack</Link>
                    <Link to="/men/bags/shoulderbag">Shoulderbag</Link>
                    <Link to="/men/bags/laptopbag">Laptopbag</Link>
                </Column>
                <Column>
                    <h3>Shoes</h3>
                    <Link to="/men/shoes">ALL</Link>
                    <Link to="/men/shoes/sneakers">Sneakers</Link>
                    <Link to="/men/shoes/loafers">Loafers</Link>
                    <Link to="/men/shoes/formal">Formal</Link>
                    <Link to="/men/shoes/boots">Boots</Link>
                    <Link to="/men/shoes/sandals">Sandals</Link>
                    <Link to="/men/shoes/accessories">Accessories</Link>
                </Column>
                <Column>
                    <h3>Accessories</h3>
                    <Link to="/men/accessories">ALL</Link>
                    <Link to="/men/accessories/wallets">
                        Wallets & Card Cases
                    </Link>
                    <Link to="/men/accessories/hats">Hats</Link>
                    <Link to="/men/accessories/watches">Watches</Link>
                    <Link to="/men/accessories/eyewear">Eyewear</Link>
                    <Link to="/men/accessories/ties">Ties</Link>
                    <Link to="/men/accessories/belts">Belts</Link>
                </Column>
            </>
        ),
    },
    {
        label: "WOMEN",
        content: (
            <>
                <Column>
                    <h3>Clothes</h3>
                    <Link to="/women/clothes">ALL</Link>
                    <Link to="/women/clothes/top">Top</Link>
                    <Link to="/women/clothes/pants">Pants</Link>
                    <Link to="/women/clothes/dresses">Dresses</Link>
                    <Link to="/women/clothes/skirts">Skirts</Link>
                    <Link to="/women/clothes/jumpsuits">Jumpsuits</Link>
                    <Link to="/women/clothes/outer">Outer</Link>
                    <Link to="/women/clothes/innerwear">Innerwear</Link>
                </Column>
                <Column>
                    <h3>Bags</h3>
                    <Link to="/women/bags">ALL</Link>
                    <Link to="/women/bags/shoulderbag">Shoulderbag</Link>
                    <Link to="/women/bags/crossbag">Crossbag</Link>
                    <Link to="/women/bags/totebag">Totebag</Link>
                    <Link to="/women/bags/ecobag">Eco & Canvas Bags</Link>
                    <Link to="/women/bags/backpack">Backpack</Link>
                    <Link to="/women/bags/clutch">Clutch</Link>
                    <Link to="/women/bags/pouch">Pouch</Link>
                </Column>
                <Column>
                    <h3>Shoes</h3>
                    <Link to="/women/shoes">ALL</Link>
                    <Link to="/women/shoes/flats">Flats & Loafers</Link>
                    <Link to="/women/shoes/boots">Boots</Link>
                    <Link to="/women/shoes/pumps">Pumps</Link>
                    <Link to="/women/shoes/sandals">Sandals</Link>
                    <Link to="/women/shoes/slippers">Slippers & Mules</Link>
                    <Link to="/women/shoes/sneakers">Sneakers</Link>
                </Column>
                <Column>
                    <h3>Accessories</h3>
                    <Link to="/women/accessories">ALL</Link>
                    <Link to="/women/accessories/jewelry">Jewelry</Link>
                    <Link to="/women/accessories/hats">Hats</Link>
                    <Link to="/women/accessories/watches">Watches</Link>
                    <Link to="/women/accessories/wallets">
                        Wallets & Card Cases
                    </Link>
                    <Link to="/women/accessories/eyewear">Eyewear</Link>
                    <Link to="/women/accessories/belts">Belts</Link>
                </Column>
            </>
        ),
    },
    {
        label: "INTERIOR",
        content: (
            <>
                <Column>
                    <h3>가구,인테리어</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">침구</a>
                    <a href="#">홈패브릭</a>
                    <a href="#">가구</a>
                    <a href="#">조명</a>
                    <a href="#">홈데코</a>
                    <a href="#">가드닝</a>
                    <a href="#">홈프레그런스</a>
                    <a href="#">아트,디자인</a>
                    <a href="#">책,음반</a>
                    <a href="#">스테이셔너리</a>
                </Column>
            </>
        ),
    },
    {
        label: "KITCHEN",
        content: (
            <>
                <Column>
                    <h3>주방,생활</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">EXCLUSIVE</a>
                    <a href="#">청소,수납</a>
                    <a href="#">쿡웨어</a>
                    <a href="#">테이블웨어</a>
                    <a href="#">욕실</a>
                    <a href="#">반려동물</a>
                </Column>
            </>
        ),
    },
    {
        label: "ELECTRONICS",
        content: (
            <>
                <Column>
                    <h3>가전</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">영상가전</a>
                    <a href="#">주방가전</a>
                    <a href="#">세탁기,건조기</a>
                    <a href="#">청소기</a>
                    <a href="#">생활가전</a>
                    <a href="#">계절가전</a>
                    <a href="#">이미용가전</a>
                    <a href="#">건강가전</a>
                </Column>
            </>
        ),
    },
    {
        label: "DIGITAL",
        content: (
            <>
                <Column>
                    <h3>컴퓨터,디지털</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">음향기기</a>
                    <a href="#">모바일,웨어러블</a>
                    <a href="#">모바일 액세서리</a>
                    <a href="#">PC,노트북</a>
                    <a href="#">게임</a>
                    <a href="#">사진</a>
                    <a href="#">자동차용품,장난감</a>
                    <a href="#">스마트모빌리티</a>
                </Column>
            </>
        ),
    },
    {
        label: "BEAUTY",
        content: (
            <>
                <Column>
                    <h3>뷰티</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">스킨케어</a>
                    <a href="#">자연유래</a>
                    <a href="#">바디케어</a>
                    <a href="#">헤어케어</a>
                    <a href="#">메이크업</a>
                    <a href="#">네일,디자인타투</a>
                    <a href="#">향수</a>
                    <a href="#">여성용품</a>
                    <a href="#">뷰티기기,마스크</a>
                    <a href="#">남성뷰티</a>
                </Column>
            </>
        ),
    },
];
