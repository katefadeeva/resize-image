import React, {useMemo, useState} from 'react';
import {useStore} from 'effector-react';
import * as S from './styled';
import {LabelType} from '../../../types/resizeImage';
import {changeLabels, imageData$} from '../../../models/resizeImage';
import {Icon} from '../../Icon';
import {ReactComponent as OkIcon} from '../../../assets/svg/ok.svg';
import {ReactComponent as EditIcon} from '../../../assets/svg/edit.svg';
import {ReactComponent as DeleteIcon} from '../../../assets/svg/delete.svg';

interface Props {
  label: LabelType;
}

export function LabelComponent({label}: Props) {
  const {imageWidth, imageHeight, labels, positionImageTop, positionImageLeft} =
    useStore(imageData$);
  const {topCoordinateInPercent, leftCoordinateInPercent, text, id} = label;
  const [edit, setEdit] = useState<boolean>(true);
  const [value, setValue] = useState<string>(text);
  const topDistanceLabel = useMemo(
    () => imageHeight * topCoordinateInPercent + positionImageTop,
    [imageHeight, positionImageTop, topCoordinateInPercent],
  );
  const leftDistanceLabel = useMemo(
    () => imageWidth * leftCoordinateInPercent + positionImageLeft,
    [imageWidth, positionImageLeft, leftCoordinateInPercent],
  );

  const saveLabel = () => {
    const index = labels.findIndex((item) => item.id === id);
    labels[index].text = value;
    changeLabels(labels);
    setEdit(false);
  };

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      saveLabel();
    }
  };

  return (
    <S.LabelContainer top={topDistanceLabel} left={leftDistanceLabel}>
      {edit && (
        <>
          <input
            type='text'
            placeholder='Label name'
            value={value}
            autoFocus
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={onKeyPress}
          />
          <S.StyledButton type='submit' onClick={saveLabel} disabled={text === value}>
            <Icon source={OkIcon} width={15} height={15} />
          </S.StyledButton>
        </>
      )}
      {!edit && (
        <>
          <span>{text}</span>
          <S.StyledButton onClick={() => setEdit(true)}>
            <Icon source={EditIcon} width={15} height={15} />
          </S.StyledButton>
        </>
      )}
      <S.StyledButton onClick={() => changeLabels(labels.filter((item) => item.id !== id))}>
        <Icon source={DeleteIcon} width={15} height={15} />
      </S.StyledButton>
    </S.LabelContainer>
  );
}
