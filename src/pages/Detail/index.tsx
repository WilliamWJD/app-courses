import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  Image,
  SubHeader,
  ViewTitle,
  Title,
  TeacherView,
  ImageTeacher,
  TeacherName,
  Lessons,
  ClassDetail,
  Time,
  TimeText,
  LessonQuantity,
  LessonQuantityText,
  LessonTitle,
  LessonItem,
  LessonItemId,
  LessonItemDescription,
  LessonItemDescriptionText,
  LessonItemDescriptionTime,
  FeatherIcon
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

interface IDetail {
  title: string;
  background: string;
  background_color: string;
  teacher: string;
  lessons: number;
  teacher_avatar:string;
  duration:number;
  class: Array<{
    id: number;
    title: string;
    time: number;
  }>
}

const Detail: React.FC = ({ route }: any) => {
  const [detail, setDetail] = useState<IDetail>()

  useEffect(() => {
    const { item } = route.params;
    setDetail(item)
  }, [])

  return (
    <Container>
      <Header color={`${detail?.background_color}`}>
        <Image source={{ uri: `${detail?.background}` }} resizeMode="contain" />
      </Header>

      <SubHeader>
        <ViewTitle>
          <Title>{detail?.title}</Title>
          <Feather name="bookmark" size={20} color="#f39c12" />
        </ViewTitle>

        <TeacherView>
          <ImageTeacher source={{ uri: `${detail?.teacher_avatar}` }} />
          <TeacherName>{detail?.teacher}</TeacherName>
        </TeacherView>

        <ClassDetail>
          <Time>
            <Feather name="clock" color="#7159c1" size={18} />
            <TimeText>{detail?.duration} hours</TimeText>
          </Time>

          <LessonQuantity>
            <Feather name="clipboard" color="#7159c1" size={18} />
            <LessonQuantityText>{detail?.lessons} Lessons</LessonQuantityText>
          </LessonQuantity>
        </ClassDetail>
      </SubHeader>

      <Lessons>
        <LessonTitle>Lessons</LessonTitle>
        <ScrollView>
          {detail?.class.map(item => (
            <LessonItem key={item.id}>
              <LessonItemId>{item.id}</LessonItemId>
              <LessonItemDescription>
                <LessonItemDescriptionText>{item.title}</LessonItemDescriptionText>
                <LessonItemDescriptionTime>{item.time} min</LessonItemDescriptionTime>
              </LessonItemDescription>
              <FeatherIcon name="play" size={18} color="#7159c1" />
            </LessonItem>
          ))}
        </ScrollView>
      </Lessons>
    </Container>
  )
}

export default Detail;