import * as React from 'react';
import { useSelector } from 'react-redux';

import EnhancedTableRowCell from '../../material-ui/EnhancedTableRowCell';
import useUserQuery from '../../user/modules/user-overview/routes/hooks/useUserQuery';
import * as models from '../../models/redux';


const RunTableNameRowCell = ({
    userId,
    ...props
}) => {
    // NOTE: I would prefer to make the query on the route
    // component. However app doesn't support neither the EP
    // API_PATH/users, nor a list of ids as route param.
    useUserQuery({ userId });

    const user = useSelector(
        state => models.user.selectors.filterBy(state, { 
            id: userId 
        })[0]
    );
        
    return (
        <EnhancedTableRowCell
            {...props}
        >
            {user?.name || "Unknown"}
        </EnhancedTableRowCell>
    );
};

export default RunTableNameRowCell;