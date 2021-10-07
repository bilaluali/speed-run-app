import * as React from 'react';
import { useSelector } from 'react-redux';

import RunTable from '../components/RunTable';
import EnhancedTableRowCell from '../../material-ui/EnhancedTableRowCell';
import RunTableVideoRowCell from '../components/RunTableVideoRowCell';
import RunTableNameRowCell from './RunTableNameRowCell';
import * as models from '../../models/redux';


const RunTableContainer = ({
    gameId,
    ...props
}) => {

    const runs = useSelector(
        state => models.run.selectors.filterBy(state, { 
            game: gameId 
        }) || []
    );

    const columns = useTableColumns();
    const rows = useTableRows({
        runs,
        columns,
    });
        
    return (
        <RunTable
            {...props}
            columns={columns}
            rows={rows}
        />
    );
};

export default RunTableContainer;


const useTableColumns = () => (
    React.useMemo(() => [
        'player',
        'time',
        'video'
    ], [])
);

const useTableRows = ({
    runs,
    columns,
}) => (
    React.useMemo(() => runs.map(({
        users,
        time,
        videos 
    }) => [
        { 
            RowCell: RunTableNameRowCell,
            RowCellProps: {
                id: columns[0],
                userId: users[0] 
            } 
        },
        { 
            RowCell: EnhancedTableRowCell,
            RowCellProps: {
                id: columns[1],
                children: formatTime(time)
            } 
        },
        { 
            RowCell: RunTableVideoRowCell,
            RowCellProps: {
                id: columns[2],
                video: videos[0]
            } 
        },
    ])
    , [ runs, columns])
);

const formatTime = secs =>
    `${new Date(secs * 1000).toISOString().substr(11, 8)}s`;