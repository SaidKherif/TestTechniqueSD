import React, {
    useState
} from 'react';

import {
    ScrollView,
} from 'react-native';

import {
    FetchTweetData
} from './src/component/FetchTweetData';

import {
    RenderTweetData
} from './src/component/RenderTweetData';

import {
    Container,
    SearchText,
    SearchInput,
    ErrorText
} from './src/Styles/AppStyles';

let interval_id = 0;

const App = (props) => {

    const [search_word, setSearch_word] = useState();
    const [search_response, setSearch_response] = useState();
    const [error, setError] = useState();

    return (
        <Container>
            <SearchText>Recherche Twitter</SearchText>
            <SearchInput
                placeholder="Search"
                value={search_word}
                onChangeText={(value) => {
                    setSearch_word(value);
                    clearInterval(interval_id);
                    interval_id = 0;
                }}
                onSubmitEditing={() => {(
                    FetchTweetData(search_word)
                    .then((response) => setSearch_response(response))
                    .catch((error) => setError(error)),
                    interval_id = setInterval(() => {
                    FetchTweetData(search_word)
                    .then((response) => setSearch_response(response))
                    .catch((error) => setError(error))
                    }, 10000)
                )}}
             />
             <ScrollView>
                {error ? <ErrorText>{error}</ErrorText> : null}
                {search_response ? RenderTweetData(search_response) : null}
            </ScrollView>
             
        </Container>
    )

}

export default App