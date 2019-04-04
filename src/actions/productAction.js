
const loadProduct = (products) => {return {type: "LOAD_PRODUCT", payload: products}}
export const addCart = (prod)=> ({type: "ADD_CART", payload: prod})

export const getProducts= (input)=> {
    return (dispatch)=> {
        var url = "http://svcs.ebay.com/services/search/FindingService/v1";
        url += "?OPERATION-NAME=findItemsByKeywords";
        url += "&SERVICE-VERSION=1.0.0";
        url += "&SECURITY-APPNAME=tonyhuan-myapp-PRD-6bcb87b90-2910d9d6";
        url += "&GLOBAL-ID=EBAY-US";
        url += "&RESPONSE-DATA-FORMAT=JSON";
        url += "&callback=_cb_findItemsByKeywords";
        url += "&REST-PAYLOAD";
        url += `&keywords=${input}`;
        url += "&paginationInput.entriesPerPage=25";

      return  fetch(url)
                .then(res =>res.text())
                .then(data => {
                    const str = data.slice(28, data.length-1)
                    const obj = JSON.parse(str)
                    dispatch(loadProduct(obj.findItemsByKeywordsResponse[0].searchResult[0].item))
                })
                .catch(console.error)
    }
}