import fetchJsonp from 'fetch-jsonp';

export const FILTER_PRODUCT = "FILTER_PRODUCT";

const CATEGORY_PRODUCT="CATEGORY_PRODUCT";
const CLICK_PRODUCT="CLICK_PRODUCT";


const loadProduct = (products) => {return {type: "LOAD_PRODUCT", payload: products}}

export const clickProduct = (prod) => ({type: CLICK_PRODUCT, payload: prod})
export const filterProduct = (filteredVal) => ({type:FILTER_PRODUCT, payload: filteredVal})
export const CategoryProduct =(value)=> ({type:CATEGORY_PRODUCT, payload: value})

export const getProducts= (input)=> {
    const ebayApi=process.env.REACT_APP_EBAY_API
    
    return (dispatch)=> {
        var url = "https://svcs.ebay.com/services/search/FindingService/v1";
        url += "?OPERATION-NAME=findItemsByKeywords";
        url += "&SERVICE-VERSION=1.0.0";
        url += `&SECURITY-APPNAME=${ebayApi}`;
        url += "&GLOBAL-ID=EBAY-US";
        url += "&RESPONSE-DATA-FORMAT=JSON";
        // url += "&callback=_cb_findItemsByKeywords";
        url += "&REST-PAYLOAD";
        url += `&keywords=${input}`;
        url += "&paginationInput.entriesPerPage=100";

       return fetchJsonp(url)
        .then(res=> {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('No result!');
            }
         })
        .then(data => {
            if(data.findItemsByKeywordsResponse[0].searchResult[0].item){
                dispatch(loadProduct(data.findItemsByKeywordsResponse[0].searchResult[0].item)) 
            } else{
                throw new Error('No result!');
            }
        })
        .catch((ex)=>console.log('failed', ex)
        );
    }
}