class PokemonsService {



    async getPokemons(offset, limit) {

        try {
            let token = JSON.parse(localStorage.getItem("userInfo")).token;
            let response = await fetch(`http://localhost:8080/api/v1/pokemons/${offset}/${limit}`,
                {
                    method: 'GET',
                    headers:  {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token':  token
                    }
                });

            if (response.status === 200)
                return await response.json();
        } catch (error) {
            console.log(error)
        }
    }

    
    async getPokemonByName(name) {

        try {
            let token = JSON.parse(localStorage.getItem("userInfo")).token;
            let response = await fetch(`http://localhost:8080/api/v1/pokemon/${name}/`,
                {
                    method: 'GET',
                    headers:  {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token':  token
                    }
                });

            if (response.status === 200)
                return await response.json();
        } catch (error) {
            console.log(error)
        }
    }
}
export default new PokemonsService();