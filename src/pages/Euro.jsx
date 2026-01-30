import React, { useState } from 'react';
import { useCoin } from '../context/CoinContext';
import { Plus } from 'lucide-react';
import CoinCard from '../components/common/CoinCard';
import Modal from '../components/common/Modal';
import ItemForm from '../components/common/ItemForm';
import './PageLayout.css';

const Euro = () => {
    const { getItemsByCategory } = useCoin();
    const items = getItemsByCategory('euro');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="page-container">
            <div className="page-header">
                <div>
                    <h2>Monedas Euro</h2>
                    <p className="text-secondary">Colección completa de la Zona Euro.</p>
                </div>
                <button
                    className="add-section-btn"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Plus size={20} /> Añadir Moneda
                </button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Añadir Moneda Euro"
            >
                <ItemForm
                    onClose={() => setIsModalOpen(false)}
                    initialCategory="euro"
                    initialType="coin"
                />
            </Modal>
            <div className="items-grid">
                {items.length > 0 ? (
                    items.map(item => (
                        <CoinCard key={item.id} item={item} />
                    ))
                ) : (
                    <p className="empty-state">No hay monedas en esta categoría.</p>
                )}
            </div>
        </div>
    );
};

export default Euro;
