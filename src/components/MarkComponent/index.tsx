import React, {useMemo, useState} from "react";
import {MarkType} from "../ResizeImage";
import * as S from "./styled";
import {useStore} from "effector-react";
import {changeMarks, size$} from "../../models/resizeImage";
import {Icon} from "../Icon";
import {ReactComponent as OkIcon} from "../../assets/svg/ok.svg";
import {ReactComponent as EditIcon} from "../../assets/svg/edit.svg";
import {ReactComponent as DeleteIcon} from "../../assets/svg/delete.svg";

interface Props {
  mark: MarkType;
}

export function MarkComponent({mark}: Props) {
  const {imageWidth, imageHeight, marks, imageTop, imageLeft} = useStore(size$);
  const {top, left, text, id} = mark;
  const [edit, setEdit] = useState<boolean>(true);
  const [value, setValue] = useState<string>(text);
  const topMark = useMemo(() => imageHeight * top + imageTop, [imageHeight, imageTop]);
  const leftMark = useMemo(() => imageWidth * left + imageLeft, [imageWidth, imageLeft]);

  function onKeyPress(event: React.KeyboardEvent) {
    if(event.key === 'Enter') {
      const index = marks.findIndex((item) => item.id === id);
      marks[index].text = value;
      changeMarks(marks);
      setEdit(false)
    }
  }

  function saveMark() {
    const index = marks.findIndex((item) => item.id === id);
    marks[index].text = value;
    changeMarks(marks);
    setEdit(false)
  }

  return <S.MarkContainer top={topMark} left={leftMark}>
    {edit && <>
      <input type='text' value={value} autoFocus onChange={(e) => setValue(e.target.value)} onKeyPress={onKeyPress}/>
      <S.StyledButton type='submit' onClick={saveMark} disabled={text === value}>
        <Icon source={OkIcon} width={15} height={15} />
      </S.StyledButton>
    </>}
    {!edit && <><span>{text}</span> <S.StyledButton onClick={() => setEdit(true)}><Icon source={EditIcon} width={15} height={15}/></S.StyledButton></>}
    <S.StyledButton onClick={() => changeMarks(marks.filter((item) => item.id !== id))}>
      <Icon source={DeleteIcon} width={15} height={15}/>
    </S.StyledButton>
  </S.MarkContainer>
}
