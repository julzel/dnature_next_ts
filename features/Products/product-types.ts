type ProductPrice = {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
};

type ProductInventory = {
  managed: boolean;
  available: number;
};

type ProductSeo = {
  title: null | string;
  description: null | string;
};

type ProductConditionals = {
  is_active: boolean;
  is_tax_exempt: boolean;
  is_pay_what_you_want: boolean;
  is_inventory_managed: boolean;
  is_sold_out: boolean;
  has_digital_delivery: boolean;
  has_physical_delivery: boolean;
  has_images: boolean;
  collects_fullname: boolean;
  collects_shipping_address: boolean;
  collects_billing_address: boolean;
  collects_extra_fields: boolean;
};

type ProductIs = {
  active: boolean;
  tax_exempt: boolean;
  pay_what_you_want: boolean;
  inventory_managed: boolean;
  sold_out: boolean;
};

type ProductHas = {
  digital_delivery: boolean;
  physical_delivery: boolean;
  images: boolean;
};

type ProductCollects = {
  fullname: boolean;
  shipping_address: boolean;
  billing_address: boolean;
  extra_fields: boolean;
};

type ProductCheckoutUrl = {
  checkout: string;
  display: string;
};

type ProductCategory = {
  id: string;
  slug: string;
  name: string;
};

type ProductImageDimensions = {
  width: number;
  height: number;
};

type ProductImage = {
  id: string;
  url: string;
  description: null | string;
  is_image: boolean;
  filename: string;
  file_size: number;
  file_extension: string;
  image_dimensions: ProductImageDimensions;
  meta: any[];
  created_at: number;
  updated_at: number;
};

type ProductAsset = {
  id: string;
  url: string;
  description: null | string;
  is_image: boolean;
  filename: string;
  file_size: number;
  file_extension: string;
  image_dimensions: ProductImageDimensions;
  meta: any[];
  created_at: number;
  updated_at: number;
};

export type Product = {
  id: string;
  created: number;
  updated: number;
  active: boolean;
  permalink: string;
  name: string;
  description: string;
  price: ProductPrice;
  inventory: ProductInventory;
  sku: null | string;
  sort_order: number;
  seo: ProductSeo;
  thank_you_url: null | string;
  meta: null | object;
  conditionals: ProductConditionals;
  is: ProductIs;
  has: ProductHas;
  collects: ProductCollects;
  checkoutUrl: ProductCheckoutUrl;
  categories: Array<ProductCategory>;
  image: ProductImage;
  assets: Array<ProductAsset>;
  extra_fields: any[];
  variant_groups: any[];
}
