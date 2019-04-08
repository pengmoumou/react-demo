const NODE_ENV = process.env.NODE_ENV;
export default {
    //host
    imgHost: NODE_ENV !== 'development' ? "http://officialwebsite.maxfun.co" : window.location.origin,
    //商务接触接口post
    business_contacts: "/ysadmin/business_contacts"
}