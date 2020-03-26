import React from 'react';

export default function Main({ match }) {
    return (
        <h2>{match.params.id}</h2>   
    );
}