import { Row, Col, Container} from "react-bootstrap";

const makeBlock_Col = (index) => {
    var Blocks = [];
    //가로는 12칸, 세로는 10칸으로 divide
    for(let i=0; i<12; i++) {
        Blocks.push(<Col key={`${index}${i}`} className="Block-Style">{`${index}, ${i}`}</Col>);
    }
    return Blocks;
}

const makeBlock_Row = () => {
    var result = [];
    var oneRow = (index) => {
        return (
            <Row className="No-Margin">
                {makeBlock_Col(index)}
            </Row>
        );
    }
    for(let i=0; i<10; i++) {
        result.push(oneRow(i));
    }
    return result;
}

const Block = () => {
    return (
        <Container className="Front-Block">
           {makeBlock_Row()}
        </Container>
    );
}

export default Block;