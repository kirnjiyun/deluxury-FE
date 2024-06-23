import { css } from "@emotion/react";

const ProductCard = ({ product }) => {
    return (
        <div css={styles.card}>
            <div css={styles.imageContainer}>
                <img
                    src={product.image}
                    alt={product.name}
                    css={styles.image}
                />
                <div css={styles.overlay}>
                    <div css={styles.overlayText}>
                        <p>{product.brand}</p>
                        <p>{product.name}</p>
                        <p>
                            {product.category.main} - {product.category.sub}
                        </p>
                    </div>
                </div>
            </div>
            <p css={styles.price}>₩{product.price.toFixed(2)}</p>
        </div>
    );
};

const styles = {
    card: css`
        position: relative;
        width: 200px;
        margin: 20px;
        &:hover .overlay {
            opacity: 1;
        }
    `,
    imageContainer: css`
        position: relative;
    `,
    image: css`
        width: 100%;
        height: auto;
    `,
    overlay: css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `,
    overlayText: css`
        text-align: center;
    `,
    price: css`
        text-align: center;
        margin-top: 10px;
    `,
};

export default ProductCard;
