export namespace ProductsNs {

  export interface Dimension {
    width: number;
    height: number;
    depth: number;
  }

  export interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }

  export interface Detail {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number,
    stock: number;
    brand: string;
    dimensions: Dimension;
    reviews: Review[];
  }

  export interface All {
    products: Detail[];
  }

}

