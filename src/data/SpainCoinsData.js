export const STATUS_CIRCULATION = 'circulation';
export const STATUS_SET_ONLY = 'set_only';
export const STATUS_NOT_ISSUED = 'not_issued';

// Juan Carlos I (1975-2001) - Consolidated Denominations
export const SPAIN_JC1_DENOMINATIONS = [
    // --- Serie 1: Primer Busto (1975-1980) ---
    {
        value: 0.50,
        label: '50 Céntimos (1975)',
        id: '50cts_jc1',
        image: '/img/coins/spain/juancarlos/50-centimos-1975.jpg',
        yearHint: 1975,
        prices: {
            1975: { MBC: 0.10, EBC: 0.50, SC: 1.50 }
        }
    },
    {
        value: 1,
        label: '1 Peseta (1975)',
        id: '1pta_jc1',
        image: '/img/coins/spain/juancarlos/1-peseta-1975.jpg',
        yearHint: 1975,
        prices: {
            1975: { MBC: 0.10, EBC: 0.20, SC: 0.30 }
        }
    },
    {
        value: 5,
        label: '5 Pesetas (1975)',
        id: '5ptas_jc1',
        image: '/img/coins/spain/juancarlos/5-pesetas-1975.jpg',
        yearHint: 1975,
        prices: {
            1975: { MBC: 0.10, EBC: 0.25, SC: 0.75 }
        }
    },
    {
        value: 25,
        label: '25 Pesetas (1975)',
        id: '25ptas_jc1',
        image: '/img/coins/spain/juancarlos/25-pesetas-1975.jpg',
        yearHint: 1975,
        prices: {
            1975: { MBC: 0.25, EBC: 0.75, SC: 4.00 }
        }
    },
    {
        value: 50,
        label: '50 Pesetas (1975)',
        id: '50ptas_jc1',
        image: '/img/coins/spain/juancarlos/50-pesetas-1975.jpg',
        yearHint: 1975,
        prices: {
            1975: { MBC: 0.50, EBC: 1.50, SC: 4.50 }
        }
    },
    {
        value: 100,
        label: '100 Pesetas (1975)',
        id: '100ptas_jc1',
        image: '/img/coins/spain/juancarlos/100-pesetas-1975.jpg',
        yearHint: 1975,
        prices: {
            1975: { MBC: 1.00, EBC: 1.50, SC: 2.00 }
        }
    },

    // --- Serie 2: Mundial 82 (1980-1982) ---
    {
        value: 0.50,
        label: '50 Céntimos (Mundial 82)',
        id: '50cts_jc1_s2',
        image: '/img/coins/spain/juancarlos/50-centimos-1980.jpg',
        yearHint: 1980,
        prices: {
            1980: { MBC: 0.10, EBC: 0.50, SC: 2.50 }
        }
    },
    {
        value: 1,
        label: '1 Peseta (Mundial 82)',
        id: '1pta_jc1_s2',
        image: '/img/coins/spain/juancarlos/1-peseta-1980.jpg',
        yearHint: 1980,
        prices: {
            1980: { MBC: 0.10, EBC: 0.20, SC: 0.20 }
        }
    },
    {
        value: 5,
        label: '5 Pesetas (Mundial 82)',
        id: '5ptas_jc1_s2',
        image: '/img/coins/spain/juancarlos/5-pesetas-1980.jpg',
        yearHint: 1980,
        prices: {
            1980: { MBC: 0.15, EBC: 0.30, SC: 0.60 }
        }
    },
    {
        value: 25,
        label: '25 Pesetas (Mundial 82)',
        id: '25ptas_jc1_s2',
        image: '/img/coins/spain/juancarlos/25-pesetas-1980.jpg',
        yearHint: 1980,
        prices: {
            1980: { MBC: 0.30, EBC: 1.00, SC: 2.00 }
        }
    },
    {
        value: 50,
        label: '50 Pesetas (Mundial 82)',
        id: '50ptas_jc1_s2',
        image: '/img/coins/spain/juancarlos/50-pesetas-1980.jpg',
        yearHint: 1980,
        prices: {
            1980: { MBC: 0.60, EBC: 1.80, SC: 3.50 }
        }
    },
    {
        value: 100,
        label: '100 Pesetas (Mundial 82)',
        id: '100ptas_jc1_s2',
        image: '/img/coins/spain/juancarlos/100-pesetas-1980.jpg',
        yearHint: 1980,
        prices: {
            1980: { MBC: 1.00, EBC: 1.25, SC: 1.50 }
        }
    },

    // Series 3 models (1982-1989)
    // --- Serie 3: Modelos 1982-1989 ---
    {
        value: 1, label: '1 Peseta (Aluminio)', id: '1pta_jc1_s3',
        image: '/img/coins/spain/juancarlos/1-peseta-1983.jpg',
        prices: {
            1982: { MBC: 0.10, EBC: 0.20, SC: 0.30 },
            1983: { MBC: 0.10, EBC: 0.30, SC: 0.70 },
            1984: { MBC: 0.10, EBC: 0.20, SC: 0.30 },
            1985: { MBC: 0.10, EBC: 0.20, SC: 0.30 },
            1986: { MBC: 0.10, EBC: 0.20, SC: 0.30 },
            1987: { MBC: 0.10, EBC: 0.20, SC: 0.30 },
            1988: { MBC: 0.10, EBC: 0.20, SC: 0.30 },
            1989: { MBC: 0.50, EBC: 1.00, SC: 1.50 }
        }
    },
    {
        value: 2, label: '2 Pesetas (Aluminio)', id: '2ptas_jc1_s3',
        image: '/img/coins/spain/juancarlos/2-pesetas-1982.jpg',
        prices: {
            1982: { MBC: 0.10, EBC: 0.30, SC: 0.70 },
            1984: { MBC: 0.10, EBC: 0.30, SC: 0.60 }
        }
    },
    {
        value: 5, label: '5 Pesetas (82-89)', id: '5ptas_jc1_s3',
        image: '/img/coins/spain/juancarlos/5-pesetas-1983.jpg',
        prices: {
            1982: { MBC: 0.50, EBC: 1.00, SC: 2.00 },
            1983: { MBC: 0.25, EBC: 0.50, SC: 1.00 },
            1984: { MBC: 0.25, EBC: 0.50, SC: 1.00 },
            1989: { MBC: 0.50, EBC: 1.00, SC: 2.00 }
        }
    },
    {
        value: 10, label: '10 Pesetas (83-85)', id: '10ptas_jc1_s3',
        image: '/img/coins/spain/juancarlos/10-pesetas-1983.jpg',
        prices: {
            1983: { MBC: 0.15, EBC: 0.40, SC: 1.00 },
            1984: { MBC: 0.15, EBC: 0.40, SC: 1.00 },
            1985: { MBC: 0.15, EBC: 0.40, SC: 1.00 }
        }
    },
    {
        value: 25, label: '25 Pesetas (82-84)', id: '25ptas_jc1_s3',
        image: '/img/coins/spain/juancarlos/25-pesetas-1983.jpg',
        prices: {
            1982: { MBC: 0.50, EBC: 1.50, SC: 3.00 },
            1983: { MBC: 0.50, EBC: 1.25, SC: 2.50 },
            1984: { MBC: 1.50, EBC: 3.00, SC: 6.00 }
        }
    },
    {
        value: 50, label: '50 Pesetas (82-84)', id: '50ptas_jc1_s3',
        image: '/img/coins/spain/juancarlos/50-pesetas-1983.jpg',
        prices: {
            1982: { MBC: 0.80, EBC: 2.20, SC: 5.00 },
            1983: { MBC: 0.80, EBC: 2.00, SC: 4.00 },
            1984: { MBC: 10.0, EBC: 25.0, SC: 40.0 }
        }
    },
    {
        value: 100, label: '100 Pesetas (82-90)', id: '100ptas_jc1_s3',
        image: '/img/coins/spain/juancarlos/100-pesetas-1982.jpg',
        prices: {
            1982: { MBC: 1.00, EBC: 2.50, SC: 5.00 },
            1983: { MBC: 8.00, EBC: 18.0, SC: 30.0 },
            1984: { MBC: 3.00, EBC: 7.00, SC: 15.0 },
            1985: { MBC: 4.00, EBC: 10.0, SC: 20.0 },
            1986: { MBC: 1.00, EBC: 3.00, SC: 6.00 },
            1988: { MBC: 2.00, EBC: 4.00, SC: 8.00 },
            1989: { MBC: 1.00, EBC: 2.00, SC: 4.00 },
            1990: { MBC: 2.00, EBC: 5.00, SC: 10.0 }
        }
    },
    {
        value: 200, label: '200 Pesetas (86-88)', id: '200ptas_jc1_s3',
        image: '/img/coins/spain/juancarlos/200-pesetas-1986.jpg',
        prices: {
            1986: { MBC: 2.00, EBC: 4.00, SC: 8.00 },
            1987: { MBC: 10.0, EBC: 25.0, SC: 40.0 },
            1988: { MBC: 3.00, EBC: 8.00, SC: 16.0 }
        }
    },
    {
        value: 500, label: '500 Pesetas (87-90)', id: '500ptas_jc1_s3',
        image: '/img/coins/spain/juancarlos/500-pesetas-1987.jpg',
        prices: {
            1987: { MBC: 3.50, EBC: 6.00, SC: 12.0 },
            1988: { MBC: 3.50, EBC: 6.00, SC: 12.0 },
            1989: { MBC: 4.00, EBC: 8.00, SC: 15.0 },
            1990: { MBC: 3.50, EBC: 6.00, SC: 12.0 }
        }
    },

    // --- Serie 4: Modelos 1989-2001 (Micro Peseta / Regional) ---
    {
        value: 1, label: '1 Peseta (Modelo 1989)', id: '1pta_jc1_s4',
        image: '/img/coins/spain/juancarlos/1-peseta-1990.jpg',
        prices: {
            1989: { MBC: 0.10, EBC: 0.30, SC: 0.50 }, 1990: { MBC: 0.10, EBC: 0.30, SC: 0.60 },
            1991: { MBC: 0.10, EBC: 0.30, SC: 0.60 }, 1992: { MBC: 0.10, EBC: 0.20, SC: 0.30 },
            1993: { MBC: 0.10, EBC: 0.20, SC: 0.30 }, 1994: { MBC: 0.10, EBC: 0.20, SC: 0.30 },
            1995: { MBC: 0.10, EBC: 0.15, SC: 0.20 }, 1996: { MBC: 0.10, EBC: 0.15, SC: 0.20 },
            1997: { MBC: 0.10, EBC: 0.15, SC: 0.20 }, 1998: { MBC: 0.10, EBC: 0.15, SC: 0.20 },
            1999: { MBC: 0.10, EBC: 0.15, SC: 0.20 }, 2000: { MBC: 0.10, EBC: 0.15, SC: 0.20 },
            2001: { MBC: 0.15, EBC: 0.30, SC: 0.50 }
        }
    },
    {
        value: 5, label: '5 Pesetas (Standard 1989)', id: '5ptas_jc1_s4_89',
        image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg',
        prices: { 1989: { MBC: 0.20, EBC: 0.40, SC: 0.60 } }
    },
    {
        value: 5, label: '5 Pesetas (Canarias 1990)', id: '5ptas_jc1_s4_90',
        image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg',
        prices: { 1990: { MBC: 0.30, EBC: 0.80, SC: 1.50 } }
    },
    {
        value: 5, label: '5 Pesetas (Baleares 1991)', id: '5ptas_jc1_s4_91',
        image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg',
        prices: { 1991: { MBC: 0.20, EBC: 0.50, SC: 1.00 } }
    },
    {
        value: 5, label: '5 Pesetas (Madrid 1992)', id: '5ptas_jc1_s4_92',
        image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg',
        prices: { 1992: { MBC: 0.20, EBC: 0.40, SC: 0.60 } }
    },
    {
        value: 5, label: '5 Pesetas (Jacobeo 1993)', id: '5ptas_jc1_s4_93',
        image: '/img/coins/spain/juancarlos/5-pesetas-1993.jpg',
        prices: { 1993: { MBC: 0.20, EBC: 0.30, SC: 0.50 } }
    },
    {
        value: 5, label: '5 Pesetas (Aragón 1994)', id: '5ptas_jc1_s4_94',
        image: '/img/coins/spain/juancarlos/5-pesetas-1994.jpg',
        prices: { 1994: { MBC: 0.20, EBC: 0.30, SC: 0.50 } }
    },
    {
        value: 5, label: '5 Pesetas (Asturias 1995)', id: '5ptas_jc1_s4_95',
        image: '/img/coins/spain/juancarlos/5-pesetas-1995.jpg',
        prices: { 1995: { MBC: 0.20, EBC: 0.30, SC: 0.20 } }
    },
    {
        value: 5, label: '5 Pesetas (La Rioja 1996)', id: '5ptas_jc1_s4_96',
        image: '/img/coins/spain/juancarlos/5-pesetas-1996.jpg',
        prices: { 1996: { MBC: 0.20, EBC: 0.30, SC: 0.20 } }
    },
    {
        value: 5, label: '5 Pesetas (I. Baleares 1997)', id: '5ptas_jc1_s4_97',
        image: '/img/coins/spain/juancarlos/5-pesetas-1997.jpg',
        prices: { 1997: { MBC: 0.20, EBC: 0.30, SC: 0.20 } }
    },
    {
        value: 5, label: '5 Pesetas (Murcia 1998)', id: '5ptas_jc1_s4_98',
        image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg',
        prices: { 1998: { MBC: 0.20, EBC: 0.20, SC: 0.20 } }
    },
    {
        value: 5, label: '5 Pesetas (Extremadura 1999)', id: '5ptas_jc1_s4_99',
        image: '/img/coins/spain/juancarlos/5-pesetas-1999.jpg',
        prices: { 1999: { MBC: 0.20, EBC: 0.30, SC: 0.50 } }
    },
    {
        value: 5, label: '5 Pesetas (Castilla-LM 2000)', id: '5ptas_jc1_s4_00',
        image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg',
        prices: { 2000: { MBC: 0.20, EBC: 0.20, SC: 0.20 } }
    },
    {
        value: 5, label: '5 Pesetas (Madrid 2001)', id: '5ptas_jc1_s4_01',
        image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg',
        prices: { 2001: { MBC: 0.20, EBC: 0.20, SC: 0.20 } }
    },

    // Series 4 missing denominations (1990-2001)
    // 10 Pesetas (Thematic Series)
    {
        value: 10, label: '10 Pesetas (V Centenario 1992)', id: '10ptas_jc1_s4_92',
        image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg',
        prices: { 1992: { MBC: 0.15, EBC: 0.40, SC: 0.60 } }
    },
    {
        value: 10, label: '10 Pesetas (Joan Miró 1993)', id: '10ptas_jc1_s4_93',
        image: '/img/coins/spain/juancarlos/10-pesetas-1993.jpg',
        prices: { 1993: { MBC: 0.25, EBC: 0.80, SC: 2.00 } }
    },
    {
        value: 10, label: '10 Pesetas (Salvador Dalí 1994)', id: '10ptas_jc1_s4_94',
        image: '/img/coins/spain/juancarlos/10-pesetas-1994.jpg',
        prices: { 1994: { MBC: 1.00, EBC: 2.50, SC: 5.00 } }
    },
    {
        value: 10, label: '10 Pesetas (Quevedo 1995)', id: '10ptas_jc1_s4_95',
        image: '/img/coins/spain/juancarlos/10-pesetas-1995.jpg',
        prices: { 1995: { MBC: 1.50, EBC: 3.50, SC: 8.00 } }
    },
    {
        value: 10, label: '10 Pesetas (Goya 1996)', id: '10ptas_jc1_s4_96',
        image: '/img/coins/spain/juancarlos/10-pesetas-1996.jpg',
        prices: { 1996: { MBC: 1.00, EBC: 2.50, SC: 5.00 } }
    },
    {
        value: 10, label: '10 Pesetas (Séneca 1997)', id: '10ptas_jc1_s4_97',
        image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg',
        prices: { 1997: { MBC: 0.25, EBC: 0.60, SC: 1.00 } }
    },
    {
        value: 10, label: '10 Pesetas (Pardo Bazán 1998)', id: '10ptas_jc1_s4_98',
        image: '/img/coins/spain/juancarlos/10-pesetas-1998.jpg',
        prices: { 1998: { MBC: 0.50, EBC: 1.00, SC: 2.50 } }
    },
    {
        value: 10, label: '10 Pesetas (Felipe II 1999)', id: '10ptas_jc1_s4_99',
        image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg',
        prices: { 1999: { MBC: 0.30, EBC: 0.80, SC: 2.00 } }
    },
    {
        value: 10, label: '10 Pesetas (Carlos V 2000)', id: '10ptas_jc1_s4_00',
        image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg',
        prices: { 2000: { MBC: 0.30, EBC: 0.80, SC: 2.00 } }
    },

    // 25 Pesetas (Regional Series with Hole)
    {
        value: 25, label: '25 Pesetas (Canarias 1990)', id: '25ptas_jc1_s4_90',
        image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg',
        prices: { 1990: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },
    {
        value: 25, label: '25 Pesetas (Vitoria 1991)', id: '25ptas_jc1_s4_91',
        image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg',
        prices: { 1991: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },
    {
        value: 25, label: '25 Pesetas (Expo/BCN 1992)', id: '25ptas_jc1_s4_92',
        image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg',
        prices: { 1992: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },
    {
        value: 25, label: '25 Pesetas (Jacobeo 1993)', id: '25ptas_jc1_s4_93',
        image: '/img/coins/spain/juancarlos/25-pesetas-1993.jpg',
        prices: { 1993: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },
    {
        value: 25, label: '25 Pesetas (Canarias 1994)', id: '25ptas_jc1_s4_94',
        image: '/img/coins/spain/juancarlos/25-pesetas-1994.jpg',
        prices: { 1994: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },
    {
        value: 25, label: '25 Pesetas (Castilla y León 1995)', id: '25ptas_jc1_s4_95',
        image: '/img/coins/spain/juancarlos/25-pesetas-1995.jpg',
        prices: { 1995: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },
    {
        value: 25, label: '25 Pesetas (La Rioja 1996)', id: '25ptas_jc1_s4_96',
        image: '/img/coins/spain/juancarlos/25-pesetas-1996.jpg',
        prices: { 1996: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },
    {
        value: 25, label: '25 Pesetas (Melilla 1997)', id: '25ptas_jc1_s4_97',
        image: '/img/coins/spain/juancarlos/25-pesetas-1997.jpg',
        prices: { 1997: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },
    {
        value: 25, label: '25 Pesetas (Ceuta 1998)', id: '25ptas_jc1_s4_98',
        image: '/img/coins/spain/juancarlos/25-pesetas-1998.jpg',
        prices: { 1998: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },
    {
        value: 25, label: '25 Pesetas (Murcia 1999)', id: '25ptas_jc1_s4_99',
        image: '/img/coins/spain/juancarlos/25-pesetas-1999.jpg',
        prices: { 1999: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },
    {
        value: 25, label: '25 Pesetas (Hoyo 2000)', id: '25ptas_jc1_s4_00',
        image: '/img/coins/spain/juancarlos/25-pesetas-2000.jpg',
        prices: { 2000: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },
    {
        value: 25, label: '25 Pesetas (Castilla-Mancha 2001)', id: '25ptas_jc1_s4_01',
        image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg',
        prices: { 2001: { MBC: 0.50, EBC: 1.25, SC: 2.50 } }
    },

    // 50 Pesetas (Spanish Flower Series)
    {
        value: 50, label: '50 Pesetas (Expo/Cartuja 1990)', id: '50ptas_jc1_s4_90',
        image: '/img/coins/spain/juancarlos/50-pesetas-1990-cartuja.jpg',
        prices: { 1990: { MBC: 0.80, EBC: 2.00, SC: 4.00 } }
    },
    {
        value: 50, label: '50 Pesetas (Expo/BCN 1992)', id: '50ptas_jc1_s4_92',
        image: '/img/coins/spain/juancarlos/50-pesetas-1992-sagrada.jpg',
        prices: { 1992: { MBC: 0.80, EBC: 2.00, SC: 4.00 } }
    },
    {
        value: 50, label: '50 Pesetas (Modelo 1993)', id: '50ptas_jc1_s4_93',
        image: '/img/coins/spain/juancarlos/50-pesetas-1993.jpg',
        prices: { 1993: { MBC: 0.80, EBC: 2.00, SC: 4.00 } }
    },
    {
        value: 50, label: '50 Pesetas (Enrique el Navegante 1994)', id: '50ptas_jc1_s4_94',
        image: '/img/coins/spain/juancarlos/50-pesetas-1994.jpg',
        prices: { 1994: { MBC: 0.80, EBC: 2.00, SC: 4.00 } }
    },
    {
        value: 50, label: '50 Pesetas (Felipe V 1995)', id: '50ptas_jc1_s4_95',
        image: '/img/coins/spain/juancarlos/50-pesetas-1995.jpg',
        prices: { 1995: { MBC: 0.80, EBC: 2.00, SC: 4.00 } }
    },
    {
        value: 50, label: '50 Pesetas (Modelo 1996)', id: '50ptas_jc1_s4_96',
        image: '/img/coins/spain/juancarlos/50-pesetas-1996.jpg',
        prices: { 1996: { MBC: 0.80, EBC: 2.00, SC: 4.00 } }
    },
    {
        value: 50, label: '50 Pesetas (Juan de Herrera 1997)', id: '50ptas_jc1_s4_97',
        image: '/img/coins/spain/juancarlos/50-pesetas-1997.jpg',
        prices: { 1997: { MBC: 0.80, EBC: 2.00, SC: 4.00 } }
    },
    {
        value: 50, label: '50 Pesetas (Isaac Albéniz 1998)', id: '50ptas_jc1_s4_98',
        image: '/img/coins/spain/juancarlos/50-pesetas-1998.jpg',
        prices: { 1998: { MBC: 0.80, EBC: 2.00, SC: 4.00 } }
    },
    {
        value: 50, label: '50 Pesetas (Velázquez 1999)', id: '50ptas_jc1_s4_99',
        image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg',
        prices: { 1999: { MBC: 0.80, EBC: 2.00, SC: 4.00 } }
    },
    {
        value: 50, label: '50 Pesetas (Carlos V 2000)', id: '50ptas_jc1_s4_00',
        image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg',
        prices: { 2000: { MBC: 0.80, EBC: 2.00, SC: 4.00 } }
    },
    // 100 Pesetas (Commemorative Bronze)
    {
        value: 100, label: '100 Pesetas (V Centenario 1992)', id: '100ptas_jc1_s4_92',
        image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg',
        prices: { 1992: { MBC: 1.50, EBC: 3.50, SC: 5.00 } }
    },
    {
        value: 100, label: '100 Pesetas (Baleares 1993)', id: '100ptas_jc1_s4_93',
        image: '/img/coins/spain/juancarlos/100-pesetas-1993.jpg',
        prices: { 1993: { MBC: 1.50, EBC: 3.50, SC: 5.00 } }
    },
    {
        value: 100, label: '100 Pesetas (Manuel de Falla 1994)', id: '100ptas_jc1_s4_94',
        image: '/img/coins/spain/juancarlos/100-pesetas-1994.jpg',
        prices: { 1994: { MBC: 1.50, EBC: 3.50, SC: 5.00 } }
    },
    {
        value: 100, label: '100 Pesetas (FAO 1995)', id: '100ptas_jc1_s4_95',
        image: '/img/coins/spain/juancarlos/100-pesetas-1995.jpg',
        prices: { 1995: { MBC: 1.50, EBC: 3.50, SC: 5.00 } }
    },
    {
        value: 100, label: '100 Pesetas (Felipe V 1996)', id: '100ptas_jc1_s4_96',
        image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg',
        prices: { 1996: { MBC: 1.50, EBC: 3.50, SC: 5.00 } }
    },
    {
        value: 100, label: '100 Pesetas (Juan de Herrera 1997)', id: '100ptas_jc1_s4_97',
        image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg',
        prices: { 1997: { MBC: 1.50, EBC: 3.50, SC: 5.00 } }
    },
    {
        value: 100, label: '100 Pesetas (Isaac Albéniz 1998)', id: '100ptas_jc1_s4_98',
        image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg',
        prices: { 1998: { MBC: 1.50, EBC: 3.50, SC: 5.00 } }
    },
    {
        value: 100, label: '100 Pesetas (Velázquez 1999)', id: '100ptas_jc1_s4_99',
        image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg',
        prices: { 1999: { MBC: 1.50, EBC: 3.50, SC: 5.00 } }
    },
    {
        value: 100, label: '100 Pesetas (Carlos V 2000)', id: '100ptas_jc1_s4_00',
        image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg',
        prices: { 2000: { MBC: 1.50, EBC: 3.50, SC: 5.00 } }
    },
    {
        value: 100, label: '100 Pesetas (Última Emisión 2001)', id: '100ptas_jc1_s4_01',
        image: '/img/coins/spain/juancarlos/100-pesetas-2001.jpg',
        prices: { 2001: { MBC: 1.50, EBC: 3.50, SC: 5.00 } }
    },

    // 200 Pesetas (Thematic Series)
    {
        value: 200, label: '200 Pesetas (Cibeles 1990)', id: '200ptas_jc1_s4_90',
        image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg',
        prices: { 1990: { MBC: 2.00, EBC: 4.50, SC: 7.00 } }
    },
    {
        value: 200, label: '200 Pesetas (Sede FNMT 1991)', id: '200ptas_jc1_s4_91',
        image: '/img/coins/spain/juancarlos/200-pesetas-1991.jpg',
        prices: { 1991: { MBC: 1.50, EBC: 3.00, SC: 5.00 } }
    },
    {
        value: 200, label: '200 Pesetas (Expo/BCN 92)', id: '200ptas_jc1_s4_92',
        image: '/img/coins/spain/juancarlos/200-pesetas-1992-oso.jpg',
        prices: { 1992: { MBC: 1.50, EBC: 3.00, SC: 5.00 } }
    },
    {
        value: 200, label: '200 Pesetas (Juan de la Cosa 1993)', id: '200ptas_jc1_s4_93',
        image: '/img/coins/spain/juancarlos/200-pesetas-1993.jpg',
        prices: { 1993: { MBC: 3.00, EBC: 8.00, SC: 16.0 } }
    },
    {
        value: 200, label: '200 Pesetas (Manuel de Falla 1994)', id: '200ptas_jc1_s4_94',
        image: '/img/coins/spain/juancarlos/200-pesetas-1994.jpg',
        prices: { 1994: { MBC: 2.00, EBC: 4.50, SC: 8.00 } }
    },
    {
        value: 200, label: '200 Pesetas (Madrid Capital 1995)', id: '200ptas_jc1_s4_95',
        image: '/img/coins/spain/juancarlos/200-pesetas-1995.jpg',
        prices: { 1995: { MBC: 5.00, EBC: 15.0, SC: 30.0 } }
    },
    {
        value: 200, label: '200 Pesetas (Felipe V 1996)', id: '200ptas_jc1_s4_96',
        image: '/img/coins/spain/juancarlos/200-pesetas-1996.jpg',
        prices: { 1996: { MBC: 1.50, EBC: 3.00, SC: 5.00 } }
    },
    {
        value: 200, label: '200 Pesetas (Juan de Herrera 1997)', id: '200ptas_jc1_s4_97',
        image: '/img/coins/spain/juancarlos/200-pesetas-1997.jpg',
        prices: { 1997: { MBC: 1.50, EBC: 3.00, SC: 5.00 } }
    },
    {
        value: 200, label: '200 Pesetas (Isaac Albéniz 1998)', id: '200ptas_jc1_s4_98',
        image: '/img/coins/spain/juancarlos/200-pesetas-1998.jpg',
        prices: { 1998: { MBC: 1.50, EBC: 4.00, SC: 6.00 } }
    },
    {
        value: 200, label: '200 Pesetas (Velázquez 1999)', id: '200ptas_jc1_s4_99',
        image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg',
        prices: { 1999: { MBC: 1.50, EBC: 4.00, SC: 6.00 } }
    },
    {
        value: 200, label: '200 Pesetas (Carlos V 2000)', id: '200ptas_jc1_s4_00',
        image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg',
        prices: { 2000: { MBC: 2.00, EBC: 5.00, SC: 8.00 } }
    },

    // 500 Pesetas (Nuevo Busto)
    {
        value: 500, label: '500 Pesetas (Modelo 1993)', id: '500ptas_jc1_s4',
        image: '/img/coins/spain/juancarlos/500-pesetas-1993.jpg',
        prices: {
            1993: { MBC: 10.0, EBC: 25.0, SC: 45.0 }, 1994: { MBC: 12.0, EBC: 30.0, SC: 50.0 },
            1995: { MBC: 10.0, EBC: 20.0, SC: 40.0 }, 1996: { MBC: 6.00, EBC: 15.0, SC: 25.0 },
            1997: { MBC: 3.00, EBC: 6.00, SC: 10.0 }, 1998: { MBC: 3.50, EBC: 7.00, SC: 12.0 },
            1999: { MBC: 3.50, EBC: 7.00, SC: 12.0 }, 2000: { MBC: 3.50, EBC: 7.00, SC: 12.0 },
            2001: { MBC: 3.50, EBC: 7.00, SC: 12.0 }
        }
    },

    // 2000 Pesetas (Plata)
    {
        value: 2000, label: '2000 Pesetas (FMI 1994)', id: '2000ptas_jc1_s4_94',
        image: '/img/coins/spain/juancarlos/2000-pesetas-1994.jpg',
        prices: { 1994: { MBC: 20, EBC: 35, SC: 50 } }
    },
    {
        value: 2000, label: '2000 Pesetas (Goya 1995)', id: '2000ptas_jc1_s4_95',
        image: '/img/coins/spain/juancarlos/2000-pesetas-1994.jpg',
        prices: { 1995: { MBC: 20, EBC: 35, SC: 50 } }
    },
    {
        value: 2000, label: '2000 Pesetas (Quijote 1996)', id: '2000ptas_jc1_s4_96',
        image: '/img/coins/spain/juancarlos/2000-pesetas-1994.jpg',
        prices: { 1996: { MBC: 25, EBC: 40, SC: 60 } }
    },
    {
        value: 2000, label: '2000 Pesetas (Don Juan 1997)', id: '2000ptas_jc1_s4_97',
        image: '/img/coins/spain/juancarlos/2000-pesetas-1994.jpg',
        prices: { 1997: { MBC: 25, EBC: 40, SC: 60 } }
    },
    {
        value: 2000, label: '2000 Pesetas (Felipe II 1998)', id: '2000ptas_jc1_s4_98',
        image: '/img/coins/spain/juancarlos/2000-pesetas-1994.jpg',
        prices: { 1998: { MBC: 25, EBC: 40, SC: 60 } }
    },
    {
        value: 2000, label: '2000 Pesetas (Jacobeo 1999)', id: '2000ptas_jc1_s4_99',
        image: '/img/coins/spain/juancarlos/2000-pesetas-1994.jpg',
        prices: { 1999: { MBC: 30, EBC: 45, SC: 65 } }
    },
    {
        value: 2000, label: '2000 Pesetas (Carlos V 2000)', id: '2000ptas_jc1_s4_00',
        image: '/img/coins/spain/juancarlos/2000-pesetas-1994.jpg',
        prices: { 2000: { MBC: 35, EBC: 50, SC: 75 } }
    },
    {
        value: 2000, label: '2000 Pesetas (Hispania 2001)', id: '2000ptas_jc1_s4_01',
        image: '/img/coins/spain/juancarlos/2000-pesetas-1994.jpg',
        prices: { 2001: { MBC: 30, EBC: 45, SC: 65 } }
    },
];

export const SPAIN_PESETA_DENOMINATIONS = [
    { value: 1, label: '1 Peseta', id: '1pta', image: '/img/coins/spain/1pta.jpg', estimatedValue: 0.10 },
    { value: 2, label: '2 Pesetas', id: '2ptas', image: '/img/coins/spain/2ptas.jpg', estimatedValue: 0.50 },
    { value: 5, label: '5 Pesetas', id: '5ptas', image: '/img/coins/spain/5ptas.jpg', estimatedValue: 0.30 },
    { value: 10, label: '10 Pesetas', id: '10ptas', image: '/img/coins/spain/10ptas.jpg', estimatedValue: 0.50 },
    { value: 25, label: '25 Pesetas', id: '25ptas', image: '/img/coins/spain/25ptas.jpg', estimatedValue: 1.00 },
    { value: 50, label: '50 Pesetas', id: '50ptas', image: '/img/coins/spain/50ptas.jpg', estimatedValue: 1.50 },
    { value: 100, label: '100 Pesetas', id: '100ptas', image: '/img/coins/spain/100ptas.jpg', estimatedValue: 2.00 },
    { value: 200, label: '200 Pesetas', id: '200ptas', image: '/img/coins/spain/200ptas.jpg', estimatedValue: 5.00 },
    { value: 500, label: '500 Pesetas', id: '500ptas', image: '/img/coins/spain/500ptas.jpg', estimatedValue: 8.00 },
    { value: 2000, label: '2000 Pesetas', id: '2000ptas', image: '/img/coins/spain/2000ptas.jpg', estimatedValue: 18.00 }
];

export const SPAIN_REPUBLIC_DENOMINATIONS = [
    {
        value: 0.05,
        label: '5 Céntimos',
        id: '5cts_rep',
        image: '/img/coins/spain/republic/spain-5-centimos-1937.jpg',
        prices: {
            1937: { MBC: 4, EBC: 7, SC: 12 }
        }
    },
    {
        value: 0.10,
        label: '10 Céntimos',
        id: '10cts_rep',
        image: '/img/coins/spain/republic/spain-10-centimos-1938.jpg',
        prices: {
            1938: { MBC: 800, EBC: 1500, SC: 2500 }
        }
    },
    {
        value: 0.25,
        label: '25 Céntimos',
        id: '25cts_rep_34',
        image: '/img/coins/spain/republic/spain-25-centimos-1934.jpg',
        yearHint: 1934,
        prices: {
            1934: { MBC: 2, EBC: 4, SC: 10 }
        }
    },
    {
        value: 0.25,
        label: '25 Céntimos',
        id: '25cts_rep_38',
        image: '/img/coins/spain/republic/spain-25-centimos-1938.jpg',
        yearHint: 1938,
        prices: {
            1938: { MBC: 5, EBC: 8, SC: 14 }
        }
    },
    {
        value: 0.50,
        label: '50 Céntimos',
        id: '50cts_rep',
        image: '/img/coins/spain/republic/spain-50-centimos-1937.jpg'
        // Precios en SPAIN_VARIANTS
    },
    {
        value: 1,
        label: '1 Peseta',
        id: '1pta_rep_33',
        image: '/img/coins/spain/republic/spain-1-peseta-1933.jpg',
        yearHint: 1933,
        prices: {
            1933: { MBC: 10, EBC: 20, SC: 30 }
        }
    },
    {
        value: 1,
        label: '1 Peseta',
        id: '1pta_rep_37',
        image: '/img/coins/spain/republic/spain-1-peseta-1937.jpg',
        yearHint: 1937,
        prices: {
            1937: { MBC: 5, EBC: 8, SC: 10 }
        }
    }
];

export const SPAIN_CW_LOCAL_DENOMINATIONS = [
    // Asturias y León
    { value: 0.50, label: '50 Cts (Asturias y León)', id: '50cts_asturias', image: '/img/coins/spain/local/asturias/50-centimos-1937.jpg', estimatedValue: 55.00 },
    { value: 1, label: '1 Peseta (Asturias y León)', id: '1pta_asturias', image: '/img/coins/spain/local/asturias/1-peseta-1937.jpg', estimatedValue: 85.00 },
    { value: 2, label: '2 Pesetas (Asturias y León)', id: '2ptas_asturias', image: '/img/coins/spain/local/asturias/2-pesetas-1937.jpg', estimatedValue: 25.00 },
    // Euskadi
    { value: 1, label: '1 Peseta (Euskadi)', id: '1pta_euskadi', image: '/img/coins/spain/local/euskadi/1-peseta-1937.jpg', estimatedValue: 14.00 },
    { value: 2, label: '2 Pesetas (Euskadi)', id: '2ptas_euskadi', image: '/img/coins/spain/local/euskadi/2-pesetas-1937.jpg', estimatedValue: 16.00 },

    // Santander, Palencia y Burgos
    { value: 0.50, label: '50 Cts (Santander, Palencia y Burgos)', id: '50cts_santander', image: '/img/coins/spain/local/santander/50-centimos-1937.jpg', estimatedValue: 80.00 },
    { value: 1, label: '1 Peseta (Santander, Palencia y Burgos)', id: '1pta_santander', image: '/img/coins/spain/local/santander/1-peseta-1937.jpg', estimatedValue: 35.00 },

    // Menorca
    { value: 0.05, label: '5 Cts (Menorca)', id: '5cts_menorca', image: '/img/coins/spain/local/menorca/5-centimos-1937.jpg', estimatedValue: 85.00 },
    { value: 0.10, label: '10 Cts (Menorca)', id: '10cts_menorca', image: '/img/coins/spain/local/menorca/10-centimos-1937.jpg', estimatedValue: 55.00 },
    { value: 0.25, label: '25 Cts (Menorca)', id: '25cts_menorca', image: '/img/coins/spain/local/menorca/25-centimos-1937.jpg', estimatedValue: 45.00 },
    { value: 1, label: '1 Pta (Menorca)', id: '1pta_menorca', image: '/img/coins/spain/local/menorca/1-peseta-1937.jpg', estimatedValue: 50.00 },
    { value: 2.50, label: '2.50 Ptas (Menorca)', id: '2.50ptas_menorca', image: '/img/coins/spain/local/menorca/2-1-2-pesetas-1937.jpg', estimatedValue: 80.00 },

    // Nulles
    { value: 0.05, label: '5 Cts (Nulles)', id: '5cts_nulles', image: '/img/coins/spain/local/nulles/5-centimos-1937.jpg', estimatedValue: 900.00 },
    { value: 0.10, label: '10 Cts (Nulles)', id: '10cts_nulles', image: '/img/coins/spain/local/nulles/10-centimos-1937.jpg', estimatedValue: 900.00 },
    { value: 0.25, label: '25 Cts (Nulles)', id: '25cts_nulles', image: '/img/coins/spain/local/nulles/25-centimos-1937.jpg', estimatedValue: 860.00 },
    { value: 0.50, label: '50 Cts (Nulles)', id: '50cts_nulles', image: '/img/coins/spain/local/nulles/50-centimos-1937.jpg', estimatedValue: 850.00 },
    { value: 1, label: '1 Pta (Nulles)', id: '1pta_nulles', image: '/img/coins/spain/local/nulles/1-peseta-1937.jpg', estimatedValue: 620.00 },

    // Olot
    { value: 0.10, label: '10 Cts (Olot)', id: '10cts_olot', image: '/img/coins/spain/local/olot/10-centimos-1937.jpg', estimatedValue: 250.00 },
    { value: 0.15, label: '15 Cts (Olot)', id: '15cts_olot', image: '/img/coins/spain/local/olot/15-centimos-1937.jpg', estimatedValue: 3250.00 },

    // Arenys de Mar
    { value: 0.50, label: '50 Cts (Arenys de Mar)', id: '50cts_arenys', image: '/img/coins/spain/local/arenys/50-centimos-1937.jpg', estimatedValue: 340.00 },
    { value: 1, label: '1 Pta (Arenys de Mar)', id: '1pta_arenys', image: '/img/coins/spain/local/arenys/1-peseta-1937.jpg', estimatedValue: 340.00 },

    // Ibi
    { value: 0.25, label: '25 Cts (Ibi)', id: '25cts_ibi', image: '/img/coins/spain/local/ibi/25-centimos-1937.jpg', estimatedValue: 125.00 },
    { value: 1, label: '1 Pta (Ibi)', id: '1pta_ibi', image: '/img/coins/spain/local/ibi/1-peseta-1937.jpg', estimatedValue: 410.00 },

    // Lora del Río
    { value: 0.25, label: '25 Cts (Lora del Río)', id: '25cts_lora', image: '/img/coins/spain/local/lora/25-centimos-1936.jpg', estimatedValue: 875.00 },

    // Arahal
    { value: 0.50, label: '50 Cts (Arahal)', id: '50cts_arahal', image: '/img/coins/spain/local/arahal/50-centimos-1938.jpg', estimatedValue: 500.00 },
    { value: 1, label: '1 Pta (Arahal)', id: '1pta_arahal', image: '/img/coins/spain/local/arahal/1-peseta-1938.jpg', estimatedValue: 180.00 },
    { value: 2, label: '2 Ptas (Arahal)', id: '2ptas_arahal', image: '/img/coins/spain/local/arahal/2-pesetas-1938.jpg', estimatedValue: 160.00 },

    // Marchena
    { value: 0.25, label: '25 Cts (Marchena)', id: '25cts_marchena', image: '/img/coins/spain/local/marchena/25-centimos-1936.jpg', estimatedValue: 290.00 },

    // Puebla de Cazalla
    { value: 0.10, label: '10 Cts (Puebla de Cazalla)', id: '10cts_puebla', image: '/img/coins/spain/local/puebla/10-centimos-1939.jpg', estimatedValue: 600.00 },
    { value: 0.25, label: '25 Cts (Puebla de Cazalla)', id: '25cts_puebla', image: '/img/coins/spain/local/puebla/25-centimos-1939.jpg', estimatedValue: 425.00 },

    // Cazalla de la Sierra
    { value: 0.10, label: '10 Cts (Cazalla de la S.)', id: '10cts_cazalla_sierra', image: '/img/coins/spain/local/cazalla/10-centimos-1939.jpg', estimatedValue: 120.00 },

    // Segarra de Gaia
    { value: 1, label: '1 Pta (Segarra de Gaia) - Níquel', id: '1pta_segarra_niquel', image: '/img/coins/spain/local/segarra/1-peseta-1937 niquel.jpg', estimatedValue: 60.00 },
    { value: 1, label: '1 Pta (Segarra de Gaia) - Cobre', id: '1pta_segarra_cobre', image: '/img/coins/spain/local/segarra/1-peseta-1937 cobre.jpg', estimatedValue: 300.00 },
    { value: 1, label: '1 Pta (Segarra de Gaia) - Latón', id: '1pta_segarra_laton', image: '/img/coins/spain/local/segarra/1-peseta-1937 laton.jpg', estimatedValue: 400.00 },

    // L'Ametlla del Vallès
    { value: 0.25, label: '25 Cts (L\'Ametlla del V.)', id: '25cts_ametlla', image: '/img/coins/spain/local/ametlla/5-centimos-1937.jpg', estimatedValue: 75.00 },
    { value: 0.50, label: '50 Cts (L\'Ametlla del V.)', id: '50cts_ametlla', image: '/img/coins/spain/local/ametlla/50-centimos-1937.jpg', estimatedValue: 225.00 },
    { value: 1, label: '1 Pta (L\'Ametlla del V.)', id: '1pta_ametlla', image: '/img/coins/spain/local/ametlla/1-peseta-1937.jpg', estimatedValue: 160.00 }
];

export const SPAIN_FRANCO_DENOMINATIONS = [
    {
        value: 0.05,
        label: '5 Céntimos',
        id: '5cts_franco',
        image: '/img/coins/spain/franco/5-centimos-1953.jpg',
        prices: {
            1940: 70,
            1941: 25,
            1945: 15,
            1953: 90
        }
    },
    {
        value: 0.10,
        label: '10 Céntimos',
        id: '10cts_franco_m1',
        image: '/img/coins/spain/franco/10-centimos-1945.jpg',
        prices: {
            1945: 15,
            1953: 6
        }
    },
    {
        value: 0.10,
        label: '10 Céntimos',
        id: '10cts_franco_m2',
        image: '/img/coins/spain/franco/10-centimos-1959.jpg',
        prices: {
            1959: 0.5
        }
    },
    {
        value: 0.25,
        label: '25 Céntimos',
        id: '25cts_franco',
        image: '/img/coins/spain/franco/25-centimos-1937.jpg',
        prices: {
            1937: 7.5
        }
    },
    {
        value: 0.50,
        label: '50 Céntimos',
        id: '50cts_franco_m1',
        image: '/img/coins/spain/franco/50-centimos-1949.jpg',
        estimatedValue: 3.00
    },
    {
        value: 0.50,
        label: '50 Céntimos',
        id: '50cts_franco_m2',
        image: '/img/coins/spain/franco/50-centimos-1966.jpg',
        estimatedValue: 3.00
    },
    {
        value: 1,
        label: '1 Peseta',
        id: '1pta_franco_m1',
        image: '/img/coins/spain/franco/1 peseta-1944.jpg',
        prices: {
            1944: 60
        }
    },
    {
        value: 1,
        label: '1 Peseta',
        id: '1pta_franco_m2',
        image: '/img/coins/spain/franco/1-peseta-1947.jpg',
        estimatedValue: 4.00
    },
    {
        value: 2.50,
        label: '2.50 Pesetas',
        id: '2.5ptas_franco',
        image: '/img/coins/spain/franco/2-1-2-pesetas-1953.jpg',
        estimatedValue: 30.00
    },
    {
        value: 5,
        label: '5 Pesetas',
        id: '5ptas_franco_m1',
        image: '/img/coins/spain/franco/5-pesetas-1949.jpg',
        estimatedValue: 15.00
    },
    {
        value: 5,
        label: '5 Pesetas',
        id: '5ptas_franco_m2',
        image: '/img/coins/spain/franco/5-pesetas-1957.jpg',
        estimatedValue: 3.00
    },
    {
        value: 25,
        label: '25 Pesetas',
        id: '25ptas_franco',
        image: '/img/coins/spain/franco/25-pesetas-1957.jpg',
        estimatedValue: 6.00
    },
    {
        value: 50,
        label: '50 Pesetas',
        id: '50ptas_franco',
        image: '/img/coins/spain/franco/50-pesetas-1957.jpg',
        estimatedValue: 10.00
    },
    {
        value: 100,
        label: '100 Pesetas',
        id: '100ptas_franco',
        image: '/img/coins/spain/franco/100-pesetas-1966.jpg',
        estimatedValue: 15.00
    }
];

export const SPAIN_ALFONSO_XIII_DENOMINATIONS = [
    { value: 0.01, label: '1 Céntimo', id: '1ct_alfonso13', image: '/img/coins/spain/alfonso13/1-centimo.jpg', prices: { 1911: 180, 1912: 20, 1913: 35 } },
    { value: 0.02, label: '2 Céntimos', id: '2cts_alfonso13', image: '/img/coins/spain/alfonso13/2-centimos.jpg', prices: { 1904: 20, 1905: 30, 1911: 25, 1912: 30 } },
    { value: 0.25, label: '25 Céntimos', id: '25cts_alfonso13', image: '/img/coins/spain/alfonso13/25-centimos.jpg', prices: { 1925: 180, 1927: 200 } },
    { value: 0.05, label: '1 Cent. Peso', id: '1cv_peso_alfonso13', image: '/img/coins/spain/alfonso13/1-centavo.jpg', prices: { 1894: 8500 } },
    { value: 0.10, label: '2 Cent. Peso', id: '2cvs_peso_alfonso13', image: '/img/coins/spain/alfonso13/2-centavos.jpg', prices: { 1894: 10000 } },
    { value: 0.25, label: '5 Cent. Peso (PR)', id: '5cvs_peso_pr_alfonso13', image: '/img/coins/spain/alfonso13/5-centavos-pr.jpg', prices: { 1896: 270 } },
    { value: 0.50, label: '10 Cent. Peso (PR)', id: '10cvs_peso_pr_alfonso13', image: '/img/coins/spain/alfonso13/10-centavos-pr.jpg', prices: { 1896: 300 } },
    { value: 0.50, label: '50 Céntimos', id: '50cts_alfonso13', image: '/img/coins/spain/alfonso13/50-centimos.jpg', prices: { 1889: 350, 1894: 150, 1896: 300, 1900: 90, 1910: 60, 1926: 15 } },
    { value: 1, label: '1 Peseta', id: '1pta_alfonso13', image: '/img/coins/spain/alfonso13/1-peseta.jpg', prices: { 1889: 4500, 1891: 475, 1893: 950, 1894: 2500, 1896: 140, 1899: 150, 1900: 150, 1901: 225, 1902: 400, 1903: 150, 1904: 180, 1905: 1400 } },
    { value: 1, label: '20 Cent. Peso (PR)', id: '20cvs_peso_pr_alfonso13', image: '/img/coins/spain/alfonso13/20-centavos-pr.jpg', prices: { 1895: 550 } },
    { value: 2, label: '2 Pesetas', id: '2ptas_alfonso13', image: '/img/coins/spain/alfonso13/2-pesetas.jpg', prices: { 1889: 1600, 1891: 1400, 1892: 500, 1894: 1000, 1905: 50 } },
    { value: 2, label: '40 Cent. Peso (PR)', id: '40cvs_peso_pr_alfonso13', image: '/img/coins/spain/alfonso13/40-centavos-pr.jpg', prices: { 1896: 1800 } },
    { value: 5, label: '5 Pesetas', id: '5ptas_alfonso13', image: '/img/coins/spain/alfonso13/5-pesetas.jpg', estimatedValue: 40 },
    { value: 5, label: '1 Peso (PR)', id: '1peso_pr_alfonso13', image: '/img/coins/spain/alfonso13/1-peso-pr.jpg', prices: { 1895: 2000 } },
    { value: 5, label: '1 Peso (Filipinas)', id: '1peso_fil_alfonso13', image: '/img/coins/spain/alfonso13/1-peso-filipinas.jpg', prices: { 1897: 500 } },
    { value: 20, label: '20 Pesetas', id: '20ptas_alfonso13', image: '/img/coins/spain/alfonso13/20-pesetas.jpg', prices: { 1889: 450, 1890: 3850, 1892: 3500, 1899: 600, 1904: 4200 } },
    { value: 100, label: '100 Pesetas', id: '100ptas_alfonso13', image: '/img/coins/spain/alfonso13/100-pesetas.jpg', prices: { 1897: 2750 } }
];

export const SPAIN_ALFONSO_XII_DENOMINATIONS = [
    { value: 0.01, label: '1 Céntimo', id: '1ct_alfonso12', image: '/img/coins/spain/alfonso12/1-centimo.jpg', prices: { 1878: 7000 } },
    { value: 0.02, label: '2 Céntimos', id: '2cts_alfonso12', image: '/img/coins/spain/alfonso12/2-centimos.jpg', prices: { 1878: 9000 } },
    { value: 0.05, label: '5 Céntimos', id: '5cts_alfonso12', image: '/img/coins/spain/alfonso12/5-centimos.jpg', prices: { 1877: 250, 1878: 300, 1879: 200 } },
    { value: 0.10, label: '10 Céntimos', id: '10cts_alfonso12', image: '/img/coins/spain/alfonso12/10-centimos.jpg', prices: { 1877: 450, 1878: 350, 1879: 400 } },
    { value: 0.50, label: '50 Céntimos', id: '50cts_alfonso12', image: '/img/coins/spain/alfonso12/50-centimos.jpg', estimatedValue: 20 },
    { value: 1, label: '1 Peseta', id: '1pta_alfonso12', image: '/img/coins/spain/alfonso12/1-peseta.jpg', estimatedValue: 25 },
    { value: 2, label: '2 Pesetas', id: '2ptas_alfonso12', image: '/img/coins/spain/alfonso12/2-pesetas.jpg', estimatedValue: 40 },
    { value: 5, label: '5 Pesetas', id: '5ptas_alfonso12', image: '/img/coins/spain/alfonso12/5-pesetas.jpg', estimatedValue: 50 },
    { value: 10, label: '10 Pesetas', id: '10ptas_alfonso12', image: '/img/coins/spain/alfonso12/10-pesetas.jpg', estimatedValue: 350 },
    { value: 25, label: '25 Pesetas', id: '25ptas_alfonso12', image: '/img/coins/spain/alfonso12/25-pesetas.jpg', estimatedValue: 400 },
    { value: 0.50, label: '10 Cent. Peso', id: '10cvs_peso_alfonso12', image: '/img/coins/spain/alfonso12/10-centavos.jpg', prices: { 1880: 8000, 1881: 950, 1882: 1200, 1883: 900, 1884: 4000, 1885: 125 } },
    { value: 1, label: '20 Cent. Peso', id: '20cvs_peso_alfonso12', image: '/img/coins/spain/alfonso12/20-centavos.jpg', prices: { 1880: 4500, 1881: 1200, 1882: 1200, 1883: 950, 1884: 1100, 1885: 180 } },
    { value: 2.5, label: '50 Cent. Peso', id: '50cvs_peso_alfonso12', image: '/img/coins/spain/alfonso12/50-centavos.jpg', prices: { 1880: 2400, 1881: 900, 1882: 900, 1883: 1000, 1884: 2700, 1885: 180 } },
    { value: 10, label: '10 Pesetas', id: '10ptas_alfonso12', image: '/img/coins/spain/alfonso12/10-pesetas.jpg', prices: { 1878: 600, 1879: 3000 } },
    { value: 20, label: '4 Pesos', id: '4pesos_alfonso12', image: '/img/coins/spain/alfonso12/4-pesos.jpg', prices: { 1880: 40000, 1881: 36000, 1882: 2800, 1885: 36000 } },
    { value: 25, label: '25 Pesetas', id: '25ptas_alfonso12', image: '/img/coins/spain/alfonso12/25-pesetas.jpg', prices: { 1876: 400, 1877: 390, 1879: 400, 1880: 390, 1881: 32000, 1883: 1000, 1884: 700 } }
];

export const SPAIN_PROVISIONAL_DENOMINATIONS = [
    { value: 0.0625, label: '25 Mil. Escudo', id: '25mils_esc_prov', image: '/img/coins/spain/provisional/25-milesimas-escudo.jpg', prices: { 1868: 900 } },
    { value: 0.01, label: '1 Céntimo', id: '1ct_prov', image: '/img/coins/spain/provisional/1-centimo.jpg', prices: { 1870: 35 } },
    { value: 0.02, label: '2 Céntimos', id: '2cts_prov', image: '/img/coins/spain/provisional/2-centimos.jpg', prices: { 1870: 75 } },
    { value: 0.05, label: '5 Céntimos', id: '5cts_prov', image: '/img/coins/spain/provisional/5-centimos.jpg', prices: { 1870: 280 } },
    { value: 0.10, label: '10 Céntimos', id: '10cts_prov', image: '/img/coins/spain/provisional/10-centimos.jpg', prices: { 1869: 4800, 1870: 500 } },
    { value: 0.20, label: '20 Céntimos', id: '20cts_prov', image: '/img/coins/spain/provisional/20-centimos.jpg', prices: { 1869: 12500, 1870: 2600 } },
    { value: 0.50, label: '50 Céntimos', id: '50cts_prov', image: '/img/coins/spain/provisional/50-centimos.jpg', prices: { 1869: 1000, 1870: 1600 } },
    { value: 1, label: '1 Peseta', id: '1pta_prov', image: '/img/coins/spain/provisional/1-peseta.jpg', estimatedValue: 40 },
    { value: 2, label: '2 Pesetas', id: '2ptas_prov', image: '/img/coins/spain/provisional/2-pesetas.jpg', estimatedValue: 60 },
    { value: 5, label: '5 Pesetas', id: '5ptas_prov', image: '/img/coins/spain/provisional/5-pesetas.jpg', prices: { 1869: 36000, 1870: 1550, 1871: 900 } },
    { value: 25, label: '25 Pesetas', id: '25ptas_prov', image: '/img/coins/spain/provisional/25-pesetas.jpg', estimatedValue: 70000 },
    { value: 100, label: '100 Pesetas', id: '100ptas_prov', image: '/img/coins/spain/provisional/100-pesetas.jpg', prices: { 1870: 230000 } }
];

export const SPAIN_PERIODS = [
    {
        id: 'jc1',
        name: 'Juan Carlos I (1975-2001)',
        startYear: 1975,
        endYear: 2001,
        denominations: SPAIN_JC1_DENOMINATIONS
    },
    {
        id: 'franco',
        name: 'Estado Español - Franco (1937-1975)',
        startYear: 1937,
        endYear: 1975,
        denominations: SPAIN_FRANCO_DENOMINATIONS
    },
    {
        id: 'civil_war_local',
        name: 'Guerra Civil: Emisiones Locales (1936-1939)',
        startYear: 1936,
        endYear: 1939,
        subPeriods: [
            {
                id: 'cw_euzkadi',
                name: 'Gobierno de Euzkadi',
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('euskadi'))
            },
            {
                id: 'cw_asturias',
                name: 'Asturias y León',
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('asturias'))
            },
            {
                id: 'cw_santander',
                name: 'Santander, Palencia y Burgos',
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('santander'))
            },
            {
                id: 'cw_menorca',
                name: 'Menorca',
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('menorca'))
            },
            {
                id: 'cw_nulles',
                name: 'Nulles (Tarragona)',
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('nulles'))
            },
            {
                id: 'cw_olot',
                name: 'Olot (Gerona)',
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('olot'))
            },
            {
                id: 'cw_arenys',
                name: 'Arenys de Mar (Barcelona)',
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('arenys'))
            },
            {
                id: 'cw_ibi',
                name: 'Ibi (Alicante)',
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('ibi'))
            },
            {
                id: 'cw_segarra',
                name: 'Segarra de Gaia (Tarragona)',
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('segarra'))
            },
            {
                id: 'cw_ametlla',
                name: 'L\'Ametlla del Vallès (Barna)',
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('ametlla'))
            },
            {
                id: 'cw_arahal',
                name: 'Arahal (Sevilla)',
                startYear: 1938,
                endYear: 1938,
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('arahal'))
            },
            {
                id: 'cw_lora',
                name: 'Lora del Río (Sevilla)',
                startYear: 1936,
                endYear: 1936,
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('lora'))
            },
            {
                id: 'cw_marchena',
                name: 'Marchena (Sevilla)',
                startYear: 1936,
                endYear: 1936,
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('marchena'))
            },
            {
                id: 'cw_puebla',
                name: 'Puebla de Cazalla (Sevilla)',
                startYear: 1939,
                endYear: 1939,
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('puebla'))
            },
            {
                id: 'cw_cazalla_sierra',
                name: 'Cazalla de la Sierra (Sevilla)',
                startYear: 1939,
                endYear: 1939,
                denominations: SPAIN_CW_LOCAL_DENOMINATIONS.filter(d => d.id.includes('cazalla_sierra'))
            }
        ]
    },
    {
        id: 'republic',
        name: 'II República (1931-1939)',
        startYear: 1931,
        endYear: 1939,
        denominations: SPAIN_REPUBLIC_DENOMINATIONS
    },
    {
        id: 'alfonso13',
        name: 'Alfonso XIII (1886-1931)',
        startYear: 1886,
        endYear: 1931,
        denominations: SPAIN_ALFONSO_XIII_DENOMINATIONS
    },
    {
        id: 'alfonso12',
        name: 'Alfonso XII (1874-1885)',
        startYear: 1874,
        endYear: 1885,
        denominations: SPAIN_ALFONSO_XII_DENOMINATIONS
    },
    {
        id: 'provisional',
        name: 'Gobierno Provisional (1868-1874)',
        startYear: 1868,
        endYear: 1874,
        denominations: SPAIN_PROVISIONAL_DENOMINATIONS
    }
];

