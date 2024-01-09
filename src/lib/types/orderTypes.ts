interface QuantityLimits {
    minimum: number;
    maximum: number;
    multiple_of: number;
    editable: boolean;
  }
  
  interface Image {
    id: number;
    src: string;
    thumbnail: string;
    srcset: string;
    sizes: string;
    name: string;
    alt: string;
  }
  
  interface Prices {
    price: string;
    regular_price: string;
    sale_price: string;
    price_range: any; // Adjust the type according to your data structure
    currency_code: string;
    currency_symbol: string;
    currency_minor_unit: number;
    currency_decimal_separator: string;
    currency_thousand_separator: string;
    currency_prefix: string;
    currency_suffix: string;
    raw_prices: {
      precision: number;
      price: string;
      regular_price: string;
      sale_price: string;
    };
  }
  
  interface Totals {
    line_subtotal: string;
    line_subtotal_tax: string;
    line_total: string;
    line_total_tax: string;
    currency_code: string;
    currency_symbol: string;
    currency_minor_unit: number;
    currency_decimal_separator: string;
    currency_thousand_separator: string;
    currency_prefix: string;
    currency_suffix: string;
    tax_lines: any[]
    total_discount: string;
    total_discount_tax: string;
    total_fees: string;
    total_fees_tax: string;
    total_items: string;
    total_items_tax: string;
    total_price: string;
    total_shipping: string;
    total_shipping_tax: string;
    total_tax: string;
  }
  
  interface ShippingAddress {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    phone: string;
  }
  
  interface Item {
    key: string;
    id: number;
    quantity: number;
    quantity_limits: QuantityLimits;
    name: string;
    short_description: string;
    description: string;
    sku: string;
    low_stock_remaining: null | number;
    backorders_allowed: boolean;
    show_backorder_badge: boolean;
    sold_individually: boolean;
    permalink: string;
    images: Image[];
    variation: any[]; // Adjust the type according to your data structure
    item_data: any[]; // Adjust the type according to your data structure
    prices: Prices;
    totals: Totals;
    catalog_visibility: string;
    extensions: Record<string, any>; // Adjust the type according to your data structure
  }
  
  interface Coupon {
    code: string;
    discount_type: string;
    totals: Totals;
  }
  
  interface ShippingRate {
    rate_id: string;
    name: string;
    description: string;
    delivery_time: string;
    price: string;
    taxes: string;
    instance_id: number;
    method_id: string;
    meta_data: {
      key: string;
      value: string;
    }[];
    selected: boolean;
    currency_code: string;
    currency_symbol: string;
    currency_minor_unit: number;
    currency_decimal_separator: string;
    currency_thousand_separator: string;
    currency_prefix: string;
    currency_suffix: string;
  }
  
  export interface Order {
    items: Item[];
    coupons: Coupon[];
    fees: any[]; // Adjust the type according to your data structure
    totals: Totals;
    shipping_address: ShippingAddress;
    billing_address: ShippingAddress & { email: string };
    needs_payment: boolean;
    needs_shipping: boolean;
    payment_requirements: string[];
    has_calculated_shipping: boolean;
    shipping_rates: ShippingRate[];
    items_count: number;
    items_weight: number;
    cross_sells: any[]; // Adjust the type according to your data structure
    errors: any[]; // Adjust the type according to your data structure
    payment_methods: string[];
    extensions: Record<string, any>; // Adjust the type according to your data structure
  }

  export interface WooCommerceCartError {
    code: string;
    message: string;
    data: {
      status: number;
      cart?: Record<string, any>; // You might need to define the specific structure of the 'cart' object
    };
  }

  export interface Product {
    id: number;
    name: string;
    slug: string;
    parent: number;
    type: string;
    variation: string;
    permalink: string;
    sku: string;
    short_description: string;
    description: string;
    on_sale: boolean;
    prices: {
        price: string;
        regular_price: string;
        sale_price: string;
        price_range: null | any; // You might need to specify the correct type here
        currency_code: string;
        currency_symbol: string;
        currency_minor_unit: number;
        currency_decimal_separator: string;
        currency_thousand_separator: string;
        currency_prefix: string;
        currency_suffix: string;
    };
    price_html: string;
    average_rating: string;
    review_count: number;
    images: any[]; // You might need to specify the correct type here
    categories: any[]; // You might need to specify the correct type here
    tags: any[]; // You might need to specify the correct type here
    attributes: any[]; // You might need to specify the correct type here
    variations: any[]; // You might need to specify the correct type here
    has_options: boolean;
    is_purchasable: boolean;
    is_in_stock: boolean;
    is_on_backorder: boolean;
    low_stock_remaining: null | any; // You might need to specify the correct type here
    sold_individually: boolean;
    add_to_cart: {
        text: string;
        description: string;
        url: string;
        minimum: number;
        maximum: number;
        multiple_of: number;
    };
    extensions: any; // You might need to specify the correct type here
}
  