import React, { PureComponent } from 'react';
import { ListGroup } from 'react-bootstrap';
import Player from '../player';
import './variants-block.scss';

class VariantsBlock extends PureComponent {
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
  }

  render() {
    const { ostData, indicatorClasses, src, click } = this.props;
    return (
      <>
        <ListGroup className="ost-variants">
          {ostData.map(({ filmName }, id) => (
            <ListGroup.Item
              key={id}
              onClick={() => click(id, this.playerRef)}>
              <span className={indicatorClasses[id]}></span>
              {filmName}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Player
          ref={this.playerRef}
          hidden={true}
          autoplay={true}
          src={src} />
      </>
    );
  }
}

export default VariantsBlock;
