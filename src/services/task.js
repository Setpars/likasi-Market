
const vendeurs =[
  {
    name: "Mama Mado - Légumes frais",
    description: "Des légumes bio chaque jour au marché central de Likasi.",
    image: "@/assets/image/pexels-nc-farm-bureau-mark-2255935.jpg",
    typeActivité:"vente",
    adresse:'LIKASI',
    whatsapp: "+243831271968"

  },
  {
    name: "Tony - Vêtements pour hommes",
    description: "Vêtements classe et pas chers. Livraison dans toute la ville.",
    typeActivité:"vente",
    image: "@/assets/image/pexels-hngstrm-1210484.jpg",
    adresse:'LIKASI',
    whatsapp: "+243831271968"
  },
  {
    name: "Bakery Likasi",
    description: "Pain, gâteaux, croissants... Livraison possible.",
    typeActivité:"vente",
    image: "@/assets/image/pexels-busenur-demirkan-766536648-33136498.jpg",
    adresse:'LIKASI',
    whatsapp: "+243831271968"

  }
]

function read(){
    return vendeurs
}
export default{
    read
}