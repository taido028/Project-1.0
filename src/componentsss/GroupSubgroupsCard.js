import Card from "react-bootstrap/Card";


/**
 * Renders a card containing a list of group members.
 */
export const GroupSubgroupsCard = ({group, actions}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Podskupiny
                </Card.Title>
            </Card.Header>
            <Card.Body>
                {JSON.stringify(group.users)}
            </Card.Body>
        </Card>
    )
}