const SPAIN_PROVISIONAL_YEARS = {
    '25mils_esc_prov': [1868],
    '1ct_prov': [1870],
    '2cts_prov': [1870],
    '5cts_prov': [1870],
    '10cts_prov': [1869, 1870],
    '20cts_prov': [1869, 1870],
    '50cts_prov': [1869, 1870],
    '1pta_prov': [1869, 1870],
    '2ptas_prov': [1869, 1870],
    '5ptas_prov': [1869, 1870, 1871],
    '25ptas_prov': [1871],
    '100ptas_prov': [1870, 1871]
};

// Years whitelist for Alfonso XII
const SPAIN_ALFONSO_XII_YEARS = {
    '1ct_alfonso12': [1878],
    '2cts_alfonso12': [1878],
    '5cts_alfonso12': [1877, 1878, 1879],
    '10cts_alfonso12': [1877, 1878, 1879],
    '50cts_alfonso12': [1880, 1881, 1885],
    '1pta_alfonso12': [1876, 1881, 1882, 1883, 1884, 1885],
    '10cvs_peso_alfonso12': [1880, 1881, 1882, 1883, 1884, 1885],
    '20cvs_peso_alfonso12': [1880, 1881, 1882, 1883, 1884, 1885],
    '50cvs_peso_alfonso12': [1880, 1881, 1882, 1883, 1884, 1885],
    '2ptas_alfonso12': [1879, 1881, 1882, 1883, 1884],
    '5ptas_alfonso12': [1875, 1876, 1877, 1878, 1879, 1881, 1882, 1883, 1884, 1885],
    '10ptas_alfonso12': [1878, 1879],
    '4pesos_alfonso12': [1880, 1881, 1882, 1885],
    '25ptas_alfonso12': [1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885]
};

