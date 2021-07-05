import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div class="list">
      {pokemon.map((p) => (
        <div style={{paddingTop:20}}>
        <div class={'list-pokemon'} key={p.name}>{p.name}</div>
        </div>
      ))}
    </div>
  );
}