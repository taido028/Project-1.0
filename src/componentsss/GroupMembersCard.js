import Card from "react-bootstrap/Card";

import { GroupMembersTable } from './GroupMembersTable';

/**
 * Renders a card containing a list of group members.
 */
export const GroupMembersCard = ({group, actions}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    List of Users
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <GroupMembersTable group={group} actions={actions}/>
            </Card.Body>
        </Card>
    )
}