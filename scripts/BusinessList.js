console.log("BusinessList.js");

import { useBusinesses } from "./BusinessProvider.js"
import { Company } from "./Business.js"

const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Art Supplies</h1>"

    businessArray.forEach(
        (companyObject) => {
            contentTarget.innerHTML += Company(companyObject)
        }
    );
}