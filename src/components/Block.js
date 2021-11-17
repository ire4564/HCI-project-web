import { Row, Col, Container} from "react-bootstrap";

const makeBlock_Col = (index) => {
    var Blocks = [];
    //가로는 12칸, 세로는 10칸으로 divide
    for(let i=0; i<12; i++) {
        var name = `block${index}${i}`;
        Blocks.push(<Col 
            key={`${index}${i}`} 
            className="Block-Style"
            ref={(ref) => { eval("this." + name + "= ref")}}>
                {`${index}${i}`}
            </Col>);
    }
    return Blocks;
}

const makeBlock_Row = () => {
    var result = [];
    var oneRow = (index) => {
        return (
            <Row key={`row${index}`} className="No-Margin">
                {makeBlock_Col(index)}
            </Row>
        );
    }
    for(let i=0; i<19; i++) {
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