import React from 'react';
import { Row, Col } from 'react-bootstrap';

import QuestionBlock from '../../components/question-block';
import VariantsBlock from '../../components/variants-block';
import Details from '../../components/details';
import Button from '../../components/button';

const GameBlocks = ({
  ostData,
  ostGroups,
  currentGroupId,
  correctAnswerId,
  chosenAnswerId,
  indicatorClasses,
  isRoundGuessed,
  sound,
  handleChooseOst,
  handleGoNextLevel,
}) => {
  const groupName = ostGroups[currentGroupId];
  const groupData = ostData[groupName];
  if (!ostData) return;
  return (
    <>
      <QuestionBlock 
        correctAnswerId={isRoundGuessed ? correctAnswerId : null}
        groupData={groupData}
        correctAnswerAudio={groupData[correctAnswerId].audio}
        isRoundGuessed={isRoundGuessed} />
      <Row>
        <Col>
          <VariantsBlock
            src={sound}
            ostData={groupData}
            correctAnswerId={correctAnswerId}
            indicatorClasses={indicatorClasses}
            click={handleChooseOst} />
        </Col>
        <Col>
          <Details
            isAnswerChosen={chosenAnswerId}
            ostData={groupData[chosenAnswerId]} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            click={handleGoNextLevel}
            disabled={!isRoundGuessed}>
            Следующий уровень
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default React.memo(GameBlocks);
