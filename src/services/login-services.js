class PokemonsService {



    async login(usuario, senha) {

        try {
            let response = await fetch(`http://localhost:8080/api/v1/login`,
                {
                    method: 'POST',
                    body: JSON.stringify({usuario: usuario, senha: senha}),
                    headers:  {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
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