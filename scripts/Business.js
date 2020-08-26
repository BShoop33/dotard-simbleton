console.log("Business.js");

export const Company = (companyObject) => {
    return `
        <section class="supply">
            <h2 class="supply__type">${companyObject.type}</h2>
            <div class="supply__price">
                Price: ${companyObject.price}
            </div>
        </section>
    `
}