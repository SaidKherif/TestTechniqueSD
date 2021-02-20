import moment from 'moment'
import TwitterTextView from 'react-native-twitter-textview'
import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import {
    Container,
    StyledTwittertextView,
    SubContainer,
    ProfileImage,
    TweetContainer,
    TweetSubContainer,
    UsernameDisplay,
    TweetDate
} from '../Styles/RenderTweetDataStyles';


function Calculate_tweet_time(created_at){
    
        let result_date = '';
        var now = moment();
        let tweet_date = moment(created_at);

        date_diff = now.diff(tweet_date, "minutes")
        result_date = `${date_diff.toString()} m`

        if (date_diff == 0) {
          date_diff = now.diff(tweet_date, "seconds")
          result_date = `${date_diff.toString()} s`
        }
        if (date_diff >= 60){
          date_diff = now.diff(tweet_date, "hours")
          // ES6 tech concat
          result_date = `${date_diff.toString()} hr`
      }
      
      return result_date
}

export const RenderTweetData = (data) => {
    if (typeof(data.statuses) !== 'undefined')
    {
        return data.statuses.map((data, i) => {
            
            let mydate = Calculate_tweet_time(data.created_at);

            return (
                <Container key={i}>
                    <SubContainer>
                        <ProfileImage
                            source={{uri: data.user.profile_image_url}}
                        />
                        <TweetContainer>
                            <TweetSubContainer>
                                <UsernameDisplay> {data.user.name}  @{data.user.screen_name}</UsernameDisplay>
                                <TweetDate>{mydate}</TweetDate>   
                            </TweetSubContainer>
                            <StyledTwittertextView>{data.text}</StyledTwittertextView>
                        </TweetContainer>
                    </SubContainer>
                </Container>
            )
        })
    }
    else {
        return <View><Text>We have an error to communicate with api</Text></View>
    }
}


/*
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(245, 245, 250, 0.4)',
        margin: 28
    },
        sub_container:{
        flexDirection: 'row'
    },
    profile_image:{
        width: 38,
        height: 38
    },
    tweet_container:{
        flexDirection: 'column',
        flexShrink:1,
        padding: 5,
        flex: 1
    },
    tweet_sub_container:{
        flexDirection: 'row',
        alignSelf: 'stretch',
        flex: 1
    },
    username:{
        fontSize: 14,
        flex: 8,
        fontWeight: 'bold'
    },
    tweet_date:{
        flex: 1,
        textAlign: 'right'
    },
    tweet_content:{
          flex: 1
    }
})*/