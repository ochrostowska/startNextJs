// import { Buttonex } from "@/stories/Buttonex";
import { Fragment } from "@/components/Fragment";
import { LabeledGalleryItem } from "@/components/Gallery";
import { H1 } from "@/components/Heading";
import { Sznurex } from "@/components/Sznurex";
import { getProductsBasic } from "@/data/getProducts";
import { ProductBasic } from "@/data/types";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import { Head } from "@/layout/Head";
import { NavBar } from "@/layout/navbar";
import { getCloudinaryImagesData } from "@/services/cloudinary/cloudinaryApi";
import { getCloudinaryImageUrl } from "@/services/cloudinary/cloudinaryHelpers";
import { RealisationImage } from "@/services/cloudinary/types";
import { translate } from "@/translations";
import { useMemo, useState } from "react";
import styled from "styled-components";
import styles from "../../styles/Home.module.scss";

type Props = {
  productImages: RealisationImage[];
  productImagesObj: Record<string, RealisationImage[]>;
  products: ProductBasic[];
};

export default function RealisationsPage({
  productImages,
  productImagesObj,
  products,
}: Props) {
  const maxPhotoSize = useResponsiveValue(300, {
    tabPort: 230,
    tabLand: 200,
    desktop: 300,
    bigDesktop: 400,
  });

  const [productTypeFilter, setProductTypeFilter] = useState<string>();

  const realisationImagesToDisplay = useMemo(() => {
    if (!productTypeFilter) {
      return productImages;
    }
    return productImagesObj[productTypeFilter] || [];
  }, [productTypeFilter, productImagesObj, productImages]);

  const productCategories = useMemo(() => {
    let filters: ProductBasic[] = [{ id: undefined, label: "Wszystkie" }];
    products
      .sort((a, b) => a.label.localeCompare(b.label))
      .forEach((product) => {
        if (productImagesObj[product.id]) {
          filters.push(product);
        }
      });

    return filters;
  }, [products, productImagesObj]);

  return (
    <>
      <Head title="Realizacje" />
      <NavBar />
      <main className={`${styles.main} `}>
        <Fragment>
          <H1>{translate("gallery.title")}</H1>
          <p>{translate("gallery.subtitle")}</p>

          <FiltersWrapper>
            {productCategories.map((product) => (
              <FilterButton
                key={product.id}
                onClick={() => {
                  setProductTypeFilter(product.id);
                }}
                $active={productTypeFilter === product.id}
              >
                <FilterText>{product.label}</FilterText>
              </FilterButton>
            ))}
          </FiltersWrapper>

          <GalleryItems>
            {realisationImagesToDisplay.map((image) => (
              <LabeledGalleryItem
                key={image.id}
                src={getCloudinaryImageUrl(image)}
                alt={translate("gallery.title")}
                size={maxPhotoSize}
                label={image.metadata.title}
                subtitle={image.metadata.desc}
              />
            ))}
          </GalleryItems>
        </Fragment>
      </main>
      <Sznurex />
    </>
  );
}

export async function getStaticProps() {
  const productImages = await getCloudinaryImagesData(100);
  const productTypes = await getProductsBasic();
  const products = productTypes.flatMap((product) => product.items);
  const productImagesObj: Record<string, RealisationImage[]> = {};

  productImages.forEach((image) => {
    const { productIds } = image.metadata;
    if (productIds) {
      productIds.forEach((id) => {
        if (!productImagesObj[id]) {
          productImagesObj[id] = [];
        }
        productImagesObj[id].push(image);
      });
    }
  });
  const props: Props = {
    productImages,
    productImagesObj,
    products,
  };

  return {
    props,
    revalidate: 60 * 60 * 24,
  };
}

const GalleryItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  row-gap: 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & > * {
    flex: 1 1 calc(33.333% - 2rem);
    max-width: calc(33.333% - 2rem);
  }

  @media ${(props) => props.theme.media.tabPort} {
    & > * {
      flex: 1 1 calc(50% - 2rem);
      max-width: calc(50% - 2rem);
    }
  }

  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 3rem;
    margin-top: 0rem;
    margin-bottom: 0rem;

    & > * {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;

const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const FilterText = styled.p`
  margin-bottom: 0;
`;

const FilterButton = styled.button<{ $active?: boolean }>`
  all: unset;
  cursor: pointer;
  display: inline-block;

  letter-spacing: 0.3rem;
  transition: all 0.2s;

  box-shadow: ${({ $active, theme }) =>
    $active ? `inset 0 -1rem 0 ${theme.colors.tertiaryLight}` : "none"};

  &:hover {
    box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.tertiaryLight};
  }
`;
