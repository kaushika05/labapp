import React, { useState } from 'react';
import Modal from './Modal';

function Card() {
    const [modalIndex, setModalIndex] = useState(null);

    // Data for each card
    const cardsData = [
        {
            id: 1,
            title: 'Daenerys Stormborn of House Targaryen',
            subtitle: 'Breaker of Chains, Mother of Dragons, The Unburnt',
            img: 'https://images.hdqwalls.com/download/daenerys-targaryen-in-game-of-thrones-tv-series-1r-1080x1920.jpg',
            modalContent: 'Daenerys Stormborn of the House Targaryen, First of Her Name, Breaker of Chains, Mother of Dragons, the Unburnt, Queen of the Andals, the Rhoynar, and the First Men. Her journey to reclaim her lost throne is insipiring.',
        },
        {
            id: 2,
            title: 'Rhaegar of House Targaryen',
            subtitle: 'Prince of Dragonstone, the Last Dragon',
            img: 'https://i.pinimg.com/originals/88/e9/8b/88e98b271f8e759593b10dd06f040349.jpg',
            modalContent: 'Rhaegar Targaryen was known for his calm demeanor, musical talent, and a deep commitment to the legacy of House Targaryen. His story is full of mystery and tragic romance.',
        },
        {
            id: 3,
            title: 'Rhaenyra of House Targaryen',
            subtitle: 'The Realm’s Delight',
            img: 'https://cdn.wallpapersafari.com/6/18/kDfO5u.jpg',
            modalContent: 'Rhaenyra Targaryen fought for her rightful claim. Her legacy continues to inspire.',
        }
    ];

    return (
        <div className="container my-4">
            <div className="row">
                {cardsData.map(card => (
                    <div className="col-md-4 mb-4" key={card.id}>
                        <div className="card h-100 bg-dark text-white border-danger">
                            <img
                                src={card.img}
                                className="card-img-top"
                                alt={card.title}
                                style={{ height: '400px', objectFit: 'cover', objectPosition: 'top' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-danger">{card.title}</h5>
                                <p className="card-text">{card.subtitle}</p>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => setModalIndex(card.id)}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {cardsData.map(card => (
                <Modal
                    key={card.id}
                    show={modalIndex === card.id}
                    onClose={() => setModalIndex(null)}
                    title={card.title}
                >
                    <p>{card.modalContent}</p>
                </Modal>
            ))}
        </div>
    );
}

export default Card;
