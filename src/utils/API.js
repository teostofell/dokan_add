const API_PATH = 'http://prooved/wp-json/dokan/v1';
const WP_API_PATH = 'http://prooved/wp-json/wp/v2';

const defaultOptions = {
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wcm9vdmVkIiwiaWF0IjoxNTU3OTQ3ODUwLCJuYmYiOjE1NTc5NDc4NTAsImV4cCI6MTU1ODU1MjY1MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.cVLeTP7fbER_Mn21Vm6row9hlGVxREK-3D7LAKt2MsQ',
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
            price: 0,
            quantity: 0,
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
        
        const json = await response.json();
        return json;
    } catch(e) {
        console.log("Да бля", e);
    }
}

async function createProduct(data){
    console.log(data, "here");

    try {
        let images = [];
        // Post main image
        if(data.mainPhoto){
            let mainPhoto = await postImage(data.mainPhoto);
            images.push({
                id: mainPhoto.id,
                position: 0,
            });
        }

        // Post all product images
        if(data.photos){
            for(const photo of data.photos){
                const p = await postImage(photo);
                images.push({
                    id: p.id,
                });
            }
        }

        // Create product
        let product = {};

        product.name = data.model_line;
        product.categories = [{
            name: 'Uncategorized'
        }];
        product.attributes = [];

        product.attributes.push({
            name: 'brand',
            options: data.brand,
        });

        product.attributes.push({
            name: 'colorway',
            options: data.colors.map(c => c.name),
        });
        product.description = data.description;
        product.attributes.push({
            name: 'year',
            options: data.year,
        });
        product.attributes.push({
            name: 'model-line',
            options:  data.model_line,
        });
        product.images = images;

        console.log(product);

        const response = await fetch(`${API_PATH}/products`, {
            method: 'POST',
            headers: {
                ...defaultOptions.headers,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        product = await response.json();

        // Create variations

        return product;
    } catch(e){
        console.log(e);
    }
}

export default { getAttributes, postImage, createProduct };