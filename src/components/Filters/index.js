import React from 'react';

function stateUpdater(stateName, setListReverseMark, listReverseMark ) {
    return prevState => {
        prevState === stateName ? setListReverseMark(!listReverseMark) : setListReverseMark(false);
        return stateName;
    };
}

export default function Filters({setListFilterType, setListReverseMark, listReverseMark}) {
    return (
        <div className="filtersWrapper">
            <button onClick={() => {
                setListFilterType(stateUpdater('NAME', setListReverseMark, listReverseMark));
            }}>By name
            </button>
            <button onClick={() => {
                setListFilterType(stateUpdater('DATE', setListReverseMark, listReverseMark));
            }}>By date
            </button>
        </div>
    )
}
