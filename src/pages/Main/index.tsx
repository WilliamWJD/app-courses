import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons'

import {
    Container,
    Profile,
    Text,
    Image,
    Title,
    InputSearch,
    Input,
    ButtonSearch,
    LastCourse,
    LastCourseTitle,
    ButtonContinue,
    ButtonContinueText,
    LastCourseImage,
    TopCourse,
    TopCourseTitle,
    TopCourseItem,
    TopCourseItemText,
    TopCourseItemImage
} from './styles';

import { ScrollView } from 'react-native';

import data from '../../../data.json';

const Main: React.FC = () => {
    const [lastCourse, setLastCourse] = useState()

    const navigation = useNavigation();

    useEffect(()=>{
        const response = data.find(item=>item.last_view)
        setLastCourse(response)
    },[])

    return (
        <Container>
            <Profile>
                <Text>Hi, William</Text>
                <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/31516475?s=460&u=e2be85f1b7be7a9cd728c0fe9fd0ad8552d9cd57&v=4' }} />
            </Profile>

            <Title>Find a perfect course for you</Title>

            <InputSearch>
                <Input />
                <ButtonSearch>
                    <Feather name="search" color="#fff" size={19} />
                </ButtonSearch>
            </InputSearch>

            <ScrollView showsVerticalScrollIndicator={false}>
                <LastCourse>
                    <LastCourseTitle>
                        {lastCourse.title}
                    </LastCourseTitle>

                    <ButtonContinue onPress={()=>navigation.navigate('Detail',{item:lastCourse})}>
                        <ButtonContinueText>Continue</ButtonContinueText>
                        <Feather name="play-circle" color="#fff" size={15} />
                    </ButtonContinue>

                    <LastCourseImage source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} />
                </LastCourse>

                <TopCourse>
                    <TopCourseTitle>Top Courses</TopCourseTitle>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {data.filter(i=>!i?.last_view).map(item => (
                            <TopCourseItem 
                                key={item.title} 
                                colorItem={item.background_color}
                                onPress={()=>navigation.navigate('Detail', { item })}
                            >
                                <TopCourseItemText>
                                    {item.title}
                                </TopCourseItemText>
                                <TopCourseItemImage source={{ uri: `${item.background}` }}  resizeMode="contain"/>
                            </TopCourseItem>
                        ))}
                    </ScrollView>
                </TopCourse>
            </ScrollView>
        </Container>
    )
}

export default Main;