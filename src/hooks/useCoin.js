import { useContext } from 'react';
import { CoinContext } from '../context/Contexts';

export const useCoin = () => useContext(CoinContext);
