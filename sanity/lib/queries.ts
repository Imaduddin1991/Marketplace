import { groq } from "next-sanity";


export const allProducts = groq `*[_type == "product"]`;
export const three = groq `*[-type == "product"]`;