// Years whitelist for Alfonso XIII
const SPAIN_ALFONSO_XIII_YEARS = {
    '1ct_alfonso13': [1906, 1911, 1912, 1913],
    '2cts_alfonso13': [1904, 1905, 1911, 1912],
    '1cv_peso_alfonso13': [1894],
    '2cvs_peso_alfonso13': [1894],
    '5cvs_peso_pr_alfonso13': [1896],
    '10cvs_peso_pr_alfonso13': [1896],
    '20cvs_peso_pr_alfonso13': [1895],
    '25cts_alfonso13': [1925, 1927],
    '50cts_alfonso13': [1889, 1892, 1894, 1896, 1900, 1904, 1910, 1926],
    '1pta_alfonso13': [1889, 1891, 1893, 1894, 1896, 1899, 1900, 1901, 1902, 1903, 1904, 1905],
    '2ptas_alfonso13': [1889, 1891, 1892, 1894, 1905],
    '40cvs_peso_pr_alfonso13': [1896],
    '5ptas_alfonso13': [1888, 1889, 1890, 1891, 1892, 1893, 1894, 1896, 1897, 1898, 1899],
    '1peso_pr_alfonso13': [1895],
    '1peso_fil_alfonso13': [1897],
    '20ptas_alfonso13': [1889, 1890, 1892, 1899, 1904],
    '100ptas_alfonso13': [1897]
};

