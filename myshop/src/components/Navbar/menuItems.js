// hardCodeItems.js
import React from "react";
import { Column } from "./NavbarStyles";

export const menuItems = [
    {
        label: "MEN",
        content: (
            <>
                <Column>
                    <h3>의류</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">아우터</a>
                    <a href="#">상의</a>
                    <a href="#">하의</a>
                    <a href="#">홈웨어</a>
                    <a href="#">이너웨어</a>
                </Column>
                <Column>
                    <h3>가방</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">크로스백</a>
                    <a href="#">웨이스트백</a>
                    <a href="#">토트백</a>
                    <a href="#">백팩</a>
                    <a href="#">솔더백</a>
                    <a href="#">랩탑백</a>
                </Column>
                <Column>
                    <h3>신발</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">스니커즈</a>
                    <a href="#">로퍼</a>
                    <a href="#">구두</a>
                    <a href="#">부츠</a>
                    <a href="#">샌들</a>
                    <a href="#">슈즈 액세서리</a>
                </Column>
                <Column>
                    <h3>액세서리</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">지갑,카드케이스</a>
                    <a href="#">모자</a>
                    <a href="#">시계</a>
                    <a href="#">아이웨어</a>
                    <a href="#">넥타이</a>
                    <a href="#">벨트</a>
                </Column>
            </>
        ),
    },
    {
        label: "WOMEN",
        content: (
            <>
                <Column>
                    <h3>의류</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">상의</a>
                    <a href="#">바지</a>
                    <a href="#">원피스</a>
                    <a href="#">스커트</a>
                    <a href="#">점프수트</a>
                    <a href="#">아우터</a>
                    <a href="#">이너웨어</a>
                </Column>
                <Column>
                    <h3>가방</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">솔더백</a>
                    <a href="#">크로스백</a>
                    <a href="#">토트백</a>
                    <a href="#">에코,캔버스백</a>
                    <a href="#">백팩</a>
                    <a href="#">클러치</a>
                    <a href="#">파우치</a>
                </Column>
                <Column>
                    <h3>신발</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">플랫,로퍼</a>
                    <a href="#">부츠</a>
                    <a href="#">펌프스</a>
                    <a href="#">샌들</a>
                    <a href="#">슬리퍼,뮬</a>
                    <a href="#">스니커즈</a>
                </Column>
                <Column>
                    <h3>액세서리</h3>
                    <a href="#">ALL</a>
                    <a href="#">NEW</a>
                    <a href="#">주얼리</a>
                    <a href="#">모자</a>
                    <a href="#">시계</a>
                    <a href="#">지갑,카드케이스</a>
                    <a href="#">아이웨어</a>
                    <a href="#">벨트</a>
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
