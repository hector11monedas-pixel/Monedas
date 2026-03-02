import React, { useEffect, useState, useRef, memo } from 'react';
import { List } from 'react-window';

const Row = memo(({ index, style, ...props }) => {
    // In react-window v2, rowProps are spread onto the component
    const { items, columnCount, gap, renderItem, itemHeight } = props;
    const startIndex = index * columnCount;
    const rowItems = items.slice(startIndex, startIndex + columnCount);

    const rowStyle = {
        ...style,
        width: '100%',
        display: 'flex',
        gap: `${gap}px`,
        paddingRight: `${gap}px`
    };

    return (
        <div style={rowStyle}>
            {rowItems.map((item, i) => (
                <div key={i} style={{ flex: 1, minWidth: 0, height: itemHeight }}>
                    {renderItem(item)}
                </div>
            ))}
            {/* Fillers */}
            {Array.from({ length: columnCount - rowItems.length }).map((_, i) => (
                <div key={`empty-${i}`} style={{ flex: 1, minWidth: 0 }} />
            ))}
        </div>
    );
});

const VirtualGrid = ({ items, renderItem, itemHeight = 200, minItemWidth = 150, gap = 16 }) => {
    const containerRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!containerRef.current) return;
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                setSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const columnCount = Math.max(1, Math.floor((size.width + gap) / (minItemWidth + gap)));
    const rowCount = Math.ceil(items.length / columnCount);
    const rowHeight = itemHeight + gap;

    const itemData = React.useMemo(() => ({
        items,
        columnCount,
        gap,
        renderItem,
        itemHeight
    }), [items, columnCount, gap, renderItem, itemHeight]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '400px', flex: 1 }}>
            {size.width > 0 && size.height > 0 && (
                <List
                    height={size.height}
                    rowCount={rowCount}
                    rowHeight={rowHeight}
                    width={size.width}
                    rowComponent={Row}
                    rowProps={itemData}
                    style={{ overflowX: 'hidden' }}
                />
            )}
        </div>
    );
};

export default VirtualGrid;