export const SPAIN_VARIANTS = {
    '1ct_alfonso13': {
        1906: [
            { id: '1906_slv', label: 'SL V', prices: { MBC: 7 }, image: '/img/coins/spain/alfonso13/1-centimo.jpg' },
            { id: '1906_smv', label: 'SM V', prices: { MBC: 1400 }, image: '/img/coins/spain/alfonso13/1-centimo.jpg' }
        ]
    },
    '50cts_alfonso13': {
        1892: [
            { id: '1892_92_pgm', label: '*9-2 PG M', prices: { MBC: 60 }, image: '/img/coins/spain/alfonso13/50-centimos.jpg' },
            { id: '1892_22_pgm', label: '*2-2 PG M', prices: { MBC: 350 }, image: '/img/coins/spain/alfonso13/50-centimos.jpg' },
            { id: '1892_62_pgm', label: '*6-2 PG M', prices: { MBC: 450 }, image: '/img/coins/spain/alfonso13/50-centimos.jpg' }
        ],
        1904: [
            { id: '1904_04_smv', label: '*0-4 SM V', prices: { MBC: 35 }, image: '/img/coins/spain/alfonso13/50-centimos.jpg' },
            { id: '1904_10_smv', label: '*1-0 SM V', prices: { MBC: 45 }, image: '/img/coins/spain/alfonso13/50-centimos.jpg' }
        ]
    },
    '5ptas_alfonso13': {
        1888: [
            { id: '1888_msm', label: 'MS M', prices: { MBC: 10000 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' },
            { id: '1888_mpm', label: 'MP M', prices: { MBC: 600 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' }
        ],
        1889: [
            { id: '1889_mpm', label: 'MP M', prices: { MBC: 650 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' }
        ],
        1890: [
            { id: '1890_mpm', label: 'MP M', prices: { MBC: 675 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' },
            { id: '1890_pgm', label: 'PG M', prices: { MBC: 675 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' }
        ],
        1891: [
            { id: '1891_pgm', label: 'PG M', prices: { MBC: 600 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' }
        ],
        1892: [
            { id: '1892_pgm_1', label: 'PG M (Tipo 1)', prices: { MBC: 1000 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' },
            { id: '1892_pgm_2', label: 'PG M (Tipo 2)', prices: { MBC: 650 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' }
        ],
        1893: [
            { id: '1893_pgl', label: 'PG L', prices: { MBC: 700 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' },
            { id: '1893_pgv', label: 'PG V', prices: { MBC: 1200 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' }
        ],
        1894: [
            { id: '1894_pgv', label: 'PG V', prices: { MBC: 800 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' }
        ],
        1896: [
            { id: '1896_pgv', label: 'PG V', prices: { MBC: 400 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' }
        ],
        1897: [
            { id: '1897_sgv', label: 'SG V', prices: { MBC: 350 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' }
        ],
        1898: [
            { id: '1898_sgv', label: 'SG V', prices: { MBC: 160 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' }
        ],
        1899: [
            { id: '1899_sgv', label: 'SG V', prices: { MBC: 180 }, image: '/img/coins/spain/alfonso13/5-pesetas.jpg' }
        ]
    },
    '1pta_prov': {
        1869: [
            { id: '1869_snm', label: 'SN M', prices: { MBC: 1200 }, image: '/img/coins/spain/provisional/1-peseta.jpg' },
            { id: '1869_69_snm', label: '*69 SN M', prices: { MBC: 6000 }, image: '/img/coins/spain/provisional/1-peseta.jpg' }
        ],
        1870: [
            { id: '1870_70_snm', label: '*70 SN M', prices: { MBC: 1500 }, image: '/img/coins/spain/provisional/1-peseta.jpg' },
            { id: '1870_73_dem', label: '*73 DE M', prices: { MBC: 1000 }, image: '/img/coins/spain/provisional/1-peseta.jpg' }
        ]
    },
    '2ptas_prov': {
        1869: [
            { id: '1869_1869_snm', label: '*18-69 SN M', prices: { MBC: 1200 }, image: '/img/coins/spain/provisional/2-pesetas.jpg' },
            { id: '1869_1818_snm', label: '*18-18 SN M', prices: { MBC: 1450 }, image: '/img/coins/spain/provisional/2-pesetas.jpg' }
        ],
        1870: [
            { id: '1870_1870_snm', label: '*18-70 SN M', prices: { MBC: 1200 }, image: '/img/coins/spain/provisional/2-pesetas.jpg' },
            { id: '1870_1873_dem', label: '*18-73 DE M', prices: { MBC: 750 }, image: '/img/coins/spain/provisional/2-pesetas.jpg' },
            { id: '1870_1874_dem', label: '*18-74 DE M', prices: { MBC: 750 }, image: '/img/coins/spain/provisional/2-pesetas.jpg' },
            { id: '1870_1875_dem', label: '*18-75 DE M', prices: { MBC: 1200 }, image: '/img/coins/spain/provisional/2-pesetas.jpg' },
            { id: '1870_7018_snm', label: '*70-18 SN M', prices: { MBC: 1450 }, image: '/img/coins/spain/provisional/2-pesetas.jpg' },
            { id: '1870_7518_dem', label: '*75-18 DE M', prices: { MBC: 1650 }, image: '/img/coins/spain/provisional/2-pesetas.jpg' }
        ]
    },
    '5ptas_prov': {
        1871: [
            { id: '1871_1871_sdm', label: '*18-71 SD M', prices: { MBC: 950 }, image: '/img/coins/spain/provisional/5-pesetas.jpg' },
            { id: '1871_1873_dem', label: '*18-73 DE M', prices: { MBC: 4000 }, image: '/img/coins/spain/provisional/5-pesetas.jpg' },
            { id: '1871_1874_dem', label: '*18-74 DE M', prices: { MBC: 900 }, image: '/img/coins/spain/provisional/5-pesetas.jpg' },
            { id: '1871_1875_dem', label: '*18-75 DE M', prices: { MBC: 1400 }, image: '/img/coins/spain/provisional/5-pesetas.jpg' },
            { id: '1871_1818_sdm', label: '*18-18 SD M', prices: { MBC: 1200 }, image: '/img/coins/spain/provisional/5-pesetas.jpg' }
        ]
    },
    '25ptas_prov': {
        1871: [
            { id: '1871_stars', label: 'Canto Estrellas', prices: { MBC: 95000 }, image: '/img/coins/spain/provisional/25-pesetas.jpg' },
            { id: '1871_legend', label: 'Canto Leyenda', prices: { MBC: 70000 }, image: '/img/coins/spain/provisional/25-pesetas.jpg' }
        ]
    },
    '100ptas_prov': {
        1871: [
            { id: '1871_red_gold', label: 'Oro Rojo', prices: { MBC: 160000 }, image: '/img/coins/spain/provisional/100-pesetas.jpg' },
            { id: '1871_yellow_gold', label: 'Oro Amarillo', prices: { MBC: 140000 }, image: '/img/coins/spain/provisional/100-pesetas.jpg' }
        ]
    },
    '50cts_alfonso12': {
        1880: [
            { id: '1880_1880', label: '*18-80', prices: { MBC: 300 }, image: '/img/coins/spain/alfonso12/50-centimos.jpg' }
        ],
        1881: [
            { id: '1881_1881', label: '*18-81', prices: { MBC: 400 }, image: '/img/coins/spain/alfonso12/50-centimos.jpg' }
        ],
        1885: [
            { id: '1885_1886', label: '*18-86', prices: { MBC: 350 }, image: '/img/coins/spain/alfonso12/50-centimos.jpg' },
            { id: '1885_1887', label: '*18-87', prices: { MBC: 500 }, image: '/img/coins/spain/alfonso12/50-centimos.jpg' }
        ]
    },
    '1pta_alfonso12': {
        1876: [
            { id: '1876_dem', label: 'DE M', prices: { MBC: 2000 }, image: '/img/coins/spain/alfonso12/1-peseta.jpg' }
        ],
        1881: [
            { id: '1881_msm', label: 'MS M', prices: { MBC: 6000 }, image: '/img/coins/spain/alfonso12/1-peseta.jpg' }
        ],
        1882: [
            { id: '1882_81_msm', label: '*81 MS M', prices: { MBC: 1800 }, image: '/img/coins/spain/alfonso12/1-peseta.jpg' },
            { id: '1882_82_msm', label: '*82 MS M', prices: { MBC: 900 }, image: '/img/coins/spain/alfonso12/1-peseta.jpg' }
        ],
        1883: [
            { id: '1883_msm', label: 'MS M', prices: { MBC: 850 }, image: '/img/coins/spain/alfonso12/1-peseta.jpg' }
        ],
        1884: [
            { id: '1884_msm', label: 'MS M', prices: { MBC: 9000 }, image: '/img/coins/spain/alfonso12/1-peseta.jpg' }
        ],
        1885: [
            { id: '1885_85_msm', label: '*85 MS M', prices: { MBC: 1200 }, image: '/img/coins/spain/alfonso12/1-peseta.jpg' },
            { id: '1885_86_msm', label: '*86 MS M', prices: { MBC: 1500 }, image: '/img/coins/spain/alfonso12/1-peseta.jpg' }
        ]
    },
    '2ptas_alfonso12': {
        1879: [
            { id: '1879_emm', label: 'EM M', prices: { MBC: 900 }, image: '/img/coins/spain/alfonso12/2-pesetas.jpg' }
        ],
        1881: [
            { id: '1881_msm', label: 'MS M', prices: { MBC: 900 }, image: '/img/coins/spain/alfonso12/2-pesetas.jpg' }
        ],
        1882: [
            { id: '1882_81_msm', label: '*81 MS M', prices: { MBC: 1200 }, image: '/img/coins/spain/alfonso12/2-pesetas.jpg' },
            { id: '1882_82_msm', label: '*82 MS M', prices: { MBC: 350 }, image: '/img/coins/spain/alfonso12/2-pesetas.jpg' }
        ],
        1883: [
            { id: '1883_msm', label: 'MS M', prices: { MBC: 1100 }, image: '/img/coins/spain/alfonso12/2-pesetas.jpg' }
        ],
        1884: [
            { id: '1884_msm', label: 'MS M', prices: { MBC: 800 }, image: '/img/coins/spain/alfonso12/2-pesetas.jpg' }
        ]
    },
    '5ptas_alfonso12': {
        1875: [
            { id: '1875_dem', label: 'DE M', prices: { MBC: 1250 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' }
        ],
        1876: [
            { id: '1876_dem', label: 'DE M', prices: { MBC: 1000 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' }
        ],
        1877: [
            { id: '1877_dem', label: 'DE M', prices: { MBC: 1200 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' }
        ],
        1878: [
            { id: '1878_dem', label: 'DE M', prices: { MBC: 1250 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' },
            { id: '1878_emm', label: 'EM M', prices: { MBC: 1250 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' }
        ],
        1879: [
            { id: '1879_emm', label: 'EM M', prices: { MBC: 1700 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' }
        ],
        1881: [
            { id: '1881_msm', label: 'MS M', prices: { MBC: 3000 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' }
        ],
        1882: [
            { id: '1882_msm', label: 'MS M', prices: { MBC: 1400 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' },
            { id: '1882_81_msm', label: '*81 MS M', prices: { MBC: 2000 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' }
        ],
        1883: [
            { id: '1883_msm', label: 'MS M', prices: { MBC: 1400 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' }
        ],
        1884: [
            { id: '1884_msm', label: 'MS M', prices: { MBC: 1400 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' },
            { id: '1884_1818_msm', label: '*18-18 MS M', prices: { MBC: 1500 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' }
        ],
        1885: [
            { id: '1885_85_msm', label: '*85 MS M', prices: { MBC: 1800 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' },
            { id: '1885_86_msm', label: '*86 MS M', prices: { MBC: 1750 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' },
            { id: '1885_87_msm', label: '*87 MS M', prices: { MBC: 756 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' },
            { id: '1885_87_mpm', label: '*87 MP M', prices: { MBC: 1700 }, image: '/img/coins/spain/alfonso12/5-pesetas.jpg' }
        ]
    },
    '25ptas_alfonso12': {
        1878: [
            { id: '1878_dem', label: 'DE M', prices: { MBC: 390 }, image: '/img/coins/spain/alfonso12/25-pesetas.jpg' },
            { id: '1878_emm', label: 'EM M', prices: { MBC: 400 }, image: '/img/coins/spain/alfonso12/25-pesetas.jpg' }
        ],
        1881: [
            { id: '1881_old', label: 'Diseño Antiguo (Sin patillas)', prices: { MBC: 32000 }, image: '/img/coins/spain/alfonso12/25-pesetas.jpg' },
            { id: '1881_new', label: 'Diseño Nuevo (Con patillas)', prices: { MBC: 400 }, image: '/img/coins/spain/alfonso12/25-pesetas.jpg' }
        ],
        1882: [
            { id: '1882_81', label: '*81', prices: { MBC: 1500 }, image: '/img/coins/spain/alfonso12/25-pesetas.jpg' },
            { id: '1882_82', label: '*82', prices: { MBC: 1050 }, image: '/img/coins/spain/alfonso12/25-pesetas.jpg' }
        ],
        1885: [
            { id: '1885_85', label: '*85', prices: { MBC: 2600 }, image: '/img/coins/spain/alfonso12/25-pesetas.jpg' },
            { id: '1885_86', label: '*86', prices: { MBC: 7000 }, image: '/img/coins/spain/alfonso12/25-pesetas.jpg' }
        ]
    },
    '50cts_rep': {
        1937: [
            { id: 'std_34', label: 'Estándar (*3-4)', prices: { MBC: 15, EBC: 25, SC: 35 }, image: '/img/coins/spain/republic/spain-50-centimos-1937.jpg' },
            { id: 'std_36', label: 'Estándar (*3-6)', prices: { MBC: 10, EBC: 18, SC: 25 }, image: '/img/coins/spain/republic/spain-50-centimos-1937.jpg' },
            { id: 'pts_sq', label: 'Orla puntos cuadrados (*3-6)', prices: { MBC: 20, EBC: 35, SC: 46 }, image: '/img/coins/spain/variants/pts_sq.jpg' },
            { id: 'stars_an', label: 'Estrellas anepígrafas', prices: { MBC: 5, EBC: 10, SC: 18 }, image: '/img/coins/spain/variants/stars_an.jpg' },
            { id: 'no_stars', label: 'Sin estrellas', prices: { MBC: 15, EBC: 30, SC: 50 }, image: '/img/coins/spain/variants/no_stars.jpg' },
            { id: 'no_stars_sq', label: 'Sin estrellas y orla puntos cuadrados', prices: { MBC: 25, EBC: 45, SC: 70 }, image: '/img/coins/spain/variants/no_stars_sq.jpg' }
        ]
    },
    '50cts_santander': {
        1937: [
            { id: 'std_santander', label: 'Estándar', prices: { MBC: 18, EBC: 45, SC: 80 }, image: '/img/coins/spain/local/santander/50-centimos-1937.jpg' },
            { id: 'pjr_santander', label: 'Contramarca P.J.R.', prices: { MBC: 18, EBC: 45, SC: 95 }, image: '/img/coins/spain/local/santander/50-centimos-1937.jpg' }
        ]
    },
    '50cts_ametlla': {
        1937: [
            { id: 'std_ametlla', label: 'Estándar', prices: { MBC: 100, EBC: 160, SC: 225 }, image: '/img/coins/spain/local/ametlla/50-centimos-1937.jpg' },
            { id: 'ley_ametlla_50', label: 'Con leyenda en reverso', prices: { MBC: 200, EBC: 400, SC: 550 }, image: '/img/coins/spain/local/ametlla/50-centimos-1937 leyenda.jpg' }
        ]
    },
    '1pta_ametlla': {
        1937: [
            { id: 'std_pta_ametlla', label: 'Estándar', prices: { MBC: 80, EBC: 120, SC: 160 }, image: '/img/coins/spain/local/ametlla/1-peseta-1937.jpg' },
            { id: 'ley_ametlla_1', label: 'Con leyenda en reverso', prices: { MBC: 180, EBC: 280, SC: 350 }, image: '/img/coins/spain/local/ametlla/1-peseta-1937 leyenda.jpg' }
        ]
    },
    '25cts_ibi': {
        1937: [
            { id: 'std_ibi', label: 'Estándar', prices: { MBC: 45, EBC: 80, SC: 125 }, image: '/img/coins/spain/local/ibi/25-centimos-1937.jpg' },
            { id: 'map_ibi', label: 'Con mapa de España', prices: { MBC: 150, EBC: 280, SC: 380 }, image: '/img/coins/spain/local/ibi/25-centimos-1937 mapa.jpg' }
        ]
    },
    '25cts_marchena': {
        1936: [
            { id: 'std_marchena', label: 'Estándar (25 Cts.)', prices: { MBC: 120, EBC: 210, SC: 290 }, image: '/img/coins/spain/local/marchena/25-centimos-1936.jpg' },
            { id: 'err_marchena', label: 'Error (0.25 Cts.)', prices: { MBC: 1400, EBC: 2100, SC: 2800 }, image: '/img/coins/spain/local/marchena/0.25-centimos-1936.jpg' }
        ]
    },
    '10cts_franco_m1': {
        1940: [
            { id: 'plus_40', label: 'PLUS', prices: { MBC: 60 }, image: '/img/coins/spain/franco/10-centimos-1945.jpg' },
            { id: 'plvs_40', label: 'PLVS', prices: { MBC: 360 }, image: '/img/coins/spain/franco/10-centimos-1945.jpg' }
        ],
        1941: [
            { id: 'plus_41', label: 'PLUS', prices: { MBC: 30 }, image: '/img/coins/spain/franco/10-centimos-1945.jpg' },
            { id: 'plvs_41', label: 'PLVS', prices: { MBC: 160 }, image: '/img/coins/spain/franco/10-centimos-1945.jpg' }
        ]
    },
    '50cts_franco_m1': {
        1949: [
            { id: 'star_51_inv', label: '*51 Flechas Inv.', prices: { MBC: 30 }, image: '/img/coins/spain/franco/50-centimos-1949.jpg' },
            { id: 'star_51', label: '*51', prices: { MBC: 25 }, image: '/img/coins/spain/franco/50-centimos-1949.jpg' },
            { id: 'star_e51', label: '*E-51', status: STATUS_SET_ONLY, prices: { MBC: 500 }, image: '/img/coins/spain/franco/50-centimos-1949.jpg' },
            { id: 'star_52', label: '*52', prices: { MBC: 21 }, image: '/img/coins/spain/franco/50-centimos-1949.jpg' },
            { id: 'star_53', label: '*53', prices: { MBC: 45 }, image: '/img/coins/spain/franco/50-centimos-1949.jpg' },
            { id: 'star_54', label: '*54', prices: { MBC: 30 }, image: '/img/coins/spain/franco/50-centimos-1949.jpg' },
            { id: 'star_56', label: '*56', prices: { MBC: 25 }, image: '/img/coins/spain/franco/50-centimos-1949.jpg' },
            { id: 'star_62', label: '*62', prices: { MBC: 15 }, image: '/img/coins/spain/franco/50-centimos-1949.jpg' }
        ],
        1963: [
            { id: 'star_63', label: '*63', prices: { MBC: 30 }, image: '/img/coins/spain/franco/50-centimos-1949.jpg' },
            { id: 'star_64', label: '*64', prices: { MBC: 4 }, image: '/img/coins/spain/franco/50-centimos-1949.jpg' },
            { id: 'star_65', label: '*65', prices: { MBC: 3 }, image: '/img/coins/spain/franco/50-centimos-1949.jpg' }
        ]
    },
    '50cts_franco_m2': {
        1966: [
            { id: 'star_67', label: '*67', prices: { MBC: 0.6 }, image: '/img/coins/spain/franco/50-centimos-1966.jpg' },
            { id: 'star_68', label: '*68', prices: { MBC: 0.3 }, image: '/img/coins/spain/franco/50-centimos-1966.jpg' },
            { id: 'star_69', label: '*69', prices: { MBC: 3 }, image: '/img/coins/spain/franco/50-centimos-1966.jpg' },
            { id: 'star_70', label: '*70', status: STATUS_SET_ONLY, prices: { MBC: 200 }, image: '/img/coins/spain/franco/50-centimos-1966.jpg' },
            { id: 'star_71', label: '*71', prices: { MBC: 0.3 }, image: '/img/coins/spain/franco/50-centimos-1966.jpg' },
            { id: 'star_72', label: '*72', prices: { MBC: 4 }, image: '/img/coins/spain/franco/50-centimos-1966.jpg' },
            { id: 'star_73', label: '*73', prices: { MBC: 0.5 }, image: '/img/coins/spain/franco/50-centimos-1966.jpg' },
            { id: 'star_74', label: '*74', status: STATUS_SET_ONLY, prices: { MBC: 50 }, image: '/img/coins/spain/franco/50-centimos-1966.jpg' },
            { id: 'star_75', label: '*75', status: STATUS_SET_ONLY, prices: { MBC: 10 }, image: '/img/coins/spain/franco/50-centimos-1966.jpg' }
        ]
    },
    '1pta_franco_m2': {
        1946: [
            { id: 'p1_46_48', label: '*48', prices: { MBC: 5500 }, image: '/img/coins/spain/franco/1 peseta 1948.gif' }
        ],
        1947: [
            { id: 'p1_47_48', label: '*48', prices: { MBC: 300 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_47_49', label: '*49', prices: { MBC: 350 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_47_50', label: '*50', prices: { MBC: 1700 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_47_e51', label: '*E-51', status: STATUS_SET_ONLY, prices: { MBC: 600 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_47_51', label: '*51', prices: { MBC: 1000 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_47_52', label: '*52', prices: { MBC: 250 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_47_53', label: '*53', prices: { MBC: 250 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_47_54', label: '*54', prices: { MBC: 250 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_47_56', label: '*56', prices: { MBC: 1650 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' }
        ],
        1953: [
            { id: 'p1_53_54', label: '*54', prices: { MBC: 450 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_53_56', label: '*56', prices: { MBC: 20 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_53_60', label: '*60', prices: { MBC: 180 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_53_61', label: '*61', prices: { MBC: 140 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_53_62', label: '*62', prices: { MBC: 12 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_53_63', label: '*63', prices: { MBC: 50 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' }
        ],
        1963: [
            { id: 'p1_63_63', label: '*63', prices: { MBC: 40 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_63_64', label: '*64', prices: { MBC: 10 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_63_65', label: '*65', prices: { MBC: 10 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_63_66', label: '*66', prices: { MBC: 15 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_63_67', label: '*67', prices: { MBC: 150 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' }
        ],
        1966: [
            { id: 'p1_66_67', label: '*67', prices: { MBC: 6 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_66_68', label: '*68', prices: { MBC: 4 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_66_69', label: '*69', prices: { MBC: 4 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_66_70', label: '*70', prices: { MBC: 6 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_66_71', label: '*71', prices: { MBC: 4 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_66_72', label: '*72', prices: { MBC: 2 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_66_73', label: '*73', prices: { MBC: 1.5 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_66_74', label: '*74', prices: { MBC: 1 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' },
            { id: 'p1_66_75', label: '*75', prices: { MBC: 0.5 }, image: '/img/coins/spain/franco/1-peseta-1947.jpg' }
        ]
    },
    '2.5ptas_franco': {
        1953: [
            { id: 'star_54', label: '*54', prices: { MBC: 10 }, image: '/img/coins/spain/franco/2-1-2-pesetas-1953.jpg' },
            { id: 'star_56', label: '*56', prices: { MBC: 10 }, image: '/img/coins/spain/franco/2-1-2-pesetas-1953.jpg' },
            { id: 'star_68', label: '*68', status: STATUS_SET_ONLY, prices: { MBC: 1200 }, image: '/img/coins/spain/franco/2-1-2-pesetas-1953.jpg' },
            { id: 'star_69', label: '*69', status: STATUS_SET_ONLY, prices: { MBC: 1000 }, image: '/img/coins/spain/franco/2-1-2-pesetas-1953.jpg' },
            { id: 'star_70', label: '*70', status: STATUS_SET_ONLY, prices: { MBC: 140 }, image: '/img/coins/spain/franco/2-1-2-pesetas-1953.jpg' },
            { id: 'star_71', label: '*71', status: STATUS_SET_ONLY, prices: { MBC: 140 }, image: '/img/coins/spain/franco/2-1-2-pesetas-1953.jpg' }
        ]
    },
    '5ptas_franco_m1': {
        1949: [
            { id: 'star_49', label: '*49', prices: { MBC: 50 }, image: '/img/coins/spain/franco/5-pesetas-1949.jpg' },
            { id: 'star_50', label: '*50', prices: { MBC: 20 }, image: '/img/coins/spain/franco/5-pesetas-1949.jpg' },
            { id: 'star_e51', label: '*E-51', status: STATUS_SET_ONLY, prices: { MBC: 2500 }, image: '/img/coins/spain/franco/5-pesetas-1949.jpg' },
            { id: 'star_51', label: '*51', status: STATUS_SET_ONLY, prices: { MBC: 7000 }, image: '/img/coins/spain/franco/5-pesetas-1949.jpg' },
            { id: 'star_52', label: '*52', status: STATUS_SET_ONLY, prices: { MBC: 16000 }, image: '/img/coins/spain/franco/5-pesetas-1949.jpg' }
        ]
    },
    '5ptas_franco_m2': {
        1957: [
            { id: 'star_58', label: '*58', prices: { MBC: 140 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_59', label: '*59', prices: { MBC: 40 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_60', label: '*60', prices: { MBC: 30 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_61', label: '*61', prices: { MBC: 50 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_62', label: '*62', prices: { MBC: 25 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_63', label: '*63', prices: { MBC: 220 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_64', label: '*64', prices: { MBC: 28 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_65', label: '*65', prices: { MBC: 15 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_66', label: '*66', prices: { MBC: 40 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_67', label: '*67', prices: { MBC: 15 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_68', label: '*68', prices: { MBC: 8 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_69', label: '*69', prices: { MBC: 10 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_70', label: '*70', prices: { MBC: 15 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_71', label: '*71', prices: { MBC: 6 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_72', label: '*72', prices: { MBC: 6 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_73', label: '*73', prices: { MBC: 2 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_74', label: '*74', prices: { MBC: 1 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_ba', label: '*BA', status: STATUS_SET_ONLY, prices: { MBC: 200 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' },
            { id: 'star_75', label: '*75', prices: { MBC: 0.5 }, image: '/img/coins/spain/franco/5-pesetas-1957.jpg' }
        ]
    },
    '25ptas_franco': {
        1957: [
            { id: 'star_58', label: '*58', prices: { MBC: 100 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_59', label: '*59', prices: { MBC: 50 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_61', label: '*61', prices: { MBC: 220 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_64', label: '*64', prices: { MBC: 40 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_65', label: '*65', prices: { MBC: 12 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_66', label: '*66', prices: { MBC: 20 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_67', label: '*67', prices: { MBC: 45 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_68', label: '*68', prices: { MBC: 10 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_69', label: '*69', prices: { MBC: 5 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_70', label: '*70', prices: { MBC: 10 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_71', label: '*71', prices: { MBC: 90 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_72', label: '*72', prices: { MBC: 15 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_73', label: '*73', status: STATUS_SET_ONLY, prices: { MBC: 90 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_74', label: '*74', prices: { MBC: 10 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_ba', label: '*BA', status: STATUS_SET_ONLY, prices: { MBC: 65 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' },
            { id: 'star_75', label: '*75', prices: { MBC: 4 }, image: '/img/coins/spain/franco/25-pesetas-1957.jpg' }
        ]
    },
    '50ptas_franco': {
        1957: [
            { id: 'star_58', label: '*58', prices: { MBC: 5 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_58_canto', label: '*58 Variante Canto', prices: { MBC: 1800 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_59', label: '*59', prices: { MBC: 5 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_60', label: '*60', prices: { MBC: 6 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_67', label: '*67', prices: { MBC: 12 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_68', label: '*68', status: STATUS_SET_ONLY, prices: { MBC: 1500 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_69', label: '*69', status: STATUS_SET_ONLY, prices: { MBC: 1100 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_70', label: '*70', status: STATUS_SET_ONLY, prices: { MBC: 300 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_71', label: '*71', prices: { MBC: 40 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_72', label: '*72', status: STATUS_SET_ONLY, prices: { MBC: 35 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_73', label: '*73', status: STATUS_SET_ONLY, prices: { MBC: 50 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_74', label: '*74', status: STATUS_SET_ONLY, prices: { MBC: 50 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_ba', label: '*BA', status: STATUS_SET_ONLY, prices: { MBC: 65 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' },
            { id: 'star_75', label: '*75', status: STATUS_SET_ONLY, prices: { MBC: 10 }, image: '/img/coins/spain/franco/50-pesetas-1957.jpg' }
        ]
    },
    '100ptas_franco': {
        1966: [
            { id: 'star_66', label: '*66', prices: { MBC: 12 }, image: '/img/coins/spain/franco/100-pesetas-1966.jpg' },
            { id: 'star_67', label: '*67', prices: { MBC: 12 }, image: '/img/coins/spain/franco/100-pesetas-1966.jpg' },
            { id: 'star_67_canto', label: '*67 Variante Canto', prices: { MBC: 700 }, image: '/img/coins/spain/franco/100-pesetas-1966.jpg' },
            { id: 'star_68', label: '*68', prices: { MBC: 12 }, image: '/img/coins/spain/franco/100-pesetas-1966.jpg' },
            { id: 'star_69_recto', label: '*69 (9 palo recto)', prices: { MBC: 600 }, image: '/img/coins/spain/franco/100-pesetas-1966.jpg' },
            { id: 'star_69_curvo', label: '*69 (9 palo curvo)', prices: { MBC: 220 }, image: '/img/coins/spain/franco/100-pesetas-1966.jpg' },
            { id: 'star_70', label: '*70', prices: { MBC: 25 }, image: '/img/coins/spain/franco/100-pesetas-1966.jpg' }
        ]
    },
    '50cts_jc1': {
        1975: [
            { id: 'jc1_50c_76', label: 'Estrella *76', prices: { MBC: 0.10, EBC: 0.30, SC: 0.60 }, image: '/img/coins/spain/juancarlos/50-centimos-1975.jpg' }
        ]
    },
    '1pta_jc1': {
        1975: [
            { id: 'jc1_1p_76', label: 'Estrella *76', prices: { MBC: 0.10, EBC: 0.20, SC: 0.30 }, image: '/img/coins/spain/juancarlos/1-peseta-1975.jpg' },
            { id: 'jc1_1p_77', label: 'Estrella *77', prices: { MBC: 0.10, EBC: 0.20, SC: 0.30 }, image: '/img/coins/spain/juancarlos/1-peseta-1975.jpg' },
            { id: 'jc1_1p_78', label: 'Estrella *78', prices: { MBC: 0.10, EBC: 0.25, SC: 0.50 }, image: '/img/coins/spain/juancarlos/1-peseta-1975.jpg' },
            { id: 'jc1_1p_78_chile', label: 'Estrella *78 (Chile)', prices: { MBC: 1.00, EBC: 3.50, SC: 10.0 }, image: '/img/coins/spain/juancarlos/1-peseta-1975.jpg' },
            { id: 'jc1_1p_79', label: 'Estrella *79', prices: { MBC: 0.10, EBC: 0.20, SC: 0.30 }, image: '/img/coins/spain/juancarlos/1-peseta-1975.jpg' },
            { id: 'jc1_1p_80', label: 'Estrella *80', prices: { MBC: 0.10, EBC: 0.25, SC: 0.50 }, image: '/img/coins/spain/juancarlos/1-peseta-1975.jpg' }
        ]
    },
    '5ptas_jc1': {
        1975: [
            { id: 'jc1_5p_76', label: 'Estrella *76', prices: { MBC: 0.10, EBC: 0.20, SC: 0.30 }, image: '/img/coins/spain/juancarlos/5-pesetas-1975.jpg' },
            { id: 'jc1_5p_77', label: 'Estrella *77', prices: { MBC: 0.10, EBC: 0.20, SC: 0.30 }, image: '/img/coins/spain/juancarlos/5-pesetas-1975.jpg' },
            { id: 'jc1_5p_78', label: 'Estrella *78', prices: { MBC: 0.15, EBC: 0.30, SC: 0.50 }, image: '/img/coins/spain/juancarlos/5-pesetas-1975.jpg' },
            { id: 'jc1_5p_78_alemania', label: 'Estrella *78 (Alemania)', prices: { MBC: 2.00, EBC: 6.00, SC: 16.0 }, image: '/img/coins/spain/juancarlos/5-pesetas-1975.jpg' },
            { id: 'jc1_5p_79', label: 'Estrella *79', prices: { MBC: 0.10, EBC: 0.20, SC: 0.30 }, image: '/img/coins/spain/juancarlos/5-pesetas-1975.jpg' },
            { id: 'jc1_5p_80', label: 'Estrella *80', prices: { MBC: 0.25, EBC: 0.60, SC: 1.20 }, image: '/img/coins/spain/juancarlos/5-pesetas-1975.jpg' }
        ]
    },
    '25ptas_jc1': {
        1975: [
            { id: 'jc1_25p_76', label: 'Estrella *76', prices: { MBC: 0.25, EBC: 0.75, SC: 1.50 }, image: '/img/coins/spain/juancarlos/25-pesetas-1975.jpg' },
            { id: 'jc1_25p_77', label: 'Estrella *77', prices: { MBC: 0.25, EBC: 0.75, SC: 1.50 }, image: '/img/coins/spain/juancarlos/25-pesetas-1975.jpg' },
            { id: 'jc1_25p_78', label: 'Estrella *78', prices: { MBC: 0.50, EBC: 1.50, SC: 2.50 }, image: '/img/coins/spain/juancarlos/25-pesetas-1975.jpg' },
            { id: 'jc1_25p_79', label: 'Estrella *79', prices: { MBC: 0.20, EBC: 0.60, SC: 1.20 }, image: '/img/coins/spain/juancarlos/25-pesetas-1975.jpg' },
            { id: 'jc1_25p_80', label: 'Estrella *80', prices: { MBC: 1.00, EBC: 2.50, SC: 5.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1975.jpg' }
        ]
    },
    '50ptas_jc1': {
        1975: [
            { id: 'jc1_50p_76', label: 'Estrella *76', prices: { MBC: 0.50, EBC: 1.50, SC: 3.50 }, image: '/img/coins/spain/juancarlos/50-pesetas-1975.jpg' },
            { id: 'jc1_50p_78', label: 'Estrella *78', prices: { MBC: 0.50, EBC: 1.50, SC: 3.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1975.jpg' },
            { id: 'jc1_50p_79', label: 'Estrella *79', prices: { MBC: 0.30, EBC: 1.00, SC: 2.50 }, image: '/img/coins/spain/juancarlos/50-pesetas-1975.jpg' },
            { id: 'jc1_50p_80', label: 'Estrella *80', prices: { MBC: 1.00, EBC: 2.50, SC: 5.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1975.jpg' }
        ]
    },
    '100ptas_jc1': {
        1975: [
            { id: 'jc1_100p_76', label: 'Estrella *76', prices: { MBC: 1.00, EBC: 1.50, SC: 4.00 }, image: '/img/coins/spain/juancarlos/100-pesetas-1975.jpg' }
        ]
    },
    '50cts_jc1_s2': {
        1980: [
            { id: 'jc1_s2_50c_80', label: 'Estrella *80', prices: { MBC: 0.10, EBC: 0.30, SC: 0.60 }, image: '/img/coins/spain/juancarlos/50-centimos-1980.jpg' }
        ]
    },
    '1pta_jc1_s2': {
        1980: [
            { id: 'jc1_s2_1p_80', label: 'Estrella *80', prices: { MBC: 0.10, EBC: 0.15, SC: 0.20 }, image: '/img/coins/spain/juancarlos/1-peseta-1980.jpg' },
            { id: 'jc1_s2_1p_81', label: 'Estrella *81', prices: { MBC: 0.10, EBC: 0.20, SC: 0.30 }, image: '/img/coins/spain/juancarlos/1-peseta-1980.jpg' },
            { id: 'jc1_s2_1p_82', label: 'Estrella *82', prices: { MBC: 0.10, EBC: 0.20, SC: 0.30 }, image: '/img/coins/spain/juancarlos/1-peseta-1980.jpg' }
        ]
    },
    '5ptas_jc1_s2': {
        1980: [
            { id: 'jc1_s2_5p_80', label: 'Estrella *80', prices: { MBC: 0.15, EBC: 0.30, SC: 0.60 }, image: '/img/coins/spain/juancarlos/5-pesetas-1980.jpg' },
            { id: 'jc1_s2_5p_81', label: 'Estrella *81', prices: { MBC: 0.15, EBC: 0.40, SC: 0.80 }, image: '/img/coins/spain/juancarlos/5-pesetas-1980.jpg' },
            { id: 'jc1_s2_5p_82', label: 'Estrella *82', prices: { MBC: 0.15, EBC: 0.60, SC: 1.20 }, image: '/img/coins/spain/juancarlos/5-pesetas-1980.jpg' },
            { id: 'jc1_s2_5p_err', label: 'Error 1975*80', prices: { MBC: 50, EBC: 120, SC: 240 }, image: '/img/coins/spain/juancarlos/5-pesetas-1975.jpg' }
        ]
    },
    '5ptas_jc1_s3': {
        1989: [
            { id: 'jc1_s3_5p_89_old', label: 'Diseño anterior', prices: { SC: 2.00 }, image: '/img/coins/spain/juancarlos/5-pesetas-1983.jpg' }
        ]
    },
    '5ptas_jc1_s4_89': { 1989: [{ id: 'jc1_s4_5p_89', label: 'Nuevo diseño', image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg' }] },
    '5ptas_jc1_s4_90': { 1990: [{ id: 'jc1_s4_5p_90', label: 'Canarias', image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg' }] },
    '5ptas_jc1_s4_91': { 1991: [{ id: 'jc1_s4_5p_91', label: 'Baleares', image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg' }] },
    '5ptas_jc1_s4_92': { 1992: [{ id: 'jc1_s4_5p_92', label: 'Madrid', image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg' }] },
    '5ptas_jc1_s4_93': { 1993: [{ id: 'jc1_s4_5p_93', label: 'La Rioja', image: '/img/coins/spain/juancarlos/5-pesetas-1993.jpg' }] },
    '5ptas_jc1_s4_94': { 1994: [{ id: 'jc1_s4_5p_94', label: 'Aragón', image: '/img/coins/spain/juancarlos/5-pesetas-1994.jpg' }] },
    '5ptas_jc1_s4_95': { 1995: [{ id: 'jc1_s4_5p_95', label: 'Asturias', image: '/img/coins/spain/juancarlos/5-pesetas-1995.jpg' }] },
    '5ptas_jc1_s4_96': { 1996: [{ id: 'jc1_s4_5p_96', label: 'Castilla-La Mancha', image: '/img/coins/spain/juancarlos/5-pesetas-1996.jpg' }] },
    '5ptas_jc1_s4_97': { 1997: [{ id: 'jc1_s4_5p_97', label: 'Islas Canarias', image: '/img/coins/spain/juancarlos/5-pesetas-1997.jpg' }] },
    '5ptas_jc1_s4_98': { 1998: [{ id: 'jc1_s4_5p_98', label: 'Murcia', image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg' }] },
    '5ptas_jc1_s4_99': { 1999: [{ id: 'jc1_s4_5p_99', label: 'Castilla y León', image: '/img/coins/spain/juancarlos/5-pesetas-1999.jpg' }] },
    '5ptas_jc1_s4_00': { 2000: [{ id: 'jc1_s4_5p_00', label: 'Cantabria', image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg' }] },
    '5ptas_jc1_s4_01': { 2001: [{ id: 'jc1_s4_5p_01', label: 'La Rioja', image: '/img/coins/spain/juancarlos/5-pesetas-1990.jpg' }] },
    '25ptas_jc1_s2': {
        1980: [
            { id: 'jc1_s2_25p_80', label: 'Estrella *80', prices: { MBC: 0.25, EBC: 0.50, SC: 1.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1980.jpg' },
            { id: 'jc1_s2_25p_81', label: 'Estrella *81', prices: { MBC: 0.30, EBC: 1.00, SC: 2.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1980.jpg' },
            { id: 'jc1_s2_25p_82', label: 'Estrella *82', prices: { MBC: 0.30, EBC: 1.50, SC: 3.50 }, image: '/img/coins/spain/juancarlos/25-pesetas-1980.jpg' }
        ]
    },
    '50ptas_jc1_s2': {
        1980: [
            { id: 'jc1_s2_50p_80', label: 'Estrella *80', prices: { MBC: 0.50, EBC: 1.00, SC: 2.50 }, image: '/img/coins/spain/juancarlos/50-pesetas-1980.jpg' },
            { id: 'jc1_s2_50p_81', label: 'Estrella *81', prices: { MBC: 0.50, EBC: 1.50, SC: 3.50 }, image: '/img/coins/spain/juancarlos/50-pesetas-1980.jpg' },
            { id: 'jc1_s2_50p_82', label: 'Estrella *82', prices: { MBC: 1.00, EBC: 2.50, SC: 5.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1980.jpg' }
        ]
    },
    '100ptas_jc1_s2': {
        1980: [
            { id: 'jc1_s2_100p_80', label: 'Estrella *80', prices: { MBC: 1.00, EBC: 1.50, SC: 2.00 }, image: '/img/coins/spain/juancarlos/100-pesetas-1980.jpg' }
        ]
    },
    '1pta_jc1_s3': {
        // Only 1987 has real variants that require a list
        1987: [
            { id: 'jc1_s3_1p_87', label: 'Estándar', prices: { MBC: 0.10, EBC: 0.20, SC: 0.30 }, image: '/img/coins/spain/juancarlos/1-peseta-1983.jpg' },
            { id: 'jc1_s3_1p_87_e', label: 'Variante E-87', prices: { MBC: 10, EBC: 25, SC: 40.0 }, image: '/img/coins/spain/juancarlos/1-peseta-1983.jpg' }
        ],
        1989: [
            { id: 'jc1_s3_1p_89_old', label: 'Diseño anterior', prices: { MBC: 0.40, EBC: 1.00, SC: 2.00 }, image: '/img/coins/spain/juancarlos/1-peseta-1983.jpg' }
        ]
    },
    '200ptas_jc1_s3': {
        1987: [
            { id: 'jc1_s3_200p_87', label: 'Estándar', prices: { MBC: 8.00, EBC: 18.0, SC: 30.0 }, image: '/img/coins/spain/juancarlos/200-pesetas-1986.jpg' },
            { id: 'jc1_s3_200p_87_e', label: 'Variante E-87', prices: { MBC: 15, EBC: 35, SC: 60.0 }, image: '/img/coins/spain/juancarlos/200-pesetas-1986.jpg' }
        ],
        1988: [{ id: 'jc1_s3_200p_88', label: '1988', prices: { MBC: 3.00, EBC: 8.00, SC: 16.0 }, image: '/img/coins/spain/juancarlos/200-pesetas-1986.jpg' }],
        1989: [{ id: 'jc1_s3_200p_89', label: '1989', prices: { MBC: 2.00, EBC: 5.00, SC: 10.0 }, image: '/img/coins/spain/juancarlos/200-pesetas-1986.jpg' }]
    },
    '1pta_jc1_s4': {
        1989: [{ id: 'jc1_s4_1p_89_new', label: 'Nuevo diseño', image: '/img/coins/spain/juancarlos/1-peseta-1989.jpg' }]
    },
    '25ptas_jc1_s4_90': {
        1990: [
            { id: 'jc1_s4_25p_90_m1', label: 'Juan Carlos I', prices: { MBC: 0.25, EBC: 1.00, SC: 2.50 }, image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg' },
            { id: 'jc1_s4_25p_90_m2', label: 'Euskadi', prices: { MBC: 0.25, EBC: 1.00, SC: 2.50 }, image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg' }
        ]
    },
    '25ptas_jc1_s4_91': {
        1991: [
            { id: 'jc1_s4_25p_91_m1', label: 'Madrid', prices: { MBC: 0.20, EBC: 0.80, SC: 2.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg' },
            { id: 'jc1_s4_25p_91_m2', label: 'Extremadura', prices: { MBC: 1.50, EBC: 5.00, SC: 10.0 }, image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg' }
        ]
    },
    '25ptas_jc1_s4_92': {
        1992: [
            { id: 'jc1_s4_25p_92_m3', label: 'Barcelona 92', prices: { MBC: 0.20, EBC: 0.80, SC: 2.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg' },
            { id: 'jc1_s4_25p_92_m4', label: 'Sevilla 92', prices: { MBC: 0.50, EBC: 1.50, SC: 4.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg' }
        ]
    },
    '25ptas_jc1_s4_93': { 1993: [{ id: 'jc1_s4_25p_93', label: 'Jacobeo', prices: { MBC: 0.20, EBC: 0.80, SC: 2.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1993.jpg' }] },
    '25ptas_jc1_s4_94': { 1994: [{ id: 'jc1_s4_25p_94', label: 'Canarias', prices: { MBC: 0.25, EBC: 0.80, SC: 2.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1994.jpg' }] },
    '25ptas_jc1_s4_95': {
        1995: [
            { id: 'jc1_s4_25p_95', label: 'Castilla y León', prices: { MBC: 0.25, EBC: 0.80, SC: 2.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1995.jpg' },
            { id: 'jc1_s4_25p_95_v', label: 'Var. sin "Y"', prices: { MBC: 25.0, EBC: 60.0, SC: 110.0 }, image: '/img/coins/spain/juancarlos/25-pesetas-1995.jpg' }
        ]
    },
    '25ptas_jc1_s4_96': { 1996: [{ id: 'jc1_s4_25p_96', label: 'La Rioja', prices: { MBC: 0.25, EBC: 0.80, SC: 2.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1996.jpg' }] },
    '25ptas_jc1_s4_97': { 1997: [{ id: 'jc1_s4_25p_97', label: 'Melilla', prices: { MBC: 0.30, EBC: 0.80, SC: 2.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1997.jpg' }] },
    '25ptas_jc1_s4_98': { 1998: [{ id: 'jc1_s4_25p_98', label: 'Ceuta', prices: { MBC: 0.30, EBC: 0.80, SC: 2.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1998.jpg' }] },
    '25ptas_jc1_s4_99': { 1999: [{ id: 'jc1_s4_25p_99', label: 'Murcia', prices: { MBC: 0.50, EBC: 1.50, SC: 4.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1999.jpg' }] },
    '25ptas_jc1_s4_00': { 2000: [{ id: 'jc1_s4_25p_00', label: '(Hoyo)', prices: { MBC: 0.30, EBC: 1.00, SC: 2.50 }, image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg' }] },
    '25ptas_jc1_s4_01': { 2001: [{ id: 'jc1_s4_25p_01', label: 'Castilla-La Mancha', prices: { MBC: 0.50, EBC: 1.25, SC: 3.00 }, image: '/img/coins/spain/juancarlos/25-pesetas-1990.jpg' }] },
    '50ptas_jc1_s4_90': {
        1990: [
            { id: 'jc1_s4_50p_90_m1', label: 'Juan Carlos I', prices: { MBC: 0.50, EBC: 1.00, SC: 2.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' },
            { id: 'jc1_s4_50p_90_m2', label: 'Expo 92 (Cartuja)', prices: { MBC: 0.50, EBC: 1.00, SC: 2.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' }
        ]
    },
    '50ptas_jc1_s4_92': {
        1992: [
            { id: 'jc1_s4_50p_92_m3', label: 'Barcelona 92 (Sagrada F.)', prices: { MBC: 0.50, EBC: 1.00, SC: 2.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' },
            { id: 'jc1_s4_50p_92_m4', label: 'Expo 92 (Emblema)', prices: { MBC: 0.50, EBC: 1.00, SC: 2.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' }
        ]
    },
    '50ptas_jc1_s4_93': { 1993: [{ id: 'jc1_s4_50p_93', label: '1993', prices: { MBC: 0.60, EBC: 1.50, SC: 3.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' }] },
    '50ptas_jc1_s4_94': { 1994: [{ id: 'jc1_s4_50p_94', label: 'Enrique el Navegante', prices: { MBC: 0.80, EBC: 2.00, SC: 4.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' }] },
    '50ptas_jc1_s4_95': { 1995: [{ id: 'jc1_s4_50p_95', label: 'Felipe V', prices: { MBC: 2.00, EBC: 5.00, SC: 9.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' }] },
    '50ptas_jc1_s4_96': { 1996: [{ id: 'jc1_s4_50p_96', label: '1996', prices: { MBC: 0.40, EBC: 1.00, SC: 2.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' }] },
    '50ptas_jc1_s4_97': { 1997: [{ id: 'jc1_s4_50p_97', label: 'Juan de Herrera', prices: { MBC: 0.40, EBC: 1.00, SC: 2.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' }] },
    '50ptas_jc1_s4_98': { 1998: [{ id: 'jc1_s4_50p_98', label: 'Albéniz', prices: { MBC: 0.60, EBC: 1.50, SC: 3.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' }] },
    '50ptas_jc1_s4_99': { 1999: [{ id: 'jc1_s4_50p_99', label: 'Velázquez', prices: { MBC: 0.80, EBC: 2.00, SC: 4.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' }] },
    '50ptas_jc1_s4_00': { 2000: [{ id: 'jc1_s4_50p_00', label: 'Carlos V', prices: { MBC: 0.80, EBC: 2.00, SC: 4.00 }, image: '/img/coins/spain/juancarlos/50-pesetas-1990.jpg' }] },
    '100ptas_jc1_s4_92': { 1992: [{ id: 'jc1_s4_100p_92', label: 'V Centenario', prices: { MBC: 1.50, EBC: 4.00, SC: 7.00 }, image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg' }] },
    '100ptas_jc1_s4_93': { 1993: [{ id: 'jc1_s4_100p_93', label: 'Baleares', prices: { MBC: 1.50, EBC: 4.50, SC: 8.00 }, image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg' }] },
    '100ptas_jc1_s4_94': { 1994: [{ id: 'jc1_s4_100p_94', label: 'Manuel de Falla', prices: { MBC: 1.00, EBC: 3.00, SC: 5.00 }, image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg' }] },
    '100ptas_jc1_s4_95': { 1995: [{ id: 'jc1_s4_100p_95', label: 'FAO', prices: { MBC: 1.00, EBC: 2.00, SC: 3.50 }, image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg' }] },
    '100ptas_jc1_s4_96': { 1996: [{ id: 'jc1_s4_100p_96', label: 'Felipe V', prices: { MBC: 1.50, EBC: 3.50, SC: 6.00 }, image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg' }] },
    '100ptas_jc1_s4_97': { 1997: [{ id: 'jc1_s4_100p_97', label: 'Juan de Herrera', prices: { MBC: 1.00, EBC: 2.50, SC: 4.00 }, image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg' }] },
    '100ptas_jc1_s4_98': { 1998: [{ id: 'jc1_s4_100p_98', label: 'Isaac Albéniz', prices: { MBC: 1.00, EBC: 2.50, SC: 4.00 }, image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg' }] },
    '100ptas_jc1_s4_99': { 1999: [{ id: 'jc1_s4_100p_99', label: 'Velázquez', prices: { MBC: 1.00, EBC: 2.50, SC: 4.00 }, image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg' }] },
    '100ptas_jc1_s4_00': { 2000: [{ id: 'jc1_s4_100p_00', label: 'Carlos V', prices: { MBC: 1.50, EBC: 3.50, SC: 6.00 }, image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg' }] },
    '100ptas_jc1_s4_01': { 2001: [{ id: 'jc1_s4_100p_01', label: 'Última emisión', prices: { MBC: 1.00, EBC: 2.00, SC: 3.00 }, image: '/img/coins/spain/juancarlos/100-pesetas-1992.jpg' }] },
    '200ptas_jc1_s4_90': { 1990: [{ id: 'jc1_s4_200p_90', label: 'Cibeles', prices: { MBC: 2.00, EBC: 4.50, SC: 8.00 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' }] },
    '200ptas_jc1_s4_91': { 1991: [{ id: 'jc1_s4_200p_91', label: 'Sede FNMT (Portavoces)', prices: { MBC: 1.50, EBC: 3.50, SC: 6.00 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' }] },
    '200ptas_jc1_s4_92': {
        1992: [
            { id: 'jc1_s4_200p_92_eq', label: 'Barcelona 92 (Equitación)', prices: { MBC: 1.50, EBC: 3.00, SC: 5.00 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' },
            { id: 'jc1_s4_200p_92_oso', label: 'Madrid 92 (Oso)', prices: { MBC: 1.50, EBC: 3.00, SC: 5.00 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' }
        ]
    },
    '200ptas_jc1_s4_93': { 1993: [{ id: 'jc1_s4_200p_93', label: 'Juan de la Cosa', prices: { MBC: 3.00, EBC: 8.00, SC: 16.0 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' }] },
    '200ptas_jc1_s4_94': { 1994: [{ id: 'jc1_s4_200p_94', label: 'Manuel de Falla', prices: { MBC: 2.00, EBC: 4.50, SC: 8.00 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' }] },
    '200ptas_jc1_s4_95': { 1995: [{ id: 'jc1_s4_200p_95', label: 'Madrid Capital', prices: { MBC: 5.00, EBC: 15.0, SC: 30.0 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' }] },
    '200ptas_jc1_s4_96': { 1996: [{ id: 'jc1_s4_200p_96', label: 'Felipe V', prices: { MBC: 1.50, EBC: 3.00, SC: 5.00 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' }] },
    '200ptas_jc1_s4_97': { 1997: [{ id: 'jc1_s4_200p_97', label: 'Juan de Herrera', prices: { MBC: 1.50, EBC: 3.00, SC: 5.00 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' }] },
    '200ptas_jc1_s4_98': { 1998: [{ id: 'jc1_s4_200p_98', label: 'Isaac Albéniz', prices: { MBC: 1.50, EBC: 4.00, SC: 6.00 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' }] },
    '200ptas_jc1_s4_99': { 1999: [{ id: 'jc1_s4_200p_99', label: 'Velázquez', prices: { MBC: 1.50, EBC: 4.00, SC: 6.00 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' }] },
    '200ptas_jc1_s4_00': { 2000: [{ id: 'jc1_s4_200p_00', label: 'Carlos V', prices: { MBC: 2.00, EBC: 5.00, SC: 8.00 }, image: '/img/coins/spain/juancarlos/200-pesetas-1990.jpg' }] },
    '10ptas_jc1_s4_92': { 1992: [{ id: 'jc1_s4_10p_92', label: 'V Centenario', prices: { MBC: 0.20, EBC: 0.40, SC: 0.60 }, image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg' }] },
    '10ptas_jc1_s4_93': { 1993: [{ id: 'jc1_s4_10p_93', label: 'Joan Miró', prices: { MBC: 0.40, EBC: 1.00, SC: 2.00 }, image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg' }] },
    '10ptas_jc1_s4_94': { 1994: [{ id: 'jc1_s4_10p_94', label: 'Salvador Dalí', prices: { MBC: 1.00, EBC: 2.50, SC: 5.00 }, image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg' }] },
    '10ptas_jc1_s4_95': { 1995: [{ id: 'jc1_s4_10p_95', label: 'Francisco de Quevedo', prices: { MBC: 1.50, EBC: 4.00, SC: 8.00 }, image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg' }] },
    '10ptas_jc1_s4_96': { 1996: [{ id: 'jc1_s4_10p_96', label: 'Francisco de Goya', prices: { MBC: 1.00, EBC: 2.50, SC: 5.00 }, image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg' }] },
    '10ptas_jc1_s4_97': { 1997: [{ id: 'jc1_s4_10p_97', label: 'Séneca', prices: { MBC: 0.25, EBC: 0.60, SC: 1.00 }, image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg' }] },
    '10ptas_jc1_s4_98': { 1998: [{ id: 'jc1_s4_10p_98', label: 'Emilia Pardo Bazán', prices: { MBC: 0.50, EBC: 1.25, SC: 2.50 }, image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg' }] },
    '10ptas_jc1_s4_99': { 1999: [{ id: 'jc1_s4_10p_99', label: 'Felipe II', prices: { MBC: 0.40, EBC: 1.00, SC: 2.00 }, image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg' }] },
    '10ptas_jc1_s4_00': { 2000: [{ id: 'jc1_s4_10p_00', label: 'Carlos V', prices: { MBC: 0.40, EBC: 1.00, SC: 2.00 }, image: '/img/coins/spain/juancarlos/10-pesetas-1992.jpg' }] },
};

export const getSpainCoinStatus = (year, value, id = '', variantId = '') => {
    const y = parseInt(year);
    const v = parseFloat(value);

    // Juan Carlos I (1975-2014) - Identificación Prioritaria por ID
    if (id && (id.includes('_jc1') || id.includes('_jc1_s2') || id.includes('_jc1_s3') || id.includes('_jc1_s4'))) {
        // Series 1 & 2
        if (id.endsWith('_jc1')) return y === 1975 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id.endsWith('_jc1_s2')) return y === 1980 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;

        // Series 3
        if (id === '1pta_jc1_s3') return (y >= 1982 && y <= 1989) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '2ptas_jc1_s3') return (y === 1982 || y === 1984) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s3') return (y >= 1982 && y <= 1984) || y === 1989 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10ptas_jc1_s3') return (y >= 1983 && y <= 1985) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s3') return (y >= 1982 && y <= 1984) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50ptas_jc1_s3') return (y >= 1982 && y <= 1984) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '100ptas_jc1_s3') return (y >= 1982 && y <= 1990 && y !== 1987) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s3') return (y >= 1986 && y <= 1988) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '500ptas_jc1_s3') return (y >= 1987 && y <= 1990) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;

        // Series 4 (Split models)
        if (id === '1pta_jc1_s4') return (y >= 1989 && y <= 2001) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;

        // 5 Pesetas
        if (id === '5ptas_jc1_s4_89') return y === 1989 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_90') return y === 1990 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_91') return y === 1991 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_92') return y === 1992 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_93') return y === 1993 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_94') return y === 1994 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_95') return y === 1995 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_96') return y === 1996 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_97') return y === 1997 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_98') return y === 1998 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_99') return y === 1999 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_00') return y === 2000 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_jc1_s4_01') return y === 2001 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;

        // 10 Pesetas
        if (id === '10ptas_jc1_s4_92') return y === 1992 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10ptas_jc1_s4_93') return y === 1993 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10ptas_jc1_s4_94') return y === 1994 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10ptas_jc1_s4_95') return y === 1995 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10ptas_jc1_s4_96') return y === 1996 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10ptas_jc1_s4_97') return y === 1997 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10ptas_jc1_s4_98') return y === 1998 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10ptas_jc1_s4_99') return y === 1999 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10ptas_jc1_s4_00') return y === 2000 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;

        // 25 Pesetas
        if (id === '25ptas_jc1_s4_90') return y === 1990 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s4_91') return y === 1991 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s4_92') return y === 1992 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s4_93') return y === 1993 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s4_94') return y === 1994 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s4_95') return y === 1995 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s4_96') return y === 1996 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s4_97') return y === 1997 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s4_98') return y === 1998 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s4_99') return y === 1999 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s4_00') return y === 2000 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_jc1_s4_01') return y === 2001 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;

        // 50 Pesetas
        if (id === '50ptas_jc1_s4_90') return y === 1990 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50ptas_jc1_s4_92') return y === 1992 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50ptas_jc1_s4_93') return y === 1993 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50ptas_jc1_s4_94') return y === 1994 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50ptas_jc1_s4_95') return y === 1995 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50ptas_jc1_s4_96') return y === 1996 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50ptas_jc1_s4_97') return y === 1997 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50ptas_jc1_s4_98') return y === 1998 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50ptas_jc1_s4_99') return y === 1999 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50ptas_jc1_s4_00') return y === 2000 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;

        // 100 Pesetas
        if (id === '100ptas_jc1_s4_92') return y === 1992 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '100ptas_jc1_s4_93') return y === 1993 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '100ptas_jc1_s4_94') return y === 1994 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '100ptas_jc1_s4_95') return y === 1995 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '100ptas_jc1_s4_96') return y === 1996 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '100ptas_jc1_s4_97') return y === 1997 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '100ptas_jc1_s4_98') return y === 1998 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '100ptas_jc1_s4_99') return y === 1999 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '100ptas_jc1_s4_00') return y === 2000 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '100ptas_jc1_s4_01') return y === 2001 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;

        // 200 Pesetas
        if (id === '200ptas_jc1_s4_90') return y === 1990 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s4_91') return y === 1991 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s4_92') return y === 1992 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s4_93') return y === 1993 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s4_94') return y === 1994 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s4_95') return y === 1995 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s4_96') return y === 1996 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s4_97') return y === 1997 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s4_98') return y === 1998 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s4_99') return y === 1999 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s4_00') return y === 2000 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '200ptas_jc1_s4_01') return y === 2001 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED; // Added consistent end for s4

        // 500 Pesetas
        if (id === '500ptas_jc1_s4') return (y >= 1993 && y <= 2001) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;


        // 2000 Pesetas
        if (id === '2000ptas_jc1_s4_94') return y === 1994 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '2000ptas_jc1_s4_95') return y === 1995 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '2000ptas_jc1_s4_96') return y === 1996 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '2000ptas_jc1_s4_97') return y === 1997 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '2000ptas_jc1_s4_98') return y === 1998 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '2000ptas_jc1_s4_99') return y === 1999 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '2000ptas_jc1_s4_00') return y === 2000 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '2000ptas_jc1_s4_01') return y === 2001 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
    }

    // 2. Estado Español (Franco) - Prioridad por ID
    if (id && id.includes('_franco')) {
        if (id === '5cts_franco') return [1940, 1941, 1945, 1953].includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10cts_franco_m1') return [1940, 1941, 1945, 1953].includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10cts_franco_m2') return y === 1959 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25cts_franco') return y === 1937 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50cts_franco_m1') return [1949, 1963].includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50cts_franco_m2') return y === 1966 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '1pta_franco_m1') return y === 1944 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '1pta_franco_m2') return [1946, 1947, 1953, 1963, 1966].includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '2.5ptas_franco') return y === 1953 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_franco_m1') return y === 1949 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '5ptas_franco_m2') return y === 1957 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25ptas_franco') return y === 1957 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50ptas_franco') return y === 1957 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '100ptas_franco') return y === 1966 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        return STATUS_NOT_ISSUED;
    }

    // 3. II República - Prioridad por ID
    if (id && (id.includes('_rep') || id === '50cts_rep')) {
        if (id === '5cts_rep') return y === 1937 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '10cts_rep') return y === 1938 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25cts_rep_34') return y === 1934 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '25cts_rep_38') return y === 1938 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '50cts_rep') return y === 1937 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '1pta_rep_33') return y === 1933 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id === '1pta_rep_37') return y === 1937 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;

        // Validation for variants
        if (variantId && SPAIN_VARIANTS[id]?.[y]) {
            const hasVariant = SPAIN_VARIANTS[id][y].some(vnt => vnt.id === variantId);
            if (hasVariant) {
                // Check if it is an E-87 Set variant
                if (variantId.endsWith('_87_e')) return STATUS_SET_ONLY;
                return STATUS_CIRCULATION;
            }
            return STATUS_NOT_ISSUED;
        }
        return STATUS_NOT_ISSUED;
    }

    // 4. Alfonso XIII (1886-1931)
    if (id && id.includes('_alfonso13')) {
        const allowedYears = SPAIN_ALFONSO_XIII_YEARS[id];
        if (allowedYears) {
            return allowedYears.includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        }
        return STATUS_NOT_ISSUED;
    }

    // 5. Alfonso XII (1873-1885) -> 1873 for 10ptas
    if (id && id.includes('_alfonso12')) {
        const allowedYears = SPAIN_ALFONSO_XII_YEARS[id];
        if (allowedYears) {
            return allowedYears.includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        }
        return STATUS_NOT_ISSUED;
    }

    // 6. Gobierno Provisional (1868-1874)
    if (id && id.includes('_prov')) {
        const allowedYears = SPAIN_PROVISIONAL_YEARS[id];
        if (allowedYears) {
            return allowedYears.includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        }
        return STATUS_NOT_ISSUED;
    }

    // 7. Lógica para Emisiones Locales de la Guerra Civil
    const localIds = [
        '50cts_asturias', '1pta_asturias', '2ptas_asturias', '1pta_euskadi', '2ptas_euskadi', '50cts_santander', '1pta_santander',
        '5cts_menorca', '10cts_menorca', '25cts_menorca', '1pta_menorca', '2.50ptas_menorca',
        '5cts_nulles', '10cts_nulles', '25cts_nulles', '50cts_nulles', '1pta_nulles',
        '10cts_olot', '15cts_olot', '50cts_arenys', '1pta_arenys', '25cts_ibi', '1pta_ibi',
        '25cts_ametlla', '50cts_ametlla', '1pta_ametlla', '50cts_arahal', '1pta_arahal', '2ptas_arahal',
        '25cts_lora', '25cts_marchena', '10cts_puebla', '25cts_puebla', '10cts_cazalla_sierra',
        '1pta_segarra_niquel', '1pta_segarra_cobre', '1pta_segarra_laton'
    ];
    if (id && localIds.includes(id)) {
        if (id.includes('lora') || id.includes('marchena')) return y === 1936 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id.includes('arahal')) return y === 1938 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (id.includes('cazalla_sierra') || id.includes('puebla')) return y === 1939 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        return y === 1937 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
    }

    // 5. Fallback para búsquedas genéricas por año/valor (Legacy support & Matrix view generic)
    if (y >= 1937 && y <= 1975) {
        if (v === 0.05) return [1940, 1941, 1945, 1953].includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (v === 0.10) return [1940, 1941, 1945, 1953, 1959].includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (v === 0.25) return y === 1937 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (v === 0.50) return [1949, 1963, 1966].includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (v === 1.0) return [1944, 1946, 1947, 1953, 1963, 1966].includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (v === 2.5) return y === 1953 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (v === 5.0) return [1949, 1957].includes(y) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (v === 25.0) return y === 1957 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (v === 50.0) return y === 1957 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (v === 100.0) return y === 1966 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        return STATUS_NOT_ISSUED;
    }

    if (y >= 1931 && y <= 1939) {
        if (y === 1938) return [0.10, 0.25].includes(v) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (y === 1937) return [0.05, 0.50, 1.0].includes(v) ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (y === 1934) return v === 0.25 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        if (y === 1933) return v === 1.0 ? STATUS_CIRCULATION : STATUS_NOT_ISSUED;
        return STATUS_NOT_ISSUED;
    }

    return STATUS_CIRCULATION;
};

/**
 * Robustly finds a catalog price for a Spanish coin.
 * @param {Object} item 
 * @returns {Object|null} { price: number, isGradeSpecific: boolean }
 */
export const getSpainCoinPrice = (item) => {
    const { variantId, denomId, year, value, condition } = item;
    const yr = parseInt(year);
    const v = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : parseFloat(value);

    // Normalize condition for grade-specific lookup
    let cond = (condition || 'MBC').toUpperCase();
    if (cond === 'UNC' || cond === 'SC') cond = 'SC';

    // 1. Check Variants First (Higher priority)
    if (denomId && yr && SPAIN_VARIANTS[denomId]?.[yr]) {
        const variants = SPAIN_VARIANTS[denomId][yr];
        let match = null;
        if (variantId) {
            match = variants.find(vObj => vObj.id === variantId);
        } else if (variants.length === 1) {
            // If only one variant (std), use it
            match = variants[0];
        }

        if (match && match.prices) {
            const gradePrice = match.prices[cond] || match.prices['MBC'] || match.prices['EBC'] || match.prices['SC'];
            if (gradePrice !== undefined) {
                return { price: gradePrice, isGradeSpecific: !!match.prices[cond] };
            }
        }
    }

    // 2. Check Base Lists
    const allLists = [
        SPAIN_JC1_DENOMINATIONS,
        SPAIN_FRANCO_DENOMINATIONS,
        SPAIN_REPUBLIC_DENOMINATIONS,
        SPAIN_ALFONSO_XIII_DENOMINATIONS,
        SPAIN_ALFONSO_XII_DENOMINATIONS,
        SPAIN_PROVISIONAL_DENOMINATIONS,
        SPAIN_CW_LOCAL_DENOMINATIONS,
        SPAIN_PESETA_DENOMINATIONS
    ];

    for (const list of allLists) {
        // Find by denomId or value (if denomId missing)
        const denom = list.find(d => (denomId && d.id === denomId) || (!denomId && d.value === v));
        if (denom) {
            // A. Check year-specific prices
            if (denom.prices && yr && denom.prices[yr] !== undefined) {
                const p = denom.prices[yr];
                if (typeof p === 'object') {
                    const gp = p[cond] || p['MBC'];
                    if (gp !== undefined) return { price: gp, isGradeSpecific: !!p[cond] };
                }
                return { price: p, isGradeSpecific: false };
            }
            // B. Fallback to estimatedValue property
            if (denom.estimatedValue !== undefined) {
                return { price: denom.estimatedValue, isGradeSpecific: false };
            }
        }
    }

    return null;
};

export const getEmissionStatus = getSpainCoinStatus;
