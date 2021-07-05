import React, { useEffect } from 'react';


export default function MenuTopoComponent() {
    useEffect(() => {

    }, []);

    return (
        <header id="menu">
            <a href="#"><h1>Pokedéx</h1></a>
            <div class="center-on-page">
                <div class="pokeball">
                    <div class="pokeball__button"></div>
                </div>
            </div>
        </header>
    );
}