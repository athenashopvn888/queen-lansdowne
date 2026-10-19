/**
 * QLC01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "QLC01",
  "fullName": "Queen Lansdowne Cannabis Dispensary Weed Delivery",
  "street": "1472 Queen St W",
  "city": "Toronto",
  "region": "ON",
  "postal": "M6K 1M4",
  "phoneDisplay": "(437) 293-8580",
  "phoneTel": "tel:+14372938580",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJHy2BDCg1K4gRnDsuZFzvfbg",
  "placeId": "ChIJHy2BDCg1K4gRnDsuZFzvfbg",
  "neighbourhood": "Queen West / Parkdale",
  "intersection": "Queen St W & Lansdowne Ave",
  "transit": "The 501 Queen streetcar stops at Queen Street West at Lansdowne Avenue. Overnight, the 301 Queen Blue Night runs the same street.",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
