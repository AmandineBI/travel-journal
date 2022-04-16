import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data/travels';

function App() {
    let cards = data
        .sort((a, b) => a.priority - b.priority)
        .map(data => {
        return (
            <Card
                key={data.id}
                {...data}
            />
        )
    });
    return (
        <div className="App">
            <Navbar />
            <section>
                {cards}
            </section>
        </div>
    );
}

export default App;
