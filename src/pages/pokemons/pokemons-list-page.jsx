import React, { useEffect, useState } from 'react';
import FooterComponent from '../components/footer-component';
import MenuTopoComponent from '../components/menu-topo-component';
import PokemonList from './component/pokemon-list';
import Pagination from './component/pagination-component';
import pokemonsServices from '../../services/pokemons-services';
import PokemonDetail from './component/pokemon-detail-modal';
import '../../assets/styles/pokedex.css';


export default function PokemonsListPage() {
    require('../../assets/styles/pokedex.css')
    const [pokemons, setPokemon] = useState([]);
    const [nextPage, setNextPageUrl] = useState(0);
    const [prevPage, setPrevPageUrl] = useState(0);
    const [limit, setLimit] = useState(5);
    const [offset, setOffset] = useState(0);
    const [search, setSearch] = useState('');
    useEffect(() => {
        getPokemons();
    }, []);

    useEffect(() => {
        getPokemons();
    }, [offset]);

    const getPokemons = async () => {
        const _result = await pokemonsServices.getPokemons(offset, limit);
        console.log(_result)
        if (_result) {
            setPokemon(_result.results);
        }
    }

    const getPokemonByName = async (e) => {
        e.preventDefault();
        const _result = await pokemonsServices.getPokemonByName(search);
        console.log(_result)
        if (_result) {
            let pokemon = [];
            console.log(_result)
            pokemon.push({name: _result.name })
            setPokemon(pokemon);
        }else{
            window.alert('Pokemon não encontrado')
        }
    }

    const  gotoNextPage =  () => {
        setOffset(offset + limit);
    }

    const  gotoPrevPage = () => {
        setOffset(offset - limit);
    }

    return (<>
        <MenuTopoComponent></MenuTopoComponent>
        <main class="container">

            <form onSubmit={(e)=>getPokemonByName(e)}>
                <section class="inputs-container">
                    <div class="inputs-container">
                        <input type="search" placeholder="pesquisar" value={search} onChange={(e)=>setSearch(e.target.value)} />
                    </div>
                </section>
                <section class="button-container">
                    <button type="button">Pokémons</button>
                </section>
              
            </form>

            <section id="paginate">

                <div class="list">
                    <PokemonList pokemon={pokemons} />
                </div>
                <div class="pagination">
                    <Pagination
                        gotoNextPage={gotoNextPage}
                        gotoPrevPage={offset > 0 ? gotoPrevPage : null}
                    />
                </div>
            </section>
            <PokemonDetail></PokemonDetail>
        </main>
        <FooterComponent></FooterComponent>
    </>);
}