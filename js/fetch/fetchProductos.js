export async function getProductos(){
    const token = 'd2qxfozf06b47gdm8p06iikz4kebikwlv4xv403v'; // Replace with your actual token

    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    try 
    {
        const response = await fetch
        (
            `https://api.json-generator.com/templates/W3pkkNTYGerO/data`, config
        );
        return response;
    }
    catch (error) 
    {
        console.log(error);
    }
}