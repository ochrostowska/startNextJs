export type ProductsList = {
  sections: ProductsListSection[];
};

export type ProductsListSection = {
  title: string;
  titleHref: string;
  items: ProductsListItem[];
};

export type ProductsListItem = {
  icon: string;
  label: string;
  href: string;
  alt: string;
};
