const API_PATH = 'http://two.sixteenpixels.ru/wp-json/dokan/v1';
const WP_API_PATH = 'http://two.sixteenpixels.ru/wp-json/wp/v2';

const defaultOptions = {
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90d28uc2l4dGVlbnBpeGVscy5ydSIsImlhdCI6MTU1NzA1MjI2NiwibmJmIjoxNTU3MDUyMjY2LCJleHAiOjE1NTc2NTcwNjYsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.T9luXE_XTGWmnmCXOWettkhh_SkMND8Qhr5FOZ9UF04',
    },
};



async function getAttributes(){
    let attributes  = await fetch(`${API_PATH}/products/attributes`, defaultOptions);
    attributes = await attributes.json();

    attributes = attributes.map(a => ({
        id: a.id,
        name: a.name,
        slug: a.slug,
        description: a.description,
    }));

    for (const attribute of attributes) {
        let terms = await fetch(`${API_PATH}/products/attributes/${attribute.id}/terms`, defaultOptions);
        terms = await terms.json();

        terms = terms.map(t => ({
            id: t.id,
            name: t.name,
            slug: t.slug,
            description: t.description,
        }));

        attribute.terms = terms;
    }

    // convert array to object
    var result = {};
    for (const attribute of attributes) {
        result[attribute.slug] = attribute;
    }

    console.log(result);
    return result;
}

async function postImage(img){
    try{
        const response = await fetch(`${WP_API_PATH}/media`, {
            method: 'POST',
            headers: {
                ...defaultOptions.headers,
                'Content-Type': 'image/*',
                'X-WP-Nonce': window.nonce,
                'Content-Disposition': `attachment; filename="${img.name}"`
            },
            body: img
        });
        
        console.log("Response", response);
        const json = await response.json();
        return json;
    } catch(e) {
        console.log("Да бля", e);
    }
}

export default { getAttributes, postImage };